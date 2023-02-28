"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5390],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(25773),i=(n(27378),n(35318));const o={},a=void 0,s={unversionedId:"guides/javascript/typescript-eslint",id:"guides/javascript/typescript-eslint",title:"typescript-eslint",description:"ESLint integration",source:"@site/docs/guides/javascript/typescript-eslint.mdx",sourceDirName:"guides/javascript",slug:"/guides/javascript/typescript-eslint",permalink:"/docs/guides/javascript/typescript-eslint",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/javascript/typescript-eslint.mdx",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"ESLint integration",id:"eslint-integration",level:2},{value:"Disabling problematic rules",id:"disabling-problematic-rules",level:3},{value:"Running from the command line",id:"running-from-the-command-line",level:3},{value:"Running within editors",id:"running-within-editors",level:3},{value:"ESLint",id:"eslint",level:4},{value:"Prettier",id:"prettier",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"eslint-integration"},"ESLint integration"),(0,i.kt)("h3",{id:"disabling-problematic-rules"},"Disabling problematic rules"),(0,i.kt)("p",null,"A handful of ESLint rules are not compatible with the TypeScript plugin, or they cause serious\nperformance degradation, and should be disabled entirely. According to the\n",(0,i.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/docs/linting/troubleshooting#eslint-plugin-import"},"official typescript-eslint.io documentation"),",\nmost of these rules come from the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-import")," plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  // ...\n  rules: {\n    'import/default': 'off',\n    'import/named': 'off',\n    'import/namespace': 'off',\n    'import/no-cycle': 'off',\n    'import/no-deprecated': 'off',\n    'import/no-named-as-default': 'off',\n    'import/no-named-as-default-member': 'off',\n    'import/no-unused-modules': 'off',\n  },\n};\n")),(0,i.kt)("h3",{id:"running-from-the-command-line"},"Running from the command line"),(0,i.kt)("h3",{id:"running-within-editors"},"Running within editors"),(0,i.kt)("h4",{id:"eslint"},"ESLint"),(0,i.kt)("p",null,"Use the\n",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"dbaeumer.vscode-eslint"),"\nextension. Too avoid poor performance, ",(0,i.kt)("em",{parentName:"p"},"do not")," use ESLint for formatting code (via the\n",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-prettier")," plugin or something similar), and ",(0,i.kt)("em",{parentName:"p"},"only")," use it for linting. The difference\nin speed is comparable to 100ms vs 2000ms."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/settings.json"',title:'".vscode/settings.json"'},'{\n  // Automatically run all linting fixes on save as a concurrent code action,\n  // and avoid formatting with ESLint. Use another formatter, like Prettier.\n  "editor.codeActionsOnSave": ["source.fixAll.eslint"],\n  "eslint.format.enable": false,\n\n  // If linting is *too slow* while typing, uncomment the following line to\n  // only run the linter on save only.\n  // "editor.run": "onSave",\n\n  // Your package manager of choice.\n  "eslint.packageManager": "yarn",\n\n  // Use the newer and more performant `ESLint` class implementation.\n  "eslint.useESLintClass": true,\n\n  // List of directories that that linter should operate on.\n  "eslint.workingDirectories": [{ "pattern": "apps/*" }, { "pattern": "packages/*" }]\n}\n')),(0,i.kt)("h4",{id:"prettier"},"Prettier"),(0,i.kt)("p",null,"Use the\n",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"esbenp.prettier-vscode"),"\nextension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/settings.json"',title:'".vscode/settings.json"'},'{\n  // Use Prettier as the default formatter for all file types. Types not\n  // supported by Prettier can be overriden using bracket syntax, or ignore files.\n  "editor.defaultFormatter": "esbenp.prettier-vscode",\n  "editor.formatOnSave": true\n}\n')))}u.isMDXComponent=!0}}]);