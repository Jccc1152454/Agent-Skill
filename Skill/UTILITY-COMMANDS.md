# HZVPN CLI — Utility Commands Skill

## Trigger Conditions

Use this skill when the user asks about:
- How to see all available HZVPN commands
- How to check the installed HZVPN CLI version
- How to uninstall HZVPN CLI
- `hzvpn help`, `hzvpn --version`, or `hzvpn uninstall` commands

---

## Overview

Utility commands provide general information and system-level operations. They work independently and do not require the daemon to be running.

---

## Commands

### Help

Show all available HZVPN CLI commands.

```bash
hzvpn help
```

---

### Version

Display the currently installed CLI version.

```bash
hzvpn --version
```

---

### Uninstall

Remove HZVPN CLI from your system.

```bash
hzvpn uninstall
```

> ⚠️ **Caution:** Uninstalling HZVPN will remove **all local configuration and settings** permanently.

---

## Summary

| Command            | What it does                                          |
|--------------------|-------------------------------------------------------|
| `hzvpn help`       | Show all available commands                           |
| `hzvpn --version`  | Display the installed CLI version                     |
| `hzvpn uninstall`  | Remove HZVPN CLI and all local config from the system |
