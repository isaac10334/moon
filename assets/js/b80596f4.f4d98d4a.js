"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78463],{92590:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=o(24246),s=o(71670);const a={slug:"moon-v1.13",title:"moon v1.13 - Toolchain now uses WASM plugins",authors:["milesj"],tags:["tasks","proto","wasm"],image:"./img/moon/v1.13.png"},i=void 0,l={permalink:"/blog/moon-v1.13",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-09-05_moon-v1.13.mdx",source:"@site/blog/2023-09-05_moon-v1.13.mdx",title:"moon v1.13 - Toolchain now uses WASM plugins",description:"This is a light release that focused primarily on upgrading to the WASM based proto implementation.",date:"2023-09-05T00:00:00.000Z",formattedDate:"September 5, 2023",tags:[{label:"tasks",permalink:"/blog/tags/tasks"},{label:"proto",permalink:"/blog/tags/proto"},{label:"wasm",permalink:"/blog/tags/wasm"}],readingTime:2.76,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.13",title:"moon v1.13 - Toolchain now uses WASM plugins",authors:["milesj"],tags:["tasks","proto","wasm"],image:"./img/moon/v1.13.png"},unlisted:!1,prevItem:{title:"proto v0.17 - Experimental Python support and canary releases",permalink:"/blog/proto-v0.17"},nextItem:{title:"proto v0.16 - Add, remove, and purge plugins",permalink:"/blog/proto-v0.16"}},r={image:o(62295).Z,authorsImageUrls:[void 0]},d=[{value:"proto upgrade and WASM plugins",id:"proto-upgrade-and-wasm-plugins",level:2},{value:"Allow tasks to fail",id:"allow-tasks-to-fail",level:2},{value:"Other changes",id:"other-changes",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This is a light release that focused primarily on upgrading to the WASM based proto implementation."}),"\n",(0,t.jsx)(n.h2,{id:"proto-upgrade-and-wasm-plugins",children:"proto upgrade and WASM plugins"}),"\n",(0,t.jsxs)(n.p,{children:["Over the last few months, we've made immense strides on ",(0,t.jsx)(n.a,{href:"/proto",children:"proto"}),", our multi-language\ntoolchain. For those of you unaware, moon's toolchain is built on top of proto, and we accomplish\nthis by utilizing the same Rust code between both tools."]}),"\n",(0,t.jsxs)(n.p,{children:["However, moon has been locked to ",(0,t.jsx)(n.a,{href:"/blog/proto-v0.12",children:"proto v0.12"}),", which was a purely Rust based\nimplementation. With the release of ",(0,t.jsx)(n.a,{href:"/blog/proto-v0.13",children:"proto v0.13"})," and onward, proto has moved to\na WASM based plugin architecture (with the core still in Rust), which allows us to support more\nlanguages, and enables developers to write plugins in non-Rust languages."]}),"\n",(0,t.jsxs)(n.p,{children:["And since our WASM plugins have stabilized by ",(0,t.jsx)(n.a,{href:"/blog/proto-v0.16",children:"proto v0.16"}),", we felt it was time\nto finally upgrade moon's implementation to the latest and greatest. So what does this mean exactly?\nA few things:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you're using moon's ",(0,t.jsx)(n.a,{href:"/docs/config/toolchain",children:"toolchain"})," (like ",(0,t.jsx)(n.code,{children:"node"}),"), we will now download the\n",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/node-plugin",children:"Node.js WASM plugins"})," in the background (to\n",(0,t.jsx)(n.code,{children:"~/.proto/plugins"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"These plugins are in charge of downloading and installing the Node.js, npm, pnpm, or yarn version\nspecified in your toolchain configuration."}),"\n",(0,t.jsx)(n.li,{children:"The entire plugin flow is now logged to the console, so you can see what's happening behind the\nscenes."}),"\n",(0,t.jsx)(n.li,{children:"In the future (most likely moon v2), our platform and language integration will also be powered by\nWASM plugins. This enables you to build your own custom plugins!"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This entire process should be transparent to all users, and you should not notice any changes.\nHowever, in case this upgrade causes issues, we wanted to isolate it from other changes, hence the\nlight release!"})}),"\n",(0,t.jsx)(n.h2,{id:"allow-tasks-to-fail",children:"Allow tasks to fail"}),"\n",(0,t.jsx)(n.p,{children:'"Allow tasks to fail?" You ask yourself. "Doesn\'t that defeat the point of a task runner?" You\nquestion further. "You\'re not wrong!" We reply. These questions assume a perfect repository state,\nwhere all tasks either pass or fail, and there\'s no middle ground. In reality, very rarely is that\ntrue, and we want to support those stuck in the middle, such as:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In a heavy migration and it's known that a task is currently broken."}),"\n",(0,t.jsx)(n.li,{children:"The task is flaky but you've been unable to find the root cause."}),"\n",(0,t.jsx)(n.li,{children:"Upstream dependencies have published a backwards incompatible change, and you're waiting on a fix."}),"\n",(0,t.jsx)(n.li,{children:"And of course, in the middle of adopting moon!"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For situations where a task consistently or sometimes fails, but you don't want it to fail the\nentire pipeline (especially in CI), you can enable the new\n",(0,t.jsxs)(n.a,{href:"/docs/config/project#allowfailure",children:[(0,t.jsx)(n.code,{children:"allowFailure"})," task option"]}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="moon.yml"',children:"tasks:\n  typecheck:\n    command: 'tsc --build'\n    options:\n      allowFailure: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When enabled, failing tasks will no longer bail ",(0,t.jsx)(n.a,{href:"/docs/commands/run",children:(0,t.jsx)(n.code,{children:"moon run"})})," early, nor will it\nexit ",(0,t.jsx)(n.a,{href:"/docs/commands/ci",children:(0,t.jsx)(n.code,{children:"moon ci"})})," with a non-zero exit code. However, we still built guard rails\naround this feature, as we don't want to encourage bad practices, and one of these guard rails is\nthat tasks that enable ",(0,t.jsx)(n.code,{children:"allowFailure"})," ",(0,t.jsx)(n.em,{children:"cannot"})," be depended on by other tasks, as we cannot guarantee\nthat it's side-effect free."]}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases/tag/v1.13.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added colors to command line ",(0,t.jsx)(n.code,{children:"--help"})," menus."]}),"\n",(0,t.jsxs)(n.li,{children:["Updated ",(0,t.jsx)(n.code,{children:"runner.archivableTargets"})," to support tag scoped targets."]}),"\n",(0,t.jsxs)(n.li,{children:["Updated ",(0,t.jsx)(n.code,{children:"moon query tasks --affected"})," to filter based on affected task, instead of affected\nproject."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},62295:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/v1.13-a119a59c6b1d80abaf4f3855114d1b48.png"},71670:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>i});var t=o(27378);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);