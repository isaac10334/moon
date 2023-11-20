"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58751],{80653:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var t=s(24246),r=s(71670),i=s(79022);const c={title:"run"},o=void 0,d={id:"commands/run",title:"run",description:"The moon run (or moon r) command will run one or many targets and all of",source:"@site/docs/commands/run.mdx",sourceDirName:"commands",slug:"/commands/run",permalink:"/docs/commands/run",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/run.mdx",tags:[],version:"current",frontMatter:{title:"run"},sidebar:"docs",previous:{title:"touched-files",permalink:"/docs/commands/query/touched-files"},next:{title:"setup",permalink:"/docs/commands/setup"}},l={},a=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Affected",id:"affected",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"moon run"})," (or ",(0,t.jsx)(n.code,{children:"moon r"}),") command will run one or many ",(0,t.jsx)(n.a,{href:"../concepts/target",children:"targets"})," and all of\nits dependencies in topological order. Each run will incrementally cache each task, improving speed\nand development times... over time. View the official ",(0,t.jsx)(n.a,{href:"../run-task",children:"Run a task"})," and\n",(0,t.jsx)(n.a,{href:"../cheat-sheet#tasks",children:"Cheat sheet"})," articles for more information!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Run `lint` in project `app`\n$ moon run app:lint\n$ moon app:lint\n\n# Run `dev` in project `client` and `server`\n$ moon run client:dev server:dev\n\n# Run `test` in all projects\n$ moon run :test\n\n# Run `test` in all projects with tag `frontend`\n$ moon run '#frontend:test'\n\n# Run `format` in closest project (`client`)\n$ cd apps/client\n$ moon run format\n\n# Run `build` in projects matching the query\n$ moon run :build --query \"language=javascript && projectType=library\"\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"How affected status is determined is highly dependent on whether the command is running locally, in\nCI, and what options are provided. The following scenarios are possible:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.code,{children:"--affected"})," is provided, will explicitly use ",(0,t.jsx)(n.code,{children:"--remote"})," to determine CI or local."]}),"\n",(0,t.jsxs)(n.li,{children:["When not provided, will use ",(0,t.jsx)(n.code,{children:"git diff"})," in CI, or ",(0,t.jsx)(n.code,{children:"git status"})," for local."]}),"\n",(0,t.jsxs)(n.li,{children:["To bypass affected logic entirely, use ",(0,t.jsx)(n.code,{children:"--force"}),"."]}),"\n"]})]}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"...<target>"})," - ",(0,t.jsx)(n.a,{href:"../concepts/target",children:"Targets"})," or project relative tasks to run."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[-- <args>]"})," - Additional arguments to\n",(0,t.jsx)(n.a,{href:"../run-task#passing-arguments-to-the-underlying-command",children:"pass to the underlying command"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-f"}),", ",(0,t.jsx)(n.code,{children:"--force"})," - Force run and ignore touched files and affected status. Will not query VCS."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--dependents"})," - Run downstream dependent targets (of the same task name) as well."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-i"}),", ",(0,t.jsx)(n.code,{children:"--interactive"})," - Run the target in an interactive mode."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--profile <type>"})," - Record and ",(0,t.jsx)(n.a,{href:"../guides/profile",children:"generate a profile"})," for ran tasks.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Types: ",(0,t.jsx)(n.code,{children:"cpu"}),", ",(0,t.jsx)(n.code,{children:"heap"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--query"})," - Filter projects to run targets against using\n",(0,t.jsx)(n.a,{href:"../concepts/query-lang",children:"a query statement"}),". ",(0,t.jsx)(i.Z,{version:"1.3.0"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-u"}),", ",(0,t.jsx)(n.code,{children:"--updateCache"})," - Bypass cache and force update any existing items."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"affected",children:"Affected"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--affected"})," - Only run target if affected by changed files, ",(0,t.jsx)(n.em,{children:"otherwise"})," will always run."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--remote"})," - Determine affected against remote by comparing ",(0,t.jsx)(n.code,{children:"HEAD"})," against a base revision\n(default branch), ",(0,t.jsx)(n.em,{children:"otherwise"})," uses local changes.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Can control revisions with ",(0,t.jsx)(n.code,{children:"MOON_BASE"})," and ",(0,t.jsx)(n.code,{children:"MOON_HEAD"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--status <type>"})," - Filter affected based on a change status. Can be passed multiple times.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Types: ",(0,t.jsx)(n.code,{children:"all"})," (default), ",(0,t.jsx)(n.code,{children:"added"}),", ",(0,t.jsx)(n.code,{children:"deleted"}),", ",(0,t.jsx)(n.code,{children:"modified"}),", ",(0,t.jsx)(n.code,{children:"staged"}),", ",(0,t.jsx)(n.code,{children:"unstaged"}),", ",(0,t.jsx)(n.code,{children:"untracked"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},79022:(e,n,s)=>{s.d(n,{Z:()=>i});var t=s(9619),r=s(24246);function i(e){let{header:n,inline:s,updated:i,version:c}=e;return(0,r.jsx)(t.Z,{text:`v${c}`,variant:i?"success":"info",className:n?"absolute right-0 top-1.5":s?"inline-block":"ml-2"})}},9619:(e,n,s)=>{s.d(n,{Z:()=>o});var t=s(40624),r=s(31792),i=s(24246);const c={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function o(e){let{className:n,icon:s,text:o,variant:d}=e;return(0,i.jsxs)("span",{className:(0,t.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",d?c[d]:"bg-gray-100 text-gray-800",n),children:[s&&(0,i.jsx)(r.Z,{icon:s,className:"mr-1"}),o]})}},71670:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var t=s(27378);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);