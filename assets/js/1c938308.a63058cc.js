"use strict";(self.webpackChunkalvarolorente_dev=self.webpackChunkalvarolorente_dev||[]).push([[2532],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const o={title:"Delivery Acceleration: Parallel Changes Strategy",authors:"kanekotic",draft:!1,description:"Code evolve and changes. Making sure we don't break things in a continuous deployment environment.",tags:["softwaredevelopment","programming","devops","productivity"],canonical_url:"https://www.kanekotic.com/blog/2022/10/14/delivery-acceleration-parallel-changes-strategy",cover_image:"https://www.kanekotic.com/img/expand_contract.jpeg",series:"Accelerate Continious Integration & Delivery Practices"},i=void 0,l={permalink:"/blog/2022/10/14/delivery-acceleration-parallel-changes-strategy",editUrl:"https://github.com/alvarolorentedev/website/tree/main/blog/2022-10-14-delivery-acceleration-parallel-changes-strategy.md",source:"@site/blog/2022-10-14-delivery-acceleration-parallel-changes-strategy.md",title:"Delivery Acceleration: Parallel Changes Strategy",description:"Code evolve and changes. Making sure we don't break things in a continuous deployment environment.",date:"2022-10-14T00:00:00.000Z",formattedDate:"October 14, 2022",tags:[{label:"softwaredevelopment",permalink:"/blog/tags/softwaredevelopment"},{label:"programming",permalink:"/blog/tags/programming"},{label:"devops",permalink:"/blog/tags/devops"},{label:"productivity",permalink:"/blog/tags/productivity"}],readingTime:1.53,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/alvarolorentedev",imageURL:"https://avatars.githubusercontent.com/u/3071208",key:"kanekotic"}],frontMatter:{title:"Delivery Acceleration: Parallel Changes Strategy",authors:"kanekotic",draft:!1,description:"Code evolve and changes. Making sure we don't break things in a continuous deployment environment.",tags:["softwaredevelopment","programming","devops","productivity"],canonical_url:"https://www.kanekotic.com/blog/2022/10/14/delivery-acceleration-parallel-changes-strategy",cover_image:"https://www.kanekotic.com/img/expand_contract.jpeg",series:"Accelerate Continious Integration & Delivery Practices"},prevItem:{title:"TDD is not called TDT for a reason",permalink:"/blog/2022/11/24/tdd-is-not-called-tdt-for-a-reason"},nextItem:{title:"Delivery Acceleration: Version Control Integration Strategy",permalink:"/blog/2022/10/12/delivery-acceleration-version-control-integration-strategy"}},s={authorsImageUrls:[void 0]},c=[{value:"Versions",id:"versions",level:2},{value:"Versionless: Expand &amp; Contract",id:"versionless-expand--contract",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As we develop a product over time, changes need to be made as we need to accommodate new functionality. As most of our systems don't run isolated, and we have clients that used them (ex. public API), We have to keep compatibility at least on a temporary basis. How do we achieve this?"),(0,r.kt)("h2",{id:"versions"},"Versions"),(0,r.kt)("p",null,"A common practice is to have different versions for the multiple clients. While simple, it also requires significant effort to maintain as whenever an issue or bug is spotted, multiple places are affected, meaning there are more possibility of side effects.",(0,r.kt)("br",{parentName:"p"}),"\n","It also makes it more difficult to make a case for clients to migrate from one to the other due to the contract changes."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/version.png",alt:null})),(0,r.kt)("p",null,"This affect mostly negatively the next DORA 4 metrics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u274c ",(0,r.kt)("strong",{parentName:"li"},"Lead Time for change"))),(0,r.kt)("h2",{id:"versionless-expand--contract"},"Versionless: Expand & Contract"),(0,r.kt)("p",null,"As the name says, this strategy intents to have only one state of truth and not a multitude of them. Versionless has been heavily adopted as a principle by GraphQL, for example.",(0,r.kt)("br",{parentName:"p"}),"\n","We can achieve this in any code base by implementing a strategy for parallel changes called ",(0,r.kt)("strong",{parentName:"p"},"Expand & Contract"),", it's call this way due to the phases code goes through. Let's see for example we want to migrate from using one field value to a similar field with a more complex representation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expand"),": We add the new 'field' to the existing contract, and add the code to support this strategy on the existing code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contract"),": We monitor the usage of the old 'field' to understand when it is possible to deprecate, at that point we remove the old code.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/expand_contract.jpeg",alt:null})),(0,r.kt)("p",null,"With this, we have a clean source code that we can evolve indefinitely as required by the business."),(0,r.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Lead Time for change"))))}m.isMDXComponent=!0}}]);