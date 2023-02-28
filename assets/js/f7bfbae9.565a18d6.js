"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4404],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,u=d["".concat(s,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const r={slug:"v0.20",title:"moon v0.20 - Toolchain, caching, and hydration improvements",authors:["milesj"],tags:["hydration","toolchain","generator","runner"],image:"./img/v0.20.png"},i=void 0,l={permalink:"/blog/v0.20",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-11-29_v0.20.mdx",source:"@site/blog/2022-11-29_v0.20.mdx",title:"moon v0.20 - Toolchain, caching, and hydration improvements",description:"With this release, we've focused heavily on future proofing our toolchain and how it integrates with",date:"2022-11-29T00:00:00.000Z",formattedDate:"November 29, 2022",tags:[{label:"hydration",permalink:"/blog/tags/hydration"},{label:"toolchain",permalink:"/blog/tags/toolchain"},{label:"generator",permalink:"/blog/tags/generator"},{label:"runner",permalink:"/blog/tags/runner"}],readingTime:3.79,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"v0.20",title:"moon v0.20 - Toolchain, caching, and hydration improvements",authors:["milesj"],tags:["hydration","toolchain","generator","runner"],image:"./img/v0.20.png"},prevItem:{title:"moon v0.21 - Tiered language support with initial Go, PHP, Python, Ruby, and Rust",permalink:"/blog/v0.21"},nextItem:{title:"Integrating TypeScript in a monorepo",permalink:"/blog/typescript-monorepo"}},s={image:n(52424).Z,authorsImageUrls:[void 0]},p=[{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Moved toolchain settings",id:"moved-toolchain-settings",level:3},{value:"Moved project-level overrides",id:"moved-project-level-overrides",level:3},{value:"Future of the toolchain",id:"future-of-the-toolchain",level:2},{value:"Increased output hydration by 8-10x",id:"increased-output-hydration-by-8-10x",level:2},{value:"Cache any and all targets",id:"cache-any-and-all-targets",level:2},{value:"Path handling in generator templates",id:"path-handling-in-generator-templates",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this release, we've focused heavily on future proofing our toolchain and how it integrates with\nmoon. We've also landed a handful of quality of life improvements."),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,o.kt)("p",null,"To start, we have a few breaking changes this release to be aware of!"),(0,o.kt)("h3",{id:"moved-toolchain-settings"},"Moved toolchain settings"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml"))," config file was getting rather bloated and\ncomplicated, as it contained the projects list, settings for each toolchain language, and settings\nfor each supported service (runner, generator, etc). Furthermore, this file will keep getting larger\nwith each new language and service we support."),(0,o.kt)("p",null,"To future proof moon, and to land as many breaking changes before an official v1, we've decided to\nmove toolchain specific settings into a new file, ",(0,o.kt)("a",{parentName:"p",href:"../docs/config/toolchain"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),".\nThis new file will house all language and dependency manager specific settings."),(0,o.kt)("p",null,"To migrate, move the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," settings from ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/workspace.yml")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},".moon/toolchain.yml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"node:\n  # ...\n\ntypescript:\n  # ...\n")),(0,o.kt)("h3",{id:"moved-project-level-overrides"},"Moved project-level overrides"),(0,o.kt)("p",null,"Continuing with the changes above, we've also moved the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace.node")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace.typescript"),"\nfrom ",(0,o.kt)("a",{parentName:"p",href:"../docs/config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml"))," into a new parent field, ",(0,o.kt)("inlineCode",{parentName:"p"},"toolchain"),". We think this makes\nmore sense."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"# Before\nworkspace:\n  node:\n    version: '...'\n\n# After\ntoolchain:\n  node:\n    version: '...'\n")),(0,o.kt)("h2",{id:"future-of-the-toolchain"},"Future of the toolchain"),(0,o.kt)("p",null,"We're really proud of our toolchain, as it avoids an array problems that developers deal with on a\nday to day basis, primarily around running tasks using the wrong version of Node.js or their chosen\npackage manager. While we're in the process of supporting additional languages, starting with\n",(0,o.kt)("a",{parentName:"p",href:"https://deno.land/"},"Deno"),', we had an idea... Since this is basically a better "version manager for\ntools", why not extract this out into something else?'),(0,o.kt)("p",null,"And that's what we plan to do! Before we do so, we've had to make some architectural changes, many\nof which have landed in this release. During this process, we were able to implement an even better\ntoolchain, polish many of the edge cases, and improve performance! Stay tuned for more information\non this new tool!"),(0,o.kt)("h2",{id:"increased-output-hydration-by-8-10x"},"Increased output hydration by 8-10x"),(0,o.kt)("p",null,"In moon, hydration is the concept of unpacking an existing hashed artifact into a\n",(0,o.kt)("a",{parentName:"p",href:"../docs/config/project#outputs"},"task's outputs")," during a cache hit. In our previous implementation,\nwe would delete all existing outputs before unpacking the archive to ensure a clean slate and to\navoid stale files. While this worked, it wasn't the most performant, taking about 280ms for 1,000\nfiles (which is still reasonably fast!)."),(0,o.kt)("p",null,"In our new implementation, we now utilize a smart file tree diffing algorithm that will only unpack\nfiles ",(0,o.kt)("em",{parentName:"p"},"with different content"),", and will automatically remove stale files in the process. This has\nresulted in a 10x performance increase, taking about 30ms! Multiply this by many projects, the\nresults should be very apparent."),(0,o.kt)("p",null,"We hope you enjoy this improvement, as it's the first of many to come!"),(0,o.kt)("h2",{id:"cache-any-and-all-targets"},"Cache any and all targets"),(0,o.kt)("p",null,"By default, all ",(0,o.kt)("a",{parentName:"p",href:"../docs/concepts/target"},"targets")," that produce outputs are cached and archived. For\ntargets that ",(0,o.kt)("em",{parentName:"p"},"do not")," produce outputs, like testing, linting, and typechecking, these are not\ncached. This will result in slower CI times as they are continuously ran, even if nothing has\nchanged. However with our new ",(0,o.kt)("a",{parentName:"p",href:"../docs/guides/remote-cache"},"remote caching")," layer, we can skip these\nfrom running entirely!"),(0,o.kt)("p",null,"To achieve this, we've added a new setting to ",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),"\ncalled ",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace#archivabletargets"},(0,o.kt)("inlineCode",{parentName:"a"},"runner.archivableTargets")),". This setting\naccepts a list of targets that should be archived, regardless of whether or not they produce\noutputs."),(0,o.kt)("p",null,"For example, if we want to cache and archive testing, linting, and typechecking, we can define the\nfollowing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"runner:\n  archivableTargets:\n    - ':lint'\n    - ':test'\n    - ':typecheck'\n")),(0,o.kt)("h2",{id:"path-handling-in-generator-templates"},"Path handling in generator templates"),(0,o.kt)("p",null,"Our code generation is powered by ",(0,o.kt)("a",{parentName:"p",href:"https://tera.netlify.app/docs/#built-ins"},"Tera"),", a templating\nengine with a ton of built-in utilities. However, it does not provide utilities for file paths, and\nas such, we now provide ",(0,o.kt)("inlineCode",{parentName:"p"},"path_join")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"path_relative")," filters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-twig"},"{{ some_path | path_relative(from = workspace_root) }}\n")),(0,o.kt)("p",null,"We also now inject variables for the working directory, destination, and workspace root. This will\nhelp with custom paths, especially within frontmatter!\n",(0,o.kt)("a",{parentName:"p",href:"../docs/guides/codegen#variables"},"View the codegen docs for more information"),"."),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("p",null,"View the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.20.0"},"official release")," for a\nfull list of changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"vcs.remoteCandidates")," to ",(0,o.kt)("inlineCode",{parentName:"li"},".moon/workspace.yml")," to customize the remotes for git to query\nagainst."),(0,o.kt)("li",{parentName:"ul"},"Added support for ",(0,o.kt)("inlineCode",{parentName:"li"},"moduleSuffixes")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"moduleDetection")," in TypeScript ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," compiler\noptions."),(0,o.kt)("li",{parentName:"ul"},"YAML files will now respect the closest ",(0,o.kt)("inlineCode",{parentName:"li"},".editorconfig")," file."),(0,o.kt)("li",{parentName:"ul"},"Refactored terminal output for bette readability.")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Expect the following in the v0.21 release!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An interactive dependency and project graph visualizer."),(0,o.kt)("li",{parentName:"ul"},"A more performant project graph."),(0,o.kt)("li",{parentName:"ul"},"More quality of life improvements for affected files.")))}h.isMDXComponent=!0},52424:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v0.20-2a89b9d56c8a682f8427bd0138afb959.png"}}]);