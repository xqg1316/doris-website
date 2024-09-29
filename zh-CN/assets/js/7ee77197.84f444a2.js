"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[397655],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},584550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const l={title:"PAUSE-SYNC-JOB",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",title:"PAUSE-SYNC-JOB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB",draft:!1,tags:[],version:"1.2",frontMatter:{title:"PAUSE-SYNC-JOB",language:"zh-CN"},sidebar:"docs",previous:{title:"STOP-SYNC-JOB",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB"},next:{title:"BROKER-LOAD",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"}},c={},s=[{value:"PAUSE-SYNC-JOB",id:"pause-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"pause-sync-job"},"PAUSE-SYNC-JOB"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"PAUSE SYNC JOB"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"job_name")," \u6682\u505c\u4e00\u4e2a\u6570\u636e\u5e93\u5185\u6b63\u5728\u8fd0\u884c\u7684\u5e38\u9a7b\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\uff0c\u88ab\u6682\u505c\u7684\u4f5c\u4e1a\u5c06\u505c\u6b62\u540c\u6b65\u6570\u636e\uff0c\u4fdd\u6301\u6d88\u8d39\u7684\u6700\u65b0\u4f4d\u7f6e\uff0c\u76f4\u5230\u88ab\u7528\u6237\u6062\u590d\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE SYNC JOB [db.]job_name\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6682\u505c\u540d\u79f0\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"job_name")," \u7684\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE SYNC JOB `job_name`;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"PAUSE, SYNC, JOB\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);