"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31787],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),y=n,m=c["".concat(s,".").concat(y)]||c[y]||g[y]||i;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},425647:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(296540),a(15680));const i={title:"SQL Server",language:"en"},l=void 0,o={unversionedId:"lakehouse/database/sqlserver",id:"lakehouse/database/sqlserver",title:"SQL Server",description:"\x3c!--",source:"@site/docs/lakehouse/database/sqlserver.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/sqlserver",permalink:"/docs/dev/lakehouse/database/sqlserver",draft:!1,tags:[],version:"current",frontMatter:{title:"SQL Server",language:"en"},sidebar:"docs",previous:{title:"Oracle",permalink:"/docs/dev/lakehouse/database/oracle"},next:{title:"IBM Db2",permalink:"/docs/dev/lakehouse/database/ibm-db2"}},s={},p=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to SQL Server",id:"connect-to-sql-server",level:2},{value:"Connection security",id:"connection-security",level:3},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"SQL Server to Doris type mapping",id:"sql-server-to-doris-type-mapping",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Statistics",id:"statistics",level:3},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3},{value:"FAQ",id:"faq",level:2}],d={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Doris JDBC Catalog supports connecting to SQL Server databases through the standard JDBC interface. This document describes how to configure a SQL Server database connection."),(0,n.yg)("h2",{id:"terms-and-conditions"},"Terms and Conditions"),(0,n.yg)("p",null,"To connect to a SQL Server database you need"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"SQL Server 2012 or later, or Azure SQL Database.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"JDBC driver for SQL Server database, you can download the latest or specified version of SQL Server JDBC driver from ",(0,n.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"Maven repository"),". ",(0,n.yg)("strong",{parentName:"p"},"It is recommended to use SQL Server JDBC Driver 11.2.x and above. "))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Doris Network connection between each FE and BE node and the SQL Server server, default port is 1433."))),(0,n.yg)("h2",{id:"connect-to-sql-server"},"Connect to SQL Server"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG sqlserver PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false",\n    "driver_url" = "mssql-jdbc-11.2.3.jre8.jar",\n    "driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n)\n')),(0,n.yg)("admonition",{title:"remarks",type:"info"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_url")," defines the connection information and parameters to be passed to the SQL Server JDBC driver. URL support is provided in ",(0,n.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver16"},"SQL Server JDBC Driver Documentation")," parameters.")),(0,n.yg)("h3",{id:"connection-security"},"Connection security"),(0,n.yg)("p",null,"The JDBC driver and connector automatically use Transport Layer Security (TLS) encryption and certificate verification. This requires configuring the appropriate TLS certificate on the SQL Server database host."),(0,n.yg)("p",null,"If you have not set up the necessary configuration, you can disable encryption in the connection string using the encrypt attribute:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'"jdbc_url"="jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false"\n')),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en/sql/connect/jdbc/using-ssl-encryption?view=sql-server-ver16"},"The TLS section of the SQL Server JDBC driver documentation")," describes trustServerCertificate in detail , hostNameInCertificate, trustStore and trustStorePassword and other parameters."),(0,n.yg)("h2",{id:"hierarchical-mapping"},"Hierarchical mapping"),(0,n.yg)("p",null,"When mapping SQLServer, a Database in Doris corresponds to a Schema under the specified Database (",(0,n.yg)("inlineCode",{parentName:"p"},"<databaseName>")," in the ",(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_url")," parameter) in SQL Server. The Table under Doris' Database corresponds to the Tables under Schema in SQL Server. That is, the mapping relationship is as follows:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.yg)("th",{parentName:"tr",align:"center"},"SQLServer"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Database")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Schema")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,n.yg)("h2",{id:"type-mapping"},"Type mapping"),(0,n.yg)("h3",{id:"sql-server-to-doris-type-mapping"},"SQL Server to Doris type mapping"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"SQL Server Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"bit"),(0,n.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,n.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:null},"SQLServer's tinyint is an unsigned number, so it is mapped to Doris's SMALLINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"smallint"),(0,n.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"int"),(0,n.yg)("td",{parentName:"tr",align:null},"INT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"bigint"),(0,n.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"real"),(0,n.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"float"),(0,n.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"money"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL(19,4)"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"smallmoney"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL(10,4)"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"decimal/numeric"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"date"),(0,n.yg)("td",{parentName:"tr",align:null},"DATE"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"datetime/datetime2/smalldatetime"),(0,n.yg)("td",{parentName:"tr",align:null},"DATETIMEV2"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"char/varchar/text/nchar/nvarchar/ntext"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"time/datetimeoffset"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"timestamp"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null},"Read the hexadecimal display of binary data, no practical significance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Other"),(0,n.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,n.yg)("td",{parentName:"tr",align:null})))),(0,n.yg)("h2",{id:"query-optimization"},"Query optimization"),(0,n.yg)("h3",{id:"statistics"},"Statistics"),(0,n.yg)("p",null,"Doris maintains table statistics in the Catalog so that it can better optimize query plans when executing queries."),(0,n.yg)("p",null,"See ",(0,n.yg)("a",{parentName:"p",href:"../external-statistics"},"external-statistics")," to learn how to collect statistics."),(0,n.yg)("h3",{id:"predicate-pushdown"},"Predicate pushdown"),(0,n.yg)("p",null,"When executing a query like ",(0,n.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'"),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing inaccuracies. Necessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources."),(0,n.yg)("h3",{id:"row-limit"},"Row limit"),(0,n.yg)("p",null,"If you have the limit keyword in the query, Doris will escape the limit into SQL Server's ",(0,n.yg)("inlineCode",{parentName:"p"},"TOP")," syntax to reduce the amount of data transfer."),(0,n.yg)("h3",{id:"escape-characters"},"Escape characters"),(0,n.yg)("p",null,"Doris will automatically add the escape character ([]) to the field names and table names in the query statements sent to SQL Server to avoid conflicts between field names, table names and SQL Server internal keywords."),(0,n.yg)("h2",{id:"faq"},"FAQ"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Certificate authentication exception occurs when connecting to SQL Server"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'SQLServerException: The driver could not establish a secure connection to SQL Server by using Secure Sockets Layer (SSL) encryption.\nError: "sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException:\nunable to find valid certification path to requested target". ClientConnectionId:a92f3817-e8e6-4311-bc21-7c66\n')),(0,n.yg)("p",{parentName:"li"},"You can add ",(0,n.yg)("inlineCode",{parentName:"p"},"encrypt=false")," to the end of the JDBC connection string when creating the Catalog, such as ",(0,n.yg)("inlineCode",{parentName:"p"},'"jdbc_url" = "jdbc:sqlserver://127.0.0.1:1433;DataBaseName=doris_test;encrypt=false"'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"TLS exception occurs when connecting to SQL Server"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"The server selected protocol version TLS10 is not accepted by client preferences [TLS13, TLS12]\n")),(0,n.yg)("p",{parentName:"li"},"This is due to a TLS protocol version mismatch between SQL Server and the JDBC client. The connected SQL Server only supports TLS 1.0, and the JAVA environment where the JDBC client is located has TLS 1.0 disabled by default."),(0,n.yg)("p",{parentName:"li"},"The solution is as follows:"),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Enable TLS 1.2 on SQL Server.\nReference: ",(0,n.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/connect/tls-1-2-support-microsoft-sql-server"},"SQL Server TLS 1.2 support"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Enable TLS 1.0 for the JDK."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"vim ${JAVA_HOME}/lib/security/java.security\n#find this paragraph\njdk.tls.disabledAlgorithms=SSLv3, TLSv1, TLSv1.1, RC4, DES, MD5withRSA, \\\nDH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL, \\\ninclude jdk.disabled.namedCurves\n\n#Delete TLSv1, TLSv1.1 and change it to the following\njdk.tls.disabledAlgorithms=SSLv3, RC4, DES, MD5withRSA, \\\nDH keySize < 1024, EC keySize < 224, anon, NULL, \\\ninclude jdk.disabled.namedCurves\n")))))))}g.isMDXComponent=!0}}]);