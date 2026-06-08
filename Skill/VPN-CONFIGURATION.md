# HZVPN CLI — VPN Configuration Commands Skill

## Trigger Conditions

Use this skill when the user asks about:
- Configuring VPN behavior in HZVPN CLI
- `hzvpn set` command and its options
- Changing VPN mode (global vs intelligent/split-tunnel)
- Changing connection route (proxy vs tun2proxy)
- Setting DNS to local or VPN-provided
- Enabling or disabling ad blocking in HZVPN

---

## Overview

The `hzvpn set` command configures VPN behavior — routing mode, connection method, DNS, and ad blocking. All settings are applied **immediately** through the running daemon.

---

## 1. Set VPN Mode

Define how HZVPN routes traffic.

```bash
hzvpn set --mode <global|intelligent>
```

| Value         | Behaviour                                      |
|---------------|------------------------------------------------|
| `global`      | Routes **all** traffic through the VPN         |
| `intelligent` | Routes only **selected** traffic through the VPN (split-tunnel) |

---

## 2. Set Connection Route

Choose the underlying connection method used by the VPN engine.

```bash
hzvpn set --route <proxy|tun2proxy>
```

| Value        | Description                                                                 | Admin Required?                          |
|--------------|-----------------------------------------------------------------------------|------------------------------------------|
| `proxy`      | Standard proxy routing using system proxy configuration                     | macOS: **Yes** · Windows/Linux: **No**   |
| `tun2proxy`  | Enhanced tunnel — creates a virtual network interface, routes all app traffic | **All platforms: Yes**                 |

> **Note:** `tun2proxy` requires elevated permissions because it modifies system-level networking (virtual adapters, routing tables, packet forwarding).
> Recommended for apps that **don't respect system proxy settings**.

---

## 3. Set Local DNS

Control whether DNS queries go through local or VPN-provided DNS.

```bash
hzvpn set --local-dns <true|false>
```

| Value   | Behaviour                  |
|---------|----------------------------|
| `true`  | Use local system DNS       |
| `false` | Use VPN DNS servers        |

---

## 4. Enable / Disable Ad Blocking

Toggle the built-in ad blocker.

```bash
hzvpn set --ads-block <true|false>
```

| Value   | Behaviour              |
|---------|------------------------|
| `true`  | Enable ad blocking     |
| `false` | Disable ad blocking    |

> **Tip:** For best privacy, use `intelligent` mode and enable ad blocking together:
> ```bash
> hzvpn set --mode intelligent
> hzvpn set --ads-block true
> ```

---

## Summary

| Command                            | What it does                                  |
|------------------------------------|-----------------------------------------------|
| `hzvpn set --mode global`          | Route all traffic through VPN                 |
| `hzvpn set --mode intelligent`     | Route only selected traffic (split-tunnel)    |
| `hzvpn set --route proxy`          | Use standard system proxy routing             |
| `hzvpn set --route tun2proxy`      | Use enhanced tunnel mode (needs admin/root)   |
| `hzvpn set --local-dns true`       | Use local system DNS                          |
| `hzvpn set --local-dns false`      | Use VPN-provided DNS                          |
| `hzvpn set --ads-block true`       | Enable built-in ad blocking                   |
| `hzvpn set --ads-block false`      | Disable built-in ad blocking                  |
