"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92702],{38345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(24246),n=r(71670);r(33337),r(39798),r(76911);const o={slug:"v0.24",title:"moon v0.24 - Remote caching, interactive tasks, query improvements, and more",authors:["milesj","jpoz"],tags:["project","platform","moonbase","remote-cache"],image:"./img/v0.24.png"},l=void 0,s={permalink:"/blog/v0.24",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-02-13_v0.24.mdx",source:"@site/blog/2023-02-13_v0.24.mdx",title:"moon v0.24 - Remote caching, interactive tasks, query improvements, and more",description:"With this release, we've polished our CLI experience and improved task interoperability.",date:"2023-02-13T00:00:00.000Z",formattedDate:"February 13, 2023",tags:[{label:"project",permalink:"/blog/tags/project"},{label:"platform",permalink:"/blog/tags/platform"},{label:"moonbase",permalink:"/blog/tags/moonbase"},{label:"remote-cache",permalink:"/blog/tags/remote-cache"}],readingTime:4.28,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"},{name:"James Pozdena",title:"Founder, developer",url:"https://github.com/jpoz",imageURL:"/img/authors/james.jpg",key:"jpoz"}],frontMatter:{slug:"v0.24",title:"moon v0.24 - Remote caching, interactive tasks, query improvements, and more",authors:["milesj","jpoz"],tags:["project","platform","moonbase","remote-cache"],image:"./img/v0.24.png"},unlisted:!1,prevItem:{title:"moon v0.25 - Deno tier 2 support, CI insights, custom project languages, and more",permalink:"/blog/v0.25"},nextItem:{title:"Remote caching is now publicly available through moonbase",permalink:"/blog/moonbase"}},u={image:r(35602).Z,authorsImageUrls:[void 0,void 0]},i=[];function c(e){const t={p:"p",...(0,n.a)(),...e.components};return(0,a.jsx)(t.p,{children:"With this release, we've polished our CLI experience and improved task interoperability."})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},39798:(e,t,r)=>{r.d(t,{Z:()=>l});r(27378);var a=r(37140);const n={tabItem:"tabItem_wHwb"};var o=r(24246);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,l),hidden:r,children:t})}},33337:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(27378),n=r(37140),o=r(83457),l=r(35595),s=r(76457);const u={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var i=r(24246);function c(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==a&&(m(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:d,onClick:p,...o,className:(0,n.Z)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function m(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function p(e){const t=(0,l.Y)(e);return(0,i.jsxs)("div",{className:(0,n.Z)("tabs-container",u.tabList),children:[(0,i.jsx)(c,{...e,...t}),(0,i.jsx)(m,{...e,...t})]})}function d(e){const t=(0,s.Z)();return(0,i.jsx)(p,{...e,children:(0,l.h)(e.children)},String(t))}},35595:(e,t,r)=>{r.d(t,{Y:()=>d,h:()=>i});var a=r(27378),n=r(3620),o=r(9834),l=r(30654),s=r(70784),u=r(71819);function i(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return i(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const o=(0,n.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=c(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[d,b]=p({queryString:r,groupId:n}),[h,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=d??h;return m({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),b(e),f(e)}),[b,f,l]),tabValues:l}}},35602:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/v0.24-0e225eaeb8b3c60cc26907770c589000.png"},71670:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>l});var a=r(27378);const n={},o=a.createContext(n);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);