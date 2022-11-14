"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[5643],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},l="Prime95 Workload Metrics",o={unversionedId:"workloads/prime95/prime95-metrics",id:"workloads/prime95/prime95-metrics",title:"Prime95 Workload Metrics",description:"The following document illustrates the type of results that are emitted by the",source:"@site/docs/workloads/prime95/prime95-metrics.md",sourceDirName:"workloads/prime95",slug:"/workloads/prime95/prime95-metrics",permalink:"/VirtualClient/docs/workloads/prime95/prime95-metrics",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/prime95/prime95-metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prime95 Workload",permalink:"/VirtualClient/docs/workloads/prime95/prime95-1"},next:{title:"Prime95 Workload Profiles",permalink:"/VirtualClient/docs/workloads/prime95/prime95-profiles"}},s={},p=[{value:"Workload-Specific Metrics",id:"workload-specific-metrics",level:3}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prime95-workload-metrics"},"Prime95 Workload Metrics"),(0,a.kt)("p",null,"The following document illustrates the type of results that are emitted by the\nPrime95 workload and captured by the Virtual Client for net impact analysis."),(0,a.kt)("h3",{id:"workload-specific-metrics"},"Workload-Specific Metrics"),(0,a.kt)("p",null,"The following metrics are captured during the operations of the Prime95 workload."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Execution Profile"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Relativity"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-CPU-PRIME95.json"),(0,a.kt)("td",{parentName:"tr",align:null},"passTestCount"),(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"HigherIsBetter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-CPU-PRIME95.json"),(0,a.kt)("td",{parentName:"tr",align:null},"failTestCount"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"LowerIsBetter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PERF-CPU-PRIME95.json"),(0,a.kt)("td",{parentName:"tr",align:null},"testTime"),(0,a.kt)("td",{parentName:"tr",align:null},"600.06"),(0,a.kt)("td",{parentName:"tr",align:null},"seconds"),(0,a.kt)("td",{parentName:"tr",align:null},"HigherIsBetter")))),(0,a.kt)("p",null,"Note that if the failTestCount is greater than 0, it denotes an overall Prime95 test failure and some harware error."),(0,a.kt)("p",null,"The testTime is the time for which the system was stressed with torture test. Higher the testTime without\nany error, more is the confidence in Prime95 results."))}c.isMDXComponent=!0}}]);