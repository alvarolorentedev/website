"use strict";(self.webpackChunkalvarolorente_dev=self.webpackChunkalvarolorente_dev||[]).push([[6218],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const o={title:"Delivery Acceleration: Observability",draft:!1,description:"When runing services in production the most important thing is to understand the health of it",authors:"kanekotic",tags:["softwaredevelopment","programming","devops","productivity"],canonical_url:"https://www.kanekotic.com/blog/2022/09/27/delivery-acceleration-observability",cover_image:"https://www.kanekotic.com/img/blog/no_alarms.png",series:"Accelerate Continious Integration & Delivery Practices"},i=void 0,l={permalink:"/blog/2022/09/27/delivery-acceleration-observability",editUrl:"https://github.com/alvarolorentedev/website/tree/main/blog/2022-09-27-delivery-acceleration-observability.md",source:"@site/blog/2022-09-27-delivery-acceleration-observability.md",title:"Delivery Acceleration: Observability",description:"When runing services in production the most important thing is to understand the health of it",date:"2022-09-27T00:00:00.000Z",formattedDate:"September 27, 2022",tags:[{label:"softwaredevelopment",permalink:"/blog/tags/softwaredevelopment"},{label:"programming",permalink:"/blog/tags/programming"},{label:"devops",permalink:"/blog/tags/devops"},{label:"productivity",permalink:"/blog/tags/productivity"}],readingTime:2.565,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/alvarolorentedev",imageURL:"https://avatars.githubusercontent.com/u/3071208",key:"kanekotic"}],frontMatter:{title:"Delivery Acceleration: Observability",draft:!1,description:"When runing services in production the most important thing is to understand the health of it",authors:"kanekotic",tags:["softwaredevelopment","programming","devops","productivity"],canonical_url:"https://www.kanekotic.com/blog/2022/09/27/delivery-acceleration-observability",cover_image:"https://www.kanekotic.com/img/blog/no_alarms.png",series:"Accelerate Continious Integration & Delivery Practices"},prevItem:{title:"Delivery Acceleration: Deployment Environments",permalink:"/blog/2022/10/10/delivery-acceleration-environments"},nextItem:{title:"Delivery Acceleration: DevOps Mentality & Practices",permalink:"/blog/2022/09/25/delivery-acceleration-devops-attitudes"}},s={authorsImageUrls:[void 0]},c=[{value:"Tools",id:"tools",level:2},{value:"Alarms",id:"alarms",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Logs",id:"logs",level:3},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When we talk about observability, we talk about:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Capability of developers to understand the health and status of their application.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/blog/no_alarms.png",alt:null})),(0,n.kt)("p",null,"We don't want users or clients to be the ones noticing something is wrong. For this, there are multiple tools that fall under the observability category."),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("h3",{id:"alarms"},"Alarms"),(0,n.kt)("p",null,"This is the first line of defense against issues, the intent is to get notified if any potential issue arises.",(0,n.kt)("br",{parentName:"p"}),"\n","The intent of this is to provide a notification if any parameter of our application is out of range (ex. to many 5xx)."),(0,n.kt)("p",null,"This allows us to use our mental bandwidth to focus in creating value and not continuously check if the parameters are in range."),(0,n.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Mean Time To Recovery"))),(0,n.kt)("h3",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,"As the name says, this is a set of measurements we track from our code, it allows us to understand the health of individual parts of our system."),(0,n.kt)("p",null,"This metrics are shown in dashboards that allow us to visually understand what is happening.  We can divide metrics dashboards in 2 types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Status: It will give us a really fast overview of the health of the system."),(0,n.kt)("li",{parentName:"ul"},"Details: It will not tell us what is wrong, but will provide more detailed information to dig deeper into a specific area.")),(0,n.kt)("p",null,"It's important to not mix this 2 together, as they have different purposes. Like with alarms, it helps focus our mental bandwidth in the correct place."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/blog/dashboards.jpeg",alt:null})),(0,n.kt)("p",null,"As you see in the previous image, the left represents a detail dashboard that makes it difficult to know on a single view if there is an issue. For this, as in the image on the right,  we have a status dashboard that in a single glance we can spot where to look next."),(0,n.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Mean Time To Recovery"))),(0,n.kt)("h3",{id:"logs"},"Logs"),(0,n.kt)("p",null,"This is the lower level you want to go. It should tell you where in the code is your issue, so you can go and fix it."),(0,n.kt)("p",null,"When thinking about logging, it is significant not log everything. Due to the added noise that this can bring."),(0,n.kt)("p",null,"This affect the next DORA 4 metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2714\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Mean Time To Recovery"))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"let's get practical on how would this work."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.kanekotic.com/img/blog/observability-drawio.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implement your service"),(0,n.kt)("li",{parentName:"ul"},"Create metrics and send them to your metrics system (ex. ",(0,n.kt)("a",{parentName:"li",href:"https://www.datadoghq.com/"},"Datadog"),", ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana"),")"),(0,n.kt)("li",{parentName:"ul"},"Create logs and send them to your logging system (ex. ",(0,n.kt)("a",{parentName:"li",href:"https://www.datadoghq.com/"},"Datadog"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.elastic.co/kibana/"},"Kibana"),", ",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cloudwatch/"},"CloudWatch"),")."),(0,n.kt)("li",{parentName:"ul"},"Create dashboards:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Single Status dashboard. Use only simple boxes with green and red backgrounds that represent in one view the health of your system & subsystems."),(0,n.kt)("li",{parentName:"ul"},"Multiple Detail dashboards. Create a dashboard for each subsystem with as much data as necessary to understand where the issue is, so you can later pinpoint the root cause in your logs."))),(0,n.kt)("li",{parentName:"ul"},"Create alarms based on the status dashboard boxes."),(0,n.kt)("li",{parentName:"ul"},"Connect your notification system (ex. ",(0,n.kt)("a",{parentName:"li",href:"https://www.atlassian.com/software/opsgenie"},"Opsgenie"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.pagerduty.com/"},"PagerDuty"),", ",(0,n.kt)("a",{parentName:"li",href:"https://slack.com/"},"Slack "),"channel) to the created alarms, so you get push notifications as something goes wrong.")))}u.isMDXComponent=!0}}]);