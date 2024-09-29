"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[790127],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>N});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),y=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},d=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=y(a),u=r,N=m["".concat(p,".").concat(u)]||m[u]||o[u]||l;return a?n.createElement(N,g(g({ref:t},d),{},{components:a})):n.createElement(N,g({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,g[1]=i;for(var y=2;y<l;y++)g[y]=a[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},913160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=a(58168),r=(a(296540),a(15680));const l={title:"IBM Db2",language:"zh-CN"},g=void 0,i={unversionedId:"lakehouse/database/ibm-db2",id:"lakehouse/database/ibm-db2",title:"IBM Db2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/database/ibm-db2.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/ibm-db2",permalink:"/zh-CN/docs/dev/lakehouse/database/ibm-db2",draft:!1,tags:[],version:"current",frontMatter:{title:"IBM Db2",language:"zh-CN"},sidebar:"docs",previous:{title:"SQL Server",permalink:"/zh-CN/docs/dev/lakehouse/database/sqlserver"},next:{title:"ClickHouse",permalink:"/zh-CN/docs/dev/lakehouse/database/clickhouse"}},p={},y=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u8fde\u63a5 IBM Db2",id:"\u8fde\u63a5-ibm-db2",level:2},{value:"\u5c42\u7ea7\u6620\u5c04",id:"\u5c42\u7ea7\u6620\u5c04",level:2},{value:"\u7c7b\u578b\u6620\u5c04",id:"\u7c7b\u578b\u6620\u5c04",level:2},{value:"IBM Db2 \u5230 Doris \u7c7b\u578b\u6620\u5c04",id:"ibm-db2-\u5230-doris-\u7c7b\u578b\u6620\u5c04",level:3},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:2},{value:"\u7edf\u8ba1\u4fe1\u606f",id:"\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"\u8c13\u8bcd\u4e0b\u63a8",id:"\u8c13\u8bcd\u4e0b\u63a8",level:3},{value:"\u884c\u6570\u9650\u5236",id:"\u884c\u6570\u9650\u5236",level:3},{value:"\u8f6c\u4e49\u5b57\u7b26",id:"\u8f6c\u4e49\u5b57\u7b26",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:y},m="wrapper";function o(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris JDBC Catalog \u652f\u6301\u901a\u8fc7\u6807\u51c6 JDBC \u63a5\u53e3\u8fde\u63a5 IBM Db2 \u6570\u636e\u5e93\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e IBM Db2 \u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,r.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,r.yg)("p",null,"\u8981\u8fde\u63a5\u5230 IBM Db2 \u6570\u636e\u5e93\uff0c\u60a8\u9700\u8981"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"IBM Db2 11.5.x \u6216\u66f4\u9ad8\u7248\u672c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"IBM Db2 \u6570\u636e\u5e93\u7684 JDBC \u9a71\u52a8\u7a0b\u5e8f\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.ibm.db2/jcc"},"Maven \u4ed3\u5e93"),"\u4e0b\u8f7d\u6700\u65b0\u6216\u6307\u5b9a\u7248\u672c\u7684 IBM Db2 \u9a71\u52a8\u7a0b\u5e8f\u3002",(0,r.yg)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528 IBM db2 jcc 11.5.8.0 \u7248\u672c"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris \u6bcf\u4e2a FE \u548c BE \u8282\u70b9\u548c IBM Db2 \u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a 51000\u3002"))),(0,r.yg)("h2",{id:"\u8fde\u63a5-ibm-db2"},"\u8fde\u63a5 IBM Db2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG db2 PROPERTIES (\n    "type"="jdbc",\n    "user"="USERNAME",\n    "password"="PASSWORD",\n    "jdbc_url" = "jdbc:db2://host:port/database",\n    "driver_url" = "jcc-11.5.8.0.jar",\n    "driver_class" = "com.ibm.db2.jcc.DB2Driver"\n)\n')),(0,r.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u5b9a\u4e49\u8981\u4f20\u9012\u7ed9 IBM Db2 \u9a71\u52a8\u7a0b\u5e8f\u7684\u8fde\u63a5\u4fe1\u606f\u548c\u53c2\u6570\u3002\n\u652f\u6301\u7684 URL \u7684\u53c2\u6570\u53ef\u5728 ",(0,r.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2-big-sql/5.0?topic=drivers-jdbc-driver"},"Db2 JDBC \u9a71\u52a8\u7a0b\u5e8f\u6587\u6863")," \u4e2d\u627e\u5230\u3002")),(0,r.yg)("h2",{id:"\u5c42\u7ea7\u6620\u5c04"},"\u5c42\u7ea7\u6620\u5c04"),(0,r.yg)("p",null,"\u6620\u5c04 IBM Db2 \u65f6\uff0cDoris \u7684 Database \u5bf9\u5e94\u4e8e DB2 \u4e2d\u6307\u5b9a DataBase\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url"),' \u53c2\u6570\u4e2d\u7684 "database"\uff09\u4e0b\u7684\u4e00\u4e2a Schema\u3002\u800c Doris \u7684 Database \u4e0b\u7684 Table \u5219\u5bf9\u5e94\u4e8e DB2 \u4e2d Schema \u4e0b\u7684 Tables\u3002\u5373\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a'),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,r.yg)("th",{parentName:"tr",align:"center"},"IBM Db2"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DataBase")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Schema")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,r.yg)("h2",{id:"\u7c7b\u578b\u6620\u5c04"},"\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("h3",{id:"ibm-db2-\u5230-doris-\u7c7b\u578b\u6620\u5c04"},"IBM Db2 \u5230 Doris \u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"IBM Db2 Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE PRECISION"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECFLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR VARYING"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LONG VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARGRAPHIC"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LONG VARGRAPHIC"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CLOB"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"XML"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OTHER"),(0,r.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"\u67e5\u8be2\u4f18\u5316"},"\u67e5\u8be2\u4f18\u5316"),(0,r.yg)("h3",{id:"\u7edf\u8ba1\u4fe1\u606f"},"\u7edf\u8ba1\u4fe1\u606f"),(0,r.yg)("p",null,"Doris \u4f1a\u5728 Catalog \u4e2d\u7ef4\u62a4\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4ee5\u4fbf\u5728\u6267\u884c\u67e5\u8be2\u65f6\u80fd\u591f\u66f4\u597d\u5730\u4f18\u5316\u67e5\u8be2\u8ba1\u5212\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u67e5\u770b ",(0,r.yg)("a",{parentName:"p",href:"../external-statistics"},"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f")," \u4e86\u89e3\u5982\u4f55\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,r.yg)("h3",{id:"\u8c13\u8bcd\u4e0b\u63a8"},"\u8c13\u8bcd\u4e0b\u63a8"),(0,r.yg)("p",null,"\u5f53\u6267\u884c\u7c7b\u4f3c\u4e8e ",(0,r.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'")," \u8fd9\u6837\u7684\u67e5\u8be2\u65f6\uff0cDoris \u80fd\u591f\u5c06\u8fd9\u4e9b\u8fc7\u6ee4\u6761\u4ef6\u4e0b\u63a8\u5230\u5916\u90e8\u6570\u636e\u6e90\uff0c\u4ece\u800c\u76f4\u63a5\u5728\u6570\u636e\u6e90\u5c42\u9762\u6392\u9664\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\uff0c\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u83b7\u53d6\u548c\u4f20\u8f93\u3002\u8fd9\u5927\u5927\u63d0\u9ad8\u4e86\u67e5\u8be2\u6027\u80fd\uff0c\u540c\u65f6\u4e5f\u964d\u4f4e\u4e86\u5bf9\u5916\u90e8\u6570\u636e\u6e90\u7684\u8d1f\u8f7d\u3002"),(0,r.yg)("h3",{id:"\u884c\u6570\u9650\u5236"},"\u884c\u6570\u9650\u5236"),(0,r.yg)("p",null,"\u5982\u679c\u5728\u67e5\u8be2\u4e2d\u5e26\u6709 limit \u5173\u952e\u5b57\uff0cDoris \u4f1a\u5c06 limit \u4e0b\u63a8\u5230 IBM Db2 \u6570\u636e\u5e93\uff0c\u4ee5\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002"),(0,r.yg)("h3",{id:"\u8f6c\u4e49\u5b57\u7b26"},"\u8f6c\u4e49\u5b57\u7b26"),(0,r.yg)("p",null,'Doris \u4f1a\u5728\u4e0b\u53d1\u5230 IBM Db2 \u7684\u67e5\u8be2\u8bed\u53e5\u4e2d\uff0c\u81ea\u52a8\u5728\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0a\u52a0\u4e0a\u8f6c\u4e49\u7b26\uff1a("")\uff0c\u4ee5\u907f\u514d\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0e IBM Db2 \u5185\u90e8\u5173\u952e\u5b57\u51b2\u7a81\u3002'),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 JDBC Catalog \u8bfb\u53d6 IBM Db2 \u6570\u636e\u65f6\u51fa\u73b0 ",(0,r.yg)("inlineCode",{parentName:"p"},"Invalid operation: result set is closed. ERRORCODE=-4470")," \u5f02\u5e38"),(0,r.yg)("p",{parentName:"li"},"\u5728\u521b\u5efa IBM Db2 Catalog \u7684 jdbc_url \u8fde\u63a5\u4e32\u4e2d\u6dfb\u52a0\u8fde\u63a5\u53c2\u6570\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"allowNextOnExhaustedResultSet=1;resultSetHoldability=1;"),"\u3002\u5982\uff1a\n",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc:db2://host:port/database:allowNextOnExhaustedResultSet=1;resultSetHoldability=1;"),"\u3002"))))}o.isMDXComponent=!0}}]);