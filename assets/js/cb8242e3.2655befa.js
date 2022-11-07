"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),k=a,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="HPCG Workload Profiles",i={unversionedId:"workloads/hpcg/HpcgProfiles",id:"workloads/hpcg/HpcgProfiles",title:"HPCG Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the HPCG workload.",source:"@site/docs/workloads/hpcg/HpcgProfiles.md",sourceDirName:"workloads/hpcg",slug:"/workloads/hpcg/HpcgProfiles",permalink:"/VirtualClient/docs/workloads/hpcg/HpcgProfiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/workloads/hpcg/HpcgProfiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HPCG Workload Metrics",permalink:"/VirtualClient/docs/workloads/hpcg/HpcgMetrics"},next:{title:"Network Ping/ICMP",permalink:"/VirtualClient/docs/workloads/network-ping/"}},p={},s=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-CPU-HPCG.json",id:"perf-cpu-hpcgjson",level:3},{value:"Resources",id:"resources",level:3}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hpcg-workload-profiles"},"HPCG Workload Profiles"),(0,a.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the HPCG workload."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/hpcg/"},"Workload Details"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./HPCGMetrics.md"},"Workload Profile Metrics"),"  ")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,a.kt)("p",null,"CoreMark workload profiles have no dependencies on a package store and so this information is not required on the command line for the profiles\nin the sections below."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"perf-cpu-hpcgjson"},"PERF-CPU-HPCG.json"),(0,a.kt)("p",null,"Runs the HPCG benchmark workload."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"OS/Architecture Platforms")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"linux-arm64"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Operating Systems")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ubuntu 18"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu 22"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Supported Compilers"),(0,a.kt)("br",{parentName:"p"}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GCC Compiler Versions = 8, 9, 10"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dependencies"),(0,a.kt)("br",{parentName:"p"}),"\n","The following dependencies must be met to run this workload profile."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Workload package must exist in the 'packages' directory or connection information for the package store supplied on the command line (see 'Workload Packages' link above)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,a.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload. See the 'Usage Scenarios/Examples' above for examples on how to supply parameters to\nVirtual Client profiles."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CompilerName"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. The name of the compiler to use for compiling CoreMark on the system."),(0,a.kt)("td",{parentName:"tr",align:null},"gcc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CompilerVersion"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. The version of the compiler to use."),(0,a.kt)("td",{parentName:"tr",align:null},"10"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Workload Runtimes"),(0,a.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of tests ran. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the use of prescribed VM SKUs. This\nparticular workload takes multiple days to complete the number of iterations required for valid results."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Expected Runtime (8-core/vCPU VM) = 30 minutes")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"Azure VM Sizes"))))}m.isMDXComponent=!0}}]);