"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[254820],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,d=p["".concat(s,".").concat(y)]||p[y]||f[y]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},562199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const a={title:"locate",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/locate",id:"version-1.2/sql-manual/sql-functions/string-functions/locate",title:"locate",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/locate.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/locate",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/locate",draft:!1,tags:[],version:"1.2",frontMatter:{title:"locate",language:"zh-CN"},sidebar:"docs",previous:{title:"instr",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/instr"},next:{title:"field",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/field"}},s={},c=[{value:"locate",id:"locate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"locate"},"locate"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT locate(VARCHAR substr, VARCHAR str[, INT pos])")),(0,o.yg)("p",null,"\u8fd4\u56de substr \u5728 str \u4e2d\u51fa\u73b0\u7684\u4f4d\u7f6e\uff08\u4ece1\u5f00\u59cb\u8ba1\u6570\uff09\u3002\u5982\u679c\u6307\u5b9a\u7b2c3\u4e2a\u53c2\u6570 pos\uff0c\u5219\u4ece str \u4ee5 pos \u4e0b\u6807\u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u5904\u5f00\u59cb\u67e5\u627e substr \u51fa\u73b0\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u8fd4\u56de0"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT LOCATE('bar', 'foobarbar');\n+----------------------------+\n| locate('bar', 'foobarbar') |\n+----------------------------+\n|                          4 |\n+----------------------------+\n\nmysql> SELECT LOCATE('xbar', 'foobar');\n+--------------------------+\n| locate('xbar', 'foobar') |\n+--------------------------+\n|                        0 |\n+--------------------------+\n\nmysql> SELECT LOCATE('bar', 'foobarbar', 5);\n+-------------------------------+\n| locate('bar', 'foobarbar', 5) |\n+-------------------------------+\n|                             7 |\n+-------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"LOCATE\n")))}f.isMDXComponent=!0}}]);