"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51705],{68942:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=o(24246),l=o(71670);const a={slug:"proto-v0.5",title:"proto v0.5 - Version aliasing and global binaries",authors:["milesj"],tags:["proto","alias","globals"],image:"./img/proto/v0.5.png"},i=void 0,r={permalink:"/blog/proto-v0.5",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-04-06_proto-v0.5.mdx",source:"@site/blog/2023-04-06_proto-v0.5.mdx",title:"proto v0.5 - Version aliasing and global binaries",description:"With this release, we're providing solutions for installing globals and using aliases.",date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"alias",permalink:"/blog/tags/alias"},{label:"globals",permalink:"/blog/tags/globals"}],readingTime:1.89,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.5",title:"proto v0.5 - Version aliasing and global binaries",authors:["milesj"],tags:["proto","alias","globals"],image:"./img/proto/v0.5.png"},unlisted:!1,prevItem:{title:"proto v0.6 - Unused cleaning and improved global binaries",permalink:"/blog/proto-v0.6"},nextItem:{title:"moon v1.1 - Task debugging and improvements",permalink:"/blog/moon-v1.1"}},t={image:o(95185).Z,authorsImageUrls:[void 0]},d=[{value:"Install global binaries",id:"install-global-binaries",level:2},{value:"Bun, Deno, Go, Rust",id:"bun-deno-go-rust",level:3},{value:"Node.js, npm, pnpm, yarn",id:"nodejs-npm-pnpm-yarn",level:3},{value:"Custom version aliases",id:"custom-version-aliases",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"With this release, we're providing solutions for installing globals and using aliases."}),"\n",(0,s.jsx)(n.h2,{id:"install-global-binaries",children:"Install global binaries"}),"\n",(0,s.jsxs)(n.p,{children:["Installing global binaries (packages, modules, etc) is a common task for developers, and proto now\nprovides a solution for this workflow with the\n",(0,s.jsx)(n.a,{href:"/docs/proto/commands/install-global",children:(0,s.jsx)(n.code,{children:"proto install-global"})})," command. Continue reading for more\ninformation."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Global install directories will need to be added manually to your ",(0,s.jsx)(n.code,{children:"PATH"})," from your shell."]})}),"\n",(0,s.jsx)(n.h3,{id:"bun-deno-go-rust",children:"Bun, Deno, Go, Rust"}),"\n",(0,s.jsx)(n.p,{children:"All of these languages provide a built-in solution for installing global binaries to a shared\nlocation, regardless of the language's current version. Because of this, proto will simply call\ntheir install commands under the hood."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ proto install-global rust cargo-release\n\n# Same as\n$ cargo install cargo-release --force\n"})}),"\n",(0,s.jsx)(n.p,{children:"Globals will be installed to the following locations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bun"}),": ",(0,s.jsx)(n.code,{children:"~/.bun/bin"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Deno"}),": ",(0,s.jsx)(n.code,{children:"~/.deno/bin"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Go"}),": ",(0,s.jsx)(n.code,{children:"~/go/bin"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Rust"}),": ",(0,s.jsx)(n.code,{children:"~/.cargo/bin"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"nodejs-npm-pnpm-yarn",children:"Node.js, npm, pnpm, yarn"}),"\n",(0,s.jsx)(n.p,{children:"Unfortunately, the Node.js ecosystem is pretty fractured when it comes to installing global\nbinaries. Each package manager provides their own solution for installing globals, and each has\ntheir own quirks. The problem is further exacerbated by the fact that globals are tied to Node.js\nversion, so if you switch versions, you lose all your previous globals!"}),"\n",(0,s.jsxs)(n.p,{children:["To work around this, proto standardizes the global installation process for Node.js, but requires\nall globals to be installed through proto. You can no longer use ",(0,s.jsx)(n.code,{children:"npm install -g"}),", ",(0,s.jsx)(n.code,{children:"pnpm add -g"}),", so\non and so forth, and must use:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ proto install-global node webpack-cli\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Globals will be installed to a shared location, ",(0,s.jsx)(n.code,{children:"~/.proto/tools/node/globals/bin"}),", and will persist\nacross versions!"]}),"\n",(0,s.jsx)(n.h2,{id:"custom-version-aliases",children:"Custom version aliases"}),"\n",(0,s.jsxs)(n.p,{children:["We are excited to announce 2 new commands that enable you to define custom version aliases,\n",(0,s.jsx)(n.a,{href:"/docs/proto/commands/alias",children:(0,s.jsx)(n.code,{children:"proto alias"})})," and ",(0,s.jsx)(n.a,{href:"/docs/proto/commands/unalias",children:(0,s.jsx)(n.code,{children:"proto unalias"})}),".\nAliasing of versions is a feature that allows you to assign a custom name or label to a specific\nversion of a tool."]}),"\n",(0,s.jsx)(n.p,{children:'For example, instead of using the version number, you can assign a label such as "work" or\n"personal" to a version. This makes it easier to remember and manage different versions.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ proto alias node work 16.16\n$ proto alias node personal 18\n"})}),"\n",(0,s.jsx)(n.p,{children:"Aliases can be used anywhere a version is accepted, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ proto bin node work\n$ proto install node personal\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},95185:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/v0.5-239b258e475257305a2e2c2094e6a356.png"},71670:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>i});var s=o(27378);const l={},a=s.createContext(l);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);