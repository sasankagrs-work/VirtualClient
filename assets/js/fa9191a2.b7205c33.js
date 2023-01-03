"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3941],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},900:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},i="LAPACK",o={unversionedId:"workloads/lapack/lapack",id:"workloads/lapack/lapack",title:"LAPACK",description:"LAPACK 3.10.0 is an open-source set of libraries written in Fortran 90 and provides routines for solving systems of simultaneous linear equations,",source:"@site/docs/workloads/lapack/lapack.md",sourceDirName:"workloads/lapack",slug:"/workloads/lapack/",permalink:"/VirtualClient/docs/workloads/lapack/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/lapack/lapack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HPCG Workload Profiles",permalink:"/VirtualClient/docs/workloads/hpcg/hpcg-profiles"},next:{title:"LAPACK Workload Profiles",permalink:"/VirtualClient/docs/workloads/lapack/lapack-profiles"}},p={},u=[{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2}],m={toc:u};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lapack"},"LAPACK"),(0,r.kt)("p",null,"LAPACK 3.10.0 is an open-source set of libraries written in Fortran 90 and provides routines for solving systems of simultaneous linear equations,\nleast-squares solutions of linear systems of equations, eigenvalue problems, and singular value problems.\nIt has been designed to be efficient on a wide range of modern high-performance computers."),(0,r.kt)("p",null,"This toolset was compiled from the official website and modified so that it is easier to integrate into VirtualClient."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.netlib.org/lapack/"},"LAPACK Offical Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Reference-LAPACK/lapack"},"LAPACK Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.netlib.org/lapack/lawnspdf/lawn41.pdf"},"LAPACK Installation Guide"))),(0,r.kt)("h2",{id:"what-is-being-measured"},"What is Being Measured?"),(0,r.kt)("p",null,"LAPACK is designed to be a very simple benchmarking tool. It produces the amount of time it takes to test a set of LAPACK driver routines\nunder different precisions such as single precision, double, complex, complex double. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compute times for linear algorithms (single-precision)"),(0,r.kt)("li",{parentName:"ul"},"Compute times for linear algorithms (double-precision)"),(0,r.kt)("li",{parentName:"ul"},"Compute times for linear algorithms (complex data type, single precision)"),(0,r.kt)("li",{parentName:"ul"},"Compute times for linear algorithms (complex data type, double complex precision)"),(0,r.kt)("li",{parentName:"ul"},"Compute times for Eigenvalue problems (single-precision)"),(0,r.kt)("li",{parentName:"ul"},"Compute times for Eigenvalue problems (double-precision)"),(0,r.kt)("li",{parentName:"ul"},"Compute times for Eigenvalue problems (complex data type, single precision)"),(0,r.kt)("li",{parentName:"ul"},"Compute times for Eigenvalue problems (complex data type, double complex precision)")),(0,r.kt)("h2",{id:"workload-metrics"},"Workload Metrics"),(0,r.kt)("p",null,"The following metrics are examples of those captured by the Virtual Client when running the LAPACK workload."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (min)"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (max)"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex"),(0,r.kt)("td",{parentName:"tr",align:null},"5.229999999999999"),(0,r.kt)("td",{parentName:"tr",align:null},"20.729999999999998"),(0,r.kt)("td",{parentName:"tr",align:null},"7.753214694064213"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex_Double"),(0,r.kt)("td",{parentName:"tr",align:null},"7.029999999999999"),(0,r.kt)("td",{parentName:"tr",align:null},"32.39000000000001"),(0,r.kt)("td",{parentName:"tr",align:null},"10.280553078192105"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Double_Precision"),(0,r.kt)("td",{parentName:"tr",align:null},"4.709999999999998"),(0,r.kt)("td",{parentName:"tr",align:null},"12.759999999999998"),(0,r.kt)("td",{parentName:"tr",align:null},"6.071805752927895"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Single_Precision"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3399999999999996"),(0,r.kt)("td",{parentName:"tr",align:null},"10.229999999999999"),(0,r.kt)("td",{parentName:"tr",align:null},"4.584710148478463"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex"),(0,r.kt)("td",{parentName:"tr",align:null},"4.23"),(0,r.kt)("td",{parentName:"tr",align:null},"26.78"),(0,r.kt)("td",{parentName:"tr",align:null},"7.305731430530846"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex_Double"),(0,r.kt)("td",{parentName:"tr",align:null},"5.22"),(0,r.kt)("td",{parentName:"tr",align:null},"42.89"),(0,r.kt)("td",{parentName:"tr",align:null},"9.374530150384569"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Double_Precision"),(0,r.kt)("td",{parentName:"tr",align:null},"1.95"),(0,r.kt)("td",{parentName:"tr",align:null},"5.84"),(0,r.kt)("td",{parentName:"tr",align:null},"2.894817693450652"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Single_Precision"),(0,r.kt)("td",{parentName:"tr",align:null},"1.92"),(0,r.kt)("td",{parentName:"tr",align:null},"6.67"),(0,r.kt)("td",{parentName:"tr",align:null},"2.8232810280358646"),(0,r.kt)("td",{parentName:"tr",align:null},"seconds"),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);