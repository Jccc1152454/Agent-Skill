---
name: hzvpn-daemon
description: Use this skill when the user asks about starting or stopping the HZVPN daemon, or uses `hzvpn start &` / `hzvpn stop`. Trigger when the user asks why VPN commands aren't working, how to restart HZVPN, or anything about the HZVPN background service.
---

# HZVPN CLI — Daemon Commands

The daemon is the background process that powers all VPN features. It must be running before any VPN commands will work. The daemon must be run in the background to prevent claude code stops receving input from the user.

---

## Start the hzvpn-cli daemon in the background
Starts the background daemon.

```bash
hzvpn start &
```

The daemon has to be run in the background when the user want to continue to using hzvpn-cli.

---

## Stop the hzvpn-cli daemon
Stops the running daemon.

```bash
hzvpn stop
```

> ⚠️ This immediately **disconnects all active VPN sessions**.

---

## Summary

| Command        | Effect                                                   |
|----------------|----------------------------------------------------------|
| `hzvpn start &`  | Starts the daemon — required before any VPN features     |
| `hzvpn stop`   | Stops the daemon and drops all active VPN connections    |
