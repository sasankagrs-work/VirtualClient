"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[2926],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="NAS Parallel Benchmarks Workload",o={unversionedId:"workloads/nasparallel/NASParallelBench",id:"workloads/nasparallel/NASParallelBench",title:"NAS Parallel Benchmarks Workload",description:"The NAS Parallel Benchmarks (NPB) are a small set of programs designed to help evaluate the performance of parallel supercomputers.",source:"@site/docs/workloads/nasparallel/NASParallelBench.md",sourceDirName:"workloads/nasparallel",slug:"/workloads/nasparallel/NASParallelBench",permalink:"/VirtualClient/zh-Hans/docs/workloads/nasparallel/NASParallelBench",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/nasparallel/NASParallelBench.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MLPerf Workload Profiles",permalink:"/VirtualClient/zh-Hans/docs/workloads/mlperf/MLPerfProfiles"},next:{title:"NAS Parallel Workload Metrics",permalink:"/VirtualClient/zh-Hans/docs/workloads/nasparallel/NASParallelBenchMetrics"}},s={},p=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"System Requirements",id:"system-requirements",level:3},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Package Dependencies",id:"package-dependencies",level:3},{value:"The Steps to Build Binaries",id:"the-steps-to-build-binaries",level:3},{value:"Common Debug Issues",id:"common-debug-issues",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nas-parallel-benchmarks-workload"},"NAS Parallel Benchmarks Workload"),(0,r.kt)("p",null,"The NAS Parallel Benchmarks (NPB) are a small set of programs designed to help evaluate the performance of parallel supercomputers.\nIt supports both single and multi machine scanerio.\nIn multi machine scanerio we can have 1 client to N server environment."),(0,r.kt)("p",null,"The Message Passing Interface(MPI) is used to communicate over the network for running on multiple machines.\nFor single machine Open Multi-Processing(OpenMP) is used for parallel programming."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nas.nasa.gov/software/npb.html"},"NAS Parallel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nas.nasa.gov/aboutnas/about.html"},"About NAS"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,r.kt)("p",null,"The following workload tests the High Performance Computing(HPC)/Parallel Computing capabilities of system.\nUsing MPI(For Multiple machines configuration) & OpenMP (For single machine configuration using threads)."),(0,r.kt)("p",null,"Depending on the configuration of the workload different pieces of hardware are tested. If the hardware that is being tested has ",(0,r.kt)("a",{parentName:"p",href:"https://www.mellanox.com/pdf/whitepapers/IB_Intro_WP_190.pdf"},"Infiniband"),"\nhardware and drivers installed the Infiniband infastruture is tested; if it is not present regular network channels are tested.",(0,r.kt)("br",{parentName:"p"}),"\n","The list of benchmarks that are currently ran as part of the NAS Parallel workload are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Benchmark"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IS"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer Sort, random memory access")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EP"),(0,r.kt)("td",{parentName:"tr",align:null},"Embarrassingly Parallel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CG"),(0,r.kt)("td",{parentName:"tr",align:null},"Conjugate Gradient, irregular memory access and communication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MG"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-Grid on a sequence of meshes, long- and short-distance communication, memory intensive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FT"),(0,r.kt)("td",{parentName:"tr",align:null},"discrete 3D fast Fourier Transform, all-to-all communication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BT"),(0,r.kt)("td",{parentName:"tr",align:null},"Block Tri-diagonal solver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SP"),(0,r.kt)("td",{parentName:"tr",align:null},"Scalar Penta-diagonal solver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LU"),(0,r.kt)("td",{parentName:"tr",align:null},"Lower-Upper Gauss-Seidel solver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DC"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Cube")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DT"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Traffic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UA"),(0,r.kt)("td",{parentName:"tr",align:null},"Unstructured Adaptive mesh, dynamic and irregular memory access")))),(0,r.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,r.kt)("p",null,"It is recommended to run this workload on machines with infiniband drivers and hardware. There are other more exhaustive workloads for testing network performance for non-HPC machines in the Virtual Client."),(0,r.kt)("p",null,"It is also required that all machines under test can communicate freely over port 22."),(0,r.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux x64 (Debian, Ubuntu)"),(0,r.kt)("li",{parentName:"ul"},"Linux arm64 (Debian, Ubuntu)")),(0,r.kt)("h3",{id:"package-dependencies"},"Package Dependencies"),(0,r.kt)("p",null,"The following package dependencies are required to be installed on the Unix/Linux system in order to support the requirements\nof the NAS Parallel workload. Note that the Virtual Client will handle the installation of any required dependencies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"libopenmpi-dev"),(0,r.kt)("li",{parentName:"ul"},"make"),(0,r.kt)("li",{parentName:"ul"},"openmpi-bin"),(0,r.kt)("li",{parentName:"ul"},"gfortran")),(0,r.kt)("h3",{id:"the-steps-to-build-binaries"},"The Steps to Build Binaries"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Create "suite.def" & "make.def" using the templates given for example.'),(0,r.kt)("p",{parentName:"li"},'a. For Multiple machines go to folder "NPI-MPI/config" folder.'),(0,r.kt)("p",{parentName:"li"},'b. For Single machine go to folder "NPI-OMP/config" folder.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build benchmarks using ",(0,r.kt)("inlineCode",{parentName:"p"},"make suite")," command."),(0,r.kt)("p",{parentName:"li"},"a. For Multiple machines build benchmarks in 'NPB-MPI' folder by going to it as working directory."),(0,r.kt)("p",{parentName:"li"},"b. For Single machine build benchmarks in 'NPB-OMP' folder by going to it as working directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set Environment variable using the command :\n",(0,r.kt)("inlineCode",{parentName:"p"},"export OMP_NUM_THREADS=<available_number_of_physical_cores>"),"\nFor example : ",(0,r.kt)("inlineCode",{parentName:"p"},"export OMP_NUM_THREADS=4"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Multiple machines setup passwordless SSH using the blog info on ",(0,r.kt)("a",{parentName:"p",href:"https://linuxize.com/post/how-to-setup-passwordless-ssh-login/"},"link"),". From 1 Client to all Servers.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"a. For Multiple machine to run a benchmark run command ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo runuser -l <Username> -c 'mpiexec -np <Number_of_Machines> -host <Host_IP_Address> <benchmarkpath>'")),(0,r.kt)("p",{parentName:"li"},"b. For Single machine to run a benchmark run command ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo <benchmarkpath>'")))),(0,r.kt)("h3",{id:"common-debug-issues"},"Common Debug Issues"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before downloading any dependency run command ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt-get update")," .")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before running ",(0,r.kt)("inlineCode",{parentName:"p"},"mpiexec")," setup passwordless SSH. OpenMPI does not works without it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sudo mpiexec")," does not works because it uses 'root' user which does not have passwordless login permission.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To run through sudo use ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo runuser -l <Username> ... ")))))}u.isMDXComponent=!0}}]);