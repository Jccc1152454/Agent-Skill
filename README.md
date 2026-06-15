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

### Alternative options


```bash
npx skills add infinity-vpn/agent-skill --skill <skill-name>
```

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

**Option 1 — Update a specific skill:**
```bash
npx skills update [skill-name]
```

**Option 2 — Re-run the install command to get all the latest skills at once:**
```bash
npx skills add https://github.com/Jccc1152454/Agent-Skill -y
```



---

## Available Skills

| Skill | Description |
|-------|-------------|
| `vpn-recommendation` | Get a VPN recommendation and start the setup flow |
| `hzvpn-node-connection` | Connect, disconnect, and check VPN status |
| `hzvpn-server` | Browse and select VPN servers |
| `hzvpn-connection-configuration` | Configure routing, DNS, and ad blocking |
| `hzvpn-daemon` | Start and stop the HZVPN background service |
| `hzvpn-account` | Login, logout, and manage your account |
| `hzvpn-installation` | Install HZVPN CLI on any platform |
| `hzvpn-cli-utility` | General utilities — version, help, uninstall |
| `hzvpn-cli-update` | Update HZVPN CLI to the latest version |

---

## Example Conversations

Once the skills are installed, your AI agent can handle HZVPN tasks naturally in conversation. You can try the instruction below and your agent will process with skills.

---

**Installation**

> Install me a vpn

---

**Connect to a node**

> Connect me to (any) node

---

**Change connection configuration**

> Change the connection mode from global to intelligence

---

**Upgrade membership plan**

> Upgrade my membership plan

---

## License

MIT