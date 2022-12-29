"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[8878],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={},o="MLPerf Workload Profiles",i={unversionedId:"workloads/mlperf/mlperf-profiles",id:"workloads/mlperf/mlperf-profiles",title:"MLPerf Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the MLPerf workload.",source:"@site/docs/workloads/mlperf/mlperf-profiles.md",sourceDirName:"workloads/mlperf",slug:"/workloads/mlperf/mlperf-profiles",permalink:"/VirtualClient/docs/workloads/mlperf/mlperf-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/mlperf/mlperf-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MLPerf Workload Metrics",permalink:"/VirtualClient/docs/workloads/mlperf/mlperf-metrics"},next:{title:"NAS Parallel",permalink:"/VirtualClient/docs/workloads/nasparallel/"}},s={},p=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-GPU-MLPERF.json",id:"perf-gpu-mlperfjson",level:3},{value:"Resources",id:"resources",level:3}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mlperf-workload-profiles"},"MLPerf Workload Profiles"),(0,n.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the MLPerf workload."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/mlperf/"},"Workload Details"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/mlperf/mlperf-metrics"},"Workload Profile Metrics"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,n.kt)("p",null,"The profiles below require the ability to download workload packages and dependencies from a package store. In order to download the workload packages, connection information\nmust be supplied on the command line. See the 'Workload Packages' documentation above for details on how that works."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"perf-gpu-mlperfjson"},"PERF-GPU-MLPERF.json"),(0,n.kt)("p",null,"Runs the MLPerf benchmark workload to test GPU performance. "),(0,n.kt)("p",null,":::warn\nThis workload is supported ONLY for systems that contain Nvidia GPU hardware components\n:::"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supported Platform/Architectures"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"linux-x64")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Dependencies"),(0,n.kt)("br",{parentName:"p"}),"\n","The following dependencies must be met to run this workload profile."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Workload package must exist in the 'packages' directory or connection information for the package store supplied on the command line (see 'Workload Packages' link above)."),(0,n.kt)("li",{parentName:"ul"},"The VM must run on hardware containing Nvidia GPU cards/components."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,n.kt)("br",{parentName:"p"}),"\n","The following parameters can be supplied on the command line. See the 'Usage Scenarios/Examples' above for examples on how to supply parameters to\nVirtual Client profiles."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. User which needs to be created in container to run MLPerf benchmarks."),(0,n.kt)("td",{parentName:"tr",align:null},"testuser")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DiskFilter"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. Filter to decide the disk that will be used to download benchmarks. Since benchmarks data is around 800gb, default disk filter is greater than 1000gb."),(0,n.kt)("td",{parentName:"tr",align:null},"SizeGreaterThan:1000gb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CudaVersion"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. Version of CUDA that needs to be installed."),(0,n.kt)("td",{parentName:"tr",align:null},"11.6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DriverVersion"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. Version of GPU driver that needs to be installed."),(0,n.kt)("td",{parentName:"tr",align:null},"510")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LocalRunFile"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. Link to download specified CUDA and GPU driver versions."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://developer.download.nvidia.com/compute/cuda/11.6.0/local_installers/cuda_11.6.0_510.39.01_linux.run"},"https://developer.download.nvidia.com/compute/cuda/11.6.0/local_installers/cuda_11.6.0_510.39.01_linux.run"))))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Workload Runtimes"),(0,n.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of tests ran. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the use of prescribed VM SKUs. This\nparticular workload takes multiple days to complete the number of iterations required for valid results."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Expected Runtime = 8 hours"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Usage Examples"),(0,n.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./VirtualClient --profile=PERF-GPU-MLPERF.json --system=Azure --timeout=1440\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"Azure VM Sizes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/managed-disks/"},"Azure Managed Disks"))))}m.isMDXComponent=!0}}]);