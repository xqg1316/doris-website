"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[549390],{15680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>m});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=a.createContext({}),u=function(e){var r=a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,m=p["".concat(i,".").concat(d)]||p[d]||y[d]||c;return n?a.createElement(m,o(o({ref:r},s),{},{components:n})):a.createElement(m,o({ref:r},s))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:t,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},253807:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=n(58168),t=(n(296540),n(15680));const c={title:"ARRAY_COMPACT",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array-compact",id:"version-3.0/sql-manual/sql-functions/array-functions/array-compact",title:"ARRAY_COMPACT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/array-compact.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-compact",permalink:"/docs/3.0/sql-manual/sql-functions/array-functions/array-compact",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_COMPACT",language:"en"},sidebar:"docs",previous:{title:"ARRAY_PUSHBACK",permalink:"/docs/3.0/sql-manual/sql-functions/array-functions/array-pushback"},next:{title:"ARRAY_CONCAT",permalink:"/docs/3.0/sql-manual/sql-functions/array-functions/array-concat"}},i={},u=[{value:"array_compact",id:"array_compact",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function y(e){let{components:r,...n}=e;return(0,t.yg)(p,(0,a.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_compact"},"array_compact"),(0,t.yg)("p",null,"array_compact"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("p",null,"Removes consecutive duplicate elements from an array. The order of result values is determined by the order in the source array."),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Array<T> array_compact(arr)")),(0,t.yg)("h4",{id:"arguments"},"Arguments"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"arr")," \u2014 The array to inspect."),(0,t.yg)("h4",{id:"returned-value"},"Returned value"),(0,t.yg)("p",null,"The array without continuous duplicate."),(0,t.yg)("p",null,"Type: Array."),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"select array_compact([1, 2, 3, 3, null, null, 4, 4]);\n\n+----------------------------------------------------+\n| array_compact(ARRAY(1, 2, 3, 3, NULL, NULL, 4, 4)) |\n+----------------------------------------------------+\n| [1, 2, 3, NULL, 4]                                 |\n+----------------------------------------------------+\n\nselect array_compact(['aaa','aaa','bbb','ccc','ccccc',null, null,'dddd']);\n\n+-------------------------------------------------------------------------------+\n| array_compact(ARRAY('aaa', 'aaa', 'bbb', 'ccc', 'ccccc', NULL, NULL, 'dddd')) |\n+-------------------------------------------------------------------------------+\n| ['aaa', 'bbb', 'ccc', 'ccccc', NULL, 'dddd']                                  |\n+-------------------------------------------------------------------------------+\n\nselect array_compact(['2015-03-13','2015-03-13']);\n\n+--------------------------------------------------+\n| array_compact(ARRAY('2015-03-13', '2015-03-13')) |\n+--------------------------------------------------+\n| ['2015-03-13']                                   |\n+--------------------------------------------------+\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,COMPACT,ARRAY_COMPACT"))}y.isMDXComponent=!0}}]);