"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"design",sidebar_position:2},i="Virtual Client Platform Design",l={unversionedId:"overview/design",id:"overview/design",title:"Virtual Client Platform Design",description:"The following sections cover important design aspects of the Virtual Client platform application. This document is written for engineers and technical roles who",source:"@site/docs/overview/design.md",sourceDirName:"overview",slug:"/overview/design",permalink:"/docs/overview/design",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/overview/design.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"design",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/overview/"},next:{title:"Features",permalink:"/docs/overview/features"}},s={},p=[{value:"Application Concepts",id:"application-concepts",level:2},{value:"Workload/Test Profiles",id:"workloadtest-profiles",level:4},{value:"Monitoring Profiles",id:"monitoring-profiles",level:4},{value:"Workload Dependency Packages",id:"workload-dependency-packages",level:4},{value:"Multi-Instance API Support",id:"multi-instance-api-support",level:4},{value:"Telemetry Support",id:"telemetry-support",level:4},{value:"Data Correlation",id:"data-correlation",level:4},{value:"File Upload Support",id:"file-upload-support",level:4},{value:"Application Development Concepts",id:"application-development-concepts",level:2},{value:"Implementation Concepts",id:"implementation-concepts",level:4},{value:"Telemetry/Logging Concepts",id:"telemetrylogging-concepts",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"virtual-client-platform-design"},"Virtual Client Platform Design"),(0,r.kt)("p",null,"The following sections cover important design aspects of the Virtual Client platform application. This document is written for engineers and technical roles who\nare interested in how the Virtual Client platform and application is designed. The application itself is a .NET 6.0 command line application written in C# that\nis has both cross-platform and multi-architecture support. It is compiled to support both Windows and Linux operating system platforms as well as x64 and arm64\narchitectures. The choice to implement the application using managed code was made to enable a foundation for ease-of-rapid feature development at the same time\nas meeting all of the requirements for cross-platform + architecture support. Additionally, the .NET 6.0 framework integrates all of the performance and runtime\nefficiency work done by the .NET Core team over the past 5 years into a unified platform."),(0,r.kt)("p",null,"Reference the ",(0,r.kt)("a",{parentName:"p",href:"./VirtualClientPlatform.md"},"Platform Overview")," documentation for more information on the platform offerings."),(0,r.kt)("h2",{id:"application-concepts"},"Application Concepts"),(0,r.kt)("p",null,"The following sections describes some of the high-level concepts and features sets of the Virtual Client platform."),(0,r.kt)("h4",{id:"workloadtest-profiles"},"Workload/Test Profiles"),(0,r.kt)("p",null,"Workload profiles define a set of one or more different ways to run a given workload or test on a system. The primary goal of these workload profiles is to evaluate the system\nin a wide range of different ways. This in turn ensures that each round of execution of a workload on the Virtual Client platform can produce a breadth and depth of results\nthat are useful in comparing the performance of the system. Each of the workload profiles are tailored based on feedback from subject matter expert teams in the\nAzure organization as well as from empirical evidence derived from running them in large-scale experiments. The Virtual Client has ran on more than\na million VM systems (Windows and Linux) in the Azure cloud."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../README.md"},"Workloads and Profiles Supported"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-CPU-OPENSSL.json&version=GBmaster"},"Example Profile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles"},"Profiles Supported")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./UsageScenarios.md"},"Usage Examples"))),(0,r.kt)("p",null,"Using the example below as a reference, there are a 3 different fundamental sections inside a workload profile:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),(0,r.kt)("br",{parentName:"li"}),"At the top of most workload profiles are a set of one or more parameters. These parameters are referenced by each of the other\ncomponents throughout the rest of the profile. Before a workload runs, all parameter references in a workload profile will be\nreplaced with the concrete values defined in the profile parameters at the top. Additionally, any parameters defined at the top\nof a workload profile can be overridden on the command line. This feature allows for flexibility in running workloads for different\nscenarios while not reducing the cohesion and validity of the goals that originally informed the design of the workload profile (this\nlatter point is why not all parameters are allowed be overridden).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// An example of overriding the profile parameters so to use a smaller DiskSpd test file footprint. This might\n// for example be a scenario where the local/temp disk on an Azure virtual machine should be tested. These disks\n// are often very small and so the default 496G file size would be way to big.\n//\n// In the example JSON below, you will also see placeholders in the text of some of the step-specific parameters. These\n// placeholders will match the names of the parameters at the top and will be replaced with a value before executing\n// the step (e.g. [diskfillsize]).\nVirtualClient.exe --profile=PERF-IO-DISKSPD.json --timeout=1440 --parameters:DiskFillSize=30G,,,FileSize=30G\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Actions"),(0,r.kt)("br",{parentName:"p"}),"\n","This section contains the workload execution workflow. Each of the steps in the 'Actions' section will be executed in sequential order. This section\nallows a given workload (or more than 1) to be executed on the system in a wide range of ways to cover system performance and reliability\nrequirements thoroughly and with depth. Workloads and tests are often part of the actions as they are intended to utilize the system\nand its resources in a measurable way. The term 'Executor' will be used often with components in the 'Actions' section.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependencies"),(0,r.kt)("br",{parentName:"p"}),"\n","This section contains steps for downloading and installing dependencies and for configuring the system to meet preliminary requirements for running\na specific workload. In the example below, there are 2 dependencies that must be accounted for before the workload is executed. All unformatted disks\non the system should be initialized and formatted. Additionally the package containing the workload binaries/executables itself should be downloaded\nto the system from an Azure storage account blob store. Other examples of dependencies that are required include different Linux packages\nrequired, libraries/frameworks (e.g. PowerShell 7.0), scripts and configuring the system itself."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Description": "DiskSpd I/O Stress Performance Workload",\n    "Parameters": {\n        "DiskFillSize": "500GB",\n        "FileSize": "496G",\n        "Tests": null\n    },\n    "Actions": [\n      {\n            "Type": "DiskSpdExecutor",\n            "Parameters": {\n                "Scenario": "DiskFill",\n                "PackageName": "diskspd",\n                "CommandLine": "-c[diskfillsize] -b256K -si4K -t1 -o64 -w100 -Suw -W15 -D -L",\n                "TestName": "disk_fill",\n                "FileName": "diskspd-test.dat",\n                "DiskFill": true,\n                "DiskFillSize": "$.Parameters.DiskFillSize",\n                "Tags": "IO,DiskSpd,randwrite",\n                "ProcessModel": "SingleProcessPerDisk",\n                "DeleteTestFilesOnFinish": false,\n                "Tests": "$.Parameters.Tests"\n            }\n        }\n    ],\n    "Dependencies": [\n        {\n            "Type": "FormatDisks"\n        },\n        {\n            "Type": "DependencyPackageInstallation",\n            "Parameters": {\n                "BlobContainer": "packages",\n                "BlobName": "diskspd.1.2.0.zip",\n                "PackageName": "diskspd",\n                "Extract": true\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h4",{id:"monitoring-profiles"},"Monitoring Profiles"),(0,r.kt)("p",null,"Monitoring profiles define a set of one or more different background system monitors to run during the execution of the application. For example, a common monitoring scenario\nis the need to capture performance counters from the system. Monitoring profiles are often used in conjunction with workload profiles to capture performance\nand reliability information while workloads are executing in-parallel. The Virtual Client runs a default monitoring profile (MONITORS-DEFAULT.json) when a specific monitoring\nprofile is not provided. However, a different monitoring profile can be supplied on the command line if desired (extensibility)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../README.md"},"Monitors and Profiles Supported"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/MONITORS-AZURE-HOST.json&version=GBmaster"},"Example Profile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles"},"Profiles Supported"))),(0,r.kt)("p",null,"Using the example below as a reference, there are a 3 different fundamental sections inside a workload profile:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),(0,r.kt)("br",{parentName:"li"}),"Parameters in monitoring profiles serve the same purpose as they do in workload profiles. See the 'Workload Profiles' section above\nfor details.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// An example of overriding the profile parameters to capture\n//\n// In the example JSON below, you will also see placeholders in the text of some of the step-specific parameters. These\n// placeholders will match the names of the parameters at the top and will be replaced with a value before executing\n// the step (e.g. [diskfillsize]).\nVirtualClient.exe --profile=MONITORS-DEFAULT.json --timeout=1440 --parameters:CounterMonitorFrequency=00:05:00,,,CounterMonitorWarmupPeriod=00:00:30\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Monitors"),(0,r.kt)("br",{parentName:"p"}),"\n","This section contains one or more background monitors to run on the system. These are often intended to be ran in the background while the\nworkloads defined in a workload profile are running. Each of the steps in the 'Monitors' section will be executed on a background thread to run\nconcurrently and independently of each other. The monitors will typically run independently from workloads that are running on the system as well.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependencies"),(0,r.kt)("br",{parentName:"p"}),"\n","Dependencies in monitoring profiles serve the same purpose as they do in workload profiles. See the 'Workload Profiles' section above\nfor details."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Description": "Default Monitors",\n    "Parameters": {\n        "CounterMonitorFrequency": "00:10:00",\n        "CounterMonitorWarmupPeriod": "00:05:00"\n    }\n    "Dependencies": [\n        {\n          "Type": "AptPackageInstallation",\n          "Parameters": {\n            "Packages": "atop",\n            "AllowUpgrades": true\n          }\n        }\n    ],\n    "Monitors": [\n        {\n            "Type": "PerfCounterMonitor",\n            "Parameters": {\n                "Scenario": "PerformanceCounterMonitoring",\n                "MonitorFrequency": "$.Parameters.CounterMonitorFrequency",\n                "MonitorWarmupPeriod": "$.Parameters.CounterMonitorWarmupPeriod"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h4",{id:"workload-dependency-packages"},"Workload Dependency Packages"),(0,r.kt)("p",null,"The section above talked a bit about defining dependencies in Virtual Client workload and monitoring profiles. The Virtual Client platform has a model defined for how dependencies should\nbe packaged. Virtual Client workload and dependency packages follow the strict schema for the folder structure of the packages that allows for putting binaries, scripts and\nother files in the package separated by their target runtime OS and architecture platforms (e.g. win-x64, win-arm64, linux-x64, linux-arm64). Workload and dependency\npackages are typically stored in an Azure storage account blob store. However, Virtual Client also supports the ability to include the packages alongside the runtime platform\nand they will be incorporated at runtime without need of download. See the following references for more information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./DependencyPackages.md"},"Workload/Dependency Packages"))),(0,r.kt)("p",null,'In addition to workload and dependency packages stored in a Storage Account location, there are some packages that are packaged directly with the Virtual Client application itself.\nThe are called "built-in packages". There is no specific rhyme or reason to what is determined to qualify as a built-in package; however, they are as a general rule dependencies\nthat are needed by more than 1 workload and often operating-system specific libraries/toolsets/binaries. Technically, any of the workload packages and dependencies could be\nbundled with the Virtual Client itself removing the requirement at runtime of downloading any packages. This is not done by default because it would cause the size of\nthe Virtual Client package to be very large. This is an issue for deployment simplicity and reliability in cloud environments. With that said, the Virtual Client\nOfficial build pipeline can support producing different packages/bundles for the Virtual Client that contain more workloads built-in.'),(0,r.kt)("h4",{id:"multi-instance-api-support"},"Multi-Instance API Support"),(0,r.kt)("p",null,"Certain workload scenarios require multiple systems to operate (e.g. client/server networking workloads and high-performance compute workloads). These workloads have a requirement to communicate\nwith each other to be able to synchronize client-side executions with server-side expectations. The Virtual Client has a self-hosted REST API that is used\nfor this purpose. This REST API enables simple HTTP communications between 2 or more different instances of the Virtual Client. The REST API provides the following\nsupport:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"State Management"),(0,r.kt)("br",{parentName:"p"}),"\n","The API enables both the client and the server instances of the application to preserve state on the local system. Additionally, state objects/requests can be\npassed from the client to the server (or vice-versa) to be saved on the remote endpoint system. State is used primarily by workload executors to synchronize handshakes and\nrequirements between the client and the server. For example, the server workload must be confirmed online and running in the NTttcp network throughput workload\nbefore the client can start. The client will perform a set of synchronization steps to ensure this is the case.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Heartbeats"),(0,r.kt)("br",{parentName:"p"}),"\n","The API enables one instance of the Virtual Client to confirm another instance of the Virtual Client running on a different system is up and running. This is called\na heartbeat.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Eventing"),(0,r.kt)("br",{parentName:"p"}),"\n","The API also enables one instance of the Virtual Client to send an event request to another instance of the application. An event is typically a request for the\ntarget endpoint instance to take an actions. For example in the NTttcp network throughput workload, the client will request that the server-side workload startup by sending it an\nevent request. It will then poll for a particular server-side state to determine when the server-side workload is definitively up and running."))),(0,r.kt)("h4",{id:"telemetry-support"},"Telemetry Support"),(0,r.kt)("p",null,"One of the most important features of the Virtual Client platform is that it provides a lot of very useful telemetry. Telemetry emitted by the application follows a consistent schema\n(based on Application Insights) that is designed to enable strong correlation between data related to the process/system executing the application and data related to workloads and\nmonitors."),(0,r.kt)("p",null,"Telemetry/data emitted by the Virtual Client application is divided into 4 different categories of data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Traces/Logs/Errors"),(0,r.kt)("br",{parentName:"p"}),"\n","The Virtual Client is heavily instrumented with structured logging/tracing logic. This ensures that the inner workings of the application can\nare easily visible to the user. This is particularly important for debugging scenarios.  Errors are a specific type of log/trace that indicate\nissues that happen during the execution of Virtual Client commands. These represent situations that may be causing the Virtual Client to fail or\nto work in unexpected ways."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Workload Metrics"),(0,r.kt)("br",{parentName:"p"}),"\n","Workload metrics are measurements and information captured from the output of a particular workload (e.g. DiskSpd, FIO, Coremark) that represent\nperformance data from the system under test. Metrics also include measurements of the system performance and reliability such as performance counters."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"System Events"),(0,r.kt)("br",{parentName:"p"}),"\n","System events describe certain types of important information on the system beyond simple performance measurements. This might for example\ninclude Windows registry changes or special event logs."))),(0,r.kt)("h4",{id:"data-correlation"},"Data Correlation"),(0,r.kt)("p",null,'To enable correlation between data from an execution system and the Virtual Client, metadata is supplied to the Virtual Client on the command line. This is a simple way to "connect-the-dots"\nwhen creating reports based on the data. This metadata will be included with every telemetry event/message that is emitted by the Virtual Client. The following shows an example of the schema\nand how metadata is supplied on the command line as well as what the contents of a single telemetry event emitted would look like.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --timeout=1440 --experimentId=2451d02e-b22b-4e8a-9a1f-5436512dbc01 --agentId=virtualmachine01 --metadata:"anyCorrelationId=identifier,,,property2=123,,,property3=true"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp": "2021-04-19T16:01:31.9148275Z",\n    "message": "OpenSSLExecutor.Execute",\n    "severityLevel": "1",\n    "itemType": "trace",\n    "operation_Id": "6978d01d-b28d-4f81-8a0e-6296592dad07"\n    "operation_ParentId": "00000000-0000-0000-0000-000000000000"\n    "appName": "VirtualClient",\n    "appHost": "virtualmachine01",\n    "sdkVersion": "1.9.0.0",\n    "customDimensions": {\n        "agentId": "virtualmachine01",\n        "experimentId": "2451d02e-b22b-4e8a-9a1f-5436512dbc01",\n        "metadata": {\n            "anyCorrelationId": "identifier",\n            "property2": 123,\n            "property3": true\n        }\n    }\n}\n')),(0,r.kt)("h4",{id:"file-upload-support"},"File Upload Support"),(0,r.kt)("p",null,'In addition to having support for structured telemetry, the Virtual Client platform supports the ability to upload files/content to an Azure storage account\nblob store. This is a need often enough with certain types of background monitors that produce very large results files too large to send through traditional\ntelemetry pipelines. Any component in the Virtual Client can be developed to upload files/content to a target blob store. Then the user of the application simply\npasses in a connection string or SAS URI to the target "content" store on the command line.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./BlobStorageSupport.md"},"Blob Store Support"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --timeout=1440 --contentStore={ConnectionString or SASTokenUri}\n")),(0,r.kt)("h2",{id:"application-development-concepts"},"Application Development Concepts"),(0,r.kt)("p",null,"The following sections cover some of the important application development concepts for contributing to the Virtual Client platform. Given the above concepts covered,\nthe next sections dive a bit more into the depths of the application (coding concepts)."),(0,r.kt)("h4",{id:"implementation-concepts"},"Implementation Concepts"),(0,r.kt)("p",null,"The following concepts and terminology is used to describe the various coded components that exist in Virtual Client codebase."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Workload Executors"),(0,r.kt)("br",{parentName:"p"}),"\n","A workload executor is a class/implementation that is responsible for managing initialization requirements and the execution of a given workload. Workloads can\nbe vastly different than each other with regards to execution requirements (e.g. which OS they can operate on, command line parameters, length of run etc...).\nThe workload executor foundation in Virtual Client ensures that these details are all encapsulated into one or more executors specific to\nthat workload. Furthermore, workload executors can be implemented to support parameterization for a wide range of different ways to run a\ngiven workload. Workload profiles in the Virtual Client platform will have one or more workload executors defined in the 'Actions' section.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Background Monitors"),(0,r.kt)("br",{parentName:"p"}),"\n","A background monitor is a class/implementation that is responsible for gathering information from the system on a background thread during the lifetime of the\nVirtual Client application runtime (e.g. performance counters). Monitors are implemented to start a long-running background task but will return immediately so as\nto avoid blocking the main thread.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dependency Installers/Handlers"),(0,r.kt)("br",{parentName:"p"}),"\n","A dependency handler is a class/implementation that is responsible for downloading, installing and setting up dependencies on the system as preliminary requirements\nbefore any workloads or monitors are executed. If any one of the dependencies fail to perform their task, the Virtual Client application will exit returning a code that\nwill indicate what actually failed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Components"),(0,r.kt)("br",{parentName:"p"}),"\n",'All of the above noted types of classes/implementations in the Virtual Client codebase are collectively called "components". This is a generic\nterm directly related to the base/fundamental class in the Virtual Client, the  ',(0,r.kt)("a",{parentName:"p",href:"../VirtualClient.Contracts/VirtualClientComponent.cs"},"VirtualClientComponent"),".\nAll workload executors, background monitors and dependency handlers in the Virtual Client codebase derive from this class."))),(0,r.kt)("h4",{id:"telemetrylogging-concepts"},"Telemetry/Logging Concepts"),(0,r.kt)("p",null,"To ensure consistency, a set of common extension methods are used to capture all telemetry from the operations of the application or the execution of workloads and monitors."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Contracts/VirtualClientLoggingExtensions.cs"},"Logging Extensions"))))}c.isMDXComponent=!0}}]);