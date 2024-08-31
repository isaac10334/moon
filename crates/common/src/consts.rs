#[cfg(windows)]
pub const BIN_NAME: &str = "moon.exe";

#[cfg(not(windows))]
pub const BIN_NAME: &str = "moon";

pub const CONFIG_DIRNAME: &str = ".moon";

pub const CONFIG_WORKSPACE_FILENAME_YML: &str = "workspace.yml";
pub const CONFIG_WORKSPACE_FILENAME_PKL: &str = "workspace.pkl";

pub const CONFIG_TASKS_FILENAME_YML: &str = "tasks.yml";
pub const CONFIG_TASKS_FILENAME_PKL: &str = "tasks.pkl";

pub const CONFIG_PROJECT_FILENAME_YML: &str = "moon.yml";
pub const CONFIG_PROJECT_FILENAME_PKL: &str = "moon.pkl";

pub const PROTO_CLI_VERSION: &str = "0.41.3";
