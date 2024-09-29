"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[389344],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>g});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=s(t),u=a,g=y["".concat(p,".").concat(u)]||y[u]||m[u]||l;return t?n.createElement(g,o(o({ref:r},c),{},{components:t})):n.createElement(g,o({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},704364:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(58168),a=(t(296540),t(15680));const l={title:"DROP-POLICY",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-POLICY",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-POLICY",title:"DROP-POLICY",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-POLICY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-POLICY",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-POLICY",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DROP-POLICY",language:"en"},sidebar:"docs",previous:{title:"DROP-MATERIALIZED-VIEW",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW"},next:{title:"TRUNCATE-TABLE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/TRUNCATE-TABLE"}},p={},s=[{value:"Name",id:"name",level:2},{value:"Description",id:"description",level:2},{value:"ROW POLICY",id:"row-policy",level:3},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}],c={toc:s},y="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(y,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"name"},"Name"),(0,a.yg)("p",null,"DROP POLICY"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"drop policy for row or storage"),(0,a.yg)("h3",{id:"row-policy"},"ROW POLICY"),(0,a.yg)("p",null,"Grammar\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Drop row policy")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1 [FOR user| ROLE role];\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Drop storage policy")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP STORAGE POLICY policy_name1\n")),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Drop the row policy for table1 named test_row_policy_1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Drop the row policy for table1 using by user test"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1 for test\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Drop the row policy for table1 using by role1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1 for role role1\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Drop the storage policy named policy_name1"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP STORAGE POLICY policy_name1\n")),(0,a.yg)("h2",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DROP, POLICY\n")),(0,a.yg)("h2",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);