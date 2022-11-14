"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4005],{3905:(t,e,r)=>{r.d(e,{Zo:()=>k,kt:()=>d});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),u=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},k=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),m=u(r),d=n,s=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(s,o(o({ref:e},k),{},{components:r})):a.createElement(s,o({ref:e},k))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4880:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={},o="CoreMark Workload Metrics",i={unversionedId:"workloads/coremark/CoreMarkMetrics",id:"workloads/coremark/CoreMarkMetrics",title:"CoreMark Workload Metrics",description:"The following document illustrates the type of results that are emitted by the CoreMark workload and captured by the",source:"@site/docs/workloads/coremark/CoreMarkMetrics.md",sourceDirName:"workloads/coremark",slug:"/workloads/coremark/CoreMarkMetrics",permalink:"/VirtualClient/docs/workloads/coremark/CoreMarkMetrics",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/coremark/CoreMarkMetrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pbzip2",permalink:"/VirtualClient/docs/workloads/compression/pbzip2"},next:{title:"CoreMark Workload Profiles",permalink:"/VirtualClient/docs/workloads/coremark/CoreMarkProfiles"}},p={},u=[{value:"Workload-Specific Metrics",id:"workload-specific-metrics",level:3}],k={toc:u};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coremark-workload-metrics"},"CoreMark Workload Metrics"),(0,n.kt)("p",null,"The following document illustrates the type of results that are emitted by the CoreMark workload and captured by the\nVirtual Client for net impact analysis."),(0,n.kt)("h3",{id:"workload-specific-metrics"},"Workload-Specific Metrics"),(0,n.kt)("p",null,"The following metrics are emitted by the CoreMark workload itself."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Execution Profile"),(0,n.kt)("th",{parentName:"tr",align:null},"Test Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Value (min)"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Value (max)"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark Size"),(0,n.kt)("td",{parentName:"tr",align:null},"666.0"),(0,n.kt)("td",{parentName:"tr",align:null},"666.0"),(0,n.kt)("td",{parentName:"tr",align:null},"666.0"),(0,n.kt)("td",{parentName:"tr",align:null},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Iterations"),(0,n.kt)("td",{parentName:"tr",align:null},"400000.0"),(0,n.kt)("td",{parentName:"tr",align:null},"800000.0"),(0,n.kt)("td",{parentName:"tr",align:null},"773160.1731601731"),(0,n.kt)("td",{parentName:"tr",align:null},"iterations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Iterations/Sec"),(0,n.kt)("td",{parentName:"tr",align:null},"19968.051118"),(0,n.kt)("td",{parentName:"tr",align:null},"33889.689062"),(0,n.kt)("td",{parentName:"tr",align:null},"33081.75554433839"),(0,n.kt)("td",{parentName:"tr",align:null},"iterations/sec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Parallel PThreads"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Total ticks"),(0,n.kt)("td",{parentName:"tr",align:null},"12022.0"),(0,n.kt)("td",{parentName:"tr",align:null},"36126.0"),(0,n.kt)("td",{parentName:"tr",align:null},"23365.67617325762"),(0,n.kt)("td",{parentName:"tr",align:null},"ticks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Total time (secs)"),(0,n.kt)("td",{parentName:"tr",align:null},"12.022"),(0,n.kt)("td",{parentName:"tr",align:null},"36.126"),(0,n.kt)("td",{parentName:"tr",align:null},"23.365676173257606"),(0,n.kt)("td",{parentName:"tr",align:null},"secs")))))}c.isMDXComponent=!0}}]);