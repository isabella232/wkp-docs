(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=(n(0),n(125));const o={title:"The wk command"},i={unversionedId:"getting-started/wk",id:"getting-started/wk",isDocsHomePage:!1,title:"The wk command",description:"Clusters are installed, upgraded and scaled with the wk command. It can be installed through either an RPM repository or downloaded.",source:"@site/docs/getting-started/wk.md",slug:"/getting-started/wk",permalink:"/wkp-docs/docs/getting-started/wk",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/docs/getting-started/wk.md",version:"current",sidebar:"docs",previous:{title:"Introduction to wk",permalink:"/wkp-docs/docs/"},next:{title:"Configuring Entitlements",permalink:"/wkp-docs/docs/getting-started/entitlements"}},c=[{value:"Static binary",id:"static-binary",children:[]}],s={toc:c};function d({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Clusters are installed, upgraded and scaled with the ",Object(a.b)("inlineCode",{parentName:"p"},"wk")," command. It can be installed through either an RPM repository or downloaded."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},Object(a.b)("strong",{parentName:"p"},"See also: ",Object(a.b)("inlineCode",{parentName:"strong"},"wksctl")," documentation"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"wk")," inherits much of its functionality from ",Object(a.b)("inlineCode",{parentName:"p"},"wksctl"),". Check out ",Object(a.b)("a",{parentName:"p",href:"https://wksctl.readthedocs.io/"},"the wksctl docs")," for more details about the base commands."))),Object(a.b)("h3",{id:"static-binary"},"Static binary"),Object(a.b)("p",null,"To download ",Object(a.b)("inlineCode",{parentName:"p"},"wk")," and make it executable, run:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"curl -o wk https://weaveworks-wkp.s3.amazonaws.com/wk-$version-$os-amd64\nchmod +x wk\nmv wk /usr/local/bin/\n")),Object(a.b)("p",null,"Where ",Object(a.b)("inlineCode",{parentName:"p"},"version")," is the desired version, e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"2.0.3")," and ",Object(a.b)("inlineCode",{parentName:"p"},"os")," is ",Object(a.b)("inlineCode",{parentName:"p"},"linux")," or ",Object(a.b)("inlineCode",{parentName:"p"},"darwin"),". Only ",Object(a.b)("inlineCode",{parentName:"p"},"amd64")," architectures are supported at this time."))}d.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,u=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(u,c(c({ref:t},d),{},{components:n})):a.a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);