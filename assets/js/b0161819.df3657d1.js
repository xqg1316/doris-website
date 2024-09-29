"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[587341],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>b});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(a),y=l,b=d["".concat(p,".").concat(y)]||d[y]||m[y]||r;return a?n.createElement(b,i(i({ref:t},s),{},{components:a})):n.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},566438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(58168),l=(a(296540),a(15680));const r={title:"Replacing Atomic Table",language:"en"},i=void 0,o={unversionedId:"data-operate/delete/atomicity-replace",id:"data-operate/delete/atomicity-replace",title:"Replacing Atomic Table",description:"\x3c!--",source:"@site/docs/data-operate/delete/atomicity-replace.md",sourceDirName:"data-operate/delete",slug:"/data-operate/delete/atomicity-replace",permalink:"/docs/dev/data-operate/delete/atomicity-replace",draft:!1,tags:[],version:"current",frontMatter:{title:"Replacing Atomic Table",language:"en"},sidebar:"docs",previous:{title:"Deleting Data with TRUNCATE Command",permalink:"/docs/dev/data-operate/delete/truncate-manual"},next:{title:"Temporary Partition",permalink:"/docs/dev/data-operate/delete/table-temp-partition"}},p={},c=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Note",id:"note",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"atomicity-replace"},"Atomicity Replace"),(0,l.yg)("p",null,"Doris supports atomic table replacement operations for two tables. This is only applicable to OLAP tables."),(0,l.yg)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Atomic overwrite operations"),(0,l.yg)("li",{parentName:"ul"},'In certain cases, users may want to rewrite data in a table. However, the "delete and load" approach causes a data invisibility window. To solve that, Doris allows users to create a new table of the same schema using the CREATE TABLE LIKE statement, import the new data into this new table, and then atomically replace the old table with the new table. For atomic replacement at the partition level, please refer to the ',(0,l.yg)("a",{parentName:"li",href:"../../data-operate/delete/table-temp-partition/"},"temporary partition"),"documentation.")),(0,l.yg)("h2",{id:"syntax"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"ALTER TABLE [db.]tbl1 REPLACE WITH TABLE tbl2\n[PROPERTIES('swap' = 'true')];\n")),(0,l.yg)("p",null,"Replace table tbl1 with table tbl2."),(0,l.yg)("p",null,"If ",(0,l.yg)("inlineCode",{parentName:"p"},"swap")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", after the replacement, data in ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl1")," will be replaced by that in ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl2"),", while data in ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl2")," will be replaced by that in ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl1"),". In other words, the two tables will swap data."),(0,l.yg)("p",null,"If ",(0,l.yg)("inlineCode",{parentName:"p"},"swap")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),", after the replacement, data in ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl1")," will be replaced by that in ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl2")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"tbl2")," will be deleted."),(0,l.yg)("h2",{id:"implementation"},"Implementation"),(0,l.yg)("p",null,"In fact, table replacement is to combine the following operations into one atomic operation."),(0,l.yg)("p",null,"Assuming that table A is to be replaced with table B, and ",(0,l.yg)("inlineCode",{parentName:"p"},"swap")," is set to ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),". The operations to be implemented are as follows:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Rename table B to table A."),(0,l.yg)("li",{parentName:"ol"},"Rename table A to table B.")),(0,l.yg)("p",null,"If ",(0,l.yg)("inlineCode",{parentName:"p"},"swap")," is set to ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),", the operations are as follows:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Delete table A."),(0,l.yg)("li",{parentName:"ol"},"Rename table B to table A.")),(0,l.yg)("h2",{id:"note"},"Note"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"swap")," defaults to ",(0,l.yg)("inlineCode",{parentName:"li"},"true"),", meaning to swap the data between two tables."),(0,l.yg)("li",{parentName:"ul"},"If ",(0,l.yg)("inlineCode",{parentName:"li"},"swap")," is set to ",(0,l.yg)("inlineCode",{parentName:"li"},"false"),", the table being replaced (table A) will be deleted and cannot be recovered."),(0,l.yg)("li",{parentName:"ul"},"The replacement operation can only be implemented between two OLAP tables and it does not check for table schema consistency."),(0,l.yg)("li",{parentName:"ul"},"The replacement operation does not change the existing privilege settings because privilege checks are based on table names.")))}m.isMDXComponent=!0}}]);