(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(215)),i={title:"Cluster creation on EKS"},l={unversionedId:"deploying-wkp/cluster-creation-on-eks",id:"version-2.5.0/deploying-wkp/cluster-creation-on-eks",isDocsHomePage:!1,title:"Cluster creation on EKS",description:"Install the dependencies",source:"@site/versioned_docs/version-2.5.0/deploying-wkp/cluster-creation-on-eks.md",slug:"/deploying-wkp/cluster-creation-on-eks",permalink:"/docs/deploying-wkp/cluster-creation-on-eks",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.5.0/deploying-wkp/cluster-creation-on-eks.md",version:"2.5.0",sidebar:"version-2.5.0/docs",previous:{title:"Install to an Existing Cluster",permalink:"/docs/deploying-wkp/components-on-existing-cluster"},next:{title:"Creating Clusters on SSH Nodes",permalink:"/docs/deploying-wkp/cluster-creation-on-ssh-nodes"}},c=[{value:"Install the dependencies",id:"install-the-dependencies",children:[]},{value:"Entitlements",id:"entitlements",children:[]},{value:"Install WKP on an EKS cluster",id:"install-wkp-on-an-eks-cluster",children:[]},{value:"Access the WKP UI",id:"access-the-wkp-ui",children:[]},{value:"Specifications of managed nodegroups",id:"specifications-of-managed-nodegroups",children:[]},{value:"Node Requirements",id:"node-requirements",children:[]},{value:"Delete a WKP cluster",id:"delete-a-wkp-cluster",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"install-the-dependencies"},"Install the dependencies"),Object(o.b)("p",null,"On the computer that will be used for the installation, you need to install:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.atlassian.com/git/tutorials/install-git"},"git")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"wk")," binary. You can ensure it is in your path by running ",Object(o.b)("inlineCode",{parentName:"li"},"wk version"))),Object(o.b)("h3",{id:"entitlements"},"Entitlements"),Object(o.b)("p",null,"Ensure that ",Object(o.b)("inlineCode",{parentName:"p"},"wk")," can load a valid ",Object(o.b)("a",{parentName:"p",href:"/docs/getting-started/entitlements"},"entitlements")," file."),Object(o.b)("h3",{id:"install-wkp-on-an-eks-cluster"},"Install WKP on an EKS cluster"),Object(o.b)("p",null,"First, create a directory which will contain the cluster management scripts and binaries."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir wkp-eks-cluster && cd wkp-eks-cluster\nwk setup install --entitlements=/path/to/my/entitlements\n")),Object(o.b)("p",null,"The main configuration file will be unpacked at ",Object(o.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),"."),Object(o.b)("p",null,"The required values are your git provider organization or user, your Docker Hub user, and an absolute path to a file containing your Docker Hub password:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.wks\necho 'my-dockerhub-password' > ~/.wks/dockerhub-password\nchmod 600 ~/.wks/dockerhub-password\n")),Object(o.b)("p",null,"Enter your ",Object(o.b)("inlineCode",{parentName:"p"},"gitProvider"),", ",Object(o.b)("inlineCode",{parentName:"p"},"gitProviderOrg"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dockerIOUser"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"dockerIOPasswordFile")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),". (See ",Object(o.b)("a",{parentName:"p",href:"/getting-started/git-config-repository"},"Git Config Repository")," for details about git parameters)"),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"track")," field to ",Object(o.b)("inlineCode",{parentName:"p"},"eks"),", and optionally, set the ",Object(o.b)("inlineCode",{parentName:"p"},"clusterName"),", ",Object(o.b)("inlineCode",{parentName:"p"},"clusterRegion"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"kubernetesVersion")," fields."),Object(o.b)("p",null,"You can provide a path to an eksctl config file directly to configure any of the available options, or set some of the commonly used configuration in the ",Object(o.b)("inlineCode",{parentName:"p"},"setup/config.yaml")," file."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Compatible with this version of WKP is eksctl's ",Object(o.b)("inlineCode",{parentName:"p"},"ClusterConfig"),", ",Object(o.b)("inlineCode",{parentName:"p"},"apiVersion: eksctl.io/v1alpha5"),".\nAlso, note that if an eksctl config file path is provided, it will override any other fields set in the eksConfig\nsection of the ",Object(o.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),".")),Object(o.b)("p",null,"A sample eksctl config file is provided in the cluster repository at ",Object(o.b)("inlineCode",{parentName:"p"},"setup/eksctl-config.yaml"),", for the documentation of its schema,\nplease refer to the ",Object(o.b)("a",{parentName:"p",href:"https://eksctl.io/"},"eksctl docs"),". The config file used will be copied to ",Object(o.b)("inlineCode",{parentName:"p"},"setup/eksctl-config.yaml")," and\ncommitted to the cluster repository."),Object(o.b)("p",null,"The WKP UI is not publicly accessible by default. If you want to expose it via an Application Load Balancer, set the ",Object(o.b)("inlineCode",{parentName:"p"},"uiALBIngress")," field to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("p",null,"Finally, enter any node group configuration you may require:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"vim setup/config.yaml\n")),Object(o.b)("p",null,"Example snippet of ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"track: eks\nclusterName: my-cluster\ngitProvider: gitlab\ngitUrl: git@git.acme.org:app-team/dev-cluster.git\ndockerIOUser: my-docker-user\ndockerIOPasswordFile: /home/my-user/.wks/my-dockerhub-password\n")),Object(o.b)("p",null,"WKP uses a personal access token to create the cluster repository on GitHub. The token needs to have permissions in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"repo")," scope. The github documentation on how to create one can be found on this ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"},"page"),". Once you have created one,\nset the environment variable for it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"export GITHUB_TOKEN=my-token\n")),Object(o.b)("p",null,"Finally, make sure your AWS CLI credentials are ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html"},"configured properly"),"."),Object(o.b)("p",null,"Now we are ready to install the cluster:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wk setup run\n")),Object(o.b)("h3",{id:"access-the-wkp-ui"},"Access the WKP UI"),Object(o.b)("h4",{id:"via-wk-ui-command"},"via wk ui command"),Object(o.b)("p",null,"To expose the WKP UI via wk ui command, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wk ui\n")),Object(o.b)("p",null,"You should now be able to view it at ",Object(o.b)("a",{parentName:"p",href:"http://localhost:8090"},"http://localhost:8090")),Object(o.b)("p",null,"To expose the WKP UI to a different port other than the default, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wk ui --port 8081\n")),Object(o.b)("h4",{id:"via-application-load-balancer"},"via Application Load Balancer"),Object(o.b)("p",null,"Ensure that the ",Object(o.b)("inlineCode",{parentName:"p"},"uiALBIngress")," field is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"eksConfig:\n  uiALBIngress: true\n")),Object(o.b)("p",null,"To access the WKP UI via its assigned ingress, get the allocated address:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get ingress --namespace wkp-ui wkp-ui-alb-ingress\nNAME                 HOSTS   ADDRESS                        PORTS   AGE\nwkp-ui-alb-ingress   *       my-wkp-cluster.mycompany.com   80      7m5s\n")),Object(o.b)("p",null,"and navigate to it from your browser."),Object(o.b)("p",null,"In this example the address is ",Object(o.b)("inlineCode",{parentName:"p"},"my-wkp-cluster.mycompany.com"),"."),Object(o.b)("h3",{id:"specifications-of-managed-nodegroups"},"Specifications of managed nodegroups"),Object(o.b)("p",null,"The specifications of the managed nodegroups of the cluster can be specified in a YAML file."),Object(o.b)("p",null,"An example file can be seen below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"managedNodeGroups:\n  - name: managed-1\n    instanceType: m5.large\n    minSize: 2\n    desiredCapacity: 3\n    maxSize: 4\n    availabilityZones: ['us-east-2a', 'us-east-2b']\n    volumeSize: 20\n    ssh:\n      allow: true\n      publicKeyPath: ~/.ssh/id_rsa.pub\n    labels: { role: worker }\n    tags:\n      nodegroup-role: worker\n    iam:\n      withAddonPolicies:\n        externalDNS: true\n        certManager: true\n")),Object(o.b)("p",null,"Once created, save it inside of the ",Object(o.b)("inlineCode",{parentName:"p"},"cluster/platform")," directory,\nand set the path, either relative from ",Object(o.b)("inlineCode",{parentName:"p"},"cluster/platform")," or absolute, in your ",Object(o.b)("inlineCode",{parentName:"p"},"setup/config.yaml"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"eksConfig:\n  nodeGroups: []\n  managedNodeGroupFile: managedNodeGroups.yaml\n")),Object(o.b)("h3",{id:"node-requirements"},"Node Requirements"),Object(o.b)("p",null,"Clusters can run on a single node or multiple, depending on the processing requirements.\nThe default node group WKP will deploy on EKS, is of instance type m5.large.\nA ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#before-you-begin"},"recommended minimum")," for nodes is 2 CPU cores and 2GB of RAM."),Object(o.b)("p",null,"If you are building a large cluster the ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"},"Kubernetes docs")," cover the specifications."),Object(o.b)("p",null,"Recommended instance types for AWS:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1-5 nodes: m3.medium"),Object(o.b)("li",{parentName:"ul"},"6-10 nodes: m3.large"),Object(o.b)("li",{parentName:"ul"},"11-100 nodes: m3.xlarge"),Object(o.b)("li",{parentName:"ul"},"101-250 nodes: m3.2xlarge"),Object(o.b)("li",{parentName:"ul"},"251-500 nodes: c4.4xlarge"),Object(o.b)("li",{parentName:"ul"},"more than 500 nodes: c4.8xlarge")),Object(o.b)("h3",{id:"delete-a-wkp-cluster"},"Delete a WKP cluster"),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"cleanup.sh")," script:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'./setup/cleanup.sh {{<param "clicmd" >}}\n')))}p.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);