"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13751],{84889:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});a(27378);var s=a(37140),l=a(1123),r=a(75484),n=a(75846),c=a(34672),i=a(60505),o=a(1999),g=a(24246);function u(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.d,{title:e}),(0,g.jsx)(i.Z,{tag:"doc_tags_list"})]})}function d(t){let{tags:e,title:a}=t;return(0,g.jsx)(l.FG,{className:(0,s.Z)(r.k.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.default,{as:"h1",children:a}),(0,g.jsx)(c.Z,{tags:e})]})})})})}function h(t){const e=(0,n.M)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...t,title:e}),(0,g.jsx)(d,{...t,title:e})]})}},51478:(t,e,a)=>{a.d(e,{Z:()=>c});a(27378);var s=a(37140),l=a(81884);const r={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};var n=a(24246);function c(t){let{permalink:e,label:a,count:c}=t;return(0,n.jsxs)(l.default,{href:e,className:(0,s.Z)(r.tag,c?r.tagWithCount:r.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}},34672:(t,e,a)=>{a.d(e,{Z:()=>o});a(27378);var s=a(75846),l=a(51478),r=a(1999);const n={tag:"tag_FHL6"};var c=a(24246);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(r.default,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(l.Z,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const a=(0,s.P)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},75846:(t,e,a)=>{a.d(e,{M:()=>l,P:()=>r});var s=a(99213);const l=()=>(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);