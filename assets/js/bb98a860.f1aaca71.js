(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(170)),l={title:"Installing WKP on Footloose"},i={unversionedId:"deploying-wkp/cluster-creation-on-footloose",id:"deploying-wkp/cluster-creation-on-footloose",isDocsHomePage:!1,title:"Installing WKP on Footloose",description:"Install the dependencies",source:"@site/docs/deploying-wkp/cluster-creation-on-footloose.md",slug:"/deploying-wkp/cluster-creation-on-footloose",permalink:"/wkp-docs/docs/next/deploying-wkp/cluster-creation-on-footloose",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/docs/deploying-wkp/cluster-creation-on-footloose.md",version:"current",sidebar:"docs",previous:{title:"Creating Clusters on SSH Nodes",permalink:"/wkp-docs/docs/next/deploying-wkp/cluster-creation-on-ssh-nodes"},next:{title:"What is Multi-cluster Control Plane?",permalink:"/wkp-docs/docs/next/mccp/intro"}},c=[{value:"Install the dependencies",id:"install-the-dependencies",children:[]},{value:"Install WKP on footloose containers",id:"install-wkp-on-footloose-containers",children:[]},{value:"Access the WKP UI",id:"access-the-wkp-ui",children:[]},{value:"Delete a WKP cluster",id:"delete-a-wkp-cluster",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"install-the-dependencies"},"Install the dependencies"),Object(r.b)("p",null,"On the computer that will be used for the installation, you need to install:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.atlassian.com/git/tutorials/install-git"},"git")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"wk")," binary. You can ensure it is in your path by running ",Object(r.b)("inlineCode",{parentName:"li"},"wk version"))),Object(r.b)("h3",{id:"install-wkp-on-footloose-containers"},"Install WKP on footloose containers"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/weaveworks/footloose"},"Footloose")," allows the creation of containers that emulate virtual machines."),Object(r.b)("p",null,"It provides an easy way for deploying on a single machine and demoing WKP features."),Object(r.b)("p",null,"First, create a directory which will contain the cluster management scripts and binaries."),Object(r.b)("p",null,"It is required to provide a valid entitlements file for this step."),Object(r.b)("p",null,"The default location for it is at ",Object(r.b)("inlineCode",{parentName:"p"},"/home/${USER}/.wks/entitlements"),", to specify a different location use the ",Object(r.b)("inlineCode",{parentName:"p"},"--entitlements")," flag:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"mkdir wkp-footloose-cluster && cd wkp-footloose-cluster\nwk setup install --entitlements=/path/to/my/entitlements\n")),Object(r.b)("p",null,"The main configuration file is unpacked at ",Object(r.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),"."),Object(r.b)("p",null,"The required values are your git provider organization or user, your Docker Hub user, and an absolute path to a file containing your Docker Hub password:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.wks\necho 'my-dockerhub-password' > ~/.wks/dockerhub-password\nchmod 600 ~/.wks/dockerhub-password\n")),Object(r.b)("p",null,"Enter your ",Object(r.b)("inlineCode",{parentName:"p"},"gitProvider"),", ",Object(r.b)("inlineCode",{parentName:"p"},"dockerIOUser"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"dockerIOPasswordFile")," in your ",Object(r.b)("inlineCode",{parentName:"p"},"setup/config.yaml")," (See ",Object(r.b)("a",{parentName:"p",href:"/getting-started/git-config-repository"},"Git Config Repository")," for details about git parameters)."),Object(r.b)("p",null,"Optionally, set the ",Object(r.b)("inlineCode",{parentName:"p"},"clusterName")," and ",Object(r.b)("inlineCode",{parentName:"p"},"kubernetesVersion")," fields."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"vim setup/config.yaml\n")),Object(r.b)("p",null,"Example snippet of ",Object(r.b)("inlineCode",{parentName:"p"},"config.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"track: wks-footloose\nclusterName: my-cluster\ngitProvider: gitlab\ngitUrl: git@git.acme.org:app-team/dev-cluster.git\ndockerIOUser: my-docker-user\ndockerIOPasswordFile: /home/my-user/.wks/my-dockerhub-password\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Changes for Docker Desktop on MacOS")),Object(r.b)("p",null,"Docker Desktop for Mac requires setting specific CIDR blocks. Make sure to set them in ",Object(r.b)("inlineCode",{parentName:"p"},"config.yaml"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"serviceCIDRBlocks: [192.168.0.0/16]\npodCIDRBlocks: [172.30.0.0/16]\n")),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"footlooseConfig")," section of ",Object(r.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),", you can set the number of nodes according to your specifications and available resources, as well as the backend for creating them. The default is ",Object(r.b)("inlineCode",{parentName:"p"},"docker"),", which will deploy WKP on footloose containers."),Object(r.b)("p",null,"Another possibility, available only on Linux due to its KVM requirement, is to use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/weaveworks/ignite"},"ignite")," to deploy WKP on lightweight VMs."),Object(r.b)("p",null,"For this example we will use the default backend ",Object(r.b)("inlineCode",{parentName:"p"},"docker"),"."),Object(r.b)("p",null,"WKP uses a personal access token to create the cluster repository on GitHub. The token needs to have permissions in\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"repo")," scope. The github documentation on how to create one can be found on this ",Object(r.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"},"page"),". Once you have created one,\nset the environment variable for it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"export GITHUB_TOKEN=my-token\n")),Object(r.b)("h4",{id:"eks-d"},"EKS-D"),Object(r.b)("p",null,"If you would like to run EKS-D in your cluster using the experimental support for EKS-D in WKP, please follow the instructions at: ",Object(r.b)("a",{parentName:"p",href:"/tasks/using-the-eks-d-distribution"},"Using the EKS-D Kubernetes distribution")),Object(r.b)("p",null,"Now we are ready to install the cluster:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"wk setup run\n")),Object(r.b)("h3",{id:"access-the-wkp-ui"},"Access the WKP UI"),Object(r.b)("h4",{id:"via-wk-ui-command"},"via wk ui command"),Object(r.b)("p",null,"To expose the WKP UI via wk ui command, run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"wk ui\n")),Object(r.b)("p",null,"You should now be able to view it at ",Object(r.b)("a",{parentName:"p",href:"http://localhost:8090"},"http://localhost:8090")),Object(r.b)("p",null,"To expose the WKP UI to a different port other than the default, run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"wk ui --port 8081\n")),Object(r.b)("h3",{id:"delete-a-wkp-cluster"},"Delete a WKP cluster"),Object(r.b)("p",null,"You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"cleanup.sh")," script:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"./setup/cleanup.sh wk\n")))}p.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);