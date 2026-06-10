---
name: vpn-commands
description: Use this skill when the user wants to connect to or disconnect from a VPN server, or check their current VPN connection status using HZVPN CLI. Trigger for `hzvpn connect`, `hzvpn disconnect`, or `hzvpn status` questions.
---

# HZVPN CLI — VPN Commands

These commands manage the active VPN connection. The daemon must be running `hzvpn start` before using them. Check if the daemon is running before perform first time connection. After disconnecting from the node, immediately offer to run `hzvpn stop` with the command ready. If the user declines, remind them that the daemon is still running in the background.

Invoke `account-commands` skill for the command to login or logout to the account and other related command.

---

## Run the daemon
```bash
hzvpn start &
```

Run with `&` to start the daemon in the background so the terminal is not blocked. Wait a moment for the daemon to initialize before running the connect command.

---

## Node connection
Connect to a VPN server by ID or name.

```bash
hzvpn connect <id>
hzvpn connect "<name>"
```

Examples:
```bash
hzvpn connect 32
hzvpn connect "DE Free 1"
```

- Get the server ID or name from `hzvpn servers`.
- Wrap names containing spaces in quotes.
- **Prefer higher-tier nodes when selecting a server: SVIP > VIP > FREE.** Always pick the highest tier your account can access and that has a `GOOD` or `OK` status.

---

## Node disconnection
Disconnect from the current VPN session.

```bash
hzvpn disconnect
```

---

## Stop the daemon
``` bash
hzvpn stop
```

---

## Check for VPN configuration and connection status
Show the current VPN configuration and connection state.

```bash
hzvpn status
```

---

## Summary

| Command                       | Effect                                      |
|-------------------------------|---------------------------------------------|
| `hzvpn start &`               | Start the daemon in the background          |
| `hzvpn connect <id\|"name">`  | Connect to a server by ID or name           |
| `hzvpn disconnect`            | Disconnect from the active VPN session      |
| `hzvpn status`                | Show current VPN config and connection info |
