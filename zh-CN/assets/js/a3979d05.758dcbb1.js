"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[769937],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},283936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const i={title:"\u914d\u7f6e FDB \u90e8\u7f72",language:"zh-CN"},l=void 0,o={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-fdb",id:"version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-fdb",title:"\u914d\u7f6e FDB \u90e8\u7f72",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-fdb.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-fdb",permalink:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-fdb",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u914d\u7f6e FDB \u90e8\u7f72",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5b58\u7b97\u5206\u79bb\u5feb\u901f\u90e8\u7f72",permalink:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart"},next:{title:"\u914d\u7f6e MS \u90e8\u7f72",permalink:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-metaservice/config-ms"}},s={},p=[{value:"\u6700\u7b80\u914d\u7f6e",id:"\u6700\u7b80\u914d\u7f6e",level:2},{value:"\u6307\u5b9a image \u90e8\u7f72",id:"\u6307\u5b9a-image-\u90e8\u7f72",level:2},{value:"\u79c1\u6709\u4ed3\u5e93\u516c\u5171 image \u914d\u7f6e",id:"\u79c1\u6709\u4ed3\u5e93\u516c\u5171-image-\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u5b58\u50a8",id:"\u914d\u7f6e\u5b58\u50a8",level:2}],c={toc:p},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris \u5b58\u7b97\u5206\u79bb\u4f7f\u7528 FoundationDB \u4f5c\u4e3a\u5143\u6570\u636e\u5b58\u50a8\u7ec4\u4ef6\u3002K8s \u90e8\u7f72\u6a21\u5f0f\u4e0b\uff0c\u4f7f\u7528",(0,a.yg)("a",{parentName:"p",href:"https://github.com/FoundationDB/fdb-kubernetes-operator"},"fdb-kubernetes-operator")," \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"v1beta2")," \u7248\u672c\u90e8\u7f72 ",(0,a.yg)("inlineCode",{parentName:"p"},"fdb")," \u3002"),(0,a.yg)("p",null,"Doris-Operator \u5c4f\u853d\u4e86\u624b\u52a8\u914d\u7f6e ",(0,a.yg)("inlineCode",{parentName:"p"},"FoundationDBCluster")," \u7684\u7e41\u7410\uff0c\u901a\u8fc7\u62bd\u8c61\u900f\u51fa\u6781\u5c11\u6570\u914d\u7f6e\u4fe1\u606f\uff0c\u964d\u4f4e\u5b66\u4e60\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"FoundationDBCluster")," \u8d44\u6e90\u7684\u6210\u672c\u3002\u901a\u8fc7\u62bd\u8c61\uff0cDoris-Operator \u5e0c\u671b\u7528\u6237\u53ea\u5173\u6ce8 FDB \u90e8\u7f72\u76f8\u5173\u7684\u4e8b\u9879\uff0c\u800c\u65e0\u9700\u5173\u6ce8 FDB \u5185\u90e8\u8fd0\u4f5c\u673a\u5236\u4ee5\u53ca Doris \u548c FDB \u7ed3\u5408\u4ea7\u751f\u7684\u590d\u6742\u8054\u7cfb\u3002"),(0,a.yg)("h2",{id:"\u6700\u7b80\u914d\u7f6e"},"\u6700\u7b80\u914d\u7f6e"),(0,a.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u8981\u914d\u7f6e FDB \u4f7f\u7528\u7684\u8d44\u6e90\uff0cDoris-Operator \u81ea\u52a8\u751f\u6210 ",(0,a.yg)("inlineCode",{parentName:"p"},"FoundationDBCluster")," \u6765\u90e8\u7f72 FDB \u5143\u6570\u636e\u7ba1\u7406\u96c6\u7fa4\u3002"),(0,a.yg)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  fdb:\n    requests:\n      cpu: 4\n      memory: 4Gi\n    limits:\n      cpu: 4\n      memory: 4Gi\n")),(0,a.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u914d\u7f6e\uff0cDoris-Operator \u4f1a\u81ea\u52a8\u90e8\u7f72 5 \u4e2a pod \u7ec4\u6210\u7684 FDB \u96c6\u7fa4\u3002"),(0,a.yg)("h2",{id:"\u6307\u5b9a-image-\u90e8\u7f72"},"\u6307\u5b9a image \u90e8\u7f72"),(0,a.yg)("p",null,"Doris-Operator \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528 Doris  \u63a8\u8350\u7684 7.1.38 \u7248\u672c\u90e8\u7f72 FDB \u3002\u79c1\u6709\u5316\u73af\u5883\u4e0b\u4ee5\u53ca\u5bf9 FDB \u7248\u672c\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u8bf7\u6309\u7167\u5982\u4e0b\u683c\u5f0f\u914d\u7f6e image \u6216\u8005\u914d\u7f6e\u79c1\u6709\u4ed3\u5e93\u7684\u955c\u50cf\u62c9\u53d6\u79d8\u94a5\u3002"),(0,a.yg)("h3",{id:"\u79c1\u6709\u4ed3\u5e93\u516c\u5171-image-\u914d\u7f6e"},"\u79c1\u6709\u4ed3\u5e93\u516c\u5171 image \u914d\u7f6e"),(0,a.yg)("p",null,"\u79c1\u6709\u4ed3\u5e93\u4e0b\u6216\u8005\u5916\u7f51\u8bbf\u95ee\u4e0d\u901a\u7684\u60c5\u5f62\uff0c\u9700\u8981\u914d\u7f6e\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u5730\u5740\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  fdb:\n    image: {fdb_image}\n    sidecarImage: {fdb_sidecarImage}\n")),(0,a.yg)("p",null,"\u5206\u522b\u8bbe\u7f6e ",(0,a.yg)("inlineCode",{parentName:"p"},"{fdb_image}")," \u4e3a\u5bf9\u5e94\u7684 FoundationDB \u7684\u4e3b\u955c\u50cf\uff08\u5728 selectdb \u4ed3\u5e93\u4e2d\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/foundationdb:xxx"),"\uff09, ",(0,a.yg)("inlineCode",{parentName:"p"},"{fdb_sidecarImage}")," \u4e3a FDB \u7684 sidecar \u5bb9\u5668\u955c\u50cf\uff08\u5728 selectdb \u4ed3\u5e93\u4e2d\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/foundationdb-kubernetes-sidecar:xxx"),"\uff09\u3002"),(0,a.yg)("p",null,"\u5c06\u6307\u5b9a\u7684\u955c\u50cf\u76f8\u5173\u914d\u7f6e\uff0c\u914d\u7f6e\u5230\u9700\u8981","[\u90e8\u7f72\u7684]","(../install-quickstart#\u90e8\u7f72 DorisDisaggregatedMetaService \u8d44\u6e90)",(0,a.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedMetaService")," \u8d44\u6e90\u4e2d\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u914d\u7f6e image \u7684 secret")),(0,a.yg)("p",null,"\u4f7f\u7528\u79c1\u6709\u4ed3\u5e93\u65f6\uff0c\u5982\u679c\u914d\u7f6e\u8bbf\u95ee\u5bc6\u94a5\uff0c\u8bf7\u6309\u7167 ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"Kubernetes \u79c1\u6709\u4ed3\u5e93 imagePullSecret")," \u521b\u5efa\u6b65\u9aa4\u521b\u5efa\u76f8\u5e94\u7684 secret \u90e8\u7f72\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedMetaService")," \u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  fdb:\n    image: {fdb_image}\n    sidecarImage: {fdb_sidecarImage}\n    imagePullSecrets:\n    - {secret_name}\n    requests:\n      cpu: 4\n      memory: 4Gi\n    limits:\n      cpu: 4\n      memory: 4Gi\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"{fdb_image}")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"{fdb_sidecarImage}")," \u914d\u7f6e\u8bf7\u53c2\u8003 \u79c1\u6709\u4ed3\u5e93\u516c\u5171 image \u914d\u7f6e\u76f8\u5173\u4ecb\u7ecd\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"{secret_name}")," \u662f\u6309\u7167 Kubernetes \u79c1\u6709\u4ed3\u5e93 ",(0,a.yg)("inlineCode",{parentName:"p"},"imagePullSecret")," \u521b\u5efa\u7684 secret \u540d\u79f0\u3002"),(0,a.yg)("p",null,"\u5c06\u4e0a\u8ff0\u914d\u7f6e\u6dfb\u52a0\u5230\u9700\u8981\u90e8\u7f72\u7684 ","[",(0,a.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedMetaSerivce"),"]","(../install-quickstart#\u90e8\u7f72 DorisDisaggregatedMetaService \u8d44\u6e90) \u8d44\u6e90\u4e2d\u3002"),(0,a.yg)("h2",{id:"\u914d\u7f6e\u5b58\u50a8"},"\u914d\u7f6e\u5b58\u50a8"),(0,a.yg)("p",null,"FoundationDB \u662f\u6709\u72b6\u6001\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u670d\u52a1\u9700\u8981\u914d\u7f6e\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b Doris-Operator \u4f1a\u4f7f\u7528 Kubernetes \u4e2d\u9ed8\u8ba4 StorageClass \u6765\u4e3a FDB \u7684 pod \u6784\u5efa\u76f8\u5173\u7684 pvc \uff0cpvc \u7684\u9ed8\u8ba4\u5927\u5c0f\u4e3a  128Gi \u3002\u5982\u679c\u9700\u8981\u6307\u5b9a StorageClass \u4ee5\u53ca\u4fee\u6539\u9ed8\u8ba4\u7684\u914d\u7f6e\u5927\u5c0f\u8bf7\u6309\u7167\u5982\u4e0b\u914d\u7f6e\u4fee\u6539\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  fdb:\n    volumeClaimTemplate:\n      spec:\n        #storageClassName: {storageClassName}\n        resources:\n          requests:\n            storage: "200Gi"\n')),(0,a.yg)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u4f7f\u7528\u9ed8\u8ba4 StorageClass \u6765\u521b\u5efa 200Gi \u5b58\u50a8\u6765\u4f9b FDB \u670d\u52a1\u4f7f\u7528\uff0c\u5982\u679c\u9700\u8981\u6307\u5b9a StorageClass \u8bf7\u5c06\u6ce8\u91ca\u53d6\u6d88\u540e\uff0c\u5c06\u53d8\u91cf ",(0,a.yg)("inlineCode",{parentName:"p"},"{storageClassName}")," \u66ff\u6362\u4e3a\u60f3\u8981\u6307\u5b9a\u7684 StorageClass \u540d\u79f0\u3002"),(0,a.yg)("p",null,"\u5c06\u4e0a\u8ff0\u914d\u7f6e\u6dfb\u52a0\u5230\u9700\u8981\u90e8\u7f72\u7684 ","[",(0,a.yg)("inlineCode",{parentName:"p"},"DorisDisaggregatedMetaSerivce"),"]","(../install-quickstart#\u90e8\u7f72 DorisDisaggregatedMetaService \u8d44\u6e90) \u8d44\u6e90\u4e2d\u3002"))}d.isMDXComponent=!0}}]);