"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60026],{74162:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=s(24246),i=s(71670);const o={title:"TOML plugin",sidebar_label:"TOML",toc_max_heading_level:5},l=void 0,r={id:"proto/toml-plugin",title:"TOML plugin",description:"The TOML plugin is by design, very simple. It's a TOML file that describes a schema for the tool,",source:"@site/docs/proto/toml-plugin.mdx",sourceDirName:"proto",slug:"/proto/toml-plugin",permalink:"/docs/proto/toml-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/toml-plugin.mdx",tags:[],version:"current",frontMatter:{title:"TOML plugin",sidebar_label:"TOML",toc_max_heading_level:5},sidebar:"proto",previous:{title:"Plugins",permalink:"/docs/proto/plugins"},next:{title:"WASM",permalink:"/docs/proto/wasm-plugin"}},a={},c=[{value:"Create a plugin",id:"create-a-plugin",level:2},{value:"Platform variations",id:"platform-variations",level:3},{value:"Downloading and installing",id:"downloading-and-installing",level:3},{value:"Global packages",id:"global-packages",level:4},{value:"Resolving versions",id:"resolving-versions",level:3},{value:"Git tags",id:"git-tags",level:4},{value:"JSON manifest",id:"json-manifest",level:4},{value:"Detecting versions",id:"detecting-versions",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The TOML plugin is by design, very simple. It's a TOML file that describes a schema for the tool,\nhow it should be installed, and how it should be invoked. Since this is a static configuration file,\nit does not support any logic or complex behavior, and is merely for simple and common use cases,\nlike CLIs."}),"\n",(0,t.jsx)(n.h2,{id:"create-a-plugin",children:"Create a plugin"}),"\n",(0,t.jsxs)(n.p,{children:["Let's start by creating a new plugin, and defining the ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"type"})," fields. The type can either\nbe ",(0,t.jsx)(n.code,{children:"language"}),", ",(0,t.jsx)(n.code,{children:"dependency-manager"}),", ",(0,t.jsx)(n.code,{children:"package-manager"}),", or ",(0,t.jsx)(n.code,{children:"cli"}),". For this example, we'll create a\nplugin for our fake product called Protostar, a CLI tool."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'name = "Protostar"\ntype = "cli"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"platform-variations",children:"Platform variations"}),"\n",(0,t.jsxs)(n.p,{children:["Native tools are often platform specific, and proto supports this by allowing you to define\nvariations based on operating system using the ",(0,t.jsx)(n.code,{children:"[platform]"})," section. For non-native tools, this\nsection can typically be skipped."]}),"\n",(0,t.jsxs)(n.p,{children:["This section requires a mapping of Rust\n",(0,t.jsxs)(n.a,{href:"https://doc.rust-lang.org/std/env/consts/constant.OS.html",children:[(0,t.jsx)(n.code,{children:"OS"})," strings"]})," to platform settings. The\nfollowing settings are available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"archive-prefix"})," - If the tool is distributed as an archive (zip, tar, etc), this is the name of\nthe direct folder within the archive that contains the tool, and will be removed when unpacking\nthe archive. If there is no prefix folder within the archive, this setting can be omitted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bin-path"})," - The path to the executable binary within the archive (without the prefix). If the\ntool is distributed as a single binary, this setting can be typically omitted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"checksum-file"})," - Name of the checksum file to verify the downloaded file with. If the tool does\nnot support checksum verification, this setting can be omitted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"download-file"})," (required) - Name of the file to download.\n",(0,t.jsx)(n.a,{href:"#downloading-and-installing",children:"Learn more about downloading"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[platform.linux]\narchive-prefix = "protostar-linux"\nbin-path = "bins/protostar"\nchecksum-file = "protostar-{arch}-unknown-linux-{libc}.sha256"\ndownload-file = "protostar-{arch}-unknown-linux-{libc}.tar.gz"\n\n[platform.macos]\narchive-prefix = "protostar-macos"\nbin-path = "bins/protostar"\nchecksum-file = "protostar-{arch}-apple-darwin.sha256"\ndownload-file = "protostar-{arch}-apple-darwin.tar.xz"\n\n[platform.windows]\narchive-prefix = "protostar-windows"\nbin-path = "bins/protostar.exe"\nchecksum-file = "protostar-{arch}-pc-windows-msvc.sha256"\ndownload-file = "protostar-{arch}-pc-windows-msvc.zip"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You may have noticed tokens above, like ",(0,t.jsx)(n.code,{children:"{arch}"}),". These are special tokens that are replaced with a\ndynamic value at runtime, based on the current host machine executing the code. The following tokens\nare available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{version}"})," - The currently resolved version, as a fully-qualifed semantic version:\n",(0,t.jsx)(n.code,{children:"major.minor.patch"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{arch}"})," - The architecture of the host machine, like ",(0,t.jsx)(n.code,{children:"x86_64"}),". These values map to Rust's\n",(0,t.jsxs)(n.a,{href:"https://doc.rust-lang.org/std/env/consts/constant.ARCH.html",children:[(0,t.jsx)(n.code,{children:"ARCH"})," constant"]}),", but can be\ncustomized with ",(0,t.jsx)(n.a,{href:"#downloading-and-installing",children:(0,t.jsx)(n.code,{children:"install.arch"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{os}"})," - The operating system of the host machine, like ",(0,t.jsx)(n.code,{children:"windows"}),". These values map to Rust's\n",(0,t.jsxs)(n.a,{href:"https://doc.rust-lang.org/std/env/consts/constant.OS.html",children:[(0,t.jsx)(n.code,{children:"OS"})," constant"]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{libc}"})," - For Linux machines, this is the current libc implementation, either ",(0,t.jsx)(n.code,{children:"gnu"})," or ",(0,t.jsx)(n.code,{children:"musl"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"downloading-and-installing",children:"Downloading and installing"}),"\n",(0,t.jsxs)(n.p,{children:["A TOML plugin ",(0,t.jsx)(n.em,{children:"only"})," supports downloading pre-built tools, typically as an archive, and does ",(0,t.jsx)(n.em,{children:"not"}),"\nsupport building from source. The ",(0,t.jsx)(n.code,{children:"[install]"})," section can be used to configure how the tool should\nbe downloaded and installed into the toolchain. The following settings are available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"arch"})," - A mapping of Rust\n",(0,t.jsxs)(n.a,{href:"https://doc.rust-lang.org/std/env/consts/constant.ARCH.html",children:[(0,t.jsx)(n.code,{children:"ARCH"})," strings"]})," to custom values for\nthe ",(0,t.jsx)(n.code,{children:"{arch}"})," token. This is useful if the tool has different terminology."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"checksum-url"})," - A secure URL to download the checksum file for verification. If the tool does not\nsupport checksum verification, this setting can be omitted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"checksum-url-canary"})," - A URL for canary releases."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"checksum-public-key"})," - Public key used for verifying checksums. Only used for ",(0,t.jsx)(n.code,{children:".minisig"})," files."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"download-url"})," (required) - A secure URL to download the tool/archive."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"download-url-canary"})," - A URL for canary releases."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The URL settings support ",(0,t.jsx)(n.code,{children:"{checksum_file}"})," and ",(0,t.jsx)(n.code,{children:"{download_file}"})," tokens, which will be replaced with\nthe values from the ",(0,t.jsx)(n.code,{children:"[platform]"})," section."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[install]\nchecksum-url = "https://github.com/moonrepo/protostar/releases/download/v{version}/{checksum_file}"\ndownload-url = "https://github.com/moonrepo/protostar/releases/download/v{version}/{download_file}"\n\n[install.arch]\naarch64 = "arm64"\nx86_64 = "x64"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"global-packages",children:"Global packages"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"[globals]"})," sections can be configured that dictates the installation of global binaries for the\ntool. If the tool does not support globals (is not a programming language), these settings can be\nomitted."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lookup-dirs"})," - A list of directories to locate and install the global binaries into. This setting\nsupports interpolating environment variables via the syntax ",(0,t.jsx)(n.code,{children:"$ENV_VAR"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"install-args"})," - A list of CLI arguments to pass to the tool to install a global binary. The name\nof the binary can be inserted using the ",(0,t.jsx)(n.code,{children:"{dependency}"})," token."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"uninstall-args"})," - A list of CLI arguments to pass to the tool to uninstall a global binary. The\nname of the binary can be inserted using the ",(0,t.jsx)(n.code,{children:"{dependency}"})," token."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"package-prefix"})," - A string that all package names are prefixed with. The prefix will be removed\nwhen filtering/listing packages. For example, Cargo/Rust binaries are prefixed wih ",(0,t.jsx)(n.code,{children:"cargo-"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[globals]\nlookup-dirs = ["$PROTOSTAR_HOME/bin", "$HOME/.protostar/bin"]\ninstall-args = ["install", "--force", "{dependency}"]\nuninstall-args = ["uninstall", "{dependency}"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"resolving-versions",children:"Resolving versions"}),"\n",(0,t.jsxs)(n.p,{children:["Now that the tool can be downloaded and installed, we must configure how to resolve available\nversions. Resolving is configured through the ",(0,t.jsx)(n.code,{children:"[resolve]"})," section, which supports 2 patterns to\nresolve with: Git tags or a JSON manifest."]}),"\n",(0,t.jsx)(n.h4,{id:"git-tags",children:"Git tags"}),"\n",(0,t.jsx)(n.p,{children:"To resolve a list of available versions using Git tags, the following settings are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"git-url"})," (required) - The remote URL to fetch tags from."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"git-tag-pattern"})," - A regular expression to filter and match with. The capture group ",(0,t.jsx)(n.code,{children:"1"})," will be\nextracted as the version."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[resolve]\ngit-url = "https://github.com/moonrepo/protostar"\ngit-tag-pattern = "^@protostar/cli@((\\\\d+)\\\\.(\\\\d+)\\\\.(\\\\d+))"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"json-manifest",children:"JSON manifest"}),"\n",(0,t.jsx)(n.p,{children:"To resolve a list of available versions using a JSON manifest, the following settings are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"manifest-url"})," (required) - A URL that returns a JSON response of all versions. This response\n",(0,t.jsx)(n.em,{children:"must be"})," an array of strings, or an array of objects."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"manifest-version-key"})," - If the response is an array of objects, this is the key to extract the\nversion from. If the response is an array of strings, this setting can be omitted. Defaults to\n",(0,t.jsx)(n.code,{children:"version"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[resolve]\nmanifest-url = "https://someregistry.com/protostar/versions.json"\nmanifest-version-key = "latest_version"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"detecting-versions",children:"Detecting versions"}),"\n",(0,t.jsxs)(n.p,{children:["And lastly, we can configure how to ",(0,t.jsx)(n.a,{href:"./detection",children:"detect a version"})," contextually at runtime, using\nthe ",(0,t.jsx)(n.code,{children:"[detect]"})," setting. At this time, we only support 1 setting:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"version-files"})," - A list of version files to extract from. The contents of these files can ",(0,t.jsx)(n.em,{children:"only"}),"\nbe the version string itself."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[detect]\nversion-files = [".protostar-version", ".protostarrc"]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var t=s(27378);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);