"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40459],{60486:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=o(24246),s=o(71670);const a={slug:"moon-v1.16",title:"moon v1.16 - Bun support, Rust improvements, and more!",authors:["milesj"],tags:["bun","rust","toolchain","automation","package","manager"],image:"./img/moon/v1.16.png"},i=void 0,r={permalink:"/blog/moon-v1.16",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-10-30_moon-v1.16.mdx",source:"@site/blog/2023-10-30_moon-v1.16.mdx",title:"moon v1.16 - Bun support, Rust improvements, and more!",description:"With this release, we've focused on requests from the community, instead of internal migration work",date:"2023-10-30T00:00:00.000Z",formattedDate:"October 30, 2023",tags:[{label:"bun",permalink:"/blog/tags/bun"},{label:"rust",permalink:"/blog/tags/rust"},{label:"toolchain",permalink:"/blog/tags/toolchain"},{label:"automation",permalink:"/blog/tags/automation"},{label:"package",permalink:"/blog/tags/package"},{label:"manager",permalink:"/blog/tags/manager"}],readingTime:2.95,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.16",title:"moon v1.16 - Bun support, Rust improvements, and more!",authors:["milesj"],tags:["bun","rust","toolchain","automation","package","manager"],image:"./img/moon/v1.16.png"},unlisted:!1,prevItem:{title:"proto v0.23 - New detection strategy, tool commands, and more",permalink:"/blog/proto-v0.23"},nextItem:{title:"proto v0.21 - Linux x64 musl support",permalink:"/blog/proto-v0.21"}},l={image:o(48351).Z,authorsImageUrls:[void 0]},c=[{value:"Bun as a package manager",id:"bun-as-a-package-manager",level:2},{value:"Configure Rust components and targets",id:"configure-rust-components-and-targets",level:2},{value:"Force toolchain to use global binaries",id:"force-toolchain-to-use-global-binaries",level:2},{value:"Other changes",id:"other-changes",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"With this release, we've focused on requests from the community, instead of internal migration work\nor new features."}),"\n",(0,t.jsx)(n.h2,{id:"bun-as-a-package-manager",children:"Bun as a package manager"}),"\n",(0,t.jsxs)(n.p,{children:["Now that ",(0,t.jsx)(n.a,{href:"https://bun.sh/blog/bun-v1.0",children:"Bun v1 has officially released"})," and our\n",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/bun-plugin",children:"bun-plugin"})," for proto has stabilized, we can start slowly\nintegrating Bun support into moon. The first step in this series is adding Bun as a supported\npackage manager for Node.js. Seems odd as they are conflicting runtimes... right? While true, a lot\nof users are interested in using Bun purely as a package manager, as it can install dependencies\nincredibly fast. So why not support it?"]}),"\n",(0,t.jsxs)(n.p,{children:["In this release, you can now install dependencies with Bun by configuring\n",(0,t.jsx)(n.a,{href:"/docs/config/toolchain#packagemanager",children:(0,t.jsx)(n.code,{children:"node.packageManager"})})," and\n",(0,t.jsx)(n.a,{href:"/docs/config/toolchain#npm-pnpm-yarn",children:(0,t.jsx)(n.code,{children:"node.bun"})})," in your toolchain."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/toolchain.yml"',children:"node:\n  packageManager: 'bun'\n  bun:\n    version: '1.0.0'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, you can now execute Bun commands within tasks! However, ensure the task's platform is\nstill set to ",(0,t.jsx)(n.code,{children:"node"})," though, as this is using Bun as a package manager within Node.js, not as a\nseparate runtime."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="moon.yml"',children:"tasks:\n  test:\n    command: 'bun test'\n    platform: 'node'\n"})}),"\n",(0,t.jsx)(n.p,{children:"When using Bun, the following integrations are applied:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Will automatically download and install Bun for the configured version."}),"\n",(0,t.jsxs)(n.li,{children:["Will install dependencies using ",(0,t.jsx)(n.code,{children:"bun install"})," (deduping currently not supported)."]}),"\n",(0,t.jsxs)(n.li,{children:["Will parse ",(0,t.jsx)(n.code,{children:"bun.lockb"})," for dependency resolution and task hashing."]}),"\n",(0,t.jsxs)(n.li,{children:["Will use ",(0,t.jsx)(n.code,{children:"bunx"})," instead of ",(0,t.jsx)(n.code,{children:"npx"})," for one-off package executions."]}),"\n",(0,t.jsxs)(n.li,{children:["Can execute ",(0,t.jsx)(n.code,{children:"bun"})," commands within tasks."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["This change ",(0,t.jsx)(n.em,{children:"only"})," adds support for Bun as a package manager for Node.js. It does not add Bun as a\nsupported language/platform in the toolchain, but it does pave the way for this to happen! Also\nnote that Bun ",(0,t.jsx)(n.em,{children:"is not supported on Windows"}),"!"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-rust-components-and-targets",children:"Configure Rust components and targets"}),"\n",(0,t.jsxs)(n.p,{children:["We've had Rust tier 2 and 3 support for quite a while now, but there was a big missing piece: the\nability to configure and install additional\n",(0,t.jsx)(n.a,{href:"https://rust-lang.github.io/rustup/concepts/components.html",children:"components"})," and\n",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/nightly/rustc/platform-support.html",children:"targets"})," for the current toolchain.\nIn this release, we've added support for both!"]}),"\n",(0,t.jsxs)(n.p,{children:["Simply configure the ",(0,t.jsx)(n.a,{href:"/docs/config/toolchain#components",children:(0,t.jsx)(n.code,{children:"rust.components"})})," or\n",(0,t.jsx)(n.a,{href:"/docs/config/toolchain#targets",children:(0,t.jsx)(n.code,{children:"rust.targets"})})," settings in\n",(0,t.jsx)(n.a,{href:"/docs/config/toolchain",children:(0,t.jsx)(n.code,{children:".moon/toolchain.yml"})}),", and moon will automatically install them when the\npipeline is ran. This functionality uses the same hashing implementation as\n",(0,t.jsx)(n.a,{href:"/docs/config/toolchain#bins-1",children:(0,t.jsx)(n.code,{children:"rust.bins"})}),", so will only install the first time, and again if the\nconfiguration changes (or the cache is removed)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/toolchain.yml"',children:"rust:\n  version: '1.73.0'\n  components:\n    - 'clippy'\n    - 'rust-analyzer'\n  targets:\n    - 'wasm32-wasi'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"force-toolchain-to-use-global-binaries",children:"Force toolchain to use global binaries"}),"\n",(0,t.jsxs)(n.p,{children:["Our ",(0,t.jsx)(n.a,{href:"/docs/concepts/toolchain",children:"toolchain"})," is great for local development, as it ensures all\ndevelopers and machines are running the exact versions of tools required for the workspace. However,\nit becomes overkill for other environments like CI and Docker where the environment has been\npre-configured."]}),"\n",(0,t.jsxs)(n.p,{children:["To avoid the unnecessary overhead of download and installing tools in the toolchain, we're\nintroducing the ",(0,t.jsx)(n.code,{children:"MOON_TOOLCHAIN_FORCE_GLOBALS"})," environment variable. When provided, this will:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Disable downloading and installing tools (will still download the WASM plugins)."}),"\n",(0,t.jsxs)(n.li,{children:["Execute all tool commands using the global binary available on ",(0,t.jsx)(n.code,{children:"PATH"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"MOON_TOOLCHAIN_FORCE_GLOBALS=true moon ci\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"We're looking into ways to automate this process, but for now, this is the best solution."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases/tag/v1.16.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added an improved task inheritance chain resolver. To fallback to the previous behavior, set\n",(0,t.jsx)(n.code,{children:"experiments.interweavedTaskInheritance: false"})," in ",(0,t.jsx)(n.code,{children:".moon/workspace.yml"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Added a new ",(0,t.jsxs)(n.a,{href:"/docs/config/project#type",children:["project type ",(0,t.jsx)(n.code,{children:"automation"})]}),", for projects like E2E and\nintegration testing."]}),"\n",(0,t.jsx)(n.li,{children:"Updated action graph cycle detection to list all nodes in the cycle (when detectable)."}),"\n",(0,t.jsxs)(n.li,{children:["Updated all npx calls to use a package manager equivalent. For example: ",(0,t.jsx)(n.code,{children:"yarn dlx"}),", ",(0,t.jsx)(n.code,{children:"pnpm dlx"}),",\n",(0,t.jsx)(n.code,{children:"bunx"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Updated to support Yarn v4."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},48351:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/v1.16-cd59c941a2ddc0f63435db79a3c420eb.png"},71670:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>i});var t=o(27378);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);