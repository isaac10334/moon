"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6432],{55228:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(27378),n=a(38944),r=a(8199),o=a(58357),s=a(81884),c=a(99213);const i="sidebar_CLW8",m="sidebarItemTitle_DQfJ",u="sidebarItemList_rvuc",d="sidebarItem__RMN",g="sidebarItemLink_Ony9",p="sidebarItemLinkActive_MJ75";function f(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(s.default,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var h=a(63471);function E(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(h.Zo,{component:E,props:e})}function v(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(f,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:o,...s}=e,c=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},25532:(e,t,a)=>{a.d(t,{Z:()=>x});var l=a(27378),n=a(38944),r=a(70412),o=a(98948);function s(e){let{children:t,className:a}=e;const{frontMatter:n,assets:s}=(0,r.C)(),{withBaseUrl:c}=(0,o.C)(),i=s.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&l.createElement("meta",{itemProp:"image",content:c(i,{absolute:!0})}),t)}var c=a(81884);const i="title_Kdtz";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(i,t),itemProp:"headline"},o?m:l.createElement(c.default,{itemProp:"url",to:s},m))}var u=a(99213),d=a(40689);const g="container_iZB2";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function f(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return l.createElement(l.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:s,readingTime:c}=a;return l.createElement("div",{className:(0,n.Z)(g,"margin-vert--md",t)},l.createElement(f,{date:o,formattedDate:s}),void 0!==c&&l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(p,{readingTime:c})))}function b(e){return e.href?l.createElement(c.default,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:c,email:i}=t,m=s||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},c&&l.createElement(b,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:c,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const N="authorCol_v1VX",P="imageOnlyAuthorRow_RxZ1",_="imageOnlyAuthorCol_iWtj";function k(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?P:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?_:N),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function Z(){return l.createElement("header",null,l.createElement(m,null),l.createElement(E,null),l.createElement(k,null))}var C=a(51721),w=a(40450);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return l.createElement("div",{id:o?C.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(w.default,null,t))}var y=a(34565),B=a(28349),M=a(25773);function F(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function I(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.default,(0,M.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(F,null))}const L="blogPostFooterDetailsFull_JgJa";function R(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:c}=e,i=!t&&c,m=a.length>0;return m||i||s?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&L)},m&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":i})},l.createElement(B.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.Z,{editUrl:s})),i&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},l.createElement(I,{blogPostTitle:o,to:e.permalink}))):null}function x(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,n.Z)(o,a)},l.createElement(Z,null),l.createElement(T,null,t),l.createElement(R,null))}},70412:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(27378),n=a(41763);const r=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},40689:(e,t,a)=>{a.d(t,{c:()=>i});var l=a(27378),n=a(50353);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function i(){const e=c();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);