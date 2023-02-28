"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9821,3893,9514],{72214:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_e});var a=n(27378),l=n(38944),r=n(1123),o=n(75484),i=n(13149),c=n(45161),s=n(25611),d=n(52095),m=n(8199),u=n(99213),b=n(69169);const p="backToTopButton_iEvu",h="backToTopButtonShow_DO8w";function f(){const{shown:e,scrollToTop:t}=(0,b.a)({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,p,e&&h),type:"button",onClick:t})}var E=n(35331),g=n(58357),v=n(20624),_=n(10898),k=n(25773);function C(e){return a.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_oTwn",S="collapseSidebarButtonIcon_pMEX";function y(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(C,{className:S}))}var N=n(10),Z=n(83457),x=n(36666),T=n(41763),w=n(80376),A=n(8862),L=n(81884),M=n(76457);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function B(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,v.L)(),E=function(e){const t=(0,M.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),g=(0,c._F)(t,r),_=(0,A.Mg)(h,r),{collapsed:C,setCollapsed:I}=(0,w.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:y}=(0,x.f)(),N=function(e){void 0===e&&(e=!C),y(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:g,collapsed:C,updateCollapsed:N}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&f&&I(!0)}),[b,S,s,I,f]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(L.default,(0,k.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?N(!1):(e.preventDefault(),N())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!C:void 0,href:b?E??"#":E},d),u),h&&b&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),N()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(Y,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:r,level:i+1})))}var F=n(45626),H=n(6125);const O="menuExternalLink_BiEj";function D(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,r),f=(0,F.Z)(m);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(L.default,(0,k.Z)({className:(0,l.Z)("menu__link",!f&&O,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},f&&{onClick:n?()=>n(t):void 0},d),u,!f&&a.createElement(H.Z,null)))}const R="menuHtmlItem_OniL";function j(e){let{item:t,level:n,index:r}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[R,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(B,(0,k.Z)({item:t},n));case"html":return a.createElement(j,(0,k.Z)({item:t},n));default:return a.createElement(D,(0,k.Z)({item:t},n))}}function V(e){let{items:t,...n}=e;return a.createElement(x.D,null,t.map(((e,t)=>a.createElement(W,(0,k.Z)({key:t,item:e,index:t},n)))))}const Y=(0,a.memo)(V),z="menu_jmj1",U="menuWithAnnouncementBar_YufC";function G(e){let{path:t,sidebar:n,className:r}=e;const i=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,Z.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",z,i&&U,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(Y,{items:n,activePath:t,level:1})))}const K="sidebar_CUen",J="sidebarWithHideableNavbar_w4KB",q="sidebarHidden_k6VE",Q="sidebarLogo_CYvI";function X(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,v.L)();return a.createElement("div",{className:(0,l.Z)(K,i&&J,o&&q)},i&&a.createElement(_.Z,{tabIndex:-1,className:Q}),a.createElement(G,{path:t,sidebar:n}),c&&a.createElement(y,{onClick:r}))}const $=a.memo(X);var ee=n(63471),te=n(85536);const ne=e=>{let{sidebar:t,path:n}=e;const r=(0,te.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(Y,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ae(e){return a.createElement(ee.Zo,{component:ne,props:e})}const le=a.memo(ae);function re(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),l&&a.createElement(le,e))}const oe="expandButton_YOoA",ie="expandButtonIcon_GZLG";function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:oe,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:ie}))}const se={docSidebarContainer:"docSidebarContainer_y0RQ",docSidebarContainerHidden:"docSidebarContainerHidden_uArb",sidebarViewport:"sidebarViewport_EJ1r"};function de(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function me(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:i}=(0,E.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),r((e=>!e))}),[r,c]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,se.docSidebarContainer,n&&se.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(se.docSidebarContainer)&&n&&s(!0)}},a.createElement(de,null,a.createElement("div",{className:(0,l.Z)(se.sidebarViewport,c&&se.sidebarViewportHidden)},a.createElement(re,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(ce,{toggleSidebar:d}))))}const ue={docMainContainer:"docMainContainer_sTIZ",docMainContainerEnhanced:"docMainContainerEnhanced_iSjt",docItemWrapperEnhanced:"docItemWrapperEnhanced_PxMR"};function be(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(ue.docMainContainer,(t||!r)&&ue.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,t&&ue.docItemWrapperEnhanced)},n))}const pe="docPage_KLoz",he="docsWrapper_ct1J";function fe(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:he},a.createElement(f,null),a.createElement("div",{className:pe},n&&a.createElement(me,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(be,{hiddenSidebarContainer:l},t)))}var Ee=n(53893),ge=n(60505);function ve(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ge.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function _e(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(Ee.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(ve,e),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(fe,null,i)))))}},53893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(27378),l=n(99213),r=n(1123),o=n(8199);function i(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},36666:(e,t,n)=>{n.d(t,{D:()=>i,f:()=>c});var a=n(27378),l=n(41763);const r=Symbol("EmptyContext"),o=a.createContext(r);function i(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(o.Provider,{value:r},t)}function c(){const e=(0,a.useContext)(o);if(e===r)throw new l.i6("DocSidebarItemsExpandedStateProvider");return e}},69169:(e,t,n)=>{n.d(t,{a:()=>o});var a=n(27378),l=n(83457),r=n(24993);function o(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:c,cancelScroll:s}=(0,l.Ct)();return(0,l.RF)(((e,n)=>{let{scrollY:a}=e;const l=n?.scrollY;l&&(i.current?i.current=!1:a>=l?(s(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,r.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>c(0)}}},99746:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=n(27378).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},26723:(e,t,n)=>{const a=["options","packages"];function l(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n(54675),n(83335);const r=n(27378),o=n(72214),i=n(99746),c=e=>e&&e.__esModule?e:{default:e},s=c(r),d=c(o);function m(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function u(e,t,n){return Object.entries(e).forEach((a=>{let[l,r]=a;if("id"===l){const a="type"in e;(!a||a&&"reference"!==e.type)&&(t[Number(r)]=e,n&&(e.parentId=n.id))}else Array.isArray(r)?r.forEach((n=>{m(n)&&u(n,t,e)})):m(r)&&u(r,t,e)})),t}function b(e){const t={};return e.forEach((e=>{e.entryPoints.forEach((e=>{u(e.reflection,t)}))})),t}e.exports=function(e){let t=e.options,n=e.packages,o=l(e,a);const c=r.useMemo((()=>({options:t,reflections:b(n)})),[t,n]);return s.default.createElement(i.ApiDataContext.Provider,{value:c},s.default.createElement("div",{className:"apiPage"},s.default.createElement(d.default,o)))}},54675:(e,t,n)=>{n.r(t)},83335:(e,t,n)=>{n.r(t)}}]);