"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[620839],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>S});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),A=r,S=m["".concat(o,".").concat(A)]||m[A]||u[A]||l;return n?a.createElement(S,i(i({ref:t},p),{},{components:n})):a.createElement(S,i({ref:t},p))}));function S(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=A;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},301043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ADMIN-SHOW-REPLICA-STATUS",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS",title:"ADMIN-SHOW-REPLICA-STATUS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ADMIN-SHOW-REPLICA-STATUS",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SHOW-REPLICA-DISTRIBUTION",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION"},next:{title:"ADMIN-REPAIR-TABLE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE"}},o={},c=[{value:"ADMIN-SHOW-REPLICA-STATUS",id:"admin-show-replica-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-show-replica-status"},"ADMIN-SHOW-REPLICA-STATUS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN SHOW REPLICA STATUS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4e00\u4e2a\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u72b6\u6001\u4fe1\u606f\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," ADMIN SHOW REPLICA STATUS FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n[where_clause];\n")),(0,r.yg)("p",null,"\u8bf4\u660e"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"where_clause:\nWHERE STATUS ","[!]",'= "replica_status"')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"replica_status:\nOK:                         replica \u5904\u4e8e\u5065\u5eb7\u72b6\u6001\nDEAD:                     replica \u6240\u5728 Backend \u4e0d\u53ef\u7528\nVERSION_ERROR:  replica \u6570\u636e\u7248\u672c\u6709\u7f3a\u5931\nSCHEMA_ERROR:   replica \u7684 schema hash \u4e0d\u6b63\u786e\nMISSING:                 replica \u4e0d\u5b58\u5728"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u5168\u90e8\u7684\u526f\u672c\u72b6\u6001"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN SHOW REPLICA STATUS FROM db1.tbl1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u67d0\u4e2a\u5206\u533a\u72b6\u6001\u4e3a VERSION_ERROR \u7684\u526f\u672c"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)\nWHERE STATUS = "VERSION_ERROR";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u8868\u6240\u6709\u72b6\u6001\u4e0d\u5065\u5eb7\u7684\u526f\u672c"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, SHOW, REPLICA, STATUS, ADMIN SHOW\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);