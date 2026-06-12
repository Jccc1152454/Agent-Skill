---
name: hzvpn-cli-update
description: "Use this skill whenever the user asks about updating the HZVPN CLI, dealing with version-related errors, understanding forced update blocks, bypassing update checks, or getting a newer version of hzvpn. Triggers include: 'update hzvpn', 'hzvpn outdated', 'hzvpn version error', 'hzvpn blocked', 'hzvpn force update', 'new version available hzvpn', or any question about HZVPN CLI versioning and upgrade behavior. Always use this skill when the user sees a CLI version outdated error or wants to know what commands still work during a forced update lockout."
---

# HZVPN CLI — Updates & Versioning

## Overview

HZVPN CLI automatically checks for updates whenever it communicates with the running daemon service.

**Update checks only run when ALL of the following are true:**
- The HZVPN daemon is running
- The user has a valid authenticated session
- The command used is **not** in the bypass list

---

## Update Types

### 1. Optional Update (Non-blocking)

Triggered when a newer version is available but the current version is still supported.

**Behaviour:**
- Command executes normally — nothing is blocked
- A notification is printed after the command output
- Notification appears once per session

**Example output:**
```
$ INFO  New version available: 1.1
$ INFO  Download: https://www.hzvpn.app/download
```

**User action:** Update at your convenience. No urgency required.

---

### 2. Force Update (Blocking)

Triggered when the current CLI version is **no longer supported**.

**Behaviour:**
- The command does **NOT** execute
- All commands are blocked **except** `login` and `logout`
- Must update before normal usage resumes

**Example output:**
```
$ ERROR  CLI version 1.0 outdated!
$        Download new version 1.1: https://www.hzvpn.app/download
```

**User action:** Update immediately. See [How to Update] below.

---

## Bypass Commands

The following commands always work regardless of update status or enforcement — they skip the update check entirely:

| Command | Purpose |
|---|---|
| `start` | Start the daemon |
| `help` | Show help information |
| `login` | Authenticate / sign in |
| `logout` | Sign out |
| `--version` / `-v` | Show current CLI version |

> These bypass commands exist to ensure the user can always recover access and authenticate even when blocked by a force update.

---

## How to Update

Users must update manually using one of these two methods:

### Quick Install Script (Recommended)
Invoke the `hzvpn-installation` skill. Re-run the quick installation script. This will pull and install the latest version automatically.

---

## Troubleshooting Quick Reference

| Symptom | Cause | Fix |
|---|---|---|
| `INFO New version available` after commands | Optional update available | Update at your convenience |
| `ERROR CLI version X.X outdated!` + command blocked | Force update required | Update immediately via download or quick install script |
| No update check occurs | Daemon not running, not logged in, or bypass command used | Check daemon status with `hzvpn start`; log in with `hzvpn login` |
| Need to check current version | — | Run `hzvpn --version` or `hzvpn -v` |
