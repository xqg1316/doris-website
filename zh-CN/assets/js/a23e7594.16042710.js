"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[714145],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,d=u["".concat(p,".").concat(m)]||u[m]||y[m]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},670577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(58168),l=(t(296540),t(15680));const a={title:"REPLACE_EMPTY",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/replace-empty",id:"version-2.1/sql-manual/sql-functions/string-functions/replace-empty",title:"REPLACE_EMPTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/replace-empty.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/replace-empty",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/replace-empty",draft:!1,tags:[],version:"2.1",frontMatter:{title:"REPLACE_EMPTY",language:"zh-CN"},sidebar:"docs",previous:{title:"REPLACE",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/replace"},next:{title:"STRLEFT",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/strleft"}},p={},c=[{value:"replace_empty",id:"replace_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},u="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"replace_empty"},"replace_empty"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,"\u81ea 2.1.5 \u7248\u672c\u652f\u6301\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR REPLACE_EMPTY (VARCHAR str, VARCHAR old, VARCHAR new)")),(0,l.yg)("p",null,"\u5c06 ",(0,l.yg)("inlineCode",{parentName:"p"},"str")," \u5b57\u7b26\u4e32\u4e2d\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"old")," \u5b50\u4e32\u5168\u90e8\u66ff\u6362\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"new")," \u5b57\u7b26\u4e32\u3002"),(0,l.yg)("p",null,"\u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"REPLACE()")," \u51fd\u6570\u4e0d\u540c\u7684\u662f\uff0c\u5f53 ",(0,l.yg)("inlineCode",{parentName:"p"},"old")," \u4e3a\u7a7a\u5b57\u7b26\u4e32\u65f6\uff0c\u4f1a\u5c06 ",(0,l.yg)("inlineCode",{parentName:"p"},"new")," \u5b57\u7b26\u4e32\u63d2\u5165\u5230 ",(0,l.yg)("inlineCode",{parentName:"p"},"str")," \u5b57\u7b26\u4e32\u7684\u6bcf\u4e2a\u5b57\u7b26\u524d\uff0c\u4ee5\u53ca ",(0,l.yg)("inlineCode",{parentName:"p"},"str")," \u5b57\u7b26\u4e32\u7684\u6700\u540e\u3002"),(0,l.yg)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u5176\u4ed6\u884c\u4e3a\u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"REPLACE()")," \u51fd\u6570\u5b8c\u5168\u4e00\u81f4\u3002"),(0,l.yg)("p",null,"\u8be5\u51fd\u6570\u4e3b\u8981\u7528\u4e8e\u517c\u5bb9 Presto\u3001Trino\uff0c\u5176\u884c\u4e3a\u4e86 Presto\u3001Trino \u4e2d\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"REPLACE()")," \u51fd\u6570\u5b8c\u5168\u4e00\u81f4\u3002"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select replace_empty(\"http://www.baidu.com:9090\", \"9090\", \"\");\n+------------------------------------------------------+\n| replace('http://www.baidu.com:9090', '9090', '') |\n+------------------------------------------------------+\n| http://www.baidu.com:                                |\n+------------------------------------------------------+\n\nmysql> select replace_empty(\"abc\", '', 'xyz');\n+---------------------------------+\n| replace_empty('abc', '', 'xyz') |\n+---------------------------------+\n| xyzaxyzbxyzcxyz                 |\n+---------------------------------+\n\nmysql> select replace_empty(\"\", \"\", \"xyz\");\n+------------------------------+\n| replace_empty('', '', 'xyz') |\n+------------------------------+\n| xyz                          |\n+------------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"REPLACE_EMPTY\n")))}y.isMDXComponent=!0}}]);