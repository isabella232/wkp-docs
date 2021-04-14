(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{215:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(215)),i={title:"Install to an Existing Cluster"},c={unversionedId:"deploying-wkp/components-on-existing-cluster",id:"deploying-wkp/components-on-existing-cluster",isDocsHomePage:!1,title:"Install to an Existing Cluster",description:"Install the dependencies",source:"@site/docs/deploying-wkp/components-on-existing-cluster.md",slug:"/deploying-wkp/components-on-existing-cluster",permalink:"/docs/next/deploying-wkp/components-on-existing-cluster",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/docs/deploying-wkp/components-on-existing-cluster.md",version:"current",sidebar:"docs",previous:{title:"Creating Clusters on SSH Nodes",permalink:"/docs/next/deploying-wkp/cluster-creation-on-ssh-nodes"},next:{title:"Cluster creation on EKS",permalink:"/docs/next/deploying-wkp/cluster-creation-on-eks"}},l=[{value:"Install the dependencies",id:"install-the-dependencies",children:[]},{value:"Cluster requirements",id:"cluster-requirements",children:[]},{value:"Entitlements",id:"entitlements",children:[]},{value:"Install the WKP cluster components on an existing cluster",id:"install-the-wkp-cluster-components-on-an-existing-cluster",children:[]},{value:"Access the WKP UI",id:"access-the-wkp-ui",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"install-the-dependencies"},"Install the dependencies"),Object(o.b)("p",null,"On the computer that will be used for the installation, you need to install:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.atlassian.com/git/tutorials/install-git"},"git")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"wk")," binary. You can ensure it is in your path by running ",Object(o.b)("inlineCode",{parentName:"li"},"wk version"))),Object(o.b)("h3",{id:"cluster-requirements"},"Cluster requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Kubernetes 1.16+"),Object(o.b)("li",{parentName:"ul"},"At least 1 master and at least 1 worker node.")),Object(o.b)("h3",{id:"entitlements"},"Entitlements"),Object(o.b)("p",null,"Ensure that ",Object(o.b)("inlineCode",{parentName:"p"},"wk")," can load a valid ","[entitlements]","/getting-started/entitlements.md) file."),Object(o.b)("h3",{id:"install-the-wkp-cluster-components-on-an-existing-cluster"},"Install the WKP cluster components on an existing cluster"),Object(o.b)("p",null,"First, create a directory which will contain the cluster management scripts and binaries."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir wkp-cluster && cd wkp-cluster\nwk setup install --entitlements=/path/to/my/entitlements\n")),Object(o.b)("p",null,"The main configuration file will be unpacked at ",Object(o.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),"."),Object(o.b)("p",null,"The required values are your git provider organization or user, your Docker Hub user, and an absolute path to a file containing your Docker Hub password:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.wks\necho 'my-dockerhub-password' > ~/.wks/dockerhub-password\nchmod 600 ~/.wks/dockerhub-password\n")),Object(o.b)("p",null,"Enter your ",Object(o.b)("inlineCode",{parentName:"p"},"gitProvider"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dockerIOUser"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"dockerIOPasswordFile")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),". (See ",Object(o.b)("a",{parentName:"p",href:"/docs/next/getting-started/git-config-repository"},"Git Config Repository")," for details about git parameters)"),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"track")," field to ",Object(o.b)("inlineCode",{parentName:"p"},"wks-components"),"."),Object(o.b)("p",null,"Example snippet of ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"track: wks-components\nclusterName: my-cluster\ngitProvider: gitlab\ngitUrl: git@git.acme.org:app-team/dev-cluster.git\ndockerIOUser: my-docker-user\ndockerIOPasswordFile: /home/my-user/.wks/my-docker-user-dockerhub-password\n")),Object(o.b)("p",null,"WKP uses a personal access token to create the cluster repository on GitHub. The token needs to have permissions in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"repo")," scope. The github documentation on how to create one can be found on this ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"},"page"),". Once you have created one,\nset the environment variable for it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"export GITHUB_TOKEN=my-token\n")),Object(o.b)("p",null,"Now we are ready to install the components on the cluster. Make sure ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," is connected to the correct cluster and run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wk setup run\n")),Object(o.b)("h3",{id:"access-the-wkp-ui"},"Access the WKP UI"),Object(o.b)("p",null,"To expose the WKP UI via wk ui command, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wk ui\n")),Object(o.b)("p",null,"You should now be able to view it at ",Object(o.b)("a",{parentName:"p",href:"http://localhost:8090"},"http://localhost:8090")),Object(o.b)("p",null,"To expose the WKP UI to a different port other than the default, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wk ui --port 8081\n")))}p.isMDXComponent=!0}}]);