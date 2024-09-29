"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[694516],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>d});var r=a(296540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=s(a),u=t,d=y["".concat(p,".").concat(u)]||y[u]||m[u]||l;return a?r.createElement(d,i(i({ref:n},g),{},{components:a})):r.createElement(d,i({ref:n},g))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},440534:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(58168),t=(a(296540),a(15680));const l={title:"Hive",language:"zh-CN"},i=void 0,o={unversionedId:"lakehouse/multi-catalog/hive",id:"version-1.2/lakehouse/multi-catalog/hive",title:"Hive",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/lakehouse/multi-catalog/hive.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/hive",permalink:"/zh-CN/docs/1.2/lakehouse/multi-catalog/hive",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Hive",language:"zh-CN"},sidebar:"docs",previous:{title:"\u591a\u6e90\u6570\u636e\u76ee\u5f55",permalink:"/zh-CN/docs/1.2/lakehouse/multi-catalog/"},next:{title:"Iceberg",permalink:"/zh-CN/docs/1.2/lakehouse/multi-catalog/iceberg"}},p={},s=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u521b\u5efa Catalog",id:"\u521b\u5efa-catalog",level:2},{value:"Hive \u7248\u672c",id:"hive-\u7248\u672c",level:3},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u4f7f\u7528Ranger\u8fdb\u884c\u6743\u9650\u6821\u9a8c",id:"\u4f7f\u7528ranger\u8fdb\u884c\u6743\u9650\u6821\u9a8c",level:2},{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:3}],g={toc:s},y="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(y,(0,r.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"hive"},"Hive"),(0,t.yg)("p",null,"\u901a\u8fc7\u8fde\u63a5 Hive Metastore\uff0c\u6216\u8005\u517c\u5bb9 Hive Metatore \u7684\u5143\u6570\u636e\u670d\u52a1\uff0cDoris \u53ef\u4ee5\u81ea\u52a8\u83b7\u53d6 Hive \u7684\u5e93\u8868\u4fe1\u606f\uff0c\u5e76\u8fdb\u884c\u6570\u636e\u67e5\u8be2\u3002"),(0,t.yg)("p",null,"\u9664\u4e86 Hive \u5916\uff0c\u5f88\u591a\u5176\u4ed6\u7cfb\u7edf\u4e5f\u4f1a\u4f7f\u7528 Hive Metastore \u5b58\u50a8\u5143\u6570\u636e\u3002\u6240\u4ee5\u901a\u8fc7 Hive Catalog\uff0c\u6211\u4eec\u4e0d\u4ec5\u80fd\u8bbf\u95ee Hive\uff0c\u4e5f\u80fd\u8bbf\u95ee\u4f7f\u7528 Hive Metastore \u4f5c\u4e3a\u5143\u6570\u636e\u5b58\u50a8\u7684\u7cfb\u7edf\u3002\u5982 Iceberg\u3001Hudi \u7b49\u3002"),(0,t.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5c06 core-site.xml\uff0chdfs-site.xml \u548c hive-site.xml  \u653e\u5230 FE \u548c BE \u7684 conf \u76ee\u5f55\u4e0b\u3002\u4f18\u5148\u8bfb\u53d6 conf \u76ee\u5f55\u4e0b\u7684 hadoop \u914d\u7f6e\u6587\u4ef6\uff0c\u518d\u8bfb\u53d6\u73af\u5883\u53d8\u91cf ",(0,t.yg)("inlineCode",{parentName:"li"},"HADOOP_CONF_DIR")," \u7684\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u3002 "),(0,t.yg)("li",{parentName:"ol"},"hive \u652f\u6301 1/2/3 \u7248\u672c\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u652f\u6301 Managed Table \u548c External Table\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u53ef\u4ee5\u8bc6\u522b Hive Metastore \u4e2d\u5b58\u50a8\u7684 hive\u3001iceberg\u3001hudi \u5143\u6570\u636e\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u652f\u6301\u6570\u636e\u5b58\u50a8\u5728 Juicefs \u4e0a\u7684 hive \u8868\uff0c\u7528\u6cd5\u5982\u4e0b\uff08\u9700\u8981\u628ajuicefs-hadoop-x.x.x.jar\u653e\u5728 fe/lib/ \u548c apache_hdfs_broker/lib/ \u4e0b\uff09\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u652f\u6301\u6570\u636e\u5b58\u50a8\u5728 CHDFS \u4e0a\u7684 hive \u8868\u3002\u9700\u914d\u7f6e\u73af\u5883\uff1a",(0,t.yg)("ol",{parentName:"li"},(0,t.yg)("li",{parentName:"ol"},"\u628achdfs_hadoop_plugin_network-x.x.jar \u653e\u5728 fe/lib/ \u548c apache_hdfs_broker/lib/ \u4e0b"),(0,t.yg)("li",{parentName:"ol"},"\u5c06 hive \u6240\u5728 Hadoop \u96c6\u7fa4\u7684 core-site.xml \u548c hdfs-site.xml \u590d\u5236\u5230 fe/conf/ \u548c apache_hdfs_broker/conf \u76ee\u5f55\u4e0b")))),(0,t.yg)("version",{since:"dev"},(0,t.yg)("ol",{start:7},(0,t.yg)("li",{parentName:"ol"},"\u652f\u6301\u6570\u636e\u5b58\u5728\u5728 GooseFS(GFS) \u4e0a\u7684 hive\u3001iceberg\u8868\u3002\u9700\u914d\u7f6e\u73af\u5883\uff1a",(0,t.yg)("ol",{parentName:"li"},(0,t.yg)("li",{parentName:"ol"},"\u628a goosefs-x.x.x-client.jar \u653e\u5728 fe/lib/ \u548c apache_hdfs_broker/lib/ \u4e0b"),(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa catalog \u65f6\u589e\u52a0\u5c5e\u6027\uff1a'fs.AbstractFileSystem.gfs.impl' = 'com.qcloud.cos.goosefs.hadoop.GooseFileSystem'\uff0c 'fs.gfs.impl' = 'com.qcloud.cos.goosefs.hadoop.FileSystem'"))))),(0,t.yg)("ol",{start:8},(0,t.yg)("li",{parentName:"ol"},"\u5982\u679c Hadoop \u8282\u70b9\u914d\u7f6e\u4e86 hostname\uff0c\u8bf7\u786e\u4fdd\u6dfb\u52a0\u5bf9\u5e94\u7684\u6620\u5c04\u5173\u7cfb\u5230 /etc/hosts \u6587\u4ef6\u3002")),(0,t.yg)("h2",{id:"\u521b\u5efa-catalog"},"\u521b\u5efa Catalog"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,t.yg)("p",null,"\u9664\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"type")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"hive.metastore.uris")," \u4e24\u4e2a\u5fc5\u987b\u53c2\u6570\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u66f4\u591a\u53c2\u6570\u6765\u4f20\u9012\u8fde\u63a5\u6240\u9700\u8981\u7684\u4fe1\u606f\u3002"),(0,t.yg)("p",null,"\u5982\u63d0\u4f9b HDFS HA \u4fe1\u606f\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,t.yg)("p",null,"\u540c\u65f6\u63d0\u4f9b HDFS HA \u4fe1\u606f\u548c Kerberos \u8ba4\u8bc1\u4fe1\u606f\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hive.metastore.sasl.enabled' = 'true',\n    'hive.metastore.kerberos.principal' = 'your-hms-principal',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n    'hadoop.security.authentication' = 'kerberos',\n    'hadoop.kerberos.keytab' = '/your-keytab-filepath/your.keytab',   \n    'hadoop.kerberos.principal' = 'your-principal@YOUR.COM',\n    'yarn.resourcemanager.principal' = 'your-rm-principal'\n);\n")),(0,t.yg)("p",null,"\u8bf7\u5728\u6240\u6709\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"BE"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"FE")," \u8282\u70b9\u4e0b\u653e\u7f6e ",(0,t.yg)("inlineCode",{parentName:"p"},"krb5.conf")," \u6587\u4ef6\u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"keytab")," \u8ba4\u8bc1\u6587\u4ef6\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"keytab")," \u8ba4\u8bc1\u6587\u4ef6\u8def\u5f84\u548c\u914d\u7f6e\u4fdd\u6301\u4e00\u81f4\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"krb5.conf")," \u6587\u4ef6\u9ed8\u8ba4\u653e\u7f6e\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"/etc/krb5.conf")," \u8def\u5f84\u3002\n",(0,t.yg)("inlineCode",{parentName:"p"},"hive.metastore.kerberos.principal")," \u7684\u503c\u9700\u8981\u548c\u6240\u8fde\u63a5\u7684 hive metastore \u7684\u540c\u540d\u5c5e\u6027\u4fdd\u6301\u4e00\u81f4\uff0c\u53ef\u4ece ",(0,t.yg)("inlineCode",{parentName:"p"},"hive-site.xml")," \u4e2d\u83b7\u53d6\u3002"),(0,t.yg)("p",null,"\u63d0\u4f9b Hadoop KMS \u52a0\u5bc6\u4f20\u8f93\u4fe1\u606f\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'dfs.encryption.key.provider.uri' = 'kms://http@kms_host:kms_port/kms'\n);\n")),(0,t.yg)("p",null,"hive\u6570\u636e\u5b58\u50a8\u5728JuiceFS\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'root',\n    'fs.jfs.impl' = 'io.juicefs.JuiceFileSystem',\n    'fs.AbstractFileSystem.jfs.impl' = 'io.juicefs.JuiceFS',\n    'juicefs.meta' = 'xxx'\n);\n")),(0,t.yg)("p",null,"hive\u5143\u6570\u636e\u5b58\u50a8\u5728Glue\uff0c\u6570\u636e\u5b58\u50a8\u5728S3\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.type" = "glue",\n    "aws.region" = "us-east-1",\n    "aws.glue.access-key" = "ak",\n    "aws.glue.secret-key" = "sk",\n    "AWS_ENDPOINT" = "s3.us-east-1.amazonaws.com",\n    "AWS_REGION" = "us-east-1",\n    "AWS_ACCESS_KEY" = "ak",\n    "AWS_SECRET_KEY" = "sk",\n    "use_path_style" = "true"\n);\n')),(0,t.yg)("p",null,"\u5728 1.2.1 \u7248\u672c\u4e4b\u540e\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u4fe1\u606f\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a Resource \u7edf\u4e00\u5b58\u50a8\uff0c\u7136\u540e\u5728\u521b\u5efa Catalog \u65f6\u4f7f\u7528\u8fd9\u4e2a Resource\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"# 1. \u521b\u5efa Resource\nCREATE RESOURCE hms_resource PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n    \n# 2. \u521b\u5efa Catalog \u5e76\u4f7f\u7528 Resource\uff0c\u8fd9\u91cc\u7684 Key Value \u4fe1\u606f\u4f1a\u8986\u76d6 Resource \u4e2d\u7684\u4fe1\u606f\u3002\nCREATE CATALOG hive WITH RESOURCE hms_resource PROPERTIES(\n    'key' = 'value'\n);\n")),(0,t.yg)("p",null,"\u521b\u5efa Catalog \u65f6\u53ef\u4ee5\u91c7\u7528\u53c2\u6570 ",(0,t.yg)("inlineCode",{parentName:"p"},"file.meta.cache.ttl-second")," \u6765\u8bbe\u7f6e File Cache \u81ea\u52a8\u5931\u6548\u65f6\u95f4\uff0c\u4e5f\u53ef\u4ee5\u5c06\u8be5\u503c\u8bbe\u7f6e\u4e3a 0 \u6765\u7981\u7528 File Cache\u3002\u65f6\u95f4\u5355\u4f4d\u4e3a\uff1a\u79d2\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n    'file.meta.cache.ttl-second' = '60'\n);\n")),(0,t.yg)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06 hive-site.xml \u653e\u5230 FE \u548c BE \u7684 conf \u76ee\u5f55\u4e0b\uff0c\u7cfb\u7edf\u4e5f\u4f1a\u81ea\u52a8\u8bfb\u53d6 hive-site.xml \u4e2d\u7684\u4fe1\u606f\u3002\u4fe1\u606f\u8986\u76d6\u7684\u89c4\u5219\u5982\u4e0b\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Resource \u4e2d\u7684\u4fe1\u606f\u8986\u76d6 hive-site.xml \u4e2d\u7684\u4fe1\u606f\u3002"),(0,t.yg)("li",{parentName:"ul"},"CREATE CATALOG PROPERTIES \u4e2d\u7684\u4fe1\u606f\u8986\u76d6 Resource \u4e2d\u7684\u4fe1\u606f\u3002")),(0,t.yg)("h3",{id:"hive-\u7248\u672c"},"Hive \u7248\u672c"),(0,t.yg)("p",null,"Doris \u53ef\u4ee5\u6b63\u786e\u8bbf\u95ee\u4e0d\u540c Hive \u7248\u672c\u4e2d\u7684 Hive Metastore\u3002\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDoris \u4f1a\u4ee5 Hive 2.3 \u7248\u672c\u7684\u517c\u5bb9\u63a5\u53e3\u8bbf\u95ee Hive Metastore\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u521b\u5efa Catalog \u65f6\u6307\u5b9a hive \u7684\u7248\u672c\u3002\u5982\u8bbf\u95ee Hive 1.1.0 \u7248\u672c\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hive.version' = '1.1.0'\n);\n")),(0,t.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,t.yg)("p",null,"\u9002\u7528\u4e8e Hive/Iceberge/Hudi"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"HMS Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"boolean"),(0,t.yg)("td",{parentName:"tr",align:null},"boolean"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,t.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"smallint"),(0,t.yg)("td",{parentName:"tr",align:null},"smallint"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"int"),(0,t.yg)("td",{parentName:"tr",align:null},"int"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"bigint"),(0,t.yg)("td",{parentName:"tr",align:null},"bigint"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"date"),(0,t.yg)("td",{parentName:"tr",align:null},"date"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"timestamp"),(0,t.yg)("td",{parentName:"tr",align:null},"datetime"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"float"),(0,t.yg)("td",{parentName:"tr",align:null},"float"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"double"),(0,t.yg)("td",{parentName:"tr",align:null},"double"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"char"),(0,t.yg)("td",{parentName:"tr",align:null},"char"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"varchar"),(0,t.yg)("td",{parentName:"tr",align:null},"varchar"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"decimal"),(0,t.yg)("td",{parentName:"tr",align:null},"decimal"),(0,t.yg)("td",{parentName:"tr",align:null})),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"array<type>")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"array<type>")),(0,t.yg)("td",{parentName:"tr",align:null},"\u652f\u6301array\u5d4c\u5957\uff0c\u5982 ",(0,t.yg)("inlineCode",{parentName:"td"},"array<array<int>>"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"map<KeyType, ValueType>")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"map<KeyType, ValueType>")),(0,t.yg)("td",{parentName:"tr",align:null},"\u6682\u4e0d\u652f\u6301\u5d4c\u5957\uff0cKeyType \u548c ValueType \u9700\u8981\u4e3a\u57fa\u7840\u7c7b\u578b")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"struct<col1: Type1, col2: Type2, ...>")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"struct<col1: Type1, col2: Type2, ...>")),(0,t.yg)("td",{parentName:"tr",align:null},"\u6682\u4e0d\u652f\u6301\u5d4c\u5957\uff0cType1, Type2, ... \u9700\u8981\u4e3a\u57fa\u7840\u7c7b\u578b")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"other"),(0,t.yg)("td",{parentName:"tr",align:null},"unsupported"),(0,t.yg)("td",{parentName:"tr",align:null})))),(0,t.yg)("h2",{id:"\u4f7f\u7528ranger\u8fdb\u884c\u6743\u9650\u6821\u9a8c"},"\u4f7f\u7528Ranger\u8fdb\u884c\u6743\u9650\u6821\u9a8c"),(0,t.yg)("version",{since:"dev"},(0,t.yg)("p",null,"Apache Ranger\u662f\u4e00\u4e2a\u7528\u6765\u5728Hadoop\u5e73\u53f0\u4e0a\u8fdb\u884c\u76d1\u63a7\uff0c\u542f\u7528\u670d\u52a1\uff0c\u4ee5\u53ca\u5168\u65b9\u4f4d\u6570\u636e\u5b89\u5168\u8bbf\u95ee\u7ba1\u7406\u7684\u5b89\u5168\u6846\u67b6\u3002"),(0,t.yg)("p",null,"\u76ee\u524ddoris\u652f\u6301ranger\u7684\u5e93\u3001\u8868\u3001\u5217\u6743\u9650\uff0c\u4e0d\u652f\u6301\u52a0\u5bc6\u3001\u884c\u6743\u9650\u7b49\u3002")),(0,t.yg)("h3",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,t.yg)("p",null,"\u8fde\u63a5\u5f00\u542f Ranger \u6743\u9650\u6821\u9a8c\u7684 Hive Metastore \u9700\u8981\u589e\u52a0\u914d\u7f6e & \u914d\u7f6e\u73af\u5883\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa Catalog \u65f6\u589e\u52a0\uff1a")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'"access_controller.properties.ranger.service.name" = "hive",\n"access_controller.class" = "org.apache.doris.catalog.authorizer.RangerHiveAccessControllerFactory",\n')),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u914d\u7f6e\u6240\u6709 FE \u73af\u5883\uff1a"),(0,t.yg)("ol",{parentName:"li"},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5c06 HMS conf \u76ee\u5f55\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6ranger-hive-audit.xml,ranger-hive-security.xml,ranger-policymgr-ssl.xml\u590d\u5236\u5230 <doris_home>/conf \u76ee\u5f55\u4e0b\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539 ranger-hive-security.xml \u7684\u5c5e\u6027,\u53c2\u8003\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n<configuration>\n    #The directory for caching permission data, needs to be writable\n    <property>\n        <name>ranger.plugin.hive.policy.cache.dir</name>\n        <value>/mnt/datadisk0/zhangdong/rangerdata</value>\n    </property>\n    #The time interval for periodically pulling permission data\n    <property>\n        <name>ranger.plugin.hive.policy.pollIntervalMs</name>\n        <value>30000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.client.connection.timeoutMs</name>\n        <value>60000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.client.read.timeoutMs</name>\n        <value>60000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.ssl.config.file</name>\n        <value></value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.url</name>\n        <value>http://172.21.0.32:6080</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.source.impl</name>\n        <value>org.apache.ranger.admin.client.RangerAdminRESTClient</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.service.name</name>\n        <value>hive</value>\n    </property>\n\n    <property>\n        <name>xasecure.hive.update.xapolicies.on.grant.revoke</name>\n        <value>true</value>\n    </property>\n\n</configuration>\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4e3a\u83b7\u53d6\u5230 Ranger \u9274\u6743\u672c\u8eab\u7684\u65e5\u5fd7\uff0c\u53ef\u5728 <doris_home>/conf \u76ee\u5f55\u4e0b\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6 log4j.properties\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u91cd\u542f FE\u3002"))))),(0,t.yg)("h3",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,t.yg)("p",null,"1.\u5728ranger\u7aef\u521b\u5efa\u7528\u6237user1\u5e76\u6388\u6743db1.table1.col1\u7684\u67e5\u8be2\u6743\u9650"),(0,t.yg)("p",null,"2.\u5728ranger\u7aef\u521b\u5efa\u89d2\u8272role1\u5e76\u6388\u6743db1.table1.col2\u7684\u67e5\u8be2\u6743\u9650"),(0,t.yg)("p",null,"3.\u5728doris\u521b\u5efa\u540c\u540d\u7528\u6237user1\uff0cuser1\u5c06\u76f4\u63a5\u62e5\u6709db1.table1.col1\u7684\u67e5\u8be2\u6743\u9650"),(0,t.yg)("p",null,"4.\u5728doris\u521b\u5efa\u540c\u540d\u89d2\u8272role1\uff0c\u5e76\u5c06role1\u5206\u914d\u7ed9user1\uff0cuser1\u5c06\u540c\u65f6\u62e5\u6709db1.table1.col1\u548ccol2\u7684\u67e5\u8be2\u6743\u9650"))}m.isMDXComponent=!0}}]);