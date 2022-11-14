"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[7451],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>k});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),m=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=m(t.components);return a.createElement(p.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(e),k=r,N=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return e?a.createElement(N,i(i({ref:n},d),{},{components:e})):a.createElement(N,i({ref:n},d))}));function k(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=e[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},6548:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=e(7462),r=(e(7294),e(3905));const l={},i="Compression/Decompression Workloads Metrics",o={unversionedId:"workloads/compression/CompressionMetrics",id:"workloads/compression/CompressionMetrics",title:"Compression/Decompression Workloads Metrics",description:"The following document illustrates the type of results that are emitted by the compression/decompression workloads and captured by the",source:"@site/docs/workloads/compression/CompressionMetrics.md",sourceDirName:"workloads/compression",slug:"/workloads/compression/CompressionMetrics",permalink:"/VirtualClient/zh-Hans/docs/workloads/compression/CompressionMetrics",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/compression/CompressionMetrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"7zip",permalink:"/VirtualClient/zh-Hans/docs/workloads/compression/7zip"},next:{title:"Compression/Decompression Workloads Profiles",permalink:"/VirtualClient/zh-Hans/docs/workloads/compression/CompressionProfiles"}},p={},m=[{value:"Workload-Specific Metrics",id:"workload-specific-metrics",level:3}],d={toc:m};function s(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compressiondecompression-workloads-metrics"},"Compression/Decompression Workloads Metrics"),(0,r.kt)("p",null,"The following document illustrates the type of results that are emitted by the compression/decompression workloads and captured by the\nVirtual Client for net impact analysis."),(0,r.kt)("h3",{id:"workload-specific-metrics"},"Workload-Specific Metrics"),(0,r.kt)("p",null,"The following metrics are emitted by the compression/decompression workloads itself."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Execution Profile"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (min)"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (max)"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (win-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed size and Original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"22.7"),(0,r.kt)("td",{parentName:"tr",align:null},"29.6"),(0,r.kt)("td",{parentName:"tr",align:null},"25.3"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (win-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,r.kt)("td",{parentName:"tr",align:null},"27.6"),(0,r.kt)("td",{parentName:"tr",align:null},"899.3"),(0,r.kt)("td",{parentName:"tr",align:null},"432.3"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (win-arm64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed size and Original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"21.4"),(0,r.kt)("td",{parentName:"tr",align:null},"26.5"),(0,r.kt)("td",{parentName:"tr",align:null},"24.9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (win-arm64)"),(0,r.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,r.kt)("td",{parentName:"tr",align:null},"25.4"),(0,r.kt)("td",{parentName:"tr",align:null},"950.4"),(0,r.kt)("td",{parentName:"tr",align:null},"500.7"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"ReductionRatio"),(0,r.kt)("td",{parentName:"tr",align:null},"28.8"),(0,r.kt)("td",{parentName:"tr",align:null},"90.5"),(0,r.kt)("td",{parentName:"tr",align:null},"65.4"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-arm64)"),(0,r.kt)("td",{parentName:"tr",align:null},"ReductionRatio"),(0,r.kt)("td",{parentName:"tr",align:null},"29.0"),(0,r.kt)("td",{parentName:"tr",align:null},"88.2"),(0,r.kt)("td",{parentName:"tr",align:null},"69.2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Decompression Speed(tornado 0.6a -9)"),(0,r.kt)("td",{parentName:"tr",align:null},"170"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"190"),(0,r.kt)("td",{parentName:"tr",align:null},"MB/s"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Compression Speed(tornado 0.6a -9)"),(0,r.kt)("td",{parentName:"tr",align:null},"5.1"),(0,r.kt)("td",{parentName:"tr",align:null},"5.95"),(0,r.kt)("td",{parentName:"tr",align:null},"5.4"),(0,r.kt)("td",{parentName:"tr",align:null},"MB/s"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed size and original size ratio(tornado 0.6a -9)"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"27"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-arm64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Decompression Speed(tornado 0.6a -1)"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"550"),(0,r.kt)("td",{parentName:"tr",align:null},"520"),(0,r.kt)("td",{parentName:"tr",align:null},"MB/s"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-arm64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Compression Speed(tornado 0.6a -1)"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"480"),(0,r.kt)("td",{parentName:"tr",align:null},"440"),(0,r.kt)("td",{parentName:"tr",align:null},"MB/s"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-arm64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed size and original size ratio(tornado 0.6a -1)"),(0,r.kt)("td",{parentName:"tr",align:null},"45.5"),(0,r.kt)("td",{parentName:"tr",align:null},"52"),(0,r.kt)("td",{parentName:"tr",align:null},"50.52"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed size and original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"25.1"),(0,r.kt)("td",{parentName:"tr",align:null},"25.9"),(0,r.kt)("td",{parentName:"tr",align:null},"25.2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Decompressed size and original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"378.6"),(0,r.kt)("td",{parentName:"tr",align:null},"378.6"),(0,r.kt)("td",{parentName:"tr",align:null},"378.6"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-arm64)"),(0,r.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,r.kt)("td",{parentName:"tr",align:null},"1.7"),(0,r.kt)("td",{parentName:"tr",align:null},"3.9"),(0,r.kt)("td",{parentName:"tr",align:null},"3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-arm64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Compressed size and original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"25.1"),(0,r.kt)("td",{parentName:"tr",align:null},"25.9"),(0,r.kt)("td",{parentName:"tr",align:null},"25.2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PERF-COMPRESSION.json (linux-x64)"),(0,r.kt)("td",{parentName:"tr",align:null},"Decompressed size and original size ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"378.6"),(0,r.kt)("td",{parentName:"tr",align:null},"378.6"),(0,r.kt)("td",{parentName:"tr",align:null},"378.6"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);