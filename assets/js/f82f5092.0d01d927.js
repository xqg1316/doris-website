"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[603059],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,m=c["".concat(o,".").concat(y)]||c[y]||d[y]||l;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},337185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const l={title:"STRUCT",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-data-types/semi-structured/STRUCT",id:"version-3.0/sql-manual/sql-data-types/semi-structured/STRUCT",title:"STRUCT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-data-types/semi-structured/STRUCT.md",sourceDirName:"sql-manual/sql-data-types/semi-structured",slug:"/sql-manual/sql-data-types/semi-structured/STRUCT",permalink:"/docs/3.0/sql-manual/sql-data-types/semi-structured/STRUCT",draft:!1,tags:[],version:"3.0",frontMatter:{title:"STRUCT",language:"en"},sidebar:"docs",previous:{title:"MAP",permalink:"/docs/3.0/sql-manual/sql-data-types/semi-structured/MAP"},next:{title:"JSON",permalink:"/docs/3.0/sql-manual/sql-data-types/semi-structured/JSON"}},o={},u=[{value:"STRUCT",id:"struct",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"struct"},"STRUCT"),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("p",null,"STRUCT"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"STRUCT<field_name:field_type [COMMENT 'comment_string'], ... >")),(0,a.yg)("p",null,"Represents value with structure described by multiple fields, which can be viewed as a collection of multiple columns."),(0,a.yg)("p",null,"Need to manually enable the support, it is disabled by default."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'admin set frontend config("enable_struct_type" = "true");\n')),(0,a.yg)("p",null,"It cannot be used as a Key column. Now STRUCT can only used in Duplicate Model Tables."),(0,a.yg)("p",null,"The names and number of Fields in a Struct is fixed and always Nullable, and a Field typically consists of the following parts."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"field_name: Identifier naming the field, non repeatable."),(0,a.yg)("li",{parentName:"ul"},"field_type: A data type."),(0,a.yg)("li",{parentName:"ul"},"COMMENT: An optional string describing the field. (currently not supported)")),(0,a.yg)("p",null,"The currently supported types are:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DECIMALV3, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,a.yg)("p",null,"We have a todo list for future version:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TODO: Supports nested Struct or other complex types\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"Create table example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> CREATE TABLE `struct_test` (\n  `id` int(11) NULL,\n  `s_info` STRUCT<s_id:int(11), s_name:string, s_address:string> NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false"\n);\n')),(0,a.yg)("p",null,"Insert data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"INSERT INTO `struct_test` VALUES (1, {1, 'sn1', 'sa1'});\nINSERT INTO `struct_test` VALUES (2, struct(2, 'sn2', 'sa2'));\nINSERT INTO `struct_test` VALUES (3, named_struct('s_id', 3, 's_name', 'sn3', 's_address', 'sa3'));\n")),(0,a.yg)("p",null,"Stream load:"),(0,a.yg)("p",null,"test.csv\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'1|{"s_id":1, "s_name":"sn1", "s_address":"sa1"}\n2|{s_id:2, s_name:sn2, s_address:sa2}\n3|{"s_address":"sa3", "s_name":"sn3", "s_id":3}\n')),(0,a.yg)("p",null,"exmaple:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl --location-trusted -u root -T test.csv  -H "label:test_label" http://host:port/api/test/struct_test/_stream_load\n')),(0,a.yg)("p",null,"Select data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select * from struct_test;\n+------+-------------------+\n| id   | s_info            |\n+------+-------------------+\n|    1 | {1, 'sn1', 'sa1'} |\n|    2 | {2, 'sn2', 'sa2'} |\n|    3 | {3, 'sn3', 'sa3'} |\n+------+-------------------+\n3 rows in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"STRUCT\n")))}d.isMDXComponent=!0}}]);