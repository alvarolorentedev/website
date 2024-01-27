"use strict";(self.webpackChunkalvarolorente_dev=self.webpackChunkalvarolorente_dev||[]).push([[7319],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(4137));const a={authors:"kanekotic",draft:!1,title:"TDD is not called TDT for a reason",description:"When people elaborate on TDD they seem to stay focused on the first letter but miss the focus of the other two letters. ",tags:["webdev","testing","architecture","programming"],published:new Date("2022-11-28T03:00:00.000Z"),canonical_url:"https://www.kanekotic.com/blog/2022/11/24/tdd-is-not-called-tdt-for-a-reason",cover_image:"https://www.kanekotic.com/img/tdd.png",series:""},i=void 0,s={permalink:"/blog/2022/11/24/tdd-is-not-called-tdt-for-a-reason",editUrl:"https://github.com/alvarolorentedev/website/tree/main/blog/2022-11-24-tdd-is-not-called-tdt-for-a-reason.md",source:"@site/blog/2022-11-24-tdd-is-not-called-tdt-for-a-reason.md",title:"TDD is not called TDT for a reason",description:"When people elaborate on TDD they seem to stay focused on the first letter but miss the focus of the other two letters. ",date:"2022-11-24T00:00:00.000Z",formattedDate:"November 24, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"testing",permalink:"/blog/tags/testing"},{label:"architecture",permalink:"/blog/tags/architecture"},{label:"programming",permalink:"/blog/tags/programming"}],readingTime:1.575,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/alvarolorentedev",imageURL:"https://avatars.githubusercontent.com/u/3071208",key:"kanekotic"}],frontMatter:{authors:"kanekotic",draft:!1,title:"TDD is not called TDT for a reason",description:"When people elaborate on TDD they seem to stay focused on the first letter but miss the focus of the other two letters. ",tags:["webdev","testing","architecture","programming"],published:"2022-11-28T03:00:00.000Z",canonical_url:"https://www.kanekotic.com/blog/2022/11/24/tdd-is-not-called-tdt-for-a-reason",cover_image:"https://www.kanekotic.com/img/tdd.png",series:""},prevItem:{title:"Double-edge Microservices: Macro Infrastructure due to Microservice Obsession",permalink:"/blog/2022/12/19/macroInfrastructure-microservice-obsesion"},nextItem:{title:"Delivery Acceleration: Parallel Changes Strategy",permalink:"/blog/2022/10/14/delivery-acceleration-parallel-changes-strategy"}},l={authorsImageUrls:[void 0]},c=[{value:"Not A Testing Strategy",id:"not-a-testing-strategy",level:2},{value:"A Design Strategy",id:"a-design-strategy",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I have observed quite a few articles lately that elaborate on issues with TDD. Nevertheless, they focused on the first letter but miss the focus of the other two letters."),(0,n.kt)("h2",{id:"not-a-testing-strategy"},"Not A Testing Strategy"),(0,n.kt)("p",null,"If you take anything out of this article, please think about this quote:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If TDD was about testing it would have been called TDT (test driven testing).")),(0,n.kt)("p",null,"The fact that we do test upfront in TDD does not mean at all that there is a direct relationship with a testing strategy, and as many preach, unit testing is not enough to create robust software."),(0,n.kt)("h2",{id:"a-design-strategy"},"A Design Strategy"),(0,n.kt)("p",null,"TDD is actually a ",(0,n.kt)("strong",{parentName:"p"},"Design Strategy"),", this is why the 2 last letter are for ",(0,n.kt)("strong",{parentName:"p"},"driven development"),". This means that your final code is being moved by those tests and not the other way around."),(0,n.kt)("p",null,"The design that TDD will move you towards to is ",(0,n.kt)("strong",{parentName:"p"},"minimalistic"),". Reducing the tendency of overengineering solutions when you don't need them. This brings a ",(0,n.kt)("strong",{parentName:"p"},"reducing time to market"),", by reducing the ",(0,n.kt)("strong",{parentName:"p"},"accidental complexity"),"."),(0,n.kt)("p",null,"When doing TDD most developers have the complexity of letting go their ",(0,n.kt)("strong",{parentName:"p"},"egos"),", the problem when people fight against the practices is because they think to know better. Nevertheless, it tends to ",(0,n.kt)("strong",{parentName:"p"},"generate waste")," because most code optimizations tend to be premature and most extensibility points will never be modified."),(0,n.kt)("p",null,"There are places where TDD does not fit, for example while investigating a technology through a spike or PoC because in these cases, the person is exploring knowledge not generating value. In other cases, TDD allows you to bring value in the shortest way possible."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"If you are an experienced developer, do not discard TDD because you think you know better, allow it to challenge you. If you are a new developer, learn from the different ways of doing things and understand the value, don't take articles at face value."))}p.isMDXComponent=!0}}]);