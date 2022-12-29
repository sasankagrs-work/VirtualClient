"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[2455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={id:"run-in-container",sidebar_position:8},a="Run in Docker container",l={unversionedId:"guides/run-in-container",id:"guides/run-in-container",title:"Run in Docker container",description:"In this document, we are going to run OpenSSL workload in a Docker Container.",source:"@site/docs/guides/8-run-in-container.md",sourceDirName:"guides",slug:"/guides/run-in-container",permalink:"/VirtualClient/docs/guides/run-in-container",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/8-run-in-container.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"run-in-container",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/VirtualClient/docs/category/guides"},next:{title:"Getting Started",permalink:"/VirtualClient/docs/guides/0001-getting-started"}},c={},u=[{value:"Build container",id:"build-container",level:2},{value:"Start container",id:"start-container",level:2},{value:"Read console logs",id:"read-console-logs",level:2},{value:"Congratulations !!",id:"congratulations-",level:2}],s={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-in-docker-container"},"Run in Docker container"),(0,i.kt)("p",null,"In this document, we are going to run OpenSSL workload in a Docker Container."),(0,i.kt)("h2",{id:"build-container"},"Build container"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"VirtualClient is planning on setting up a public container repository. At this moment you need to build VC docker images locally.")),(0,i.kt)("p",null,"VirtualClient keeps the ",(0,i.kt)("inlineCode",{parentName:"p"},"DockerFile")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"src\\VirtualClient\\VirtualClient.Packaging\\dockerfiles\\")," directory. The following is an example command to build a docker image. You need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Build VirtualClient using ",(0,i.kt)("inlineCode",{parentName:"li"},"build.cmd")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"dotnet build"),"."),(0,i.kt)("li",{parentName:"ol"},"Build docker container using ",(0,i.kt)("inlineCode",{parentName:"li"},"docker build"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"build.cmd\ndocker build -f src\\VirtualClient\\VirtualClient.Packaging\\dockerfiles\\win-x64.dockerfile -t test-win-x64:1.0.1.3 E:\\Source\\Github\\VirtualClient\n")),(0,i.kt)("p",null,"The build process could take a couple minutes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"E:\\Source\\Github\\VirtualClient>docker build -f src\\VirtualClient\\VirtualClient.Packaging\\dockerfiles\\win-x64.dockerfile -t test-win-x64:1.0.1.3 E:\\Source\\Github\\VirtualClient\nSending build context to Docker daemon  2.788GB\nStep 1/3 : ARG REPO=mcr.microsoft.com/windows/nanoserver\nStep 2/3 : FROM ${REPO}:ltsc2022\nltsc2022: Pulling from windows/nanoserver\n38952155e2cd: Pull complete\nDigest: sha256:79fb1372fc5b3aeeca73603d5eadd0a8fb7d4f0b77bd29498696c03bb6de1fdf\nStatus: Downloaded newer image for mcr.microsoft.com/windows/nanoserver:ltsc2022\n ---\x3e 0db1879370e5\nStep 3/3 : COPY out/bin/Debug/x64/VirtualClient.Main/net6.0/win-x64/publish/ C:/VirtualClient/\n ---\x3e 7c2fe2466138\nSuccessfully built 7c2fe2466138\nSuccessfully tagged test-win-x64:1.0.1.3\n\nUse 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them\n")),(0,i.kt)("h2",{id:"start-container"},"Start container"),(0,i.kt)("p",null,"For Windows, the Dockerfile copied VC binaries to C:\\VirtualClient. You can invoke a docker container using the following commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">docker run -d -p 3000:80 test-win-x64:1.0.1.3 C:\\VirtualClient\\VirtualClient.exe --profile=PERF-CPU-OPENSSL.json --packages=https://virtualclient.blob.core.windows.net/packages\nbad3c2a2fe95a3135264dc70ee63f89df7e1deb7875b3a0104b3231e248feaac\n")),(0,i.kt)("h2",{id:"read-console-logs"},"Read console logs"),(0,i.kt)("p",null,"You can check the container console logs to see if the workloads is running as expected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">docker logs bad3c2a2fe95a3135264dc70ee63f89df7e1deb7875b3a0104b3231e248feaac\n[12/22/2022 10:36:14 AM] Profile: Initialize\n[12/22/2022 10:36:14 AM] Profile: Install Dependencies\n[12/22/2022 10:36:14 AM] Profile: Dependency = DependencyPackageInstallation (scenario=InstallOpenSSLWorkloadPackage)\n[12/22/2022 10:36:25 AM] Profile: Execute Monitors\n[12/22/2022 10:36:25 AM] Profile: Monitor = PerfCounterMonitor (scenario=CaptureCounters)\n[12/22/2022 10:36:25 AM] Profile: Execute Actions\n[12/22/2022 10:36:25 AM] Profile: Action = OpenSslExecutor (scenario=MD5)\n[12/22/2022 10:46:25 AM] Profile: Action = OpenSslExecutor (scenario=SHA1)\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Since you can't easily access the VC metric files in containers, it is recommended to setup ",(0,i.kt)("a",{parentName:"p",href:"./telemetry/telemetry.md"},"Telemetry")," to get automatic data upload.")),(0,i.kt)("h2",{id:"congratulations-"},"Congratulations !!"),(0,i.kt)("p",null,"You just benchmarked your system's container performance using VC in Docker."))}d.isMDXComponent=!0}}]);