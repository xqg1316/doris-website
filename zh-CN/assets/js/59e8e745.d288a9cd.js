"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[470663],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>c});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),y=s(t),d=a,c=y["".concat(i,".").concat(d)]||y[d]||g[d]||l;return t?r.createElement(c,o(o({ref:n},p),{},{components:t})):r.createElement(c,o({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[y]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},962642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const l={title:"JSON_UNQUOTE",language:"zh-CN"},o=void 0,u={unversionedId:"sql-manual/sql-functions/json-functions/json-unquote",id:"version-3.0/sql-manual/sql-functions/json-functions/json-unquote",title:"JSON_UNQUOTE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/json-functions/json-unquote.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-unquote",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/json-functions/json-unquote",draft:!1,tags:[],version:"3.0",frontMatter:{title:"JSON_UNQUOTE",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_QUOTE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/json-functions/json-quote"},next:{title:"JSON_VALID",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/json-functions/json-valid"}},i={},s=[{value:"json_unquote",id:"json_unquote",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},y="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"json_unquote"},"json_unquote"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR json_unquote(VARCHAR)")),(0,a.yg)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5c06\u53bb\u6389 JSON \u503c\u4e2d\u7684\u5f15\u53f7\uff0c\u5e76\u5c06\u7ed3\u679c\u4f5c\u4e3a utf8mb4 \u5b57\u7b26\u4e32\u8fd4\u56de\u3002\u5982\u679c\u53c2\u6570\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,a.yg)("p",null,"\u5728\u5b57\u7b26\u4e32\u4e2d\u663e\u793a\u7684\u5982\u4e0b\u8f6c\u4e49\u5e8f\u5217\u5c06\u88ab\u8bc6\u522b\uff0c\u5bf9\u4e8e\u6240\u6709\u5176\u4ed6\u8f6c\u4e49\u5e8f\u5217\uff0c\u53cd\u659c\u6760\u5c06\u88ab\u5ffd\u7565\u3002"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u8f6c\u4e49\u5e8f\u5217"),(0,a.yg)("th",{parentName:"tr",align:null},"\u5e8f\u5217\u8868\u793a\u7684\u5b57\u7b26"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'\\"')),(0,a.yg)("td",{parentName:"tr",align:null},'\u53cc\u5f15\u53f7 "')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"\\b")),(0,a.yg)("td",{parentName:"tr",align:null},"\u9000\u683c\u5b57\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"\\f")),(0,a.yg)("td",{parentName:"tr",align:null},"\u6362\u9875\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"\\n")),(0,a.yg)("td",{parentName:"tr",align:null},"\u6362\u884c\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"\\r")),(0,a.yg)("td",{parentName:"tr",align:null},"\u56de\u8f66\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"\\t")),(0,a.yg)("td",{parentName:"tr",align:null},"\u5236\u8868\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"\\\\")),(0,a.yg)("td",{parentName:"tr",align:null},"\u53cd\u659c\u6760 ",(0,a.yg)("inlineCode",{parentName:"td"},"\\"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"\\uxxxx")),(0,a.yg)("td",{parentName:"tr",align:null},"Unicode \u503c XXXX \u7684 UTF-8 \u5b57\u8282")))),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT json_unquote('\"doris\"');\n+-------------------------+\n| json_unquote('\"doris\"') |\n+-------------------------+\n| doris                   |\n+-------------------------+\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT json_unquote('[1, 2, 3]');\n+---------------------------+\n| json_unquote('[1, 2, 3]') |\n+---------------------------+\n| [1, 2, 3]                 |\n+---------------------------+\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT json_unquote(null);\n+--------------------+\n| json_unquote(NULL) |\n+--------------------+\n| NULL               |\n+--------------------+\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT json_unquote('\"\\\\ttest\"');\n+--------------------------+\n| json_unquote('\"\\ttest\"') |\n+--------------------------+\n|       test                    |\n+--------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"json,unquote,json_unquote"))}g.isMDXComponent=!0}}]);