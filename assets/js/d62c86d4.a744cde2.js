"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[657866],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,y=d["".concat(s,".").concat(p)]||d[p]||f[p]||i;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},555933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_FIRST_VALUE",language:"en"},l=void 0,a={unversionedId:"sql-manual/sql-functions/window-functions/window-function-first-value",id:"version-2.1/sql-manual/sql-functions/window-functions/window-function-first-value",title:"WINDOW_FUNCTION_FIRST_VALUE",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/window-functions/window-function-first-value.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-first-value",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-first-value",draft:!1,tags:[],version:"2.1",frontMatter:{title:"WINDOW_FUNCTION_FIRST_VALUE",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_CUME_DIST",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-cume-dist"},next:{title:"WINDOW_FUNCTION_LAST_VALUE",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-last-value"}},s={},u=[{value:"WINDOW FUNCTION FIRST_VALUE",id:"window-function-first_value",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},d="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-first_value"},"WINDOW FUNCTION FIRST_VALUE"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"FIRST_VALUE() returns the first value in the window's range , ignore_null determines whether to ignore null values , the ignore_null of default value is false ."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"FIRST_VALUE(expr[, ignore_null]) OVER(partition_by_clause order_by_clause [window_clause])\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"We have the following data"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"}," select id, myday, time_col, state from t;\n \n | id   | myday | time_col    | state |\n |------|-------|-------------|-------|\n |    3 |    21 | 04-21-13    |     3 |\n |    7 |    22 | 04-22-10-24 |  NULL |\n |    8 |    22 | 04-22-10-25 |     9 |\n |   10 |    23 | 04-23-12    |    10 |\n |    4 |    22 | 04-22-10-21 |  NULL |\n |    9 |    23 | 04-23-11    |  NULL |\n |    1 |    21 | 04-21-11    |  NULL |\n |    5 |    22 | 04-22-10-22 |  NULL |\n |   12 |    24 | 02-24-10-21 |  NULL |\n |    2 |    21 | 04-21-12    |     2 |\n |    6 |    22 | 04-22-10-23 |     5 |\n |   11 |    23 | 04-23-13    |  NULL |\n")),(0,o.yg)("p",null,"Use FIRST_VALUE() to group by myday and return the value of the first state in each group:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select * , \nfirst_value(`state`, 1) over(partition by `myday` order by `time_col` rows between 1 preceding and 1 following) as ignore_null,\nfirst_value(`state`, 0) over(partition by `myday` order by `time_col` rows between 1 preceding and 1 following) as not_ignore_null,\nfirst_value(`state`) over(partition by `myday` order by `time_col` rows between 1 preceding and 1 following) as ignore_null_default\nfrom t order by `id`, `myday`, `time_col`;\n\n| id   | myday | time_col    | state | ignore_null | not_ignore_null | ignore_null_default |\n|------|-------|-------------|-------|-------------|-----------------|---------------------|\n|    1 |    21 | 04-21-11    |  NULL |           2 |            NULL |                NULL |\n|    2 |    21 | 04-21-12    |     2 |           2 |            NULL |                NULL |\n|    3 |    21 | 04-21-13    |     3 |           2 |               2 |                   2 |\n|    4 |    22 | 04-22-10-21 |  NULL |        NULL |            NULL |                NULL |\n|    5 |    22 | 04-22-10-22 |  NULL |           5 |            NULL |                NULL |\n|    6 |    22 | 04-22-10-23 |     5 |           5 |            NULL |                NULL |\n|    7 |    22 | 04-22-10-24 |  NULL |           5 |               5 |                   5 |\n|    8 |    22 | 04-22-10-25 |     9 |           9 |            NULL |                NULL |\n|    9 |    23 | 04-23-11    |  NULL |          10 |            NULL |                NULL |\n|   10 |    23 | 04-23-12    |    10 |          10 |            NULL |                NULL |\n|   11 |    23 | 04-23-13    |  NULL |          10 |              10 |                  10 |\n|   12 |    24 | 02-24-10-21 |  NULL |        NULL |            NULL |                NULL |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,FIRST_VALUE\n")))}f.isMDXComponent=!0}}]);