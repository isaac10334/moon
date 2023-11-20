"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29593],{23778:(o,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var e=n(24246),s=n(71670),l=n(79022);const i={title:"tool list-plugins",sidebar_label:"list-plugins"},r=void 0,a={id:"proto/commands/tool/list-plugins",title:"tool list-plugins",description:"The proto tool list-plugins command (formerly proto plugins) will list all available and",source:"@site/docs/proto/commands/tool/list-plugins.mdx",sourceDirName:"proto/commands/tool",slug:"/proto/commands/tool/list-plugins",permalink:"/docs/proto/commands/tool/list-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/tool/list-plugins.mdx",tags:[],version:"current",frontMatter:{title:"tool list-plugins",sidebar_label:"list-plugins"},sidebar:"proto",previous:{title:"list",permalink:"/docs/proto/commands/tool/list"},next:{title:"remove",permalink:"/docs/proto/commands/tool/remove"}},c={},p=[{value:"Options",id:"options",level:3}];function d(o){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.Z,{version:"0.23.0",header:!0}),"\n",(0,e.jsxs)(t.p,{children:["The ",(0,e.jsx)(t.code,{children:"proto tool list-plugins"})," command (formerly ",(0,e.jsx)(t.code,{children:"proto plugins"}),") will list all available and\nconfigured plugins, for both third-party and built-in tools. Will load all ",(0,e.jsx)(t.code,{children:".prototools"})," traversing\nupwards, and the ",(0,e.jsx)(t.code,{children:"~/.proto/config.toml"})," file."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{children:"$ proto tool list-plugins\n\nbun - Bun v1.2\n  Source: https://github.com/moonrepo/bun-plugin/releases/latest/download/bun_plugin.wasm\n\ndeno - Deno v2.0\n  GitHub: moonrepo/deno-plugin\n  Tag: latest\n\ngo - Go v0.1\n  GitHub: moonrepo/go-plugin\n  Tag: latest\n"})}),"\n",(0,e.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.code,{children:"--json"})," - Print the list in JSON format."]}),"\n"]})]})}function u(o={}){const{wrapper:t}={...(0,s.a)(),...o.components};return t?(0,e.jsx)(t,{...o,children:(0,e.jsx)(d,{...o})}):d(o)}},79022:(o,t,n)=>{n.d(t,{Z:()=>l});var e=n(9619),s=n(24246);function l(o){let{header:t,inline:n,updated:l,version:i}=o;return(0,s.jsx)(e.Z,{text:`v${i}`,variant:l?"success":"info",className:t?"absolute right-0 top-1.5":n?"inline-block":"ml-2"})}},9619:(o,t,n)=>{n.d(t,{Z:()=>r});var e=n(40624),s=n(31792),l=n(24246);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function r(o){let{className:t,icon:n,text:r,variant:a}=o;return(0,l.jsxs)("span",{className:(0,e.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",a?i[a]:"bg-gray-100 text-gray-800",t),children:[n&&(0,l.jsx)(s.Z,{icon:n,className:"mr-1"}),r]})}},71670:(o,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var e=n(27378);const s={},l=e.createContext(s);function i(o){const t=e.useContext(l);return e.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function r(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:i(o.components),e.createElement(l.Provider,{value:t},o.children)}}}]);