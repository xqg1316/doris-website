"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[828533],{15680:(e,r,n)=>{n.d(r,{xA:()=>g,yg:()=>y});var t=n(296540);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},g=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,y=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?t.createElement(y,o(o({ref:r},g),{},{components:n})):t.createElement(y,o({ref:r},g))}));function y(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},727354:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=n(58168),l=(n(296540),n(15680));const a={title:"Doris Docker \u5feb\u901f\u642d\u5efa\u5f00\u53d1\u73af\u5883",language:"zh-CN"},o=void 0,i={unversionedId:"developer-guide/docker-dev",id:"developer-guide/docker-dev",title:"Doris Docker \u5feb\u901f\u642d\u5efa\u5f00\u53d1\u73af\u5883",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/docker-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/docker-dev",permalink:"/zh-CN/community/developer-guide/docker-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris Docker \u5feb\u901f\u642d\u5efa\u5f00\u53d1\u73af\u5883",language:"zh-CN"},sidebar:"community",previous:{title:"\u8c03\u8bd5\u5de5\u5177",permalink:"/zh-CN/community/developer-guide/debug-tool"},next:{title:"Doris BE\u5b58\u50a8\u5c42Benchmark\u5de5\u5177",permalink:"/zh-CN/community/developer-guide/benchmark-tool"}},s={},u=[{value:"\u76f8\u5173\u8be6\u7ec6\u6587\u6863\u5bfc\u822a",id:"\u76f8\u5173\u8be6\u7ec6\u6587\u6863\u5bfc\u822a",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u6784\u5efa\u955c\u50cf",id:"\u6784\u5efa\u955c\u50cf",level:2},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2}],g={toc:u},p="wrapper";function c(e){let{components:r,...n}=e;return(0,l.yg)(p,(0,t.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"doris-docker-\u5feb\u901f\u642d\u5efa\u5f00\u53d1\u73af\u5883"},"Doris Docker \u5feb\u901f\u642d\u5efa\u5f00\u53d1\u73af\u5883"),(0,l.yg)("h2",{id:"\u76f8\u5173\u8be6\u7ec6\u6587\u6863\u5bfc\u822a"},"\u76f8\u5173\u8be6\u7ec6\u6587\u6863\u5bfc\u822a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/install/source-install/compilation"},"\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/install/install-deploy"},"\u90e8\u7f72")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/zh-CN/community/developer-guide/be-vscode-dev"},"VSCode Be \u5f00\u53d1\u8c03\u8bd5"))),(0,l.yg)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5b89\u88c5 Docker"),(0,l.yg)("li",{parentName:"ul"},"VSCode",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Remote \u63d2\u4ef6")))),(0,l.yg)("h2",{id:"\u6784\u5efa\u955c\u50cf"},"\u6784\u5efa\u955c\u50cf"),(0,l.yg)("p",null,"\u521b\u5efa dockerfile"),(0,l.yg)("p",null,"VSCode \u4e2d\u4f7f\u7528 Ctrl-d \u66ff\u6362\u6389\u6240\u6709\u7684"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"<!!! your user !!!>"),(0,l.yg)("li",{parentName:"ul"},"<!!! your user password !!!>"),(0,l.yg)("li",{parentName:"ul"},"<!!! root password !!!>"),(0,l.yg)("li",{parentName:"ul"},"<!!! your git email !!!>"),(0,l.yg)("li",{parentName:"ul"},"<!!! your git username !!!>")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-dockerfile"},'FROM apache/incubator-doris:build-env-latest\n\nUSER root\nWORKDIR /root\nRUN echo \'<!!! root password !!!>\' | passwd root --stdin\n\nRUN yum install -y vim net-tools man wget git mysql lsof bash-completion \\\n        && cp /var/local/thirdparty/installed/bin/thrift /usr/bin\n\n# \u66f4\u5b89\u5168\u7684\u4f7f\u7528\uff0c\u521b\u5efa\u7528\u6237\u800c\u4e0d\u662f\u4f7f\u7528 root\nRUN yum install -y sudo \\\n        && useradd -ms /bin/bash <!!! your user !!!> && echo <!!! your user password !!!> | passwd <!!! your user !!!> --stdin \\\n        && usermod -a -G wheel <!!! your user !!!>\n\nUSER <!!! your user !!!>\nWORKDIR /home/<!!! your user !!!>\nRUN git config --global color.ui true \\\n        && git config --global user.email "<!!! your git email !!!>" \\\n        && git config --global user.name "<!!! your git username !!!>"\n\n# \u6309\u9700\u5b89\u88c5 zsh and oh my zsh, \u66f4\u6613\u4e8e\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u7684\u79fb\u9664\nUSER root\nRUN yum install -y zsh \\\n        && chsh -s /bin/zsh <!!! your user !!!>\nUSER <!!! your user !!!>\nRUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh \\\n        && git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions \\\n        && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting\n')),(0,l.yg)("p",null,"\u8fd0\u884c\u6784\u5efa\u547d\u4ee4"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"docker build -t doris .\n")),(0,l.yg)("p",null,"\u8fd0\u884c\u955c\u50cf"),(0,l.yg)("p",null,"\u6b64\u5904\u6309\u9700\u6ce8\u610f ",(0,l.yg)("a",{parentName:"p",href:"../../docs/install/source-install/compilation-general.md"},"\u6302\u8f7d\u7684\u95ee\u9898")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u89c1\u94fe\u63a5\u4e2d\uff1a\u5efa\u8bae\u4ee5\u6302\u8f7d\u672c\u5730 Doris \u6e90\u7801\u76ee\u5f55\u7684\u65b9\u5f0f\u8fd0\u884c\u955c\u50cf .....")),(0,l.yg)("p",null,"\u7531\u4e8e\u5982\u679c\u662f\u4f7f\u7528 windows \u5f00\u53d1\uff0c\u6302\u8f7d\u4f1a\u5b58\u5728\u8de8\u6587\u4ef6\u7cfb\u7edf\u8bbf\u95ee\u7684\u95ee\u9898\uff0c\u8bf7\u81ea\u884c\u659f\u914c\u8bbe\u7f6e\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"--cap-add SYS_PTRACE"),"\u53c2\u6570\u53ef\u4ee5\u5141\u8bb8docker\u4f7f\u7528ptrace\uff0c\u4fbf\u4e8e\u6211\u4eec\u4f7f\u7528ptrace\u548cgdb\u8fdc\u7a0b\u8c03\u8bd5\u529f\u80fd\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -it --cap-add SYS_PTRACE doris:latest /bin/bash\n")),(0,l.yg)("p",null,"\u5982\u679c\u9009\u62e9\u5b89\u88c5\u4e86 zsh\n\u8fd0\u884c \u5bb9\u5668\u540e\uff0c\u5728 ~/.zshrc \u66ff\u6362 plugins \u4e3a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"plugins=(git zsh-autosuggestions zsh-syntax-highlighting)\n")),(0,l.yg)("p",null,"\u521b\u5efa\u76ee\u5f55\u5e76\u4e0b\u8f7d doris"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"su <your user>\nmkdir code && cd code\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n")),(0,l.yg)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,l.yg)("p",null,"\u6ce8\u610f:"),(0,l.yg)("p",null,"\u7b2c\u4e00\u6b21\u7f16\u8bd1\u7684\u65f6\u5019\u8981\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sh build.sh --clean --be --fe --ui\n")),(0,l.yg)("p",null,"\u8fd9\u662f\u56e0\u4e3a build-env-for-0.15.0 \u7248\u672c\u955c\u50cf\u5347\u7ea7\u4e86 thrift(0.9 -> 0.13)\uff0c\u9700\u8981\u901a\u8fc7 --clean \u547d\u4ee4\u5f3a\u5236\u4f7f\u7528\u65b0\u7248\u672c\u7684 thrift \u751f\u6210\u4ee3\u7801\u6587\u4ef6\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u4e0d\u517c\u5bb9\u7684\u4ee3\u7801\u3002\uff1a"),(0,l.yg)("p",null,"\u7f16\u8bd1 Doris"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"sh build.sh\n")),(0,l.yg)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,l.yg)("p",null,"\u624b\u52a8\u521b\u5efa ",(0,l.yg)("inlineCode",{parentName:"p"},"meta_dir")," \u5143\u6570\u636e\u5b58\u653e\u4f4d\u7f6e, \u9ed8\u8ba4\u503c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/doris-meta")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir meta_dir\n")),(0,l.yg)("p",null,"\u542f\u52a8FE"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd output/fe\nsh bin/start_fe.sh --daemon\n")),(0,l.yg)("p",null,"\u542f\u52a8BE"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"cd output/be\nsh bin/start_be.sh --daemon\n")),(0,l.yg)("p",null,"mysql-client \u8fde\u63a5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mysql -h 127.0.0.1 -P 9030 -u root\n")))}c.isMDXComponent=!0}}]);