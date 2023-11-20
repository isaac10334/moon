"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48610],{20013:(e,t,n)=>{n.d(t,{Z:()=>l});n(27378);var s=n(99213),a=n(44022),i=n(24246);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.Z,{permalink:n,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),l&&(0,i.jsx)(a.Z,{permalink:l,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},2134:(e,t,n)=>{n.d(t,{Z:()=>l});n(27378);var s=n(70412),a=n(25532),i=n(24246);function l(e){let{items:t,component:n=a.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.n,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},41071:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(27378);var s=n(37140),a=n(99213),i=n(40689),l=n(1123),r=n(75484),o=n(81884),c=n(55228),d=n(20013),g=n(60505),u=n(2134),h=n(47805),p=n(1999),m=n(24246);function x(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.d,{title:n}),(0,m.jsx)(g.Z,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const l=x(t);return(0,m.jsxs)(c.Z,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(h.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.default,{as:"h1",children:l}),(0,m.jsx)(o.default,{href:t.allTagsPath,children:(0,m.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.Z,{items:n}),(0,m.jsx)(d.Z,{metadata:i})]})}function f(e){return(0,m.jsxs)(l.FG,{className:(0,s.Z)(r.k.wrapper.blogPages,r.k.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(b,{...e})]})}},47805:(e,t,n)=>{n.d(t,{Z:()=>c});n(27378);var s=n(37140),a=n(25158),i=n(75484),l=n(52106),r=n(24246);function o(e){let{className:t}=e;return(0,r.jsx)(l.Z,{type:"caution",title:(0,r.jsx)(a.cI,{}),className:(0,s.Z)(t,i.k.common.unlistedBanner),children:(0,r.jsx)(a.eU,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.T$,{}),(0,r.jsx)(o,{...e})]})}},25158:(e,t,n)=>{n.d(t,{T$:()=>o,cI:()=>l,eU:()=>r});n(27378);var s=n(99213),a=n(7092),i=n(24246);function l(){return(0,i.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,i.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(a.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}},44022:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(40624),a=n(83469),i=n(31792),l=n(90728),r=n(24246);function o(e){let{permalink:t,title:n,isNext:o}=e;return(0,r.jsx)("div",{className:(0,s.Z)("flex-1",o?"text-right":"text-left"),children:(0,r.jsxs)(l.Z,{weight:"bold",to:t,children:[!o&&(0,r.jsx)(i.Z,{className:"mr-1 icon-previous",icon:a.A35}),n,o&&(0,r.jsx)(i.Z,{className:"ml-1 icon-next",icon:a._tD})]})})}}}]);