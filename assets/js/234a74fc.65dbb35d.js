"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[854767],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),y=i,m=c["".concat(s,".").concat(y)]||c[y]||N[y]||l;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},19619:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>N,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(58168),i=(a(296540),a(15680));const l={title:"PARTITIONS",language:"en"},r=void 0,o={unversionedId:"sql-manual/sql-functions/table-valued-functions/partitions",id:"version-2.0/sql-manual/sql-functions/table-valued-functions/partitions",title:"PARTITIONS",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/table-valued-functions/partitions.md",sourceDirName:"sql-manual/sql-functions/table-valued-functions",slug:"/sql-manual/sql-functions/table-valued-functions/partitions",permalink:"/docs/2.0/sql-manual/sql-functions/table-valued-functions/partitions",draft:!1,tags:[],version:"2.0",frontMatter:{title:"PARTITIONS",language:"en"}},s={},u=[{value:"<code>partitions</code>",id:"partitions",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function N(e){let{components:t,...a}=e;return(0,i.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"partitions"},(0,i.yg)("inlineCode",{parentName:"h2"},"partitions")),(0,i.yg)("h3",{id:"name"},"Name"),(0,i.yg)("p",null,"partitions"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"The table function generates a temporary partition TABLE, which allows you to view the PARTITION list of a certain TABLE."),(0,i.yg)("p",null,"This function is used in the from clause."),(0,i.yg)("p",null,"This function is supported since 2.1.5"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},'partitions("catalog"="","database"="","table"="")')),(0,i.yg)("p",null,"partitions() Table structure:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function partitions("catalog"="internal","database"="zd","table"="user");\n+--------------------------+---------+------+-------+---------+-------+\n| Field                    | Type    | Null | Key   | Default | Extra |\n+--------------------------+---------+------+-------+---------+-------+\n| PartitionId              | BIGINT  | No   | false | NULL    | NONE  |\n| PartitionName            | TEXT    | No   | false | NULL    | NONE  |\n| VisibleVersion           | BIGINT  | No   | false | NULL    | NONE  |\n| VisibleVersionTime       | TEXT    | No   | false | NULL    | NONE  |\n| State                    | TEXT    | No   | false | NULL    | NONE  |\n| PartitionKey             | TEXT    | No   | false | NULL    | NONE  |\n| Range                    | TEXT    | No   | false | NULL    | NONE  |\n| DistributionKey          | TEXT    | No   | false | NULL    | NONE  |\n| Buckets                  | INT     | No   | false | NULL    | NONE  |\n| ReplicationNum           | INT     | No   | false | NULL    | NONE  |\n| StorageMedium            | TEXT    | No   | false | NULL    | NONE  |\n| CooldownTime             | TEXT    | No   | false | NULL    | NONE  |\n| RemoteStoragePolicy      | TEXT    | No   | false | NULL    | NONE  |\n| LastConsistencyCheckTime | TEXT    | No   | false | NULL    | NONE  |\n| DataSize                 | TEXT    | No   | false | NULL    | NONE  |\n| IsInMemory               | BOOLEAN | No   | false | NULL    | NONE  |\n| ReplicaAllocation        | TEXT    | No   | false | NULL    | NONE  |\n| IsMutable                | BOOLEAN | No   | false | NULL    | NONE  |\n| SyncWithBaseTables       | BOOLEAN | No   | false | NULL    | NONE  |\n| UnsyncTables             | TEXT    | No   | false | NULL    | NONE  |\n+--------------------------+---------+------+-------+---------+-------+\n20 rows in set (0.02 sec)\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"PartitionId:partition id"),(0,i.yg)("li",{parentName:"ul"},"PartitionName:partition name"),(0,i.yg)("li",{parentName:"ul"},"VisibleVersion:visible version"),(0,i.yg)("li",{parentName:"ul"},"VisibleVersionTime:visible version time"),(0,i.yg)("li",{parentName:"ul"},"State:state"),(0,i.yg)("li",{parentName:"ul"},"PartitionKey:partition key"),(0,i.yg)("li",{parentName:"ul"},"Range:range"),(0,i.yg)("li",{parentName:"ul"},"DistributionKey:distribution key"),(0,i.yg)("li",{parentName:"ul"},"Buckets:bucket num"),(0,i.yg)("li",{parentName:"ul"},"ReplicationNum:replication num"),(0,i.yg)("li",{parentName:"ul"},"StorageMedium:storage medium"),(0,i.yg)("li",{parentName:"ul"},"CooldownTime:cooldown time"),(0,i.yg)("li",{parentName:"ul"},"RemoteStoragePolicy:remote storage policy"),(0,i.yg)("li",{parentName:"ul"},"LastConsistencyCheckTime:last consistency check time"),(0,i.yg)("li",{parentName:"ul"},"DataSize:data size"),(0,i.yg)("li",{parentName:"ul"},"IsInMemory:is in memory"),(0,i.yg)("li",{parentName:"ul"},"ReplicaAllocation:replica allocation"),(0,i.yg)("li",{parentName:"ul"},"IsMutable:is mutable"),(0,i.yg)("li",{parentName:"ul"},"SyncWithBaseTables:Is it synchronized with the base table data (for partitioning asynchronous materialized views)"),(0,i.yg)("li",{parentName:"ul"},"UnsyncTables:Which base table data is not synchronized with (for partitions of asynchronous materialized views)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function partitions("catalog"="hive","database"="zdtest","table"="com2");\n+-----------+------+------+-------+---------+-------+\n| Field     | Type | Null | Key   | Default | Extra |\n+-----------+------+------+-------+---------+-------+\n| Partition | TEXT | No   | false | NULL    | NONE  |\n+-----------+------+------+-------+---------+-------+\n1 row in set (0.11 sec)\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Partition:partition name")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"View the partition list of table1 under db1 in the internal catalog")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from partitions("catalog"="internal","database"="db1","table"="table1");\n')),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"View the partition information with partition name partition1 under table1")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from partitions("catalog"="internal","database"="db1","table"="table1") where PartitionName = "partition1";\n')),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"View the partition ID with the partition name 'partition1' under Table 1")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select PartitionId from partitions("catalog"="internal","database"="db1","table"="table1") where PartitionName = "partition1";\n')),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"partitions\n")))}N.isMDXComponent=!0}}]);