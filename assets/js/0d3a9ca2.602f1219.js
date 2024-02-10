"use strict";(self.webpackChunkalvarolorente_dev=self.webpackChunkalvarolorente_dev||[]).push([[540],{4137:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>p});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=c(o),p=i,d=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return o?n.createElement(d,a(a({ref:t},m),{},{components:o})):n.createElement(d,a({ref:t},m))}));function p(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},449:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),i=(o(7294),o(4137));const r={title:"Common mistakes when splitting the monolith",draft:!1,description:"A set of the most common mistakes when splitting your monolith into microservices",authors:"kanekotic",tags:["api","microservices","programming","architecture"],series:"The journey from the monolith to microservices",canonical_url:"https://www.alvarolorente.dev/blog/2022/09/04/common-mistakes-when-splitting-the-monolith",cover_image:"https://user-images.githubusercontent.com/3071208/188307797-7c30c8cb-bff7-4755-822b-7cf469cba372.JPG"},a=void 0,s={permalink:"/blog/2022/09/04/common-mistakes-when-splitting-the-monolith",editUrl:"https://github.com/alvarolorentedev/website/tree/main/blog/2022-09-04-common-mistakes-when-splitting-the-monolith.md",source:"@site/blog/2022-09-04-common-mistakes-when-splitting-the-monolith.md",title:"Common mistakes when splitting the monolith",description:"A set of the most common mistakes when splitting your monolith into microservices",date:"2022-09-04T00:00:00.000Z",formattedDate:"September 4, 2022",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"microservices",permalink:"/blog/tags/microservices"},{label:"programming",permalink:"/blog/tags/programming"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:3.63,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/alvarolorentedev",imageURL:"https://avatars.githubusercontent.com/u/3071208",key:"kanekotic"}],frontMatter:{title:"Common mistakes when splitting the monolith",draft:!1,description:"A set of the most common mistakes when splitting your monolith into microservices",authors:"kanekotic",tags:["api","microservices","programming","architecture"],series:"The journey from the monolith to microservices",canonical_url:"https://www.alvarolorente.dev/blog/2022/09/04/common-mistakes-when-splitting-the-monolith",cover_image:"https://user-images.githubusercontent.com/3071208/188307797-7c30c8cb-bff7-4755-822b-7cf469cba372.JPG"},prevItem:{title:"Patterns to avoiding microlithic microservices",permalink:"/blog/2022/09/05/patterns-to-avoiding-microlithic-microservices"},nextItem:{title:"Automate Anything: Power Automate + Trello + IFTTT",permalink:"/blog/2022/08/24/power-automate-automating-social-media"}},l={authorsImageUrls:[void 0]},c=[{value:"The Monolith",id:"the-monolith",level:2},{value:"The Microservices",id:"the-microservices",level:2},{value:"Microliths",id:"microliths",level:3},{value:"What got lost in translation?",id:"what-got-lost-in-translation",level:3},{value:"Domains != Resources",id:"domains--resources",level:4},{value:"Independence != Single Source",id:"independence--single-source",level:4},{value:"Fast != Synchronous",id:"fast--synchronous",level:4},{value:"Resilience != Complete",id:"resilience--complete",level:4},{value:"Conclusion and follow-ups",id:"conclusion-and-follow-ups",level:2}],m={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-monolith"},"The Monolith"),(0,i.kt)("p",null,"We have all at this point encounter the big service that jumpstarted the business. It's always good to find it or know it existed. It shows that there was an intent to not resolve every architectural problem before we even knew we had a business."),(0,i.kt)("p",null,"Nevertheless, it tends to outgrow itself and become more a pain than a solution. Some of these pains are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We all work on the same code base, and conflicts and side effects start to happen."),(0,i.kt)("li",{parentName:"ul"},"You need to release the entire solution, even if different teams have different cycles."),(0,i.kt)("li",{parentName:"ul"},"There are code freezes to go through validation cycles."),(0,i.kt)("li",{parentName:"ul"},"It scales as a whole, not only the portion that has an increase in traffic.")),(0,i.kt)("p",null,"Due to these pains, microservices were created. To give team/domain independence to create focused solutions on a business that has already been validated."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.alvarolorente.dev/img/blog/monolith.JPG",alt:null})),(0,i.kt)("h2",{id:"the-microservices"},"The Microservices"),(0,i.kt)("p",null,"Let's start with a ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/microservices/"},"definition of a microservice"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3071208/188307797-7c30c8cb-bff7-4755-822b-7cf469cba372.JPG",alt:"microservices"})),(0,i.kt)("p",null,"All sounds like flowers and happiness when we talk about microservice. Nevertheless, does microservices solve the entire issue by itself?"),(0,i.kt)("p",null,"Have you encountered the next cases in a microservice architecture?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before we release a new version, we need to sync deploys with another team."),(0,i.kt)("li",{parentName:"ul"},"Our application was down, but is not our issue."),(0,i.kt)("li",{parentName:"ul"},"Our service was working and scaling fine until the team X started using us."),(0,i.kt)("li",{parentName:"ul"},"And more\u2026")),(0,i.kt)("p",null,"What is happening?"),(0,i.kt)("h3",{id:"microliths"},"Microliths"),(0,i.kt)("p",null,"The smells mention before are caused by what ",(0,i.kt)("a",{parentName:"p",href:"http://jonasboner.com/"},"Jonas Boner")," call Microliths, a great word for what is happening here.",(0,i.kt)("br",{parentName:"p"}),"\n","Even if we think this are 'independent' services, synchronous communication can cause side effects we don't want:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There can be cascading events between your services."),(0,i.kt)("li",{parentName:"ul"},"Your domain boundaries are not clear because you don\u2019t own the entire process."),(0,i.kt)("li",{parentName:"ul"},"Slow services are forced to scale by faster services requirements."),(0,i.kt)("li",{parentName:"ul"},"There is additional latency on the network calls.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://microlithalternatives.kanekotic.com/images/microliths.jpg",alt:null})),(0,i.kt)("h3",{id:"what-got-lost-in-translation"},"What got lost in translation?"),(0,i.kt)("p",null,"Having microliths comes from multiple misconceptions we have. Some of them are:"),(0,i.kt)("h4",{id:"domains--resources"},"Domains != Resources"),(0,i.kt)("p",null,"Every so often, when we divide the monolith, we think about domains being resources. Due to how we normally have divided API's and DB's as we think about splitting what already exists and not about extracting the processes being achieved."),(0,i.kt)("p",null,"When thinking about a microservice, we should think about what part of the process it is trying to solve, this will help us define good boundaries for our bounded context."),(0,i.kt)("p",null,"When we think in a process, data is secondary. The process will require different pieces of existing data to fulfill their capabilities, and it is ok for it to own its copy of what is needed to fulfill his mission."),(0,i.kt)("h4",{id:"independence--single-source"},"Independence != Single Source"),(0,i.kt)("p",null,"A single source of data does not mean independence, as whenever your software requires complementary data, it will have to acquire it from somewhere else, what means a direct  dependency. This also affects boundaries as you must enter other team's domain."),(0,i.kt)("p",null,"If you strive for independence, copy the information you require for your process, even if it exists somewhere else."),(0,i.kt)("h4",{id:"fast--synchronous"},"Fast != Synchronous"),(0,i.kt)("p",null,"Humans think that a direct response is always faster than sending out a message. While occasionally this is true, in microservices this could start a cascade of synchronous calls from one service to the next one, leaving our users in a timeout limbo."),(0,i.kt)("p",null,"Think if really your system requires calling others directly or if you can message them to start their process."),(0,i.kt)("h4",{id:"resilience--complete"},"Resilience != Complete"),(0,i.kt)("p",null,"Making sure the entire process has been completed, is normally confused by resiliency. Resiliency only refers to the capability to complete the process.",(0,i.kt)("br",{parentName:"p"}),"\n","If we have well-defined contracts in between our pieces, we don't need to finish things synchronously, we can promise our users things will happen. And let our services do their work at their speed."),(0,i.kt)("h2",{id:"conclusion-and-follow-ups"},"Conclusion and follow-ups"),(0,i.kt)("p",null,"Are we doomed?",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://microlithalternatives.kanekotic.com/images/timetopanic.jpg",alt:null})),(0,i.kt)("p",null,"The answer is no, we are not doomed! We can design our services with the correct division using some DDD tooling and also use the correct tools to decouple our microservices.",(0,i.kt)("br",{parentName:"p"}),"\n","Let's talk about this on the next chapters of this series."))}u.isMDXComponent=!0}}]);