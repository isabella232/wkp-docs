(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(218)),o={title:"Alerts"},l={unversionedId:"monitoring/alerts",id:"version-2.4.2/monitoring/alerts",isDocsHomePage:!1,title:"Alerts",description:"View active alert definitions",source:"@site/versioned_docs/version-2.4.2/monitoring/alerts.md",slug:"/monitoring/alerts",permalink:"/docs/2.4.2/monitoring/alerts",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.4.2/monitoring/alerts.md",version:"2.4.2",sidebar:"version-2.4.2/docs",previous:{title:"WKP Monitoring Tools",permalink:"/docs/2.4.2/monitoring/introduction"},next:{title:"Dashboards",permalink:"/docs/2.4.2/monitoring/dashboards"}},s=[{value:"View active alert definitions",id:"view-active-alert-definitions",children:[]},{value:"Adding new alerts",id:"adding-new-alerts",children:[]},{value:"Additional resources",id:"additional-resources",children:[]},{value:"Example alert",id:"example-alert",children:[]}],c={toc:s};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"view-active-alert-definitions"},"View active alert definitions"),Object(a.b)("p",null,"Prometheus shows the currently loaded alert definitions. Open WKP UI in your browser and:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Click the ",Object(a.b)("em",{parentName:"li"},"Prometheus")," button in the list of cluster components\n",Object(a.b)("img",{alt:"Prometheus button",src:n(233).default}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("em",{parentName:"li"},"Alerts")," in the Prometheus navigation bar\n",Object(a.b)("img",{alt:"Prometheus ui",src:n(234).default}))),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"The list of loaded alert defintions is displayed\n",Object(a.b)("img",{alt:"Prometheus alerts ui",src:n(235).default}))),Object(a.b)("h3",{id:"adding-new-alerts"},"Adding new alerts"),Object(a.b)("p",null,"Some example alerts are included in the ",Object(a.b)("inlineCode",{parentName:"p"},"cluster/manifests")," folder of your config repo. To create a new alert:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open the ",Object(a.b)("inlineCode",{parentName:"li"},"example-alerts.yaml")," file in ",Object(a.b)("inlineCode",{parentName:"li"},"cluster/manifests")),Object(a.b)("li",{parentName:"ol"},"Uncomment the contents of the file."),Object(a.b)("li",{parentName:"ol"},"Modify and add new alert definitions to the file. (See ","[additional resources]",'({{< ref "#additional-resources" >}}) for more detailed information about Alertmanager\'s alert format and options.)'),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"git commit")," and ",Object(a.b)("inlineCode",{parentName:"li"},"git push")," the changes to your config repoistory.")),Object(a.b)("p",null,"Flux will detect the change and add the new alerts into the cluster. Check that the new alert has been loaded by following ","[view active alert definitions]",'({{< ref "#view-active-alert-definitions" >}}) above.'),Object(a.b)("h3",{id:"additional-resources"},"Additional resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"},"The prometheus alerting rule documentation")," describes alert definitions and their options in more detail."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/coreos/prometheus-operator/blob/master/Documentation/user-guides/alerting.md"},"The prometheus operator alerting documentation")," describes the ",Object(a.b)("inlineCode",{parentName:"li"},"PrometheusRule")," CRD that we use to load the alert definitions.")),Object(a.b)("h3",{id:"example-alert"},"Example alert"),Object(a.b)("p",null,"Here is one of the example alerts that will fire continuously, helping you check everything is working."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: PrometheusRule\nmetadata:\n  creationTimestamp: null\n  labels:\n    prometheus: example\n    role: alert-rules\n  name: prometheus-example-rules\nspec:\n  groups:\n  - name: ./example.rules\n    rules:\n    # This alert will always fire and is good to quickly test that things are working.\n    - alert: ExampleAlert\n      expr: vector(1)\n")))}u.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return n?i.a.createElement(b,l(l({ref:t},c),{},{components:n})):i.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},233:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/prom-button-06c5d1419700f52624bb870baa8fc9af.png"},234:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/prom-ui-1921b9174dc826df4edca5ca79a6eacc.png"},235:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/prom-ui-alerts-4d185323417dd4ef378f2c40d57bd147.png"}}]);