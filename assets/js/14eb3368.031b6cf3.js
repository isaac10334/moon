"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9817,22108],{80777:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});n(27378);var s=n(1123),i=n(45161),a=n(98948),r=n(37140),o=n(81884),l=n(45626),c=n(99213),d=n(1999);const u={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};var h=n(24246);function m(e){let{href:t,children:n}=e;return(0,h.jsx)(o.default,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function x(e){let{href:t,icon:n,title:s,description:i}=e;return(0,h.jsxs)(m,{href:t,children:[(0,h.jsxs)(d.default,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,h.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function g(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,h.jsx)(x,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(t.docId??void 0);return(0,h.jsx)(x,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(p,{item:t});case"category":return(0,h.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,i.jA)();return(0,h.jsx)(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(j,{...e});const s=(0,i.MN)(t);return(0,h.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(v,{item:e})},t)))})}var b=n(38274),N=n(84506),w=n(25069),Z=n(78372);const y={generatedIndexPage:"generatedIndexPage_cf3v",list:"list_qoTc",title:"title_Ww3I"};function L(e){let{categoryGeneratedIndex:t}=e;return(0,h.jsx)(s.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.Z)(t.image)})}function T(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return(0,h.jsxs)("div",{className:y.generatedIndexPage,children:[(0,h.jsx)(N.Z,{}),(0,h.jsx)(Z.default,{}),(0,h.jsx)(w.default,{}),(0,h.jsxs)("header",{children:[(0,h.jsx)(d.default,{as:"h1",className:y.title,children:t.title}),t.description&&(0,h.jsx)("p",{children:t.description})]}),(0,h.jsx)("article",{className:"margin-top--lg",children:(0,h.jsx)(f,{items:n.items,className:y.list})}),(0,h.jsx)("footer",{className:"margin-top--lg",children:(0,h.jsx)(b.default,{previous:t.navigation.previous,next:t.navigation.next})})]})}function k(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(L,{...e}),(0,h.jsx)(T,{...e})]})}},38274:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});n(27378);var s=n(99213),i=n(44022),a=n(24246);function r(e){const{previous:t,next:n}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(i.Z,{...t,subLabel:(0,a.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,a.jsx)(i.Z,{...n,subLabel:(0,a.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},25069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(27378);var s=n(37140),i=n(99213),a=n(75484),r=n(25611),o=n(24246);function l(e){let{className:t}=e;const n=(0,r.E)();return n.badge?(0,o.jsx)("span",{className:(0,s.Z)(t,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},84506:(e,t,n)=>{n.d(t,{Z:()=>p});n(27378);var s=n(37140),i=n(50353),a=n(81884),r=n(99213),o=n(62935),l=n(75484),c=n(24453),d=n(25611),u=n(24246);const h={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){const t=h[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function x(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(a.default,{to:n,onClick:s,children:(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function g(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,i.default)(),{pluginId:r}=(0,o.useActivePlugin)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(r),{latestDocSuggestion:h,latestVersionSuggestion:g}=(0,o.useDocVersionSuggestions)(r),p=h??(v=g).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,s.Z)(t,l.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(m,{siteTitle:a,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(x,{versionLabel:g.label,to:p.path,onClick:()=>d(g.name)})})]})}function p(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(g,{className:t,versionMetadata:n}):null}},83828:(e,t,n)=>{n.d(t,{ZP:()=>d,gE:()=>c});var s=n(27378),i=n(3620),a=n(24246);const r=["/docs/install","/docs/setup-workspace","/docs/setup-toolchain","/docs/create-project","/docs/create-task","/docs/run-task","/docs/migrate-to-moon"];function o(){return"undefined"!=typeof window&&"localStorage"in window}function l(){return(o()?localStorage.getItem("moonrepo.language"):null)??"node"}function c(){const[e,t]=(0,s.useState)(l());return(0,s.useEffect)((()=>{const e=e=>{t(e.detail)};return window.addEventListener("onMoonrepoChangeLanguage",e),()=>{window.removeEventListener("onMoonrepoChangeLanguage",e)}})),e}function d(){const[e,t]=(0,s.useState)(l()),n=(0,i.TH)(),c=(0,s.useCallback)((e=>{let{target:n}=e;const s=n.value;if(t(s),o())try{localStorage.setItem("moonrepo.language",s)}catch{}window.dispatchEvent(new CustomEvent("onMoonrepoChangeLanguage",{bubbles:!0,detail:s}))}),[]);return r.some((e=>n.pathname.startsWith(e)))?(0,a.jsxs)("select",{value:e,onChange:c,className:"outline-none min-w-0 bg-white border border-solid border-gray-400 dark:border-transparent rounded-md p-0.5 text-sm text-gray-800 placeholder-gray-600 h-full font-sans",children:[(0,a.jsx)("option",{value:"bun",children:"Bun"}),(0,a.jsx)("option",{value:"deno",children:"Deno"}),(0,a.jsx)("option",{value:"go",children:"Go"}),(0,a.jsx)("option",{value:"node",children:"Node.js"}),(0,a.jsx)("option",{value:"php",children:"PHP"}),(0,a.jsx)("option",{value:"python",children:"Python"}),(0,a.jsx)("option",{value:"ruby",children:"Ruby"}),(0,a.jsx)("option",{value:"rust",children:"Rust"})]}):null}},78372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var s=n(45161),i=n(8862),a=n(98948),r=n(83469),o=n(83828),l=n(31792),c=n(90728),d=n(30658),u=n(24246);function h(e){let{active:t,children:n,href:s}=e;return s?(0,u.jsx)(c.Z,{"aria-current":t?"page":void 0,href:s,itemProp:"item",size:"sm",variant:"muted",weight:"medium",children:(0,u.jsx)("span",{itemProp:"name",children:n})}):(0,u.jsx)(d.ZP,{"aria-current":t?"page":void 0,as:"span",itemProp:"item name",size:"sm",variant:"muted",weight:"medium",className:"m-0",children:n})}function m(e){let{children:t,index:n}=e;return(0,u.jsx)("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",children:(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)(l.Z,{icon:r.yOZ,className:"flex-shrink-0 text-gray-600 mr-2","aria-hidden":"true"}),t,(0,u.jsx)("meta",{itemProp:"position",content:String(n+1)})]})})}function x(){const e=(0,a.Z)("/");return(0,u.jsx)("li",{children:(0,u.jsxs)(c.Z,{href:e,variant:"muted",children:[(0,u.jsx)(l.Z,{icon:r.yGT,className:"flex-shrink-0","aria-hidden":"true"}),(0,u.jsx)("span",{className:"sr-only",children:"Home"})]})})}function g(){const e=(0,s.s1)(),t=(0,i.Ns)();return e?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:"float-right ml-2",children:(0,u.jsx)(o.ZP,{})}),(0,u.jsx)("nav",{className:"flex pl-1 mb-2","aria-label":"Breadcrumb",children:(0,u.jsxs)("ol",{role:"list",className:"list-none p-0 m-0 flex items-center space-x-2",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,u.jsx)(x,{}),e.map(((t,n)=>(0,u.jsx)(m,{index:n,children:(0,u.jsx)(h,{href:n<e.length?t.href:void 0,active:n===e.length-1,children:t.label})},n)))]})})]}):null}},44022:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(40624),i=n(83469),a=n(31792),r=n(90728),o=n(24246);function l(e){let{permalink:t,title:n,isNext:l}=e;return(0,o.jsx)("div",{className:(0,s.Z)("flex-1",l?"text-right":"text-left"),children:(0,o.jsxs)(r.Z,{weight:"bold",to:t,children:[!l&&(0,o.jsx)(a.Z,{className:"mr-1 icon-previous",icon:i.A35}),n,l&&(0,o.jsx)(a.Z,{className:"ml-1 icon-next",icon:i._tD})]})})}}}]);