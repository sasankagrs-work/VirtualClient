// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient.Actions
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Extensions.DependencyInjection;
    using VirtualClient.Common;
    using VirtualClient.Common.Extensions;
    using VirtualClient.Common.Platform;
    using VirtualClient.Common.Telemetry;
    using VirtualClient.Contracts;

    /// <summary>
    /// The CoreMarkPro workload executor.
    /// </summary>
    [UnixCompatible]
    [WindowsCompatible]
    public class CoreMarkProExecutor : VirtualClientComponent
    {
        private ISystemManagement systemManagement;
        private IPackageManager packageManager;

        /// <summary>
        /// Constructor for <see cref="CoreMarkProExecutor"/>
        /// </summary>
        /// <param name="dependencies">Provides required dependencies to the component.</param>
        /// <param name="parameters">Parameters defined in the profile or supplied on the command line.</param>
        public CoreMarkProExecutor(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters)
             : base(dependencies, parameters)
        {
            this.systemManagement = this.Dependencies.GetService<ISystemManagement>();
            this.packageManager = this.systemManagement.PackageManager;
        }

        /// <summary>
        /// Allos overwrite to Coremark process thread count. 
        /// </summary>
        public int ThreadCount
        {
            get
            {
                // Default to system logical core count, but overwritable with parameters.
                CpuInfo cpuInfo = this.systemManagement.GetCpuInfoAsync(CancellationToken.None).GetAwaiter().GetResult();
                int threadCount = cpuInfo.LogicalCoreCount;

                if (this.Parameters.TryGetValue(nameof(this.ThreadCount), out IConvertible value) && value != null)
                {
                    threadCount = value.ToInt32(CultureInfo.InvariantCulture);
                }

                return threadCount;
            }
        }

        private string CoreMarkProDirectory
        {
            get
            {
                return this.PlatformSpecifics.GetPackagePath(this.PackageName);
            }
        }

        /// <summary>
        /// Executes CoreMarkPro
        /// </summary>
        protected override async Task ExecuteAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            // guide: https://github.com/eembc/coremark-pro/blob/main/docs/EEMBC%20Symmetric%20Multicore%20Benchmark%20User%20Guide%202.1.4.pdf
            // make TARGET=linux64 XCMD='-c4' certify-all
            // Even when using cygwin, the TARGET is still linux64.
            string argument = @$"TARGET=linux64 XCMD='-c{this.ThreadCount}' certify-all";
            this.StartTime = DateTime.UtcNow;
            string output = string.Empty;
            switch (this.Platform)
            {
                case PlatformID.Unix:
                    using (IProcessProxy process = await this.ExecuteCommandAsync("make", argument, this.CoreMarkProDirectory, telemetryContext, cancellationToken))
                    {
                        if (!cancellationToken.IsCancellationRequested)
                        {
                            if (process.IsErrored())
                            {
                                await this.LogProcessDetailsAsync(process, telemetryContext, "CoreMark Pro", logToFile: true);
                                process.ThrowIfWorkloadFailed();
                            }

                            await this.LogProcessDetailsAsync(process, telemetryContext, "CoreMark Pro", logToFile: true);
                            output = process.StandardOutput.ToString();
                        }
                    }

                    break;

                case PlatformID.Win32NT:
                    DependencyPath cygwinPackage = await this.packageManager.GetPackageAsync("cygwin", CancellationToken.None)
                        .ConfigureAwait(false);

                    using (IProcessProxy process = await this.ExecuteCygwinBashAsync($"make {argument}", this.CoreMarkProDirectory, cygwinPackage.Path, telemetryContext, cancellationToken))
                    {
                        if (!cancellationToken.IsCancellationRequested)
                        {
                            if (process.IsErrored())
                            {
                                await this.LogProcessDetailsAsync(process, telemetryContext, "CoreMark Pro", logToFile: true);
                                process.ThrowIfWorkloadFailed();
                            }

                            await this.LogProcessDetailsAsync(process, telemetryContext, "CoreMark Pro", logToFile: true);
                            output = process.StandardOutput.ToString();
                        }
                    }

                    break;
            }

            this.EndTime = DateTime.UtcNow;

            CoreMarkProMetricsParser parser = new CoreMarkProMetricsParser(output);
            IList<Metric> metrics = parser.Parse();
            this.Logger.LogMetrics(
                toolName: "CoreMarkPro",
                scenarioName: this.Scenario,
                this.StartTime,
                this.EndTime,
                metrics,
                metricCategorization: this.Scenario,
                scenarioArguments: this.Parameters.ToString(),
                this.Tags,
                telemetryContext);
        }
    }
}