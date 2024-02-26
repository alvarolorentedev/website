"use strict";(self.webpackChunkalvarolorente_dev=self.webpackChunkalvarolorente_dev||[]).push([[2067],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const o={title:"Double-edge Microservices: APIs the New Singleton",description:"In the current world of development we solve all with APIs, is it becoming an overused practice?",authors:"alvarolorentedev",tags:["webdev","api","architecture","programming"],draft:!1,series:"microservices a double-edged sword",cover_image:"https://www.alvarolorente.dev/img/blog/captura-de-pantalla-2022-12-19-a-las-17-16-39.png",canonical_url:"https://www.alvarolorente.dev/blog/2022/12/19/api-singleton"},i=void 0,s={permalink:"/blog/2022/12/19/api-singleton",editUrl:"https://github.com/alvarolorentedev/website/tree/main/blog/2022-12-19-api-singleton.md",source:"@site/blog/2022-12-19-api-singleton.md",title:"Double-edge Microservices: APIs the New Singleton",description:"In the current world of development we solve all with APIs, is it becoming an overused practice?",date:"2022-12-19T00:00:00.000Z",formattedDate:"December 19, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"api",permalink:"/blog/tags/api"},{label:"architecture",permalink:"/blog/tags/architecture"},{label:"programming",permalink:"/blog/tags/programming"}],readingTime:2.27,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/alvarolorentedev",imageURL:"https://avatars.githubusercontent.com/u/3071208",key:"alvarolorentedev"}],frontMatter:{title:"Double-edge Microservices: APIs the New Singleton",description:"In the current world of development we solve all with APIs, is it becoming an overused practice?",authors:"alvarolorentedev",tags:["webdev","api","architecture","programming"],draft:!1,series:"microservices a double-edged sword",cover_image:"https://www.alvarolorente.dev/img/blog/captura-de-pantalla-2022-12-19-a-las-17-16-39.png",canonical_url:"https://www.alvarolorente.dev/blog/2022/12/19/api-singleton"},prevItem:{title:"Psychological safety in software development",permalink:"/blog/2023/01/26/psycological-safety-in-software-developmente"},nextItem:{title:"Double-edge Microservices: Macro Infrastructure due to Microservice Obsession",permalink:"/blog/2022/12/19/macroInfrastructure-microservice-obsesion"}},l={authorsImageUrls:[void 0]},c=[{value:"The Problem",id:"the-problem",level:2},{value:"The Solution",id:"the-solution",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The singleton pattern has got a bad reputation over the years due to be widely overused in the incorrect use cases. With the proliferation of microservices, ",(0,r.kt)("strong",{parentName:"p"},"have APIs become the new singleton?")),(0,r.kt)("h2",{id:"the-problem"},"The Problem"),(0,r.kt)("p",null,"APIs, or application programming interfaces, have become a ubiquitous part of modern software development. They allow different systems and applications to communicate with one another, enabling the creation of complex, interconnected systems that can share data and functionality. However, there has been a growing concern that APIs are being overused, leading to a proliferation of unnecessarily complex and fragile systems that are difficult to maintain and scale."),(0,r.kt)("p",null,"One reason for the perceived overuse of APIs is the ease with which they can be implemented. With the abundance of API management tools and frameworks available, it is relatively straightforward to expose a set of functionality as an API and make it available to other systems. This has led to a proliferation of APIs, many of which are redundant or unnecessary, adding unnecessary complexity to the overall system."),(0,r.kt)("p",null,"Another issue is the lack of standardization in the API ecosystem. Each API is typically designed to meet the specific needs of the system it was created for, resulting in a wide variety of different designs and conventions. This can make it difficult for developers to understand and use APIs from other systems, as they may have to learn and adapt to new conventions and patterns each time they encounter a new API."),(0,r.kt)("p",null,"In addition to these issues, the reliance on APIs can also lead to fragile systems that are difficult to maintain and scale. When multiple systems are tightly coupled through APIs, a change to one system can have cascading effects on others, leading to unexpected behavior and potential failures. This can make it difficult to make changes or updates to a system without the risk of breaking something else."),(0,r.kt)("p",null,"There are also concerns about the security of APIs. As they allow systems to communicate with one another, they can also provide a potential entry point for attackers to gain access to sensitive data or functionality. Properly securing APIs can be a complex and time-consuming task, and if not done correctly, can lead to significant vulnerabilities."),(0,r.kt)("h2",{id:"the-solution"},"The Solution"),(0,r.kt)("p",null,"So, what can be done to address these issues? One solution is to use APIs more judiciously, carefully evaluating whether an API is truly necessary before implementing it. This can help reduce the overall complexity of the system and make it easier to maintain and scale. "),(0,r.kt)("p",null,"It's also important to adopt API design standards and guidelines, which can help ensure that APIs are consistent and easy to understand and use. Finally, proper API security practices should be implemented to protect against potential vulnerabilities."))}p.isMDXComponent=!0}}]);