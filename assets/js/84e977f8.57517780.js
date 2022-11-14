"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[562],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(h,o(o({ref:r},u),{},{components:t})):n.createElement(h,o({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8494:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const a={id:"superbenchmark"},o="SuperBenchmark Workload Suite",l={unversionedId:"workloads/superbenchmark/superbenchmark",id:"workloads/superbenchmark/superbenchmark",title:"SuperBenchmark Workload Suite",description:"SuperBench is a validation and profiling tool for AI infrastructure. It highly specializes in GPU performance benchmarking.",source:"@site/docs/workloads/superbenchmark/SuperBenchmark.md",sourceDirName:"workloads/superbenchmark",slug:"/workloads/superbenchmark/",permalink:"/VirtualClient/docs/workloads/superbenchmark/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/superbenchmark/SuperBenchmark.md",tags:[],version:"current",frontMatter:{id:"superbenchmark"},sidebar:"tutorialSidebar",previous:{title:"SPECjvm Workload Profiles",permalink:"/VirtualClient/docs/workloads/specjvm/SPECjvmProfiles"},next:{title:"SuperBenchmark Workload Metrics",permalink:"/VirtualClient/docs/workloads/superbenchmark/SuperBenchmarkMetrics"}},s={},c=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"System Requirements",id:"system-requirements",level:3},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Dependencies",id:"dependencies",level:3}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"superbenchmark-workload-suite"},"SuperBenchmark Workload Suite"),(0,i.kt)("p",null,"SuperBench is a validation and profiling tool for AI infrastructure. It highly specializes in GPU performance benchmarking."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/superbenchmark/docs/introduction"},"SuperBenchmark Documentation"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/superbenchmark/docs/user-tutorial/benchmarks/micro-benchmarks"},"SuperBenchmark Benchmarks"))),(0,i.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,i.kt)("p",null,"GPU performance"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,i.kt)("p",null,"This is a GPU specific workload and requires high-performance graphic cards to run. The system under test has to have some high-performing Nvidia(M60 or higher)/AMD(MI25 or higher) graphics card."),(0,i.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux x64 - Nvidia GPU"),(0,i.kt)("li",{parentName:"ul"},"Linux x64 - AMD GPU (Work in progress)")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"The following dependencies are required to be installed on the Unix/Linux system in order to support the requirements\nof the MLPerf workload. Note that the Virtual Client will handle the installation of any required dependencies."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"GPU driver (Nvidia: nvidia-smi, AMD: rocm-smi)"),(0,i.kt)("li",{parentName:"ol"},"Docker CE"),(0,i.kt)("li",{parentName:"ol"},"CUDA and Nvidia container toolkit"),(0,i.kt)("li",{parentName:"ol"},"Actual GPU and turned on")))}p.isMDXComponent=!0}}]);