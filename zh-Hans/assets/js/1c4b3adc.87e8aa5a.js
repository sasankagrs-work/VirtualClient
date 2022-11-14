"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[6944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,r[1]=a;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=n(7462),s=(n(7294),n(3905));const o={id:"testing",sidebar_position:8},r="Unit and Live Testing",a={unversionedId:"developing/testing",id:"developing/testing",title:"Unit and Live Testing",description:"Unit Test",source:"@site/docs/developing/testing.md",sourceDirName:"developing",slug:"/developing/testing",permalink:"/VirtualClient/zh-Hans/docs/developing/testing",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/developing/testing.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"testing",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Build and CI / CD pipeline",permalink:"/VirtualClient/zh-Hans/docs/developing/ci-cd"},next:{title:"Coding Standards",permalink:"/VirtualClient/zh-Hans/docs/developing/coding-standards"}},l={},u=[{value:"Unit Test",id:"unit-test",level:2},{value:"Testing Framework Libraries",id:"testing-framework-libraries",level:2},{value:"Testing Fixtures",id:"testing-fixtures",level:2},{value:"Test Setup Mechanics",id:"test-setup-mechanics",level:2},{value:"Cross-Platform Testing",id:"cross-platform-testing",level:2},{value:"Useful Linux Operations",id:"useful-linux-operations",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"unit-and-live-testing"},"Unit and Live Testing"),(0,s.kt)("h2",{id:"unit-test"},"Unit Test"),(0,s.kt)("p",null,"The following sections provide insights into a testing methodology that can be applied to testing workload executors in the Virtual Client\ncodebase. The goal here is to shine a light on the basic techniques applied and the mechanics they drive when testing Virtual Client logic."),(0,s.kt)("p",null,"Before reading the documentation below, familiarize yourself with the general principles involved in writing tests for components in an\napplication or system codebase."),(0,s.kt)("h2",{id:"testing-framework-libraries"},"Testing Framework Libraries"),(0,s.kt)("p",null,"The following open source libraries are used to enable rich and robust testing outcomes in the Virtual Client codebase."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/AutoFixture/AutoFixture/wiki"},"AutoFixture")),(0,s.kt)("br",{parentName:"p"}),"\n","AutoFixture is a library/framework that is used to create mock/fake objects that are used in testing scenarios. The ability to create valid mock objects in test\ncode is a very common requirement. The AutoFixture framework makes mock object setup a triviality."),(0,s.kt)("p",{parentName:"li"},"Within the Virtual Client codebase, a C# ",(0,s.kt)("a",{parentName:"p",href:"../src/VirtualClient/VirtualClient.TestFramework/FixtureExtensions.cs"},"extension method approach"),"\nin conjunction with AutoFixture to define the setup of a wide range of different mock objects in a single, consolidated place minimizing the need for that setup in all of the tests. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/Moq/moq4/wiki/Quickstart"},"Moq")),(0,s.kt)("br",{parentName:"p"}),"\n","The Moq library provides a robust yet simple framework allowing developers to setup mock behaviors when testing. The MockFixture noted below uses the Moq framework\nextensively to setup and change behaviors for core dependencies of Virtual Client components/classes. This enables a wide range of scenarios and code handling mechanics to\nbe tested."))),(0,s.kt)("h2",{id:"testing-fixtures"},"Testing Fixtures"),(0,s.kt)("p",null,"The Virtual Client solution uses a few different types of testing fixtures to simplify the requirements for setting up dependency behaviors required to\ntest workload executor and supporting classes. Testing fixtures enable a reduction in the code required to setup mock/test behaviors by encapsulating the logic\nin a single place or to use C# extension methods to do the same."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"../src/VirtualClient/VirtualClient.TestFramework/MockFixture.cs"},"MockFixture")),(0,s.kt)("br",{parentName:"p"}),"\n","The MockFixture provides/encapsulates all of the dependencies required by Virtual Client workload executors implemented as mock objects using the Moq\nframework. Mock fixtures help to minimize lines of code required to properly test classes and components in a few different ways. Firstly, the developer does\nnot have to duplicate all of the mock class/interface dependencies over and over in individual test classes. Almost every dependency needed is on the MockFixture\nclass. The MockFixture is also used as to create reusable C# extensions methods. These extensions method allow the developer to perform setup and verifications\nof test code more simply.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"../src/VirtualClient/VirtualClient.TestFramework/DependencyFixture.cs"},"DependencyFixture")),(0,s.kt)("br",{parentName:"p"}),"\n",'The DependencyFixture provides/encapsulates all of the dependencies required by Virtual Client workload executors implemented to work the same way\nas live/real dependencies except using only in-memory backing. In-memory backing means that the dependency keeps track of its assets/objects purely\nin-memory. For example, the real package management dependency in Virtual Client uses the file system to reference and manage workload packages. The\nin-memory version of it supplied by the DependencyFixture keeps the references to the packages and to the file system all in-memory (i.e. no actual interaction\nwith the real file system). The DependencyFixture is often used with functional tests in the Virtual Client codebase. This is because functional tests are\nfocused on the end-to-end behavioral correctness of the code flow (e.g. the execution of all components in a single profile) and the DependencyFixture more\nclosely mimics certain "real-life" environment/system behavior.'))),(0,s.kt)("h2",{id:"test-setup-mechanics"},"Test Setup Mechanics"),(0,s.kt)("p",null,"Each of the tests in the Virtual Client codebase (unit as well as functional) uses one or more of the testing fixtures noted above. This simplifes the process of testing code\nby instilling repeatable patterns and reducing redundancy/duplication in setup requirements. The ultimate goals are as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Remove code from individual tests and test methods that is used purely to setup mock/fake behaviors."),(0,s.kt)("li",{parentName:"ul"},"Improve the readability of the tests."),(0,s.kt)("li",{parentName:"ul"},"Reduces the learning curve for new engineers needing to write tests."),(0,s.kt)("li",{parentName:"ul"},"Increases the speed at which the team can do the work to write new code and test it thoroughly.")),(0,s.kt)("p",null,"Towards meet these goals, we use a set of general techniques to ensure the testing fixtures can be used easily at the same time as they are flexible enough to\ncover a wide range of scenario setups. The following list describes some of the techniques involved."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Testing fixtures should have ALL dependencies necessary for testing Virtual Client components as properties. This prevents the duplication of these as member\nvariables in test classes. See the 'MockFixture' class noted above for examples.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Testing fixtures should have helper methods that make it easy to accomplish the setup of very common mock/fake behaviors on dependencies. One of the most common\nways we do this is to implement C# extension methods. This can significantly reduce the code required in the test classes and methods and improve readability.\nSee the ",(0,s.kt)("a",{parentName:"p",href:"../src/VirtualClient/VirtualClient.TestExtensions/MockSetupExtensions.cs"},"MockSetupExtensions"),"\nclass for examples."))),(0,s.kt)("p",null,'The best way to illustrate the ideas is to showcase the usage patterns. The following links provide good examples of using the various testing fixtures to establish robust\ntests for a given class or component. For developers using the Visual Studio IDE, it is easy to debug the code. Simply set a breakpoint in any one of the test methods,\nright-click on the test and select "Debug Test(s)" to see the mechanics in motion.'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"../src/VirtualClient/VirtualClient.Actions.UnitTests/Example2WorkloadExecutorTests_MockFixture.cs"},"Example Using MockFixture Mechanics"),(0,s.kt)("br",{parentName:"p"}),"\n","Example of how to write unit or functional tests using the Moq framework and MockFixture class as the foundation for the testing fixture and setup mechanics. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"../src/VirtualClient/VirtualClient.Actions.UnitTests/Example2WorkloadExecutorTests_DependencyFixture.cs"},"Example Using DependencyFixture Mechanics"),(0,s.kt)("br",{parentName:"p"}),"\n","Example of how to write unit or functional tests using the in-memory dependency implementations as the foundation for the testing fixture\nand setup mechanics."))),(0,s.kt)("h2",{id:"cross-platform-testing"},"Cross-Platform Testing"),(0,s.kt)("p",null,"When doing development of Virtual Client components, you will often need to consider debugging in cross-platform scenarios (e.g. Windows and Linux). The following\nsection provides some useful information to help you do development where you need to validate on different OS platforms."),(0,s.kt)("h3",{id:"useful-linux-operations"},"Useful Linux Operations"),(0,s.kt)("p",null,"The following section illustrates some of the more interesting commands/operations you can use when testing on Linux systems."))}p.isMDXComponent=!0}}]);