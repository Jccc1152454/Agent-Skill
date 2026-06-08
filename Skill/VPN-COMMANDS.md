# HZVPN CLI — VPN Commands Skill

## Trigger Conditions

Use this skill when the user asks about:
- How to connect to a VPN server using HZVPN CLI
- How to disconnect from the VPN
- How to check VPN connection status or configuration
- `hzvpn connect`, `hzvpn disconnect`, or `hzvpn status` commands

---

## Overview

VPN commands control your VPN connection through the running daemon. The daemon must be started with `hzvpn start` before any of these commands will work.

---

## Commands

### Connect

Connect to a VPN server by its ID or name.

```bash
hzvpn connect <id|"name">
```

Examples:
```bash
hzvpn connect 32
hzvpn connect "DE Free 1"
```

> **Tip:** If the server name contains spaces, always wrap it in quotes.
> Use `hzvpn servers` first to get the ID or name of the server you want.

---

### Disconnect

Disconnect from the current VPN session.

```bash
hzvpn disconnect
```

---

### Status

View current VPN configuration and connection status.

```bash
hzvpn status
```

---

## Summary

| Command                        | What it does                                         |
|--------------------------------|------------------------------------------------------|
| `hzvpn connect <id\|"name">`  | Connect to a server by ID or name                   |
| `hzvpn disconnect`             | Disconnect from the active VPN session              |
| `hzvpn status`                 | View current VPN configuration and connection status |
