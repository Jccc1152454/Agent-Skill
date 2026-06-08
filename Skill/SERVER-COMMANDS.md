# HZVPN CLI — Server Commands Skill

## Trigger Conditions

Use this skill when the user asks about:
- How to list available VPN servers in HZVPN CLI
- `hzvpn servers` command
- Understanding the server list output (region, status, level)
- Which servers they can access based on their account plan
- How to pick the best server to connect to

---

## Overview

Server commands let you view all available VPN servers. Availability depends on your **account role** and **real-time server status**.

---

## List Servers

Fetch and display all available servers grouped by country.

```bash
hzvpn servers
```

What this command does:
- Fetches the server list from the VPN service
- Filters servers based on your account role
- Groups servers by country/region
- Shows real-time server status for each node

---

## Understanding the Server Output

### Region
Servers are grouped by country. Each region may contain multiple nodes.

- Choosing a region **closer to your location** reduces latency and improves stability
- Some regions may be unavailable depending on your account role

---

### Roles (Access Levels)
Each server has a required access level. You only see servers you're eligible for.

| Role  | Server Access                  |
|-------|--------------------------------|
| Free  | Free servers only              |
| VIP   | Free + VIP servers             |
| SVIP  | All servers                    |

> ⚠️ **Caution:** Attempting to connect to a server above your plan tier will fail — even if you know the server name or ID.

---

### Status (Health Indicator)
Each server displays a real-time health status.

| Status    | Meaning                                          |
|-----------|--------------------------------------------------|
| `GOOD` / `OK` | Fully operational — best choice              |
| `LOW`     | Increased latency or partial performance issues  |
| `DOWN`    | Unavailable or under maintenance                 |

Status is derived from:
- Connectivity checks
- Ping latency monitoring
- Service health validation

---

## Choosing the Best Server

> **Tips for best performance:**
> - Pick a region **geographically closest** to your location
> - Always prefer servers with **GOOD / OK** status
> - If a server is under load, switch to a higher-tier server if your plan allows
