"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[5248],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={},l="DeathStarBench Workload Profiles",i={unversionedId:"workloads/deathstarbench/DeathStarBenchProfiles",id:"workloads/deathstarbench/DeathStarBenchProfiles",title:"DeathStarBench Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the DeathStarBench workload.",source:"@site/docs/workloads/deathstarbench/DeathStarBenchProfiles.md",sourceDirName:"workloads/deathstarbench",slug:"/workloads/deathstarbench/DeathStarBenchProfiles",permalink:"/docs/workloads/deathstarbench/DeathStarBenchProfiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/workloads/deathstarbench/DeathStarBenchProfiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DeathStarBench Workload Metrics",permalink:"/docs/workloads/deathstarbench/DeathStarBenchMetrics"},next:{title:"DiskSpd",permalink:"/docs/workloads/diskspd/"}},s={},p=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-NETWORK-DEATHSTARBENCH.json",id:"perf-network-deathstarbenchjson",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deathstarbench-workload-profiles"},"DeathStarBench Workload Profiles"),(0,n.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the DeathStarBench workload.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/workloads/deathstarbench/"},"Workload Details"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/workloads/deathstarbench/DeathStarBenchMetrics"},"Workload Profile Metrics"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./DependencyPackages.md"},"Workload Packages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./UsageScenarios.md"},"Usage Scenarios/Examples"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,n.kt)("p",null,"The profiles below require the ability to download workload packages and dependencies from a package store. In order to download the workload packages, connection information\nmust be supplied on the command line. See the 'Workload Packages' documentation above for details on how that works."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"perf-network-deathstarbenchjson"},"PERF-NETWORK-DEATHSTARBENCH.json"),(0,n.kt)("p",null,"Runs a Network intensive workload using the DeathStarBench toolset to test the Network performance in processing http load to the server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"linux-x64"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Supported Operating Systems")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ubuntu"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Dependencies"),(0,n.kt)("br",{parentName:"p"}),"\n","The following dependencies must be met to run this workload profile."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Workload package must exist in the 'packages' directory or connection information for the package store supplied on the command line (see 'Workload Packages' link above)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Profile Parameters"),(0,n.kt)("br",{parentName:"p"}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload. See the 'Usage Scenarios/Examples' above for examples on how to supply parameters to\nVirtual Client profiles."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,n.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NumberOfThreads"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. This specifies the number of threads to be created to send http load for each workload scenario."),(0,n.kt)("td",{parentName:"tr",align:null},"20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NumberOfConnections"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. This specifies the number of connections to be created to send http load for each workload scenario that we can have."),(0,n.kt)("td",{parentName:"tr",align:null},"1000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Duration"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. This specifies the time for which the http load will be sent."),(0,n.kt)("td",{parentName:"tr",align:null},"300s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RequestPerSec"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. This specifies the constant throughput load."),(0,n.kt)("td",{parentName:"tr",align:null},"1000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GraphType"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional. This specifies the type of graph to be used in ",(0,n.kt)("strong",{parentName:"td"},"socialNetwork")," scenario."),(0,n.kt)("td",{parentName:"tr",align:null},"socfb-Reed98 ","[Allowed values : socfb-Reed98, ego-twitter]"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Note"),": NumberOfConnections should be greater than or equals to NumberOfThreads. (NumberOfConnections >= NumberOfThreads) "))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Workload Runtimes"),(0,n.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of tests ran. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the use of prescribed VM SKUs.\nThis particular workload runtime is affected by the 'Duration' parameter of the  profile. The default value for this\nis 300 seconds (5 mins). This value can be overridden on the command line as noted in the 'Parameters' section above."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Expected Runtimes on Linux systems ~ 45 min"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Usage Examples"),(0,n.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'./VirtualClient --profile=PERF-NETWORK-DEATHSTARBENCH.json --system=Juno --timeout=180 --layout="{Path to layout file}" --packageStore="{BlobConnectionString|SAS Uri}" \n\n\n// Change the default parameters.\n./VirtualClient --profile=PERF-NETWORK-DEATHSTARBENCH.json --system=Juno --timeout=1440 --layout="{Path to layout file}" --packageStore="{BlobConnectionString|SAS Uri}" --parameters=Duration=60s,,,NumberOfThreads=2,,,NumberOfConnections=100\n')))}u.isMDXComponent=!0}}]);