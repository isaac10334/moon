"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93363],{96992:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=l(24246),s=l(71670);const o={slug:"proto-v0.15",title:"proto v0.15 - Install and uninstall globals",authors:["milesj"],tags:["proto","wasm","plugin","global"]},a=void 0,i={permalink:"/blog/proto-v0.15",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-08-23_proto-v0.15.mdx",source:"@site/blog/2023-08-23_proto-v0.15.mdx",title:"proto v0.15 - Install and uninstall globals",description:"This is a small release that adds support for uninstalling globals, and improves our WASM APIs.",date:"2023-08-23T00:00:00.000Z",formattedDate:"August 23, 2023",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"wasm",permalink:"/blog/tags/wasm"},{label:"plugin",permalink:"/blog/tags/plugin"},{label:"global",permalink:"/blog/tags/global"}],readingTime:1.48,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.15",title:"proto v0.15 - Install and uninstall globals",authors:["milesj"],tags:["proto","wasm","plugin","global"]},unlisted:!1,prevItem:{title:"proto v0.16 - Add, remove, and purge plugins",permalink:"/blog/proto-v0.16"},nextItem:{title:"moon v1.12 - Task improvements: extending, interactive, and more",permalink:"/blog/moon-v1.12"}},r={authorsImageUrls:[void 0]},d=[{value:"Uninstall global dependencies",id:"uninstall-global-dependencies",level:2},{value:"WASM functions",id:"wasm-functions",level:3},{value:"TOML setting",id:"toml-setting",level:3},{value:"Improved WASM documentation",id:"improved-wasm-documentation",level:2},{value:"Other changes",id:"other-changes",level:2}];function c(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"This is a small release that adds support for uninstalling globals, and improves our WASM APIs."}),"\n",(0,t.jsx)(e.h2,{id:"uninstall-global-dependencies",children:"Uninstall global dependencies"}),"\n",(0,t.jsxs)(e.p,{children:["proto has supported ",(0,t.jsx)(e.a,{href:"./proto-v0.5",children:"installing globals since v0.5"}),", but there's been no way to\nuninstall an existing global, until now! In this release, we're introducing the\n",(0,t.jsx)(e.a,{href:"/docs/proto/commands/uninstall-global",children:(0,t.jsx)(e.code,{children:"proto uninstall-global"})})," command, which will do just that!\nThe API is exactly the same as its installation counter-part."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"proto install-global node prettier\n\n# On second thought, nevermind...\nproto uninstall-global node prettier\n"})}),"\n",(0,t.jsx)(e.h3,{id:"wasm-functions",children:"WASM functions"}),"\n",(0,t.jsxs)(e.p,{children:["Implementing this command was rather straight forward, but most of the work went into supporting\n",(0,t.jsxs)(e.a,{href:"/docs/proto/wasm-plugin#installing-and-uninstalling-globals",children:[(0,t.jsx)(e.code,{children:"install_global"})," and ",(0,t.jsx)(e.code,{children:"uninstall_global"})]}),"\nfunctions for WASM plugins, and then updating all existing plugins! For those of you writing your\nown plugins, here's an example of what the Rust code looks like:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'#[plugin_fn]\npub fn install_global(\n    Json(input): Json<InstallGlobalInput>,\n) -> FnResult<Json<InstallGlobalOutput>> {\n    let result = exec_command!(inherit, "npm", ["install", "--global", &input.dependency]);\n\n    Ok(Json(InstallGlobalOutput::from_exec_command(result)))\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"toml-setting",children:"TOML setting"}),"\n",(0,t.jsxs)(e.p,{children:["We've also updated our TOML plugins to support uninstalling globals through the new\n",(0,t.jsx)(e.a,{href:"/docs/proto/toml-plugin#global-packages",children:(0,t.jsx)(e.code,{children:"globals.uninstall-args"})})," setting. Hopefully the name is\nself explanatory, but it's a list of arguments passed to the tool's binary, that'll uninstall the\nglobal."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",children:'# ...\n\n[globals]\ninstall-args = ["install", "--global", "{dependency}"]\nuninstall-args = ["uninstall", "--global", "{dependency}"]\n'})}),"\n",(0,t.jsx)(e.h2,{id:"improved-wasm-documentation",children:"Improved WASM documentation"}),"\n",(0,t.jsx)(e.p,{children:"With each release we're slowly stabilizing the WASM and TOML APIs for an official v1 release (which\nis soon), and with this, it requires more documentation. As part of this release, we've done a giant\npolish pass on our WASM documentation, and have included the following sections:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/proto/wasm-plugin#virtual-paths",children:"Virtual paths"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/proto/wasm-plugin#host-environment",children:"Host environment"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/proto/wasm-plugin#host-functions",children:"Host functions"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/proto/wasm-plugin#tool-id-and-context",children:"Tool ID and context"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/proto/wasm-plugin#installing-and-uninstalling-globals",children:"Installing and uninstalling globals"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(e.p,{children:["View the ",(0,t.jsx)(e.a,{href:"https://github.com/moonrepo/proto/releases/tag/v0.15.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Major WASM API improvements, including backwards incompatible changes."}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},71670:(n,e,l)=>{l.d(e,{Z:()=>i,a:()=>a});var t=l(27378);const s={},o=t.createContext(s);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);