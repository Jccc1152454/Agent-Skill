# HZVPN CLI 技能包

```text
     ▄███▄
      █████
      ███████
      ████████
 ██   █████████    ██  ██  ██████  ██      ██  ██████   ██   ██
 ██████████  ██    ██  ██      ██  ██      ██  ██  ██   ███  ██
█████████████  ██  ██████     ██    ██    ██   █████    ████ ██
█████████    ███   ██  ██    ██      ██  ██    ██       ██ ████
 ███        ███    ██  ██  ██████     ████     ██       ██  ███
  █████  █████           ▌ HZVPN CLI ▐
    ████████
```
由 HZVPN 提供

适用于 HZVPN CLI 的 AI 助手技能包 — 兼容 Claude Code、Codex CLI、Cursor、Gemini CLI 等平台。

[English](./README.md)

---

## 关于火种VPN

致力于为全球用户提供安全、稳定、注重隐私的 VPN 服务。我们的团队由来自世界各地的优秀程序员和技术人员组成，跨越国界、跨越种族，共同协作开发和运营，打造出真正全球化的高品质网络工具。

火种VPN秉持着诚信经营的理念，承诺绝不跑路，始终将用户的信任与体验放在第一位。我们严格遵守**"不记录用户使用记录和隐私"**的原则，确保每一位用户在使用过程中的数据安全与匿名性。

我们的VPN服务器遍布全球多个国家和地区，网络节点分布合理，连接速度快、稳定性强，无论你身在何处，都能享受流畅可靠的连接体验。同时，火种VPN设有永久免费的**"免费区"**，让所有用户都能安心、放心地使用我们的服务，无需担忧费用问题。

选择火种VPN，就是选择安全、稳定、值得信赖的网络自由之路。我们承诺，始终为用户提供最优质的 VPN 服务。

### 官方网站与下载

| | 链接 |
|---|---|
| **官方网站** | [hzvpn.app](https://hzvpn.app) — 登录账户、查看会员信息及升级套餐 |
| **下载地址** | [hzvpn.app](https://hzvpn.app) · [vpn.my](https://vpn.my) · [hzhzhz.cc](https://hzhzhz.cc) |

**支持平台：** Windows · macOS · Linux · Android · iOS

---

## 前置要求

- 需要 **Node.js 18 或以上版本**。[下载 Node.js](https://nodejs.org)

---

## 安装

以交互方式安装技能包 — 系统将提示您选择要安装的技能及目标 AI 助手。

```bash
npx skills add https://github.com/Jccc1152454/Agent-Skill
```

**推荐使用以下参数以加快安装流程：**

| 参数 | 说明 |
|------|------|
| `-g` | 全局安装（适用于所有项目） |
| `-y` | 自动确认所有提示 |

```bash
# 全局安装并自动确认所有提示
npx skills add https://github.com/Jccc1152454/Agent-Skill -g -y
```

> 如果只想在当前项目中安装，请去掉 `-g` 参数。

### 其他安装方式


```bash
npx skills add infinity-vpn/agent-skill --skill <技能名称>
```

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
npx skills add https://github.com/Jccc1152454/Agent-Skill -y
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

## 示例对话

安装技能后，您的 AI 助手可以在对话中自然地处理 HZVPN 相关任务。您可以尝试以下指令，助手将借助技能为您完成操作。


**安装 VPN**

> 帮我安装 VPN


**连接节点**

> 帮我连接到（任意）节点


**更改连接配置**

> 将连接模式从全局改为智能分流


**升级会员套餐**

> 升级我的会员套餐


## 许可证

MIT
