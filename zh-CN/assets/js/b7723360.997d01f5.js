"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[643669],{15680:(e,n,t)=>{t.d(n,{xA:()=>N,yg:()=>y});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),E=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},N=function(e){var n=E(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,N=i(e,["components","mdxType","originalType","parentName"]),m=E(t),g=l,y=m["".concat(o,".").concat(g)]||m[g]||s[g]||r;return t?a.createElement(y,p(p({ref:n},N),{},{components:t})):a.createElement(y,p({ref:n},N))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=g;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[m]="string"==typeof e?e:l,p[1]=i;for(var E=2;E<r;E++)p[E]=t[E];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},333771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>E});var a=t(58168),l=(t(296540),t(15680));const r={title:"INSERT-OVERWRITE",language:"zh-CN"},p=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE",title:"INSERT-OVERWRITE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"INSERT-OVERWRITE",language:"zh-CN"},sidebar:"docs",previous:{title:"CANCEL-EXPORT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"},next:{title:"ANALYZE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE"}},o={},E=[{value:"INSERT OVERWRITE",id:"insert-overwrite",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Overwrite Table",id:"overwrite-table",level:4},{value:"Overwrite Table Partition",id:"overwrite-table-partition",level:4},{value:"Keywords",id:"keywords",level:3}],N={toc:E},m="wrapper";function s(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"insert-overwrite"},"INSERT OVERWRITE"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"INSERT OVERWRITE"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7684\u529f\u80fd\u662f\u91cd\u5199\u8868\u6216\u8868\u7684\u67d0\u4e9b\u5206\u533a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")),(0,l.yg)("p",null," Parameters"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"table_name: \u9700\u8981\u91cd\u5199\u7684\u76ee\u7684\u8868\u3002\u8fd9\u4e2a\u8868\u5fc5\u987b\u5b58\u5728\u3002\u53ef\u4ee5\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"db_name.table_name")," \u5f62\u5f0f"),(0,l.yg)("p",{parentName:"blockquote"},"partitions: \u9700\u8981\u91cd\u5199\u7684\u8868\u5206\u533a\uff0c\u5fc5\u987b\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"table_name")," \u4e2d\u5b58\u5728\u7684\u5206\u533a\uff0c\u591a\u4e2a\u5206\u533a\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694"),(0,l.yg)("p",{parentName:"blockquote"},"label: \u4e3a Insert \u4efb\u52a1\u6307\u5b9a\u4e00\u4e2a label"),(0,l.yg)("p",{parentName:"blockquote"},"column_name: \u6307\u5b9a\u7684\u76ee\u7684\u5217\uff0c\u5fc5\u987b\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"table_name")," \u4e2d\u5b58\u5728\u7684\u5217"),(0,l.yg)("p",{parentName:"blockquote"},"expression: \u9700\u8981\u8d4b\u503c\u7ed9\u67d0\u4e2a\u5217\u7684\u5bf9\u5e94\u8868\u8fbe\u5f0f"),(0,l.yg)("p",{parentName:"blockquote"},"DEFAULT: \u8ba9\u5bf9\u5e94\u5217\u4f7f\u7528\u9ed8\u8ba4\u503c"),(0,l.yg)("p",{parentName:"blockquote"},"query: \u4e00\u4e2a\u666e\u901a\u67e5\u8be2\uff0c\u67e5\u8be2\u7684\u7ed3\u679c\u4f1a\u91cd\u5199\u5230\u76ee\u6807\u4e2d"),(0,l.yg)("p",{parentName:"blockquote"},"hint: \u7528\u4e8e\u6307\u793a ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT")," \u6267\u884c\u884c\u4e3a\u7684\u4e00\u4e9b\u6307\u793a\u7b26\u3002\u76ee\u524d hint \u6709\u4e09\u4e2a\u53ef\u9009\u503c",(0,l.yg)("inlineCode",{parentName:"p"},"/*+ STREAMING */"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"/*+ SHUFFLE */"),"\u6216",(0,l.yg)("inlineCode",{parentName:"p"},"/*+ NOSHUFFLE */")),(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"STREAMING\uff1a\u76ee\u524d\u65e0\u5b9e\u9645\u4f5c\u7528\uff0c\u53ea\u662f\u4e3a\u4e86\u517c\u5bb9\u4e4b\u524d\u7684\u7248\u672c\uff0c\u56e0\u6b64\u4fdd\u7559\u3002\uff08\u4e4b\u524d\u7684\u7248\u672c\u52a0\u4e0a\u8fd9\u4e2a hint \u4f1a\u8fd4\u56de label\uff0c\u73b0\u5728\u9ed8\u8ba4\u90fd\u4f1a\u8fd4\u56de label\uff09"),(0,l.yg)("li",{parentName:"ol"},"SHUFFLE\uff1a\u5f53\u76ee\u6807\u8868\u662f\u5206\u533a\u8868\uff0c\u5f00\u542f\u8fd9\u4e2a hint \u4f1a\u8fdb\u884c repartiiton\u3002"),(0,l.yg)("li",{parentName:"ol"},"NOSHUFFLE\uff1a\u5373\u4f7f\u76ee\u6807\u8868\u662f\u5206\u533a\u8868\uff0c\u4e5f\u4e0d\u4f1a\u8fdb\u884c repartiiton\uff0c\u4f46\u4f1a\u505a\u4e00\u4e9b\u5176\u4ed6\u64cd\u4f5c\u4ee5\u4fdd\u8bc1\u6570\u636e\u6b63\u786e\u843d\u5230\u5404\u4e2a\u5206\u533a\u4e2d\u3002"))),(0,l.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,l.yg)("p",null,"\u5728\u5f53\u524d\u7248\u672c\u4e2d\uff0c\u4f1a\u8bdd\u53d8\u91cf ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u9ed8\u8ba4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5982\u679c\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT OVERWRITE")," \u8bed\u53e5\u65f6\uff0c\u5bf9\u4e8e\u6709\u4e0d\u7b26\u5408\u76ee\u6807\u8868\u683c\u5f0f\u7684\u6570\u636e\u88ab\u8fc7\u6ee4\u6389\u7684\u8bdd\u4f1a\u91cd\u5199\u76ee\u6807\u8868\u5931\u8d25\uff08\u6bd4\u5982\u91cd\u5199\u5206\u533a\u65f6\uff0c\u4e0d\u6ee1\u8db3\u6240\u6709\u5206\u533a\u6761\u4ef6\u7684\u6570\u636e\u4f1a\u88ab\u8fc7\u6ee4\uff09\u3002"),(0,l.yg)("p",null,"INSERT OVERWRITE\u8bed\u53e5\u4f1a\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u65b0\u8868\uff0c\u5c06\u9700\u8981\u91cd\u5199\u7684\u6570\u636e\u63d2\u5165\u5230\u65b0\u8868\u4e2d\uff0c\u6700\u540e\u539f\u5b50\u6027\u7684\u7528\u65b0\u8868\u66ff\u6362\u65e7\u8868\u5e76\u4fee\u6539\u540d\u79f0\u3002\u56e0\u6b64\uff0c\u5728\u91cd\u5199\u8868\u7684\u8fc7\u7a0b\u4e2d\uff0c\u65e7\u8868\u4e2d\u7684\u6570\u636e\u5728\u91cd\u5199\u5b8c\u6bd5\u4e4b\u524d\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\u3002"),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,"\u5047\u8bbe\u6709",(0,l.yg)("inlineCode",{parentName:"p"},"test")," \u8868\u3002\u8be5\u8868\u5305\u542b\u4e24\u4e2a\u5217",(0,l.yg)("inlineCode",{parentName:"p"},"c1"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"c2"),"\uff0c\u4e24\u4e2a\u5206\u533a",(0,l.yg)("inlineCode",{parentName:"p"},"p1"),",",(0,l.yg)("inlineCode",{parentName:"p"},"p2"),"\u3002\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\u6240\u793a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS test (\n  `c1` int NOT NULL DEFAULT "1",\n  `c2` int NOT NULL DEFAULT "4"\n) ENGINE=OLAP\nUNIQUE KEY(`c1`)\nPARTITION BY LIST (`c1`)\n(\nPARTITION p1 VALUES IN ("1","2","3"),\nPARTITION p2 VALUES IN ("4","5","6")\n)\nDISTRIBUTED BY HASH(`c1`) BUCKETS 3\nPROPERTIES (\n  "replication_allocation" = "tag.location.default: 1",\n  "in_memory" = "false",\n  "storage_format" = "V2"\n);\n')),(0,l.yg)("h4",{id:"overwrite-table"},"Overwrite Table"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"VALUES\u7684\u5f62\u5f0f\u91cd\u5199",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u8868"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"# \u5355\u884c\u91cd\u5199\nINSERT OVERWRITE table test VALUES (1, 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, DEFAULT);\nINSERT OVERWRITE table test (c1) VALUES (1);\n# \u591a\u884c\u91cd\u5199\nINSERT OVERWRITE table test VALUES (1, 2), (3, 2 + 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT OVERWRITE table test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\nINSERT OVERWRITE table test (c1) VALUES (1), (3);\n")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7b2c\u4e00\u6761\u8bed\u53e5\u548c\u7b2c\u4e8c\u6761\u8bed\u53e5\u7684\u6548\u679c\u4e00\u81f4\uff0c\u91cd\u5199\u65f6\u5982\u679c\u4e0d\u6307\u5b9a\u76ee\u6807\u5217\uff0c\u4f1a\u4f7f\u7528\u8868\u4e2d\u7684\u5217\u987a\u5e8f\u6765\u4f5c\u4e3a\u9ed8\u8ba4\u7684\u76ee\u6807\u5217\u3002\u91cd\u5199\u6210\u529f\u540e\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u4e2d\u53ea\u6709\u4e00\u884c\u6570\u636e\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7b2c\u4e09\u6761\u8bed\u53e5\u548c\u7b2c\u56db\u6761\u8bed\u53e5\u7684\u6548\u679c\u4e00\u81f4\uff0c\u6ca1\u6709\u6307\u5b9a\u7684\u5217",(0,l.yg)("inlineCode",{parentName:"p"},"c2"),"\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u503c4\u6765\u5b8c\u6210\u6570\u636e\u91cd\u5199\u3002\u91cd\u5199\u6210\u529f\u540e\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u4e2d\u53ea\u6709\u4e00\u884c\u6570\u636e\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7b2c\u4e94\u6761\u8bed\u53e5\u548c\u7b2c\u516d\u6761\u8bed\u53e5\u7684\u6548\u679c\u4e00\u81f4\uff0c\u5728\u8bed\u53e5\u4e2d\u53ef\u4ee5\u4f7f\u7528\u8868\u8fbe\u5f0f\uff08\u5982",(0,l.yg)("inlineCode",{parentName:"p"},"2+2"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"2*2"),"\uff09\uff0c\u6267\u884c\u8bed\u53e5\u7684\u65f6\u5019\u4f1a\u8ba1\u7b97\u51fa\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u518d\u91cd\u5199\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u3002\u91cd\u5199\u6210\u529f\u540e\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u4e2d\u6709\u4e24\u884c\u6570\u636e\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7b2c\u4e03\u6761\u8bed\u53e5\u548c\u7b2c\u516b\u6761\u8bed\u53e5\u7684\u6548\u679c\u4e00\u81f4\uff0c\u6ca1\u6709\u6307\u5b9a\u7684\u5217",(0,l.yg)("inlineCode",{parentName:"p"},"c2"),"\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u503c4\u6765\u5b8c\u6210\u6570\u636e\u91cd\u5199\u3002\u91cd\u5199\u6210\u529f\u540e\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u4e2d\u6709\u4e24\u884c\u6570\u636e\u3002"))),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u67e5\u8be2\u8bed\u53e5\u7684\u5f62\u5f0f\u91cd\u5199",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u8868\uff0c\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test2"),"\u548c\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u7684\u6570\u636e\u683c\u5f0f\u9700\u8981\u4fdd\u6301\u4e00\u81f4\uff0c\u5982\u679c\u4e0d\u4e00\u81f4\u4f1a\u89e6\u53d1\u6570\u636e\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test SELECT * FROM test2;\nINSERT OVERWRITE table test (c1, c2) SELECT * from test2;\n")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u7b2c\u4e00\u6761\u8bed\u53e5\u548c\u7b2c\u4e8c\u6761\u8bed\u53e5\u7684\u6548\u679c\u4e00\u81f4\uff0c\u8be5\u8bed\u53e5\u7684\u4f5c\u7528\u662f\u5c06\u6570\u636e\u4ece\u8868",(0,l.yg)("inlineCode",{parentName:"li"},"test2"),"\u4e2d\u53d6\u51fa\uff0c\u4f7f\u7528\u53d6\u51fa\u7684\u6570\u636e\u91cd\u5199\u8868",(0,l.yg)("inlineCode",{parentName:"li"},"test"),"\u3002\u91cd\u5199\u6210\u529f\u540e\u8868",(0,l.yg)("inlineCode",{parentName:"li"},"test"),"\u4e2d\u7684\u6570\u636e\u548c\u8868",(0,l.yg)("inlineCode",{parentName:"li"},"test2"),"\u4e2d\u7684\u6570\u636e\u4fdd\u6301\u4e00\u81f4\u3002")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u91cd\u5199 ",(0,l.yg)("inlineCode",{parentName:"p"},"test")," \u8868\u5e76\u6307\u5b9alabel"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test WITH LABEL `label1` SELECT * FROM test2;\nINSERT OVERWRITE table test WITH LABEL `label2` (c1, c2) SELECT * from test2;\n")))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,l.yg)("inlineCode",{parentName:"li"},"SHOW LOAD;"),"\u547d\u4ee4\u67e5\u770b\u6b64",(0,l.yg)("inlineCode",{parentName:"li"},"label"),"\u5bfc\u5165\u4f5c\u4e1a\u7684\u72b6\u6001\u3002\u9700\u8981\u6ce8\u610f\u7684\u662flabel\u5177\u6709\u552f\u4e00\u6027\u3002")),(0,l.yg)("h4",{id:"overwrite-table-partition"},"Overwrite Table Partition"),(0,l.yg)("p",null,"\u4f7f\u7528 INSERT OVERWRITE \u91cd\u5199\u5206\u533a\u65f6\uff0c\u5b9e\u9645\u6211\u4eec\u662f\u5c06\u5982\u4e0b\u4e09\u6b65\u64cd\u4f5c\u5c01\u88c5\u4e3a\u4e00\u4e2a\u4e8b\u52a1\u5e76\u6267\u884c\uff0c\u5982\u679c\u4e2d\u9014\u5931\u8d25\uff0c\u5df2\u8fdb\u884c\u7684\u64cd\u4f5c\u5c06\u4f1a\u56de\u6eda\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5047\u8bbe\u6307\u5b9a\u91cd\u5199\u5206\u533a p1\uff0c\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u4e0e\u91cd\u5199\u7684\u76ee\u6807\u5206\u533a\u7ed3\u6784\u76f8\u540c\u7684\u7a7a\u4e34\u65f6\u5206\u533a ",(0,l.yg)("inlineCode",{parentName:"li"},"pTMP")),(0,l.yg)("li",{parentName:"ol"},"\u5411 ",(0,l.yg)("inlineCode",{parentName:"li"},"pTMP")," \u4e2d\u5199\u5165\u6570\u636e"),(0,l.yg)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},"pTMP")," \u539f\u5b50\u66ff\u6362 ",(0,l.yg)("inlineCode",{parentName:"li"},"p1")," \u5206\u533a")),(0,l.yg)("p",null,"\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"VALUES\u7684\u5f62\u5f0f\u91cd\u5199",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u8868\u5206\u533a",(0,l.yg)("inlineCode",{parentName:"p"},"P1"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"p2")),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"# \u5355\u884c\u91cd\u5199\nINSERT OVERWRITE table test PARTITION(p1,p2) VALUES (1, 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, DEFAULT);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1) VALUES (1);\n# \u591a\u884c\u91cd\u5199\nINSERT OVERWRITE table test PARTITION(p1,p2) VALUES (1, 2), (4, 2 + 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, 2), (4, 2 * 2);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) VALUES (1, DEFAULT), (4, DEFAULT);\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1) VALUES (1), (4);\n")),(0,l.yg)("p",{parentName:"li"},"\u4ee5\u4e0a\u8bed\u53e5\u4e0e\u91cd\u5199\u8868\u4e0d\u540c\u7684\u662f\uff0c\u5b83\u4eec\u90fd\u662f\u91cd\u5199\u8868\u4e2d\u7684\u5206\u533a\u3002\u5206\u533a\u53ef\u4ee5\u4e00\u6b21\u91cd\u5199\u4e00\u4e2a\u5206\u533a\u4e5f\u53ef\u4ee5\u4e00\u6b21\u91cd\u5199\u591a\u4e2a\u5206\u533a\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u53ea\u6709\u6ee1\u8db3\u5bf9\u5e94\u5206\u533a\u8fc7\u6ee4\u6761\u4ef6\u7684\u6570\u636e\u624d\u80fd\u591f\u91cd\u5199\u6210\u529f\u3002\u5982\u679c\u91cd\u5199\u7684\u6570\u636e\u4e2d\u6709\u6570\u636e\u4e0d\u6ee1\u8db3\u5176\u4e2d\u4efb\u610f\u4e00\u4e2a\u5206\u533a\uff0c\u90a3\u4e48\u672c\u6b21\u91cd\u5199\u4f1a\u5931\u8d25\u3002\u4e00\u4e2a\u5931\u8d25\u7684\u4f8b\u5b50\u5982\u4e0b\u6240\u793a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test PARTITION(p1,p2) VALUES (7, 2);\n")),(0,l.yg)("p",{parentName:"li"},"\u4ee5\u4e0a\u8bed\u53e5\u91cd\u5199\u7684\u6570\u636e",(0,l.yg)("inlineCode",{parentName:"p"},"c1=7"),"\u5206\u533a",(0,l.yg)("inlineCode",{parentName:"p"},"p1"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"p2"),"\u7684\u6761\u4ef6\u90fd\u4e0d\u6ee1\u8db3\uff0c\u56e0\u6b64\u4f1a\u91cd\u5199\u5931\u8d25\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u67e5\u8be2\u8bed\u53e5\u7684\u5f62\u5f0f\u91cd\u5199",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u8868\u5206\u533a",(0,l.yg)("inlineCode",{parentName:"p"},"P1"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"p2"),"\uff0c\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test2"),"\u548c\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u7684\u6570\u636e\u683c\u5f0f\u9700\u8981\u4fdd\u6301\u4e00\u81f4\uff0c\u5982\u679c\u4e0d\u4e00\u81f4\u4f1a\u89e6\u53d1\u6570\u636e\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test PARTITION(p1,p2) SELECT * FROM test2;\nINSERT OVERWRITE table test PARTITION(p1,p2) (c1, c2) SELECT * from test2;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u91cd\u5199 ",(0,l.yg)("inlineCode",{parentName:"p"},"test")," \u8868\u5206\u533a",(0,l.yg)("inlineCode",{parentName:"p"},"P1"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"p2"),"\u5e76\u6307\u5b9alabel"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE table test PARTITION(p1,p2) WITH LABEL `label3` SELECT * FROM test2;\nINSERT OVERWRITE table test PARTITION(p1,p2) WITH LABEL `label4` (c1, c2) SELECT * from test2;\n")))),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"INSERT OVERWRITE\n")))}s.isMDXComponent=!0}}]);