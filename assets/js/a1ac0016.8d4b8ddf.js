(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(218)),l={title:"Troubleshooting kubelet"},s={unversionedId:"troubleshooting/kubelet",id:"troubleshooting/kubelet",isDocsHomePage:!1,title:"Troubleshooting kubelet",description:"The kubelet is the primary \u201cnode agent\u201d that runs on each node. -- Kubernetes Docs",source:"@site/docs/troubleshooting/kubelet.md",slug:"/troubleshooting/kubelet",permalink:"/docs/next/troubleshooting/kubelet",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/docs/troubleshooting/kubelet.md",version:"current",sidebar:"docs",previous:{title:"Debugging a Problem",permalink:"/docs/next/troubleshooting/help"},next:{title:"Troubleshooting wks-controller",permalink:"/docs/next/troubleshooting/controller"}},c=[{value:"<code>kubectl</code> is returning errors",id:"kubectl-is-returning-errors",children:[]},{value:"Is kubelet running on the nodes?",id:"is-kubelet-running-on-the-nodes",children:[]},{value:"Try and manually start kubelet",id:"try-and-manually-start-kubelet",children:[]},{value:"Check kubelet logs",id:"check-kubelet-logs",children:[]}],i={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"The kubelet is the primary \u201cnode agent\u201d that runs on each node.")," -- ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"Kubernetes Docs"))),Object(a.b)("h3",{id:"kubectl-is-returning-errors"},Object(a.b)("inlineCode",{parentName:"h3"},"kubectl")," is returning errors"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-console"},"$ kubectl get nodes\nThe connection to the server 10.247.32.133:6443 was refused - did you specify the right host or port?\n")),Object(a.b)("p",null,"Either ",Object(a.b)("inlineCode",{parentName:"p"},"kubelet")," or the ",Object(a.b)("inlineCode",{parentName:"p"},"apiserver")," isn't running on the main master node."),Object(a.b)("h3",{id:"is-kubelet-running-on-the-nodes"},"Is kubelet running on the nodes?"),Object(a.b)("p",null,"Check ",Object(a.b)("inlineCode",{parentName:"p"},"machines.yaml")," for IPs"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-console"},"$ cat ./setup/machines.yaml | grep address | uniq\n          address: 10.247.32.133\n          address: 10.247.32.134\n          address: 10.247.32.135\n")),Object(a.b)("p",null,"See if kubelet is running"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-console"},"$ ssh centos@10.247.32.133 ps aux|grep kubelet\nroot     32504  4.9  2.2 970448 80912 ?        Ssl  Jan22  52:26 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml --cgroup-driver=cgroupfs --network-plugin=cni --node-ip=10.247.32.133 --pod-infra-container-image=k8s.gcr.io/pause:3.1 --node-ip=10.247.32.133\n\n$ ssh centos@10.247.32.134 ps aux|grep kubelet\n\n$ ssh centos@10.247.32.135 ps aux|grep kubelet\nroot     16238  3.8  1.6 748228 68460 ?        Ssl  Jan22  40:14 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml --cgroup-driver=cgroupfs --network-plugin=cni --pod-infra-container-image=k8s.gcr.io/pause:3.1 --node-ip=10.247.32.135\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": ",Object(a.b)("em",{parentName:"p"},"When running ",Object(a.b)("inlineCode",{parentName:"em"},"ssh")," commands above, you might need to replace ",Object(a.b)("inlineCode",{parentName:"em"},"centos")," with your custom value from ",Object(a.b)("inlineCode",{parentName:"em"},"spec.providerSpec.value.user")," in ",Object(a.b)("inlineCode",{parentName:"em"},"setup/cluster.yaml")," and perhaps also pass a private key to your cluster via ",Object(a.b)("inlineCode",{parentName:"em"},"-i your_cluster_key")),"."),Object(a.b)("p",null,"So Kubelet is not running on one of the nodes."),Object(a.b)("h3",{id:"try-and-manually-start-kubelet"},"Try and manually start kubelet"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-console"},"$ ssh centos@10.247.32.134\n$ sudo systemctl start kubelet\n$ ps aux|grep kubelet\n\ncentos    3548  0.0  0.0 112708   948 pts/0    R+   09:46   0:00 grep --color=auto kubelet\n")),Object(a.b)("p",null,"In this case it is still not starting up."),Object(a.b)("h3",{id:"check-kubelet-logs"},"Check kubelet logs"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-console"},'$ journalctl -u kubelet\n\nJan 23 09:47:22 wk-simon-1.maas systemd[1]: Starting kubelet: The Kubernetes Node Agent...\nJan 23 09:47:22 wk-simon-1.maas systemd[1]: Started kubelet: The Kubernetes Node Agent.\nJan 23 09:47:22 wk-simon-1.maas kubelet[3623]: F0123 09:47:22.219308    3623 server.go:198] failed to load Kubelet config file /var/lib/kubelet/config.yaml, error failed to read kubelet config file "/var/lib/kubelet/config.yaml"\nJan 23 09:47:22 wk-simon-1.maas systemd[1]: kubelet.service: main process exited, code=exited, status=255/n/a\nJan 23 09:47:22 wk-simon-1.maas systemd[1]: Unit kubelet.service entered failed state.\nJan 23 09:47:22 wk-simon-1.maas systemd[1]: kubelet.service failed.\n')),Object(a.b)("p",null,"In this case it can't find a config."))}u.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(m,s(s({ref:t},i),{},{components:n})):o.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);