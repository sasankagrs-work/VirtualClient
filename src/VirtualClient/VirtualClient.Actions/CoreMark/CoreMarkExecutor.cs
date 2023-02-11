// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient.Actions
{
    using System;
    using System.Collections.Generic;
    using System.IO.Abstractions;
    using System.Runtime.InteropServices;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.DependencyInjection;
    using VirtualClient.Common;
    using VirtualClient.Common.Extensions;
    using VirtualClient.Common.Platform;
    using VirtualClient.Common.Telemetry;
    using VirtualClient.Contracts;

    /// <summary>
    /// The CoreMark workload executor.
    /// </summary>
    [UnixCompatible]
    public class CoreMarkExecutor : VirtualClientComponent
    {
        private const string CoreMarkRunCommand = "make";
        private const string CoreMarkOutputFile1 = "run1.log";
        private const string CoreMarkOutputFile2 = "run2.log";

        /// <summary>
        /// Constructor for <see cref="CoreMarkExecutor"/>
        /// </summary>
        /// <param name="dependencies">Provides required dependencies to the component.</param>
        /// <param name="parameters">Parameters defined in the profile or supplied on the command line.</param>
        public CoreMarkExecutor(IServiceCollection dependencies, IDictionary<string, IConvertible> parameters)
             : base(dependencies, parameters)
        {
        }

        /// <summary>
        /// Allos overwrite to Coremark process thread count. 
        /// </summary>
        public int ThreadCount
        {
            get
            {
                // Default to system core count, but overwritable with parameters.
                return this.Parameters.GetValue<int>(
                    nameof(CoreMarkExecutor.ThreadCount),
                    this.Dependencies.GetService<ISystemManagement>().GetSystemCoreCount());
            }
        }

        /// <summary>
        /// The path to CoreMark output file #1
        /// </summary>
        protected string PackagePath { get; set; }

        /// <summary>
        /// The path to CoreMark output file #1
        /// </summary>
        protected string OutputFile1Path { get; set; }

        /// <summary>
        /// The path to CoreMark output file #2
        /// </summary>
        protected string OutputFile2Path { get; set; }

        /// <summary>
        /// Executes CoreMark
        /// </summary>
        protected override async Task ExecuteAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            using (BackgroundOperations profiling = BackgroundOperations.BeginProfiling(this, cancellationToken))
            {
                string commandLineArguments = this.GetCommandLineArguments();
                await this.ExecuteWorkloadAsync(CoreMarkExecutor.CoreMarkRunCommand, commandLineArguments, telemetryContext, cancellationToken);
            }
        }

        /// <summary>
        /// Initializes the workload environment.
        /// </summary>
        protected override Task InitializeAsync(EventContext telemetryContext, CancellationToken cancellationToken)
        {
            this.CheckPlatformSupport();

            this.PackagePath = this.GetPackagePath(this.PackageName);
            this.OutputFile1Path = this.Combine(this.PackagePath, CoreMarkExecutor.CoreMarkOutputFile1);
            this.OutputFile2Path = this.Combine(this.PackagePath, CoreMarkExecutor.CoreMarkOutputFile2);

            return Task.CompletedTask;
        }

        private async Task ExecuteWorkloadAsync(string pathToExe, string commandLineArguments, EventContext telemetryContext, CancellationToken cancellationToken)
        {
            using (IProcessProxy process = await this.ExecuteCommandAsync(pathToExe, commandLineArguments, this.PackagePath, telemetryContext, cancellationToken, runElevated: true))
            {
                if (!cancellationToken.IsCancellationRequested)
                {
                    await this.LogProcessDetailsAsync(process, telemetryContext, "CoreMark")
                        .ConfigureAwait(false);

                    process.ThrowIfErrored<WorkloadException>(errorReason: ErrorReason.WorkloadFailed);

                    await this.CaptureMetricsAsync(process, commandLineArguments, telemetryContext, cancellationToken)
                        .ConfigureAwait(false);
                }
            }

            this.Logger.LogTraceMessage($"CoreMark process {pathToExe} {commandLineArguments}", telemetryContext);
        }

        private string GetCommandLineArguments()
        {
            return @$"XCFLAGS=""-DMULTITHREAD={this.ThreadCount} -DUSE_PTHREAD"" REBUILD=1 LFLAGS_END=-pthread";
        }

        private async Task CaptureMetricsAsync(IProcessProxy process, string commandArguments, EventContext telemetryContext, CancellationToken cancellationToken)
        {
            try
            {
                if (!cancellationToken.IsCancellationRequested)
                {
                    IFileSystem fileSystem = this.Dependencies.GetService<IFileSystem>();
                    foreach (string resultsFile in new string[] { this.OutputFile1Path, this.OutputFile2Path })
                    {
                        string results = await fileSystem.File.ReadAllTextAsync(resultsFile)
                            .ConfigureAwait(false);

                        await this.LogProcessDetailsAsync(process, telemetryContext, "CoreMark", results, logToFile: true)
                            .ConfigureAwait(false);

                        if (!string.IsNullOrWhiteSpace(results))
                        {
                            CoreMarkMetricsParser parser = new CoreMarkMetricsParser(results);
                            IList<Metric> metrics = parser.Parse();

                            this.Logger.LogMetrics(
                                toolName: "CoreMark",
                                scenarioName: "CoreMark",
                                process.StartTime,
                                process.ExitTime,
                                metrics,
                                null,
                                commandArguments,
                                this.Tags,
                                telemetryContext);
                        }
                    }
                }
            }
            catch (Exception exc)
            {
                this.Logger.LogErrorMessage(exc, EventContext.Persisted());
            }
        }

        private void CheckPlatformSupport()
        {
            switch (this.Platform)
            {
                case PlatformID.Unix:
                    break;
                default:
                    throw new WorkloadException(
                        $"The CoreMark workload is not supported on the current platform/architecture " +
                        $"{PlatformSpecifics.GetPlatformArchitectureName(this.Platform, this.CpuArchitecture)}." +
                        $" Supported platform/architectures include: " +
                        $"{PlatformSpecifics.GetPlatformArchitectureName(PlatformID.Unix, Architecture.X64)}, " +
                        $"{PlatformSpecifics.GetPlatformArchitectureName(PlatformID.Unix, Architecture.Arm64)}",
                        ErrorReason.PlatformNotSupported);
            }
        }
    }
}