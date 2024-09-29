"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[945237],{15680:(e,r,a)=>{a.d(r,{xA:()=>p,yg:()=>c});var t=a(296540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=t.createContext({}),s=function(e){var r=t.useContext(u),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},p=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},y="mdxType",_={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=s(a),d=n,c=y["".concat(u,".").concat(d)]||y[d]||_[d]||o;return a?t.createElement(c,l(l({ref:r},p),{},{components:a})):t.createElement(c,l({ref:r},p))}));function c(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[y]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},574982:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>_,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=a(58168),n=(a(296540),a(15680));const o={title:"\u5de5\u4f5c\u8d1f\u8f7d\u5206\u6790",language:"zh-CN"},l=void 0,i={unversionedId:"admin-manual/resource-admin/workload-analysis",id:"version-3.0/admin-manual/resource-admin/workload-analysis",title:"\u5de5\u4f5c\u8d1f\u8f7d\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/resource-admin/workload-analysis.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/workload-analysis",permalink:"/zh-CN/docs/3.0/admin-manual/resource-admin/workload-analysis",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u5de5\u4f5c\u8d1f\u8f7d\u5206\u6790",language:"zh-CN"},sidebar:"docs",previous:{title:"Workload Policy",permalink:"/zh-CN/docs/3.0/admin-manual/resource-admin/workload-policy"},next:{title:"Resource Group",permalink:"/zh-CN/docs/3.0/admin-manual/resource-admin/multi-tenant"}},u={},s=[{value:"Workload\u7cfb\u7edf\u8868\u4ecb\u7ecd",id:"workload\u7cfb\u7edf\u8868\u4ecb\u7ecd",level:2},{value:"active_queries",id:"active_queries",level:3},{value:"backend_active_tasks",id:"backend_active_tasks",level:3},{value:"workload_group_resource_usage",id:"workload_group_resource_usage",level:3},{value:"\u5de5\u4f5c\u8d1f\u8f7d\u5206\u6790\u4e0e\u5904\u7406\u65b9\u6cd5",id:"\u5de5\u4f5c\u8d1f\u8f7d\u5206\u6790\u4e0e\u5904\u7406\u65b9\u6cd5",level:2},{value:"\u5e38\u7528SQL",id:"\u5e38\u7528sql",level:2}],p={toc:s},y="wrapper";function _(e){let{components:r,...a}=e;return(0,n.yg)(y,(0,t.A)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Doris\u652f\u6301\u901a\u8fc7Workload\u7cfb\u7edf\u8868\u5bf9\u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u8fdb\u884c\u5206\u6790\uff0c\u53ef\u4ee5\u89e3\u51b3\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u5e2e\u52a9\u7528\u6237\u4e86\u89e3\u6bcf\u4e2aWorkload Group\u7684\u8d44\u6e90\u5229\u7528\u7387\uff0c\u5408\u7406\u7684\u8bbe\u7f6e\u8d44\u6e90\u4e0a\u9650\uff0c\u907f\u514d\u8d44\u6e90\u7684\u6d6a\u8d39\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u5f53\u96c6\u7fa4\u7531\u4e8e\u8d44\u6e90\u4e0d\u8db3\u5bfc\u81f4\u53ef\u7528\u6027\u4e0b\u964d\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u7cfb\u7edf\u8868\u5feb\u901f\u5b9a\u4f4d\u51fa\u76ee\u524d\u8d44\u6e90\u4f7f\u7528\u7684\u5206\u5e03\u60c5\u51b5\uff0c\u4ece\u505a\u51fa\u76f8\u5e94\u7684\u8d44\u6e90\u7ba1\u63a7\u51b3\u7b56\uff0c\u6062\u590d\u96c6\u7fa4\u7684\u53ef\u7528\u6027\u3002")),(0,n.yg)("h2",{id:"workload\u7cfb\u7edf\u8868\u4ecb\u7ecd"},"Workload\u7cfb\u7edf\u8868\u4ecb\u7ecd"),(0,n.yg)("p",null,"\u76ee\u524d\u7cfb\u7edf\u8868\u4e3b\u8981\u5728",(0,n.yg)("inlineCode",{parentName:"p"},"information_schema"),"\u5e93\u91cc\u3002"),(0,n.yg)("h3",{id:"active_queries"},"active_queries"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"active_queries"),"\u8868\u8bb0\u5f55\u4e86\u5f53\u524d\u5728FE\u4e0a\u67e5\u8be2\u7684\u6267\u884c\u4fe1\u606f\uff0c\u5b57\u6bb5\u7684\u8be6\u7ec6\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"query_id\uff0c\u67e5\u8be2\u7684id"),(0,n.yg)("li",{parentName:"ul"},"query_start_time\uff0c\u67e5\u8be2\u5f00\u59cb\u6267\u884c\u7684\u65f6\u95f4\uff1b\u5982\u679c\u67e5\u8be2\u6709\u6392\u961f\u7684\u8bdd\uff0c\u90a3\u4e48\u5c31\u4ee3\u8868\u6392\u961f\u7ed3\u675f\u4e4b\u540e\u5f00\u59cb\u6267\u884c\u7684\u65f6\u95f4"),(0,n.yg)("li",{parentName:"ul"},"query_time_ms\uff0c\u67e5\u8be2\u7684\u8017\u65f6\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,n.yg)("li",{parentName:"ul"},"workload_group_id\uff0c\u67e5\u8be2\u4f7f\u7528\u7684workload group\u7684id"),(0,n.yg)("li",{parentName:"ul"},"database\uff0c\u67e5\u8be2\u4e2d\u7684sql\u4f7f\u7528\u7684database"),(0,n.yg)("li",{parentName:"ul"},"frontend_instance\uff0c\u67e5\u8be2\u6240\u5728FE\u7684\u8282\u70b9\u540d\u79f0"),(0,n.yg)("li",{parentName:"ul"},"queue_start_time\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6765\u65f6\u8fdb\u5165\u4e86\u6392\u961f\u4e86\u903b\u8f91\uff0c\u90a3\u4e48\u4ee3\u8868\u67e5\u8be2\u6392\u961f\u5f00\u59cb\u7684\u65f6\u95f4\u70b9"),(0,n.yg)("li",{parentName:"ul"},"queue_end_time\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6765\u65f6\u8fdb\u5165\u4e86\u6392\u961f\u7684\u903b\u8f91\uff0c\u90a3\u4e48\u4ee3\u8868\u67e5\u8be2\u6392\u961f\u7ed3\u675f\u7684\u65f6\u95f4\u70b9"),(0,n.yg)("li",{parentName:"ul"},"query_status\uff0c\u67e5\u8be2\u76ee\u524d\u7684\u72b6\u6001\uff0c\u76ee\u524d\u4e3b\u8981\u6709\u4e24\u4e2a\u53d6\u503cRUNNING\u548cQUEUED\uff0cRUNNIG\u4ee3\u8868\u67e5\u8be2\u5904\u4e8e\u8fd0\u884c\u72b6\u6001\uff1bQUEUED\u4ee3\u8868\u5f53\u524d\u67e5\u8be2\u6b63\u5728\u6392\u961f"),(0,n.yg)("li",{parentName:"ul"},"sql\uff0c\u67e5\u8be2\u7684sql\u6587\u672c")),(0,n.yg)("h3",{id:"backend_active_tasks"},"backend_active_tasks"),(0,n.yg)("p",null,"\u4e00\u4e2a\u67e5\u8be2\u901a\u5e38\u4f1a\u88ab\u5206\u6210\u591a\u4e2afragment\u5728\u591a\u4e2aBE\u4e0a\u6267\u884c\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"backend_active_tasks"),"\u5c31\u4ee3\u8868\u4e86\u4e00\u4e2a\u67e5\u8be2\u5728\u5355\u4e2aBE\u4e0a\u4f7f\u7528\u7684CPU\u548c\u5185\u5b58\u8d44\u6e90\u7684\u603b\u91cf\u3002\u5982\u679c\u8fd9\u4e2a\u67e5\u8be2\u5728\u5355BE\u4e0a\u6709\u591a\u4e2a\u5e76\u53d1\u548c\u591a\u4e2afragment\uff0c\u90a3\u4e48\u4e5f\u4f1a\u6c47\u603b\u6210\u4e00\u884c\u6570\u636e\u3002\n\u5b57\u6bb5\u8be6\u7ec6\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"be_id\uff0cbe\u7684id"),(0,n.yg)("li",{parentName:"ul"},"fe_host\uff0c\u4ee3\u8868\u4e86\u8fd9\u4e2a\u67e5\u8be2\u662f\u4ece\u54ea\u4e2aFE\u63d0\u4ea4\u7684"),(0,n.yg)("li",{parentName:"ul"},"query_id\uff0c\u67e5\u8be2\u7684id"),(0,n.yg)("li",{parentName:"ul"},"task_time_ms\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u7684\u6267\u884c\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,n.yg)("li",{parentName:"ul"},"task_cpu_time_ms\uff0c\u67e5\u8be2\u5728be\u4e0a\u6267\u884c\u65f6\u7684cpu\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,n.yg)("li",{parentName:"ul"},"scan_rows\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u626b\u63cf\u7684\u884c\u6570\uff0c\u5982\u679c\u626b\u63cf\u4e86\u591a\u4e2a\u8868\uff0c\u90a3\u4e48\u5c31\u662f\u591a\u4e2a\u8868\u7684\u7d2f\u52a0\u503c"),(0,n.yg)("li",{parentName:"ul"},"scan_bytes\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u626b\u63cf\u7684\u5b57\u8282\u6570\uff0c\u5982\u679c\u626b\u63cf\u4e86\u591a\u4e2a\u8868\uff0c\u90a3\u4e48\u5c31\u662f\u591a\u4e2a\u8868\u7684\u7d2f\u52a0\u503c"),(0,n.yg)("li",{parentName:"ul"},"be_peak_memory_bytes\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u4f7f\u7528\u7684\u5185\u5b58\u7684\u5cf0\u503c\uff0c\u5355\u4f4d\u662f\u5b57\u8282"),(0,n.yg)("li",{parentName:"ul"},"current_used_memory_bytes\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u4f7f\u7528\u4e2d\u7684\u5185\u5b58\u91cf\uff0c\u5355\u4f4d\u662f\u5b57\u8282"),(0,n.yg)("li",{parentName:"ul"},"shuffle_send_bytes\uff0c\u67e5\u8be2\u5728\u5f53\u524d\u8282\u70b9\u4f5c\u4e3ashuffle\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u5b57\u8282\u6570"),(0,n.yg)("li",{parentName:"ul"},"shuffle_send_rows\uff0c\u67e5\u8be2\u5728\u5f53\u524d\u8282\u70b9\u4f5c\u4e3ashuffle\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u884c\u6570")),(0,n.yg)("h3",{id:"workload_group_resource_usage"},"workload_group_resource_usage"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"workload_group_resource_usage"),"\u5b9e\u65f6\u5c55\u793a\u4e86Workload Group\u5f53\u524d\u7684\u8d44\u6e90\u7528\u91cf\u3002\n\u5b57\u6bb5\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"be_id\uff0cbe\u7684id"),(0,n.yg)("li",{parentName:"ul"},"workload_group_id\uff0cworkload group\u7684id"),(0,n.yg)("li",{parentName:"ul"},"memory_usage_bytes\uff0cworkload group\u7684\u5185\u5b58\u7528\u91cf"),(0,n.yg)("li",{parentName:"ul"},"cpu_usage_percent\uff0cworkload group CPU\u7528\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u8ba1\u7b97\u65b9\u5f0f\u4e3a1s\u5185Workload Group\u603b\u7684CPU\u6d3b\u8dc3\u65f6\u95f4/1s\u5185\u603b\u53ef\u7528\u7684CPU\u65f6\u95f4\uff0c\u8be5\u503c\u53d6\u7684\u662f\u6700\u8fd110s\u7684\u5e73\u5747\u503c\u3002"),(0,n.yg)("li",{parentName:"ul"},"local_scan_bytes_per_second\uff0cworkload group\u8bfb\u672c\u5730\u6587\u4ef6\u7684\u6bcf\u79d2\u5b57\u8282\u6570\u3002\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8eDoris\u7684Page Cache\u548c\u64cd\u4f5c\u7cfb\u7edf\u7f13\u5b58\u7684\u5b58\u5728\uff0c\u8be5\u503c\u901a\u5e38\u8981\u5927\u4e8e\u4f7f\u7528pidstat\u7b49\u7cfb\u7edf\u5de5\u5177\u76d1\u63a7\u5230\u7684\u503c\u3002\u5982\u679c\u914d\u7f6e\u4e86\u591a\u4e2a\u6587\u4ef6\u5939\uff0c\u90a3\u4e48\u8be5\u503c\u4e3a\u6240\u6709\u6587\u4ef6\u5939\u8bfbIO\u7684\u7d2f\u52a0\u503c\u3002\n\u5982\u679c\u9700\u8981\u6bcf\u4e2a\u6587\u4ef6\u5939\u7c92\u5ea6\u7684\u8bfbIO\u541e\u5410\uff0c\u53ef\u4ee5\u5728BE\u7684bvar\u76d1\u63a7\u4e0a\u770b\u5230\u660e\u7ec6\u6570\u636e\u3002"),(0,n.yg)("li",{parentName:"ul"},"remote_scan_bytes_per_second\uff0cworkload group\u8bfb\u8fdc\u7a0b\u6570\u636e\u7684\u6bcf\u79d2\u5b57\u8282\u6570\u3002")),(0,n.yg)("h2",{id:"\u5de5\u4f5c\u8d1f\u8f7d\u5206\u6790\u4e0e\u5904\u7406\u65b9\u6cd5"},"\u5de5\u4f5c\u8d1f\u8f7d\u5206\u6790\u4e0e\u5904\u7406\u65b9\u6cd5"),(0,n.yg)("p",null,"\u5f53\u901a\u8fc7\u76d1\u63a7\u53d1\u73b0\u96c6\u7fa4\u7684\u53ef\u7528\u6027\u4e0b\u964d\u65f6\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6d41\u7a0b\u8fdb\u884c\u5904\u7406\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u5148\u901a\u8fc7\u76d1\u63a7\u5927\u81f4\u5224\u65ad\u76ee\u524d\u96c6\u7fa4\u7684\u74f6\u9888\u70b9\uff0c\u6bd4\u5982\u662f\u5185\u5b58\u7528\u91cf\u8fc7\u9ad8\uff0cCPU\u7528\u91cf\u8fc7\u9ad8\uff0c\u8fd8\u662fIO\u8fc7\u9ad8\uff0c\u5982\u679c\u90fd\u5f88\u9ad8\uff0c\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u4f18\u5148\u89e3\u51b3\u5185\u5b58\u7684\u95ee\u9898\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u786e\u5b9a\u4e86\u96c6\u7fa4\u74f6\u9888\u70b9\u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,n.yg)("inlineCode",{parentName:"li"},"workload_group_resource_usage"),"\u8868\u6765\u67e5\u770b\u76ee\u524d\u8d44\u6e90\u7528\u91cf\u6700\u9ad8\u7684Group\uff0c\u6bd4\u5982\u662f\u5185\u5b58\u74f6\u9888\uff0c\u90a3\u4e48\u53ef\u4ee5\u5148\u627e\u51fa\u5185\u5b58\u7528\u91cf\u6700\u9ad8\u7684N\u4e2aGroup\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u786e\u5b9a\u4e86\u8d44\u6e90\u7528\u91cf\u6700\u9ad8\u7684Group\u4e4b\u540e\uff0c\u9996\u5148\u53ef\u4ee5\u5c1d\u8bd5\u8c03\u4f4e\u8fd9\u4e2aGroup\u7684\u67e5\u8be2\u5e76\u53d1\uff0c\u56e0\u4e3a\u6b64\u65f6\u96c6\u7fa4\u8d44\u6e90\u5df2\u7ecf\u5f88\u7d27\u5f20\u4e86\uff0c\u8981\u907f\u514d\u6301\u7eed\u6709\u65b0\u7684\u67e5\u8be2\u8fdb\u6765\u8017\u5c3d\u96c6\u7fa4\u7684\u8d44\u6e90\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u5bf9\u5f53\u524dGroup\u7684\u67e5\u8be2\u8fdb\u884c\u964d\u7ea7\uff0c\u6839\u636e\u74f6\u9888\u70b9\u7684\u4e0d\u540c\uff0c\u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6cd5\uff1a")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5982\u679c\u662fCPU\u74f6\u9888\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c1d\u8bd5\u628a\u8fd9\u4e2aGroup\u7684CPU\u4fee\u6539\u4e3a\u786c\u9650\uff0c\u5e76\u5c06",(0,n.yg)("inlineCode",{parentName:"li"},"cpu_hard_limit"),"\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u8f83\u4f4e\u7684\u503c\uff0c\u4e3b\u52a8\u8ba9\u51faCPU\u8d44\u6e90\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5982\u679c\u662fIO\u74f6\u9888\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,n.yg)("inlineCode",{parentName:"li"},"read_bytes_per_second"),"\u53c2\u6570\u9650\u5236\u8be5Group\u7684\u6700\u5927IO\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f\u5185\u5b58\u74f6\u9888\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u8be5Group\u7684\u5185\u5b58\u4e3a\u786c\u9650\uff0c\u5e76\u8c03\u4f4e",(0,n.yg)("inlineCode",{parentName:"li"},"memory_limit"),"\u7684\u503c\uff0c\u6765\u91ca\u653e\u90e8\u5206\u5185\u5b58\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5f53\u524dGroup\u5927\u91cf\u67e5\u8be2\u5931\u8d25\u3002")),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"\u5b8c\u6210\u4ee5\u4e0a\u6b65\u9aa4\u540e\uff0c\u901a\u5e38\u96c6\u7fa4\u7684\u53ef\u7528\u6027\u4f1a\u6709\u6240\u6062\u590d\u3002\u6b64\u65f6\u53ef\u4ee5\u505a\u66f4\u8fdb\u4e00\u6b65\u7684\u5206\u6790\uff0c\u4e5f\u5c31\u662f\u5f15\u8d77\u8be5Group\u8d44\u6e90\u7528\u91cf\u5347\u9ad8\u7684\u4e3b\u8981\u539f\u56e0\uff0c\n\u662f\u8fd9\u4e2aGroup\u7684\u6574\u4f53\u67e5\u8be2\u5e76\u53d1\u5347\u9ad8\u5bfc\u81f4\u7684\u8fd8\u662f\u67d0\u4e9b\u5927\u67e5\u8be2\u5bfc\u81f4\u7684\uff0c\u5982\u679c\u662f\u67d0\u4e9b\u5927\u67e5\u8be2\u5bfc\u81f4\u7684\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u5feb\u901f\u6740\u6b7b\u8fd9\u4e9b\u5927\u67e5\u8be2\u7684\u65b9\u5f0f\u8fdb\u884c\u6545\u969c\u6062\u590d\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528",(0,n.yg)("inlineCode",{parentName:"li"},"backend_active_tasks"),"\u7ed3\u5408",(0,n.yg)("inlineCode",{parentName:"li"},"active_queries"),"\u627e\u51fa\u76ee\u524d\u96c6\u7fa4\u4e2d\u8d44\u6e90\u7528\u91cf\u6bd4\u8f83\u5f02\u5e38\u7684SQL\uff0c\u7136\u540e\u901a\u8fc7kill\u8bed\u53e5\u6740\u6b7b\u8fd9\u4e9bSQL\u91ca\u653e\u8d44\u6e90\u3002")),(0,n.yg)("h2",{id:"\u5e38\u7528sql"},"\u5e38\u7528SQL"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cactive_queries\u8868\u8bb0\u5f55\u4e86\u5728FE\u8fd0\u884c\u7684query\uff0cbackend_active_tasks\u8bb0\u5f55\u4e86\u5728BE\u8fd0\u884c\u7684query\uff0c\u5e76\u975e\u6240\u6709query\u8fd0\u884c\u65f6\u5728FE\u6ce8\u518c\uff0c\u6bd4\u5982stream load\u5c31\u5e76\u672a\u5728FE\u6ce8\u518c\u3002\n\u56e0\u6b64\u4f7f\u7528backend_active_tasks\u8868left join active_queries\u5982\u679c\u6ca1\u6709\u5339\u914d\u7684\u7ed3\u679c\u5c5e\u4e8e\u6b63\u5e38\u60c5\u51b5\u3002\n\u5f53\u4e00\u4e2aQuery\u662fselect\u67e5\u8be2\u65f6\uff0c\u90a3\u4e48active_queries\u548cbackend_active_tasks\u4e2d\u8bb0\u5f55\u7684queryId\u662f\u4e00\u81f4\u7684\u3002\u5f53\u4e00\u4e2aQuery\u662fstream load\u65f6\uff0c\u90a3\u4e48\u5728active_queries\u8868\u4e2d\u7684queryId\u4e3a\u7a7a\uff0cbackend_active_tasks\u7684queryId\u662f\u8be5stream load\u7684Id\u3002")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u67e5\u770b\u76ee\u524d\u6240\u6709\u7684Workload Group\u5e76\u4f9d\u6b21\u6309\u7167\u5185\u5b58/CPU/IO\u964d\u5e8f\u663e\u793a\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"select be_id,workload_group_id,memory_usage_bytes,cpu_usage_percent,local_scan_bytes_per_second \n   from workload_group_resource_usage\norder by  memory_usage_bytes,cpu_usage_percent,local_scan_bytes_per_second desc\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"CPU\u4f7f\u7528topN\u7684sql"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t2.`sql`\nfrom\n(select query_id, query_type,sum(task_cpu_time_ms) as cpu_time from backend_active_tasks group by query_id, query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id\norder by cpu_time desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5185\u5b58\u4f7f\u7528topN\u7684sql"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t1.mem_used\nfrom\n(select query_id, query_type, sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id, query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by mem_used desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u626b\u63cf\u6570\u636e\u91cftopN\u7684sql"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t1.query_id as be_query_id,\n        t1.query_type,\n        t2.query_id,\n        t2.workload_group_id,\n        t1.scan_rows,\n        t1.scan_bytes\nfrom\n(select query_id, query_type, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id,query_type) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by scan_rows desc,scan_bytes desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5404\u4e2aworkload group\u7684scan\u6570\u636e\u91cf"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.workload_group_id,\n        sum(t1.scan_rows) as wg_scan_rows,\n        sum(t1.scan_bytes) as wg_scan_bytes\nfrom\n(select query_id, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by t2.workload_group_id\norder by wg_scan_rows desc,wg_scan_bytes desc\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u67e5\u770b\u5404\u4e2aworkload group\u6392\u961f\u7684\u90fd\u662f\u54ea\u4e9b\u67e5\u8be2\uff0c\u4ee5\u53ca\u6392\u961f\u7684\u65f6\u95f4"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n         workload_group_id,\n         query_id,\n         query_status,\n         now() - queue_start_time as queued_time\nfrom \n     active_queries\nwhere query_status='queued'\norder by workload_group_id\n")))))}_.isMDXComponent=!0}}]);