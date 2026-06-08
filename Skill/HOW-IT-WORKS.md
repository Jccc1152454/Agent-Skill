# HZVPN CLI — How It Works Skill

## Trigger Conditions

Use this skill when the user asks about:
- How HZVPN CLI works internally
- What is the HZVPN daemon and why it's needed
- How CLI commands communicate with the VPN engine
- Daemon lifecycle (start, stop, behavior)
- Recommended workflow / terminal setup for HZVPN

---

## How It Works — Overview

HZVPN CLI uses a **daemon + client architecture**.

- A persistent background **daemon** manages VPN connections, routing, and privileged network operations
- Each CLI command you run is a **client** that talks to the daemon over a local IPC channel
- The CLI never interacts with the VPN engine directly — it always goes through the daemon

```
┌─────────────────────┐       TCP / IPC        ┌───────────────────────┐
│   hzvpn <command>   │ ◄────────────────────  │      hzvpn start      │
│   (client process)  │                        │    (daemon process)   │
└─────────────────────┘                        └───────────────────────┘
                                                         │
                                               ┌─────────▼─────────┐
                                               │        VPN        │
                                               └───────────────────┘
```

---

## Starting the Daemon

Before using any VPN features, the daemon must be started:

```bash
hzvpn start
```

- This launches the daemon and keeps it running in that terminal session
- The daemon only needs to be started **once** — after that, commands from **any** terminal session will reach it

---

## Daemon Behavior

| Behavior | Detail |
|----------|--------|
| Must stay running | VPN features are unavailable if the daemon stops |
| Terminal-bound | Closing the terminal running `hzvpn start` **stops the daemon** |
| Single instance | Only one daemon instance needed; all CLI commands share it |
| Partial commands | Some non-VPN commands may work without the daemon, but VPN features won't |

> **Tip:** For long-running usage, keep the daemon in a **dedicated terminal tab** so you don't accidentally close it.

> **Automatic Startup:** You can configure the daemon to run as a background service so it starts automatically at boot.

---

## Recommended Workflow

Always use **two separate terminals**:

**Terminal 1 — Start and keep the daemon running**
```bash
hzvpn start
```

**Terminal 2 — Run all your CLI commands**
```bash
hzvpn servers
hzvpn connect 32
hzvpn disconnect
```

This way the daemon stays alive while you work freely in Terminal 2.
