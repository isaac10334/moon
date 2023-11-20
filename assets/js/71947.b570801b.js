"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71947],{55228:(e,t,s)=>{s.d(t,{Z:()=>p});s(27378);var a=s(37140),r=s(64654),l=s(58357),n=s(81884),i=s(99213),o=s(14299);const c={sidebar:"sidebar_CLW8",sidebarItemTitle:"sidebarItemTitle_DQfJ",sidebarItemList:"sidebarItemList_rvuc",sidebarItem:"sidebarItem__RMN",sidebarItemLink:"sidebarItemLink_Ony9",sidebarItemLinkActive:"sidebarItemLinkActive_MJ75"};var m=s(24246);function d(e){let{sidebar:t}=e;const s=(0,o.c)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,a.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,a.Z)(c.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,m.jsx)("ul",{className:(0,a.Z)(c.sidebarItemList,"clean-list"),children:s.map((e=>(0,m.jsx)("li",{className:c.sidebarItem,children:(0,m.jsx)(n.default,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var u=s(63471);function h(e){let{sidebar:t}=e;const s=(0,o.c)(t.items);return(0,m.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,m.jsx)("li",{className:"menu__list-item",children:(0,m.jsx)(n.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function g(e){return(0,m.jsx)(u.Zo,{component:h,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,m.jsx)(g,{sidebar:t}):(0,m.jsx)(d,{sidebar:t}):null}function p(e){const{sidebar:t,toc:s,children:l,...n}=e,i=t&&t.items.length>0;return(0,m.jsx)(r.Z,{...n,children:(0,m.jsx)("div",{className:"container margin-vert--lg",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)(x,{sidebar:t}),(0,m.jsx)("main",{className:(0,a.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:l}),s&&(0,m.jsx)("div",{className:"col col--2",children:s})]})})})}},25532:(e,t,s)=>{s.d(t,{Z:()=>y});s(27378);var a=s(37140),r=s(70412),l=s(98948),n=s(24246);function i(e){let{children:t,className:s}=e;const{frontMatter:a,assets:i,metadata:{description:o}}=(0,r.C)(),{withBaseUrl:c}=(0,l.C)(),m=i.image??a.image,d=a.keywords??[];return(0,n.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,n.jsx)("meta",{itemProp:"description",content:o}),m&&(0,n.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,n.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var o=s(81884);const c={title:"title_Kdtz"};function m(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,r.C)(),{permalink:i,title:m}=s,d=l?"h1":"h2";return(0,n.jsx)(d,{className:(0,a.Z)(c.title,t),itemProp:"headline",children:l?m:(0,n.jsx)(o.default,{itemProp:"url",to:i,children:m})})}var d=s(99213),u=s(40689);const h={container:"container_iZB2"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,u.c)();return t=>{const s=Math.ceil(t);return e(s,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,n.jsx)(n.Fragment,{children:s(t)})}function x(e){let{date:t,formattedDate:s}=e;return(0,n.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function p(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:s}=(0,r.C)(),{date:l,formattedDate:i,readingTime:o}=s;return(0,n.jsxs)("div",{className:(0,a.Z)(h.container,"margin-vert--md",t),children:[(0,n.jsx)(x,{date:l,formattedDate:i}),void 0!==o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),(0,n.jsx)(g,{readingTime:o})]})]})}function j(e){return e.href?(0,n.jsx)(o.default,{...e}):(0,n.jsx)(n.Fragment,{children:e.children})}function b(e){let{author:t,className:s}=e;const{name:r,title:l,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,n.jsxs)("div",{className:(0,a.Z)("avatar margin-bottom--sm",s),children:[o&&(0,n.jsx)(j,{href:m,className:"avatar__photo-link",children:(0,n.jsx)("img",{className:"avatar__photo",src:o,alt:r,itemProp:"image"})}),r&&(0,n.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,n.jsx)("div",{className:"avatar__name",children:(0,n.jsx)(j,{href:m,itemProp:"url",children:(0,n.jsx)("span",{itemProp:"name",children:r})})}),l&&(0,n.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:l})]})]})}const v={authorCol:"authorCol_v1VX",imageOnlyAuthorRow:"imageOnlyAuthorRow_RxZ1",imageOnlyAuthorCol:"imageOnlyAuthorCol_iWtj"};function N(e){let{className:t}=e;const{metadata:{authors:s},assets:l}=(0,r.C)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,n.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,n.jsx)("div",{className:(0,a.Z)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,n.jsx)(b,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function P(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(m,{}),(0,n.jsx)(f,{}),(0,n.jsx)(N,{})]})}var _=s(51721),k=s(40450);function Z(e){let{children:t,className:s}=e;const{isBlogPostPage:l}=(0,r.C)();return(0,n.jsx)("div",{id:l?_.blogPostContainerID:void 0,className:(0,a.Z)("markdown",s),itemProp:"articleBody",children:(0,n.jsx)(k.default,{children:t})})}var C=s(34565),w=s(28349);function T(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function I(e){const{blogPostTitle:t,...s}=e;return(0,n.jsx)(o.default,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,n.jsx)(T,{})})}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_JgJa"};function L(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:s,title:l,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||i?(0,n.jsxs)("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull),children:[m&&(0,n.jsx)("div",{className:(0,a.Z)("col",{"col--9":c}),children:(0,n.jsx)(w.Z,{tags:s})}),t&&i&&(0,n.jsx)("div",{className:"col margin-top--sm",children:(0,n.jsx)(C.Z,{editUrl:i})}),c&&(0,n.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":m}),children:(0,n.jsx)(I,{blogPostTitle:l,to:e.permalink})})]}):null}function y(e){let{children:t,className:s}=e;const l=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(i,{className:(0,a.Z)(l,s),children:[(0,n.jsx)(P,{}),(0,n.jsx)(Z,{children:t}),(0,n.jsx)(L,{})]})}},34565:(e,t,s)=>{s.d(t,{Z:()=>m});s(27378);var a=s(99213),r=s(75484),l=s(81884),n=s(37140);const i={iconEdit:"iconEdit_bHB7"};var o=s(24246);function c(e){let{className:t,...s}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(i.iconEdit,t),"aria-hidden":"true",...s,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,o.jsxs)(l.default,{to:t,className:r.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},40450:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});s(27378);var a=s(71670),r=s(63511),l=s(24246);function n(e){let{children:t}=e;return(0,l.jsx)(a.Z,{components:r.default,children:t})}},51478:(e,t,s)=>{s.d(t,{Z:()=>i});s(27378);var a=s(37140),r=s(81884);const l={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};var n=s(24246);function i(e){let{permalink:t,label:s,count:i}=e;return(0,n.jsxs)(r.default,{href:t,className:(0,a.Z)(l.tag,i?l.tagWithCount:l.tagRegular),children:[s,i&&(0,n.jsx)("span",{children:i})]})}},28349:(e,t,s)=>{s.d(t,{Z:()=>o});s(27378);var a=s(37140),r=s(99213),l=s(51478);const n={tags:"tags_Ow0B",tag:"tag_DFxh"};var i=s(24246);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,a.Z)(n.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,i.jsx)("li",{className:n.tag,children:(0,i.jsx)(l.Z,{label:t,permalink:s})},s)}))})]})}},70412:(e,t,s)=>{s.d(t,{C:()=>o,n:()=>i});var a=s(27378),r=s(41763),l=s(24246);const n=a.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:r=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:r});return(0,l.jsx)(n.Provider,{value:i,children:t})}function o(){const e=(0,a.useContext)(n);if(null===e)throw new r.i6("BlogPostProvider");return e}},14299:(e,t,s)=>{s.d(t,{c:()=>n});var a=s(27378),r=s(3620),l=s(8862);function n(e){const{pathname:t}=(0,r.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,l.Mg)(e.permalink,t))}(e,t)))),[e,t])}},40689:(e,t,s)=>{s.d(t,{c:()=>c});var a=s(27378),r=s(50353);const l=["zero","one","two","few","many","other"];function n(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:n(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.default)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:n(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=s.select(t),l=s.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(s,t,e)}}}}]);