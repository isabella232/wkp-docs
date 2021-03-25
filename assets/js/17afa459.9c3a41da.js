(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(170)),i={title:"Known Issues and Work Arounds"},s={unversionedId:"getting-started/known-issues",id:"version-2.4.2/getting-started/known-issues",isDocsHomePage:!1,title:"Known Issues and Work Arounds",description:"- Cluster creation with Kubernetes 1.16.1 fails. Avoid creating clusters on 1.16.1 and use a later version instead.",source:"@site/versioned_docs/version-2.4.2/getting-started/known-issues.md",slug:"/getting-started/known-issues",permalink:"/wkp-docs/docs/getting-started/known-issues",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.4.2/getting-started/known-issues.md",version:"2.4.2",sidebar:"version-2.4.2/docs",previous:{title:"Managing the Git Configuration Repository",permalink:"/wkp-docs/docs/getting-started/git-config-repository"},next:{title:"Cluster Node Requirements",permalink:"/wkp-docs/docs/deploying-wkp/hosts"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Cluster creation with Kubernetes 1.16.1 fails. ",Object(a.b)("strong",{parentName:"p"},"Avoid creating clusters on 1.16.1 and use a later version instead."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Upgrading Kubernetes 1.19.1 to any of 1.19.2, 1.19.3 or 1.19.4 (the latest as of writing) fails. ",Object(a.b)("strong",{parentName:"p"},"Avoid creating clusters on 1.19.1 and use a later version instead.")," ",Object(a.b)("em",{parentName:"p"},"Please contact support if this is not an option."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Upgrading from Kubernetes 1.16.x to 1.17.x sometimes stalls. If after upgrading the first control plane node the upgrade process hangs you may be experiencing this issue. The kubelet logs of the stalled control plane node will show:"),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"KubeletNotReady Failed to initialize CSINodeInfo: error updating CSINode annotation: timed out waiting for the condition; caused by: the server could not find the requested resource"))),Object(a.b)("p",{parentName:"li"},"A workaround to this could be editing the end of ",Object(a.b)("inlineCode",{parentName:"p"},"/var/lib/kubelet/config.yaml")," as follows on each of the stalled control plane nodes:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"featureGates:\n  CSIMigration: false\n")),Object(a.b)("p",{parentName:"li"},"More details can be found here: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/86094"},"https://github.com/kubernetes/kubernetes/issues/86094"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Docker Desktop for Mac requires specifying the service and pod CIDR blocks. See ",Object(a.b)("a",{parentName:"p",href:"/deploying-wkp/cluster-creation-on-footloose"},"Cluster creation on footloose"),"."))))}p.isMDXComponent=!0}}]);