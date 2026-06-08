# HZVPN CLI — Daemon Commands Skill

## Trigger Conditions

Use this skill when the user asks about:
- How to start the HZVPN daemon
- How to stop the HZVPN daemon
- `hzvpn start` or `hzvpn stop` commands
- The HZVPN background service not running
- Restarting or shutting down HZVPN

---

## Overview

Daemon commands control the HZVPN background service. The daemon is responsible for managing all VPN connections and **must be running** for most features to work.

---

## Commands

### Start Daemon

Starts the HZVPN background service.

```bash
hzvpn start
```

- Once started, the daemon runs in the background and listens for CLI commands from any terminal session
- Only needs to be started **once** per session
- Keep the terminal running `hzvpn start` open — closing it stops the daemon

> **Tip:** You can configure the daemon to run as a background service so it starts automatically at boot.

---

### Stop Daemon

Stops the running HZVPN daemon and terminates all active VPN sessions.

```bash
hzvpn stop
```

> ⚠️ **Caution:** Stopping the daemon will **disconnect all active VPN sessions** immediately.

---

## Summary

| Command        | What it does                                              |
|----------------|-----------------------------------------------------------|
| `hzvpn start`  | Starts the background daemon — required before VPN use   |
| `hzvpn stop`   | Stops the daemon and disconnects all active VPN sessions  |
