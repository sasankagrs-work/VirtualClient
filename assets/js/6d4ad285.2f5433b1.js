"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>m});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},k=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,c=u["".concat(o,".").concat(m)]||u[m]||d[m]||n;return r?i.createElement(c,l(l({ref:t},k),{},{components:r})):i.createElement(c,l({ref:t},k))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<n;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=r(7462),a=(r(7294),r(3905));const n={},l="DiskSpd Workload Profiles",s={unversionedId:"workloads/diskspd/DiskSpdProfiles",id:"workloads/diskspd/DiskSpdProfiles",title:"DiskSpd Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the DiskSpd workload.",source:"@site/docs/workloads/diskspd/DiskSpdProfiles.md",sourceDirName:"workloads/diskspd",slug:"/workloads/diskspd/DiskSpdProfiles",permalink:"/VirtualClient/docs/workloads/diskspd/DiskSpdProfiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/diskspd/DiskSpdProfiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DiskSpd Workload Metrics",permalink:"/VirtualClient/docs/workloads/diskspd/DiskSpdMetrics"},next:{title:"FIO (Flexible IO Tester) Workload",permalink:"/VirtualClient/docs/workloads/fio/"}},o={},p=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-IO-DISKSPD.json",id:"perf-io-diskspdjson",level:3},{value:"Disk Testing Scenarios",id:"disk-testing-scenarios",level:3},{value:"Resources",id:"resources",level:3}],k={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"diskspd-workload-profiles"},"DiskSpd Workload Profiles"),(0,a.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the DiskSpd workload.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/diskspd/"},"Workload Details"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/diskspd/DiskSpdMetrics"},"Workload Profile Metrics"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,a.kt)("p",null,"The profiles below require the ability to download workload packages and dependencies from a package store. In order to download the workload packages, connection information\nmust be supplied on the command line. See the 'Workload Packages' documentation above for details on how that works."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"perf-io-diskspdjson"},"PERF-IO-DISKSPD.json"),(0,a.kt)("p",null,"Runs an high stress IO-intensive workload using the DiskSpd toolset to test performance of disks on the system as well as\n(in VM scenarios) to cause significant CPU stress on an underlying physical host. DiskSpd is a Microsoft-developed, industry standard\nbenchmarking toolset for Windows. This profile is a Windows-only profile."),(0,a.kt)("p",null,"Note that this profile is designed to auto-scale to the number of cores on the system on which it runs. It uses a simple algorithm to determine 2 key\naspects of the workload execution."),(0,a.kt)("p",null,"1) Total number of jobs/threads = {# of logical cores} / 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   Examples:  \n     For a 16-core system:\n     16/2 = 16 concurrent jobs/threads per DiskSpd execution (i.e. # threads to run I/O operations against the test file concurrently).\n\n     For a 64-core system:\n     64/2 = 32 concurrent jobs/threads per DiskSpd execution (i.e. # threads to run I/O operations against the test file concurrently).\n")),(0,a.kt)("p",null,"2) Total I/O depth =  512 / {Total number of jobs/threads}"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  Examples:\n    For a 16 core system:\n    total # jobs/threads = 16/2 (above) -> 512/16 = 32\n\n    For a 64 core system:\n    total # jobs/threads = 64/2 (above) -> 512/32 = 16\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"win-x64"),(0,a.kt)("li",{parentName:"ul"},"win-arm64"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Operating Systems")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Windows 10"),(0,a.kt)("li",{parentName:"ul"},"Windows 11"),(0,a.kt)("li",{parentName:"ul"},"Windows Server 2016"),(0,a.kt)("li",{parentName:"ul"},"Windows Server 2019"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dependencies"),(0,a.kt)("br",{parentName:"p"}),"\n","The following dependencies must be met to run this workload profile."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Workload package must exist in the 'packages' directory or connection information for the package store supplied on the command line (see 'Workload Packages' link above)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Scenarios"),(0,a.kt)("br",{parentName:"p"}),"\n","The following scenarios are covered by this workload profile. Note that the default disk fill size is 500GB and the default file size (drive space used)\nis 496GB. Both of these defaults can be overridden on the command line with parameters as noted below. Note that the workload will be ran on ALL disks that\nmatch the category (e.g. remote/managed, system disks) concurrently. For example if there are 16 remote/managed disks on the system when targeting these\ntypes of disks, the workload will be ran on each of the 16 disks at the same time concurrently. See the 'Profile Parameters' section below for more information\non targeting specific types of disks on the system."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Random Write Operations",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"4k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"8k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"12k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"16k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"1024k block size, multiple jobs/threads per disk"))),(0,a.kt)("li",{parentName:"ul"},"Random Read Operations",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"4k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"8k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"12k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"16k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"1024k block size, multiple jobs/threads per disk"))),(0,a.kt)("li",{parentName:"ul"},"Sequential Write Operations",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"4k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"8k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"12k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"16k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"1024k block size, multiple jobs/threads per disk"))),(0,a.kt)("li",{parentName:"ul"},"Sequential Read Operations",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"4k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"8k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"12k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"16k block size, multiple jobs/threads per disk"),(0,a.kt)("li",{parentName:"ul"},"1024k block size, multiple jobs/threads per disk"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,a.kt)("br",{parentName:"p"}),"\n","Note that the default behavior of this workload is to test the remote/managed disks only. The following parameters can be optionally supplied\non the command line to change this default behavior. See the 'Usage Scenarios/Examples' above for examples on how to supply parameters to\nVirtual Client profiles."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DiskFilter"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Defines disk filters. Default is to test on all biggest non-OS disks."),(0,a.kt)("td",{parentName:"tr",align:null},"BiggestSize")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DiskFillSize"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Allows the user to override the default disk fill size used in the DiskSpd profile (e.g. 500GB -> 26GB). This enables the profile to be used in scenarios where the disk size is very small (e.g. local/temp disk -> 32GB in size). Note that this parameter is application ONLY on the Stress profile."),(0,a.kt)("td",{parentName:"tr",align:null},"500G")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FileSize"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Allows the user to override the default file size used in the DiskSpd profile (e.g. 496GB -> 26GB). This enables the profile to be used in scenarios where the disk size is very small (e.g. local/temp disk -> 32GB in size). Note that this parameter is application ONLY on the Stress profile."),(0,a.kt)("td",{parentName:"tr",align:null},"496G"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Testing Small-Size Disks (e.g. local/temp disk)"),(0,a.kt)("br",{parentName:"p"}),"\n","See the section below for important details to understand when testing local/temp disks.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Workload Runtimes"),"  "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Expected Runtime on Linux Systems",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(64-core/vCPU VM) = 3 - 4 hours (including time required create initial 496G/GB file)"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Usage Examples"),(0,a.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'// Tests the remote/managed disks by default\nVirtualClient.exe --profile=PERF-IO-DISKSPD.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n\nVirtualClient.exe --profile=PERF-IO-DISKSPD.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters=DiskFilter=OSDisk\nVirtualClient.exe --profile=PERF-IO-DISKSPD.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters=DiskFilter=OSDisk:false\nVirtualClient.exe --profile=PERF-IO-DISKSPD.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters=DiskFilter=BiggestSize\n\n// Test specific Windows drives/disks\nVirtualClient.exe --profile=PERF-IO-DISKSPD.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters=DiskFilter=DiskPath:C:\\,D:\\\n\n// Test on the local/temp disk that is 32GB in total size. Override the default file size of 496G.\n// Also note that DiskSpd file sizes are different than other profiles (e.g. 26G vs. 26GB).\nVirtualClient.exe --profile=PERF-IO-DISKSPD.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters=DiskFilter=OSDisk:false&smallestSize,,,DiskFillSize=26G,,,FileSize=26G\n\n// Run specific scenarios only. Each action in a profile as a \'Scenario\' name.\nVirtualClient.exe --profile=PERF-IO-DISKSPD.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --scenarios=RandomWrite_4k_BlockSize,RandomWrite_8k_BlockSize,RandomRead_8k_BlockSize,RandomRead_4k_BlockSize\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"disk-testing-scenarios"},"Disk Testing Scenarios"),(0,a.kt)("p",null,"The Virtual Client supports a range of different disk testing scenarios on both Azure VMs as well as Azure physical hosts. The following\ndocumentation provides context into how to run disk performance tests for these scenarios."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./DiskTestingScenarios.md"},"Disk Testing Scenarios"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"Azure VM Sizes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/managed-disks/"},"Azure Managed Disks"))))}d.isMDXComponent=!0}}]);