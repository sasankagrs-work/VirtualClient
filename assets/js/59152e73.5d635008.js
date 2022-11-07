"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[5713],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>g});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),N=u(n),g=l,s=N["".concat(m,".").concat(g)]||N[g]||p[g]||r;return n?a.createElement(s,i(i({ref:e},k),{},{components:n})):a.createElement(s,i({ref:e},k))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=N;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},1382:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={},i="Redis Workload Metrics",d={unversionedId:"workloads/redis/RedisMetrics",id:"workloads/redis/RedisMetrics",title:"Redis Workload Metrics",description:"The following document illustrates the type of results that are emitted by the Redis workload and captured by the",source:"@site/docs/workloads/redis/RedisMetrics.md",sourceDirName:"workloads/redis",slug:"/workloads/redis/RedisMetrics",permalink:"/VirtualClient/docs/workloads/redis/RedisMetrics",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/docs/workloads/redis/RedisMetrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"REDIS Workload",permalink:"/VirtualClient/docs/workloads/redis/"},next:{title:"Redis Workload Profiles",permalink:"/VirtualClient/docs/workloads/redis/RedisProfiles"}},m={},u=[{value:"System Metrics",id:"system-metrics",level:3},{value:"Workload-Specific Metrics",id:"workload-specific-metrics",level:3}],k={toc:u};function p(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"redis-workload-metrics"},"Redis Workload Metrics"),(0,l.kt)("p",null,"The following document illustrates the type of results that are emitted by the Redis workload and captured by the\nVirtual Client for net impact analysis."),(0,l.kt)("h3",{id:"system-metrics"},"System Metrics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./PerformanceCounterMetrics.md"},"Performance Counters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./PowerMetrics.md"},"Power/Temperature Measurements"))),(0,l.kt)("h3",{id:"workload-specific-metrics"},"Workload-Specific Metrics"),(0,l.kt)("p",null,"The following metrics are emitted by the Redis workload itself."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Execution Profile"),(0,l.kt)("th",{parentName:"tr",align:null},"Tool Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,l.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisMemtier"),(0,l.kt)("td",{parentName:"tr",align:null},"Throughput_1"),(0,l.kt)("td",{parentName:"tr",align:null},"270454.59"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisMemtier"),(0,l.kt)("td",{parentName:"tr",align:null},"Throughput_2"),(0,l.kt)("td",{parentName:"tr",align:null},"283481.85"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisMemtier"),(0,l.kt)("td",{parentName:"tr",align:null},"Throughput"),(0,l.kt)("td",{parentName:"tr",align:null},"553936.44"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisMemtier"),(0,l.kt)("td",{parentName:"tr",align:null},"P50lat"),(0,l.kt)("td",{parentName:"tr",align:null},"0.407"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisMemtier"),(0,l.kt)("td",{parentName:"tr",align:null},"P90lat"),(0,l.kt)("td",{parentName:"tr",align:null},"0.663"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisMemtier"),(0,l.kt)("td",{parentName:"tr",align:null},"P95lat"),(0,l.kt)("td",{parentName:"tr",align:null},"0.775"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisMemtier"),(0,l.kt)("td",{parentName:"tr",align:null},"P99_9lat"),(0,l.kt)("td",{parentName:"tr",align:null},"3.791"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisMemtier"),(0,l.kt)("td",{parentName:"tr",align:null},"P99lat"),(0,l.kt)("td",{parentName:"tr",align:null},"1.279"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_INLINE_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"303515.16"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_INLINE_verage_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.08"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_INLINE_Min_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.048"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_INLINE_P50_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.071"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_INLINE_P95_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.151"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_INLINE_P99_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.207"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_INLINE_Max_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.295"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_MBULK_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"256820.5"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_MBULK_Average_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.103"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_MBULK_Min_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.056"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_MBULK_P50_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.087"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_MBULK_P95_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.159"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_MBULK_P99_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.239"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"PING_MBULK_Max_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"2.311\tmilliSeconds"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"SET_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"166933.34"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"SET_Average_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.169"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"SET_Min_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.064"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"SET_P50_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.119"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"SET_P95_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.239"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"SET_P99_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"1.903"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"SET_Max_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"4.183"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"GET_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"250400"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"GET_Average_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.097"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"GET_P50_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.087"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"GET_P95_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.191"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"GET_P99_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.271"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"GET_P99_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.271"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"GET_Max_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.487"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"INCR_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"244292.67"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"INCR_Average_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.103"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"INCR_Min_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.064"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"INCR_P50_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.095"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"INCR_P95_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.175"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"INCR_P99_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.287"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"INCR_Max_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.399"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"LPUSH_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"164196.72"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"LPUSH_Average_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.155"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"LPUSH_Min_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.072"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"LPUSH_P50_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.111"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"LPUSH_P95_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.255"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"RPUSH_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"227636.36"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"LPOP_Average_Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"0.123"),(0,l.kt)("td",{parentName:"tr",align:null},"milliSeconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"RPOP_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"244292.67"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"SADD_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"294588.22"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"HSET_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"256820.5"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"SPOP_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"323096.78"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"ZADD_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"256820.5"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"ZPOPMIN_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"294588.22"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"LPUSH (needed to benchmark LRANGE)_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"270702.69"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PERF-REDIS (linux-x64)"),(0,l.kt)("td",{parentName:"tr",align:null},"RedisBenchmark"),(0,l.kt)("td",{parentName:"tr",align:null},"LRANGE_100 (first 100 elements)_Requests/Sec"),(0,l.kt)("td",{parentName:"tr",align:null},"48858.54"),(0,l.kt)("td",{parentName:"tr",align:null},"requests/second")))))}p.isMDXComponent=!0}}]);