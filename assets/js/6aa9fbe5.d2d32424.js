"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1036],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,k=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?a.createElement(k,i(i({ref:t},m),{},{components:r})):a.createElement(k,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Memcached Workload Profiles",l={unversionedId:"workloads/memcached/MemcachedProfiles",id:"workloads/memcached/MemcachedProfiles",title:"Memcached Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the Memcached workload.",source:"@site/docs/workloads/memcached/MemcachedProfiles.md",sourceDirName:"workloads/memcached",slug:"/workloads/memcached/MemcachedProfiles",permalink:"/VirtualClient/docs/workloads/memcached/MemcachedProfiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/memcached/MemcachedProfiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memcached Workload Metrics",permalink:"/VirtualClient/docs/workloads/memcached/MemcachedMetrics"},next:{title:"OpenSSL Workload",permalink:"/VirtualClient/docs/workloads/openssl/"}},s={},c=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"PERF-MEMCACHED.json",id:"perf-memcachedjson",level:3},{value:"Memtier Benchmarking Tool :",id:"memtier-benchmarking-tool-",level:4},{value:"Resources",id:"resources",level:3}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"memcached-workload-profiles"},"Memcached Workload Profiles"),(0,n.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the Memcached workload.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/memcached/"},"Workload Details"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/memcached/MemcachedMetrics"},"Workload Profile Metrics"),"  ")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,n.kt)("p",null,"The profiles below require the ability to download workload packages and dependencies from a package store. In order to download the workload packages, connection information must be supplied on the command line. See the 'Workload Packages' documentation above for details on how that works."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"perf-memcachedjson"},"PERF-MEMCACHED.json"),(0,n.kt)("h4",{id:"memtier-benchmarking-tool-"},"Memtier Benchmarking Tool :"),(0,n.kt)("p",null,"This tool can be used to generate various traffic patterns against Memcached instances."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"linux-x64"),(0,n.kt)("li",{parentName:"ul"},"linux-arm64"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Dependencies"),(0,n.kt)("br",{parentName:"p"}),"\n","The following dependencies must be met to run this workload profile."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Workload package must exist in the 'packages' directory or connection information for the package store supplied on the command line (see 'Workload Packages' link above)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Workload Runtimes"),(0,n.kt)("br",{parentName:"p"}),"\n","The following timings represent the length of time required to run a single round of tests ran. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are estimates based on the use of prescribed VM SKUs."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Expected Runtime on Linux Systems",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(2-core/vCPU VM) = 2 hours.( Depends on number of cores of the machine.)"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Usage Examples"),(0,n.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'./VirtualClient --profile=PERF-MEMCACHED.json --system=Azure --timeout=250 --packageStore="{BlobConnectionString|SAS Uri}"\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"Azure VM Sizes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/managed-disks/"},"Azure Managed Disks"))))}p.isMDXComponent=!0}}]);