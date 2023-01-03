"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3926],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5798:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={},i="OpenFOAM",o={unversionedId:"workloads/openfoam/openfoam",id:"workloads/openfoam/openfoam",title:"OpenFOAM",description:"OpenFOAM is a free, open source computational fluid dynamics (CFD) software package released free and open-source under the GNU General Public License",source:"@site/docs/workloads/openfoam/openfoam.md",sourceDirName:"workloads/openfoam",slug:"/workloads/openfoam/",permalink:"/VirtualClient/docs/workloads/openfoam/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/openfoam/openfoam.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Network Workload Suite Profiles",permalink:"/VirtualClient/docs/workloads/network-suite/network-suite-profiles"},next:{title:"OpenFOAM Workload Profiles",permalink:"/VirtualClient/docs/workloads/openfoam/openfoam-profiles"}},p={},m=[{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2}],u={toc:m};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openfoam"},"OpenFOAM"),(0,r.kt)("p",null,"OpenFOAM is a free, open source computational fluid dynamics (CFD) software package released free and open-source under the GNU General Public License\nthrough ",(0,r.kt)("a",{parentName:"p",href:"http://www.openfoam.com."},"www.openfoam.com.")," It has a large user base across most areas of engineering and science, from both commercial and\nacademic organisations. OpenFOAM has an extensive range of features to solve anything from complex fluid flows involving\nchemical reactions, turbulence and heat transfer, to solid dynamics and electromagnetics."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.openfoam.com/"},"OpenFOAM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openfoamwiki.net/"},"OpenFOAM Wiki")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openfoamwiki.net/index.php/Tutorials/Before_Getting_Started"},"OpenFOAM Getting Started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Computational_fluid_dynamics"},"Computational Fluid Dynamics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/c/OpenFOAMTutorials/videos"},"Tutorials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.ubuntu.com/search?keywords=openfoam"},"Arm64 Binaries Details"))),(0,r.kt)("h2",{id:"what-is-being-measured"},"What is Being Measured?"),(0,r.kt)("p",null,"OpenFOAM is used to measure performance for completing a number of CFD simulations in a minute of time (i.e. iterations per minute). The following set\nof simulations are onboarded:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Simulation Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Solver"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"motorBike"),(0,r.kt)("td",{parentName:"tr",align:null},"simpleFoam"),(0,r.kt)("td",{parentName:"tr",align:null},"On linux-x64 platforms only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pitzDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"simpleFoam"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airFoil2D"),(0,r.kt)("td",{parentName:"tr",align:null},"simpleFoam"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elbow"),(0,r.kt)("td",{parentName:"tr",align:null},"icoFoam"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lockExchange"),(0,r.kt)("td",{parentName:"tr",align:null},"twoLiquidMixingFoam"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"workload-metrics"},"Workload Metrics"),(0,r.kt)("p",null,"The following metrics are examples of those captured by the Virtual Client when running the OpenFOAM workload."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (min)"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (max)"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pitzDaily"),(0,r.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,r.kt)("td",{parentName:"tr",align:null},"1575.48"),(0,r.kt)("td",{parentName:"tr",align:null},"1600.37"),(0,r.kt)("td",{parentName:"tr",align:null},"1690.7"),(0,r.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airFoil2D"),(0,r.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,r.kt)("td",{parentName:"tr",align:null},"2413.6"),(0,r.kt)("td",{parentName:"tr",align:null},"2435.79"),(0,r.kt)("td",{parentName:"tr",align:null},"2420.9"),(0,r.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elbow"),(0,r.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,r.kt)("td",{parentName:"tr",align:null},"17518.9"),(0,r.kt)("td",{parentName:"tr",align:null},"17605.5"),(0,r.kt)("td",{parentName:"tr",align:null},"16556.7"),(0,r.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"motorbike"),(0,r.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,r.kt)("td",{parentName:"tr",align:null},"17.70"),(0,r.kt)("td",{parentName:"tr",align:null},"17.71"),(0,r.kt)("td",{parentName:"tr",align:null},"17.72"),(0,r.kt)("td",{parentName:"tr",align:null},"itrs/min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lockExchange"),(0,r.kt)("td",{parentName:"tr",align:null},"Iterations/min"),(0,r.kt)("td",{parentName:"tr",align:null},"32.25"),(0,r.kt)("td",{parentName:"tr",align:null},"32.27"),(0,r.kt)("td",{parentName:"tr",align:null},"32.30"),(0,r.kt)("td",{parentName:"tr",align:null},"itrs/min")))))}s.isMDXComponent=!0}}]);