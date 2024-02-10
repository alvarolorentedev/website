"use strict";(self.webpackChunkalvarolorente_dev=self.webpackChunkalvarolorente_dev||[]).push([[6654],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const o={title:"C# - Extension methods overlap with linq",description:"C# - Extension methods overlap with linq",authors:"kanekotic",tags:["daily","learn"],draft:!1},i=void 0,l={permalink:"/blog/2016/01/28/extension-methods-overlap-with-linq",editUrl:"https://github.com/alvarolorentedev/website/tree/main/blog/2016-01-28-extension-methods-overlap-with-linq.md",source:"@site/blog/2016-01-28-extension-methods-overlap-with-linq.md",title:"C# - Extension methods overlap with linq",description:"C# - Extension methods overlap with linq",date:"2016-01-28T00:00:00.000Z",formattedDate:"January 28, 2016",tags:[{label:"daily",permalink:"/blog/tags/daily"},{label:"learn",permalink:"/blog/tags/learn"}],readingTime:1.78,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/alvarolorentedev",imageURL:"https://avatars.githubusercontent.com/u/3071208",key:"kanekotic"}],frontMatter:{title:"C# - Extension methods overlap with linq",description:"C# - Extension methods overlap with linq",authors:"kanekotic",tags:["daily","learn"],draft:!1},prevItem:{title:"Create your User/Organization GitHub Page with Hugo + Travis",permalink:"/blog/2018/07/04/deploy-hugo-with-travis"},nextItem:{title:"C# - Fluent Interfaces with Extension Methods",permalink:"/blog/2016/01/27/interface-with-extension-methods"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I have hit a corner case of extension methods and LINQ. Today I was declaring some extension methods to make my code more readable.So I created an extension method that gets an object and performs a direct cast:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class GeneralExtensions\n{\n    public static T Cast<T>(this object o)\n    {\n        return (T)o;\n    }\n}\n")),(0,r.kt)("p",null,"The intention was to be able to call my direct castings by something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"MyObject.CastTo<MyInterface>();\n")),(0,r.kt)("p",null,"It happens that in the same namespace I have an extension method that has a LINQ expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic static class EnumExtenstions\n{\n    public static IEnumerable<string> UseLinq(this IEnumerable<object> collection)\n    {\n        return (from object value in collection select value.ToString() ).ToList();\n    }\n}\n")),(0,r.kt)("p",null,"Adding this first extension method to my code base cause the next error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error   CS1936  Could not find an implementation of the query pattern for source type 'object'.  'Select' not found.\n")),(0,r.kt)("p",null,"Having both extension methods in different namespaces (and not referred), or rename ",(0,r.kt)("inlineCode",{parentName:"p"},"Cast<T>")," to something different solves the issue. This is caused for an overlap of the extension methods where the nearest one to the code is the one called."),(0,r.kt)("p",null,"##",(0,r.kt)("strong",{parentName:"p"},"How bad Extension Methods over object could go?")),(0,r.kt)("p",null,"This is an extract from the answer of Eric Lippert, regarding the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class GeneralExtensions\n{\n    public static T Cast<T>(this object o)\n    {\n        return (T)o;\n    }\n}\n")),(0,r.kt)("p",null,"Side Effects of the ",(0,r.kt)("inlineCode",{parentName:"p"},"cast<T>"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cast<int>(123)")," unnecessarily boxes the int, ",(0,r.kt)("inlineCode",{parentName:"li"},"(int)123")," does not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cast< short >(123)")," fails but ",(0,r.kt)("inlineCode",{parentName:"li"},"(short)123")," succeeds. There is no conversion from a boxed int to a short."),(0,r.kt)("li",{parentName:"ul"},"Suppose you have a user-defined conversion from Animal to Shape. ",(0,r.kt)("inlineCode",{parentName:"li"},"Cast<Shape>(new Tiger())")," fails but ",(0,r.kt)("inlineCode",{parentName:"li"},"(Shape) new Tiger()")," succeeds."),(0,r.kt)("li",{parentName:"ul"},"Suppose q is a nullable int that happens to be null. ",(0,r.kt)("inlineCode",{parentName:"li"},"Cast<string>(q)")," succeeds! But ",(0,r.kt)("inlineCode",{parentName:"li"},"(string)q")," would fail at compile time"),(0,r.kt)("li",{parentName:"ul"},"Etc")),(0,r.kt)("p",null,"Cast method has some overlap with the real cast operator but is not a substitute for it. To capture the semantics of the cast operator there is a need to use dynamic, which starts the compiler at runtime and does the compile time analysis on runtime types."))}u.isMDXComponent=!0}}]);