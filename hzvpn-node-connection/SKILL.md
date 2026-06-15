---
name: hzvpn-node-connection
description: Use this skill when the user wants to connect to a VPN node, disconnect from the current VPN, or check their active VPN connection status via HZVPN CLI. Handles the full connection flow — daemon startup, account login, server selection by region or auto-pick, and status checks. Trigger for any mention of `hzvpn connect`, `hzvpn disconnect`, `hzvpn status`, "connect to VPN", "change node", or "switch server".
---

# HZVPN CLI — Node Connection

Follow these steps to connect the user to a VPN node.

---

## Step 1 — Start the daemon in the background

The daemon must run in the background so Claude Code can continue receiving input. Run:

```bash
hzvpn start &
```

Keep this terminal open for the entire session. The daemon must stay running for all VPN features to work.

---

## Step 2 — Log in to HZVPN account

To connect to a VPN node, the user must be logged in. Run:

```bash
hzvpn login
```

A browser window will open. Ask the user to paste the verification code shown in the browser back into the terminal to complete login.

> Skip this step if the user is already logged in.

---

## Step 3 — Ask the user about region preference

Use the `AskUserQuestion` tool to ask:

**Question:** "Do you have a specific region you'd like to connect to, or would you like me to pick any available node for you?"

**Options:**
- **Specific region** — The user has a preferred country or location in mind.
- **Any region (random)** — Connect to any node with good performance automatically.

---

## Step 4 — List available servers

```bash
hzvpn servers
```

This shows all accessible servers. Each entry includes an **ID**, **name**, access **level** (FREE / VIP / SVIP), and **status** (GOOD / LOW / DOWN).

**Server selection priority:** SVIP > VIP > FREE. Always pick the highest tier your plan allows.

---

## Step 5 — Connect to a server

**If the user chose a specific region:**
- Filter the server list for nodes matching the requested region.
- From the matching nodes, pick the one with the best status (`GOOD` preferred over `LOW`) and highest tier (SVIP > VIP > FREE).
- If no matching region is found, inform the user and suggest the closest available alternative.

**If the user chose any region (random):**
- Automatically select the node with `GOOD` status and the highest access tier available to the user.
- No further input needed — connect immediately.

Connect using the selected server's ID:

```bash
hzvpn connect <server-id>
```

Confirm the connection succeeded:

```bash
hzvpn status
```

---

## Disconnect

```bash
hzvpn disconnect
```

---

## Connection Configuration

Invoke `hzvpn-connection-configuration` if the user wants to modify routing mode, connection method (proxy / tun2proxy), DNS settings, or ad blocking.

---