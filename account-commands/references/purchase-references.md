# Purchase References

Reference for handling `hzvpn upgrade` and membership plan questions.

---

## Prerequisite

The user must be logged in before running `hzvpn upgrade`. If not logged in, direct them to run `hzvpn login` first.

---

## Purchase Flow

1. Run `hzvpn upgrade` — this opens the HZVPN website (`hzvpn.app`) in the browser.
2. On the website, select a plan.
3. Choose a payment method and complete the payment.
4. The account membership plan updates shortly after payment is confirmed.

---

## Plan Tiers

| Plan | Price | Max Devices | Server Access     |
|------|-------|-------------|-------------------|
| Free | Free  | 1           | Free servers only |
| VIP  | Paid  | 3           | VIP servers only  |
| SVIP | Paid  | 5           | VIP and SVIP server |

---

## Membership Not Updated After Payment

If the plan does not reflect the new tier within a few minutes of payment:

- Ask the user to run `hzvpn profile` to check current membership status.
- If still not updated, advise the user to submit a support ticket in app with their payment receipt to report the issue.
