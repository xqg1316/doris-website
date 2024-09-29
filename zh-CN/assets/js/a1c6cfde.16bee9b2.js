"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[798576],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var i=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=i.createContext({}),d=function(e){var n=i.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),f=t,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return r?i.createElement(m,a(a({ref:n},u),{},{components:r})):i.createElement(m,a({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:t,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},235438:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=r(58168),t=(r(296540),r(15680));const o={title:"Fe Version Info Action",language:"zh-CN"},a=void 0,s={unversionedId:"admin-manual/fe/fe-version-info-action",id:"version-2.0/admin-manual/fe/fe-version-info-action",title:"Fe Version Info Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/fe-version-info-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/fe-version-info-action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/fe-version-info-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Fe Version Info Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Extra Basepath Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/extra-basepath-action"},next:{title:"Get DDL Statement Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/get-ddl-stmt-action"}},l={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:d},c="wrapper";function p(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,i.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"request"},"Request"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /api/fe_version_info")),(0,t.yg)("h2",{id:"description"},"Description"),(0,t.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6 fe \u8282\u70b9\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,t.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,t.yg)("p",null,"\u65e0"),(0,t.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,t.yg)("p",null,"\u65e0"),(0,t.yg)("h2",{id:"request-body"},"Request body"),(0,t.yg)("p",null,"\u65e0"),(0,t.yg)("h2",{id:"response"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'```\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n')),(0,t.yg)("h2",{id:"examples"},"Examples"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'```\nGET /api/fe_version_info\n\nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n')))}p.isMDXComponent=!0}}]);