(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(215)),i={title:"Specifying Team Permissions"},s={unversionedId:"team-workspaces/team-permissions",id:"version-2.4.2/team-workspaces/team-permissions",isDocsHomePage:!1,title:"Specifying Team Permissions",description:"Workspaces may require different permission levels for their members. Permissions granted",source:"@site/versioned_docs/version-2.4.2/team-workspaces/team-permissions.md",slug:"/team-workspaces/team-permissions",permalink:"/docs/2.4.2/team-workspaces/team-permissions",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.4.2/team-workspaces/team-permissions.md",version:"2.4.2",sidebar:"version-2.4.2/docs",previous:{title:"Implementing Team Workspaces",permalink:"/docs/2.4.2/team-workspaces/usage-guide"},next:{title:"Deploying Workloads",permalink:"/docs/2.4.2/team-workspaces/member-guide"}},c=[{value:"workspace-member",id:"workspace-member",children:[]},{value:"namespace-admin",id:"namespace-admin",children:[]},{value:"cluster-admin",id:"cluster-admin",children:[]},{value:"How to: Allow teams with <code>workspace-member</code> access to create non-namespaced objects",id:"how-to-allow-teams-with-workspace-member-access-to-create-non-namespaced-objects",children:[]},{value:"Git commit statuses",id:"git-commit-statuses",children:[]},{value:"More Information",id:"more-information",children:[]}],l={toc:c};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Workspaces may require different permission levels for their members. Permissions granted\nfor each workspace are set by the role in the Workspace custom resource.\nWKP provides 3 levels by default:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"workspace-member")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"namespace-admin")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cluster-admin"))),Object(o.b)("p",null,"but it can support any custom ",Object(o.b)("inlineCode",{parentName:"p"},"ClusterRole")," the cluster admin has created in the cluster."),Object(o.b)("p",null,"In more detail the permissions of each role:"),Object(o.b)("h3",{id:"workspace-member"},"workspace-member"),Object(o.b)("p",null,"This role is applicable to dev teams as members of the workspace are able to perform all\noperations in the provided namespaces, but do not have permissions to modify tenant\npolicies that may be created, such as resource quotas, limit ranges, and network policies."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"workspace-member")," role manifest is added in the cluster repository in the\n",Object(o.b)("inlineCode",{parentName:"p"},"cluster/platform/workspaces")," directory and is reconciled by the flux instance in the\n",Object(o.b)("inlineCode",{parentName:"p"},"wkp-flux")," namespace, allowing for modification based on your requirements."),Object(o.b)("h3",{id:"namespace-admin"},"namespace-admin"),Object(o.b)("p",null,"This role grants namespace admin permissions to the namespaces that are in the workspace.\nMembers are able to modify all objects and resource in the namespace, making it more\nrelevant for teams in clusters without strict resource restrictions."),Object(o.b)("h3",{id:"cluster-admin"},"cluster-admin"),Object(o.b)("p",null,"This role grants cluster admin permission to the entire cluster. It is applicable to\ninfrastructure teams that may require to create namespaces, or deploy non namespaced objects, like custom resource definitions."),Object(o.b)("h2",{id:"how-to-allow-teams-with-workspace-member-access-to-create-non-namespaced-objects"},"How to: Allow teams with ",Object(o.b)("inlineCode",{parentName:"h2"},"workspace-member")," access to create non-namespaced objects"),Object(o.b)("p",null,"Members of a workspace may need to create non-namespaced objects, but it may not\nbe possible to grant the team cluster-admin permissions.\nThis use case can be addressed by binding multiple ",Object(o.b)("inlineCode",{parentName:"p"},"ClusterRoles")," to the service account\nof the specific workspace."),Object(o.b)("p",null,"An example of a ",Object(o.b)("inlineCode",{parentName:"p"},"ClusterRole")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," that grant permissions\nto create ",Object(o.b)("inlineCode",{parentName:"p"},"Custom Resource Definitions"),", are provided in the\n",Object(o.b)("inlineCode",{parentName:"p"},"cluster/platform/workspaces")," directory. See:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cluster/platform/workspaces/crd-manager-clusterrole.yaml")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cluster/platform/workspaces/crd-manager-clusterrolebinding.yaml"))),Object(o.b)("p",null,"To apply it to a workspace, create a copy of the ",Object(o.b)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," file and\nset the name of the placeholder of the service account to the name of the target workspace, and\npush the file to the cluster repository.\nAfter the reconciliation loop is completed, member permissions are updated and they should be able to create CRDs,\nwithout any further action from them."),Object(o.b)("h2",{id:"git-commit-statuses"},"Git commit statuses"),Object(o.b)("p",null,"A workspace repository shows updates about the reconciliation of the manifests in the git commit\nstatus.\nThis functionality leverages the ",Object(o.b)("a",{parentName:"p",href:"https://toolkit.fluxcd.io/guides/notifications/#git-commit-status"},"Gitops Toolkit"),"\nnotifications.\nTo set up, an ",Object(o.b)("inlineCode",{parentName:"p"},"Alert")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Provider")," object are created in the ",Object(o.b)("inlineCode",{parentName:"p"},"wkp-workspaces")," namespace during\nworkspace creation."),Object(o.b)("p",null,"If there has been an error in the reconciliation, the status message shows an error and a\nmessage with the relevant logs. Alternatively, the status of the reconciliation can be retrieved by\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"Kustomization")," object of the workspace."),Object(o.b)("p",null,"The object has the name of the workspace and is created in the wkp-workspaces namespace."),Object(o.b)("p",null,"Please refer workspace members to the ",Object(o.b)("inlineCode",{parentName:"p"},"Debugging manifest reconciliation")," section of the member\nguide, for debugging information and steps on the reconciliation of committed manifests."),Object(o.b)("h2",{id:"more-information"},"More Information"),Object(o.b)("p",null,"For more information on how Role Based Access Control works in WKP, please\nrefer to the kubernetes documentation at:\n",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"https://kubernetes.io/docs/reference/access-authn-authz/rbac/")))}m.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,d=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);