(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),r=(t(0),t(170));const o={title:"Control Plane Load Balancing"},l={unversionedId:"tasks/control-plane-load-balancers",id:"tasks/control-plane-load-balancers",isDocsHomePage:!1,title:"Control Plane Load Balancing",description:"Configuring a load balancer in front of your control plane allows your cluster to stay responsive during both unplanned (node crashes) and planned (node restarts during upgrades) outages.",source:"@site/docs/tasks/control-plane-load-balancers.md",slug:"/tasks/control-plane-load-balancers",permalink:"/wkp-docs/docs/next/tasks/control-plane-load-balancers",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/docs/tasks/control-plane-load-balancers.md",version:"current",sidebar:"docs",previous:{title:"Dashboards",permalink:"/wkp-docs/docs/next/monitoring/dashboards"},next:{title:"Configuring EKS-D",permalink:"/wkp-docs/docs/next/tasks/using-the-eks-d-distribution"}},s=[{value:"Configuring a control plane load balancer in WKP",id:"configuring-a-control-plane-load-balancer-in-wkp",children:[]},{value:"An external load balancer example using HA Proxy",id:"an-external-load-balancer-example-using-ha-proxy",children:[]}],i={toc:s};function c({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Configuring a load balancer in front of your control plane allows your cluster to stay responsive during both unplanned (",Object(r.b)("em",{parentName:"p"},"node crashes"),") and planned (",Object(r.b)("em",{parentName:"p"},"node restarts during upgrades"),") outages."),Object(r.b)("h2",{id:"configuring-a-control-plane-load-balancer-in-wkp"},"Configuring a control plane load balancer in WKP"),Object(r.b)("p",null,"While following the ",Object(r.b)("a",{parentName:"p",href:"/deploying-wkp/cluster-creation-on-ssh-nodes"},"creating a cluster on SSH Nodes")," instructions you can provide the ",Object(r.b)("strong",{parentName:"p"},"public")," IP Address of your load balancer in the ",Object(r.b)("inlineCode",{parentName:"p"},"wksConfig.controlPlaneLbAddress")," field. The load balancer should route all ",Object(r.b)("inlineCode",{parentName:"p"},":6443")," traffic to the internal IPs of the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," nodes specified in ",Object(r.b)("inlineCode",{parentName:"p"},"wksConfig.machines"),"."),Object(r.b)("h2",{id:"an-external-load-balancer-example-using-ha-proxy"},"An external load balancer example using HA Proxy"),Object(r.b)("p",null,"One setup is to use ",Object(r.b)("strong",{parentName:"p"},"HA Proxy")," as the load balancer on a machine external to the cluster itself but still on the same network. We'll go through how to install and setup haproxy on a CentOS 7 machine."),Object(r.b)("p",null,"Given we're following the ",Object(r.b)("a",{parentName:"p",href:"/deploying-wkp/cluster-creation-on-ssh-nodes"},"creating a cluster on SSH Nodes")," instructions and have specified the IPs of a ",Object(r.b)("strong",{parentName:"p"},"3 master")," and ",Object(r.b)("strong",{parentName:"p"},"2 worker")," cluster like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"wksConfig:\n  sshConfig:\n    machines:\n    # Masters\n    - privateAddress: 10.132.0.10\n      publicAddress: 35.190.222.10\n      role: master\n    - privateAddress: 10.132.0.11\n      publicAddress: 35.190.222.11\n      role: master\n    - privateAddress: 10.132.0.12\n      publicAddress: 35.190.222.12\n      role: master\n    # Workers\n    - privateAddress: 10.132.0.13\n      publicAddress: 35.190.222.13\n      role: worker\n    - privateAddress: 10.132.0.14\n      publicAddress: 35.190.222.14\n      role: worker\n")),Object(r.b)("p",null,"and we have another machine that will run haproxy and be our load balancer."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"privateAddress: 10.132.0.1\npublicAddress: 35.190.222.1\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ssh to the load balancer machine to install haproxy"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"ssh 35.190.222.1\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install haproxy with"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"yum install haproxy\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Edit ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/haproxy/haproxy.cfg")," setting the ",Object(r.b)("inlineCode",{parentName:"p"},"backend kubernetes")," IP addresses to your masters' ",Object(r.b)("strong",{parentName:"p"},"private")," IPs."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"frontend kubernetes *:6443\n    default_backend             kubernetes\n    mode tcp\n    option tcplog\n\nbackend kubernetes\n    balance     roundrobin\n    mode tcp\n    option tcplog\n    option tcp-check\n    default-server inter 10s downinter 5s rise 2 fall 2 slowstart 60s maxconn 250 maxqueue 256 weight 100\n    server master1 10.132.0.10:6443 check\n    server master2 10.132.0.11:6443 check\n    server master3 10.132.0.12:6443 check\n\n# OPTIONAL - UI that allows you to see which masters have joined the LB roundrobin\nfrontend stats\n    bind *:8404\n    stats enable\n    stats uri /stats\n    stats refresh 10s\n    stats admin if LOCALHOST\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Restart haproxy with"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"systemctl restart haproxy\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Check that its running with ",Object(r.b)("inlineCode",{parentName:"p"},"ps aux | grep haproxy"),", if its not running see if its complaining about anything in particular ",Object(r.b)("inlineCode",{parentName:"p"},"journalctl -u haproxy"),". If its having trouble binding to a socket you might have to relax the SE restrictions with ",Object(r.b)("inlineCode",{parentName:"p"},"sudo setsebool -P haproxy_connect_any=1"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Monitor the load balancer using the stats UI at the load balancer's public IP, in this case: ",Object(r.b)("a",{parentName:"p",href:"http://35.190.222.1:8404/stats"},"http://35.190.222.1:8404/stats")," (Note the ",Object(r.b)("inlineCode",{parentName:"p"},"/stats"),"! ",Object(r.b)("inlineCode",{parentName:"p"},"/")," will give you a 503)"))),Object(r.b)("p",null,"Your new load balancer should be ready for action.\nContinue following the ","[creating a cluster on SSH Nodes]",'({{< ref "/deploying-wkp/cluster-creation-on-ssh-nodes" >}}) instructions, updating your ',Object(r.b)("inlineCode",{parentName:"p"},"config.yaml")," with the load balancer's ",Object(r.b)("strong",{parentName:"p"},"public IP"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"wksConfig:\n  controlPlaneLbAddress: 35.190.222.1\n")))}c.isMDXComponent=!0},170:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||o;return t?r.a.createElement(m,s(s({ref:n},c),{},{components:t})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);