"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38086],{1928:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var o=s(24246),r=s(71670),c=s(79022);const i={title:"Query language",toc_max_heading_level:4,tags:["query","lang","mql"]},a=void 0,t={id:"concepts/query-lang",title:"Query language",description:"moon supports an integrated query language, known as MQL, that can be used to filter and select",source:"@site/docs/concepts/query-lang.mdx",sourceDirName:"concepts",slug:"/concepts/query-lang",permalink:"/docs/concepts/query-lang",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/query-lang.mdx",tags:[{label:"query",permalink:"/docs/tags/query"},{label:"lang",permalink:"/docs/tags/lang"},{label:"mql",permalink:"/docs/tags/mql"}],version:"current",frontMatter:{title:"Query language",toc_max_heading_level:4,tags:["query","lang","mql"]},sidebar:"docs",previous:{title:"File patterns",permalink:"/docs/concepts/file-pattern"},next:{title:"Projects",permalink:"/docs/concepts/project"}},l={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Comparisons",id:"comparisons",level:3},{value:"Equals, Not equals",id:"equals-not-equals",level:4},{value:"Like, Not like",id:"like-not-like",level:4},{value:"Conditions",id:"conditions",level:3},{value:"Grouping",id:"grouping",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>language</code>",id:"language",level:3},{value:"<code>project</code>",id:"project",level:3},{value:"<code>projectAlias</code>",id:"projectalias",level:3},{value:"<code>projectName</code>",id:"projectname",level:3},{value:"<code>projectSource</code>",id:"projectsource",level:3},{value:"<code>projectStack</code><VersionLabel></VersionLabel>",id:"projectstack",level:3},{value:"<code>projectType</code>",id:"projecttype",level:3},{value:"<code>tag</code>",id:"tag",level:3},{value:"<code>task</code>",id:"task",level:3},{value:"<code>taskPlatform</code>",id:"taskplatform",level:3},{value:"<code>taskType</code>",id:"tasktype",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{version:"1.3.0",header:!0}),"\n",(0,o.jsxs)(n.p,{children:["moon supports an integrated query language, known as MQL, that can be used to filter and select\nprojects from the project graph, using an SQL-like syntax. MQL is primarily used by\n",(0,o.jsx)(n.a,{href:"../commands/run",children:(0,o.jsx)(n.code,{children:"moon run"})})," with the ",(0,o.jsx)(n.code,{children:"--query"})," option."]}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.h3,{id:"comparisons",children:"Comparisons"}),"\n",(0,o.jsxs)(n.p,{children:["A comparison (also known as an assignment) is an expression that defines a piece of criteria, and is\na building block of a query. This criteria maps a ",(0,o.jsx)(n.a,{href:"#fields",children:"field"})," to a value, with an explicit\ncomparison operator."]}),"\n",(0,o.jsx)(n.h4,{id:"equals-not-equals",children:"Equals, Not equals"}),"\n",(0,o.jsxs)(n.p,{children:["The equals (",(0,o.jsx)(n.code,{children:"="}),") and not equals (",(0,o.jsx)(n.code,{children:"!="}),") comparison operators can be used for ",(0,o.jsx)(n.em,{children:"exact"})," value matching."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"projectType=library && language!=javascript\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can also define a list of values using square bracket syntax, that will match against one of the\nvalues."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"language=[javascript, typescript]\n"})}),"\n",(0,o.jsx)(n.h4,{id:"like-not-like",children:"Like, Not like"}),"\n",(0,o.jsxs)(n.p,{children:["The like (",(0,o.jsx)(n.code,{children:"~"}),") and not like (",(0,o.jsx)(n.code,{children:"!~"}),") comparison operators can be used for ",(0,o.jsx)(n.em,{children:"wildcard"})," value matching,\nusing ",(0,o.jsx)(n.a,{href:"./file-pattern#globs",children:"glob syntax"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"projectSource~packages/* && tag!~*-app\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Like comparisons can only be used on non-enum fields."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"conditions",children:"Conditions"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"&&"})," and ",(0,o.jsx)(n.code,{children:"||"})," logical operators can be used to combine multiple comparisons into a condition.\nThe ",(0,o.jsx)(n.code,{children:"&&"})," operator is used to combine comparisons into a logical AND, and the ",(0,o.jsx)(n.code,{children:"||"})," operator is used\nfor logical OR."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"taskPlatform=system || taskPlatform=node\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For readability concerns, you can also use ",(0,o.jsx)(n.code,{children:"AND"})," or ",(0,o.jsx)(n.code,{children:"OR"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"taskPlatform=system OR taskPlatform=node\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Mixing both operators in the same condition is not supported."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"grouping",children:"Grouping"}),"\n",(0,o.jsx)(n.p,{children:"For advanced queries and complex conditions, you can group comparisons using parentheses to create\nlogical groupings. Groups can also be nested within other groups."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"language=javascript && (taskType=test || taskType=build)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.p,{children:["The following fields can be used as criteria, and are related to ",(0,o.jsx)(n.a,{href:"./token#variables",children:"task tokens"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"language",children:(0,o.jsx)(n.code,{children:"language"})}),"\n",(0,o.jsxs)(n.p,{children:["Programming language the project is written in, as defined in\n",(0,o.jsx)(n.a,{href:"../config/project#language",children:(0,o.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"language=rust\n"})}),"\n",(0,o.jsx)(n.h3,{id:"project",children:(0,o.jsx)(n.code,{children:"project"})}),"\n",(0,o.jsx)(n.p,{children:"Name OR alias of the project."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"project=server\n"})}),"\n",(0,o.jsx)(n.h3,{id:"projectalias",children:(0,o.jsx)(n.code,{children:"projectAlias"})}),"\n",(0,o.jsxs)(n.p,{children:["Alias of the project. For example, the ",(0,o.jsx)(n.code,{children:"package.json"})," name."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"projectAlias~@scope/*\n"})}),"\n",(0,o.jsx)(n.h3,{id:"projectname",children:(0,o.jsx)(n.code,{children:"projectName"})}),"\n",(0,o.jsxs)(n.p,{children:["Name of the project, as defined in ",(0,o.jsx)(n.a,{href:"../config/workspace",children:(0,o.jsx)(n.code,{children:".moon/workspace.yml"})}),", or ",(0,o.jsx)(n.code,{children:"id"})," in\n",(0,o.jsx)(n.a,{href:"../config/project#id",children:(0,o.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"project=server\n"})}),"\n",(0,o.jsx)(n.h3,{id:"projectsource",children:(0,o.jsx)(n.code,{children:"projectSource"})}),"\n",(0,o.jsxs)(n.p,{children:["Relative file path from the workspace root to the project root, as defined in\n",(0,o.jsx)(n.a,{href:"../config/workspace",children:(0,o.jsx)(n.code,{children:".moon/workspace.yml"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"projectSource~packages/*\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"projectstack",children:[(0,o.jsx)(n.code,{children:"projectStack"}),(0,o.jsx)(c.Z,{version:"1.22.0"})]}),"\n",(0,o.jsxs)(n.p,{children:["The stack of the project, as defined in ",(0,o.jsx)(n.a,{href:"../config/project#stack",children:(0,o.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"projectStack=frontend\n"})}),"\n",(0,o.jsx)(n.h3,{id:"projecttype",children:(0,o.jsx)(n.code,{children:"projectType"})}),"\n",(0,o.jsxs)(n.p,{children:["The type of project, as defined in ",(0,o.jsx)(n.a,{href:"../config/project#type",children:(0,o.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"projectType=application\n"})}),"\n",(0,o.jsx)(n.h3,{id:"tag",children:(0,o.jsx)(n.code,{children:"tag"})}),"\n",(0,o.jsxs)(n.p,{children:["A tag within the project, as defined in ",(0,o.jsx)(n.a,{href:"../config/project#tags",children:(0,o.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"tag~react-*\n"})}),"\n",(0,o.jsx)(n.h3,{id:"task",children:(0,o.jsx)(n.code,{children:"task"})}),"\n",(0,o.jsx)(n.p,{children:"ID/name of a task within the project."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"task=[build,test]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"taskplatform",children:(0,o.jsx)(n.code,{children:"taskPlatform"})}),"\n",(0,o.jsxs)(n.p,{children:["The platform a task will run against, as defined in ",(0,o.jsx)(n.a,{href:"../config/project#platform-1",children:(0,o.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"taskPlatform=node\n"})}),"\n",(0,o.jsx)(n.h3,{id:"tasktype",children:(0,o.jsx)(n.code,{children:"taskType"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"./task#types",children:"type of task"}),", based on its configured settings."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"taskType=build\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},79022:(e,n,s)=>{s.d(n,{Z:()=>c});var o=s(9619),r=s(24246);function c(e){let{header:n,inline:s,updated:c,version:i}=e;return(0,r.jsx)(o.Z,{text:`v${i}`,variant:c?"success":"info",className:n?"absolute right-0 top-1.5":s?"inline-block":"ml-2"})}},9619:(e,n,s)=>{s.d(n,{Z:()=>a});var o=s(40624),r=s(31792),c=s(24246);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function a(e){let{className:n,icon:s,text:a,variant:t}=e;return(0,c.jsxs)("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",t?i[t]:"bg-gray-100 text-gray-800",n),children:[s&&(0,c.jsx)(r.Z,{icon:s,className:"mr-1"}),a]})}},71670:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var o=s(27378);const r={},c=o.createContext(r);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);