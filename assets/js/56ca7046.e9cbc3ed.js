"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[706473],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(y,s(s({ref:t},p),{},{components:n})):a.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},319510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-FILE",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-FILE",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-FILE",title:"SHOW-FILE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-FILE.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-FILE",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-FILE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-FILE",language:"en"},sidebar:"docs",previous:{title:"SHOW-TYPECAST",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-TYPECAST"},next:{title:"SHOW-GRANTS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-GRANTS"}},i={},c=[{value:"SHOW-FILE",id:"show-file",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-file"},"SHOW-FILE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW FILE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to display a file created in a database"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW FILE [FROM database];\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"FileId: file ID, globally unique\nDbName: the name of the database to which it belongs\nCatalog: Custom Category\nFileName: file name\nFileSize: file size, in bytes\nMD5: MD5 of the file\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the uploaded files in the database my_database"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW FILE FROM my_database;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"}," SHOW, FILE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);