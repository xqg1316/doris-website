"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[278269],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>h});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),g=r,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return t?n.createElement(h,s(s({ref:a},u),{},{components:t})):n.createElement(h,s({ref:a},u))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},472825:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(58168),r=(t(296540),t(15680));const i={title:"What's Apache Doris",language:"en"},s=void 0,o={unversionedId:"gettingStarted/what-is-apache-doris",id:"version-3.0/gettingStarted/what-is-apache-doris",title:"What's Apache Doris",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/gettingStarted/what-is-apache-doris.md",sourceDirName:"gettingStarted",slug:"/gettingStarted/what-is-apache-doris",permalink:"/docs/3.0/gettingStarted/what-is-apache-doris",draft:!1,tags:[],version:"3.0",frontMatter:{title:"What's Apache Doris",language:"en"},sidebar:"get-starting",previous:{title:"What's New",permalink:"/docs/3.0/gettingStarted/what-is-new"},next:{title:"Quick Start",permalink:"/docs/3.0/gettingStarted/quick-start"}},l={},c=[{value:"Technical overview",id:"technical-overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Storage engine",id:"storage-engine",level:2},{value:"Query engine",id:"query-engine",level:2}],u={toc:c},d="wrapper";function p(e){let{components:a,...i}=e;return(0,r.yg)(d,(0,n.A)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"whats-apache-doris"},"What's Apache Doris"),(0,r.yg)("p",null,"Apache Doris is an MPP-based real-time data warehouse known for its high query speed. For queries on large datasets, it returns results in sub-seconds. It supports both high-concurrent point queries and high-throughput complex analysis. It can be used for report analysis, ad-hoc queries, unified data warehouse, and data lake query acceleration. Based on Apache Doris, users can build applications for user behavior analysis, A/B testing platform, log analysis, user profile analysis, and e-commerce order analysis."),(0,r.yg)("p",null,"Apache Doris, formerly known as Palo, was initially created to support Baidu's ad reporting business. It was officially open-sourced in 2017 and donated by Baidu to the Apache Software Foundation in July 2018, where it was operated by members of the incubator project management committee under the guidance of Apache mentors. In June 2022, Apache Doris graduated from the Apache incubator as a Top-Level Project. By 2024, the Apache Doris community has gathered more than 600 contributors from hundreds of companies in different industries, with over 120 monthly active contributors."),(0,r.yg)("p",null,"Apache Doris has a wide user base. It has been used in production environments of over 4000 companies worldwide, including giants such as TikTok, Baidu, Cisco, Tencent, and NetEase. It is also widely used across industries from finance, retailing, and telecommunications to energy, manufacturing, medical care, etc."),(0,r.yg)("h1",{id:"usage-scenarios"},"Usage Scenarios"),(0,r.yg)("p",null,"The figure below shows what Apache Doris can do in a data pipeline. Data sources, after integration and processing, are ingested into the Apache Doris real-time data warehouse and offline data lakehouses such as Hive, Iceberg, and Hudi.  Apache Doris can be used for the following purposes:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"apache-doris-usage-scenarios-pipeline",src:t(608939).A,width:"2560",height:"1496"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Report analysis"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Real-time dashboards"),(0,r.yg)("li",{parentName:"ul"},"Reports for internal analysts and managers"),(0,r.yg)("li",{parentName:"ul"},"Customer-facing reports: such as site analysis for website owners and advertising reports for advertisers. Such cases typically require high concurrency (thousands of QPS) and low query latency (measured in milliseconds). For example, the e-commerce giant JD.com uses Apache Doris for ad reporting. It ingests 10 billion rows of data per day and achieves over 10,000 QPS and P99 latency of 150ms."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Ad-hoc query"),": analyst-facing self-service analytics with irregular query patterns and high throughput requirements. For example, Xiaomi builds a Growth Analytics platform based on Apache Doris. Handling 10,000s of SQL queries every day, it delivers an average query latency of 10 seconds and a P95 latency of 30 seconds. "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Data Lakehouse"),": Apache Doris allows federated queries on external tables in offline data lakehouses such as Hive, Hudi, and Iceberg and achieves outstanding query performance by avoiding data copying."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Log analysis"),": Apache Doris supports inverted index and full-text search since version 2.0. Relying on its highly efficient query and storage engines, Apache Doris enables 10 times higher cost-effectiveness than common log analytic solutions."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Unified data warehouse"),": Apache Doris can work as a unified data processing platform for various analytic workloads, saving users from handling complicated data components and tech stacks. For example, Haidilao, a world-renowned chain restaurant, replaces its old architecture consisting of Spark, Hive, Kudu, HBase, and Phoenix with Apache Doris.")),(0,r.yg)("h2",{id:"technical-overview"},"Technical overview"),(0,r.yg)("p",null,"Apache Doris has a simple and neat architecture with only two types of processes."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Frontend (FE)"),": user request processing, query parsing and planning, metadata management, and node management"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Backend (BE)"),": data storage and query execution")),(0,r.yg)("p",null,"Both frontend and backend processes are scalable, supporting up to hundreds of machines and tens of petabytes of storage capacity in a single cluster. Both types of processes guarantee high service availability and high data reliability through consistency protocols. This highly integrated architecture design greatly reduces the operation and maintenance costs of a distributed system."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Technical overview",src:t(464350).A,width:"2560",height:"1224"})),(0,r.yg)("h2",{id:"interface"},"Interface"),(0,r.yg)("p",null,"Apache Doris adopts the MySQL protocol, supports standard SQL, and is highly compatible with MySQL syntax. Users can access Apache Doris through various client tools and seamlessly integrate it with BI tools, including but not limited to Smartbi, DataEase, FineBI, Tableau, Power BI, and Apache Superset. Apache Doris can work as the data source for any BI tools that support the MySQL protocol. "),(0,r.yg)("h2",{id:"storage-engine"},"Storage engine"),(0,r.yg)("p",null,"Apache Doris has a columnar ",(0,r.yg)("strong",{parentName:"p"},"storage engine"),", which encodes, compresses, and reads data by column. This enables a very high data compression ratio and largely reduces unnecessary data scanning, thus making more efficient use of IO and CPU resources."),(0,r.yg)("p",null,"Apache Doris supports various ",(0,r.yg)("strong",{parentName:"p"},"index")," structures to minimize data scans:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sorted Compound Key Index: Users can specify three columns at most to form a compound sort key. This can effectively prune data to better support highly concurrent reporting scenarios."),(0,r.yg)("li",{parentName:"ul"},"Min/Max Index: This enables effective data filtering in equivalence and range queries of numeric types."),(0,r.yg)("li",{parentName:"ul"},"BloomFilter Index: This is very effective in equivalence filtering and pruning of high-cardinality columns."),(0,r.yg)("li",{parentName:"ul"},"Inverted Index: This enables fast searching for any field.")),(0,r.yg)("p",null,"Apache Doris supports a variety of ",(0,r.yg)("strong",{parentName:"p"},"data models")," and has optimized them for different scenarios:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Aggregate Key Model: merges the value columns with the same keys and improves performance by pre-aggregation"),(0,r.yg)("li",{parentName:"ul"},"Unique Key Model: ensures uniqueness of keys and overwrites data with the same key to achieve row-level data updates"),(0,r.yg)("li",{parentName:"ul"},"Duplicate Key Model: stores data as it is without aggregation, capable of detailed storage of fact tables")),(0,r.yg)("p",null,"Apache Doris also supports ",(0,r.yg)("strong",{parentName:"p"},"strongly consistent materialized views"),". Materialized views are automatically selected and updated within the system without manual efforts, which reduces maintenance costs for users."),(0,r.yg)("h2",{id:"query-engine"},"Query engine"),(0,r.yg)("p",null,"Apache Doris has an MPP-based query engine for parallel execution between and within nodes. It supports distributed shuffle join for large tables to better handle complicated queries."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Query engine",src:t(826792).A,width:"2560",height:"1492"})),(0,r.yg)("p",null,"The query engine of Apache Doris is fully vectorized, with all memory structures laid out in a columnar format. This can largely reduce virtual function calls, increase cache hit rates, and make efficient use of SIMD instructions. Apache Doris delivers a 5~10 times higher performance in wide table aggregation scenarios than non-vectorized engines."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Query engine",src:t(688771).A,width:"2560",height:"864"})),(0,r.yg)("p",null,"Apache Doris uses ",(0,r.yg)("strong",{parentName:"p"},"adaptive query execution")," technology to dynamically adjust the execution plan based on runtime statistics. For example, it can generate a runtime filter and push it to the probe side. Specifically, it pushes the filters to the lowest-level scan node on the probe side, which largely reduces the data amount to be processed and increases join performance. The runtime filter of Apache Doriz supports In/Min/Max/Bloom Filter."),(0,r.yg)("p",null,"The query ",(0,r.yg)("strong",{parentName:"p"},"optimizer")," of Apache Doris is a combination of CBO and RBO. RBO supports constant folding, subquery rewriting, and predicate pushdown while CBO supports join reorder. The Apache Doris CBO is under continuous optimization for more accurate statistics collection and inference as well as a more accurate cost model."))}p.isMDXComponent=!0},826792:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/apache-doris-query-engine-1-9e2beb07704b905a1c44dae1c5b3bd04.png"},688771:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/apache-doris-query-engine-2-92a7d1bd709c09e437e90dfedf559803.png"},464350:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/apache-doris-technical-overview-b8c5cb11b57d2f6559fa397d9fd0a8a0.png"},608939:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/apache-doris-usage-scenarios-pipeline-a492c2b680f32df2aac535b91cb0e485.png"}}]);