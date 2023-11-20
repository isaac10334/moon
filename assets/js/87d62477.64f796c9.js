"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9551],{21180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var i=t(24246),r=t(71670),s=t(32189);const d={title:"Webhooks (experimental)",toc_max_heading_level:6},a=void 0,o={id:"guides/webhooks",title:"Webhooks (experimental)",description:"Looking to gather metrics for your pipelines? Gain insight into run durations and failures? Maybe",source:"@site/docs/guides/webhooks.mdx",sourceDirName:"guides",slug:"/guides/webhooks",permalink:"/docs/guides/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/webhooks.mdx",tags:[],version:"current",frontMatter:{title:"Webhooks (experimental)",toc_max_heading_level:6},sidebar:"guides",previous:{title:"Sharing workspace configuration",permalink:"/docs/guides/sharing-config"},next:{title:"VCS hooks",permalink:"/docs/guides/vcs-hooks"}},c={},l=[{value:"Payload structure",id:"payload-structure",level:2},{value:"Pipeline environment",id:"pipeline-environment",level:3},{value:"Events",id:"events",level:2},{value:"Pipeline",id:"pipeline",level:3},{value:"<code>pipeline.started</code>",id:"pipelinestarted",level:3},{value:"<code>pipeline.finished</code>",id:"pipelinefinished",level:3},{value:"<code>pipeline.aborted</code>",id:"pipelineaborted",level:3},{value:"Actions",id:"actions",level:3},{value:"<code>action.started</code>",id:"actionstarted",level:3},{value:"<code>action.finished</code>",id:"actionfinished",level:3},{value:"<code>dependencies.installing</code>",id:"dependenciesinstalling",level:3},{value:"<code>dependencies.installed</code>",id:"dependenciesinstalled",level:3},{value:"<code>project.syncing</code>",id:"projectsyncing",level:3},{value:"<code>project.synced</code>",id:"projectsynced",level:3},{value:"<code>tool.installing</code>",id:"toolinstalling",level:3},{value:"<code>tool.installed</code>",id:"toolinstalled",level:3},{value:"<code>target.running</code>",id:"targetrunning",level:3},{value:"<code>target.ran</code>",id:"targetran",level:3},{value:"<code>workspace.syncing</code>",id:"workspacesyncing",level:3},{value:"<code>workspace.synced</code>",id:"workspacesynced",level:3},{value:"Targets",id:"targets",level:3},{value:"<code>target-output.cache-check</code>",id:"target-outputcache-check",level:3},{value:"<code>target-output.archiving</code>",id:"target-outputarchiving",level:3},{value:"<code>target-output.archived</code>",id:"target-outputarchived",level:3},{value:"<code>target-output.hydrating</code>",id:"target-outputhydrating",level:3},{value:"<code>target-output.hydrated</code>",id:"target-outputhydrated",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Looking to gather metrics for your pipelines? Gain insight into run durations and failures? Maybe\nyou want to send Slack or Discord notifications? With our webhooks, all of these are possible!"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.a,{href:"../config/workspace#webhookurl",children:(0,i.jsx)(n.code,{children:"notifier.webhookUrl"})})," setting is configured with an HTTPS\nURL, and moon is running in a CI environment, moon will POST a payload to this endpoint for every\nevent in our pipeline."]}),"\n",(0,i.jsx)(n.h2,{id:"payload-structure",children:"Payload structure"}),"\n",(0,i.jsx)(n.p,{children:"Every webhook event is posted with the following request body, known as a payload."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"})," (",(0,i.jsx)(n.code,{children:"string"}),") - The type of ",(0,i.jsx)(n.a,{href:"#events",children:"event"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"environment"})," (",(0,i.jsx)(n.code,{children:"object | null"}),") - Information about the current CI/CD pipeline environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"event"})," (",(0,i.jsx)(n.code,{children:"object"}),") - The event specific payload. View each event for an example of their\nstructure."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"createdAt"})," (",(0,i.jsx)(n.code,{children:"string"}),") - When the event was created, as a UTC timestamp in ISO 8601 (RFC 3339)\nformat."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"uuid"})," (",(0,i.jsx)(n.code,{children:"string"}),") - A unique identifier for all webhooks in the current run batch."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "...",\n  "environment": "...",\n  "event": {\n    // ...\n  },\n  "createdAt": "...",\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"uuid"})," field can be used to differentiate concurrently running pipelines!"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pipeline-environment",children:"Pipeline environment"}),"\n",(0,i.jsxs)(n.p,{children:["When webhooks are sent from a CI/CD pipeline, we attempt to include information about the\nenvironment under the ",(0,i.jsx)(n.code,{children:"environment"})," field. If information could not be detected, this field is null,\notherwise it contains these fields."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"baseBranch"})," (",(0,i.jsx)(n.code,{children:"string | null"}),") - When a merge/pull request, the target (base) branch, otherwise\nnull."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"branch"})," (",(0,i.jsx)(n.code,{children:"string"}),") - When a merge/pull request, the source (head) branch, otherwise the\ntriggering branch."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," (",(0,i.jsx)(n.code,{children:"string"}),") - ID of the current pipeline instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"provider"})," (",(0,i.jsx)(n.code,{children:"string"}),") - Name of your CI/CD provider. GitHub Actions, GitLab, CircleCI, etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"requestId"})," (",(0,i.jsx)(n.code,{children:"string | null"}),") - The ID of the merge/pull request."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"requestUrl"})," (",(0,i.jsx)(n.code,{children:"string | null"}),") - Link to the merge/pull request."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"revision"})," (",(0,i.jsx)(n.code,{children:"string"}),") - The HEAD commit, revision, tag, ref, etc, that triggered the pipeline."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"url"})," (",(0,i.jsx)(n.code,{children:"string | null"}),") - Link to the current pipeline, when available."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/moonrepo/moon/tree/master/crates/core/pipeline-provider",children:"View list of supported CI/CD providers"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.h3,{id:"pipeline",children:"Pipeline"}),"\n",(0,i.jsxs)(n.p,{children:["Runs actions within moon using a robust dependency graph. Is triggered when using\n",(0,i.jsx)(n.a,{href:"../commands/run",children:(0,i.jsx)(n.code,{children:"moon run"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"pipelinestarted",children:(0,i.jsx)(n.code,{children:"pipeline.started"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadPipelineStarted"}),"\n",(0,i.jsx)(n.p,{children:"Triggered when the pipeline has been created but before actions have started to run."}),"\n",(0,i.jsxs)(n.p,{children:["This event includes the number of actions registered within the pipeline, but does not provide\ndetailed information about the actions. Use the ",(0,i.jsx)(n.a,{href:"#actionstarted",children:(0,i.jsx)(n.code,{children:"action.*"})})," events for this."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "pipeline.started",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "actionsCount": 15\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"pipelinefinished",children:(0,i.jsx)(n.code,{children:"pipeline.finished"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadPipelineFinished"}),"\n",(0,i.jsx)(n.p,{children:"Triggered when the pipeline has finished running all actions, with aggregated counts based on final\nstatus."}),"\n",(0,i.jsxs)(n.p,{children:["This event is ",(0,i.jsx)(n.em,{children:"not"})," triggered if the pipeline crashes (this does not include actions that have\nfailed, as those are legitimate runs). Use the ",(0,i.jsx)(n.a,{href:"#pipelineaborted",children:(0,i.jsx)(n.code,{children:"pipeline.aborted"})})," event if you\nwant to also catch crashes."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "pipeline.finished",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "cachedCount": 10,\n    "baselineDuration": {\n      "secs": 60,\n      "nanos": 3591693\n    },\n    "duration": {\n      "secs": 120,\n      "nanos": 3591693\n    },\n    "estimatedSavings": {\n      "secs": 60,\n      "nanos": 0\n    },\n    "failedCount": 1,\n    "passedCount": 4\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"pipelineaborted",children:(0,i.jsx)(n.code,{children:"pipeline.aborted"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadPipelineAborted"}),"\n",(0,i.jsx)(n.p,{children:"Triggered when the pipeline has crashed for unknown reasons, or had to abort as a result of a\ncritical action failing."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "pipeline.aborted",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "error": "..."\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,i.jsx)(n.p,{children:'Actions are "jobs" within the pipeline that are executed topologically.'}),"\n",(0,i.jsx)(n.h3,{id:"actionstarted",children:(0,i.jsx)(n.code,{children:"action.started"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadActionStarted"}),"\n",(0,i.jsx)(n.p,{children:"Triggered when an action within the pipeline has started to run."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "action.started",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "action": {\n      "attempts": null,\n      "createdAt": "...",\n      "duration": {\n        "secs": 0,\n        "nanos": 3591693\n      },\n      "error": null,\n      "label": "InstallNodeDeps(18.0.0)",\n      "nodeIndex": 5,\n      "status": "passed"\n    },\n    "node": {\n      "action": "InstallDeps",\n      "params": [\n        {\n          "platform": "Node",\n          "version": "18.0.0"\n        }\n      ]\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"actionfinished",children:(0,i.jsx)(n.code,{children:"action.finished"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadActionFinished"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when an action within the pipeline has finished running, either with a success or failure.\nIf the action failed, the ",(0,i.jsx)(n.code,{children:"error"})," field will be set with the error message."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "action.finished",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "action": {\n      "attempts": null,\n      "createdAt": "...",\n      "duration": {\n        "secs": 0,\n        "nanos": 3591693\n      },\n      "error": null,\n      "label": "InstallNodeDeps(18.0.0)",\n      "nodeIndex": 5,\n      "status": "passed"\n    },\n    "error": null,\n    "node": {\n      "action": "InstallDeps",\n      "params": {\n        "platform": "Node",\n        "version": "18.0.0"\n      }\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"dependenciesinstalling",children:(0,i.jsx)(n.code,{children:"dependencies.installing"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadDependenciesInstalling"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when dependencies for a workspace or project have started to install. When targeting a\nproject, the ",(0,i.jsx)(n.code,{children:"project"})," field will be set, otherwise ",(0,i.jsx)(n.code,{children:"null"})," for the entire workspace."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "dependencies.installing",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "project": {\n      "id": "server"\n      // ...\n    },\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"dependenciesinstalled",children:(0,i.jsx)(n.code,{children:"dependencies.installed"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadDependenciesInstalled"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when dependencies for a workspace or project have finished installing. When targeting a\nproject, the ",(0,i.jsx)(n.code,{children:"project"})," field will be set, otherwise ",(0,i.jsx)(n.code,{children:"null"})," for the entire workspace. If the install\nfailed, the ",(0,i.jsx)(n.code,{children:"error"})," field will be set with the error message."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about the action, refer to the ",(0,i.jsx)(n.a,{href:"#actionfinished",children:(0,i.jsx)(n.code,{children:"action.finished"})})," event.\nInstalled deps can be scoped with the ",(0,i.jsx)(n.code,{children:"InstallDeps(...)"})," labels."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "dependencies.installed",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "error": null,\n    "project": null,\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"projectsyncing",children:(0,i.jsx)(n.code,{children:"project.syncing"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadProjectSyncing"}),"\n",(0,i.jsx)(n.p,{children:"Triggered when an affected project has started syncing its workspace state. This occurs\nautomatically before a project's task is ran."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "project.syncing",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "project": {\n      "id": "client"\n      // ...\n    },\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"projectsynced",children:(0,i.jsx)(n.code,{children:"project.synced"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadProjectSynced"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when an affected project has finished syncing. If the sync failed, the ",(0,i.jsx)(n.code,{children:"error"})," field will\nbe set with the error message."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about the action, refer to the ",(0,i.jsx)(n.a,{href:"#actionfinished",children:(0,i.jsx)(n.code,{children:"action.finished"})})," event.\nSynced projects can be scoped with the ",(0,i.jsx)(n.code,{children:"SyncProject(...)"})," labels."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "project.synced",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "error": null,\n    "project": {\n      "id": "client"\n      // ...\n    },\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"toolinstalling",children:(0,i.jsx)(n.code,{children:"tool.installing"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadToolInstalling"}),"\n",(0,i.jsx)(n.p,{children:"Triggered when a tool within the toolchain has started downloading and installing."}),"\n",(0,i.jsxs)(n.p,{children:["This event is ",(0,i.jsx)(n.em,{children:"always"})," triggered, regardless of whether the tool has already been installed or not.\nFor an accurate state, use the ",(0,i.jsx)(n.a,{href:"#actionfinished",children:(0,i.jsx)(n.code,{children:"action.finished"})})," event. If the ",(0,i.jsx)(n.code,{children:"status"}),' is\n"skipped", then the tool was already installed.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "tool.installing",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"toolinstalled",children:(0,i.jsx)(n.code,{children:"tool.installed"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadToolInstalled"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when a tool within the toolchain has finished installing. If the install failed, the\n",(0,i.jsx)(n.code,{children:"error"})," field will be set with the error message."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about the action, refer to the ",(0,i.jsx)(n.a,{href:"#actionfinished",children:(0,i.jsx)(n.code,{children:"action.finished"})})," event.\nTools can be scoped with the ",(0,i.jsx)(n.code,{children:"SetupTool(...)"})," labels."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "tool.installed",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "error": null,\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"targetrunning",children:(0,i.jsx)(n.code,{children:"target.running"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadTargetRunning"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when a ",(0,i.jsx)(n.a,{href:"../concepts/target",children:"target"})," has started to run (via\n",(0,i.jsx)(n.a,{href:"../commands/run",children:(0,i.jsx)(n.code,{children:"moon run"})}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "target.running",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "target": "app:build"\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"targetran",children:(0,i.jsx)(n.code,{children:"target.ran"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadTargetRan"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when a ",(0,i.jsx)(n.a,{href:"../concepts/target",children:"target"})," has finished running. If the run failed, the ",(0,i.jsx)(n.code,{children:"error"}),"\nfield will be set with the error message."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about the action, refer to the ",(0,i.jsx)(n.a,{href:"#actionfinished",children:(0,i.jsx)(n.code,{children:"action.finished"})})," event. Ran\ntargets can be scoped with the ",(0,i.jsx)(n.code,{children:"RunTask(...)"}),", ",(0,i.jsx)(n.code,{children:"RunInteractiveTask(...)"}),", and\n",(0,i.jsx)(n.code,{children:"RunPersistentTask(...)"})," labels."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "target.ran",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "error": null,\n    "target": "app:build"\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"workspacesyncing",children:(0,i.jsx)(n.code,{children:"workspace.syncing"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadWorkspaceSyncing"}),"\n",(0,i.jsx)(n.p,{children:"Triggered when the workspace is being synced."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "workspace.syncing",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "target": "app:build"\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"workspacesynced",children:(0,i.jsx)(n.code,{children:"workspace.synced"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadWorkspaceSynced"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when the workspace has finished syncing. If the action failed, the ",(0,i.jsx)(n.code,{children:"error"})," field will be\nset with the error message."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "workspace.synced",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "error": null\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"targets",children:"Targets"}),"\n",(0,i.jsxs)(n.p,{children:["Targets to run. Each event contains a ",(0,i.jsx)(n.code,{children:"hash"})," field, that is a unique SHA-256 identifier for the the\ntarget's hashed contents."]}),"\n",(0,i.jsx)(n.h3,{id:"target-outputcache-check",children:(0,i.jsx)(n.code,{children:"target-output.cache-check"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadTargetOutputCacheCheck"}),"\n",(0,i.jsx)(n.p,{children:"Triggered when the pipeline is checking for a cached archive of the currently running target."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "target-output.cache-check",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "target": "app:build"\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"target-outputarchiving",children:(0,i.jsx)(n.code,{children:"target-output.archiving"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadTargetOutputArchiving"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when the ",(0,i.jsx)(n.a,{href:"../config/project#outputs",children:"outputs"})," of a task are being cached into a tarball\narchive. This archive will be stored within ",(0,i.jsx)(n.code,{children:".moon/cache/outputs"})," on the host machine."]}),"\n",(0,i.jsxs)(n.p,{children:["This event ",(0,i.jsx)(n.em,{children:"does not"})," trigger if the task has no ",(0,i.jsx)(n.code,{children:"outputs"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "target-output.archiving",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "project": {\n      "id": "app"\n      // ...\n    },\n    "target": "app:build",\n    "task": {\n      "id": "build"\n      // ...\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"target-outputarchived",children:(0,i.jsx)(n.code,{children:"target-output.archived"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadTargetOutputArchived"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when the ",(0,i.jsx)(n.a,{href:"../config/project#outputs",children:"outputs"})," of a task have been archived and stored in\nthe ",(0,i.jsx)(n.code,{children:".moon/cache/outputs"})," directory. The ",(0,i.jsx)(n.code,{children:"archivePath"})," field is an absolute path to this archive,\n",(0,i.jsx)(n.em,{children:"but"})," is unique to the host machine that the target ran on."]}),"\n",(0,i.jsxs)(n.p,{children:["This event ",(0,i.jsx)(n.em,{children:"does not"})," trigger if ",(0,i.jsx)(n.a,{href:"#targetoutputarchiving",children:(0,i.jsx)(n.code,{children:"target-output.archiving"})})," did not run or\nfailed to run."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "target-output.archived",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "archivePath": "...",\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "project": {\n      "id": "app"\n      // ...\n    },\n    "target": "app:build",\n    "task": {\n      "id": "build"\n      // ...\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"target-outputhydrating",children:(0,i.jsx)(n.code,{children:"target-output.hydrating"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadTargetOutputHydrating"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when a target has a cache hit for the generated hash (a cached archive exists on the local\nfile system) and the archive is being unpacked into the project directory at the defined\n",(0,i.jsx)(n.a,{href:"../config/project#outputs",children:"outputs"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This event ",(0,i.jsx)(n.em,{children:"does not"})," trigger if the task has no ",(0,i.jsx)(n.code,{children:"outputs"}),", or there was a cache miss (no matching\narchive)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "target-output.hydrating",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "project": {\n      "id": "app"\n      // ...\n    },\n    "target": "app:build",\n    "task": {\n      "id": "build"\n      // ...\n    }\n  },\n  "uuid": "..."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"target-outputhydrated",children:(0,i.jsx)(n.code,{children:"target-output.hydrated"})}),"\n",(0,i.jsx)(s.Z,{to:"/api/types#PayloadTargetOutputHydrated"}),"\n",(0,i.jsxs)(n.p,{children:["Triggered when a target has hydrated a project with the contents of a cached archive. The\n",(0,i.jsx)(n.code,{children:"archivePath"})," field is an absolute path to this archive, ",(0,i.jsx)(n.em,{children:"but"})," is unique to the host machine that\nthe target ran on."]}),"\n",(0,i.jsxs)(n.p,{children:["This event ",(0,i.jsx)(n.em,{children:"does not"})," trigger if ",(0,i.jsx)(n.a,{href:"#targetoutputhydrating",children:(0,i.jsx)(n.code,{children:"target-output.hydrating"})})," did not run or\nfailed to run."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "target-output.hydrated",\n  "createdAt": "...",\n  "environment": "...",\n  "event": {\n    "archivePath": "...",\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "project": {\n      "id": "app"\n      // ...\n    },\n    "target": "app:build",\n    "task": {\n      "id": "build"\n      // ...\n    }\n  },\n  "uuid": "..."\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},32189:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(83469),r=t(31792),s=t(24246);function d(e){let{to:n}=e;return(0,s.jsx)("a",{href:n,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"},children:(0,s.jsx)(r.Z,{icon:i.dT$})})}},71670:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var i=t(27378);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);