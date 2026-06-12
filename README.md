# HZVPN CLI Skills

AI agent skills for the HZVPN CLI — compatible with Claude Code, Codex CLI, Cursor, Gemini CLI, and more.

[中文文档](./README_ZH.md)

---

## Prerequisites

- **Node.js 18+** is required. [Download Node.js](https://nodejs.org)

---

## Installation

Install the skills interactively — you will be prompted to select which skills to install and which agent to target.

```bash
npx skills add https://github.com/Jccc1152454/Agent-Skill
```

**Recommended flags for a faster setup:**

| Flag | Description |
|------|-------------|
| `-g` | Install globally (available across all projects) |
| `-y` | Accept all prompts automatically |

```bash
# Global install, auto-accept all prompts
npx skills add https://github.com/Jccc1152454/Agent-Skill -g -y
```

> Omit `-g` if you prefer a project-local install.

---

## Manage Skills

### List installed skills

```bash
npx skills list
```

### Remove a skill

```bash
npx skills remove [skill-name]
```

### Update to the latest version

```bash
npx skills update hzvpn-cli-skills
```

---

## Available Skills

| Skill | Description |
|-------|-------------|
| `quick-start` | Get connected for the first time |
| `vpn-commands` | Connect, disconnect, and check VPN status |
| `server-commands` | Browse and select VPN servers |
| `vpn-configuration` | Configure routing, DNS, and ad blocking |
| `daemon-commands` | Start and stop the HZVPN background service |
| `account-commands` | Login, logout, and manage your account |
| `installation` | Install HZVPN CLI on any platform |
| `utility-commands` | General utilities — version, help, uninstall |

---

## License

MIT