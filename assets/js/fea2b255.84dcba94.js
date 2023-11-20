"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93287],{37443:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(24246),c=s(71670),o=s(79022);const i={title:"Targets"},r=void 0,a={id:"concepts/target",title:"Targets",description:"A target is a compound identifier that pairs a scope to a task, separated by a",source:"@site/docs/concepts/target.mdx",sourceDirName:"concepts",slug:"/concepts/target",permalink:"/docs/concepts/target",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/target.mdx",tags:[],version:"current",frontMatter:{title:"Targets"},sidebar:"docs",previous:{title:"Projects",permalink:"/docs/concepts/project"},next:{title:"Tasks",permalink:"/docs/concepts/task"}},l={},d=[{value:"Common scopes",id:"common-scopes",level:2},{value:"By project",id:"by-project",level:3},{value:"By tag<VersionLabel></VersionLabel>",id:"by-tag",level:3},{value:"Run scopes",id:"run-scopes",level:2},{value:"All projects",id:"all-projects",level:3},{value:"Config scopes",id:"config-scopes",level:2},{value:"Dependencies <code>^</code>",id:"dependencies-",level:3},{value:"Self <code>~</code>",id:"self-",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A target is a compound identifier that pairs a ",(0,t.jsx)(n.a,{href:"#scope",children:"scope"})," to a ",(0,t.jsx)(n.a,{href:"./task",children:"task"}),", separated by a\n",(0,t.jsx)(n.code,{children:":"}),", in the format of ",(0,t.jsx)(n.code,{children:"scope:task"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Targets are used by terminal commands..."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ moon run designSystem:build\n"})}),"\n",(0,t.jsx)(n.p,{children:"And configurations for declaring cross-project or cross-task dependencies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"tasks:\n  build:\n    command: 'webpack'\n    deps:\n      - 'designSystem:build'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"common-scopes",children:"Common scopes"}),"\n",(0,t.jsx)(n.p,{children:"These scopes are available for both running targets and configuring them."}),"\n",(0,t.jsx)(n.h3,{id:"by-project",children:"By project"}),"\n",(0,t.jsxs)(n.p,{children:["The most common scope is the project scope, which requires the name of a project, as defined in\n",(0,t.jsx)(n.a,{href:"../config/workspace",children:(0,t.jsx)(n.code,{children:".moon/workspace.yml"})}),". When paired with a task name, it will run a specific\ntask from that project."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Run `lint` in project `app`\n$ moon run app:lint\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"by-tag",children:["By tag",(0,t.jsx)(o.Z,{version:"1.4.0"})]}),"\n",(0,t.jsxs)(n.p,{children:["Another way to target projects is with the tag scope, which requires the name of a tag prefixed with\n",(0,t.jsx)(n.code,{children:"#"}),", and will run a specific task in all projects with that tag."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Run `lint` in projects with the tag `frontend`\n$ moon run '#frontend:lint'\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Because ",(0,t.jsx)(n.code,{children:"#"})," is a special character in the terminal (is considered a comment), you'll need to wrap\nthe target in quotes, or escape it like so ",(0,t.jsx)(n.code,{children:"\\#"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"run-scopes",children:"Run scopes"}),"\n",(0,t.jsx)(n.p,{children:"These scopes are only available on the command line when running targets."}),"\n",(0,t.jsx)(n.h3,{id:"all-projects",children:"All projects"}),"\n",(0,t.jsxs)(n.p,{children:["For situations where you want to run a specific target in ",(0,t.jsx)(n.em,{children:"all"})," projects, for example ",(0,t.jsx)(n.code,{children:"lint"}),"ing, you\ncan utilize the all projects scope by omitting the project name from the target: ",(0,t.jsx)(n.code,{children:":lint"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Run `lint` in all projects\n$ moon run :lint\n"})}),"\n",(0,t.jsx)(n.h2,{id:"config-scopes",children:"Config scopes"}),"\n",(0,t.jsx)(n.p,{children:"These scopes are only available when configuring a task."}),"\n",(0,t.jsxs)(n.h3,{id:"dependencies-",children:["Dependencies ",(0,t.jsx)(n.code,{children:"^"})]}),"\n",(0,t.jsxs)(n.p,{children:["When you want to include a reference for each project ",(0,t.jsx)(n.a,{href:"./project#dependencies",children:"that's depended on"}),",\nyou can utilize the ",(0,t.jsx)(n.code,{children:"^"})," scope. This will be expanded to ",(0,t.jsx)(n.em,{children:"all"})," depended on projects. If you do not\nwant all projects, then you'll need to explicitly define them."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="moon.yml"',children:"dependsOn:\n  - 'apiClients'\n  - 'designSystem'\n\n# Configured as\ntasks:\n  build:\n    command: 'webpack'\n    deps:\n      - '^:build'\n\n# Resolves to\ntasks:\n  build:\n    command: 'webpack'\n    deps:\n      - 'apiClients:build'\n      - 'designSystem:build'\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"self-",children:["Self ",(0,t.jsx)(n.code,{children:"~"})]}),"\n",(0,t.jsxs)(n.p,{children:["When referring to another task within the current project, you can utilize the ",(0,t.jsx)(n.code,{children:"~"})," scope, or emit\nthe ",(0,t.jsx)(n.code,{children:"~:"})," prefix altogether, which will be expanded to the current project's name. This is useful for\nsituations where the name is unknown, for example, when configuring\n",(0,t.jsx)(n.a,{href:"../config/tasks",children:(0,t.jsx)(n.code,{children:".moon/tasks.yml"})}),", or if you just want a shortcut!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks.yml"',children:"# Configured as\ntasks:\n  lint:\n    command: 'eslint'\n    deps:\n      - '~:typecheck'\n      # OR\n      - 'typecheck'\n  typecheck:\n    command: 'tsc'\n\n# Resolves to (assuming project is \"foo\")\ntasks:\n  lint:\n    command: 'eslint'\n    deps:\n      - 'foo:typecheck'\n  typecheck:\n    command: 'tsc'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},79022:(e,n,s)=>{s.d(n,{Z:()=>o});var t=s(9619),c=s(24246);function o(e){let{header:n,inline:s,updated:o,version:i}=e;return(0,c.jsx)(t.Z,{text:`v${i}`,variant:o?"success":"info",className:n?"absolute right-0 top-1.5":s?"inline-block":"ml-2"})}},9619:(e,n,s)=>{s.d(n,{Z:()=>r});var t=s(40624),c=s(31792),o=s(24246);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function r(e){let{className:n,icon:s,text:r,variant:a}=e;return(0,o.jsxs)("span",{className:(0,t.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",a?i[a]:"bg-gray-100 text-gray-800",n),children:[s&&(0,o.jsx)(c.Z,{icon:s,className:"mr-1"}),r]})}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var t=s(27378);const c={},o=t.createContext(c);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);