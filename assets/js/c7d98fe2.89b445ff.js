"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1084],{35318:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(27378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},60716:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(25773),a=(o(27378),o(35318));const r={title:"FAQ"},i=void 0,l={unversionedId:"proto/faq",id:"proto/faq",title:"FAQ",description:"General",source:"@site/docs/proto/faq.mdx",sourceDirName:"proto",slug:"/proto/faq",permalink:"/docs/proto/faq",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/faq.mdx",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"proto",previous:{title:"use",permalink:"/docs/proto/commands/use"}},s={},p=[{value:"General",id:"general",level:2},{value:"Where did the name &quot;proto&quot; come from?",id:"where-did-the-name-proto-come-from",level:3},{value:"Are you worried about confusion with other tools like protobufs?",id:"are-you-worried-about-confusion-with-other-tools-like-protobufs",level:3},{value:"Will you support more languages?",id:"will-you-support-more-languages",level:3},{value:"Will you support other kinds of tools?",id:"will-you-support-other-kinds-of-tools",level:3},{value:"Will you support &quot;build from source&quot;?",id:"will-you-support-build-from-source",level:3},{value:"How can I install a global package for a language?",id:"how-can-i-install-a-global-package-for-a-language",level:3},{value:"How to run a canary release after installing it?",id:"how-to-run-a-canary-release-after-installing-it",level:3},{value:"OS is unable to find an installed binary, how to resolve?",id:"os-is-unable-to-find-an-installed-binary-how-to-resolve",level:3}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("h3",{id:"where-did-the-name-proto-come-from"},'Where did the name "proto" come from?'),(0,a.kt)("p",null,"We wanted to keep with the space theme, and spent quite some time digging through Wikipedia and\nultimately landed on the page for ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Protostar"},"protostar"),' (this is why\nour logo\'s a star). We really liked the definition of protostar, as it basically means "the\nbeginning phase of a star". Even the the prefix proto means "first" or "earliest form of".'),(0,a.kt)("p",null,"This was great as that's the impression we had in mind for our tool. proto is the first piece\nrequired for setting up your developer environment. The toolchain is the first layer in the\nfoundation."),(0,a.kt)("p",null,"From an aesthetic standpoint, proto's typography works well with moon and moonbase, as most of the\nletters are circle shaped. Double points for proto having two o's like the other products!"),(0,a.kt)("h3",{id:"are-you-worried-about-confusion-with-other-tools-like-protobufs"},"Are you worried about confusion with other tools like protobufs?"),(0,a.kt)("p",null,"Nah."),(0,a.kt)("h3",{id:"will-you-support-more-languages"},"Will you support more languages?"),(0,a.kt)("p",null,"Yes! We'd love to support as many as possible, and if you'd like to help, join our Discord\ncommunity! Feel free to create a ",(0,a.kt)("a",{parentName:"p",href:"./plugins"},"plugin")," in the mean time."),(0,a.kt)("h3",{id:"will-you-support-other-kinds-of-tools"},"Will you support other kinds of tools?"),(0,a.kt)("p",null,"No, we will only support languages, dependency managers, and CLIs, which should be enough. However,\nyou can create a ",(0,a.kt)("a",{parentName:"p",href:"./plugins"},"plugin")," to support other kinds of tools."),(0,a.kt)("h3",{id:"will-you-support-build-from-source"},'Will you support "build from source"?'),(0,a.kt)("p",null,"In the future we have plans to support building from source. For the time being, proto is built\naround pre-built archives for easier portability."),(0,a.kt)("h3",{id:"how-can-i-install-a-global-package-for-a-language"},"How can I install a global package for a language?"),(0,a.kt)("p",null,"You can install a global with the ",(0,a.kt)("a",{parentName:"p",href:"./commands/install-global"},(0,a.kt)("inlineCode",{parentName:"a"},"proto install-global"))," command. Most\nlanguages install a global to a shared location regardless of the language's version (Deno is\n",(0,a.kt)("inlineCode",{parentName:"p"},"~/.deno/bin"),", Rust is ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin"),", etc), so globals can also be installed ",(0,a.kt)("em",{parentName:"p"},"outside")," of proto\nusing language specific commands."),(0,a.kt)("p",null,"The exception to this is Node.js (and npm, pnpm, yarn). Each of these tools install global packages\n",(0,a.kt)("em",{parentName:"p"},"differently"),", and some are tied to the parent tools version. So if you install a new language\nversion, you lose your global packages. We suggest using ",(0,a.kt)("inlineCode",{parentName:"p"},"proto install-global")," for all Node.js\npackages, which installs everything to a shared location, ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.proto/tools/node/globals/bin"),". You'll\nalso need to manually add these global directories to your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,a.kt)("p",null,"However, if you'd prefer to use the native non-proto workflow, you can disable the globals intercept\nusing the ",(0,a.kt)("a",{parentName:"p",href:"./config#settings"},(0,a.kt)("inlineCode",{parentName:"a"},"node-intercept-globals")," setting"),"."),(0,a.kt)("h3",{id:"how-to-run-a-canary-release-after-installing-it"},"How to run a canary release after installing it?"),(0,a.kt)("p",null,"Once a tool has been installed with ",(0,a.kt)("inlineCode",{parentName:"p"},"--canary"),", the canary version can be explicitly referenced\nusing our ",(0,a.kt)("a",{parentName:"p",href:"./detection"},"version detection rules"),". The easiest approach is to prefix the shim with an\nenvironment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ PROTO_BUN_VERSION=canary bun ./index.ts\n")),(0,a.kt)("p",null,"Or to explicitly configure the version in ",(0,a.kt)("a",{parentName:"p",href:"./config"},(0,a.kt)("inlineCode",{parentName:"a"},".prototools")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'bun = "canary"\n')),(0,a.kt)("h3",{id:"os-is-unable-to-find-an-installed-binary-how-to-resolve"},"OS is unable to find an installed binary, how to resolve?"),(0,a.kt)("p",null,"To start, ensure that proto's binaries directory (",(0,a.kt)("inlineCode",{parentName:"p"},"~/.proto/bin"),") is listed first on ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", and\ntakes precedence over other binaries of the same name that may collide."),(0,a.kt)("p",null,"Secondly, proto is powered entirely through shims, which means on Windows, we do not provide ",(0,a.kt)("inlineCode",{parentName:"p"},".exe"),"\nbinaries, and instead use ",(0,a.kt)("inlineCode",{parentName:"p"},".cmd"),". If you're attempting to run a script that uses a hard-coded binary\nname like ",(0,a.kt)("inlineCode",{parentName:"p"},"node.exe"),", this won't work in proto. You'll need to remove the ",(0,a.kt)("inlineCode",{parentName:"p"},".exe")," and simply run\n",(0,a.kt)("inlineCode",{parentName:"p"},"node")," instead. Windows will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATHEXT")," environment variable to find the appropriate\nextension, which includes ",(0,a.kt)("inlineCode",{parentName:"p"},".cmd")," by default."))}d.isMDXComponent=!0}}]);