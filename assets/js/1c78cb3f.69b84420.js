(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{215:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},273:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/disconnect-cluster-fa4a34617b18ae909507952f5f586848.png"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(215)),i={title:"Usage guide"},c={unversionedId:"mccp/usage-guide",id:"version-2.5.0/mccp/usage-guide",isDocsHomePage:!1,title:"Usage guide",description:"How to: Enable the MCCP feature",source:"@site/versioned_docs/version-2.5.0/mccp/usage-guide.md",slug:"/mccp/usage-guide",permalink:"/docs/mccp/usage-guide",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.5.0/mccp/usage-guide.md",version:"2.5.0",sidebar:"version-2.5.0/docs",previous:{title:"What is Multi-cluster Control Plane?",permalink:"/docs/mccp/intro"},next:{title:"Configuring a Database",permalink:"/docs/mccp/database-configuration"}},s=[{value:"How to: Enable the MCCP feature",id:"how-to-enable-the-mccp-feature",children:[{value:"1. Choosing a database",id:"1-choosing-a-database",children:[]},{value:"2. Enable the MCCP in config.yaml",id:"2-enable-the-mccp-in-configyaml",children:[]},{value:"3. Set the ingress address for NATS",id:"3-set-the-ingress-address-for-nats",children:[]},{value:"Adding an ingress exception for <code>/agent.yaml</code>",id:"adding-an-ingress-exception-for-agentyaml",children:[]}]},{value:"How to: Connect a cluster",id:"how-to-connect-a-cluster",children:[]},{value:"How to: Update a cluster",id:"how-to-update-a-cluster",children:[]},{value:"How to: Disconnect and remove a cluster",id:"how-to-disconnect-and-remove-a-cluster",children:[]}],l={toc:s};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"how-to-enable-the-mccp-feature"},"How to: Enable the MCCP feature"),Object(r.b)("p",null,"Enabling the MCCP requires we:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Choose and configure the database in ",Object(r.b)("inlineCode",{parentName:"li"},"config.yaml")),Object(r.b)("li",{parentName:"ol"},"Enable the ",Object(r.b)("inlineCode",{parentName:"li"},"fleetManagement")," feature in ",Object(r.b)("inlineCode",{parentName:"li"},"config.yaml")),Object(r.b)("li",{parentName:"ol"},"Configure the ingress address for NATS that an agent running on a leaf cluster will connect to.")),Object(r.b)("h3",{id:"1-choosing-a-database"},"1. Choosing a database"),Object(r.b)("p",null,"The default MCCP database configuration will use ",Object(r.b)("strong",{parentName:"p"},"SQLite")," on a ",Object(r.b)("em",{parentName:"p"},"Host Volume"),". For all the MCCP pods to be able to access this host volume they must be on the same node. We can do this by applying a label to one of the cluster worker nodes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"# list all worker nodes\n$ kubectl get node --selector='!node-role.kubernetes.io/master' -o name\nnode/ip-192-168-40-197.eu-north-1.compute.internal\nnode/ip-192-168-68-212.eu-north-1.compute.internal\n\n# choose the first one and label it for mccp database hosting\n$ kubectl label node/ip-192-168-40-197.eu-north-1.compute.internal wkp-database-volume-node=true\n")),Object(r.b)("p",null,"Now you can enable the MCCP in config.yaml."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("em",{parentName:"p"},"The MCCP also supports ",Object(r.b)("strong",{parentName:"em"},"PostgreSQL")," or mounting SQLite on Persistent Volume instead of the host volume described here. See ",Object(r.b)("a",{parentName:"em",href:"./database-configuration"},"Database Configuration")," for details.")))),Object(r.b)("h3",{id:"2-enable-the-mccp-in-configyaml"},"2. Enable the MCCP in config.yaml"),Object(r.b)("p",null,"To enable the MCCP feature edit the ",Object(r.b)("inlineCode",{parentName:"p"},"setup/config.yaml")," file, set the ",Object(r.b)("inlineCode",{parentName:"p"},"enabledFeatures: fleetManagement"),"\nfield to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", commit and push to the cluster repository."),Object(r.b)("p",null,"After a few seconds, the MCCP components are deployed in the ",Object(r.b)("inlineCode",{parentName:"p"},"wkp-gitops-repo-broker")," namespace."),Object(r.b)("h3",{id:"3-set-the-ingress-address-for-nats"},"3. Set the ingress address for NATS"),Object(r.b)("p",null,"When connecting a leaf cluster a set of manifests are applied to with ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl apply -f https://wkp-host/gitops/api/agent.yaml?token=abc"),". We set the NATS url that is included in ",Object(r.b)("inlineCode",{parentName:"p"},"agent.yaml")," (that the agent will use to connect to the management cluster) by editing ",Object(r.b)("inlineCode",{parentName:"p"},"./cluster/platform/components.js"),"."),Object(r.b)("p",null,"Once the MCCP has started up you'll see a NATS ",Object(r.b)("inlineCode",{parentName:"p"},"NodePort")," service running the in ",Object(r.b)("inlineCode",{parentName:"p"},"wkp-gitops-repo-broker")," namespace:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"$ kubectl get services -n wkp-gitops-repo-broker nats-client\nNAME          TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE\nnats-client   NodePort   10.100.14.240   <none>        4222:32545/TCP   20d\n")),Object(r.b)("p",null,"Take the port (in this case 32545) and update the ",Object(r.b)("inlineCode",{parentName:"p"},"wkpGitopsRepoBroker")," params with the ",Object(r.b)("em",{parentName:"p"},"external address")," of the host (this can be an IP or a hostname) and port discovered above."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'const wkpGitopsRepoBroker = {\n  // ...\n  params: {\n    // ...\n    agentTemplate: {\n      natsURL: \'123.123.123.123:32454\',\n      // Could also be a hostname\n      // "natsURL": "wkp-host:32454",\n    },\n    // ...\n  },\n  // ...\n};\n')),Object(r.b)("p",null,"Commit and push the changes to ",Object(r.b)("inlineCode",{parentName:"p"},"./cluster/platform/components.js"),". You can now open the UI via configured ingress or with ",Object(r.b)("inlineCode",{parentName:"p"},"wk ui")," and connect clusters. See ",Object(r.b)("a",{parentName:"p",href:"#how-to-connect-a-cluster"},"How to connect a cluster")," below."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Tip: You can verify that the address is externally accessible with the ",Object(r.b)("a",{parentName:"em",href:"https://github.com/nats-io/natscli"},Object(r.b)("inlineCode",{parentName:"a"},"natscli")),":")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# Wrong host/port will give a connection error\n$ nats sub test --server wkp-host:1234\nnats: error: nats: no servers available for connection, try --help\n\n# Correct host/port will give an auth error!\n# (This is fine we are not providing credentials here just testing the connection)\n$ nats sub test --server wkp-host:32545\nnats: error: nats: Authorization Violation, try --help\n")),Object(r.b)("h3",{id:"adding-an-ingress-exception-for-agentyaml"},"Adding an ingress exception for ",Object(r.b)("inlineCode",{parentName:"h3"},"/agent.yaml")),Object(r.b)("p",null,"If you have configured ingress with authentication (see ",Object(r.b)("a",{parentName:"p",href:"../cluster-operations/auth"},"Securing the UI")," you may need to add an additional ingress rule for ",Object(r.b)("inlineCode",{parentName:"p"},"/gitops/api/agent.yaml")," to ensure that this path is publicly accessible. The manifest below shows how to add this rule."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    cert-manager.io/cluster-issuer: letsencrypt-prod\n  name: wkp-ui-agent-no-auth\n  namespace: wkp-ui\nspec:\n  rules:\n    - host: <hostname-to-use> # e.g. app.wkp.weave.works\n      http:\n        paths:\n          - path: /gitops/api/agent.yaml\n            backend:\n              serviceName: wkp-ui-nginx-ingress-controller\n              servicePort: 80\n  tls:\n    - hosts:\n        - <hostname-to-use> # e.g. app.wkp.weave.works\n      secretName: wkp-tls\n")),Object(r.b)("h2",{id:"how-to-connect-a-cluster"},"How to: Connect a cluster"),Object(r.b)("p",null,"To connect a cluster to the multi-cluster control plane (MCCP), first navigate to the ",Object(r.b)("inlineCode",{parentName:"p"},"Clusters")," section of the WKP UI and click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Connect a cluster")," button. You will then be presented with a form to add the details of the leaf cluster being connected."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Name: this is the name of the leaf cluster. This is a required field."),Object(r.b)("li",{parentName:"ul"},"Ingress URL: this is the publicly accessible HTTP(S) endpoint of the leaf cluster. This is an optional field.")),Object(r.b)("p",null,"Click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Save & next")," button to persist these details. You will then be presented with a ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl")," command that you can run to install an agent on your leaf cluster. The agent is responsible for inspecting the leaf cluster and sending back leaf information to the MCCP server. It will not make any changes to your cluster."),Object(r.b)("p",null,"Ensure that your current kubeconfig context is setup to use the leaf cluster. Then copy the command and run it."),Object(r.b)("p",null,"After a few seconds, the status of your cluster should change to ",Object(r.b)("inlineCode",{parentName:"p"},"Connected (Ready)")," which indicates that the leaf cluster has been successfully connected."),Object(r.b)("h2",{id:"how-to-update-a-cluster"},"How to: Update a cluster"),Object(r.b)("p",null,"To update a cluster, click on the rightmost icon of that cluster's row. You will be presented with a form that allows you to update its name and ingress URL. Finally click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Save & next")," button to persist these changes."),Object(r.b)("h2",{id:"how-to-disconnect-and-remove-a-cluster"},"How to: Disconnect and remove a cluster"),Object(r.b)("p",null,"To disconnect a cluster open the config dialog with the \ud83d\udee0 button on the cluster's row."),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"Disconnect")," tab shows instructions on how to remove the wkp-agent from your leaf cluster."),Object(r.b)("p",null,'Once the agent has been removed its status will change from "Connected" to ',Object(r.b)("em",{parentName:"p"},"Last seen"),". Click ",Object(r.b)("em",{parentName:"p"},"Remove cluster from the MCCP")," to remove the cluster and the meta-data that's been collected."),Object(r.b)("p",null,"To re-connect the cluster again follow the ",Object(r.b)("em",{parentName:"p"},"Connect a cluster")," instructions above."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Disconnect cluster",src:n(273).default})))}p.isMDXComponent=!0}}]);