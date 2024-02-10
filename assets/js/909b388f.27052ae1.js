"use strict";(self.webpackChunkalvarolorente_dev=self.webpackChunkalvarolorente_dev||[]).push([[1948],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(4137));const l={title:"Coding - C# - Complex Constructors",description:"Coding - C# - Complex Constructors",authors:"kanekotic",tags:["daily","learn"],draft:!1},a=void 0,i={permalink:"/blog/2016/01/26/c-sharp-complex-constructors",editUrl:"https://github.com/alvarolorentedev/website/tree/main/blog/2016-01-26-c-sharp-complex-constructors.md",source:"@site/blog/2016-01-26-c-sharp-complex-constructors.md",title:"Coding - C# - Complex Constructors",description:"Coding - C# - Complex Constructors",date:"2016-01-26T00:00:00.000Z",formattedDate:"January 26, 2016",tags:[{label:"daily",permalink:"/blog/tags/daily"},{label:"learn",permalink:"/blog/tags/learn"}],readingTime:.985,hasTruncateMarker:!1,authors:[{name:"Alvaro Jose",title:"Head of Software @Holaluz",url:"https://github.com/alvarolorentedev",imageURL:"https://avatars.githubusercontent.com/u/3071208",key:"kanekotic"}],frontMatter:{title:"Coding - C# - Complex Constructors",description:"Coding - C# - Complex Constructors",authors:"kanekotic",tags:["daily","learn"],draft:!1},prevItem:{title:"C# - Fluent Interfaces with Extension Methods",permalink:"/blog/2016/01/27/interface-with-extension-methods"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When doing complex objects using an object to help the building is welcome."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Complex\n{\n    double x;\n    double y;\n    double z;\n\n    float height;\n    float width;\n\n    string foreground;\n    string background;\n\n    public Complex()\n    {\n        x = 1.456;\n        y = 1.234;\n        z = 1.789;\n\n        height = 10.12;\n        width = 10.14;\n\n        foreground = "#FFF";\n        background = "#FA1";\n    }\n\n}\n')),(0,o.kt)("p",null,"In this way you remove some complexity of just adding steps in your constructor to something more abstract and can contain the logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Complex\n{\n    public double X { get; set; }\n    public double Y { get; set; }\n    public double Z { get; set; }\n\n    public double Height { get; set; }\n    public double Width { get; set; }\n\n    public string Foreground { get; set; }\n    public string Background { get; set; }\n\n    public Complex(ComplexBuildHelper buildHelper)\n    {\n        buildHelper.Construct(this);\n    }\n\n}\n\npublic class ComplexBuildHelper\n{\n    public void Construct(Complex reference)\n    {\n        BuildPosition(reference);\n        BuildDimension(reference);\n        BuildCharacteristics(reference);\n    }\n\n    private void BuildPosition(Complex reference)\n    {\n        reference.X = 1.456;\n        reference.Y = 1.234;\n        reference.Z = 1.789;\n    }\n\n    private void BuildDimension(Complex reference)\n    {\n        reference.Height = 10.12;\n        reference.Width = 10.14;\n    }\n\n    private void BuildCharacteristics(Complex reference)\n    {\n        reference.Foreground = "#FFF";\n        reference.Background = "#FA1";\n    }\n}\n')))}p.isMDXComponent=!0}}]);