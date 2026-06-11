---
name: hzvpn-node-connection
description: Use this skill when the user wants to connect to or disconnect from a VPN server, or check their current VPN connection status using HZVPN CLI. Trigger for `hzvpn connect`, `hzvpn disconnect`, or `hzvpn status` questions.
---

# HZVPN CLI — Node Connection

Follow these steps to connect the user to VPN node.

---

## Step 1 — Start the daemon at the background
The daemon must be run in the background to prevent claude code stops receving input from the user. Run this command to run the daemon at background.
```bash
hzvpn start &
```
Keep this terminal open. The daemon must stay running for all VPN features to work.

---

## Step 2 — Log in HZVPN account
To connect to VPN node, the user has to login HZVPN in the HZVPN-cli. Run this command for account login:
```bash
hzvpn login
```
A browser window opens. The user has to paste the verification code to the terminal to login.

---

## Step 3 — List available servers
```bash
hzvpn servers
```
Shows all servers you have access to. Each entry shows an **ID**, **name**, access **level** (FREE / VIP / SVIP), and **status** (GOOD / LOW / DOWN).

When picking a server, prefer higher-tier nodes: **SVIP > VIP > FREE**. Always choose the highest tier your plan allows with a `GOOD` or `OK` status.

---

## Step 4 — Connect to a server
Invoke the `vpn-commands` skill for connecting, disconnecting, checking status, and stopping the daemon.

---

## Recommended Workflow

Use two separate terminals:

**Terminal 1 — keep the daemon alive**
```bash
hzvpn start &
```

**Terminal 2 — run all commands freely**
```bash
hzvpn login # login to hzvpn account
# then follow vpn-commands skill to connect
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
