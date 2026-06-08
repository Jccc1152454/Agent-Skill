# HZVPN CLI — Quick Start Skill

## Trigger Conditions

Use this skill when the user asks about:
- Getting started with HZVPN CLI after installation
- What to do first after installing HZVPN
- How to connect to a VPN server for the first time
- Quick start / first-time setup guide for HZVPN
- What commands are available in HZVPN CLI

---

## Overview

HZVPN CLI works through a local background daemon. Every command you run communicates with that daemon via IPC — the daemon is what actually manages the VPN tunnel, server connections, and network settings.

> **Important:** The daemon must be running (`hzvpn start`) before most VPN commands will work.

---

## Command Categories (What You Can Do)

| Category          | Commands                              | Purpose                                      |
|-------------------|---------------------------------------|----------------------------------------------|
| Daemon Commands   | `start`, `stop`, `status`             | Control the background service               |
| VPN Commands      | `connect`, `disconnect`               | Manage VPN connections                       |
| Server Commands   | `servers`                             | Browse and select available servers          |
| Account Commands  | `login`, `logout`, `profile`, `upgrade` | Authentication and subscription management |
| Utility Commands  | `help`, `--version`, `uninstall`      | General tools                                |

---

## Typical First-Time Flow

Follow these 4 steps in order after installation:

### Step 1 — Start the daemon
Open a terminal and run:
```bash
hzvpn start
```
Keep this terminal open. The daemon must stay running.

### Step 2 — Log in
Open a **second terminal** and run:
```bash
hzvpn login
```
This opens a browser window to authenticate your HZVPN account.

### Step 3 — View available servers
```bash
hzvpn servers
```
Lists all servers you have access to, grouped by region, with their ID, name, level, and status.

### Step 4 — Connect to a server
```bash
hzvpn connect <id|"name">
```
Use the server ID or name from the list. Example:
```bash
hzvpn connect 32
hzvpn connect "US Free 1"
```

> **Tip:** Keep the daemon running in a dedicated terminal tab so it stays alive while you use commands freely in another tab.
