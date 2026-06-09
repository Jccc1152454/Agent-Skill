---
name: daemon-commands
description: Use this skill when the user asks about starting or stopping the HZVPN daemon, or uses `hzvpn start` / `hzvpn stop`. Trigger when the user asks why VPN commands aren't working, how to restart HZVPN, or anything about the HZVPN background service.
---

# HZVPN CLI — Daemon Commands

The daemon is the background process that powers all VPN features. It must be running before any VPN commands will work.

---

## `hzvpn start`
Starts the background daemon.

```bash
hzvpn start
```

- Start this once per session — it serves all terminal sessions from that point on.
- Keep the terminal running this command open. Closing it stops the daemon.

---

## `hzvpn stop`
Stops the running daemon.

```bash
hzvpn stop
```

> ⚠️ This immediately **disconnects all active VPN sessions**.

---

## Summary

| Command        | Effect                                                   |
|----------------|----------------------------------------------------------|
| `hzvpn start`  | Starts the daemon — required before any VPN features     |
| `hzvpn stop`   | Stops the daemon and drops all active VPN connections    |
