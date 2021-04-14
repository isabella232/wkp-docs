(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{215:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return t?o.a.createElement(m,s(s({ref:n},p),{},{components:t})):o.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(215)),i={title:"Upgrading Kubernetes"},s={unversionedId:"cluster-operations/upgrading-kubernetes-version",id:"version-2.4.2/cluster-operations/upgrading-kubernetes-version",isDocsHomePage:!1,title:"Upgrading Kubernetes",description:"Upgrading Kubernetes on WKS-track Clusters",source:"@site/versioned_docs/version-2.4.2/cluster-operations/upgrading-kubernetes-version.md",slug:"/cluster-operations/upgrading-kubernetes-version",permalink:"/docs/2.4.2/cluster-operations/upgrading-kubernetes-version",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.4.2/cluster-operations/upgrading-kubernetes-version.md",version:"2.4.2",sidebar:"version-2.4.2/docs",previous:{title:"Adding and Removing Nodes",permalink:"/docs/2.4.2/cluster-operations/adding-removing-nodes"},next:{title:"Customizing the API Server and Kubelet",permalink:"/docs/2.4.2/cluster-operations/custom-kubernetes-configuration"}},c=[{value:"Upgrading Kubernetes on WKS-track Clusters",id:"upgrading-kubernetes-on-wks-track-clusters",children:[]}],p={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"upgrading-kubernetes-on-wks-track-clusters"},"Upgrading Kubernetes on WKS-track Clusters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"NOTE: Upgrading from the CLI only works for clusters created on WKS tracks (Footloose and SSH Nodes), to upgrade for EKS track log in as an admin to EKS and upgrade from the UI.")),Object(a.b)("p",null,"The version of Kubernetes used by ",Object(a.b)("inlineCode",{parentName:"p"},"wk")," is\ncontrolled by a value specified in the ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")," file deployed by\nthe  ",Object(a.b)("inlineCode",{parentName:"p"},"setup install")," command. For WKS tracks (wks-ssh, wks-footloose), the value is\n",Object(a.b)("inlineCode",{parentName:"p"},"wksConfig.kubernetesVersion"),"."),Object(a.b)("p",null,"Upgrades may only be done to the next minor version of Kubernetes or\na larger micro version if using the same minor version. For example,\nif you're currently running Kubernetes version 1.16.11, you may only\nupgrade to a Kubernetes version 1.16.x where x > 11, or to version\n1.17.x. If you wish to upgrade Kubernetes from version 1.16.x to\n1.18.x, you must first upgrade to 1.17.x and from 1.17.x you may\nupgrade to 1.18.x."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"wksConfig:\n  # Defines the version of Kubernetes installed on each node.\n  # Must be: `'1.16.x'`-`'1.20.x'`\n  # friendly reminder to use quotes to ensure this value is a YAML string.\n  # [REQUIRED]\n  kubernetesVersion: '1.20.0'\n")),Object(a.b)("p",null,"To upgrade Kubernetes to a later version for Footloose and SSH Nodes clusters, simply update the ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")," file with the new version and run:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"`wk upgrade --config-file <path to config.yaml>`\n")),Object(a.b)("p",null,"If you have a non-critical cluster with only two control plane nodes, you can still upgrade by passing the ",Object(a.b)("inlineCode",{parentName:"p"},"--allow-reduced-availability-during-upgrade")," flag:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"`wk upgrade --config-file <path to config.yaml> --allow-reduced-availability-during-upgrade`\n")),Object(a.b)("h4",{id:"verify-that-existing-application-component-versions-arent-removed"},"Verify that existing application component versions aren't removed"),Object(a.b)("p",null,"New versions of Kubernetes sometimes remove and replace apiVersions.\nFor example, deployments in the Kubernetes 1.16 and later releases\nmust use ",Object(a.b)("strong",{parentName:"p"},"apps/v1")," rather than the removed ",Object(a.b)("strong",{parentName:"p"},"extention/v1beta1"),",\n",Object(a.b)("strong",{parentName:"p"},"apps/v1beta1"),", and ",Object(a.b)("strong",{parentName:"p"},"apps/v1beta2")," versions supported prior to 1.16."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you have such an object that is subject to removal, you should\nupdate the manifest(s) for the application and replace the older\nversions with the currently accepted version.  You will then need to\nredeploy the application using the updated manifest prior to upgrading.\nFailing to do so might cause existing applications to no longer work\nor to be removed from the cluster"))))}u.isMDXComponent=!0}}]);