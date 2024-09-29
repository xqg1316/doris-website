"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[176054],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),A=a,f=c["".concat(l,".").concat(A)]||c[A]||u[A]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=A;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}A.displayName="MDXCreateElement"},293138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const i={title:"BITMAP_FROM_BASE64",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-from-base64",id:"version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-from-base64",title:"BITMAP_FROM_BASE64",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-from-base64.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-from-base64",permalink:"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-from-base64",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BITMAP_FROM_BASE64",language:"en"},sidebar:"docs",previous:{title:"BITMAP_HASH64",permalink:"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash64"},next:{title:"BITMAP_TO_BASE64",permalink:"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-to-base64"}},l={},p=[{value:"bitmap_from_base64",id:"bitmap_from_base64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_from_base64"},"bitmap_from_base64"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_FROM_BASE64(VARCHAR input)")),(0,a.yg)("p",null,"Convert a base64 string(result of function ",(0,a.yg)("inlineCode",{parentName:"p"},"bitmap_to_base64"),") into a bitmap. If input string is invalid, return NULL."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> select bitmap_to_string(bitmap_from_base64("AA=="));\n+----------------------------------------------+\n| bitmap_to_string(bitmap_from_base64("AA==")) |\n+----------------------------------------------+\n|                                              |\n+----------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_from_base64("AQEAAAA="));\n+-----------------------------------+\n| bitmap_to_string(bitmap_from_base64("AQEAAAA=")) |\n+-----------------------------------+\n| 1                                 |\n+-----------------------------------+\n\nmysql> select bitmap_to_string(bitmap_from_base64("AjowAAACAAAAAAAAAJgAAAAYAAAAGgAAAAEAf5Y="));\n+----------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_from_base64("AjowAAACAAAAAAAAAJgAAAAYAAAAGgAAAAEAf5Y=")) |\n+----------------------------------------------------------------------------------+\n| 1,9999999                                                                        |\n+----------------------------------------------------------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_FROM_BASE64,BITMAP\n")))}u.isMDXComponent=!0}}]);