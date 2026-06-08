# HZVPN CLI — Account Commands Skill

## Trigger Conditions

Use this skill when the user asks about:
- How to log in or log out of HZVPN CLI
- Managing devices registered to their account
- Viewing account/profile details
- Upgrading their subscription plan
- `hzvpn login`, `hzvpn logout`, `hzvpn devices`, `hzvpn profile`, `hzvpn upgrade` commands
- Device limit issues when logging in on a new device

---

## Overview

Account commands manage authentication and subscription settings. Most of these require the user to be **logged in** to work.

---

## Commands

### Login

Authenticate your HZVPN account. Opens a browser window for authentication.

```bash
hzvpn login
```

> **Note:** You can log in with an existing account or create a new one via the official website or the mobile/desktop apps.

---

### Logout

Sign out of your current account session.

```bash
hzvpn logout
```

---

### Devices

List all devices currently registered to your account. The current device is marked with `*`.

```bash
hzvpn devices
```

#### Remove a Device

Remove a registered device by its list number.

```bash
hzvpn device remove <number>
```

**Device limits by subscription plan:**

| Plan  | Max Devices |
|-------|-------------|
| Free  | 1 device    |
| VIP   | 3 devices   |
| SVIP  | 5 devices   |

> **Tip:** If you hit the device limit when logging in on a new device, HZVPN will show your registered devices and ask you to remove one before continuing.

---

### Profile

View your account details.

```bash
hzvpn profile
```

---

### Upgrade

Upgrade your subscription plan.

```bash
hzvpn upgrade
```

---

## Summary

| Command                        | What it does                                              |
|--------------------------------|-----------------------------------------------------------|
| `hzvpn login`                  | Open browser to authenticate your account                |
| `hzvpn logout`                 | Sign out of the current session                          |
| `hzvpn devices`                | List all registered devices (`*` = current device)       |
| `hzvpn device remove <number>` | Remove a registered device by its list number            |
| `hzvpn profile`                | View account details                                     |
| `hzvpn upgrade`                | Upgrade your subscription plan                           |

> **Tip:** You must be logged in to access `profile`, `devices`, and `upgrade` features.
