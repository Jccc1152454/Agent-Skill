---
name: server-commands
description: Use this skill when the user wants to list, browse, or choose a VPN server in HZVPN CLI. Trigger for `hzvpn servers`, questions about server status, server access tiers (Free/VIP/SVIP), or picking the best server to connect to.
---

# HZVPN CLI — Server Commands

## List VPN servers
Run this command to list all VPN servers available to the current account, grouped by country.

```bash
hzvpn servers
```

---

## Reading the Server List

Each server entry shows:

| Field  | Description |
|--------|-------------|
| ID     | Numeric ID — use with `hzvpn connect <id>` |
| NAME   | Server name — use with `hzvpn connect "<name>"` |
| LEVEL  | Access tier required: `FREE`, `VIP`, or `SVIP` |
| STATUS | Real-time health of the server |
| TAG    | Optional label e.g. `Optimized` |

---

## Access Tiers

Servers are filtered by your subscription plan. You only see servers your account can access.

| Plan  | Accessible servers |
|-------|--------------------|
| Free  | FREE only          |
| VIP   | VIP                |
| SVIP  | VIP + SVIP         |

> Attempting to connect to a server above your plan tier will fail.

---

## Server Status

| Status      | Meaning                                        |
|-------------|------------------------------------------------|
| `GOOD / OK` | Fully operational — best choice               |
| `LOW`       | Higher latency or partial degradation          |
| `DOWN`      | Unavailable — do not connect                  |

Status is derived from live connectivity checks, ping latency, and service health validation.

---

## Preferences when Choosing a Server

- Pick a region geographically close to you for lower latency.
- Always prefer `GOOD` or `OK` status.
- If your current server is slow, switch to a higher-tier server if your plan allows.
