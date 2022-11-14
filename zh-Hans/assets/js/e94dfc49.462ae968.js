"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[8308],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),s=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(m,".").concat(k)]||u[k]||d[k]||l;return a?r.createElement(c,i(i({ref:e},p),{},{components:a})):r.createElement(c,i({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9225:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={id:"overview",sidebar_position:1,keywords:["benchmark","automation","workload","monitoring","microsoft","coremark","hpcg","lapack","openfoam","redis","memcached","specjvm"]},i="Overview",o={unversionedId:"overview/overview",id:"overview/overview",title:"Overview",description:"The Virtual Client is a unified workload and system monitoring platform for running customer-representative scenarios on virtual machines or physical hosts/blades in the Azure Cloud.",source:"@site/docs/overview/overview.md",sourceDirName:"overview",slug:"/overview/",permalink:"/VirtualClient/zh-Hans/docs/overview/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/overview/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",sidebar_position:1,keywords:["benchmark","automation","workload","monitoring","microsoft","coremark","hpcg","lapack","openfoam","redis","memcached","specjvm"]},sidebar:"tutorialSidebar",next:{title:"Virtual Client Platform Design",permalink:"/VirtualClient/zh-Hans/docs/overview/design"}},m={},s=[{value:"Team Contacts",id:"team-contacts",level:2},{value:"Supported Benchmark Workloads",id:"supported-benchmark-workloads",level:2},{value:"System Monitoring Facilities",id:"system-monitoring-facilities",level:2},{value:"Current Stable Version(s)",id:"current-stable-versions",level:2},{value:"Version 0.0.2",id:"version-002",level:3},{value:"Telemetry Notice",id:"telemetry-notice",level:2},{value:"Trademarks",id:"trademarks",level:2}],p={toc:s};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Virtual Client is a unified workload and system monitoring platform for running customer-representative scenarios on virtual machines or physical hosts/blades in the Azure Cloud.\nThe platform supports a wide range of different industry standard/benchmark workloads used to measuring various aspects of the system under test (e.g. CPU, I/O, network performance, power consumption).\nThe platform additionally provides the ability to capture important performance and reliability measurements from the underlying system. The platform supports all business-critical\nAzure environments including guest/VM systems, host/blade systems and data center/DC lab systems. The platform additionally supports both x64 and ARM64 compute architectures."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/zh-Hans/docs/overview/features"},"Platform Features")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/zh-Hans/docs/overview/design"},"Platform Design")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/VirtualClient/zh-Hans/docs/developing/develop-guide"},"Developer Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../category/usage-scenarios"},"Additional Usage Examples"),"  ")),(0,n.kt)("h2",{id:"team-contacts"},"Team Contacts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mailto:virtualclient@microsoft.com"},"virtualclient@microsoft.com"))),(0,n.kt)("h2",{id:"supported-benchmark-workloads"},"Supported Benchmark Workloads"),(0,n.kt)("p",null,"The following list of workloads are used by Virtual Client profiles to exercise the system components in a consistent way required to measure performance baselines and differences. "),(0,n.kt)("admonition",{title:"Comply to licenses you are using",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"VirtualClient handles the installation and execution of various tools. Individual license files are not prompted for each workload. By using VirtualClient, users accept the license of each of the benchmarks individually, comply to the terms for the tool you are using, and take responsibility for using them.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Benchmark")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Specialization")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Supported Platforms/Architectures")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"License(s)")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/compression/7zip"},"7zip")),(0,n.kt)("td",{parentName:"tr",align:null},"7zip compression"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.7-zip.org/faq.html"},"GNU LGPL"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/aspnetbench/"},"AspNetBench")),(0,n.kt)("td",{parentName:"tr",align:null},"ASP.NET server"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/dotnet/aspnetcore/blob/main/LICENSE.txt"},(0,n.kt)("strong",{parentName:"a"},"ASP.NET"),":MIT"),(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"https://github.com/codesenberg/bombardier/blob/master/LICENSE"},(0,n.kt)("strong",{parentName:"a"},"Bombardier"),":MIT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/coremark/"},"CoreMark")),(0,n.kt)("td",{parentName:"tr",align:null},"Generic CPU"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64,linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/eembc/coremark/blob/main/LICENSE.md"},"Apache+Custom"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/network/NetworkSuite"},"CPS")),(0,n.kt)("td",{parentName:"tr",align:null},"Network RoundTripTime"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},"MSFT developed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/deathstarbench/"},"DeathStarBench")),(0,n.kt)("td",{parentName:"tr",align:null},"Swarm container microservices"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/delimitrou/DeathStarBench/blob/master/LICENSE"},"Apache-2.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/diskspd/"},"DiskSpd")),(0,n.kt)("td",{parentName:"tr",align:null},"Disk Stress"),(0,n.kt)("td",{parentName:"tr",align:null},"win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/microsoft/diskspd/blob/master/LICENSE"},"MIT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/fio/"},"Flexible IO Tester (FIO)")),(0,n.kt)("td",{parentName:"tr",align:null},"Disk IO Performance"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/axboe/fio/blob/master/COPYING"},"GPL-2.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/graph500/"},"Graph500")),(0,n.kt)("td",{parentName:"tr",align:null},"3D Simulation"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/graph500/graph500/blob/newreference/license.txt"},"Custom"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../workloads/compression/gzip.md"},"gzip")),(0,n.kt)("td",{parentName:"tr",align:null},"pbzip2 compression"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.gnu.org/software/gzip/"},"GPL"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/hpcg/"},"HPCG")),(0,n.kt)("td",{parentName:"tr",align:null},"High Performance Compute (HPC)"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/hpcg-benchmark/hpcg/blob/master/COPYING"},"Custom"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/lapack/"},"LAPACK")),(0,n.kt)("td",{parentName:"tr",align:null},"Linear Equations"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Reference-LAPACK/lapack/blob/master/LICENSE"},"Custom"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/network/NetworkSuite"},"Latte")),(0,n.kt)("td",{parentName:"tr",align:null},"Network latency"),(0,n.kt)("td",{parentName:"tr",align:null},"win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/microsoft/latte/blob/main/LICENSE"},"MIT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/lmbench/"},"LMbench")),(0,n.kt)("td",{parentName:"tr",align:null},"Generic Memory"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/intel/lmbench/blob/master/COPYING"},"GPL-2.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/inikep/lzbench"},"LZBench")),(0,n.kt)("td",{parentName:"tr",align:null},"Compression/Streaming"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/inikep/lzbench"},"None"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../workloads/memcached/memcached.md"},"Memcached")),(0,n.kt)("td",{parentName:"tr",align:null},"Memcached Performance"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/memcached/memcached/blob/master/LICENSE"},(0,n.kt)("strong",{parentName:"a"},"memcached"),":BSD-3"),(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"https://github.com/RedisLabs/memtier_benchmark/blob/master/COPYING"},(0,n.kt)("strong",{parentName:"a"},"Memtier"),":GPL-2.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/mlperf/"},"MLPerf")),(0,n.kt)("td",{parentName:"tr",align:null},"Machine learning"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/mlcommons/training/blob/master/LICENSE.md"},"Custom"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/nasparallel/NASParallelBench"},"NAS Parallel")),(0,n.kt)("td",{parentName:"tr",align:null},"High Performance Compute (HPC)"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://opensource.org/licenses/nasa1.3.php"},"NASA-1.3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../workloads/network-ping/NetworkPing.md"},"Network ICMP Ping")),(0,n.kt)("td",{parentName:"tr",align:null},"Simple Network Ping"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/microsoft/VirtualClient/blob/main/LICENSE"},"MIT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/network/NetworkSuite"},"NTttcp")),(0,n.kt)("td",{parentName:"tr",align:null},"Network bandwidth"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/microsoft/ntttcp/blob/main/LICENSE"},"MIT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/openfoam/"},"OpenFOAM")),(0,n.kt)("td",{parentName:"tr",align:null},"Fluidmechanics"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/OpenFOAM/OpenFOAM-10/blob/master/COPYING"},"Custom"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/openssl/"},"OpenSSL")),(0,n.kt)("td",{parentName:"tr",align:null},"Cryptography"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/openssl/openssl/blob/master/LICENSE.txt"},"Apache-2.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../workloads/compression/pbzip2.md"},"pbzip2")),(0,n.kt)("td",{parentName:"tr",align:null},"pbzip2 compression"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://compression.great-site.net/pbzip2/"},"BSD"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../workloads/prime95/prime95.md"},"Prime95")),(0,n.kt)("td",{parentName:"tr",align:null},"Prime number search"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.mersenne.org/legal/"},"Custom"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/redis/"},"Redis")),(0,n.kt)("td",{parentName:"tr",align:null},"Redis Performance"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/redis/redis/blob/unstable/COPYING"},(0,n.kt)("strong",{parentName:"a"},"Redis"),":BSD-3"),(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"https://github.com/RedisLabs/memtier_benchmark/blob/master/COPYING"},(0,n.kt)("strong",{parentName:"a"},"Memtier"),":GPL-2.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/network/NetworkSuite"},"SockPerf")),(0,n.kt)("td",{parentName:"tr",align:null},"Network latency"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Mellanox/sockperf/blob/sockperf_v2/copying"},"Custom"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/VirtualClient/zh-Hans/docs/workloads/specjvm/"},"SPECjvm")),(0,n.kt)("td",{parentName:"tr",align:null},"Java Runtime"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.spec.org/spec/docs/SPEC_General_License.pdf"},"SPEC"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../workloads/stress-ng/StressNg.md"},"stress-ng")),(0,n.kt)("td",{parentName:"tr",align:null},"Fault Tolerance"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/ColinIanKing/stress-ng/blob/master/COPYING"},"GPL-2.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../workloads/superbenchmark/superbenchmark.md"},"SuperBench")),(0,n.kt)("td",{parentName:"tr",align:null},"Machine learning"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/microsoft/superbenchmark/blob/main/LICENSE"},"MIT"))))),(0,n.kt)("h2",{id:"system-monitoring-facilities"},"System Monitoring Facilities"),(0,n.kt)("p",null,"The platform supports capturing information from the system in the background while workloads are running. The following list of monitoring facilities are available in the Virtual Client. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Certain monitoring facilities are only available on specific hardware because they expect specific tools/hardware on the system (e.g. ipmiutil, nvidia monitors).")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Monitoring Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Monitor"),(0,n.kt)("th",{parentName:"tr",align:null},"Dependency"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported Platforms/Architectures"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Performance/Reliability"),(0,n.kt)("td",{parentName:"tr",align:null},"Performance Counters"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"linux-x64, linux-arm64, win-x64, win-arm64"),(0,n.kt)("td",{parentName:"tr",align:null},"A standard set of performance counters is captured for all executions of the application: ",(0,n.kt)("a",{parentName:"td",href:"../workloads/PerformanceCounterMetrics.md"},"Counters Captured"))))),(0,n.kt)("admonition",{title:"More workloads and monitors are coming",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"VirtualClient is just migrated from MSFT inner-source to GitHub. We are still reviewing the feasibility of some internal workloads and monitors. We are also implementing a way to safely release automation for paid/commercial workloads (SPECcpu, SPECjbb, GeekBench5, 3DMark). They will come to VC in the future.")),(0,n.kt)("h2",{id:"current-stable-versions"},"Current Stable Version(s)"),(0,n.kt)("p",null,"The following section designates the latest stable versions of the Virtual Client. If the version of the Virtual Client is not in this list, then it is NOT recommended for use anymore."),(0,n.kt)("h3",{id:"version-002"},"Version 0.0.2"),(0,n.kt)("p",null,"Released "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NuGet Release")),(0,n.kt)("h2",{id:"telemetry-notice"},"Telemetry Notice"),(0,n.kt)("p",null,"Data Collection. "),(0,n.kt)("p",null,"The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft\u2019s privacy statement. Our privacy statement is located at ",(0,n.kt)("a",{parentName:"p",href:"https://go.microsoft.com/fwlink/?LinkID=824704"},"https://go.microsoft.com/fwlink/?LinkID=824704"),". You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices."),(0,n.kt)("h2",{id:"trademarks"},"Trademarks"),(0,n.kt)("p",null,"This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft\ntrademarks or logos is subject to and must follow\n",(0,n.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general"},"Microsoft's Trademark & Brand Guidelines"),".\nUse of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.\nAny use of third-party trademarks or logos are subject to those third-party's policies."))}d.isMDXComponent=!0}}]);