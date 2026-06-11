---
name: hzvpn-cli-utility
description: Use this skill when the user asks about general HZVPN CLI utilities — listing all commands, checking the installed version, or uninstalling HZVPN.
---

# HZVPN CLI — Utility Commands

General-purpose commands that work without the daemon running.

---

## HZVPN-cli help command
Run this command to show all available HZVPN CLI commands. Run this command when the command is failed to check for available commands.

```bash
hzvpn help
```

---

## Check HZVPN-CLI version
Run this command to display the currently installed CLI version.

```bash
hzvpn --version
```

---

## Uninstall HZVPN-CLI
Run this command to uninstall HZVPN CLI from the system.

```bash
hzvpn uninstall
```

> ⚠️ This permanently removes **all local configuration and settings**.

---

## Summary

| Command            | Effect                                              |
|--------------------|-----------------------------------------------------|
| `hzvpn help`       | List all available commands                         |
| `hzvpn --version`  | Show installed CLI version                          |
| `hzvpn uninstall`  | Remove HZVPN CLI and all local config permanently   |
