"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6759],{21639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(24246),r=t(71670);const a={title:"generate"},s=void 0,i={id:"commands/generate",title:"generate",description:"The moon generate  (or moon g) command will generate code (files and folders) from a",source:"@site/docs/commands/generate.mdx",sourceDirName:"commands",slug:"/commands/generate",permalink:"/docs/commands/generate",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/generate.mdx",tags:[],version:"current",frontMatter:{title:"generate"},sidebar:"docs",previous:{title:"setup",permalink:"/docs/commands/docker/setup"},next:{title:"init",permalink:"/docs/commands/init"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"moon generate <name>"})," (or ",(0,o.jsx)(n.code,{children:"moon g"}),") command will generate code (files and folders) from a\npre-defined template of the same name, using an interactive series of prompts. Templates are located\nbased on the ",(0,o.jsx)(n.a,{href:"../config/workspace#templates",children:(0,o.jsx)(n.code,{children:"generator.templates"})})," setting."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'# Generate code from a template to a target directory\n$ moon generate npm-package ./packages/example\n\n# Generate code while declaring custom variable values\n$ moon generate npm-package ./packages/example -- --name "@company/example"\n\n# Create a new template\n$ moon generate react-app --template\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["View the official ",(0,o.jsx)(n.a,{href:"../guides/codegen",children:"code generation guide"})," for a more in-depth example of how to\nutilize this command."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<name>"})," - Name of the template to generate."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"[dest]"})," - Destination to write files to, relative from the current working directory. If not\ndefined, will be prompted during generation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"[-- <vars>]"})," - Additional arguments to override default variable values."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--defaults"})," - Use the default value of all variables instead of prompting the user."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--dryRun"})," - Run entire generator process without writing files."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--force"})," - Force overwrite any existing files at the destination."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--template"})," - Create a new template with the provided name."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(27378);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);