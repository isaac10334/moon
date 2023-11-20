"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12949],{59776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(24246),a=r(71670);r(33337),r(39798);const o={slug:"v0.15",title:"moon v0.15 - Enhanced Docker support and 1,000 stars!",authors:["milesj"],tags:["generator","docker"],image:"./img/v0.15.png"},s=void 0,l={permalink:"/blog/v0.15",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-26_v0.15.mdx",source:"@site/blog/2022-09-26_v0.15.mdx",title:"moon v0.15 - Enhanced Docker support and 1,000 stars!",description:"With this release, we've focused heavily on Docker integration and enhancing the Dockerfile",date:"2022-09-26T00:00:00.000Z",formattedDate:"September 26, 2022",tags:[{label:"generator",permalink:"/blog/tags/generator"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:3.495,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"v0.15",title:"moon v0.15 - Enhanced Docker support and 1,000 stars!",authors:["milesj"],tags:["generator","docker"],image:"./img/v0.15.png"},unlisted:!1,prevItem:{title:"moon v0.16 - Per-project tool versions and TypeScript improvements",permalink:"/blog/v0.16"},nextItem:{title:"moon v0.14 - Code generation and implicit dependencies",permalink:"/blog/v0.14"}},u={image:r(46496).Z,authorsImageUrls:[void 0]},i=[];function c(e){const t={code:"code",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(t.p,{children:["With this release, we've focused heavily on Docker integration and enhancing the ",(0,n.jsx)(t.code,{children:"Dockerfile"}),"\nworkflow, as well as some minor quality of life improvements for template files and run reports."]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},39798:(e,t,r)=>{r.d(t,{Z:()=>s});r(27378);var n=r(37140);const a={tabItem:"tabItem_wHwb"};var o=r(24246);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},33337:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(27378),a=r(37140),o=r(83457),s=r(35595),l=r(76457);const u={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var i=r(24246);function c(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),a=l[r].value;a!==n&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:p,onClick:m,...o,className:(0,a.Z)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function d(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function m(e){const t=(0,s.Y)(e);return(0,i.jsxs)("div",{className:(0,a.Z)("tabs-container",u.tabList),children:[(0,i.jsx)(c,{...e,...t}),(0,i.jsx)(d,{...e,...t})]})}function p(e){const t=(0,l.Z)();return(0,i.jsx)(m,{...e,children:(0,s.h)(e.children)},String(t))}},35595:(e,t,r)=>{r.d(t,{Y:()=>p,h:()=>i});var n=r(27378),a=r(3620),o=r(9834),s=r(30654),l=r(70784),u=r(71819);function i(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return i(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const o=(0,a.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=c(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[p,h]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=p??f;return d({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),b(e)}),[h,b,s]),tabValues:s}}},46496:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/v0.15-df3082f5cae38090b567718791719d91.png"},71670:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var n=r(27378);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);