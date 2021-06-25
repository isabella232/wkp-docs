(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return g})),a.d(t,"metadata",(function(){return f})),a.d(t,"toc",(function(){return v})),a.d(t,"default",(function(){return j}));var n=a(3),r=a(7),o=a(0),s=a.n(o),c=a(212),l=a(231),i=a(214),u=a(168),p=a.n(u);var d=37,b=39;var m=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,r=e.values,c=e.groupId,u=e.className,m=Object(l.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(o.useState)(n),v=f[0],O=f[1],j=o.Children.toArray(e.children),w=[];if(null!=c){var y=h[c];null!=y&&y!==v&&r.some((function(e){return e.value===y}))&&O(y)}var C=function(e){var t=e.target,a=w.indexOf(t),n=j[a].props.value;O(n),null!=c&&(g(c,n),setTimeout((function(){var e,a,n,r,o,s,c,l;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,s=window,c=s.innerHeight,l=s.innerWidth,a>=0&&o<=l&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout((function(){return t.classList.remove(p.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case b:var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case d:var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null===(t=a)||void 0===t||t.focus()};return s.a.createElement("div",{className:"tabs-container"},s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},u)},r.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(i.a)("tabs__item",p.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:C,onClick:C},a)}))),t?Object(o.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var h=function(e){var t=e.children,a=e.hidden,n=e.className;return s.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},g={title:"Usage guide"},f={unversionedId:"mccp/usage-guide",id:"mccp/usage-guide",isDocsHomePage:!1,title:"Usage guide",description:"How to: Install MCCP using a Helm chart",source:"@site/docs/mccp/usage-guide.md",slug:"/mccp/usage-guide",permalink:"/docs/next/mccp/usage-guide",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/docs/mccp/usage-guide.md",version:"current",sidebar:"docs",previous:{title:"What is Multi-cluster Control Plane?",permalink:"/docs/next/mccp/intro"},next:{title:"Cluster API Providers",permalink:"/docs/next/mccp/cluster-api-providers"}},v=[{value:"How to: Install MCCP using a Helm chart",id:"how-to-install-mccp-using-a-helm-chart",children:[{value:"1. Creating a namespace",id:"1-creating-a-namespace",children:[]},{value:"2. Choosing a database",id:"2-choosing-a-database",children:[]},{value:"3. Creating a secret for docker repository",id:"3-creating-a-secret-for-docker-repository",children:[]},{value:"4. Create a secret for creating pull requests on your git provider",id:"4-create-a-secret-for-creating-pull-requests-on-your-git-provider",children:[]},{value:"5. Determining the public IP address of the worker nodes",id:"5-determining-the-public-ip-address-of-the-worker-nodes",children:[]},{value:"6. Installing the Helm chart",id:"6-installing-the-helm-chart",children:[]},{value:"7. Checking that MCCP is installed (optional)",id:"7-checking-that-mccp-is-installed-optional",children:[]}]},{value:"How to: Connect a cluster",id:"how-to-connect-a-cluster",children:[]},{value:"How to: Update a cluster",id:"how-to-update-a-cluster",children:[]},{value:"How to: Disconnect and remove a cluster",id:"how-to-disconnect-and-remove-a-cluster",children:[]}],O={toc:v};function j(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},O,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"how-to-install-mccp-using-a-helm-chart"},"How to: Install MCCP using a Helm chart"),Object(c.b)("p",null,"Installing MCCP requires we:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Create a namespace"),Object(c.b)("li",{parentName:"ol"},"Choose a database"),Object(c.b)("li",{parentName:"ol"},"Create a secret for docker repository"),Object(c.b)("li",{parentName:"ol"},"Create a secret for creating pull requests on your git provider"),Object(c.b)("li",{parentName:"ol"},"Determine the public IP address of the worker nodes"),Object(c.b)("li",{parentName:"ol"},"Install the MCCP helm chart"),Object(c.b)("li",{parentName:"ol"},"Check that MCCP has been installed (optional)")),Object(c.b)("h3",{id:"1-creating-a-namespace"},"1. Creating a namespace"),Object(c.b)("p",null,"Create a new namespace that will be used to run the MCCP components:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create namespace mccp\n")),Object(c.b)("h3",{id:"2-choosing-a-database"},"2. Choosing a database"),Object(c.b)("p",null,"MCCP stores incoming data from the connected clusters to a relational database. It supports ",Object(c.b)("strong",{parentName:"p"},"SQLite")," and ",Object(c.b)("strong",{parentName:"p"},"PostgreSQL"),". When using ",Object(c.b)("strong",{parentName:"p"},"SQLite")," the database file may be stored on a host path volume or on a persistent volume. By default, MCCP will use ",Object(c.b)("strong",{parentName:"p"},"SQLite on a host path volume"),"."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Installing MCCP in its default configuration is ideal for trying it out but it is not recommended for production use. Using a SQLite database on a persistent volume or a cloud-hosted PostgreSQL database allows for increased reliability and scalability."))),Object(c.b)(m,{groupId:"database-systems",defaultValue:"sqlite-host-path-volume",values:[{label:"SQLite on a host path volume",value:"sqlite-host-path-volume"},{label:"SQLite on a persistent volume",value:"sqlite-persistent-volume"},{label:"PostgreSQL",value:"postgres"}],mdxType:"Tabs"},Object(c.b)(h,{value:"sqlite-host-path-volume",mdxType:"TabItem"},Object(c.b)("p",null,"In this configuration, the database file is stored on one of the cluster worker nodes. In order for all the MCCP pods to be able to access the host volume, they must be placed on the same node. We can enforce this by applying a label to one of the cluster worker nodes:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# list all worker nodes\n$ kubectl get node --selector='!node-role.kubernetes.io/master' -o name\nnode/ip-192-168-40-197.eu-north-1.compute.internal\nnode/ip-192-168-68-212.eu-north-1.compute.internal\n\n# choose the first one and label it for mccp database hosting\n$ kubectl label node/ip-192-168-40-197.eu-north-1.compute.internal wkp-database-volume-node=true\n")),Object(c.b)("p",null,"This label will ensure that the MCCP pods will be deployed and run on the selected node.")),Object(c.b)(h,{value:"sqlite-persistent-volume",mdxType:"TabItem"},Object(c.b)("p",null,"If your cluster supports persistent volume storage and has a storage class defined, you can use it to request a persistent volume for the SQLite database file. The exact details of the persistent volume request vary by cluster type and the supported volume types. The following manifest is an example of a configuration of a ",Object(c.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: mccp-volume\n  namespace: mccp\nspec:\n  storageClassName: default\n  resources:\n    requests:\n      storage: 100G\n  volumeMode: Filesystem\n  accessModes:\n    - ReadWriteOnce\n"))),Object(c.b)(h,{value:"postgres",mdxType:"TabItem"},Object(c.b)("p",null,"Using a PostgreSQL database does not require any additional setup on the cluster side. The following details are however needed in order to connect:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Database server hostname"),Object(c.b)("li",{parentName:"ul"},"Database name"),Object(c.b)("li",{parentName:"ul"},"Database user - The database user requires admin privileges on the database server as it will automatically create the necessary schema."),Object(c.b)("li",{parentName:"ul"},"Database password")),Object(c.b)("p",null,"The database credentials (user and password) need to be provided separately, before\ninstalling the chart, as a secret. Run the following command to create a secret:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create secret generic mccp-db-credentials \\\n    --namespace mccp \\\n    --from-literal=username=<database-user> \\\n    --from-literal=password=<database-password>\n")))),Object(c.b)("h3",{id:"3-creating-a-secret-for-docker-repository"},"3. Creating a secret for docker repository"),Object(c.b)("p",null,"Create a secret that contains your docker repository credentials. This secret will be used by Kubernetes during deployment in order to pull down the MCCP images. You can find instructions on how to generate this secret ",Object(c.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"here"),"."),Object(c.b)("p",null,"Add this secret to the target namespace. This needs to be the same namespace that the Helm chart will be installed."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create secret docker-registry \\\n  --namespace mccp docker-io-pull-secret \\\n  --docker-username=<your-docker-username> \\\n  --docker-password=<your-docker-password>\n")),Object(c.b)("p",null,"If you use a secrets management solution such as Sealed Secrets follow their instructions on how to create a new secret."),Object(c.b)("p",null,"Take note of the secret name as you will need to supply it later when installing the chart."),Object(c.b)("h3",{id:"4-create-a-secret-for-creating-pull-requests-on-your-git-provider"},"4. Create a secret for creating pull requests on your git provider"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'kubectl create secret generic git-provider-credentials \\\n  --namespace=<mccp-namespace>\n  --from-literal="GIT_PROVIDER_TOKEN=$GITHUB_TOKEN"\n')),Object(c.b)("h3",{id:"5-determining-the-public-ip-address-of-the-worker-nodes"},"5. Determining the public IP address of the worker nodes"),Object(c.b)("p",null,"You need to determine the public IP address of the worker nodes of your cluster. This IP address is necessary in order to establish connectivity between agents and your MCCP instance. The way to determine this depends on your cluster type and provisioning method. Take note of that IP address as you will need to supply it later when installing the chart."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},Object(c.b)("em",{parentName:"p"},"You may also use a domain name instead of an IP address.")))),Object(c.b)("h3",{id:"6-installing-the-helm-chart"},"6. Installing the Helm chart"),Object(c.b)("p",null,"Before installing the chart, you need to add the Helm chart repository and then update its local cache. Run the following commands:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'$ helm repo add wkpv3 https://s3.us-east-1.amazonaws.com/weaveworks-wkp/charts-v3\n  "wkpv3" has been added to your repositories\n$ helm repo update\n  Hang tight while we grab the latest from your chart repositories...\n  ...Successfully got an update from the "wkpv3" chart repository\n  Update Complete. \u2388Happy Helming!\u2388\n')),Object(c.b)("p",null,"Finally install the Helm chart to the target namespace by executing the following command using the Helm CLI (>= ",Object(c.b)("inlineCode",{parentName:"p"},"v3.5.4"),")."),Object(c.b)(m,{groupId:"database-systems",defaultValue:"sqlite-host-path-volume",values:[{label:"SQLite on a host path volume",value:"sqlite-host-path-volume"},{label:"SQLite on a persistent volume",value:"sqlite-persistent-volume"},{label:"PostgreSQL",value:"postgres"}],mdxType:"Tabs"},Object(c.b)(h,{value:"sqlite-host-path-volume",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'$ helm install mccp wkpv3/mccp \\\n    --version <chart-version> \\\n    --namespace mccp \\\n    --set "imagePullSecrets[0].name=<secret-containing-docker-config>" \\\n    --set "agentTemplate.natsURL=<nats-address>:<exposed-port-for-nats>" \\\n    --set "nats.client.service.nodePort=<exposed-port-for-nats>" \\\n    --set "wkp-ui.image.pullSecrets[0]=<secret-containing-docker-config>" \\\n    --set "config.capi.repositoryURL=https://github.com/example/management-repo" \\\n    --set "config.capi.baseBranch=main"\n'))),Object(c.b)(h,{value:"sqlite-persistent-volume",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'$ helm install mccp wkpv3/mccp \\\n    --version <chart-version> \\\n    --namespace mccp \\\n    --set "imagePullSecrets[0].name=<secret-containing-docker-config>" \\\n    --set "dbConfig.databaseType=sqlite" \\\n    --set "sqliteConfig.persistentVolumeClaim=true" \\\n    --set "agentTemplate.natsURL=<nats-address>:<exposed-port-for-nats>" \\\n    --set "nats.client.service.nodePort=<exposed-port-for-nats>" \\\n    --set "wkp-ui.image.pullSecrets[0]=<secret-containing-docker-config>"\n    --set "config.capi.repositoryURL=https://github.com/example/management-repo" \\\n    --set "config.capi.baseBranch=main"\n'))),Object(c.b)(h,{value:"postgres",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'$ helm install mccp wkpv3/mccp \\\n    --version <chart-version> \\\n    --namespace mccp \\\n    --set "imagePullSecrets[0].name=<secret-containing-docker-config>" \\\n    --set "dbConfig.databaseType=postgres" \\\n    --set "dbConfig.databaseURI=<database-server-hostname>" \\\n    --set "postgresConfig.databaseName=<database-name>" \\\n    --set "agentTemplate.natsURL=<nats-address>:<exposed-port-for-nats>" \\\n    --set "nats.client.service.nodePort=<exposed-port-for-nats>" \\\n    --set "wkp-ui.image.pullSecrets[0]=<secret-containing-docker-config>"\n    --set "config.capi.repositoryURL=https://github.com/example/management-repo" \\\n    --set "config.capi.baseBranch=main"\n')),Object(c.b)("p",null,"By default, connections to PostgreSQL will use port 5432."))),Object(c.b)("h3",{id:"7-checking-that-mccp-is-installed-optional"},"7. Checking that MCCP is installed (optional)"),Object(c.b)("p",null,"You should now be able to load the MCCP UI by running the following command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl port-forward --namespace mccp deployments.apps/mccp-nginx-ingress-controller 8000:80\n")),Object(c.b)("p",null,"The MCCP UI should now be accessible at ",Object(c.b)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."),Object(c.b)("h2",{id:"how-to-connect-a-cluster"},"How to: Connect a cluster"),Object(c.b)("p",null,"To connect a cluster to the multi-cluster control plane (MCCP), first navigate to the ",Object(c.b)("inlineCode",{parentName:"p"},"Clusters")," section of the WKP UI and click on the ",Object(c.b)("inlineCode",{parentName:"p"},"Connect a cluster")," button. You will then be presented with a form to add the details of the leaf cluster being connected."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Name: this is the name of the leaf cluster. This is a required field."),Object(c.b)("li",{parentName:"ul"},"Ingress URL: this is the publicly accessible HTTP(S) endpoint of the leaf cluster. This is an optional field.")),Object(c.b)("p",null,"Click on the ",Object(c.b)("inlineCode",{parentName:"p"},"Save & next")," button to persist these details. You will then be presented with a ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl")," command that you can run to install an agent on your leaf cluster. The agent is responsible for inspecting the leaf cluster and sending back leaf information to the MCCP server. It will not make any changes to your cluster."),Object(c.b)("p",null,"Ensure that your current kubeconfig context is setup to use the leaf cluster. Then copy the command and run it."),Object(c.b)("p",null,"After a few seconds, the status of your cluster should change to ",Object(c.b)("inlineCode",{parentName:"p"},"Connected (Ready)")," which indicates that the leaf cluster has been successfully connected."),Object(c.b)("h2",{id:"how-to-update-a-cluster"},"How to: Update a cluster"),Object(c.b)("p",null,"To update a cluster, click on the rightmost icon of that cluster's row. You will be presented with a form that allows you to update its name and ingress URL. Finally click on the ",Object(c.b)("inlineCode",{parentName:"p"},"Save & next")," button to persist these changes."),Object(c.b)("h2",{id:"how-to-disconnect-and-remove-a-cluster"},"How to: Disconnect and remove a cluster"),Object(c.b)("p",null,"To disconnect a cluster open the config dialog with the \ud83d\udee0 button on the cluster's row."),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"Disconnect")," tab shows instructions on how to remove the wkp-agent from your leaf cluster."),Object(c.b)("p",null,'Once the agent has been removed its status will change from "Connected" to ',Object(c.b)("em",{parentName:"p"},"Last seen"),". Click ",Object(c.b)("em",{parentName:"p"},"Remove cluster from the MCCP")," to remove the cluster and the meta-data that's been collected."),Object(c.b)("p",null,"To re-connect the cluster again follow the ",Object(c.b)("em",{parentName:"p"},"Connect a cluster")," instructions above."),Object(c.b)("p",null,Object(c.b)("img",{alt:"Disconnect cluster",src:a(270).default})))}j.isMDXComponent=!0},212:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return a?r.a.createElement(m,c(c({ref:t},i),{},{components:a})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=a[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},214:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},231:function(e,t,a){"use strict";var n=a(0),r=a(232);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},232:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},270:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/disconnect-cluster-fa4a34617b18ae909507952f5f586848.png"}}]);