"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[169313],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},516275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const i={title:"ST_POINT",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/spatial-functions/st-point",id:"version-3.0/sql-manual/sql-functions/spatial-functions/st-point",title:"ST_POINT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/spatial-functions/st-point.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-point",permalink:"/docs/3.0/sql-manual/sql-functions/spatial-functions/st-point",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ST_POINT",language:"en"},sidebar:"docs",previous:{title:"ST_AREA",permalink:"/docs/3.0/sql-manual/sql-functions/spatial-functions/st-area"},next:{title:"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT",permalink:"/docs/3.0/sql-manual/sql-functions/spatial-functions/st-polygon"}},s={},c=[{value:"St_Point",id:"st_point",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"st_point"},"St_Point"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"POINT ST_Point(DOUBLE x, DOUBLE y)")),(0,o.yg)("p",null,"Given the X coordinate value, the Y coordinate value returns the corresponding Point.\nThe current value is meaningful only for spherical sets, and X/Y corresponds to longitude/latitude."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"ST_POINT,ST,POINT"))}f.isMDXComponent=!0}}]);