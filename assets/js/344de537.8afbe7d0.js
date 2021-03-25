(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{170:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(170)),s={title:"Configuring a Database"},i={unversionedId:"mccp/database-configuration",id:"version-2.4.2/mccp/database-configuration",isDocsHomePage:!1,title:"Configuring a Database",description:"Supported databases",source:"@site/versioned_docs/version-2.4.2/mccp/database-configuration.md",slug:"/mccp/database-configuration",permalink:"/wkp/docs/mccp/database-configuration",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.4.2/mccp/database-configuration.md",version:"2.4.2",sidebar:"version-2.4.2/docs",previous:{title:"What is Multi-cluster Control Plane?",permalink:"/wkp/docs/mccp/intro"},next:{title:"Connecting Clusters",permalink:"/wkp/docs/mccp/usage-guide"}},c=[{value:"Supported databases",id:"supported-databases",children:[]},{value:"Providing database credentials",id:"providing-database-credentials",children:[]},{value:"Setting a storage class for SQLite",id:"setting-a-storage-class-for-sqlite",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"supported-databases"},"Supported databases"),Object(o.b)("p",null,"The Multi-cluster Control Plane (MCCP) component stores incoming data from the connected clusters in a database. It\nsupports sqlite and postgres databases. To configure the type of database, modify the\n",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," file at your cluster directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# Storage configuration for the fleet management database\n# Supported databases: `sqlite`, `postgres`\nfleetManagementDB:\n  databaseType: sqlite\n  databaseURI: '/var/database/mccp.db'\n  # Applies only if databaseType = sqlite\n  sqliteConfig:\n    hostPathVolume: true\n    # Path on the filesystem of the underlying kubernetes node\n    path: '/home/wks/database'\n    persistentVolumeClaim: false\n  # Applies only if databaseType = postgres\n  # To provide a user and password, refer to our user-guide at\n  # the MCCP Database Configuration page. Run `wk user-guide`.\n  postgresConfig:\n    databaseName: postgres\n")),Object(o.b)("p",null,"The database defaults to sqlite which will be stored as a file in a persistent volume in the cluster. When opting for a postgres database, credentials can be provided before\nenabling the ",Object(o.b)("inlineCode",{parentName:"p"},"fleetManagement")," feature in ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml"),"."),Object(o.b)("h3",{id:"providing-database-credentials"},"Providing database credentials"),Object(o.b)("p",null,"If you are opt for a postgres database, credentials for your user can be provided by\ngenerating a sealed secret in the following way:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic -n wkp-mccp mccp-db-credentials --from-literal=username=... --from-literal=password=... -oyaml --dry-run | kubeseal --cert setup/sealed-secrets-cert.crt -oyaml > mccp-db-credentials-wkp-mccp.yaml\nkubectl create secret generic -n wkp-gitops-repo-broker mccp-db-credentials --from-literal=username=... --from-literal=password=... -oyaml --dry-run | kubeseal --cert setup/sealed-secrets-cert.crt -oyaml > mccp-db-credentials-wkp-gitops-repo-broker.yaml\n")),Object(o.b)("p",null,"Then copy the generated file into your ",Object(o.b)("inlineCode",{parentName:"p"},"cluster/manifests")," directory, create a git commit and push.\nAfter a few seconds the secret should be created in your cluster. Verify the status of the pods in\n",Object(o.b)("inlineCode",{parentName:"p"},"wkp-gitops-repo-broker"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n wkp-gitops-repo-broker\n")),Object(o.b)("p",null,"and the logs of the ",Object(o.b)("inlineCode",{parentName:"p"},"event-writer")," pod to assert that it was able to connect to the database:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -n wkp-gitops-repo-broker -l=app=event-writer\n")),Object(o.b)("h3",{id:"setting-a-storage-class-for-sqlite"},"Setting a storage class for SQLite"),Object(o.b)("p",null,"If your cluster supports persistent volume storage and has a storage class defined, it is possible to\nset it for the MCCP SQLite database, as by default it will use a ",Object(o.b)("inlineCode",{parentName:"p"},"hostPath")," volume, which is\nnot suitable for production."),Object(o.b)("p",null,"To set the storage class, configure the following in your ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# Storage configuration for the fleet management database\n# Supported databases: `sqlite`, `postgres`\nfleetManagementDB:\n  databaseType: 'sqlite'\n  databaseURI: '/var/database/mccp.db'\n  # Applies only if databaseType = sqlite\n  sqliteConfig:\n    hostPathVolume: false\n    path: '/home/wks/database'\n    persistentVolumeClaim: true\n")),Object(o.b)("p",null,"Then, uncomment the sample persistent volume claim manifest ",Object(o.b)("inlineCode",{parentName:"p"},"pvc-wkp-gitops-repo-broker.yaml")," and\nmodify it according to your storage class and size requirements, finally git commit and push."))}p.isMDXComponent=!0}}]);