"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[389080],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var i=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),c=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=n,g=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return t?i.createElement(g,r(r({ref:a},u),{},{components:t})):i.createElement(g,r({ref:a},u))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},835152:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(58168),n=(t(296540),t(15680));const o={title:'The Efficiency of the data warehouse greatly improved in LY Digital"',language:"en",description:"Established in 2015, LY Digital is a financial service platform for tourism industry under LY. Com. In 2020, LY Digital introduced Apache Doris to build a data warehouse because of its rich data import methods, excellent parallel computing capabilities, and low maintenance costs. This article describes the evolution of data warehouse in LY Digital and why we switch to Apache Doris. ",date:"2022-12-19",author:"Xing Wang",tags:["Best Practice"],image:"/images/best-practice.png"},r=void 0,s={permalink:"/zh-CN/blog/LY",source:"@site/blog/LY.md",title:'The Efficiency of the data warehouse greatly improved in LY Digital"',description:"Established in 2015, LY Digital is a financial service platform for tourism industry under LY. Com. In 2020, LY Digital introduced Apache Doris to build a data warehouse because of its rich data import methods, excellent parallel computing capabilities, and low maintenance costs. This article describes the evolution of data warehouse in LY Digital and why we switch to Apache Doris. ",date:"2022-12-19T00:00:00.000Z",formattedDate:"2022\u5e7412\u670819\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Xing Wang"}],frontMatter:{title:'The Efficiency of the data warehouse greatly improved in LY Digital"',language:"en",description:"Established in 2015, LY Digital is a financial service platform for tourism industry under LY. Com. In 2020, LY Digital introduced Apache Doris to build a data warehouse because of its rich data import methods, excellent parallel computing capabilities, and low maintenance costs. This article describes the evolution of data warehouse in LY Digital and why we switch to Apache Doris. ",date:"2022-12-19",author:"Xing Wang",tags:["Best Practice"],image:"/images/best-practice.png"},prevItem:{title:"Apache Doris announced the official release of version 1.2.1",permalink:"/zh-CN/blog/release-note-1.2.1"},nextItem:{title:"Apache Doris announced the official release of version 1.1.5",permalink:"/zh-CN/blog/release-note-1.1.5"}},l={authorsImageUrls:[void 0]},c=[{value:"1.1 About LY Digital",id:"11-about-ly-digital",level:2},{value:"1.2 Requirements for Data Warehouse",id:"12-requirements-for-data-warehouse",level:2},{value:"2.1 Architecture",id:"21-architecture",level:2},{value:"2.1.2 Downside",id:"212-downside",level:3},{value:"3.1 Research of Popular Data Warehouses",id:"31-research-of-popular-data-warehouses",level:2},{value:"3.2 Why We Choose Doris",id:"32-why-we-choose-doris",level:2},{value:"3.3  Architecture of Real-time Processing",id:"33--architecture-of-real-time-processing",level:2},{value:"3.4 New Features",id:"34-new-features",level:2}],u={toc:c},d="wrapper";function h(e){let{components:a,...o}=e;return(0,n.yg)(d,(0,i.A)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Guide: Established in 2015, LY Digital is a financial service platform for tourism industry under LY. Com. In 2020, LY Digital introduced Apache Doris to build a data warehouse because of its rich data import methods, excellent parallel computing capabilities, and low maintenance costs. This article describes the evolution of data warehouse in LY Digital and why we switch to Apache Doris. I hope you like it.")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Author: XingWang, Lead Developer of LY Digital")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"kv",src:t(669071).A,width:"900",height:"383"})),(0,n.yg)("h1",{id:"1-background"},"1. Background"),(0,n.yg)("h2",{id:"11-about-ly-digital"},"1.1 About LY Digital"),(0,n.yg)("p",null,'LY Digital is a tourism financial service platform under LY. Com. Formally established in 2015, LY Digital takes "Digital technology empowers the tourism industry." as its vision.\nAt present, LY Digital\'s business covers financial services, consumer financial services, financial technology and digital technology. So far, more than 10 million users and 76 cities have enjoyed our services.'),(0,n.yg)("h2",{id:"12-requirements-for-data-warehouse"},"1.2 Requirements for Data Warehouse"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Dashboard: Needs dashboard for T+1 business, etc."),(0,n.yg)("li",{parentName:"ul"},"Early Warning System: Needs risk control, anomaly capital management and traffic monitoring, etc."),(0,n.yg)("li",{parentName:"ul"},"Business Analysis: Needs timely data query analysis and temporary data retrieval, etc."),(0,n.yg)("li",{parentName:"ul"},"Finance: Needs liquidation and payment reconciliation.")),(0,n.yg)("h1",{id:"2-previous-data-warehouse"},"2. Previous Data Warehouse"),(0,n.yg)("h2",{id:"21-architecture"},"2.1 Architecture"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_1",src:t(226465).A,width:"1152",height:"679"})),(0,n.yg)("p",null,"Our previous data warehouse adopted the combination of SteamSets and Apache Kudu, which was very popular in the past few years. In this architecture, Binlog is ingested into Apache Kudu after passing through StreamSets in real-time, and is finally queried and used through Apache Impala and visualization tools."),(0,n.yg)("h3",{id:"212-downside"},"2.1.2 Downside"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The previous data warehouse has a sophisticated structure that consists of many components that interact with one another, which requires huge operation and maintenance costs. "),(0,n.yg)("li",{parentName:"ul"},"The previous data warehouse has a sophisticated structure that consists of many components that interact with one another, which requires huge operation and maintenance costs."),(0,n.yg)("li",{parentName:"ul"},"Apache Kudu's performance in wide tables Join is not so good."),(0,n.yg)("li",{parentName:"ul"},"SLA is not fully guaranteed because tenant isolation is not provided."),(0,n.yg)("li",{parentName:"ul"},"Although SteamSets are equipped with early warning capabilities, job recovery capabilities are still poor. When configuring multiple tasks, the JVM consumes a lot, resulting in slow recovery.")),(0,n.yg)("h1",{id:"3-new-data-warehouse"},"3. New Data Warehouse"),(0,n.yg)("h2",{id:"31-research-of-popular-data-warehouses"},"3.1 Research of Popular Data Warehouses"),(0,n.yg)("p",null,"Due to so many shortcomings, we had to give up the previous data warehouse. In 2020, we conducted an in-depth research on the popular data warehouses in the market."),(0,n.yg)("p",null,"During the research, we focused on comparing Clickhouse and Apache Doris. ClickHouse has a high utilization rate of CPU, so it performs well in single-table query. But it does not perform well in multitable Joins and high QPS. On the other hand, Doris can not only support thousands of QPS per node. Thanks to the function of partitioning, it can also support high-concurrency queries at the QPS level of 10,000. Moreover, the horiziontal scaling in and out of ClickHouse are complex, which cannot be done automatically at present. Doris supports online dynamic scaling, and can be expanded horizontally according to the development of the business."),(0,n.yg)("p",null,"In the research, Apache Doris stood out. Doris's high-concurrency query capability is very attractive. Its dynamic scaling capabilities are also suitable for our flexible advertising business. So we chose Apache Doris for sure."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_2",src:t(277482).A,width:"1145",height:"676"})),(0,n.yg)("p",null,"After introducing Apache Doris, we upgraded the entire data warehouse:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"We collect MySQL Binlog through Canal and then it is ingested into Kafka. Because Apache Doris is highly capatible with Kafka, we can easily use Routine Load to load and import data."),(0,n.yg)("li",{parentName:"ul"},"We have made minor adjustments to the batch processing. For data stored in Hive, Apache Doris can ingest data from Hive through Broker Load. In this way, the data in batch processing can be directly ingested into Doris.")),(0,n.yg)("h2",{id:"32-why-we-choose-doris"},"3.2 Why We Choose Doris"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_3",src:t(128243).A,width:"1137",height:"676"})),(0,n.yg)("p",null,"The overall performance of Apache Doris is impressive:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Data access: It provides rich data import methods and can support the access of many types of data sources;"),(0,n.yg)("li",{parentName:"ul"},"Data connection: Doris supports JDBC and ODBC connections. And it can easily connect with BI tools. In addition, Doris uses the MySQL protocol for communication. Users can directly access Doris through various Client tools;"),(0,n.yg)("li",{parentName:"ul"},"SQL syntax: Doris adopts MySQL protocol and it is highly compatible with MySQL syntax, supporting standard SQL, and is low in learning costs for developers;"),(0,n.yg)("li",{parentName:"ul"},"MPP parallel computing: Doris provides excellent parallel computing capabilities and has obvious advantages in complex Join and wide table Join;"),(0,n.yg)("li",{parentName:"ul"},"Fully-completed documentation: Doris official documentation is very profound, which is friendly for new users. ")),(0,n.yg)("h2",{id:"33--architecture-of-real-time-processing"},"3.3  Architecture of Real-time Processing"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"page_4",src:t(944636).A,width:"1132",height:"668"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Data source: In real-time processing, data sources come from business branches such as industrial finance, consumer finance, and risk control. They are all collected through Canal and API."),(0,n.yg)("li",{parentName:"ul"},"Data collection: After data collection through Canal-Admin, Canal sends the data to Kafka message queue. After that, the data is ingested into the Doris through Routine Load."),(0,n.yg)("li",{parentName:"ul"},"Inside Doris: The Doris cluster constitutes a  three-level layer of the data warehouse, namely: the DWD layer with the Unique model, the DWS layer with the Aggregation model, and the ADS application layer."),(0,n.yg)("li",{parentName:"ul"},"Data application: The data is applied in three aspects: real-time dashboard, data timeliness analysis and data service.")),(0,n.yg)("h2",{id:"34-new-features"},"3.4 New Features"),(0,n.yg)("p",null,"The data import method is simple and adopts 3 different import methods according to different scenarios:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Routine Load: When we submit the Rountine Load task, there will be a process within Doris that consumes Kafka in real time, continuously reads data from Kafka and ingestes it into Doris."),(0,n.yg)("li",{parentName:"ul"},"Broker Load: Offline data such as dim-tables and historical data are ingested into Doris in an orderly manner."),(0,n.yg)("li",{parentName:"ul"},"Insert Into: Used for batch processing tasks, Insert into is responsible for processing data in the DWD layer")),(0,n.yg)("p",null,"Doris' data model improves our development efficiency:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The Unique model is used when accessing the DWD layer, which can effectively prevent repeated consumption of data."),(0,n.yg)("li",{parentName:"ul"},"In Doris, aggregation supports 4 models, such as Sum, Replace, Min, and Max. In this way, it may reduce a large amount of SQL code,  and no longer allow us to manually write Sum, Min, Max and other codes.")),(0,n.yg)("p",null,"Doris query is efficient:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It supports materialized view and Rollup materialized index. The bottom layer of the materialized view is similar to the concept of Cube and the precomputation process. As a way of exchanging space for time, special tables are generated at the bottom layer. In the query, materialized view maps to the tables and responds quickly.")),(0,n.yg)("h1",{id:"4-benefits-of-the-new-data-warehouse"},"4. Benefits of the New Data Warehouse"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Data access: In the previous architecture, the Kudu table needs to be created manually during the imports through SteamSets. Lack of tools, the entire process of creating tables and tasks takes 20-30 minutes. Nowadays, fast data access can be realized through the platform. The access process of each table has been shortened from the previous 20-30 minutes to the current 3-5 minutes, which is to say that the performance has been improved by 5-6 times."),(0,n.yg)("li",{parentName:"ul"},"Data development: After using Doris, we can directly use the data models, such as Unique and Aggregation.  The Duplicate model can well support logs, greatly speeding up the development process in ETL."),(0,n.yg)("li",{parentName:"ul"},"Query analysis: The bottom layer of Doris has functions such as materialized view and Rollup materialized index. Moreover, Doris has made many optimizations for wide table associations, such as Runtime Filter and other Joins. Compared with Doris, Apache Kudu requires more complex optimization to be better used."),(0,n.yg)("li",{parentName:"ul"},"Data report: It took 1-2 minutes to complete the rendering when we used Kudu to query before, but Doris responded in seconds or even milliseconds."),(0,n.yg)("li",{parentName:"ul"},"Easy maintenance: Doris is not as complex as Hadoop. In March, our IDC was relocated, and 12 Doris virtual machines were all migrated within three days. The overall operation is relatively simple. In addition to physically moving the machine, FE's scaling only requires simple commands such as Add and Drop, which do not take a long time to do.")),(0,n.yg)("h1",{id:"5-look-ahead"},"5. Look ahead"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Realize data access based on Flink CDC: At present, Flink CDC is not introduced, but Kafka through Canal instead. The development efficiency can be even faster if we use Flink CDC. Flink CDC still needs us to write a certain amount of code, which is not friendly for data analysts to use directly. We hope that data analysts only need to write simple SQL or directly operate. In the future planning, we plan to introduce Flink CDC."),(0,n.yg)("li",{parentName:"ul"},"Keep up with the latest release: Now the latest version Apache Doris V1.2.0 has made great achievements in vectorization, multi-catalog, and light schema change. We will keep up with the community to upgrade the cluster and make full use of new features."),(0,n.yg)("li",{parentName:"ul"},"Strengthen the construction of related systems: Our current index system management, such as report metadata, business metadata, and other management levels still need to be improved. Although we have data quality monitoring functions, it still needs to be strengthened and improved in automation.")))}h.isMDXComponent=!0},669071:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/kv-fb77e142257a98bea6656a33a626b310.png"},226465:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/page_1-42732f62f592f158a33670ae04987e75.png"},277482:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/page_2-414a885ce6917a5bfddb76d64d882ea4.png"},128243:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/page_3-ec6524eea65a399078e60bff590cb3ab.png"},944636:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/page_4-b6f04242c2a85d92cfd1814319127b20.png"}}]);