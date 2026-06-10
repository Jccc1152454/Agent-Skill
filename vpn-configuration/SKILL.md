---
name: vpn-configuration
description: Use this skill when the user wants to configure HZVPN CLI behaviour — routing mode, connection method, DNS, or ad blocking. Trigger for any `hzvpn set` question, split-tunneling, tun2proxy, proxy mode, local DNS, or ad blocking settings in HZVPN.
---

# HZVPN CLI — VPN Configuration

Use `hzvpn set` to configure how the VPN routes traffic, handles DNS, and filters ads. Settings apply immediately through the running daemon.

---

## Routing Mode (`--mode`)
Controls which traffic is sent through the VPN.

```bash
hzvpn set --mode global       # all traffic goes through VPN
hzvpn set --mode intelligent  # only selected traffic (split-tunnel)
```

| Value         | Behaviour                                   |
|---------------|---------------------------------------------|
| `global`      | Every request routes through the VPN        |
| `intelligent` | Only specific traffic uses the VPN tunnel   |

---

## Connection Route (`--route`)
Sets the underlying tunneling method. No sudo is required to change the connection route.

```bash
hzvpn set --route proxy      # standard system proxy
hzvpn set --route tun2proxy  # virtual network interface (enhanced tunnel)
```

| Value       | Description                                               | Admin required?                        |
|-------------|-----------------------------------------------------------|----------------------------------------|
| `proxy`     | Uses system proxy settings                                | macOS: **yes** · Windows/Linux: **no** |
| `tun2proxy` | Creates a virtual NIC; routes all app traffic through it  | **All platforms: yes**                 |

Use `tun2proxy` for apps that ignore system proxy settings. It requires elevated privileges because it modifies virtual adapters and routing tables at the OS level.

---

## DNS (`--local-dns`)
Controls which DNS servers resolve queries.

```bash
hzvpn set --local-dns true   # use local system DNS
hzvpn set --local-dns false  # use VPN-provided DNS
```

---

## Ad Blocking (`--ads-block`)
Toggles the built-in ad blocker.

```bash
hzvpn set --ads-block true   # enable
hzvpn set --ads-block false  # disable
```

---

## Summary

| Command                          | Effect                                       |
|----------------------------------|----------------------------------------------|
| `hzvpn set --mode global`        | Route all traffic through VPN                |
| `hzvpn set --mode intelligent`   | Route only selected traffic (split-tunnel)   |
| `hzvpn set --route proxy`        | Standard proxy routing                       |
| `hzvpn set --route tun2proxy`    | Enhanced tunnel (requires admin/root)        |
| `hzvpn set --local-dns true`     | Use local system DNS                         |
| `hzvpn set --local-dns false`    | Use VPN DNS servers                          |
| `hzvpn set --ads-block true`     | Enable ad blocking                           |
| `hzvpn set --ads-block false`    | Disable ad blocking                          |

> **Tip:** For best privacy, combine `intelligent` mode with ad blocking enabled.
