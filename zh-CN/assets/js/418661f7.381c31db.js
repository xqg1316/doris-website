"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59294],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>f});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),g=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},m=function(e){var n=g(e.components);return t.createElement(o.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},N=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),y=g(a),N=r,f=y["".concat(o,".").concat(N)]||y[N]||c[N]||i;return a?t.createElement(f,p(p({ref:n},m),{},{components:a})):t.createElement(f,p({ref:n},m))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=N;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[y]="string"==typeof e?e:r,p[1]=l;for(var g=2;g<i;g++)p[g]=a[g];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}N.displayName="MDXCreateElement"},168097:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var t=a(58168),r=(a(296540),a(15680));const i={title:"FE \u914d\u7f6e\u9879",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},p=void 0,l={unversionedId:"admin-manual/config/fe-config-template",id:"version-3.0/admin-manual/config/fe-config-template",title:"FE \u914d\u7f6e\u9879",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/config/fe-config-template.md",sourceDirName:"admin-manual/config",slug:"/admin-manual/config/fe-config-template",permalink:"/zh-CN/docs/3.0/admin-manual/config/fe-config-template",draft:!1,tags:[],version:"3.0",frontMatter:{title:"FE \u914d\u7f6e\u9879",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4}},o={},g=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u67e5\u770b\u914d\u7f6e\u9879",id:"\u67e5\u770b\u914d\u7f6e\u9879",level:2},{value:"\u8bbe\u7f6e\u914d\u7f6e\u9879",id:"\u8bbe\u7f6e\u914d\u7f6e\u9879",level:2},{value:"\u5e94\u7528\u4e3e\u4f8b",id:"\u5e94\u7528\u4e3e\u4f8b",level:2},{value:"\u914d\u7f6e\u9879\u5217\u8868",id:"\u914d\u7f6e\u9879\u5217\u8868",level:2}],m={toc:g},y="wrapper";function c(e){let{components:n,...a}=e;return(0,r.yg)(y,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"doris-fe-\u914d\u7f6e\u53c2\u6570"},"Doris FE \u914d\u7f6e\u53c2\u6570"),(0,r.yg)("p",null,"\u8be5\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd FE \u7684\u76f8\u5173\u914d\u7f6e\u9879\u3002"),(0,r.yg)("p",null,"FE \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u901a\u5e38\u5b58\u653e\u5728 FE \u90e8\u7f72\u8def\u5f84\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/")," \u76ee\u5f55\u4e0b\u3002\u800c\u5728 0.14 \u7248\u672c\u4e2d\u4f1a\u5f15\u5165\u53e6\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe_custom.conf"),"\u3002\u8be5\u914d\u7f6e\u6587\u4ef6\u7528\u4e8e\u8bb0\u5f55\u7528\u6237\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u914d\u7f6e\u5e76\u6301\u4e45\u5316\u7684\u914d\u7f6e\u9879\u3002"),(0,r.yg)("p",null,"FE \u8fdb\u7a0b\u542f\u52a8\u540e\uff0c\u4f1a\u5148\u8bfb\u53d6 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u4e4b\u540e\u518d\u8bfb\u53d6 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," \u4e2d\u7684\u914d\u7f6e\u9879\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," \u4e2d\u7684\u914d\u7f6e\u9879\u4f1a\u8986\u76d6 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u4e2d\u76f8\u540c\u7684\u914d\u7f6e\u9879\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," \u6587\u4ef6\u7684\u4f4d\u7f6e\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_config_dir")," \u914d\u7f6e\u9879\u914d\u7f6e\u3002"),(0,r.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1.")," \u51fa\u4e8e\u7b80\u5316\u67b6\u6784\u7684\u76ee\u7684\uff0c\u76ee\u524d\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"mysql\u534f\u8bae\u4fee\u6539Config"),"\u7684\u65b9\u5f0f\u4fee\u6539\u914d\u7f6e\u53ea\u4f1a\u4fee\u6539\u672c\u5730 FE \u5185\u5b58\u4e2d\u7684\u6570\u636e\uff0c\u800c\u4e0d\u4f1a\u628a\u53d8\u66f4\u540c\u6b65\u5230\u6240\u6709 FE\u3002\n\u5bf9\u4e8e\u53ea\u4f1a\u5728 Master FE \u751f\u6548\u7684 Config \u9879\uff0c\u4fee\u6539\u8bf7\u6c42\u4f1a\u81ea\u52a8\u8f6c\u53d1\u5230 Master \u8282\u70b9"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2.")," \u9700\u8981\u6ce8\u610f",(0,r.yg)("inlineCode",{parentName:"p"},"forward_to_master"),"\u9009\u9879\u4f1a\u5f71\u54cd",(0,r.yg)("inlineCode",{parentName:"p"},"show frontend config"),"\u7684\u5c55\u793a\u7ed3\u679c\uff0c\u5982\u679c",(0,r.yg)("inlineCode",{parentName:"p"},"forward_to_master=true"),"\uff0c\u90a3\u4e48\u53ea\u4f1a\u5c55\u793a Master \u7684\u914d\u7f6e\uff08\u5373\u4f7f\u60a8\u6b64\u65f6\u8fde\u63a5\u7684\u662f Follower FE \u8282\u70b9\uff09\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u60a8\u65e0\u6cd5\u770b\u5230\u5bf9\u672c\u5730 FE \u914d\u7f6e\u7684\u4fee\u6539\uff1b\u5982\u679c\u671f\u671b show config \u8fd4\u56de\u672c\u5730 FE \u7684\u914d\u7f6e\u9879\uff0c\u90a3\u4e48\u6267\u884c\u547d\u4ee4",(0,r.yg)("inlineCode",{parentName:"p"},"set forward_to_master=false")),(0,r.yg)("h2",{id:"\u67e5\u770b\u914d\u7f6e\u9879"},"\u67e5\u770b\u914d\u7f6e\u9879"),(0,r.yg)("p",null,"FE \u7684\u914d\u7f6e\u9879\u6709\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u67e5\u770b\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"FE \u524d\u7aef\u9875\u9762\u67e5\u770b"),(0,r.yg)("p",{parentName:"li"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 FE \u524d\u7aef\u9875\u9762 ",(0,r.yg)("inlineCode",{parentName:"p"},"http://fe_host:fe_http_port/Configure"),"\u3002\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"Configure Info")," \u4e2d\u53ef\u4ee5\u770b\u5230\u5f53\u524d\u751f\u6548\u7684 FE \u914d\u7f6e\u9879\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u547d\u4ee4\u67e5\u770b"),(0,r.yg)("p",{parentName:"li"},"FE \u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u5728 MySQL \u5ba2\u6237\u7aef\u4e2d\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b FE \u7684\u914d\u7f6e\u9879\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"SHOW FRONTEND CONFIG;")),(0,r.yg)("p",{parentName:"li"},"\u7ed3\u679c\u4e2d\u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Key\uff1a\u914d\u7f6e\u9879\u540d\u79f0\u3002"),(0,r.yg)("li",{parentName:"ul"},"Value\uff1a\u5f53\u524d\u914d\u7f6e\u9879\u7684\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},"Type\uff1a\u914d\u7f6e\u9879\u503c\u7c7b\u578b\uff0c\u5982\u679c\u6574\u578b\u3001\u5b57\u7b26\u4e32\u3002"),(0,r.yg)("li",{parentName:"ul"},"IsMutable\uff1a\u662f\u5426\u53ef\u4ee5\u52a8\u6001\u914d\u7f6e\u3002\u5982\u679c\u4e3a true\uff0c\u8868\u793a\u8be5\u914d\u7f6e\u9879\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u52a8\u6001\u914d\u7f6e\u3002\u5982\u679c false\uff0c\u5219\u8868\u793a\u8be5\u914d\u7f6e\u9879\u53ea\u80fd\u5728 ",(0,r.yg)("inlineCode",{parentName:"li"},"fe.conf")," \u4e2d\u914d\u7f6e\u5e76\u4e14\u91cd\u542f FE \u540e\u751f\u6548\u3002"),(0,r.yg)("li",{parentName:"ul"},"MasterOnly\uff1a\u662f\u5426\u4e3a Master FE \u8282\u70b9\u72ec\u6709\u7684\u914d\u7f6e\u9879\u3002\u5982\u679c\u4e3a true\uff0c\u5219\u8868\u793a\u8be5\u914d\u7f6e\u9879\u4ec5\u5728 Master FE \u8282\u70b9\u6709\u610f\u4e49\uff0c\u5bf9\u5176\u4ed6\u7c7b\u578b\u7684 FE \u8282\u70b9\u65e0\u610f\u4e49\u3002\u5982\u679c\u4e3a false\uff0c\u5219\u8868\u793a\u8be5\u914d\u7f6e\u9879\u5728\u6240\u6709 FE \u8282\u70b9\u4e2d\u5747\u6709\u610f\u4e49\u3002"),(0,r.yg)("li",{parentName:"ul"},"Comment\uff1a\u914d\u7f6e\u9879\u7684\u63cf\u8ff0\u3002")))),(0,r.yg)("h2",{id:"\u8bbe\u7f6e\u914d\u7f6e\u9879"},"\u8bbe\u7f6e\u914d\u7f6e\u9879"),(0,r.yg)("p",null,"FE \u7684\u914d\u7f6e\u9879\u6709\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u9759\u6001\u914d\u7f6e"),(0,r.yg)("p",{parentName:"li"},"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/fe.conf")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u548c\u8bbe\u7f6e\u914d\u7f6e\u9879\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u4e2d\u7684\u914d\u7f6e\u9879\u4f1a\u5728 FE \u8fdb\u7a0b\u542f\u52a8\u65f6\u88ab\u8bfb\u53d6\u3002\u6ca1\u6709\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u4e2d\u7684\u914d\u7f6e\u9879\u5c06\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 MySQL \u534f\u8bae\u52a8\u6001\u914d\u7f6e"),(0,r.yg)("p",{parentName:"li"},"FE \u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u52a8\u6001\u8bbe\u7f6e\u914d\u7f6e\u9879\u3002\u8be5\u547d\u4ee4\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\u3002"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'ADMIN SET FRONTEND CONFIG ("fe_config_name" = "fe_config_value");')),(0,r.yg)("p",{parentName:"li"},"\u4e0d\u662f\u6240\u6709\u914d\u7f6e\u9879\u90fd\u652f\u6301\u52a8\u6001\u914d\u7f6e\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW FRONTEND CONFIG;")," \u547d\u4ee4\u7ed3\u679c\u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"IsMutable")," \u5217\u67e5\u770b\u662f\u5426\u652f\u6301\u52a8\u6001\u914d\u7f6e\u3002"),(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u662f\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"MasterOnly")," \u7684\u914d\u7f6e\u9879\uff0c\u5219\u8be5\u547d\u4ee4\u4f1a\u76f4\u63a5\u8f6c\u53d1\u7ed9 Master FE \u5e76\u4e14\u4ec5\u4fee\u6539 Master FE \u4e2d\u5bf9\u5e94\u7684\u914d\u7f6e\u9879\u3002"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u901a\u8fc7\u8be5\u65b9\u5f0f\u4fee\u6539\u7684\u914d\u7f6e\u9879\u5c06\u5728 FE \u8fdb\u7a0b\u91cd\u542f\u540e\u5931\u6548\u3002")),(0,r.yg)("p",{parentName:"li"},"\u66f4\u591a\u8be5\u547d\u4ee4\u7684\u5e2e\u52a9\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP ADMIN SET CONFIG;")," \u547d\u4ee4\u67e5\u770b\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 HTTP \u534f\u8bae\u52a8\u6001\u914d\u7f6e"),(0,r.yg)("p",{parentName:"li"},"\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"../../admin-manual/fe/set-config-action.md"},"Set Config Action")),(0,r.yg)("p",{parentName:"li"},"\u8be5\u65b9\u5f0f\u4e5f\u53ef\u4ee5\u6301\u4e45\u5316\u4fee\u6539\u540e\u7684\u914d\u7f6e\u9879\u3002\u914d\u7f6e\u9879\u5c06\u6301\u4e45\u5316\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe_custom.conf")," \u6587\u4ef6\u4e2d\uff0c\u5728 FE \u91cd\u542f\u540e\u4ecd\u4f1a\u751f\u6548\u3002"))),(0,r.yg)("h2",{id:"\u5e94\u7528\u4e3e\u4f8b"},"\u5e94\u7528\u4e3e\u4f8b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"async_pending_load_task_pool_size")),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW FRONTEND CONFIG;")," \u53ef\u4ee5\u67e5\u770b\u5230\u8be5\u914d\u7f6e\u9879\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"IsMutable")," \u4e3a false\uff09\u3002\u5219\u9700\u8981\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u4e2d\u6dfb\u52a0\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"async_pending_load_task_pool_size=20")),(0,r.yg)("p",{parentName:"li"},"\u4e4b\u540e\u91cd\u542f FE \u8fdb\u7a0b\u4ee5\u751f\u6548\u8be5\u914d\u7f6e\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"dynamic_partition_enable")),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW FRONTEND CONFIG;")," \u53ef\u4ee5\u67e5\u770b\u5230\u8be5\u914d\u7f6e\u9879\u53ef\u4ee5\u52a8\u6001\u914d\u7f6e\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"IsMutable")," \u4e3a true\uff09\u3002\u5e76\u4e14\u662f Master FE \u72ec\u6709\u914d\u7f6e\u3002\u5219\u9996\u5148\u6211\u4eec\u53ef\u4ee5\u8fde\u63a5\u5230\u4efb\u610f FE\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u4fee\u6539\u914d\u7f6e\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true");`\n')),(0,r.yg)("p",{parentName:"li"},"\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u4fee\u6539\u540e\u7684\u503c\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"set forward_to_master=true;\nSHOW FRONTEND CONFIG;\n")),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0a\u65b9\u5f0f\u4fee\u6539\u540e\uff0c\u5982\u679c Master FE \u91cd\u542f\u6216\u8fdb\u884c\u4e86 Master \u5207\u6362\uff0c\u5219\u914d\u7f6e\u5c06\u5931\u6548\u3002\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u4e2d\u76f4\u63a5\u6dfb\u52a0\u914d\u7f6e\u9879\uff0c\u5e76\u91cd\u542f FE \u540e\uff0c\u6c38\u4e45\u751f\u6548\u8be5\u914d\u7f6e\u9879\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"max_distribution_pruner_recursion_depth")),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW FRONTEND CONFIG;")," \u53ef\u4ee5\u67e5\u770b\u5230\u8be5\u914d\u7f6e\u9879\u53ef\u4ee5\u52a8\u6001\u914d\u7f6e\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"IsMutable")," \u4e3a true\uff09\u3002\u5e76\u4e14\u4e0d\u662f Master FE \u72ec\u6709\u914d\u7f6e\u3002"),(0,r.yg)("p",{parentName:"li"},"\u540c\u6837\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u52a8\u6001\u4fee\u6539\u914d\u7f6e\u7684\u547d\u4ee4\u4fee\u6539\u8be5\u914d\u7f6e\u3002\u56e0\u4e3a\u8be5\u914d\u7f6e\u4e0d\u662f Master FE \u72ec\u6709\u914d\u7f6e\uff0c\u6240\u4ee5\u9700\u8981\u5355\u72ec\u8fde\u63a5\u5230\u4e0d\u540c\u7684 FE\uff0c\u8fdb\u884c\u52a8\u6001\u4fee\u6539\u914d\u7f6e\u7684\u64cd\u4f5c\uff0c\u8fd9\u6837\u624d\u80fd\u4fdd\u8bc1\u6240\u6709 FE \u90fd\u4f7f\u7528\u4e86\u4fee\u6539\u540e\u7684\u914d\u7f6e\u503c"))),(0,r.yg)("h2",{id:"\u914d\u7f6e\u9879\u5217\u8868"},"\u914d\u7f6e\u9879\u5217\u8868"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\uff1a"),(0,r.yg)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u5185\u5bb9\u7531 ",(0,r.yg)("inlineCode",{parentName:"p"},"docs/generate-config-and-variable-doc.sh")," \u81ea\u52a8\u751f\u6210\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"\u5982\u9700\u4fee\u6539\uff0c\u8bf7\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"fe/fe-common/src/main/java/org/apache/doris/common/Config.java")," \u4e2d\u7684\u63cf\u8ff0\u4fe1\u606f\u3002")),(0,r.yg)("p",null,"<--DOC_PLACEHOLDER--\x3e"))}c.isMDXComponent=!0}}]);