"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9077],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=m(t,["components","mdxType","originalType","parentName"]),d=u(a),k=r,o=d["".concat(i,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(o,p(p({ref:e},c),{},{components:a})):n.createElement(o,p({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=d;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m.mdxType="string"==typeof t?t:r,p[1]=m;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2604:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},p="SPECcpu",m={unversionedId:"workloads/speccpu/speccpu",id:"workloads/speccpu/speccpu",title:"SPECcpu",description:"SPEC CPU is a workload created and licensed by the Standard Performance Evalution Corporation. The SPEC CPU\xae 2017 benchmark package contains SPEC's",source:"@site/docs/workloads/speccpu/speccpu.md",sourceDirName:"workloads/speccpu",slug:"/workloads/speccpu/",permalink:"/VirtualClient/docs/workloads/speccpu/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/speccpu/speccpu.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis Workload Profiles",permalink:"/VirtualClient/docs/workloads/redis/redis-profiles"},next:{title:"SPEC CPU Workload Profiles",permalink:"/VirtualClient/docs/workloads/speccpu/speccpu-profiles"}},i={},u=[{value:"System Requirements",id:"system-requirements",level:2},{value:"How to package SPECcpu",id:"how-to-package-speccpu",level:2},{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics",id:"workload-metrics",level:2}],c={toc:u};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"speccpu"},"SPECcpu"),(0,r.kt)("p",null,"SPEC CPU is a workload created and licensed by the Standard Performance Evalution Corporation. The SPEC CPU\xae 2017 benchmark package contains SPEC's\nnext-generation, industry-standardized, CPU intensive suites for measuring and comparing compute intensive performance, stressing a system's processor,\nmemory subsystem and compiler."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.spec.org/cpu2017/"},"SPEC CPU Documentation"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://spec.org/cpu2017/Docs/quick-start.html"},"SPEC CPU 2017 QuickStart"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pro.spec.org/private/osg/cpu/cpu2017/src/"},"SPEC CPU Download"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.spec.org/cpu2017/Docs/overview.html#Q13"},"SPEC CPU Benchmarks"))),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("p",null,"The following section provides special considerations required for the system on which the SPEC CPU workload will be run."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://spec.org/cpu2017/Docs/system-requirements.html"},"https://spec.org/cpu2017/Docs/system-requirements.html")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Physical Memory = 16 GB minimum  "),(0,r.kt)("li",{parentName:"ul"},"Disk Space = 250 GB minimum on the OS disk")),(0,r.kt)("h2",{id:"how-to-package-speccpu"},"How to package SPECcpu"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SPECcpu2017 is a commercial workload. VirtualClient cannot distribute the license and binary. You need to follow the following steps to package this workload and make it available locally or in a storage that you own.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SPECcpu can be downloaded here ",(0,r.kt)("a",{parentName:"p",href:"https://pro.spec.org/private/osg/cpu/cpu2017/src/"},"https://pro.spec.org/private/osg/cpu/cpu2017/src/"),", with SPEC credentials. Download ISO file cpu2017-1.1.8.iso.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Please create a new directory ",(0,r.kt)("inlineCode",{parentName:"p"},"speccpu")," (flexible), and insert one ",(0,r.kt)("inlineCode",{parentName:"p"},"speccpu2017.vcpkg")," json file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-treeview",metastring:"{3}","{3}":!0},"  speccpu\n  \u251c\u2500\u2500\u2500cpu2017-1.1.8.iso\n  \u2514\u2500\u2500\u2500speccpu2017.vcpkg\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"speccpu2017.vcpkg")," json example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "speccpu2017",\n  "description": "SPEC CPU 2017 benchmark toolsets.",\n  "version": "1.1.8",\n  "metadata": {\n      "isoName": "cpu2017-1.1.8.iso"\n  }\n}\n')))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Zip the speccpu-1.1.8 directory into ",(0,r.kt)("inlineCode",{parentName:"li"},"speccpu-1.1.8.zip"),", make sure that no extra ",(0,r.kt)("inlineCode",{parentName:"li"},"/speccpu-1.1.8/")," top directory is created.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"7z a speccpu-1.1.8.zip ./speccpu-1.1.8/*\n")),"  or ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd speccpu-1.1.8; zip -r ../speccpu-1.1.8.zip *\n"))),(0,r.kt)("li",{parentName:"ol"},"Modify the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECCPU-INTRATE.json"},"SPECcpu profiles")," as needed. If you are using your own blob storage, you can use the profile as is. If you are copying the zip file locally under ",(0,r.kt)("inlineCode",{parentName:"li"},"vc/packages"),", you can simply remove the DependencyPackageInstallation step.")),(0,r.kt)("h2",{id:"what-is-being-measured"},"What is Being Measured?"),(0,r.kt)("p",null,"SPEC teams designed these suites to provide a comparative measure of compute-intensive performance across the widest practical range of hardware\nusing workloads developed from real user applications. The benchmarks are provided as source code and require the use of compiler commands\nas well as other commands via a shell or command prompt window. SPEC CPU 2017 also includes an optional metric for measuring energy consumption."),(0,r.kt)("p",null,"The SPEC CPU 2017 benchmark package contains 43 benchmarks, organized into four distinct workload suites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SPECspeed\xae 2017 Integer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used for measure the time required for the computer to complete single integer calculations."))),(0,r.kt)("li",{parentName:"ul"},"SPECspeed\xae 2017 Floating Point ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to measure the time required for the computer to complete single floating-point calculations."))),(0,r.kt)("li",{parentName:"ul"},"SPECrate\xae 2017 Integer  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Measure the throughput or work per unit of time on the computer for integer calculations."))),(0,r.kt)("li",{parentName:"ul"},"SPECrate\xae 2017 Floating Point",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Measure the throughput or work per unit of time on the computer for floating-point calculations.")))),(0,r.kt)("h2",{id:"workload-metrics"},"Workload Metrics"),(0,r.kt)("p",null,"The following metrics are examples of those captured by the Virtual Client when running the SPECcpu workload."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (min)"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (max)"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/600.perlbench_s.html"},"SPECcpu-base-600.perlbench_s")),(0,r.kt)("td",{parentName:"tr",align:null},"5.05"),(0,r.kt)("td",{parentName:"tr",align:null},"5.44"),(0,r.kt)("td",{parentName:"tr",align:null},"5.291236749116601"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/602.gcc_s.html"},"SPECcpu-base-602.gcc_s")),(0,r.kt)("td",{parentName:"tr",align:null},"7.07"),(0,r.kt)("td",{parentName:"tr",align:null},"7.68"),(0,r.kt)("td",{parentName:"tr",align:null},"7.355406360424022"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/605.mcf_s.html"},"SPECcpu-base-605.mcf_s")),(0,r.kt)("td",{parentName:"tr",align:null},"5.07"),(0,r.kt)("td",{parentName:"tr",align:null},"5.98"),(0,r.kt)("td",{parentName:"tr",align:null},"5.436749116607786"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/620.omnetpp_s.html"},"SPECcpu-base-620.omnetpp_s")),(0,r.kt)("td",{parentName:"tr",align:null},"3.81"),(0,r.kt)("td",{parentName:"tr",align:null},"5.51"),(0,r.kt)("td",{parentName:"tr",align:null},"5.185088339222612"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/623.xalancbmk_s.html"},"SPECcpu-base-623.xalancbmk_s")),(0,r.kt)("td",{parentName:"tr",align:null},"3.04"),(0,r.kt)("td",{parentName:"tr",align:null},"3.53"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3250176678445224"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/625.x264_s.html"},"SPECcpu-base-625.x264_s")),(0,r.kt)("td",{parentName:"tr",align:null},"3.62"),(0,r.kt)("td",{parentName:"tr",align:null},"3.78"),(0,r.kt)("td",{parentName:"tr",align:null},"3.7309893992932956"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/631.deepsjeng_s.html"},"SPECcpu-base-631.deepsjeng_s")),(0,r.kt)("td",{parentName:"tr",align:null},"3.49"),(0,r.kt)("td",{parentName:"tr",align:null},"3.65"),(0,r.kt)("td",{parentName:"tr",align:null},"3.5914487632508944"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/641.leela_s.html"},"SPECcpu-base-641.leela_s")),(0,r.kt)("td",{parentName:"tr",align:null},"3.32"),(0,r.kt)("td",{parentName:"tr",align:null},"3.45"),(0,r.kt)("td",{parentName:"tr",align:null},"3.419363957597164"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/648.exchange2_s.html"},"SPECcpu-base-648.exchange2_s")),(0,r.kt)("td",{parentName:"tr",align:null},"6.65"),(0,r.kt)("td",{parentName:"tr",align:null},"6.95"),(0,r.kt)("td",{parentName:"tr",align:null},"6.884946996466445"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/657.xz_s.html"},"SPECcpu-base-657.xz_s")),(0,r.kt)("td",{parentName:"tr",align:null},"9.24"),(0,r.kt)("td",{parentName:"tr",align:null},"10.3"),(0,r.kt)("td",{parentName:"tr",align:null},"9.804134275618383"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTspeed"),(0,r.kt)("td",{parentName:"tr",align:null},"SPECspeed(R)2017_int_base"),(0,r.kt)("td",{parentName:"tr",align:null},"4.82"),(0,r.kt)("td",{parentName:"tr",align:null},"5.2"),(0,r.kt)("td",{parentName:"tr",align:null},"5.07127208480564"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/500.perlbench_r.html"},"SPECcpu-base-500.perlbench_r")),(0,r.kt)("td",{parentName:"tr",align:null},"16.0"),(0,r.kt)("td",{parentName:"tr",align:null},"16.8"),(0,r.kt)("td",{parentName:"tr",align:null},"16.39600000000001"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/502.gcc_r.html"},"SPECcpu-base-502.gcc_r")),(0,r.kt)("td",{parentName:"tr",align:null},"18.4"),(0,r.kt)("td",{parentName:"tr",align:null},"19.8"),(0,r.kt)("td",{parentName:"tr",align:null},"18.812666666666673"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/505.mcf_r.html"},"SPECcpu-base-505.mcf_r")),(0,r.kt)("td",{parentName:"tr",align:null},"16.5"),(0,r.kt)("td",{parentName:"tr",align:null},"18.1"),(0,r.kt)("td",{parentName:"tr",align:null},"16.872666666666679"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/520.omnetpp_r.html"},"SPECcpu-base-520.omnetpp_r")),(0,r.kt)("td",{parentName:"tr",align:null},"10.1"),(0,r.kt)("td",{parentName:"tr",align:null},"11.5"),(0,r.kt)("td",{parentName:"tr",align:null},"10.736666666666674"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/523.xalancbmk_r.html"},"SPECcpu-base-523.xalancbmk_r")),(0,r.kt)("td",{parentName:"tr",align:null},"9.55"),(0,r.kt)("td",{parentName:"tr",align:null},"10.3"),(0,r.kt)("td",{parentName:"tr",align:null},"10.016400000000007"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/525.x264_r.html"},"SPECcpu-base-525.x264_r")),(0,r.kt)("td",{parentName:"tr",align:null},"14.4"),(0,r.kt)("td",{parentName:"tr",align:null},"14.8"),(0,r.kt)("td",{parentName:"tr",align:null},"14.65066666666666"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/531.deepsjeng_r.html"},"SPECcpu-base-531.deepsjeng_r")),(0,r.kt)("td",{parentName:"tr",align:null},"14.0"),(0,r.kt)("td",{parentName:"tr",align:null},"15.5"),(0,r.kt)("td",{parentName:"tr",align:null},"15.25466666666666"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/541.leela_r.html"},"SPECcpu-base-541.leela_r")),(0,r.kt)("td",{parentName:"tr",align:null},"14.7"),(0,r.kt)("td",{parentName:"tr",align:null},"15.6"),(0,r.kt)("td",{parentName:"tr",align:null},"15.44600000000001"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/548.exchange2_r.html"},"SPECcpu-base-548.exchange2_r")),(0,r.kt)("td",{parentName:"tr",align:null},"22.0"),(0,r.kt)("td",{parentName:"tr",align:null},"24.0"),(0,r.kt)("td",{parentName:"tr",align:null},"23.70733333333333"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/557.xz_r.html"},"SPECcpu-base-557.xz_r")),(0,r.kt)("td",{parentName:"tr",align:null},"13.7"),(0,r.kt)("td",{parentName:"tr",align:null},"14.7"),(0,r.kt)("td",{parentName:"tr",align:null},"14.183333333333318"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTrate"),(0,r.kt)("td",{parentName:"tr",align:null},"SPECrate(R)2017_int_base"),(0,r.kt)("td",{parentName:"tr",align:null},"14.9"),(0,r.kt)("td",{parentName:"tr",align:null},"15.7"),(0,r.kt)("td",{parentName:"tr",align:null},"15.179999999999988"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/603.bwaves_s.html"},"SPECcpu-base-603.bwaves_s")),(0,r.kt)("td",{parentName:"tr",align:null},"22.9"),(0,r.kt)("td",{parentName:"tr",align:null},"27.0"),(0,r.kt)("td",{parentName:"tr",align:null},"26.577027027027027"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/607.cactuBSSN_s.html"},"SPECcpu-base-607.cactuBSSN_s")),(0,r.kt)("td",{parentName:"tr",align:null},"22.0"),(0,r.kt)("td",{parentName:"tr",align:null},"23.1"),(0,r.kt)("td",{parentName:"tr",align:null},"22.409459459459474"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/619.lbm_s.html"},"SPECcpu-base-619.lbm_s")),(0,r.kt)("td",{parentName:"tr",align:null},"4.45"),(0,r.kt)("td",{parentName:"tr",align:null},"8.34"),(0,r.kt)("td",{parentName:"tr",align:null},"8.101216216216216"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/621.wrf_s.html"},"SPECcpu-base-621.wrf_s")),(0,r.kt)("td",{parentName:"tr",align:null},"13.3"),(0,r.kt)("td",{parentName:"tr",align:null},"15.4"),(0,r.kt)("td",{parentName:"tr",align:null},"15.07432432432433"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/627.cam4_s.html"},"SPECcpu-base-627.cam4_s")),(0,r.kt)("td",{parentName:"tr",align:null},"11.6"),(0,r.kt)("td",{parentName:"tr",align:null},"12.0"),(0,r.kt)("td",{parentName:"tr",align:null},"11.767567567567568"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/628.pop2_s.html"},"SPECcpu-base-628.pop2_s")),(0,r.kt)("td",{parentName:"tr",align:null},"12.7"),(0,r.kt)("td",{parentName:"tr",align:null},"14.2"),(0,r.kt)("td",{parentName:"tr",align:null},"13.904054054054047"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/638.imagick_s.html"},"SPECcpu-base-638.imagick_s")),(0,r.kt)("td",{parentName:"tr",align:null},"1.9"),(0,r.kt)("td",{parentName:"tr",align:null},"1.97"),(0,r.kt)("td",{parentName:"tr",align:null},"1.9393243243243255"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/644.nab_s.html"},"SPECcpu-base-644.nab_s")),(0,r.kt)("td",{parentName:"tr",align:null},"20.5"),(0,r.kt)("td",{parentName:"tr",align:null},"21.3"),(0,r.kt)("td",{parentName:"tr",align:null},"20.995945945945946"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/649.fotonik3d_s.html"},"SPECcpu-base-649.fotonik3d_s")),(0,r.kt)("td",{parentName:"tr",align:null},"11.4"),(0,r.kt)("td",{parentName:"tr",align:null},"21.1"),(0,r.kt)("td",{parentName:"tr",align:null},"20.560810810810805"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/654.roms_s.html"},"SPECcpu-base-654.roms_s")),(0,r.kt)("td",{parentName:"tr",align:null},"14.1"),(0,r.kt)("td",{parentName:"tr",align:null},"16.5"),(0,r.kt)("td",{parentName:"tr",align:null},"15.964864864864867"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPspeed"),(0,r.kt)("td",{parentName:"tr",align:null},"SPECspeed(R)2017_fp_base"),(0,r.kt)("td",{parentName:"tr",align:null},"11.3"),(0,r.kt)("td",{parentName:"tr",align:null},"13.4"),(0,r.kt)("td",{parentName:"tr",align:null},"13.18108108108109"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/503.bwaves_r.html"},"SPECcpu-base-503.bwaves_r")),(0,r.kt)("td",{parentName:"tr",align:null},"54.7"),(0,r.kt)("td",{parentName:"tr",align:null},"57.6"),(0,r.kt)("td",{parentName:"tr",align:null},"56.76533333333332"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/507.cactuBSSN_r.html"},"SPECcpu-base-507.cactuBSSN_r")),(0,r.kt)("td",{parentName:"tr",align:null},"14.6"),(0,r.kt)("td",{parentName:"tr",align:null},"15.7"),(0,r.kt)("td",{parentName:"tr",align:null},"15.186666666666673"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/508.namd_r.html"},"SPECcpu-base-508.namd_r")),(0,r.kt)("td",{parentName:"tr",align:null},"12.1"),(0,r.kt)("td",{parentName:"tr",align:null},"12.7"),(0,r.kt)("td",{parentName:"tr",align:null},"12.536000000000005"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/510.parest_r.html"},"SPECcpu-base-510.parest_r")),(0,r.kt)("td",{parentName:"tr",align:null},"19.6"),(0,r.kt)("td",{parentName:"tr",align:null},"20.4"),(0,r.kt)("td",{parentName:"tr",align:null},"20.148000000000005"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/511.povray_r.html"},"SPECcpu-base-511.povray_r")),(0,r.kt)("td",{parentName:"tr",align:null},"15.9"),(0,r.kt)("td",{parentName:"tr",align:null},"16.9"),(0,r.kt)("td",{parentName:"tr",align:null},"16.657333333333339"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/519.lbm_r.html"},"SPECcpu-base-519.lbm_r")),(0,r.kt)("td",{parentName:"tr",align:null},"10.3"),(0,r.kt)("td",{parentName:"tr",align:null},"11.2"),(0,r.kt)("td",{parentName:"tr",align:null},"10.857333333333328"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/521.wrf_r.html"},"SPECcpu-base-521.wrf_r")),(0,r.kt)("td",{parentName:"tr",align:null},"17.8"),(0,r.kt)("td",{parentName:"tr",align:null},"18.5"),(0,r.kt)("td",{parentName:"tr",align:null},"18.244"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/526.blender_r.html"},"SPECcpu-base-526.blender_r")),(0,r.kt)("td",{parentName:"tr",align:null},"18.8"),(0,r.kt)("td",{parentName:"tr",align:null},"19.4"),(0,r.kt)("td",{parentName:"tr",align:null},"19.101333333333323"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/527.cam4_r.html"},"SPECcpu-base-527.cam4_r")),(0,r.kt)("td",{parentName:"tr",align:null},"15.6"),(0,r.kt)("td",{parentName:"tr",align:null},"16.1"),(0,r.kt)("td",{parentName:"tr",align:null},"15.981333333333329"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/538.imagick_r.html"},"SPECcpu-base-538.imagick_r")),(0,r.kt)("td",{parentName:"tr",align:null},"21.1"),(0,r.kt)("td",{parentName:"tr",align:null},"21.7"),(0,r.kt)("td",{parentName:"tr",align:null},"21.482666666666668"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/544.nab_r.html"},"SPECcpu-base-544.nab_r")),(0,r.kt)("td",{parentName:"tr",align:null},"21.2"),(0,r.kt)("td",{parentName:"tr",align:null},"21.8"),(0,r.kt)("td",{parentName:"tr",align:null},"21.581333333333335"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/549.fotonik3d_r.html"},"SPECcpu-base-549.fotonik3d_r")),(0,r.kt)("td",{parentName:"tr",align:null},"28.5"),(0,r.kt)("td",{parentName:"tr",align:null},"30.4"),(0,r.kt)("td",{parentName:"tr",align:null},"29.62"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.spec.org/cpu2017/Docs/benchmarks/554.roms_r.html"},"SPECcpu-base-554.roms_r")),(0,r.kt)("td",{parentName:"tr",align:null},"13.4"),(0,r.kt)("td",{parentName:"tr",align:null},"14.4"),(0,r.kt)("td",{parentName:"tr",align:null},"13.927999999999992"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FPrate"),(0,r.kt)("td",{parentName:"tr",align:null},"SPECrate(R)2017_fp_base"),(0,r.kt)("td",{parentName:"tr",align:null},"18.5"),(0,r.kt)("td",{parentName:"tr",align:null},"19.3"),(0,r.kt)("td",{parentName:"tr",align:null},"18.99866666666667"),(0,r.kt)("td",{parentName:"tr",align:null},"Score")))))}s.isMDXComponent=!0}}]);