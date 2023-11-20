"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90297],{78438:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(24246),r=t(71670);const i={title:"File groups"},o=void 0,c={id:"concepts/file-group",title:"File groups",description:"File groups are a mechanism for grouping similar types of files within a project using",source:"@site/docs/concepts/file-group.mdx",sourceDirName:"concepts",slug:"/concepts/file-group",permalink:"/docs/concepts/file-group",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/file-group.mdx",tags:[],version:"current",frontMatter:{title:"File groups"},sidebar:"docs",previous:{title:"Cache",permalink:"/docs/concepts/cache"},next:{title:"File patterns",permalink:"/docs/concepts/file-pattern"}},a={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Inheritance and merging",id:"inheritance-and-merging",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["File groups are a mechanism for grouping similar types of files within a project using\n",(0,s.jsx)(n.a,{href:"./file-pattern",children:"file glob patterns or literal file paths"}),". These groups are then used by\n",(0,s.jsx)(n.a,{href:"./task",children:"tasks"})," to calculate functionality like cache computation, affected files since last change,\ndeterministic builds, and more."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["File groups can be configured per project through ",(0,s.jsx)(n.a,{href:"../config/project",children:(0,s.jsx)(n.code,{children:"moon.yml"})}),", or for many\nprojects through ",(0,s.jsx)(n.a,{href:"../config/tasks",children:(0,s.jsx)(n.code,{children:".moon/tasks.yml"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"inheritance-and-merging",children:"Inheritance and merging"}),"\n",(0,s.jsxs)(n.p,{children:["When a file group of the same name exists in both ",(0,s.jsx)(n.a,{href:"#configuration",children:"configuration files"}),", the\nproject-level group will override the workspace-level group, and all other workspace-level groups\nwill be inherited as-is."]}),"\n",(0,s.jsxs)(n.p,{children:["A primary scenario in which to define file groups at the project-level is when you want to\n",(0,s.jsx)(n.em,{children:"override"})," file groups defined at the workspace-level. For example, say we want to override the\n",(0,s.jsx)(n.code,{children:"sources"}),' file group because our source folder is named "lib" and not "src", we would define our\nfile groups as followed.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks.yml"',children:"fileGroups:\n  sources:\n    - 'src/**/*'\n    - 'types/**/*'\n  tests:\n    - 'tests/**/*.test.*'\n    - '**/__tests__/**/*'\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="moon.yml"',children:"fileGroups:\n  # Overrides global\n  sources:\n    - 'lib/**/*'\n    - 'types/**/*'\n  # Inherited as-is\n  tests:\n    - 'tests/**/*.test.*'\n    - '**/__tests__/**/*'\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(27378);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);