(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),o=(t(0),t(170)),s={title:"Dashboards"},i={unversionedId:"monitoring/dashboards",id:"monitoring/dashboards",isDocsHomePage:!1,title:"Dashboards",description:"View active dashboards",source:"@site/docs/monitoring/dashboards.md",slug:"/monitoring/dashboards",permalink:"/wkp/docs/next/monitoring/dashboards",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/docs/monitoring/dashboards.md",version:"current",sidebar:"docs",previous:{title:"Alerts",permalink:"/wkp/docs/next/monitoring/alerts"},next:{title:"Control Plane Load Balancing",permalink:"/wkp/docs/next/tasks/control-plane-load-balancers"}},c=[{value:"View active dashboards",id:"view-active-dashboards",children:[]},{value:"Adding new dashboards",id:"adding-new-dashboards",children:[]}],d={toc:c};function b(e){var a=e.components,s=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,s,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"view-active-dashboards"},"View active dashboards"),Object(o.b)("p",null,"Open WKP UI in your browser and:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click the ",Object(o.b)("em",{parentName:"li"},"Grafana")," button in the list of cluster components\n",Object(o.b)("img",{alt:"Promtheus button",src:t(182).default}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("em",{parentName:"li"},"Home")," in the Grafana top navigation bar\n",Object(o.b)("img",{alt:"Promtheus ui",src:t(183).default}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"The list of loaded dashboards is displayed\n",Object(o.b)("img",{alt:"Promtheus alerts ui",src:t(184).default}))),Object(o.b)("p",null,"Grafana dashboards are stored in ",Object(o.b)("inlineCode",{parentName:"p"},"./cluster/platform/grafana-dashboards"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cluster/platform/grafana-dashboards/\n\u251c\u2500\u2500 k8s-all-node-resources.json\n\u251c\u2500\u2500 k8s-pod-resources.json\n\u251c\u2500\u2500 k8s-service-resources.json\n\u251c\u2500\u2500 k8s-single-node-resources.json\n\u2514\u2500\u2500 k8s-system-services.json\n")),Object(o.b)("h3",{id:"adding-new-dashboards"},"Adding new dashboards"),Object(o.b)("p",null,"To add additional grafana dashboards you can create and export them in the Grafana UI or download them from Grafana website."),Object(o.b)("h4",{id:"from-json-source"},"From JSON source"),Object(o.b)("p",null,"Once you have the JSON data for a dashboard we commit it to our git config repository and it will be loaded into Grafana. Dashboards must be saved into ",Object(o.b)("inlineCode",{parentName:"p"},"cluster/platform/grafana-dashboards/"),". For example:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"git add cluster/platform/grafana-dashboards/my-new-dashboard.json")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},'git commit -m "Adds my new dashboard"')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"git push")),Object(o.b)("li",{parentName:"ol"},"Flux will load the dashboard into Grafana where you can see it by following the ",Object(o.b)("em",{parentName:"li"},"View active dashboards")," steps above.")),Object(o.b)("h4",{id:"downloading-new-dashboards-from-grafanas-website"},"Downloading new dashboards from Grafana's website"),Object(o.b)("p",null,"Grafana maintains a collection of shared dashboards at ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards"},"https://grafana.com/grafana/dashboards"),". You can download and use these in our cluster."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Find a dashboard you like on ",Object(o.b)("a",{parentName:"li",href:"https://grafana.com/grafana/dashboards"},"https://grafana.com/grafana/dashboards")),Object(o.b)("li",{parentName:"ol"},"Click the ",Object(o.b)("em",{parentName:"li"},"Download JSON")," link from the sidebar on the dashboard details page."),Object(o.b)("li",{parentName:"ol"},"Follow the ",Object(o.b)("em",{parentName:"li"},"From JSON source")," instructions above.")),Object(o.b)("h4",{id:"creating-your-own-dashboards"},"Creating your own dashboards"),Object(o.b)("p",null,"To to create your own dashboard from scratch"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In Grafana Click ",Object(o.b)("inlineCode",{parentName:"li"},"+")," on the left navigation menu to ",Object(o.b)("em",{parentName:"li"},"Create Dashboard"),"."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("em",{parentName:"li"},"Add panel")," and customize the panel with Prometheus and other queries."),Object(o.b)("li",{parentName:"ol"},"Continue adding panels until you've got a dashboard you're happy with. See the ",Object(o.b)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/features/dashboard/dashboards/"},"Grafana dashboard documentation")," for details and options."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("em",{parentName:"li"},"Dashboard settings")," > ",Object(o.b)("em",{parentName:"li"},"JSON Model")," to access the JSON data."),Object(o.b)("li",{parentName:"ol"},"Follow the ",Object(o.b)("em",{parentName:"li"},"From JSON source")," instructions above.")))}b.isMDXComponent=!0},170:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),b=function(e){var a=r.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=b(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=b(t),u=n,m=l["".concat(s,".").concat(u)]||l[u]||p[u]||o;return t?r.a.createElement(m,i(i({ref:a},d),{},{components:t})):r.a.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},182:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana-button-ba99595d68cfb33e2377a12b3650cc9c.png"},183:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana-ui-c2c74a5d0c02bb1cb1895e2735710791.png"},184:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana-ui-dashboards-252d4f880e79a2e5f224c7b8708a40ff.png"}}]);