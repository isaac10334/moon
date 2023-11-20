"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82258],{66232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(24246),i=t(71670),s=t(79022);const r={title:"Code generation",toc_max_heading_level:6,tags:["codegen","generator","scaffold","template"]},l=void 0,o={id:"guides/codegen",title:"Code generation",description:"Code generation provides an easy mechanism for automating common development workflows and file",source:"@site/docs/guides/codegen.mdx",sourceDirName:"guides",slug:"/guides/codegen",permalink:"/docs/guides/codegen",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/codegen.mdx",tags:[{label:"codegen",permalink:"/docs/tags/codegen"},{label:"generator",permalink:"/docs/tags/generator"},{label:"scaffold",permalink:"/docs/tags/scaffold"},{label:"template",permalink:"/docs/tags/template"}],version:"current",frontMatter:{title:"Code generation",toc_max_heading_level:6,tags:["codegen","generator","scaffold","template"]},sidebar:"guides",previous:{title:"Continuous integration (CI)",permalink:"/docs/guides/ci"},next:{title:"Code owners",permalink:"/docs/guides/codeowners"}},c={},d=[{value:"Creating a new template",id:"creating-a-new-template",level:2},{value:"Configuring <code>template.yml</code>",id:"configuring-templateyml",level:3},{value:"Managing files",id:"managing-files",level:3},{value:"File extensions",id:"file-extensions",level:4},{value:"Partials",id:"partials",level:4},{value:"Raws<VersionLabel></VersionLabel>",id:"raws",level:4},{value:"Frontmatter",id:"frontmatter",level:4},{value:"Assets",id:"assets",level:4},{value:"Template engine &amp; syntax",id:"template-engine--syntax",level:3},{value:"Filters",id:"filters",level:4},{value:"Variables",id:"variables",level:4},{value:"Generating code from a template",id:"generating-code-from-a-template",level:2},{value:"Configuring template locations",id:"configuring-template-locations",level:3},{value:"Declaring variables with CLI arguments",id:"declaring-variables-with-cli-arguments",level:3},{value:"Sharing templates",id:"sharing-templates",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Code generation provides an easy mechanism for automating common development workflows and file\nstructures. Whether it's scaffolding a new library or application, updating configuration, or\nstandardizing patterns."}),"\n",(0,a.jsx)(n.p,{children:"To accomplish this, we provide a generator, which is divided into two parts. The first being the\ntemplates and their files to be scaffolded. The second is our rendering engine that writes template\nfiles to a destination."}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-new-template",children:"Creating a new template"}),"\n",(0,a.jsxs)(n.p,{children:["To create a new template, run ",(0,a.jsx)(n.a,{href:"../commands/generate",children:(0,a.jsx)(n.code,{children:"moon generate"})})," while passing the ",(0,a.jsx)(n.code,{children:"--template"})," option. This\nwill create a template directory and ",(0,a.jsx)(n.a,{href:"../config/template",children:(0,a.jsx)(n.code,{children:"template.yml"})})," file in the 1st configured template\nlocation defined in ",(0,a.jsx)(n.a,{href:"../config/workspace#templates",children:(0,a.jsx)(n.code,{children:"generator.templates"})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ moon generate <name> --template\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"configuring-templateyml",children:["Configuring ",(0,a.jsx)(n.code,{children:"template.yml"})]}),"\n",(0,a.jsxs)(n.p,{children:["Every template requires a ",(0,a.jsx)(n.a,{href:"../config/template",children:(0,a.jsx)(n.code,{children:"template.yml"})})," file in the template's directory root. This file\nacts as a schema and declares metadata and variables required by the generator."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="template.yml"',children:"title: 'npm package'\ndescription: |\n  Scaffolds the initial structure for an npm package,\n  including source and test folders, a package.json, and more.\nvariables:\n  name:\n    type: 'string'\n    default: ''\n    required: true\n    prompt: 'Package name?'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"managing-files",children:"Managing files"}),"\n",(0,a.jsx)(n.p,{children:"Feel free to add any files and folders to the template that you'd like to be generated by consumers!\nThese files will then be scaffolded 1:1 in structure at the target destination."}),"\n",(0,a.jsx)(n.p,{children:"An example of the templates folder structure may look something like the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"templates/\n\u251c\u2500\u2500 npm-package/\n\u2502   \u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 tests/\n\u2502   \u251c\u2500\u2500 package.json\n\u2502   \u2514\u2500\u2500 template.yml\n\u2514\u2500\u2500 react-app/\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Variables can be interpolated into file paths using the form ",(0,a.jsx)(n.code,{children:"[varName]"}),". For example, if you had\na template file ",(0,a.jsx)(n.code,{children:"src/[type].ts"}),", and a variable ",(0,a.jsx)(n.code,{children:"type"}),' with a value of "bin", then the destination\nfile path would be ',(0,a.jsx)(n.code,{children:"src/bin.ts"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"file-extensions",children:"File extensions"}),"\n",(0,a.jsxs)(n.p,{children:["To enable syntax highlighting for template engine syntax, you may use the ",(0,a.jsx)(n.code,{children:".tera"})," (preferred) or\n",(0,a.jsx)(n.code,{children:".twig"})," file extensions. These extensions are optional, but will be removed when the files are\ngenerated."]}),"\n",(0,a.jsx)(n.p,{children:"Depending on your preferred editor, these extensions may be supported through a plugin, or can be\nconfigured based on file type."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"VS Code"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=karunamurti.tera",children:"Tera extension"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2",children:"Twig extension"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Atom"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://atom.io/packages/atom-twig",children:"Twig package"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Webstorm"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/7303-twig",children:"Twig plugin"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"partials",children:"Partials"}),"\n",(0,a.jsxs)(n.p,{children:["Partials are special template files that are used for\n",(0,a.jsx)(n.a,{href:"https://keats.github.io/tera/docs/#include",children:"composition"})," and\n",(0,a.jsx)(n.a,{href:"https://keats.github.io/tera/docs/#inheritance",children:"inheritance"}),". Because of this, these files ",(0,a.jsx)(n.em,{children:"should\nnot"})," be generated into the target destination, and ",(0,a.jsx)(n.em,{children:"do not"})," support frontmatter."]}),"\n",(0,a.jsxs)(n.p,{children:['To ensure they are not generated, include the word "partial" anywhere in the file path. For example,\n',(0,a.jsx)(n.code,{children:"partials/header.tpl"})," or ",(0,a.jsx)(n.code,{children:"header.partial.tpl"}),"."]}),"\n",(0,a.jsxs)(n.h4,{id:"raws",children:["Raws",(0,a.jsx)(s.Z,{version:"1.11.0"})]}),"\n",(0,a.jsx)(n.p,{children:"Raw template files are another special type of file that bypass all Tera rendering, and are used\nas-is instead. This is useful for files that contain syntax that conflicts with Tera."}),"\n",(0,a.jsxs)(n.p,{children:["To mark a file as raw, add a ",(0,a.jsx)(n.code,{children:".raw"})," extension, for example: ",(0,a.jsx)(n.code,{children:"file.raw.js"})," or ",(0,a.jsx)(n.code,{children:"file.js.raw"}),". When the\nfile is generated, the ",(0,a.jsx)(n.code,{children:".raw"})," extension will be removed."]}),"\n",(0,a.jsx)(n.h4,{id:"frontmatter",children:"Frontmatter"}),"\n",(0,a.jsxs)(n.p,{children:['Frontmatter is a well-known concept for "per file configuration", and is achieved by inserting YAML\nat the top of the file, delimited by wrapping ',(0,a.jsx)(n.code,{children:"---"}),". This is a very powerful feature that provides\nmore control than the alternatives, and allows for some very cool integrations."]}),"\n",(0,a.jsxs)(n.p,{children:["moon's frontmatter supports functionality like file skipping, force overwriting, and destination\npath rewriting.\n",(0,a.jsx)(n.a,{href:"../config/template#frontmatter",children:"View the configuration docs for a full list of supported fields"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-twig",metastring:'title="package.json"',children:'---\nforce: true\n---\n\n{\n  "name": "{{ name | kebab_case }}",\n  "version": "0.0.1"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Since frontmatter exists in the file itself, you can take advantage of the rendering engine to\npopulate the field values dynamically. For example, if you're scaffolding a React component, you can\nconvert the component name and file name to PascalCase."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-twig",children:"{% set component_name = name | pascal_case %}\n\n---\nto: components/{{ component_name }}.tsx\n---\n\nexport function {{ component_name }}() {\n  return <div />;\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"assets",children:"Assets"}),"\n",(0,a.jsx)(n.p,{children:"Assets are binary files that are copied as-is to the destination, without any rendering, and no\nsupport for frontmatter. This applies to all non-text based files, like images, audio, video, etc."}),"\n",(0,a.jsx)(n.h3,{id:"template-engine--syntax",children:"Template engine & syntax"}),"\n",(0,a.jsxs)(n.p,{children:["Rendering templates is powered by ",(0,a.jsx)(n.a,{href:"https://keats.github.io/tera/",children:"Tera"}),", a Rust based template\nengine with syntax similar to Twig, Liquid, Django, and more. We highly encourage everyone to read\nTera's documentation for an in-depth understanding, but as a quick reference, Tera supports the\nfollowing:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://keats.github.io/tera/docs/#variables",children:"Variable interpolation"})," (defined with the\n",(0,a.jsx)(n.a,{href:"../config/template#variables",children:(0,a.jsx)(n.code,{children:"variables"})})," setting), with\n",(0,a.jsx)(n.a,{href:"https://keats.github.io/tera/docs/#built-in-filters",children:"built-in filters"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-twig",children:"{{ varName }} -> foo\n{{ varName | upper }} -> FOO\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://keats.github.io/tera/docs/#if",children:"Conditional blocks"})," and\n",(0,a.jsx)(n.a,{href:"https://keats.github.io/tera/docs/#for",children:"loops"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-twig",children:"{% if price < 10 or always_show %}\n  Price is {{ price }}.\n{% elif price > 1000 and not rich %}\n  That's expensive!\n{% else %}\n  N/A\n{% endif %}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-twig",children:"{% for item in items %}\n  {{ loop.index }} - {{ item.name }}\n{% endfor %}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"And many more features, like auto-escaping, white space control, and math operators!"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"filters",children:"Filters"}),"\n",(0,a.jsxs)(n.p,{children:["Filters are a mechanism for transforming values during interpolation and are written using pipes\n(",(0,a.jsx)(n.code,{children:"|"}),"). Tera provides many ",(0,a.jsx)(n.a,{href:"https://keats.github.io/tera/docs/#built-in-filters",children:"built-in filters"}),",\nbut we also provide the following custom filters:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Strings - ",(0,a.jsx)(n.code,{children:"camel_case"}),", ",(0,a.jsx)(n.code,{children:"pascal_case"}),", ",(0,a.jsx)(n.code,{children:"snake_case"}),", ",(0,a.jsx)(n.code,{children:"upper_snake_case"}),", ",(0,a.jsx)(n.code,{children:"kebab_case"}),",\n",(0,a.jsx)(n.code,{children:"upper_kebab_case"}),", ",(0,a.jsx)(n.code,{children:"lower_case"}),", ",(0,a.jsx)(n.code,{children:"upper_case"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-twig",children:"{{ some_value | upper_case }}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Paths - ",(0,a.jsx)(n.code,{children:"path_join"}),", ",(0,a.jsx)(n.code,{children:"path_relative"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-twig",children:'{{ some_path | path_join(part = "another/folder") }}\n{{ some_path | path_relative(from = other_path) }}\n{{ some_path | path_relative(to = other_path) }}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"variables",children:"Variables"}),"\n",(0,a.jsx)(n.p,{children:"The following variables are always available within a template:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dest_dir"})," - Absolute path to the destination folder."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dest_rel_dir"})," - Relative path to the destination folder from the working directory."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"working_dir"})," - Current working directory."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"workspace_root"})," - The moon workspace root."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"generating-code-from-a-template",children:"Generating code from a template"}),"\n",(0,a.jsxs)(n.p,{children:["Once a template has been created and configured, you can generate files based on it using the\n",(0,a.jsx)(n.a,{href:"../commands/generate",children:(0,a.jsx)(n.code,{children:"moon generate"})})," command! This is also know as scaffolding or code generation."]}),"\n",(0,a.jsx)(n.p,{children:"This command requires the name of a template as the 1st argument. The template name is the folder\nname on the file system that houses all the template files."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ moon generate npm-package\n"})}),"\n",(0,a.jsx)(n.p,{children:"An optional destination path, relative from the current working directory, can be provided as the\n2nd argument. If not provided, you'll be prompted during generation to provide one."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ moon generate npm-package ./packages/example\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["This command is extremely interactive, as we'll prompt you for the destination path, variable\nvalues, whether to overwrite files, and more. If you'd prefer to avoid interactions, pass\n",(0,a.jsx)(n.code,{children:"--defaults"}),", or ",(0,a.jsx)(n.code,{children:"--force"}),", or both."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"configuring-template-locations",children:"Configuring template locations"}),"\n",(0,a.jsxs)(n.p,{children:["Templates can be located anywhere, especially when ",(0,a.jsx)(n.a,{href:"#sharing-templates",children:"being shared"}),". Because of\nthis, our generator will loop through all template paths configured in\n",(0,a.jsx)(n.a,{href:"../config/workspace#templates",children:(0,a.jsx)(n.code,{children:"generator.templates"})}),", in order, until a match is found (template name matches the\nfolder name)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml"',children:"generator:\n  templates:\n    - './templates'\n    - './other/templates'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"declaring-variables-with-cli-arguments",children:"Declaring variables with CLI arguments"}),"\n",(0,a.jsxs)(n.p,{children:["During generation, you'll be prompted in the terminal to provide a value for any configured\nvariables. However, you can pre-fill these variable values by passing arbitrary command line\narguments after ",(0,a.jsx)(n.code,{children:"--"})," to ",(0,a.jsx)(n.a,{href:"../commands/generate",children:(0,a.jsx)(n.code,{children:"moon generate"})}),". Argument names must exactly match the variable\nnames."]}),"\n",(0,a.jsxs)(n.p,{children:["Using the package template example above, we could pre-fill the ",(0,a.jsx)(n.code,{children:"name"})," variable like so:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ moon generate npm-package ./packages/example -- --name '@company/example' --private\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Boolean variables can be negated by prefixing the argument with ",(0,a.jsx)(n.code,{children:"--no-<arg>"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sharing-templates",children:"Sharing templates"}),"\n",(0,a.jsx)(n.p,{children:"Although moon is designed for a monorepo, you may be using multiple repositories and would like to\nuse the same templates across all of them."}),"\n",(0,a.jsx)(n.p,{children:"This is technically possible, but with 1 caveat, and that is that moon's generator requires\ntemplates to exist within the current repository, relative from the workspace root. So how can we\nshare templates across repositories? Why not try..."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Git submodules"}),"\n",(0,a.jsx)(n.li,{children:"npm packages"}),"\n",(0,a.jsx)(n.li,{children:"Another packaging system"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Regardless of the choice, simply configure ",(0,a.jsx)(n.a,{href:"../config/workspace#templates",children:(0,a.jsx)(n.code,{children:"generator.templates"})})," to point to these\nlocations:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/workspace.yml"',children:"generator:\n  templates:\n    - './templates'\n    - './node_modules/@company/shared-templates'\n    - './path/to/submodules'\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},79022:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(9619),i=t(24246);function s(e){let{header:n,inline:t,updated:s,version:r}=e;return(0,i.jsx)(a.Z,{text:`v${r}`,variant:s?"success":"info",className:n?"absolute right-0 top-1.5":t?"inline-block":"ml-2"})}},9619:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(40624),i=t(31792),s=t(24246);const r={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:n,icon:t,text:l,variant:o}=e;return(0,s.jsxs)("span",{className:(0,a.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",o?r[o]:"bg-gray-100 text-gray-800",n),children:[t&&(0,s.jsx)(i.Z,{icon:t,className:"mr-1"}),l]})}},71670:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(27378);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);