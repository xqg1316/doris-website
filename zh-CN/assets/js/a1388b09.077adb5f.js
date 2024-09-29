"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[686479],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},999087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_LEAD",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/window-functions/window-function-lead",id:"sql-manual/sql-functions/window-functions/window-function-lead",title:"WINDOW_FUNCTION_LEAD",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/window-functions/window-function-lead.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-lead",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-lead",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW_FUNCTION_LEAD",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_LAST_VALUE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-last-value"},next:{title:"WINDOW_FUNCTION_LAG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-lag"}},c={},s=[{value:"WINDOW FUNCTION LEAD",id:"window-function-lead",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-lead"},"WINDOW FUNCTION LEAD"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"LEAD() \u65b9\u6cd5\u7528\u6765\u8ba1\u7b97\u5f53\u524d\u884c\u5411\u540e\u6570\u82e5\u5e72\u884c\u7684\u503c\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"LEAD(expr, offset, default) OVER (partition_by_clause order_by_clause)\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"\u8ba1\u7b97\u7b2c\u4e8c\u5929\u7684\u6536\u76d8\u4ef7\u5bf9\u6bd4\u5f53\u5929\u6536\u76d8\u4ef7\u7684\u8d70\u52bf\uff0c\u5373\u7b2c\u4e8c\u5929\u6536\u76d8\u4ef7\u6bd4\u5f53\u5929\u9ad8\u8fd8\u662f\u4f4e\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'select stock_symbol, closing_date, closing_price,    \ncase   \n(lead(closing_price,1, 0)   \nover (partition by stock_symbol order by closing_date)-closing_price) > 0   \nwhen true then "higher"   \nwhen false then "flat or lower"    \nend as "trending"   \nfrom stock_ticker    \norder by closing_date;\n\n| stock_symbol | closing_date        | closing_price | trending      |\n|--------------|---------------------|---------------|---------------|\n| JDR          | 2014-09-13 00:00:00 | 12.86         | higher        |\n| JDR          | 2014-09-14 00:00:00 | 12.89         | higher        |\n| JDR          | 2014-09-15 00:00:00 | 12.94         | flat or lower |\n| JDR          | 2014-09-16 00:00:00 | 12.55         | higher        |\n| JDR          | 2014-09-17 00:00:00 | 14.03         | higher        |\n| JDR          | 2014-09-18 00:00:00 | 14.75         | flat or lower |\n| JDR          | 2014-09-19 00:00:00 | 13.98         | flat or lower |\n')),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,LEAD\n")))}p.isMDXComponent=!0}}]);