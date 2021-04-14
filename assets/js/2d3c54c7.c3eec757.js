(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{215:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(a,".").concat(f)]||p[f]||b[f]||i;return r?o.a.createElement(m,l(l({ref:t},s),{},{components:r})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(215)),a={title:"Debugging a Problem"},l={unversionedId:"troubleshooting/help",id:"version-2.5.0/troubleshooting/help",isDocsHomePage:!1,title:"Debugging a Problem",description:"If you are experiencing problems with your cluster, one of the following guides might help you fix the issue:",source:"@site/versioned_docs/version-2.5.0/troubleshooting/help.md",slug:"/troubleshooting/help",permalink:"/docs/troubleshooting/help",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.5.0/troubleshooting/help.md",version:"2.5.0",sidebar:"version-2.5.0/docs",previous:{title:"Profiling kubectl",permalink:"/docs/tasks/profiling-kubectl"},next:{title:"Troubleshooting kubelet",permalink:"/docs/troubleshooting/kubelet"}},c=[],s={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you are experiencing problems with your cluster, one of the following guides might help you fix the issue:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Check the ",Object(i.b)("a",{parentName:"li",href:"/docs/getting-started/known-issues"},"known issues for your version of WKP ")),Object(i.b)("li",{parentName:"ol"},"Make sure your ",Object(i.b)("a",{parentName:"li",href:"/docs/troubleshooting/kubelet"},"kubelet is running correctly")),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl get pods --all")," to check all your pods and get the logs for troublesome pods like ",Object(i.b)("a",{parentName:"li",href:"/docs/troubleshooting/controller"},"here")),Object(i.b)("li",{parentName:"ol"},"Keep an eye on the ",Object(i.b)("a",{parentName:"li",href:"/docs/monitoring/alerts"},"Prometheus Alerts")," and ",Object(i.b)("a",{parentName:"li",href:"/docs/monitoring/dashboards"},"Grafana Dashboards")," in the WKP UI"),Object(i.b)("li",{parentName:"ol"},"Use ",Object(i.b)("a",{parentName:"li",href:"/docs/troubleshooting/scope"},"WKP Scope")," to inspect your cluster from a high level")))}u.isMDXComponent=!0}}]);