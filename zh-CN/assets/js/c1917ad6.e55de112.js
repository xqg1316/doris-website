"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[390775],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>O});var l=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),m=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=m(a),y=n,O=g["".concat(p,".").concat(y)]||g[y]||s[y]||r;return a?l.createElement(O,i(i({ref:t},u),{},{components:a})):l.createElement(O,i({ref:t},u))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}y.displayName="MDXCreateElement"},850142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=a(58168),n=(a(296540),a(15680));const r={title:"REVOKE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Account-Management-Statements/REVOKE",id:"sql-manual/sql-statements/Account-Management-Statements/REVOKE",title:"REVOKE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Account-Management-Statements/REVOKE.md",sourceDirName:"sql-manual/sql-statements/Account-Management-Statements",slug:"/sql-manual/sql-statements/Account-Management-Statements/REVOKE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/REVOKE",draft:!1,tags:[],version:"current",frontMatter:{title:"REVOKE",language:"zh-CN"},sidebar:"docs",previous:{title:"GRANT",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/GRANT"},next:{title:"DROP-ROLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/DROP-ROLE"}},p={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"privilege_list",id:"privilege_list",level:3},{value:"priv_level",id:"priv_level",level:3},{value:"resource_name",id:"resource_name",level:3},{value:"workload_group_name",id:"workload_group_name",level:3},{value:"compute_group_name",id:"compute_group_name",level:3},{value:"storage_vault_name",id:"storage_vault_name",level:3},{value:"user_identity",id:"user_identity",level:3},{value:"role_name",id:"role_name",level:3},{value:"role_list",id:"role_list",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:2},{value:"Keywords",id:"keywords",level:2}],u={toc:m},g="wrapper";function s(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,l.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,n.yg)("p",null,"REVOKE \u547d\u4ee4\u7528\u4e8e\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u64a4\u9500\u67d0\u7528\u6237\u6216\u67d0\u89d2\u8272\u7684\u6307\u5b9a\u6743\u9650\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u64a4\u9500\u5148\u524d\u6388\u4e88\u67d0\u7528\u6237\u7684\u6307\u5b9a\u89d2\u8272\u3002")),(0,n.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,n.yg)("p",null,"REVOKE privilege_list ON priv_level FROM user_identity ","[ROLE role_name]"),(0,n.yg)("p",null,"REVOKE privilege_list ON RESOURCE resource_name FROM user_identity ","[ROLE role_name]"),(0,n.yg)("p",null,"REVOKE privilege_list ON WORKLOAD GROUP workload_group_name FROM user_identity ","[ROLE role_name]"),(0,n.yg)("p",null,"REVOKE privilege_list ON COMPUTE GROUP compute_group_name FROM user_identity ","[ROLE role_name]"),(0,n.yg)("p",null,"REVOKE privilege_list ON STORAGE VAULT storage_vault_name FROM user_identity ","[ROLE role_name]"),(0,n.yg)("p",null,"REVOKE role_list FROM user_identity"),(0,n.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.yg)("h3",{id:"privilege_list"},"privilege_list"),(0,n.yg)("p",null,"\u9700\u8981\u64a4\u9500\u7684\u6743\u9650\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002\u652f\u6301\u7684\u6743\u9650\u5305\u62ec\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"NODE_PRIV\uff1a\u96c6\u7fa4\u8282\u70b9\u64cd\u4f5c\u6743\u9650"),(0,n.yg)("li",{parentName:"ul"},"ADMIN_PRIV\uff1a\u7ba1\u7406\u5458\u6743\u9650"),(0,n.yg)("li",{parentName:"ul"},"GRANT_PRIV\uff1a\u6388\u6743\u6743\u9650"),(0,n.yg)("li",{parentName:"ul"},"SELECT_PRIV\uff1a\u67e5\u8be2\u6743\u9650"),(0,n.yg)("li",{parentName:"ul"},"LOAD_PRIV\uff1a\u6570\u636e\u5bfc\u5165\u6743\u9650"),(0,n.yg)("li",{parentName:"ul"},"ALTER_PRIV\uff1a\u4fee\u6539\u6743\u9650"),(0,n.yg)("li",{parentName:"ul"},"CREATE_PRIV\uff1a\u521b\u5efa\u6743\u9650"),(0,n.yg)("li",{parentName:"ul"},"DROP_PRIV\uff1a\u5220\u9664\u6743\u9650"),(0,n.yg)("li",{parentName:"ul"},"USAGE_PRIV\uff1a\u4f7f\u7528\u6743\u9650"),(0,n.yg)("li",{parentName:"ul"},"SHOW_VIEW_PRIV\uff1a\u67e5\u770b\u89c6\u56fe\u5b9a\u4e49\u6743\u9650")),(0,n.yg)("h3",{id:"priv_level"},"priv_level"),(0,n.yg)("p",null,"\u6307\u5b9a\u6743\u9650\u7684\u4f5c\u7528\u8303\u56f4\u3002\u652f\u6301\u4ee5\u4e0b\u683c\u5f0f\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"."),".*\uff1a\u6240\u6709 catalog\u3001\u6570\u636e\u5e93\u548c\u8868"),(0,n.yg)("li",{parentName:"ul"},"catalog_name.",(0,n.yg)("em",{parentName:"li"},"."),"\uff1a\u6307\u5b9a catalog \u4e2d\u7684\u6240\u6709\u6570\u636e\u5e93\u548c\u8868"),(0,n.yg)("li",{parentName:"ul"},"catalog_name.db.*\uff1a\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868"),(0,n.yg)("li",{parentName:"ul"},"catalog_name.db.tbl\uff1a\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u7279\u5b9a\u8868")),(0,n.yg)("h3",{id:"resource_name"},"resource_name"),(0,n.yg)("p",null,"\u6307\u5b9a resource \u540d\u79f0\u3002\u652f\u6301 % \uff08\u5339\u914d\u4efb\u610f\u5b57\u7b26\u4e32\uff09\u548c _\uff08\u5339\u914d\u4efb\u610f\u5355\u4e2a\u5b57\u7b26\uff09\u901a\u914d\u7b26\u3002"),(0,n.yg)("h3",{id:"workload_group_name"},"workload_group_name"),(0,n.yg)("p",null,"\u6307\u5b9a workload group \u540d\u79f0\u3002\u652f\u6301 % \uff08\u5339\u914d\u4efb\u610f\u5b57\u7b26\u4e32\uff09\u548c _\uff08\u5339\u914d\u4efb\u610f\u5355\u4e2a\u5b57\u7b26\uff09\u901a\u914d\u7b26\u3002"),(0,n.yg)("h3",{id:"compute_group_name"},"compute_group_name"),(0,n.yg)("p",null,"\u6307\u5b9a compute group \u540d\u79f0\u3002\u652f\u6301 % \uff08\u5339\u914d\u4efb\u610f\u5b57\u7b26\u4e32\uff09\u548c _\uff08\u5339\u914d\u4efb\u610f\u5355\u4e2a\u5b57\u7b26\uff09\u901a\u914d\u7b26\u3002"),(0,n.yg)("h3",{id:"storage_vault_name"},"storage_vault_name"),(0,n.yg)("p",null,"\u6307\u5b9a storage vault \u540d\u79f0\u3002\u652f\u6301 % \uff08\u5339\u914d\u4efb\u610f\u5b57\u7b26\u4e32\uff09\u548c _\uff08\u5339\u914d\u4efb\u610f\u5355\u4e2a\u5b57\u7b26\uff09\u901a\u914d\u7b26\u3002"),(0,n.yg)("h3",{id:"user_identity"},"user_identity"),(0,n.yg)("p",null,"\u6307\u5b9a\u8981\u64a4\u9500\u6743\u9650\u7684\u7528\u6237\u3002\u5fc5\u987b\u662f\u4f7f\u7528 CREATE USER \u521b\u5efa\u7684\u7528\u6237\u3002user_identity \u4e2d\u7684 host \u53ef\u4ee5\u662f\u57df\u540d\uff0c\u5982\u679c\u662f\u57df\u540d\uff0c\u6743\u9650\u7684\u64a4\u9500\u65f6\u95f4\u53ef\u80fd\u4f1a\u6709 1 \u5206\u949f\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002"),(0,n.yg)("h3",{id:"role_name"},"role_name"),(0,n.yg)("p",null,"\u6307\u5b9a\u8981\u64a4\u9500\u6743\u9650\u7684\u89d2\u8272\u3002\u8be5\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"),(0,n.yg)("h3",{id:"role_list"},"role_list"),(0,n.yg)("p",null,"\u9700\u8981\u64a4\u9500\u7684\u89d2\u8272\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002\u6307\u5b9a\u7684\u6240\u6709\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"),(0,n.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237\u5728\u7279\u5b9a\u6570\u636e\u5e93\u4e0a\u7684 SELECT \u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237\u5bf9\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE USAGE_PRIV ON RESOURCE 'spark_resource' FROM 'jack'@'192.%';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237\u7684\u89d2\u8272\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE 'role1','role2' FROM 'jack'@'192.%';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237\u5bf9 workload group  \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE USAGE_PRIV ON WORKLOAD GROUP 'g1' FROM 'jack'@'%';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237\u5bf9\u6240\u6709 workload group  \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE USAGE_PRIV ON WORKLOAD GROUP '%' FROM 'jack'@'%';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u89d2\u8272\u5bf9 workload group  \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE USAGE_PRIV ON WORKLOAD GROUP 'g1' FROM ROLE 'test_role';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237\u5bf9 compute group  \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE USAGE_PRIV ON COMPUTE GROUP 'group1' FROM 'jack'@'%';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u89d2\u8272\u5bf9 compute group  \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE USAGE_PRIV ON COMPUTE GROUP 'group1' FROM ROLE 'my_role';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237\u5bf9 storage vault \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE USAGE_PRIV ON STORAGE VAULT 'vault1' FROM 'jack'@'%';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u89d2\u8272\u5bf9 storage vault \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE USAGE_PRIV ON STORAGE VAULT 'vault1' FROM ROLE 'my_role';")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237\u5bf9\u6240\u6709 storage vault \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,n.yg)("p",{parentName:"li"},"REVOKE USAGE_PRIV ON STORAGE VAULT '%' FROM 'jack'@'%';"))),(0,n.yg)("h2",{id:"\u76f8\u5173\u547d\u4ee4"},"\u76f8\u5173\u547d\u4ee4"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/GRANT"},"GRANT")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-GRANTS"},"SHOW GRANTS")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE"},"CREATE ROLE")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"../Administration-Statements/CREATE-WORKLOAD-GROUP.md"},"CREATE WORKLOAD GROUP")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"../Administration-Statements/CREATE-COMPUTE-GROUP.md"},"CREATE COMPUTE GROUP")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"../Administration-Statements/CREATE-RESOURCE.md"},"CREATE RESOURCE")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"../Administration-Statements/CREATE-STORAGE-VAULT.md"},"CREATE STORAGE VAULT"))),(0,n.yg)("h2",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"REVOKE, WORKLOAD GROUP, COMPUTE GROUP, RESOURCE\n")))}s.isMDXComponent=!0}}]);