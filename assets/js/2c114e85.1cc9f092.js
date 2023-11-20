"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88663],{25103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(24246),r=t(71670);const s={title:"project"},c=void 0,i={id:"commands/project",title:"project",description:"The moon project  (or moon p) command will display all available information about a",source:"@site/docs/commands/project.mdx",sourceDirName:"commands",slug:"/commands/project",permalink:"/docs/commands/project",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/project.mdx",tags:[],version:"current",frontMatter:{title:"project"},sidebar:"docs",previous:{title:"from-turborepo",permalink:"/docs/commands/migrate/from-turborepo"},next:{title:"project-graph",permalink:"/docs/commands/project-graph"}},a={},l=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Example output",id:"example-output",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"moon project <name>"})," (or ",(0,o.jsx)(n.code,{children:"moon p"}),") command will display all available information about a\nproject that has been configured and exists within the graph. If a project does not exist, the\nprogram will return with a 1 exit code."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ moon project web\n"})}),"\n",(0,o.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<name>"})," - Name or alias of a project, as defined in ",(0,o.jsx)(n.a,{href:"../config/workspace#projects",children:(0,o.jsx)(n.code,{children:"projects"})}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--json"})," - Print the project and its configuration as JSON."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example-output",children:"Example output"}),"\n",(0,o.jsxs)(n.p,{children:["The following output is an example of what this command prints, using our very own\n",(0,o.jsx)(n.code,{children:"@moonrepo/runtime"})," package."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"RUNTIME\n\nID: runtime\nAlias: @moonrepo/runtime\nSource: packages/runtime\nRoot: /Projects/moon/packages/runtime\n\nTASKS\n\nbuild: packemon build --addEngines --addExports\nformat: prettier --check .\nlint: eslint --no-error-on-unmatched-pattern .\ntest: jest --passWithNoTests .\ntypecheck: tsc --build\n\nFILE GROUPS\n\nconfigs:\n - *.{js,json}\nsources:\n - src/**/*\n - types/**/*\ntests:\n - tests/**/*.test.*\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(27378);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);