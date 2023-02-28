"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8488],{39798:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(27378),n=a(38944);const l="tabItem_wHwb";function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,u),hidden:a},t)}},33337:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(25773),n=a(27378),l=a(38944),u=a(83457),s=a(35595),i=a(76457);const o="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=o[a].value;r!==s&&(d(t),i(r))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:b,onClick:m},u,{className:(0,l.Z)("tabs__item",c,u?.className,{"tabs__item--active":s===t})}),a??t)})))}function d(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function m(e){const t=(0,s.Y)(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",o)},n.createElement(p,(0,r.Z)({},e,t)),n.createElement(d,(0,r.Z)({},e,t)))}function b(e){const t=(0,i.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},35595:(e,t,a)=>{a.d(t,{Y:()=>d});var r=a(27378),n=a(35331),l=a(30654),u=a(70784),s=a(71819);function i(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function o(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??i(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const u=(0,n.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(u.location.search);t.set(s,e),u.replace({...u.location,search:t.toString()})}),[s,u])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=o(e),[u,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[d,m]=p({queryString:a,groupId:n}),[b,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=d??b;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),h(e)}),[m,h,l]),tabValues:l}}},36642:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(27378),n=a(54267),l=a(39798),u=a(33337);function s(e,t,a){let r=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?r+="--dev ":e.peer&&(r+="--peer "),a&&t&&!e.package&&(r+="-W "),r+=e.dep,r}function i(e,t){let a="pnpm add ";return e.dev?a+="--save-dev ":e.peer&&(a+="--save-peer "),e.package?a+=`--filter ${e.package} `:t&&(a+="-w "),a+=e.dep,a}function o(e){let t=s(e,!1,!0),a=i(e,!1);return e.package||(t+="\n\n# If using workspaces\n",a+="\n\n# If using workspaces\n",t+=s(e,!0,!0),a+=i(e,!0)),r.createElement(u.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},r.createElement(l.Z,{value:"yarn"},r.createElement(n.Z,{language:"shell"},s(e,!1,!1))),r.createElement(l.Z,{value:"yarn1"},r.createElement(n.Z,{language:"shell"},t)),r.createElement(l.Z,{value:"npm"},r.createElement(n.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),r.createElement(l.Z,{value:"pnpm"},r.createElement(n.Z,{language:"shell"},a)))}},74273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var r=a(25773),n=(a(27378),a(35318)),l=a(36642);const u={title:"React example",sidebar_label:"React"},s=void 0,i={unversionedId:"guides/examples/react",id:"guides/examples/react",title:"React example",description:"React is an application or library concern, and not a build system one, since the bundling of React",source:"@site/docs/guides/examples/react.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/react",permalink:"/docs/guides/examples/react",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/react.mdx",tags:[],version:"current",frontMatter:{title:"React example",sidebar_label:"React"},sidebar:"guides",previous:{title:"Prettier",permalink:"/docs/guides/examples/prettier"},next:{title:"Remix",permalink:"/docs/guides/examples/remix"}},o={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"React is an application or library concern, and not a build system one, since the bundling of React\nis abstracted away through another tool like webpack. Because of this, moon has no guidelines around\nutilizing React directly. You can use React however you wish!"),(0,n.kt)("p",null,"However, with that being said, we do suggest the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"react")," and related dependencies to each project, not the root. This includes ",(0,n.kt)("inlineCode",{parentName:"li"},"@types/react"),"\nas well. This will ensure accurate ",(0,n.kt)("a",{parentName:"li",href:"../../concepts/cache#hashing"},"hashing"),".")),(0,n.kt)(l.Z,{dep:"react",package:"<project>",mdxType:"AddDepsTabs"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure Babel with the ",(0,n.kt)("inlineCode",{parentName:"li"},"@babel/preset-react")," preset."),(0,n.kt)("li",{parentName:"ul"},"Configure ",(0,n.kt)("a",{parentName:"li",href:"./typescript"},"TypeScript")," compiler options with ",(0,n.kt)("inlineCode",{parentName:"li"},'"jsx": "react-jsx"'),".")))}d.isMDXComponent=!0}}]);