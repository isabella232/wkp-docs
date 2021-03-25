(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(170)),i={title:"Creating Clusters on SSH Nodes"},s={unversionedId:"deploying-wkp/cluster-creation-on-ssh-nodes",id:"deploying-wkp/cluster-creation-on-ssh-nodes",isDocsHomePage:!1,title:"Creating Clusters on SSH Nodes",description:"Install the dependencies",source:"@site/docs/deploying-wkp/cluster-creation-on-ssh-nodes.md",slug:"/deploying-wkp/cluster-creation-on-ssh-nodes",permalink:"/wkp/docs/next/deploying-wkp/cluster-creation-on-ssh-nodes",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/docs/deploying-wkp/cluster-creation-on-ssh-nodes.md",version:"current",sidebar:"docs",previous:{title:"Cluster Node Requirements",permalink:"/wkp/docs/next/deploying-wkp/hosts"},next:{title:"Install to an Existing Cluster",permalink:"/wkp/docs/next/deploying-wkp/components-on-existing-cluster"}},l=[{value:"Install the dependencies",id:"install-the-dependencies",children:[]},{value:"Entitlements",id:"entitlements",children:[]},{value:"Install WKP on SSH Nodes",id:"install-wkp-on-ssh-nodes",children:[]},{value:"Access the WKP UI",id:"access-the-wkp-ui",children:[]},{value:"Delete a WKP cluster",id:"delete-a-wkp-cluster",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"install-the-dependencies"},"Install the dependencies"),Object(o.b)("p",null,"On the computer that will be used for the installation, you need to install:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.atlassian.com/git/tutorials/install-git"},"git")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"wk")," binary. You can ensure it is in your path by running ",Object(o.b)("inlineCode",{parentName:"li"},"wk version"))),Object(o.b)("h3",{id:"entitlements"},"Entitlements"),Object(o.b)("p",null,"Ensure that ",Object(o.b)("inlineCode",{parentName:"p"},"wk")," can load a valid ",Object(o.b)("a",{parentName:"p",href:"/wkp/docs/next/getting-started/entitlements"},"entitlements")," file."),Object(o.b)("h3",{id:"install-wkp-on-ssh-nodes"},"Install WKP on SSH Nodes"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Please ensure the nodes fulfill the requirements described in ",Object(o.b)("a",{parentName:"p",href:"/wkp/docs/next/deploying-wkp/hosts"},"cluster node requirements"),"."),Object(o.b)("p",{parentName:"blockquote"},"If your cluster has multiple control plane nodes, to ensure high availability it is recommended to ",Object(o.b)("a",{parentName:"p",href:"/wkp/docs/next/tasks/control-plane-load-balancers"},"setup a control plane load balancer"),".")),Object(o.b)("p",null,"First, create a directory which will contain the cluster management scripts and binaries."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir wkp-cluster && cd wkp-cluster\nwk setup install --entitlements=/path/to/my/entitlements\n")),Object(o.b)("p",null,"The main configuration file will be unpacked at ",Object(o.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),"."),Object(o.b)("p",null,"The required values are your git provider organization or user, your Docker Hub user, and an absolute path to a file containing your Docker Hub password:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.wks\necho 'my-dockerhub-password' > ~/.wks/dockerhub-password\nchmod 600 ~/.wks/dockerhub-password\n")),Object(o.b)("p",null,"Enter your ",Object(o.b)("inlineCode",{parentName:"p"},"gitProvider"),", ",Object(o.b)("inlineCode",{parentName:"p"},"gitProviderOrg"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dockerIOUser"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"dockerIOPasswordFile")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),". (See ",Object(o.b)("a",{parentName:"p",href:"/wkp/docs/next/getting-started/git-config-repository"},"Git Config Repository")," for details about git parameters)"),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"track")," field to ",Object(o.b)("inlineCode",{parentName:"p"},"wks-ssh"),", and optionally, set the ",Object(o.b)("inlineCode",{parentName:"p"},"clusterName"),".\nIn the ",Object(o.b)("inlineCode",{parentName:"p"},"wksConfig")," section you can specify the version and other configuration for your cluster\ndepending on your infrastructure."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"wksConfig.sshConfig")," section, please provide a ",Object(o.b)("inlineCode",{parentName:"p"},"sshUser")," that has passwordless sudo access to your nodes, and\nthe path to the matching private ",Object(o.b)("inlineCode",{parentName:"p"},"sshKeyFile"),"."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"machines")," array, specify the ",Object(o.b)("inlineCode",{parentName:"p"},"role")," of each node, and its private and public IP address. At least 1 ",Object(o.b)("inlineCode",{parentName:"p"},"master"),"\nand 1 ",Object(o.b)("inlineCode",{parentName:"p"},"worker")," node is required."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"machines:\n  - role: master\n    publicAddress: 35.195.66.60\n    privateAddress: 10.132.0.21\n  - role: worker\n    publicAddress: 34.77.149.149\n    privateAddress: 10.132.0.26\n")),Object(o.b)("p",null,"If you have a ",Object(o.b)("strong",{parentName:"p"},"load balancer")," configured to route api-server (",Object(o.b)("inlineCode",{parentName:"p"},":6443"),") traffic to all of the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," nodes specified in ",Object(o.b)("inlineCode",{parentName:"p"},"machines"),", you can provide its ",Object(o.b)("strong",{parentName:"p"},"public")," IP Address in ",Object(o.b)("inlineCode",{parentName:"p"},"wksConfig.controlPlaneLbAddress"),". (",Object(o.b)("em",{parentName:"p"},"See ",Object(o.b)("a",{parentName:"em",href:"/wkp/docs/next/tasks/control-plane-load-balancers"},"Control plane load balancers")," for details."),")"),Object(o.b)("p",null,"WKP uses a personal access token to create the cluster repository on GitHub. The token needs to have permissions in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"repo")," scope. The github documentation on how to create one can be found on this ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"},"page"),". Once you have created one,\nset the environment variable for it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"export GITHUB_TOKEN=my-token\n")),Object(o.b)("h4",{id:"eks-d"},"EKS-D"),Object(o.b)("p",null,"If you would like to run EKS-D in your cluster using the experimental support for EKS-D in WKP, please follow the instructions at: ",Object(o.b)("a",{parentName:"p",href:"/wkp/docs/next/tasks/using-the-eks-d-distribution"},"Using the EKS-D Kubernetes distribution")),Object(o.b)("p",null,"Now we are ready to install the cluster:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wk setup run\n")),Object(o.b)("h3",{id:"access-the-wkp-ui"},"Access the WKP UI"),Object(o.b)("h4",{id:"via-wk-ui-command"},"via wk ui command"),Object(o.b)("p",null,"To expose the WKP UI via wk ui command, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wk ui\n")),Object(o.b)("p",null,"You should now be able to view it at ",Object(o.b)("a",{parentName:"p",href:"http://localhost:8090"},"http://localhost:8090")),Object(o.b)("p",null,"To expose the WKP UI to a different port other than the default, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wk ui --port 8081\n")),Object(o.b)("h4",{id:"via-application-load-balancer"},"via Application Load Balancer"),Object(o.b)("p",null,"To access the WKP UI via its assigned ingress, get the allocated address:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"kubectl get ingress --namespace wkp-ui wkp-ui-alb-ingress\nNAME                 HOSTS   ADDRESS                        PORTS   AGE\nwkp-ui-alb-ingress   *       my-wkp-cluster.mycompany.com   80      7m5s\n")),Object(o.b)("p",null,"and navigate to it from your browser."),Object(o.b)("p",null,"In this example the address is ",Object(o.b)("inlineCode",{parentName:"p"},"my-wkp-cluster.mycompany.com"),"."),Object(o.b)("h3",{id:"delete-a-wkp-cluster"},"Delete a WKP cluster"),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"cleanup.sh")," script:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./setup/cleanup.sh wk\n")))}p.isMDXComponent=!0}}]);