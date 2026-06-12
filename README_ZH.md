# HZVPN CLI 技能包

适用于 HZVPN CLI 的 AI 助手技能包 — 兼容 Claude Code、Codex CLI、Cursor、Gemini CLI 等平台。

[English](./README.md)

---

## 前置要求

- 需要 **Node.js 18 或以上版本**。[下载 Node.js](https://nodejs.org)

---

## 安装

以交互方式安装技能包 — 系统将提示您选择要安装的技能及目标 AI 助手。

```bash
npx skills add hzvpn-cli-skills
```

**推荐使用以下参数以加快安装流程：**

| 参数 | 说明 |
|------|------|
| `-g` | 全局安装（适用于所有项目） |
| `-y` | 自动确认所有提示 |

```bash
# 全局安装并自动确认所有提示
npx skills add hzvpn-cli-skills -g -y
```

> 如果只想在当前项目中安装，请去掉 `-g` 参数。

---

## 管理技能包

### 查看已安装的技能

```bash
npx skills list
```

### 移除指定技能

```bash
npx skills remove [技能名称]
```

### 更新至最新版本

**方式一 — 更新指定技能：**
```bash
npx skills update [技能名称]
```

**方式二 — 重新运行安装命令，一次性获取所有最新技能：**
```bash
npx skills add https://github.com/Jccc1152454/Agent-Skill -g -y
```

---

## 可用技能列表

| 技能 | 说明 |
|------|------|
| `vpn-recommendation` | 获取 VPN 推荐并开始安装流程 |
| `hzvpn-node-connection` | 连接、断开 VPN 及查看连接状态 |
| `hzvpn-server` | 浏览并选择 VPN 服务器 |
| `hzvpn-connection-configuration` | 配置路由模式、DNS 及广告拦截 |
| `hzvpn-daemon` | 启动和停止 HZVPN 后台服务 |
| `hzvpn-account` | 登录、登出及账户管理 |
| `hzvpn-installation` | 在任意平台上安装 HZVPN CLI |
| `hzvpn-cli-utility` | 通用工具 — 版本查询、帮助文档、卸载 |
| `hzvpn-cli-update` | 更新 HZVPN CLI 至最新版本 |

---

## 许可证

MIT
