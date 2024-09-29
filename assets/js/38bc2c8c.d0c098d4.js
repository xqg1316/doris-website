"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[836677],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(r,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(58168),i=(a(296540),a(15680));const l={title:"External Table Statistics",language:"en"},s=void 0,o={unversionedId:"lakehouse/external-statistics",id:"version-2.0/lakehouse/external-statistics",title:"External Table Statistics",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/external-statistics.md",sourceDirName:"lakehouse",slug:"/lakehouse/external-statistics",permalink:"/docs/2.0/lakehouse/external-statistics",draft:!1,tags:[],version:"2.0",frontMatter:{title:"External Table Statistics",language:"en"},sidebar:"docs",previous:{title:"Elastic Compute Node",permalink:"/docs/2.0/lakehouse/compute-node"},next:{title:"Cluster Upgrade",permalink:"/docs/2.0/admin-manual/cluster-management/upgrade"}},r={},c=[{value:"Examples of usage.",id:"examples-of-usage",level:2},{value:"Collection of statistics",id:"collection-of-statistics",level:3},{value:"Manual once collection",id:"manual-once-collection",level:4},{value:"periodic collection",id:"periodic-collection",level:4},{value:"Job management",id:"job-management",level:3},{value:"Show statistics",id:"show-statistics",level:3},{value:"Table statistics",id:"table-statistics",level:4},{value:"Column statistics",id:"column-statistics",level:4},{value:"Modify the statistics",id:"modify-the-statistics",level:3},{value:"Delete stattistics",id:"delete-stattistics",level:3},{value:"Implementation principle",id:"implementation-principle",level:2},{value:"Statistics Data Sources",id:"statistics-data-sources",level:3},{value:"Cache loading",id:"cache-loading",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"external-table-statistics"},"External Table Statistics"),(0,i.yg)("p",null,"The collection method and content of the external table statistics are basically the same as those of the internal table. For more information, please refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.0/query/nereids/statistics"},"Internal table statistics"),". Currently supports the collection of Hive, Iceberg and Hudi external tables."),(0,i.yg)("p",null,"Features that are not currently supported by the external table include"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Histogram collection is not supported yet"),(0,i.yg)("li",{parentName:"ol"},"Does not support incremental collection and update of partitions"),(0,i.yg)("li",{parentName:"ol"},"Automatic collection (with auto) is not supported for now, users can use periodic collection (with period) instead"),(0,i.yg)("li",{parentName:"ol"},"Sampling collection is not currently supported")),(0,i.yg)("p",null,"The following mainly introduces the examples and implementation principles of the collection of external table statistic information."),(0,i.yg)("h2",{id:"examples-of-usage"},"Examples of usage."),(0,i.yg)("p",null,"Here is an example of collecting external table statistics by executing the analyze command in Doris. Except for the 4 functions that are not supported mentioned above, the rest are the same as the internal table. The following takes the hive.tpch100 database as an example to show how to use it. The tpch100 database contains 8 tables including lineitem, orders, region, etc."),(0,i.yg)("h3",{id:"collection-of-statistics"},"Collection of statistics"),(0,i.yg)("p",null,"We supports two collection methods for external table: manual once collection and periodic collection."),(0,i.yg)("h4",{id:"manual-once-collection"},"Manual once collection"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Collect the row count of ",(0,i.yg)("inlineCode",{parentName:"li"},"lineitem")," table and the statistics of all columns")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> ANALYZE TABLE hive.tpch100.lineitem;\n+--------------+-------------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n| Catalog_Name | DB_Name                 | Table_Name | Columns                                                                                                                                                                                       | Job_Id |\n+--------------+-------------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n| hive         | default_cluster:tpch100 | lineitem   | [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct] | 16990  |\n+--------------+-------------------------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n1 row in set (0.06 sec)\n")),(0,i.yg)("p",null,"This operation is performed asynchronously, a collection job will be created in the background, and the progress of the job can be viewed using job_id"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SHOW ANALYZE 16990;\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+---------+---------------------------------------------+---------------+\n| job_id | catalog_name | db_name                 | tbl_name | col_name                                                                                                                                                                                      | job_type | analysis_type | message | last_exec_time_in_ms | state   | progress                                    | schedule_type |\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+---------+---------------------------------------------+---------------+\n| 16990  | hive         | default_cluster:tpch100 | lineitem | [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct] | MANUAL   | FUNDAMENTALS  |         | 2023-07-27 16:01:52  | RUNNING | 2 Finished/0 Failed/15 In Progress/17 Total | ONCE          |\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+---------+---------------------------------------------+---------------+\n1 row in set (0.00 sec)\n")),(0,i.yg)("p",null,"And view the task status of each column."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SHOW ANALYZE TASK STATUS 16990;\n+---------+-----------------+---------+------------------------+-----------------+----------+\n| task_id | col_name        | message | last_state_change_time | time_cost_in_ms | state    |\n+---------+-----------------+---------+------------------------+-----------------+----------+\n| 16991   | l_receiptdate   |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 16992   | l_returnflag    |         | 2023-07-27 16:01:44    | 14394           | FINISHED |\n| 16993   | l_tax           |         | 2023-07-27 16:01:52    | 7975            | FINISHED |\n| 16994   | l_shipmode      |         | 2023-07-27 16:02:11    | 18961           | FINISHED |\n| 16995   | l_suppkey       |         | 2023-07-27 16:02:17    | 6684            | FINISHED |\n| 16996   | l_shipdate      |         | 2023-07-27 16:02:26    | 8518            | FINISHED |\n| 16997   | l_commitdate    |         | 2023-07-27 16:02:26    | 0               | RUNNING  |\n| 16998   | l_partkey       |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 16999   | l_quantity      |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17000   | l_orderkey      |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17001   | l_comment       |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17002   | l_linestatus    |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17003   | l_extendedprice |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17004   | l_linenumber    |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17005   | l_shipinstruct  |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17006   | l_discount      |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n| 17007   | TableRowCount   |         | 2023-07-27 16:01:29    | 0               | PENDING  |\n+---------+-----------------+---------+------------------------+-----------------+----------+\n17 rows in set (0.00 sec)\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Collect statistics about all tables in the tpch100 database")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> ANALYZE DATABASE hive.tpch100;\n+--------------+---------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n| Catalog_Name | DB_Name | Table_Name | Columns                                                                                                                                                                                       | Job_Id |\n+--------------+---------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n| hive         | tpch100 | supplier   | [s_comment,s_phone,s_nationkey,s_name,s_address,s_acctbal,s_suppkey]                                                                                                                          | 17018  |\n| hive         | tpch100 | nation     | [n_comment,n_nationkey,n_regionkey,n_name]                                                                                                                                                    | 17027  |\n| hive         | tpch100 | region     | [r_regionkey,r_comment,r_name]                                                                                                                                                                | 17033  |\n| hive         | tpch100 | partsupp   | [ps_suppkey,ps_availqty,ps_comment,ps_partkey,ps_supplycost]                                                                                                                                  | 17038  |\n| hive         | tpch100 | orders     | [o_orderstatus,o_clerk,o_orderdate,o_shippriority,o_custkey,o_totalprice,o_orderkey,o_comment,o_orderpriority]                                                                                | 17045  |\n| hive         | tpch100 | lineitem   | [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct] | 17056  |\n| hive         | tpch100 | part       | [p_partkey,p_container,p_name,p_comment,p_brand,p_type,p_retailprice,p_mfgr,p_size]                                                                                                           | 17074  |\n| hive         | tpch100 | customer   | [c_custkey,c_phone,c_acctbal,c_mktsegment,c_address,c_nationkey,c_name,c_comment]                                                                                                             | 17085  |\n+--------------+---------+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+\n8 rows in set (0.29 sec)\n")),(0,i.yg)("p",null,"This operation will submit the collection jobs of all tables under the tpch100 database in batches, which is also executed asynchronously. A job_id will be created for each table, and the job and task progress of each table can also be viewed through the job_id."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"synchronous collection")),(0,i.yg)("p",null,"You can use ",(0,i.yg)("inlineCode",{parentName:"p"},"with sync")," to collect table or database statistics synchronously. At this time, no background task will be created, and the client will block before the collection is completed, and return until the collection job is completed."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> analyze table hive.tpch100.orders with sync;\nQuery OK, 0 rows affected (33.19 sec)\n")),(0,i.yg)("p",null,"It should be noted that synchronous collection is affected by the query_timeout session variable. If the collection failed because of timeout, you need to increase the variable value and try again. for example\n",(0,i.yg)("inlineCode",{parentName:"p"},"set query_timeout=3600")," (This set timeout interval to 1 hour)"),(0,i.yg)("h4",{id:"periodic-collection"},"periodic collection"),(0,i.yg)("p",null,"Use ",(0,i.yg)("inlineCode",{parentName:"p"},"with period")," to create periodic execution collection job. "),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"analyze table hive.tpch100.orders with period 86400;")),(0,i.yg)("p",null,"This statement creates a periodic collection job, the cycle is 1 day, and the statistical information of the ",(0,i.yg)("inlineCode",{parentName:"p"},"orders")," table is automatically collected and updated every 24 hours. "),(0,i.yg)("h3",{id:"job-management"},"Job management"),(0,i.yg)("p",null,"The method of job management is also the same as that of the internal table, including functions such as viewing jobs, viewing tasks, and deleting jobs. Please refer to the manage job section of ",(0,i.yg)("a",{parentName:"p",href:"../query/nereids/statistics"},"Internal table statistics")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Show all job status")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SHOW ANALYZE;\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+----------+---------------------------------------------+---------------+\n| job_id | catalog_name | db_name                 | tbl_name | col_name                                                                                                                                                                                      | job_type | analysis_type | message | last_exec_time_in_ms | state    | progress                                    | schedule_type |\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+----------+---------------------------------------------+---------------+\n| 16990  | hive         | default_cluster:tpch100 | lineitem | [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct] | MANUAL   | FUNDAMENTALS  |         | 2023-07-27 16:05:02  | FINISHED | 17 Finished/0 Failed/0 In Progress/17 Total | ONCE          |\n+--------+--------------+-------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------+---------------+---------+----------------------+----------+---------------------------------------------+---------------+\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Show all tasks status of a job")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SHOW ANALYZE TASK STATUS 16990;\n+---------+-----------------+---------+------------------------+-----------------+----------+\n| task_id | col_name        | message | last_state_change_time | time_cost_in_ms | state    |\n+---------+-----------------+---------+------------------------+-----------------+----------+\n| 16991   | l_receiptdate   |         | 2023-07-27 16:05:02    | 9560            | FINISHED |\n| 16992   | l_returnflag    |         | 2023-07-27 16:01:44    | 14394           | FINISHED |\n| 16993   | l_tax           |         | 2023-07-27 16:01:52    | 7975            | FINISHED |\n| 16994   | l_shipmode      |         | 2023-07-27 16:02:11    | 18961           | FINISHED |\n| 16995   | l_suppkey       |         | 2023-07-27 16:02:17    | 6684            | FINISHED |\n| 16996   | l_shipdate      |         | 2023-07-27 16:02:26    | 8518            | FINISHED |\n| 16997   | l_commitdate    |         | 2023-07-27 16:02:34    | 8380            | FINISHED |\n| 16998   | l_partkey       |         | 2023-07-27 16:02:40    | 6060            | FINISHED |\n| 16999   | l_quantity      |         | 2023-07-27 16:02:50    | 9768            | FINISHED |\n| 17000   | l_orderkey      |         | 2023-07-27 16:02:57    | 7200            | FINISHED |\n| 17001   | l_comment       |         | 2023-07-27 16:03:36    | 38468           | FINISHED |\n| 17002   | l_linestatus    |         | 2023-07-27 16:03:51    | 15226           | FINISHED |\n| 17003   | l_extendedprice |         | 2023-07-27 16:04:00    | 8713            | FINISHED |\n| 17004   | l_linenumber    |         | 2023-07-27 16:04:06    | 6659            | FINISHED |\n| 17005   | l_shipinstruct  |         | 2023-07-27 16:04:36    | 29777           | FINISHED |\n| 17006   | l_discount      |         | 2023-07-27 16:04:45    | 9212            | FINISHED |\n| 17007   | TableRowCount   |         | 2023-07-27 16:04:52    | 6974            | FINISHED |\n+---------+-----------------+---------+------------------------+-----------------+----------+\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Terminate unfinished jobs")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"KILL ANALYZE [job_id]\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Delete periodic collection job")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"DROP ANALYZE JOB [JOB_ID]\n")),(0,i.yg)("h3",{id:"show-statistics"},"Show statistics"),(0,i.yg)("p",null,"Show statistics includes show table statistics (number of rows) and column statistics. Please refer to View statistics in ",(0,i.yg)("a",{parentName:"p",href:"../query/nereids/statistics"},"Internal Table Statistics")),(0,i.yg)("h4",{id:"table-statistics"},"Table statistics"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SHOW TABLE [cached] stats TABLE_NAME;\n")),(0,i.yg)("p",null,"View row count of the given table. If the cached parameter is specified, the row count of the specified table that has been loaded into the cache is displayed."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SHOW TABLE STATS hive.tpch100.orders;\n+-----------+---------------------+---------------------+\n| row_count | update_time         | last_analyze_time   |\n+-----------+---------------------+---------------------+\n| 150000000 | 2023-07-11 23:01:49 | 2023-07-11 23:01:44 |\n+-----------+---------------------+---------------------+\n")),(0,i.yg)("h4",{id:"column-statistics"},"Column statistics"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SHOW COLUMN [cached] stats TABLE_NAME;\n")),(0,i.yg)("p",null,"View the column statistics of a table. If the cached parameter is specified, the column information of the specified table that has been loaded into the cache is displayed."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SHOW COLUMN stats hive.tpch100.orders;\n+-----------------+-------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n| column_name     | count | ndv          | num_null | data_size            | avg_size_byte | min                   | max                        |\n+-----------------+-------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n| o_orderstatus   | 1.5E8 | 3.0          | 0.0      | 1.50000001E8         | 1.0           | 'F'                   | 'P'                        |\n| o_clerk         | 1.5E8 | 100836.0     | 0.0      | 2.250000015E9        | 15.0          | 'Clerk#000000001'     | 'Clerk#000100000'          |\n| o_orderdate     | 1.5E8 | 2417.0       | 0.0      | 6.00000004E8         | 4.0           | '1992-01-01'          | '1998-08-02'               |\n| o_shippriority  | 1.5E8 | 1.0          | 0.0      | 6.00000004E8         | 4.0           | 0                     | 0                          |\n| o_custkey       | 1.5E8 | 1.0023982E7  | 0.0      | 6.00000004E8         | 4.0           | 1                     | 14999999                   |\n| o_totalprice    | 1.5E8 | 3.4424096E7  | 0.0      | 1.200000008E9        | 8.0           | 811.73                | 591036.15                  |\n| o_orderkey      | 1.5E8 | 1.51621184E8 | 0.0      | 1.200000008E9        | 8.0           | 1                     | 600000000                  |\n| o_comment       | 1.5E8 | 1.10204136E8 | 0.0      | 7.275038757500258E9  | 48.50025806   | ' Tiresias about the' | 'zzle? unusual requests w' |\n| o_orderpriority | 1.5E8 | 5.0          | 0.0      | 1.2600248124001656E9 | 8.40016536    | '1-URGENT'            | '5-LOW'                    |\n+-----------------+-------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n")),(0,i.yg)("h3",{id:"modify-the-statistics"},"Modify the statistics"),(0,i.yg)("p",null,"Modify statistics supports users to manually modify column statistics. You can modify the row_count, ndv, num_nulls, min_value, max_value, data_size and other information of the specified column."),(0,i.yg)("p",null,"Please refer to Modify the statistics in ",(0,i.yg)("a",{parentName:"p",href:"../query/nereids/statistics"},"Internal Table Statistics")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> ALTER TABLE hive.tpch100.orders MODIFY COLUMN o_orderstatus SET STATS ('row_count'='6001215');\nQuery OK, 0 rows affected (0.03 sec)\n\nmysql> SHOW COLUMN stats hive.tpch100.orders;\n+-----------------+-----------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n| column_name     | count     | ndv          | num_null | data_size            | avg_size_byte | min                   | max                        |\n+-----------------+-----------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n| o_orderstatus   | 6001215.0 | 0.0          | 0.0      | 0.0                  | 0.0           | 'NULL'                | 'NULL'                     |\n| o_clerk         | 1.5E8     | 100836.0     | 0.0      | 2.250000015E9        | 15.0          | 'Clerk#000000001'     | 'Clerk#000100000'          |\n| o_orderdate     | 1.5E8     | 2417.0       | 0.0      | 6.00000004E8         | 4.0           | '1992-01-01'          | '1998-08-02'               |\n| o_shippriority  | 1.5E8     | 1.0          | 0.0      | 6.00000004E8         | 4.0           | 0                     | 0                          |\n| o_custkey       | 1.5E8     | 1.0023982E7  | 0.0      | 6.00000004E8         | 4.0           | 1                     | 14999999                   |\n| o_totalprice    | 1.5E8     | 3.4424096E7  | 0.0      | 1.200000008E9        | 8.0           | 811.73                | 591036.15                  |\n| o_orderkey      | 1.5E8     | 1.51621184E8 | 0.0      | 1.200000008E9        | 8.0           | 1                     | 600000000                  |\n| o_comment       | 1.5E8     | 1.10204136E8 | 0.0      | 7.275038757500258E9  | 48.50025806   | ' Tiresias about the' | 'zzle? unusual requests w' |\n| o_orderpriority | 1.5E8     | 5.0          | 0.0      | 1.2600248124001656E9 | 8.40016536    | '1-URGENT'            | '5-LOW'                    |\n+-----------------+-----------+--------------+----------+----------------------+---------------+-----------------------+----------------------------+\n")),(0,i.yg)("h3",{id:"delete-stattistics"},"Delete stattistics"),(0,i.yg)("p",null,"Deleting table statistics supports users to delete table row count and column statistics of a table. If the user specifies the column names to be deleted, only the statistics of these columns will be deleted. If not specified, the statistical information of all columns of the entire table and the number of rows of the table will be deleted."),(0,i.yg)("p",null,"Please refer to Delete statistics in ",(0,i.yg)("a",{parentName:"p",href:"../query/nereids/statistics"},"Internal Table Statistics")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Delete statistics of the entire table")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"DROP STATS hive.tpch100.orders\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Delete the statistics of certain columns in the table")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"DROP STATS hive.tpch100.orders (o_orderkey, o_orderdate)\n")),(0,i.yg)("h2",{id:"implementation-principle"},"Implementation principle"),(0,i.yg)("h3",{id:"statistics-data-sources"},"Statistics Data Sources"),(0,i.yg)("p",null,"The optimizer (Nereids) reads statistical information through the cache, and there are two data sources for the cache to load data from."),(0,i.yg)("p",null,"The first data source is the internal statistics table, and the data in the statistics table is collected by the user to execute analyze statement. The structure of this part is the same as that of the internal table. Users can execute the analyze statement on the external table to collect statistical information just like analyzing the internal tables."),(0,i.yg)("p",null,"Different from the internal table, the statistic cache for external table has a second data source, the stats collector. The stats collector defines some interfaces for obtaining statistical information from external catalog. Hive metastore and Iceberg metadata. These interfaces can obtain existing statistical information in external catalog. Take hive as an example. If the user has performed the analyze operation in hive, then when querying in Doris, Doris can directly load the existing statistical information from the hive metastore into the cache, including the number of rows in the table, the maximum and minimum values of columns, etc. If the external data source does not have statistical information, the stats connector will roughly estimate row count based on the size of the data file and the schema of the table. In this case, the column statistics are missing, which may cause the optimizer to generate a relatively inefficient execution plan."),(0,i.yg)("p",null,"The Stats collector is automatically executed when there is no data in the statistics table, and it is transparent to the user, user does not need to execute commands or make any settings."),(0,i.yg)("h3",{id:"cache-loading"},"Cache loading"),(0,i.yg)("p",null,"The loading sequence of the cache is firstly loaded through the Statistics table. If there is information in the Statistics table, it means that the user has performed analyze operation in doris. The collected statistical information through analyze is the most accurate, so we prioritize loading from the Statistics table. If you find that there is no information about the currently required table in Statistics, Doris will try to obtain it from an external data source through stats collector. If the external data source does not have column statistics either, the stats collector will estimate a row count based on file size and table schema."),(0,i.yg)("p",null,"Since the cache is loaded asynchronously, the statistical information may not be available for the first query, because the cache loading has just been triggered at this time. But in general, it can be guaranteed that when a table is queried for the second time, the optimizer can obtain its statistical information from the cache."))}d.isMDXComponent=!0}}]);