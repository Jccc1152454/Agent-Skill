# Login-related Issues

This document covers errors and problems that may occur during `hzvpn login` and how to resolve them.

---

## Device limit reached

**Symptom:** Login fails with a device limit reached message.

**Cause:** The account has hit its maximum number of registered devices for the current plan.

**Resolution:** The user must choose one of the following before login can continue:
1. Remove an existing registered device to free up a slot.
2. Purchase or upgrade the membership plan to increase the device limit.

**Flow:** HZVPN displays the list of registered devices. The user enters the number of the device to remove, or `0` to cancel login.

**Note:** To upgrade their plan or manage their subscription, the user can visit the official website at **hzvpn.app**. Upgrading increases the device limit and allows login to proceed without removing an existing device.

---

## Invalid token

**Symptom:** Login fails with an `invalid token` error.

**Cause:** The verification code entered is incorrect.

**Resolution:** Double-check the token copied from the browser and enter it again.

---

## Could not verify the token

**Symptom:** Login fails with a `Login failed: could not verify token` error.

**Cause:** The verification code displayed on the website has expired or is outdated.

**Resolution:** Re-login to your HZVPN account in the browser to generate a fresh token, then run `hzvpn login` again and use the new code.

