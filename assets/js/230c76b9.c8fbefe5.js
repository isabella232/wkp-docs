(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{215:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},y=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=u(r),d=a,b=y["".concat(s,".").concat(d)]||y[d]||p[d]||o;return r?n.a.createElement(b,l(l({ref:t},c),{},{components:r})):n.a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(215)),s={title:"Managing the Sealing Key"},l={unversionedId:"cluster-operations/sealing-key",id:"version-2.4.2/cluster-operations/sealing-key",isDocsHomePage:!1,title:"Managing the Sealing Key",description:"Sealed Secrets provide an effective means of managing secret information for your Kubernetes cluster, allowing you to check your secret information into a Version Control System (VCS) like Git. This allows you to manage your secrets via GitOps along with the rest of your cluster manifests.",source:"@site/versioned_docs/version-2.4.2/cluster-operations/sealing-key.md",slug:"/cluster-operations/sealing-key",permalink:"/docs/2.4.2/cluster-operations/sealing-key",editUrl:"https://github.com/weaveworks/wkp-docs/tree/main/versioned_docs/version-2.4.2/cluster-operations/sealing-key.md",version:"2.4.2",sidebar:"version-2.4.2/docs",previous:{title:"Managing Secrets",permalink:"/docs/2.4.2/cluster-operations/managing-secrets"},next:{title:"WKP Monitoring Tools",permalink:"/docs/2.4.2/monitoring/introduction"}},i=[{value:"Key Renewal and Multiple Sealing Keys",id:"key-renewal-and-multiple-sealing-keys",children:[]},{value:"Recoverying sealing keys from the cluster",id:"recoverying-sealing-keys-from-the-cluster",children:[]},{value:"Recoverying secrets after a cluster failure",id:"recoverying-secrets-after-a-cluster-failure",children:[]}],c={toc:i};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://engineering.bitnami.com/articles/sealed-secrets.html"},"Sealed Secrets")," provide an effective means of managing secret information for your Kubernetes cluster, allowing you to check your secret information into a Version Control System (VCS) like Git. This allows you to manage your secrets via GitOps along with the rest of your cluster manifests."),Object(o.b)("p",null,"However, the security of your system and its secrets depends on safely managing the ",Object(o.b)("inlineCode",{parentName:"p"},"sealing key"),". The sealing key is the key used by the ",Object(o.b)("inlineCode",{parentName:"p"},"Sealed Secret")," controller to decrypt your sealed secrets when they are applied to your cluster. As described in ",Object(o.b)("a",{parentName:"p",href:"/getting-started/managing-secrets/"},"Managing Secrets"),", at cluster creation time the sealing key may be provided by you or automatically generated by ",Object(o.b)("inlineCode",{parentName:"p"},"wkp"),". In either case, it is the one piece of information that ",Object(o.b)("em",{parentName:"p"},"must")," be controlled. Anyone with access to the sealing key can decrypt any sealed secret that was encrypted with the corresponding certificate."),Object(o.b)("p",null,"To ensure you can decrypt your sealed secrets in the event of a catastrophic cluster failure, save your sealing key in a secure location such as a password manager or a dedicated secret management system like Hashicorp Vault."),Object(o.b)("h2",{id:"key-renewal-and-multiple-sealing-keys"},"Key Renewal and Multiple Sealing Keys"),Object(o.b)("p",null,"By default, the Sealed Secrets controller periodically performs an operation called ",Object(o.b)("inlineCode",{parentName:"p"},"key renewal")," which creates a new sealing key and corresponding certificate (default period: 30 days). After a key renewal, any secrets sealed with ",Object(o.b)("inlineCode",{parentName:"p"},"kubeseal")," will be encrypted with the new certificate unless an older one is explicitly specified on the command line. The controller will then use the new sealing key to decrypt it."),Object(o.b)("p",null,"If left alone, this will generate a growing set of sealing keys associated with the controller. The controller will use the appropriate key to decrypt each sealed secret depending on which certificate was used to create it. This means that any backup of sealing keys must take into account the new keys generated via ",Object(o.b)("inlineCode",{parentName:"p"},"key renewal"),". You have three options:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Turn off key renewal (not recommended)"),Object(o.b)("li",{parentName:"ol"},"Periodically add any new sealing keys to your secret backup storage"),Object(o.b)("li",{parentName:"ol"},"Periodically re-encrypt your existing sealed secrets with the current sealing key (recommended)")),Object(o.b)("p",null,"The third option is supported via ",Object(o.b)("inlineCode",{parentName:"p"},"kubeseal")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"re-encrypt")," flag:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubeseal --re-encrypt < yourSealedSecret.yaml > aTempFile.yaml && mv aTempFile.yaml yourSealedSecret.yaml\n")),Object(o.b)("p",null,"Once you perform this operation for each sealed secret, you are free to label any preexisting sealing key secret as ",Object(o.b)("inlineCode",{parentName:"p"},"compromised"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl --namespace kube-system label secrets yourSealedSecretKey sealedsecrets.bitnami.com/sealed-secrets-key=compromised --overwrite=true\n")),Object(o.b)("p",null,"All the keys may be located via:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret --namespace kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key\n")),Object(o.b)("p",null,"A restart of the sealed secret controller will ignore any compromised keys."),Object(o.b)("p",null,"As discussed in ",Object(o.b)("a",{parentName:"p",href:"/getting-started/managing-secrets/"},"Managing Secrets"),", key renewal (automatic or manual) is not a substitute for rotating your actual secrets. In particular, it's important to keep in mind that the security leak caused by a breached sealing key can not be corrected merely by removing and regenerating the sealing key. You need to assume that all secrets encrypted with the sealing key are compromised and rotate your secret information."),Object(o.b)("h2",{id:"recoverying-sealing-keys-from-the-cluster"},"Recoverying sealing keys from the cluster"),Object(o.b)("p",null,"For option 2 above (or if you did not back up your keys), you can recover your keys as long as your cluster is operational. The following command will extract the keys from your cluster:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret --namespace kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key --output yaml > yourKeyFile.yaml\n")),Object(o.b)("p",null,"You can apply them to a cluster as part of disaster recovery via:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl apply --filename yourKeyFile.yaml\n")),Object(o.b)("p",null,"If the controller is already running, restart the controller to install the recovered keys:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl delete pod --namespace kube-system -l name=sealed-secrets-controller\n")),Object(o.b)("h2",{id:"recoverying-secrets-after-a-cluster-failure"},"Recoverying secrets after a cluster failure"),Object(o.b)("p",null,"If your cluster has failed and you have sealed secrets stored in version control or on your filesystem, you can recover your secret information provided you backed up your sealing keys as described above. You can decrypt your sealed secrets using:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubeseal --recovery-unseal --recovery-private-key yourSealingKey1,yourSealingKey2,... < yourSealedSecret.yaml\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubeseal --recovery-unseal --recovery-private-key yourSealingKey1 --recovery-private-key yourSealingKey2 ... < yourSealedSecret.yaml\n")))}u.isMDXComponent=!0}}]);