---
name: hzvpn-account
description: Use this skill when the user asks about logging in or out of HZVPN CLI, managing registered devices, viewing their profile, or upgrading their plan. Trigger for `hzvpn login`, `hzvpn logout`, `hzvpn devices`, `hzvpn profile`, `hzvpn upgrade`, or device limit issues.
---

# HZVPN CLI — Account Commands

These commands manage authentication, registered devices, and subscription details. 

---

## Login HZVPN account
Run the command below to authenticate your HZVPN account. The user will be redirect to the browser to get the verification code and paste the verification code to login to the account. Request the verification code from the user to help the user to login their account. Suggest the user to login by running this command in another terminal to ensure the login process smoother.

```bash
hzvpn login
```

Refer to `login-related-issue.md` if encounter error during account login.

---

## Log out HZVPN account
Run the command below to sign out of the current session.

```bash
hzvpn logout
```

---

## List all devices under current HZVPN account
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

## View HZVPN account details
View account details.

```bash
hzvpn profile
```

---

## Purchase or upgrade current account membership level
Upgrade your subscription plan. Run this command to redirect the user to the official website 'hzvpn.app'.

```bash
hzvpn upgrade
```

Refer to `purchase-references.md` for more detail has to know about upgrading membership plan.

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
