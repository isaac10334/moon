"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72484],{95075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(24246),a=t(71670),s=t(36642),l=(t(27457),t(32189));const i={title:"Astro example",sidebar_label:"Astro"},o=void 0,c={id:"guides/examples/astro",title:"Astro example",description:"In this guide, you'll learn how to integrate Astro.",source:"@site/docs/guides/examples/astro.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/astro",permalink:"/docs/guides/examples/astro",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/astro.mdx",tags:[],version:"current",frontMatter:{title:"Astro example",sidebar_label:"Astro"},sidebar:"guides",previous:{title:"Angular",permalink:"/docs/guides/examples/angular"},next:{title:"ESLint",permalink:"/docs/guides/examples/eslint"}},d={},u=[{value:"Setup",id:"setup",level:2},{value:"ESLint integration",id:"eslint-integration",level:3},{value:"Prettier integration",id:"prettier-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{to:"https://github.com/moonrepo/examples/tree/master/apps/astro-app"}),"\n",(0,r.jsxs)(n.p,{children:["In this guide, you'll learn how to integrate ",(0,r.jsx)(n.a,{href:"https://docs.astro.build",children:"Astro"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Begin by creating a new Astro project in the root of an existing moon project (this should not be\ncreated in the workspace root, unless a polyrepo)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd apps && npm create astro@latest\n"})}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Since Astro is per-project, the associated moon tasks should be defined in each project's\n",(0,r.jsx)(n.a,{href:"../../config/project",children:(0,r.jsx)(n.code,{children:"moon.yml"})})," file."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We suggest inheriting Astro tasks from the\n",(0,r.jsx)(n.a,{href:"https://github.com/moonrepo/moon-configs/tree/master/javascript/astro",children:"official moon configuration preset"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"# Inherit tasks from the `astro` preset\n# https://github.com/moonrepo/moon-configs\ntags: ['astro']\n\n# Disable project references\ntoolchain:\n  typescript:\n    syncProjectReferences: false\n"})}),"\n",(0,r.jsx)(n.h3,{id:"eslint-integration",children:"ESLint integration"}),"\n",(0,r.jsxs)(n.p,{children:["When using a ",(0,r.jsx)(n.a,{href:"./eslint",children:(0,r.jsx)(n.code,{children:"lint"})})," task, the\n",(0,r.jsx)(n.a,{href:"https://ota-meshi.github.io/eslint-plugin-astro/user-guide/",children:(0,r.jsx)(n.code,{children:"eslint-plugin-astro"})})," package must be\ninstalled to lint ",(0,r.jsx)(n.code,{children:".astro"})," files."]}),"\n",(0,r.jsx)(s.Z,{dev:!0,dep:"eslint-plugin-astro",package:"<app>"}),"\n",(0,r.jsxs)(n.p,{children:["Once the dependency has been installed in the application's ",(0,r.jsx)(n.code,{children:"package.json"}),". We can then enable this\nconfiguration by creating an ",(0,r.jsx)(n.code,{children:".eslintrc.js"})," file in the project root. Be sure this file is listed in\nyour lint task's inputs!"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="<project>/.eslintrc.js"',children:"module.exports = {\n  extends: ['plugin:astro/recommended'],\n  overrides: [\n    {\n      files: ['*.astro'],\n      parser: 'astro-eslint-parser',\n      // If using TypeScript\n      parserOptions: {\n        parser: '@typescript-eslint/parser',\n        extraFileExtensions: ['.astro'],\n        project: 'tsconfig.json',\n        tsconfigRootDir: __dirname,\n      },\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And lastly, when linting through moon's command line, you'll need to include the ",(0,r.jsx)(n.code,{children:".astro"})," extension\nwithin the ",(0,r.jsx)(n.code,{children:"lint"})," task. This can be done by extending the top-level task within the project (below),\nor by adding it to the top-level entirely."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"tasks:\n  lint:\n    args:\n      - '--ext'\n      - '.ts,.tsx,.astro'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"prettier-integration",children:"Prettier integration"}),"\n",(0,r.jsxs)(n.p,{children:["When using a ",(0,r.jsx)(n.a,{href:"./prettier",children:(0,r.jsx)(n.code,{children:"format"})})," task, the ",(0,r.jsx)(n.code,{children:"prettier-plugin-astro"})," package must be installed to\nformat ",(0,r.jsx)(n.code,{children:".astro"})," files. View the official\n",(0,r.jsx)(n.a,{href:"https://docs.astro.build/en/editor-setup/#prettier",children:"Astro docs"})," for more information."]}),"\n",(0,r.jsx)(s.Z,{dev:!0,dep:"prettier-plugin-astro",package:"<app>"}),"\n",(0,r.jsx)(n.h3,{id:"typescript-integration",children:"TypeScript integration"}),"\n",(0,r.jsxs)(n.p,{children:["Since Astro utilizes custom ",(0,r.jsx)(n.code,{children:".astro"})," files, it requires a specialized TypeScript integration, and\nluckily Astro provides an ",(0,r.jsx)(n.a,{href:"https://docs.astro.build/en/guides/typescript/",children:"in-depth guide"}),". With\nthat being said, we do have a few requirements and pointers!"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use the official ",(0,r.jsxs)(n.a,{href:"https://docs.astro.build/en/guides/typescript/#setup",children:["Astro ",(0,r.jsx)(n.code,{children:"tsconfig.json"})]})," as\na basis."]}),"\n",(0,r.jsxs)(n.li,{children:["From our internal testing, the ",(0,r.jsx)(n.code,{children:"astro check"})," command (that typechecks ",(0,r.jsx)(n.code,{children:".astro"})," files) ",(0,r.jsx)(n.em,{children:"does not\nsupport project references"}),". If the ",(0,r.jsx)(n.code,{children:"composite"})," compiler option is enabled, the checker will fail\nto find ",(0,r.jsx)(n.code,{children:".astro"})," files. To work around this, we disable ",(0,r.jsx)(n.code,{children:"workspace.typescript"})," in our moon config\nabove."]}),"\n",(0,r.jsxs)(n.li,{children:["Since typechecking requires 2 commands, one for ",(0,r.jsx)(n.code,{children:".astro"})," files, and the other for ",(0,r.jsx)(n.code,{children:".ts"}),", ",(0,r.jsx)(n.code,{children:".tsx"}),"\nfiles, we've added the ",(0,r.jsx)(n.a,{href:"./typescript",children:(0,r.jsx)(n.code,{children:"typecheck"})})," task as a dependency for the ",(0,r.jsx)(n.code,{children:"check"})," task. This\nwill run both commands through a single task!"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"root-level",children:"Root-level"}),"\n",(0,r.jsxs)(n.p,{children:["We suggest ",(0,r.jsx)(n.em,{children:"against"})," root-level configuration, as Astro should be installed per-project, and the\n",(0,r.jsx)(n.code,{children:"astro"})," command expects the configuration to live relative to the project root."]}),"\n",(0,r.jsx)(n.h3,{id:"project-level",children:"Project-level"}),"\n",(0,r.jsxs)(n.p,{children:["When creating a new Astro project, a\n",(0,r.jsx)(n.a,{href:"https://docs.astro.build/en/reference/configuration-reference/",children:(0,r.jsx)(n.code,{children:"astro.config.mjs"})})," is created, and\n",(0,r.jsx)(n.em,{children:"must"})," exist in the project root. This allows each project to configure Astro for their needs."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="<project>/astro.config.mjs"',children:"import { defineConfig } from 'astro/config';\n\n// https://astro.build/config\nexport default defineConfig({});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},39798:(e,n,t)=>{t.d(n,{Z:()=>l});t(27378);var r=t(37140);const a={tabItem:"tabItem_wHwb"};var s=t(24246);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},33337:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(27378),a=t(37140),s=t(83457),l=t(35595),i=t(76457);const o={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var c=t(24246);function d(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const n=e.currentTarget,t=d.indexOf(n),a=i[t].value;a!==r&&(u(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:p,...s,className:(0,a.Z)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function u(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function p(e){const n=(0,l.Y)(e);return(0,c.jsxs)("div",{className:(0,a.Z)("tabs-container",o.tabList),children:[(0,c.jsx)(d,{...e,...n}),(0,c.jsx)(u,{...e,...n})]})}function h(e){const n=(0,i.Z)();return(0,c.jsx)(p,{...e,children:(0,l.h)(e.children)},String(n))}},35595:(e,n,t)=>{t.d(n,{Y:()=>h,h:()=>c});var r=t(27378),a=t(3620),s=t(9834),l=t(30654),i=t(70784),o=t(71819);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[h,g]=p({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,o.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),j=(()=>{const e=h??f;return u({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),g(e),m(e)}),[g,m,l]),tabValues:l}}},36642:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(52807),a=t(39798),s=t(33337),l=t(24246);function i(e,n,t){let r=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?r+="--dev ":e.peer&&(r+="--peer "),t&&n&&!e.package&&(r+="-W "),r+=e.dep,r}function o(e){let n="npm install ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package&&(n+=`--workspace ${e.package} `),n+=e.dep,n}function c(e,n){let t="pnpm add ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package?t+=`--filter ${e.package} `:n&&(t+="-w "),t+=e.dep,t}function d(e){let n="bun install ";return e.dev?n+="--dev ":e.peer&&(n+="--peer "),n+=e.dep,n}function u(e){let n=i(e,!1,!0),t=c(e,!1);return e.package||(n+="\n\n# If using workspaces\n",t+="\n\n# If using workspaces\n",n+=i(e,!0,!0),t+=c(e,!0)),(0,l.jsxs)(s.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Bun",value:"bun"}],children:[(0,l.jsx)(a.Z,{value:"yarn",children:(0,l.jsx)(r.default,{language:"shell",children:i(e,!1,!1)})}),(0,l.jsx)(a.Z,{value:"yarn1",children:(0,l.jsx)(r.default,{language:"shell",children:n})}),(0,l.jsx)(a.Z,{value:"npm",children:(0,l.jsx)(r.default,{language:"shell",children:o(e)})}),(0,l.jsx)(a.Z,{value:"pnpm",children:(0,l.jsx)(r.default,{language:"shell",children:t})}),(0,l.jsx)(a.Z,{value:"bun",children:(0,l.jsx)(r.default,{language:"shell",children:d(e)})})]})}},27457:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(52807),a=t(39798),s=t(33337),l=t(24246);function i(e,n,t){return`${e} create ${n} ${t.join(" ")}`.trim()}function o(e){let{dep:n,args:t=[]}=e;return(0,l.jsxs)(s.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],children:[(0,l.jsx)(a.Z,{value:"yarn",children:(0,l.jsx)(r.default,{language:"shell",children:i("yarn",n,t)})}),(0,l.jsx)(a.Z,{value:"yarn1",children:(0,l.jsx)(r.default,{language:"shell",children:i("yarn",n,t)})}),(0,l.jsx)(a.Z,{value:"npm",children:(0,l.jsx)(r.default,{language:"shell",children:i("npm",n,t)})}),(0,l.jsx)(a.Z,{value:"pnpm",children:(0,l.jsx)(r.default,{language:"shell",children:i("pnpm",n,t)})})]})}},32189:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(83469),a=t(31792),s=t(24246);function l(e){let{to:n}=e;return(0,s.jsx)("a",{href:n,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"},children:(0,s.jsx)(a.Z,{icon:r.dT$})})}},71670:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(27378);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);