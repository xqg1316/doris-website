"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[581729],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>N});var l=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),m=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=m(e.components);return l.createElement(o.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},s=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=m(t),s=r,N=g["".concat(o,".").concat(s)]||g[s]||y[s]||n;return t?l.createElement(N,i(i({ref:a},u),{},{components:t})):l.createElement(N,i({ref:a},u))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[g]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<n;m++)i[m]=t[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},248439:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>n,metadata:()=>p,toc:()=>m});var l=t(58168),r=(t(296540),t(15680));const n={title:"GRANT",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-statements/Account-Management-Statements/GRANT",id:"version-3.0/sql-manual/sql-statements/Account-Management-Statements/GRANT",title:"GRANT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Account-Management-Statements/GRANT.md",sourceDirName:"sql-manual/sql-statements/Account-Management-Statements",slug:"/sql-manual/sql-statements/Account-Management-Statements/GRANT",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/GRANT",draft:!1,tags:[],version:"3.0",frontMatter:{title:"GRANT",language:"zh-CN"},sidebar:"docs",previous:{title:"LDAP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/LDAP"},next:{title:"REVOKE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/REVOKE"}},o={},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"privilege_list",id:"privilege_list",level:3},{value:"priv_level",id:"priv_level",level:3},{value:"resource_name",id:"resource_name",level:3},{value:"workload_group_name",id:"workload_group_name",level:3},{value:"compute_group_name",id:"compute_group_name",level:3},{value:"storage_vault_name",id:"storage_vault_name",level:3},{value:"user_identity",id:"user_identity",level:3},{value:"role_name",id:"role_name",level:3},{value:"role_list",id:"role_list",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:2},{value:"Keywords",id:"keywords",level:3}],u={toc:m},g="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,l.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"GRANT \u547d\u4ee4\u7528\u4e8e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5c06\u6307\u5b9a\u7684\u6743\u9650\u6388\u4e88\u67d0\u7528\u6237\u6216\u89d2\u8272\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u67d0\u7528\u6237\u3002")),(0,r.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.yg)("p",null,"GRANT privilege_list ON priv_level TO user_identity ","[ROLE role_name]"),(0,r.yg)("p",null,"GRANT privilege_list ON RESOURCE resource_name TO user_identity ","[ROLE role_name]"),(0,r.yg)("p",null,"GRANT privilege_list ON WORKLOAD GROUP workload_group_name TO user_identity ","[ROLE role_name]"),(0,r.yg)("p",null,"GRANT privilege_list ON COMPUTE GROUP compute_group_name TO user_identity ","[ROLE role_name]"),(0,r.yg)("p",null,"GRANT privilege_list ON STORAGE VAULT storage_vault_name TO user_identity ","[ROLE role_name]"),(0,r.yg)("p",null,"GRANT role_list TO user_identity"),(0,r.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.yg)("h3",{id:"privilege_list"},"privilege_list"),(0,r.yg)("p",null,"\u9700\u8981\u8d4b\u4e88\u7684\u6743\u9650\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002\u5f53\u524d\u652f\u6301\u5982\u4e0b\u6743\u9650\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"NODE_PRIV\uff1a\u96c6\u7fa4\u8282\u70b9\u64cd\u4f5c\u6743\u9650\uff0c\u5305\u62ec\u8282\u70b9\u4e0a\u4e0b\u7ebf\u7b49\u64cd\u4f5c\u3002"),(0,r.yg)("li",{parentName:"ul"},"ADMIN_PRIV\uff1a\u9664 NODE_PRIV \u4ee5\u5916\u7684\u6240\u6709\u6743\u9650\u3002"),(0,r.yg)("li",{parentName:"ul"},"GRANT_PRIV\uff1a\u64cd\u4f5c\u6743\u9650\u7684\u6743\u9650\uff0c\u5305\u62ec\u521b\u5efa\u5220\u9664\u7528\u6237\u3001\u89d2\u8272\uff0c\u6388\u6743\u548c\u64a4\u6743\uff0c\u8bbe\u7f6e\u5bc6\u7801\u7b49\u3002"),(0,r.yg)("li",{parentName:"ul"},"SELECT_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u8bfb\u53d6\u6743\u9650\u3002"),(0,r.yg)("li",{parentName:"ul"},"LOAD_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5bfc\u5165\u6743\u9650\u3002"),(0,r.yg)("li",{parentName:"ul"},"ALTER_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684 schema \u53d8\u66f4\u6743\u9650\u3002"),(0,r.yg)("li",{parentName:"ul"},"CREATE_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u521b\u5efa\u6743\u9650\u3002"),(0,r.yg)("li",{parentName:"ul"},"DROP_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5220\u9664\u6743\u9650\u3002"),(0,r.yg)("li",{parentName:"ul"},"USAGE_PRIV\uff1a\u5bf9\u6307\u5b9a\u8d44\u6e90\u3001Workload Group\u3001Compute Group \u7684\u4f7f\u7528\u6743\u9650\u3002"),(0,r.yg)("li",{parentName:"ul"},"SHOW_VIEW_PRIV\uff1a\u67e5\u770b view \u521b\u5efa\u8bed\u53e5\u7684\u6743\u9650\u3002")),(0,r.yg)("p",null,"\u65e7\u7248\u6743\u9650\u8f6c\u6362\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"ALL \u548c READ_WRITE \u4f1a\u88ab\u8f6c\u6362\u6210\uff1aSELECT_PRIV, LOAD_PRIV, ALTER_PRIV, CREATE_PRIV, DROP_PRIV\u3002"),(0,r.yg)("li",{parentName:"ul"},"READ_ONLY \u4f1a\u88ab\u8f6c\u6362\u4e3a SELECT_PRIV\u3002")),(0,r.yg)("h3",{id:"priv_level"},"priv_level"),(0,r.yg)("p",null,"\u652f\u6301\u4ee5\u4e0b\u56db\u79cd\u5f62\u5f0f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"."),".*\uff1a\u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6240\u6709 catalog \u53ca\u5176\u4e2d\u7684\u6240\u6709\u5e93\u8868\u3002"),(0,r.yg)("li",{parentName:"ul"},"catalog_name.",(0,r.yg)("em",{parentName:"li"},"."),"\uff1a\u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a catalog \u4e2d\u7684\u6240\u6709\u5e93\u8868\u3002"),(0,r.yg)("li",{parentName:"ul"},"catalog_name.db.*\uff1a\u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6240\u6709\u8868\u3002"),(0,r.yg)("li",{parentName:"ul"},"catalog_name.db.tbl\uff1a\u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6307\u5b9a\u8868\u3002")),(0,r.yg)("h3",{id:"resource_name"},"resource_name"),(0,r.yg)("p",null,"\u6307\u5b9a resource \u540d\uff0c\u652f\u6301 % \u548c ",(0,r.yg)("em",{parentName:"p"}," \u5339\u914d\u6240\u6709\u8d44\u6e90\uff0c\u4e0d\u652f\u6301\u901a\u914d\u7b26\uff0c\u6bd4\u5982 res"),"\u3002"),(0,r.yg)("h3",{id:"workload_group_name"},"workload_group_name"),(0,r.yg)("p",null,"\u6307\u5b9a workload group \u540d\uff0c\u652f\u6301 % \u548c * \u5339\u914d\u6240\u6709 workload group\uff0c\u4e0d\u652f\u6301\u901a\u914d\u7b26\u3002"),(0,r.yg)("h3",{id:"compute_group_name"},"compute_group_name"),(0,r.yg)("p",null,"\u6307\u5b9a compute group \u540d\u79f0\uff0c\u652f\u6301 % \u548c * \u5339\u914d\u6240\u6709 compute group\uff0c\u4e0d\u652f\u6301\u901a\u914d\u7b26\u3002"),(0,r.yg)("h3",{id:"storage_vault_name"},"storage_vault_name"),(0,r.yg)("p",null,"\u6307\u5b9a storage vault \u540d\u79f0\uff0c\u652f\u6301 % \u548c * \u5339\u914d\u6240\u6709 storage vault\uff0c\u4e0d\u652f\u6301\u901a\u914d\u7b26\u3002"),(0,r.yg)("h3",{id:"user_identity"},"user_identity"),(0,r.yg)("p",null,"\u6307\u5b9a\u63a5\u6536\u6743\u9650\u7684\u7528\u6237\u3002\u5fc5\u987b\u4e3a\u4f7f\u7528 CREATE USER \u521b\u5efa\u8fc7\u7684 user_identity\u3002user_identity \u4e2d\u7684 host \u53ef\u4ee5\u662f\u57df\u540d\uff0c\u5982\u679c\u662f\u57df\u540d\u7684\u8bdd\uff0c\u6743\u9650\u7684\u751f\u6548\u65f6\u95f4\u53ef\u80fd\u4f1a\u6709 1 \u5206\u949f\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002"),(0,r.yg)("h3",{id:"role_name"},"role_name"),(0,r.yg)("p",null,"\u6307\u5b9a\u63a5\u6536\u6743\u9650\u7684\u89d2\u8272\u3002\u5982\u679c\u6307\u5b9a\u7684\u89d2\u8272\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u3002"),(0,r.yg)("h3",{id:"role_list"},"role_list"),(0,r.yg)("p",null,"\u9700\u8981\u8d4b\u4e88\u7684\u89d2\u8272\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\uff0c\u6307\u5b9a\u7684\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u6240\u6709 catalog \u548c\u5e93\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT SELECT_PRIV ON ",(0,r.yg)("em",{parentName:"p"},"."),".* TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON ctl1.db1.tbl1 TO 'jack'@'192.8.%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u89d2\u8272\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT LOAD_PRIV ON ctl1.db1.* TO ROLE 'my_role';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u6240\u6709 resource \u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a resource \u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a resource \u7684\u4f7f\u7528\u6743\u9650\u7ed9\u89d2\u8272\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u6307\u5b9a role \u6388\u4e88\u67d0\u7528\u6237\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT 'role1','role2' TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u6307\u5b9a workload group \u6388\u4e88\u7528\u6237\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5339\u914d\u6240\u6709 workload group \u6388\u4e88\u7528\u6237\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON WORKLOAD GROUP '%' TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u6307\u5b9a workload group \u6388\u4e88\u89d2\u8272\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO ROLE 'my_role';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5141\u8bb8\u7528\u6237\u67e5\u770b\u6307\u5b9a view \u7684\u521b\u5efa\u8bed\u53e5\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT SHOW_VIEW_PRIV ON db1.view1 TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u7528\u6237\u5bf9\u6307\u5b9a compute group \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON COMPUTE GROUP 'group1' TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u89d2\u8272\u5bf9\u6307\u5b9a compute group \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON COMPUTE GROUP 'group1' TO ROLE 'my_role';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u7528\u6237\u5bf9\u6240\u6709 compute group \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON COMPUTE GROUP '*' TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u7528\u6237\u5bf9\u6307\u5b9a storage vault \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON STORAGE VAULT 'vault1' TO 'jack'@'%';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u89d2\u8272\u5bf9\u6307\u5b9a storage vault \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON STORAGE VAULT 'vault1' TO ROLE 'my_role';")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6388\u4e88\u7528\u6237\u5bf9\u6240\u6709 storage vault \u7684\u4f7f\u7528\u6743\u9650\uff1a"),(0,r.yg)("p",{parentName:"li"},"GRANT USAGE_PRIV ON STORAGE VAULT '*' TO 'jack'@'%';"))),(0,r.yg)("h2",{id:"\u76f8\u5173\u547d\u4ee4"},"\u76f8\u5173\u547d\u4ee4"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/REVOKE"},"REVOKE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Show-Statements/SHOW-GRANTS"},"SHOW GRANTS")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE"},"CREATE ROLE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../Administration-Statements/CREATE-WORKLOAD-GROUP.md"},"CREATE WORKLOAD GROUP")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../Administration-Statements/CREATE-COMPUTE-GROUP.md"},"CREATE COMPUTE GROUP")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../Administration-Statements/CREATE-RESOURCE.md"},"CREATE RESOURCE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../Administration-Statements/CREATE-STORAGE-VAULT.md"},"CREATE STORAGE VAULT"))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GRANT, WORKLOAD GROUP, COMPUTE GROUP, STORAGE VAULT, RESOURCE\n")))}y.isMDXComponent=!0}}]);