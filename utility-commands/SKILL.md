---
name: utility-commands
description: Use this skill when the user asks about general HZVPN CLI utilities — listing all commands, checking the installed version, or uninstalling HZVPN. Trigger for `hzvpn help`, `hzvpn --version`, or `hzvpn uninstall`.
---

# HZVPN CLI — Utility Commands

General-purpose commands that work without the daemon running.

---

## `hzvpn help`
Show all available HZVPN CLI commands.

```bash
hzvpn help
```

---

## `hzvpn --version`
Display the currently installed CLI version.

```bash
hzvpn --version
```

---

## `hzvpn uninstall`
Remove HZVPN CLI from the system.

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
