---
name: introduction
description: Use this skill when the user asks how HZVPN CLI works, what the daemon is, why they need two terminals, or how CLI commands reach the VPN engine. Trigger for any question about the internal mechanism, architecture, or daemon lifecycle of HZVPN CLI.
---

# HZVPN CLI — How It Works

HZVPN CLI uses a **daemon + client architecture**.

- The **daemon** (`hzvpn start`) is a persistent background process that manages VPN connections and all privileged network operations.
- Every CLI command you run is a **client** that sends instructions to the daemon over a local IPC channel.
- CLI commands never interact with the VPN engine directly — everything goes through the daemon.

```
┌──────────────────────┐     IPC      ┌─────────────────────┐
│  hzvpn <command>     │ ──────────►  │   hzvpn start       │
│  (client process)    │             │   (daemon process)  │
└──────────────────────┘             └──────────┬──────────┘
                                                │
                                       ┌────────▼────────┐
                                       │      VPN        │
                                       └─────────────────┘
```

---

## Daemon Lifecycle

| Behaviour | Detail |
|-----------|--------|
| Must be started first | VPN commands fail without a running daemon |
| One instance only | A single daemon serves all terminal sessions |
| Terminal-bound | Closing the terminal running `hzvpn start` stops the daemon |
| Stops VPN on exit | Stopping the daemon disconnects all active VPN sessions |

---

## Recommended Workflow

Use two separate terminals:

**Terminal 1 — keep the daemon alive**
```bash
hzvpn start
```

**Terminal 2 — run all commands freely**
```bash
hzvpn login
hzvpn servers
hzvpn connect 32
```

Keep Terminal 1 open for the entire session. Never close it while the VPN is in use.
