(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.a.createElement(b,s(s({ref:t},p),{},{components:n})):r.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(170)),c={title:"Deploying Workloads"},s={unversionedId:"team-workspaces/member-guide",id:"version-2.4.2/team-workspaces/member-guide",isDocsHomePage:!1,title:"Deploying Workloads",description:"[//]: # (Please keep in sync with the readme template at workspacegitprovider.go until it is moved to a file)",source:"@site/versioned_docs/version-2.4.2/team-workspaces/member-guide.md",slug:"/team-workspaces/member-guide",permalink:"/docs/team-workspaces/member-guide",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.4.2/team-workspaces/member-guide.md",version:"2.4.2",sidebar:"version-2.4.2/docs",previous:{title:"Specifying Team Permissions",permalink:"/docs/team-workspaces/team-permissions"},next:{title:"Running and Managing Workloads",permalink:"/docs/cluster-operations/user-workloads"}},i=[{value:"How to deploy a workload using GitOps",id:"how-to-deploy-a-workload-using-gitops",children:[]},{value:"Which namespaces does a Workspace manage?",id:"which-namespaces-does-a-workspace-manage",children:[]},{value:"Accessing the workspace via kubectl",id:"accessing-the-workspace-via-kubectl",children:[]},{value:"Notes",id:"notes",children:[]}],p={toc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A workspace member shares the cluster with other tenants and has a restricted ability to manage resources. This limited access to the cluster is provided via the workspace's ServiceAccount."),Object(o.b)("h2",{id:"how-to-deploy-a-workload-using-gitops"},"How to deploy a workload using GitOps"),Object(o.b)("p",null,"Clone the workspace repository and commit and push your deployment."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'git add deployment.yaml\ngit commit --message "Adds deployment"\ngit push\n')),Object(o.b)("p",null,"The cluster will momentarily sync any changes to the repo, adding or removing resources as needed."),Object(o.b)("p",null,"Make sure that the ",Object(o.b)("inlineCode",{parentName:"p"},"namespace")," of the deployment or any other resource in git repository is a namespace managed by this workspace."),Object(o.b)("h2",{id:"which-namespaces-does-a-workspace-manage"},"Which namespaces does a Workspace manage?"),Object(o.b)("p",null,"These are set by the cluster admin and can be seen by getting the specific workspace object:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl --kubeconfig foo-workspace-kubeconfig get workspace foo-workspace -n wkp-workspaces -oyaml\n")),Object(o.b)("h2",{id:"accessing-the-workspace-via-kubectl"},"Accessing the workspace via kubectl"),Object(o.b)("p",null,"A cluster administrator can provide a ",Object(o.b)("em",{parentName:"p"},"kubeconfig")," file to manage the resources of a specific workspace. This file\ncontains the credentials of the Workspace's ",Object(o.b)("inlineCode",{parentName:"p"},"ServiceAccount")," that can be used by ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl --kubeconfig foo-workspace-kubeconfig get pods\n")),Object(o.b)("p",null,"The kubeconfig file sets the default namespace to the first namespace the Workspace manages. Other namespaces can be\naccessed by using the namespace flag: ",Object(o.b)("inlineCode",{parentName:"p"},"--namespace foo-namespace-2"),"."),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"A current limitation of the Workspace Controller is its inability to apply an ",Object(o.b)("em",{parentName:"p"},"empty"),"\nrepository to a cluster. If you have deployments and other manifests commited to this repository,\nand then ",Object(o.b)("em",{parentName:"p"},"delete all of them")," so there are 0 manifests left, then the apply will fail and the\nresources will not be removed from the cluster. You can either: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ask your admin to delete the workspace if you are done with it."),Object(o.b)("li",{parentName:"ol"},"Add a dummy ",Object(o.b)("em",{parentName:"li"},"ConfigMap")," after deleting everything else so that you have at least 1 manifest to apply.")))}l.isMDXComponent=!0}}]);