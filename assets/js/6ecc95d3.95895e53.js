"use strict";(self.webpackChunkalvarolorente_dev=self.webpackChunkalvarolorente_dev||[]).push([[2775],{4137:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),p=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=p(t.components);return o.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),g=p(n),s=r,h=g["".concat(c,".").concat(s)]||g[s]||u[s]||i;return n?o.createElement(h,a(a({ref:e},m),{},{components:n})):o.createElement(h,a({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7871:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(4137));const i={authors:"kanekotic",title:"Functional Programming With Kotlin Bootcamp - Initialize the Project",tags:["programming","development","kotlin","functional"],description:"Learn how to do functional programming with kotlin",draft:!1,published:new Date("2023-04-24T18:35:59.294Z"),cover_image:"https://raw.githubusercontent.com/kanekotic/kanekotic-page/main/static/img/fp-with-kotlin-gradle.png",canonical_url:"https://www.kanekotic.com/blog/2023/04/24/functional-programming-with-kotlin-bootcamp-initialize-the-project",series:"Functional Programming With Kotlin"},a="Context",l={permalink:"/blog/2023/04/24/functional-programming-with-kotlin-bootcamp-initialize-the-project",editUrl:"https://github.com/alvarolorentedev/website/tree/main/blog/2023-04-24-functional-programming-with-kotlin-bootcamp-initialize-the-project.md",source:"@site/blog/2023-04-24-functional-programming-with-kotlin-bootcamp-initialize-the-project.md",title:"Functional Programming With Kotlin Bootcamp - Initialize the Project",description:"Learn how to do functional programming with kotlin",date:"2023-04-24T00:00:00.000Z",formattedDate:"April 24, 2023",tags:[{label:"programming",permalink:"/blog/tags/programming"},{label:"development",permalink:"/blog/tags/development"},{label:"kotlin",permalink:"/blog/tags/kotlin"},{label:"functional",permalink:"/blog/tags/functional"}],readingTime:.26,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/alvarolorentedev",imageURL:"https://avatars.githubusercontent.com/u/3071208",key:"kanekotic"}],frontMatter:{authors:"kanekotic",title:"Functional Programming With Kotlin Bootcamp - Initialize the Project",tags:["programming","development","kotlin","functional"],description:"Learn how to do functional programming with kotlin",draft:!1,published:"2023-04-24T18:35:59.294Z",cover_image:"https://raw.githubusercontent.com/kanekotic/kanekotic-page/main/static/img/fp-with-kotlin-gradle.png",canonical_url:"https://www.kanekotic.com/blog/2023/04/24/functional-programming-with-kotlin-bootcamp-initialize-the-project",series:"Functional Programming With Kotlin"},prevItem:{title:"Continious Delivery Bootcamp: Continuous Integration",permalink:"/blog/2023/04/24/continious-delivery-bootcamp-continuous-integration"},nextItem:{title:"Functional Programming With Kotlin Bootcamp - Intro",permalink:"/blog/2023/04/24/functional-programming-with-kotlin-bootcamp-intro"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a #functional #programming series focusing on the main concepts using #kotlin."),(0,r.kt)("p",null,"In this second chapter, we will initialize a project with gradle and kotlin"),(0,r.kt)("h1",{id:"video"},"Video"),(0,r.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/YSbMLid1h-c",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"{% embed ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/YSbMLid1h-c"},"https://youtu.be/YSbMLid1h-c")," %}"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/YSbMLid1h-c"},"\ufeffWatch the video on Youtube")))}u.isMDXComponent=!0}}]);