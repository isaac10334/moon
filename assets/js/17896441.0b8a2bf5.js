"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27918,22108],{74764:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});n(27378);var a=n(1123),s=n(89446),i=n(24246);function l(){const{metadata:e,frontMatter:t,assets:n}=(0,s.k)();return(0,i.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var o=n(37140),r=n(58357),d=n(38274);function c(){const{metadata:e}=(0,s.k)();return(0,i.jsx)(d.default,{previous:e.previous,next:e.next})}var u=n(84506),m=n(25069),h=n(75484),x=n(99213);function p(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,i.jsx)(x.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function v(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(x.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:a}=e;return(0,i.jsxs)("span",{className:h.k.common.lastUpdated,children:[(0,i.jsx)(x.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,i.jsx)(p,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,i.jsx)(v,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var f=n(34565),j=n(28349);const b={lastUpdated:"lastUpdated_pbO5"};function L(e){return(0,i.jsx)("div",{className:(0,o.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(j.Z,{...e})})})}function N(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s}=e;return(0,i.jsxs)("div",{className:(0,o.Z)(h.k.docs.docFooterEditMetaRow,"row"),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(f.Z,{editUrl:t})}),(0,i.jsx)("div",{className:(0,o.Z)("col",b.lastUpdated),children:(n||a)&&(0,i.jsx)(g,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function C(){const{metadata:e}=(0,s.k)(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:l,tags:r}=e,d=r.length>0,c=!!(t||n||l);return d||c?(0,i.jsxs)("footer",{className:(0,o.Z)(h.k.docs.docFooter,"docusaurus-mt-lg"),children:[d&&(0,i.jsx)(L,{tags:r}),c&&(0,i.jsx)(N,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:a})]}):null}var k=n(72218);const Z={tocMobile:"tocMobile_Ojys"};function w(){const{toc:e,frontMatter:t}=(0,s.k)();return(0,i.jsx)(k.default,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,o.Z)(h.k.docs.docTocMobile,Z.tocMobile)})}var y=n(17061);function T(){const{toc:e,frontMatter:t}=(0,s.k)();return(0,i.jsx)(y.default,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var _=n(1999),U=n(40450);function H(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,s.k)();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,o.Z)(h.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(_.default,{as:"h1",children:n})}),(0,i.jsx)(U.default,{children:t})]})}var E=n(78372),M=n(47805);const A={docItemContainer:"docItemContainer_tjFy",docItemCol:"docItemCol_Qr34"};function B(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=(0,s.k)(),n=(0,r.i)(),a=e.hide_table_of_contents,l=!a&&t.length>0;return{hidden:a,mobile:l?(0,i.jsx)(w,{}):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(T,{})}}(),{metadata:{unlisted:a}}=(0,s.k)();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,o.Z)("col",!n.hidden&&A.docItemCol),children:[a&&(0,i.jsx)(M.Z,{}),(0,i.jsx)(u.Z,{}),(0,i.jsxs)("div",{className:A.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(E.default,{}),(0,i.jsx)(m.default,{}),n.mobile,(0,i.jsx)(H,{children:t}),(0,i.jsx)(C,{})]}),(0,i.jsx)(c,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function I(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(s.b,{content:e.content,children:(0,i.jsxs)(a.FG,{className:t,children:[(0,i.jsx)(l,{}),(0,i.jsx)(B,{children:(0,i.jsx)(n,{})})]})})}},38274:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(27378);var a=n(99213),s=n(44022),i=n(24246);function l(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(s.Z,{...t,subLabel:(0,i.jsx)(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(s.Z,{...n,subLabel:(0,i.jsx)(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},25069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});n(27378);var a=n(37140),s=n(99213),i=n(75484),l=n(25611),o=n(24246);function r(e){let{className:t}=e;const n=(0,l.E)();return n.badge?(0,o.jsx)("span",{className:(0,a.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},84506:(e,t,n)=>{n.d(t,{Z:()=>v});n(27378);var a=n(37140),s=n(50353),i=n(81884),l=n(99213),o=n(62935),r=n(75484),d=n(24453),c=n(25611),u=n(24246);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function x(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.default,{to:n,onClick:a,children:(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,s.default)(),{pluginId:l}=(0,o.useActivePlugin)({failfast:!0}),{savePreferredVersionName:c}=(0,d.J)(l),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,o.useDocVersionSuggestions)(l),v=m??(g=p).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,a.Z)(t,r.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(x,{versionLabel:p.label,to:v.path,onClick:()=>c(p.name)})})]})}function v(e){let{className:t}=e;const n=(0,c.E)();return n.banner?(0,u.jsx)(p,{className:t,versionMetadata:n}):null}},34565:(e,t,n)=>{n.d(t,{Z:()=>c});n(27378);var a=n(99213),s=n(75484),i=n(81884),l=n(37140);const o={iconEdit:"iconEdit_bHB7"};var r=n(24246);function d(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(o.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,r.jsxs)(i.default,{to:t,className:s.k.common.editThisPage,children:[(0,r.jsx)(d,{}),(0,r.jsx)(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},40450:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(27378);var a=n(71670),s=n(63511),i=n(24246);function l(e){let{children:t}=e;return(0,i.jsx)(a.Z,{components:s.default,children:t})}},17061:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});n(27378);var a=n(37140),s=n(17148);const i={tableOfContents:"tableOfContents_XG6w",docItemContainer:"docItemContainer_Tr6w"};var l=n(24246);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.Z,{...n,linkClassName:o,linkActiveClassName:r})})}},72218:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});n(27378);var a=n(37140),s=n(80376),i=n(17148),l=n(99213);const o={tocCollapsibleButton:"tocCollapsibleButton_iI2p",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_cHjC"};var r=n(24246);function d(e){let{collapsed:t,...n}=e;return(0,r.jsx)("button",{type:"button",...n,className:(0,a.Z)("clean-btn",o.tocCollapsibleButton,!t&&o.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(l.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const c={tocCollapsible:"tocCollapsible_wXna",tocCollapsibleContent:"tocCollapsibleContent_vea0",tocCollapsibleExpanded:"tocCollapsibleExpanded_BbRn"};function u(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:u,toggleCollapsed:m}=(0,s.u)({initialState:!0});return(0,r.jsxs)("div",{className:(0,a.Z)(c.tocCollapsible,!u&&c.tocCollapsibleExpanded,n),children:[(0,r.jsx)(d,{collapsed:u,onClick:m}),(0,r.jsx)(s.z,{lazy:!0,className:c.tocCollapsibleContent,collapsed:u,children:(0,r.jsx)(i.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})})]})}},17148:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),s=n(20624),i=n(86934),l=n(81344),o=n(81884),r=n(24246);function d(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,r.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(o.default,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,r.jsx)(d,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const c=a.memo(d);function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:u,maxHeadingLevel:m,...h}=e;const x=(0,s.L)(),p=u??x.tableOfContents.minHeadingLevel,v=m??x.tableOfContents.maxHeadingLevel,g=(0,i.b)({toc:t,minHeadingLevel:p,maxHeadingLevel:v}),f=(0,a.useMemo)((()=>{if(o&&d)return{linkClassName:o,linkActiveClassName:d,minHeadingLevel:p,maxHeadingLevel:v}}),[o,d,p,v]);return(0,l.S)(f),(0,r.jsx)(c,{toc:g,className:n,linkClassName:o,...h})}},51478:(e,t,n)=>{n.d(t,{Z:()=>o});n(27378);var a=n(37140),s=n(81884);const i={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};var l=n(24246);function o(e){let{permalink:t,label:n,count:o}=e;return(0,l.jsxs)(s.default,{href:t,className:(0,a.Z)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},28349:(e,t,n)=>{n.d(t,{Z:()=>r});n(27378);var a=n(37140),s=n(99213),i=n(51478);const l={tags:"tags_Ow0B",tag:"tag_DFxh"};var o=n(24246);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.Z)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.Z,{label:t,permalink:n})},n)}))})]})}},47805:(e,t,n)=>{n.d(t,{Z:()=>d});n(27378);var a=n(37140),s=n(25158),i=n(75484),l=n(52106),o=n(24246);function r(e){let{className:t}=e;return(0,o.jsx)(l.Z,{type:"caution",title:(0,o.jsx)(s.cI,{}),className:(0,a.Z)(t,i.k.common.unlistedBanner),children:(0,o.jsx)(s.eU,{})})}function d(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.T$,{}),(0,o.jsx)(r,{...e})]})}},89446:(e,t,n)=>{n.d(t,{b:()=>o,k:()=>r});var a=n(27378),s=n(41763),i=n(24246);const l=a.createContext(null);function o(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:s,children:t})}function r(){const e=(0,a.useContext)(l);if(null===e)throw new s.i6("DocProvider");return e}},81344:(e,t,n)=>{n.d(t,{S:()=>r});var a=n(27378),s=n(20624);function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>i(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function r(e){const t=(0,a.useRef)(void 0),n=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),d=l(r,{anchorTopOffset:n.current}),c=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===c)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}},86934:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>o});var a=n(27378);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function i(e){return(0,a.useMemo)((()=>s(e)),[e])}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:s(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}},25158:(e,t,n)=>{n.d(t,{T$:()=>r,cI:()=>l,eU:()=>o});n(27378);var a=n(99213),s=n(7092),i=n(24246);function l(){return(0,i.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,i.jsx)(s.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}},83828:(e,t,n)=>{n.d(t,{ZP:()=>c,gE:()=>d});var a=n(27378),s=n(3620),i=n(24246);const l=["/docs/install","/docs/setup-workspace","/docs/setup-toolchain","/docs/create-project","/docs/create-task","/docs/run-task","/docs/migrate-to-moon"];function o(){return"undefined"!=typeof window&&"localStorage"in window}function r(){return(o()?localStorage.getItem("moonrepo.language"):null)??"node"}function d(){const[e,t]=(0,a.useState)(r());return(0,a.useEffect)((()=>{const e=e=>{t(e.detail)};return window.addEventListener("onMoonrepoChangeLanguage",e),()=>{window.removeEventListener("onMoonrepoChangeLanguage",e)}})),e}function c(){const[e,t]=(0,a.useState)(r()),n=(0,s.TH)(),d=(0,a.useCallback)((e=>{let{target:n}=e;const a=n.value;if(t(a),o())try{localStorage.setItem("moonrepo.language",a)}catch{}window.dispatchEvent(new CustomEvent("onMoonrepoChangeLanguage",{bubbles:!0,detail:a}))}),[]);return l.some((e=>n.pathname.startsWith(e)))?(0,i.jsxs)("select",{value:e,onChange:d,className:"outline-none min-w-0 bg-white border border-solid border-gray-400 dark:border-transparent rounded-md p-0.5 text-sm text-gray-800 placeholder-gray-600 h-full font-sans",children:[(0,i.jsx)("option",{value:"bun",children:"Bun"}),(0,i.jsx)("option",{value:"deno",children:"Deno"}),(0,i.jsx)("option",{value:"go",children:"Go"}),(0,i.jsx)("option",{value:"node",children:"Node.js"}),(0,i.jsx)("option",{value:"php",children:"PHP"}),(0,i.jsx)("option",{value:"python",children:"Python"}),(0,i.jsx)("option",{value:"ruby",children:"Ruby"}),(0,i.jsx)("option",{value:"rust",children:"Rust"})]}):null}},78372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(45161),s=n(8862),i=n(98948),l=n(83469),o=n(83828),r=n(31792),d=n(90728),c=n(30658),u=n(24246);function m(e){let{active:t,children:n,href:a}=e;return a?(0,u.jsx)(d.Z,{"aria-current":t?"page":void 0,href:a,itemProp:"item",size:"sm",variant:"muted",weight:"medium",children:(0,u.jsx)("span",{itemProp:"name",children:n})}):(0,u.jsx)(c.ZP,{"aria-current":t?"page":void 0,as:"span",itemProp:"item name",size:"sm",variant:"muted",weight:"medium",className:"m-0",children:n})}function h(e){let{children:t,index:n}=e;return(0,u.jsx)("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",children:(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)(r.Z,{icon:l.yOZ,className:"flex-shrink-0 text-gray-600 mr-2","aria-hidden":"true"}),t,(0,u.jsx)("meta",{itemProp:"position",content:String(n+1)})]})})}function x(){const e=(0,i.Z)("/");return(0,u.jsx)("li",{children:(0,u.jsxs)(d.Z,{href:e,variant:"muted",children:[(0,u.jsx)(r.Z,{icon:l.yGT,className:"flex-shrink-0","aria-hidden":"true"}),(0,u.jsx)("span",{className:"sr-only",children:"Home"})]})})}function p(){const e=(0,a.s1)(),t=(0,s.Ns)();return e?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:"float-right ml-2",children:(0,u.jsx)(o.ZP,{})}),(0,u.jsx)("nav",{className:"flex pl-1 mb-2","aria-label":"Breadcrumb",children:(0,u.jsxs)("ol",{role:"list",className:"list-none p-0 m-0 flex items-center space-x-2",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,u.jsx)(x,{}),e.map(((t,n)=>(0,u.jsx)(h,{index:n,children:(0,u.jsx)(m,{href:n<e.length?t.href:void 0,active:n===e.length-1,children:t.label})},n)))]})})]}):null}},44022:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(40624),s=n(83469),i=n(31792),l=n(90728),o=n(24246);function r(e){let{permalink:t,title:n,isNext:r}=e;return(0,o.jsx)("div",{className:(0,a.Z)("flex-1",r?"text-right":"text-left"),children:(0,o.jsxs)(l.Z,{weight:"bold",to:t,children:[!r&&(0,o.jsx)(i.Z,{className:"mr-1 icon-previous",icon:s.A35}),n,r&&(0,o.jsx)(i.Z,{className:"ml-1 icon-next",icon:s._tD})]})})}}}]);