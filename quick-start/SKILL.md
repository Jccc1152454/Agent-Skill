---
name: quick-start
description: Use this skill when the user has just installed HZVPN CLI and wants to get connected for the first time, or asks what to do after installation. Trigger for any "getting started", "first steps", or "how do I use this" questions about HZVPN CLI.
---

# HZVPN CLI — Quick Start

Follow these steps in order after installation to get connected.

---

## Step 1 — Start the daemon
The daemon must be run in the background to prevent claude code stops receving input from the user.
Open a terminal and run:
```bash
hzvpn start &
```
Keep this terminal open. The daemon must stay running for all VPN features to work.

---

## Step 2 — Log in
Open a **second terminal** and authenticate:
```bash
hzvpn login
```
A browser window opens. Log in or create an account.

---

## Step 3 — List available servers
```bash
hzvpn servers
```
Shows all servers you have access to. Each entry shows an **ID**, **name**, access **level** (FREE / VIP / SVIP), and **status** (GOOD / LOW / DOWN).

---

## Step 4 — Connect
```bash
hzvpn connect <id>
# or
hzvpn connect "Server Name"
```
Use the ID or name from Step 3. Wrap names that contain spaces in quotes.

---

## Recommended Workflow

Use two separate terminals:

**Terminal 1 — keep the daemon alive**
```bash
hzvpn start &
```

**Terminal 2 — run all commands freely**
```bash
hzvpn login
hzvpn servers
hzvpn connect 32
```

Keep Terminal 1 open for the entire session. Never close it while the VPN is in use.

## Available Command Categories

| Category      | Commands                                        |
|---------------|-------------------------------------------------|
| Daemon        | `start`, `stop`                                 |
| VPN           | `connect`, `disconnect`, `status`               |
| Configuration | `set --mode`, `--route`, `--local-dns`, `--ads-block` |
| Servers       | `servers`                                       |
| Account       | `login`, `logout`, `devices`, `profile`, `upgrade` |
| Utility       | `help`, `--version`, `uninstall`                |
