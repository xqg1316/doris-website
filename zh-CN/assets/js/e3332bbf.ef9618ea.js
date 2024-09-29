"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[573889],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>y});var o=a(296540);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,o,l=function(e,r){if(null==e)return{};var a,o,l={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=o.createContext({}),i=function(e){var r=o.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},c=function(e){var r=i(e.components);return o.createElement(p.Provider,{value:r},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var a=e.components,l=e.mdxType,t=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),u=l,y=d["".concat(p,".").concat(u)]||d[u]||g[u]||t;return a?o.createElement(y,n(n({ref:r},c),{},{components:a})):o.createElement(y,n({ref:r},c))}));function y(e,r){var a=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var t=a.length,n=new Array(t);n[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[d]="string"==typeof e?e:l,n[1]=s;for(var i=2;i<t;i++)n[i]=a[i];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},847405:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>n,default:()=>g,frontMatter:()=>t,metadata:()=>s,toc:()=>i});var o=a(58168),l=(a(296540),a(15680));const t={title:"\u90e8\u7f72 Doris Operator",language:"zh-CN"},n=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator",id:"version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator",title:"\u90e8\u7f72 Doris Operator",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-coupled",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator",permalink:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u90e8\u7f72 Doris Operator",language:"zh-CN"},sidebar:"docs",previous:{title:"\u96c6\u7fa4\u73af\u5883\u8981\u6c42",permalink:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/install-env"},next:{title:"\u5feb\u901f\u90e8\u7f72",permalink:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-quickstart"}},p={},i=[{value:"\u6dfb\u52a0 Doris Cluster \u8d44\u6e90\u5b9a\u4e49",id:"\u6dfb\u52a0-doris-cluster-\u8d44\u6e90\u5b9a\u4e49",level:2},{value:"\u6dfb\u52a0 Doris Operator",id:"\u6dfb\u52a0-doris-operator",level:2},{value:"\u65b9\u6848\u4e00\uff1a\u5feb\u901f\u90e8\u7f72 Doris Operator",id:"\u65b9\u6848\u4e00\u5feb\u901f\u90e8\u7f72-doris-operator",level:3},{value:"\u65b9\u6848\u4e8c\uff1a\u81ea\u5b9a\u4e49\u90e8\u7f72 Doris Operator",id:"\u65b9\u6848\u4e8c\u81ea\u5b9a\u4e49\u90e8\u7f72-doris-operator",level:3},{value:"\u65b9\u6848\u4e09\uff1aHelm \u90e8\u7f72 Doris Operator",id:"\u65b9\u6848\u4e09helm-\u90e8\u7f72-doris-operator",level:3},{value:"\u67e5\u770b\u670d\u52a1\u72b6\u6001",id:"\u67e5\u770b\u670d\u52a1\u72b6\u6001",level:2}],c={toc:i},d="wrapper";function g(e){let{components:r,...a}=e;return(0,l.yg)(d,(0,o.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u6dfb\u52a0-doris-cluster-\u8d44\u6e90\u5b9a\u4e49"},"\u6dfb\u52a0 Doris Cluster \u8d44\u6e90\u5b9a\u4e49"),(0,l.yg)("p",null,"Doris Operator \u4f7f\u7528\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49\uff08Custom Resource Definition, CRD\uff09\u6269\u5c55 Kubernetes\u3002Doris Cluster \u7684 CRD \u4e2d\u5c01\u88c5\u4e86\u5bf9 Doris \u5bf9\u8c61\u7684\u63cf\u8ff0\uff0c\u4f8b\u5982\u5bf9 FE \u6216 BE \u7684\u63cf\u8ff0\uff0c\u8be6\u7ec6\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master/doc/api.md"},"doris-operator-api"),"\u3002\u5728\u90e8\u7f72 Doris \u524d\uff0c\u9700\u8981\u5148\u521b\u5efa Doris Cluster \u7684 CRD\u3002"),(0,l.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u5728 Kubernetes \u73af\u5883\u4e2d\u90e8\u7f72 Doris Cluster CRD\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f https://raw.githubusercontent.com/selectdb/doris-operator/master/config/crd/bases/doris.selectdb.com_dorisclusters.yaml\n")),(0,l.yg)("p",null,"\u5982\u679c\u6ca1\u6709\u5916\u7f51\uff0c\u5148\u5c06 CRD \u6587\u4ef6\u4e0b\u8f7d\u5230\u672c\u5730\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/selectdb/doris-operator/master/config/crd/bases/doris.selectdb.com_dorisclusters.yaml\nkubectl create -f ./doris.selectdb.com_dorisclusters.yaml\n")),(0,l.yg)("p",null,"\u4ee5\u4e0b\u662f\u671f\u671b\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"customresourcedefinition.apiextensions.k8s.io/dorisclusters.doris.selectdb.com created\n")),(0,l.yg)("p",null,"\u5728\u521b\u5efa\u4e86 Doris Cluster CRD \u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u521b\u5efa\u7684 CRD\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get crd | grep doris\n")),(0,l.yg)("p",null,"\u4ee5\u4e0b\u4e3a\u671f\u671b\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"dorisclusters.doris.selectdb.com                      2024-02-22T16:23:13Z\n")),(0,l.yg)("h2",{id:"\u6dfb\u52a0-doris-operator"},"\u6dfb\u52a0 Doris Operator"),(0,l.yg)("h3",{id:"\u65b9\u6848\u4e00\u5feb\u901f\u90e8\u7f72-doris-operator"},"\u65b9\u6848\u4e00\uff1a\u5feb\u901f\u90e8\u7f72 Doris Operator"),(0,l.yg)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u62c9\u53bb\u4ed3\u5e93\u4e2d\u7684 Doris Operator \u6a21\u677f\u8fdb\u884c\u5feb\u901f\u90e8\u7f72\u3002"),(0,l.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u90e8\u7f72 Doris Operator\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/selectdb/doris-operator/master/config/operator/operator.yaml\n")),(0,l.yg)("p",null,"\u4ee5\u4e0b\u4e3a\u671f\u671b\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"namespace/doris created\nrole.rbac.authorization.k8s.io/leader-election-role created\nrolebinding.rbac.authorization.k8s.io/leader-election-rolebinding created\nclusterrole.rbac.authorization.k8s.io/doris-operator created\nclusterrolebinding.rbac.authorization.k8s.io/doris-operator-rolebinding created\nserviceaccount/doris-operator created\ndeployment.apps/doris-operator created\n")),(0,l.yg)("h3",{id:"\u65b9\u6848\u4e8c\u81ea\u5b9a\u4e49\u90e8\u7f72-doris-operator"},"\u65b9\u6848\u4e8c\uff1a\u81ea\u5b9a\u4e49\u90e8\u7f72 Doris Operator"),(0,l.yg)("p",null,"\u5728\u521b\u5efa\u5b8c CRD \u540e\uff0c\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u90e8\u7f72 Doris Operator \u6709\u4e24\u79cd\u65b9\u5f0f\uff1a\u5728\u7ebf\u4e0e\u79bb\u7ebf\u90e8\u7f72\u3002"),(0,l.yg)("p",null,"\u5728 operator.yaml \u6587\u4ef6\u4e2d\u89c4\u8303\u4e86\u90e8\u7f72 operator \u7684\u670d\u52a1\u7684\u6700\u4f4e\u8981\u6c42\u3002\u4e3a\u4e86\u9002\u914d\u590d\u6742\u7684\u751f\u4ea7\u73af\u5883\uff0c\u53ef\u4ee5\u4e0b\u8f7d operator.yaml \u6587\u4ef6\u540e\uff0c\u6309\u7167\u671f\u671b\u66f4\u65b0\u5176\u4e2d\u914d\u7f6e\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u5728\u7ebf\u5b89\u88c5 Doris Operator")),(0,l.yg)("p",null,"\u5728\u4fee\u6539 operator.yaml \u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u90e8\u7f72 Doris Operator \u670d\u52a1\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./operator.yaml\n")),(0,l.yg)("p",null,"\u4ee5\u4e0b\u4e3a\u671f\u671b\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"namespace/doris created\nrole.rbac.authorization.k8s.io/leader-election-role created\nrolebinding.rbac.authorization.k8s.io/leader-election-rolebinding created\nclusterrole.rbac.authorization.k8s.io/doris-operator created\nclusterrolebinding.rbac.authorization.k8s.io/doris-operator-rolebinding created\nserviceaccount/doris-operator created\ndeployment.apps/doris-operator created\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u79bb\u7ebf\u5b89\u88c5 Doris Operator")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d operator \u8fd0\u884c\u6240\u9700\u955c\u50cf\u6587\u4ef6")),(0,l.yg)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u6ca1\u6709\u8fde\u901a\u5916\u7f51\uff0c\u9700\u8981\u5148\u4e0b\u8f7d\u5bf9\u5e94\u7684 operator \u955c\u50cf\u6587\u4ef6\u3002Doris Operator \u7528\u5230\u4ee5\u4e0b\u7684\u955c\u50cf\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"selectdb/doris.k8s-operator:latest\n")),(0,l.yg)("p",null,"\u5728\u53ef\u4ee5\u8fde\u901a\u5916\u7f51\u7684\u670d\u52a1\u5668\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u5c06\u955c\u50cf\u4e0b\u8f7d\u4e0b\u6765\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"## download doris operator image\ndocker pull selectdb/doris.k8s-operator:latest\n## save the doris operator image as a tar package\ndocker save -o doris.k8s-operator-latest.tar selectdb/doris.k8s-operator:latest\n")),(0,l.yg)("p",null,"\u5c06\u5df2\u6253\u5305\u7684 tar \u6587\u4ef6\u653e\u7f6e\u5230\u6240\u6709\u7684 Kubernetes node \u8282\u70b9\u4e2d\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4e0a\u4f20\u955c\u50cf\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"docker load -i doris.k8s-operator-latest.tar\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u914d\u7f6e Doris Operator")),(0,l.yg)("p",null,"\u4e0b\u8f7d operator.yaml \u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u6839\u636e\u751f\u4ea7\u73af\u5883\u671f\u671b\u4fee\u6539\u6a21\u677f\u3002"),(0,l.yg)("p",null,"Doris Operator \u5728 Kubernetes \u96c6\u7fa4\u4e2d\u662f\u4e00\u4e2a\u65e0\u72b6\u6001\u7684 Deployment\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u4fee\u6539\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},"limits"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"replica"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"label"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"namespace")," \u7b49\u9879\u76ee\u3002\u5982\u9700\u8981\u6307\u5b9a\u67d0\u4e00\u7248\u672c\u7684 doirs operator \u955c\u50cf\uff0c\u53ef\u4ee5\u5728\u4e0a\u4f20\u955c\u50cf\u540e\u5bf9 operator.yaml \u6587\u4ef6\u505a\u5982\u4e0b\u4fee\u6539\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'...\ncontainers:\n  - command:\n      - /dorisoperator\n    args:\n      - --leader-elect\n    image: selectdb/doris.k8s-operator:v1.0.0\n    name: dorisoperator\n    securityContext:\n      allowPrivilegeEscalation: false\n      capabilities:\n        drop:\n          - "ALL"\n  ...\n')),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u5b89\u88c5 Doris Operator")),(0,l.yg)("p",null,"\u5728\u4fee\u6539 Doris Operator \u6a21\u677f\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 apply \u547d\u4ee4\u90e8\u7f72 Operator\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./operator.yaml\n")),(0,l.yg)("p",null,"\u4ee5\u4e0b\u4e3a\u671f\u671b\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"namespace/doris created\nrole.rbac.authorization.k8s.io/leader-election-role created\nrolebinding.rbac.authorization.k8s.io/leader-election-rolebinding created\nclusterrole.rbac.authorization.k8s.io/doris-operator created\nclusterrolebinding.rbac.authorization.k8s.io/doris-operator-rolebinding created\nserviceaccount/doris-operator created\ndeployment.apps/doris-operator created\n")),(0,l.yg)("h3",{id:"\u65b9\u6848\u4e09helm-\u90e8\u7f72-doris-operator"},"\u65b9\u6848\u4e09\uff1aHelm \u90e8\u7f72 Doris Operator"),(0,l.yg)("p",null,"Helm Chart \u662f\u4e00\u7cfb\u5217\u63cf\u8ff0 Kubernetes \u76f8\u5173\u8d44\u6e90\u7684 YAML \u6587\u4ef6\u7684\u5c01\u88c5\u3002\u901a\u8fc7 Helm \u90e8\u7f72\u5e94\u7528\u65f6\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5e94\u7528\u7684\u5143\u6570\u636e\uff0c\u4ee5\u4fbf\u4e8e\u5206\u53d1\u5e94\u7528\u3002Chart \u662f Helm \u7684\u8f6f\u4ef6\u5305\uff0c\u91c7\u7528 TAR \u683c\u5f0f\uff0c\u7528\u4e8e\u90e8\u7f72 Kubernetes \u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u3002\u901a\u8fc7 Helm Chart \u53ef\u4ee5\u7b80\u5316\u90e8\u7f72 Doris \u96c6\u7fa4\u7684\u6d41\u7a0b\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u6dfb\u52a0\u90e8\u7f72\u4ed3\u5e93")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u5728\u7ebf\u6dfb\u52a0\u4ed3\u5e93")),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"repo add")," \u547d\u4ee4\u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"helm repo add doris-repo https://charts.selectdb.com\n")),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"repo update")," \u547d\u4ee4\u66f4\u65b0\u6700\u65b0\u7248\u672c\u7684 chart"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"helm repo update doris-repo\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u5b89\u88c5 Doris Operator")),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"helm install")," \u547d\u4ee4\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u5728 doris \u7684 namespace \u4e2d\u5b89\u88c5 Doris Operator"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"helm install operator doris-repo/doris-operator\n")),(0,l.yg)("p",null,"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u88c5\u914d ",(0,l.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris-operator?modal=values"},"values.yaml")," \uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u547d\u4ee4:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"helm install -f values.yaml operator doris-repo/doris-operator\n")),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," \u547d\u4ee4\u67e5\u770b Pod \u7684\u90e8\u7f72\u72b6\u6001\u3002\u5f53 Doris Operator \u7684 Pod \u5904\u4e8e Running \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u7ecf\u5c31\u7eea\uff0c\u5373\u90e8\u7f72\u6210\u529f\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod --namespace doris\n")),(0,l.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-866bd449bb-zl5mr   1/1     Running   0          18m\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u79bb\u7ebf\u6dfb\u52a0\u4ed3\u5e93")),(0,l.yg)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u65e0\u6cd5\u8fde\u63a5\u5916\u7f51\uff0c\u9700\u8981\u9884\u5148\u4e0b\u8f7d Doris Operator \u4e0e Doris Cluster \u7684 chart \u8d44\u6e90\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u79bb\u7ebf chart \u8d44\u6e90")),(0,l.yg)("p",null,"\u4e0b\u8f7d ",(0,l.yg)("inlineCode",{parentName:"p"},"doris-operator-{chart_version}.tgz")," \u5b89\u88c5 Doris Operator chart\u3002\u5982\u9700\u8981\u4e0b\u8f7d 1.4.0 \u7248\u672c\u7684 Doris Operator \u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://charts.selectdb.com/doris-operator-1.4.0.tgz\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u5b89\u88c5 Doris Operator")),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"helm install")," \u547d\u4ee4\u53ef\u4ee5\u5b89\u88c5 Doris Operator\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"helm install operator doris-operator-1.4.0.tgz\n")),(0,l.yg)("p",null,"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u88c5\u914d ",(0,l.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris-operator?modal=values"},"values.yaml")," \uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u547d\u4ee4:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"helm install -f values.yaml operator doris-operator-1.4.0.tgz\n")),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," \u547d\u4ee4\u67e5\u770b Pod \u7684\u90e8\u7f72\u72b6\u6001\u3002\u5f53 Doris Operator \u7684 Pod \u5904\u4e8e Running \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u7ecf\u5c31\u7eea\uff0c\u5373\u90e8\u7f72\u6210\u529f\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod --namespace doris\n")),(0,l.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-866bd449bb-zl5mr   1/1     Running   0          18m\n")),(0,l.yg)("h2",{id:"\u67e5\u770b\u670d\u52a1\u72b6\u6001"},"\u67e5\u770b\u670d\u52a1\u72b6\u6001"),(0,l.yg)("p",null,"\u5f53\u90e8\u7f72 Operator \u670d\u52a1\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u670d\u52a1\u72b6\u6001\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -n doris\n")),(0,l.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-6f47594455-p5tp7   1/1     Running   0          11s\n")),(0,l.yg)("p",null,"\u9700\u8981\u786e\u4fdd STATUS \u72b6\u6001\u4e3a Running\uff0c\u4e14 pod \u4e2d\u6240\u6709\u5bb9\u5668\u7684\u72b6\u6001\u90fd\u4e3a Ready\u3002"))}g.isMDXComponent=!0}}]);