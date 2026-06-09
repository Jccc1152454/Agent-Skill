---
name: account-commands
description: Use this skill when the user asks about logging in or out of HZVPN CLI, managing registered devices, viewing their profile, or upgrading their plan. Trigger for `hzvpn login`, `hzvpn logout`, `hzvpn devices`, `hzvpn profile`, `hzvpn upgrade`, or device limit issues.
---

# HZVPN CLI — Account Commands

These commands manage authentication, registered devices, and subscription details.

---

## `hzvpn login`
Authenticate your HZVPN account. Opens a browser for login or account creation.

```bash
hzvpn login
```

If the device limit is reached, HZVPN lists registered devices and prompts you to remove one before continuing.

---

## `hzvpn logout`
Sign out of the current session.

```bash
hzvpn logout
```

---

## `hzvpn devices`
List all devices registered to the account. The current device is marked with `*`.

```bash
hzvpn devices
```

### Remove a device
```bash
hzvpn device remove <number>
```
Use the list number shown by `hzvpn devices`.

### Device limits by plan

| Plan  | Max devices |
|-------|-------------|
| Free  | 1           |
| VIP   | 3           |
| SVIP  | 5           |

---

## `hzvpn profile`
View account details.

```bash
hzvpn profile
```

---

## `hzvpn upgrade`
Upgrade your subscription plan.

```bash
hzvpn upgrade
```

---

## Summary

| Command                        | Effect                                         |
|--------------------------------|------------------------------------------------|
| `hzvpn login`                  | Open browser to authenticate                   |
| `hzvpn logout`                 | Sign out of current session                    |
| `hzvpn devices`                | List registered devices (`*` = current)        |
| `hzvpn device remove <number>` | Remove a device by its list number             |
| `hzvpn profile`                | View account details                           |
| `hzvpn upgrade`                | Upgrade subscription plan                      |
