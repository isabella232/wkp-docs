(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(215)),a={title:"Profiling kubectl"},p={unversionedId:"tasks/profiling-kubectl",id:"version-2.5.0/tasks/profiling-kubectl",isDocsHomePage:!1,title:"Profiling kubectl",description:"To profile kubectl the Go tools needs to be installed. The various kind of go profiles are described in the the pprof package documentation. A longer pprof tutorial can be found on the Go blog.",source:"@site/versioned_docs/version-2.5.0/tasks/profiling-kubectl.md",slug:"/tasks/profiling-kubectl",permalink:"/docs/tasks/profiling-kubectl",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.5.0/tasks/profiling-kubectl.md",version:"2.5.0",sidebar:"version-2.5.0/docs",previous:{title:"Patching Node OS packages",permalink:"/docs/tasks/patching-node-os-packages"},next:{title:"Debugging a Problem",permalink:"/docs/troubleshooting/help"}},l=[],c={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To profile ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl")," the ",Object(i.b)("a",{parentName:"p",href:"https://golang.org/doc/install"},"Go tools")," needs to be installed. The various kind of go profiles are described in the ",Object(i.b)("a",{parentName:"p",href:"https://golang.org/pkg/runtime/pprof/#Profile"},"the ",Object(i.b)("inlineCode",{parentName:"a"},"pprof")," package documentation"),". ",Object(i.b)("a",{parentName:"p",href:"https://blog.golang.org/profiling-go-programs"},"A longer ",Object(i.b)("inlineCode",{parentName:"a"},"pprof")," tutorial")," can be found on the Go blog."),Object(i.b)("p",null,"For kubectl, the two most interesting profiles are ",Object(i.b)("inlineCode",{parentName:"p"},"block")," (where do we spend time blocking, eg. waiting for I/O) and ",Object(i.b)("inlineCode",{parentName:"p"},"cpu"),"."),Object(i.b)("p",null,"We distribute a ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl-instrumented")," package that supports two new command line options:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    --profile='': Name of profile to capture. One of (cpu|heap|goroutine|threadcreate|block|mutex)\n    --profile-output='profile.pprof': Name of the file to write the profile to.\n")),Object(i.b)("p",null,"To generate a profile, use the ",Object(i.b)("inlineCode",{parentName:"p"},"--profile")," option:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ kubectl-instrumented get nodes --profile=block\n")),Object(i.b)("p",null,"Generate a visualization of the profile with ",Object(i.b)("inlineCode",{parentName:"p"},"pprof"),". You will need to graphviz installed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ go tool pprof -png ./profile.pprof > profile.png\n")))}u.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,d=s["".concat(a,".").concat(f)]||s[f]||b[f]||i;return n?o.a.createElement(d,p(p({ref:t},c),{},{components:n})):o.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);