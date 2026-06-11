#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

// ── Config ────────────────────────────────────────────────────────────────────
const PACKAGE_NAME = "hzvpn-cli-skills"; // change to your package name
const SKILLS_SRC = path.join(__dirname, "skills"); // folder with your skills

// Where each agent stores skills
const AGENT_SKILL_DIRS = {
  "Claude Code": path.join(os.homedir(), ".claude", "skills"),
  "Codex CLI":   path.join(os.homedir(), ".codex",  "skills"),
  "Cursor":      path.join(os.homedir(), ".cursor",  "skills"),
  "Gemini CLI":  path.join(os.homedir(), ".gemini",  "skills"),
  "Cline":       path.join(os.homedir(), ".cline",   "skills"),
  "Windsurf":    path.join(os.homedir(), ".windsurf", "skills"),
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src,  entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function agentIsInstalled(skillDir) {
  // Agent is installed if its parent config folder exists
  return fs.existsSync(path.dirname(skillDir));
}

// ── Main ──────────────────────────────────────────────────────────────────────
console.log(`\n📦 ${PACKAGE_NAME} installer\n`);

const skillFolders = fs.readdirSync(SKILLS_SRC, { withFileTypes: true })
  .filter(e => e.isDirectory())
  .map(e => e.name);

if (skillFolders.length === 0) {
  console.error("❌  No skill folders found in ./skills/");
  process.exit(1);
}

console.log(`Skills to install: ${skillFolders.join(", ")}\n`);

let installedCount = 0;

for (const [agentName, skillDir] of Object.entries(AGENT_SKILL_DIRS)) {
  if (!agentIsInstalled(skillDir)) {
    console.log(`⏭  ${agentName} — not detected, skipping`);
    continue;
  }

  try {
    for (const folder of skillFolders) {
      const src  = path.join(SKILLS_SRC, folder);
      const dest = path.join(skillDir, folder);
      copyDir(src, dest);
    }
    console.log(`✅  ${agentName} — installed to ${skillDir}`);
    installedCount++;
  } catch (err) {
    console.error(`❌  ${agentName} — failed: ${err.message}`);
  }
}

console.log(`\n${installedCount === 0
  ? "⚠️  No agents detected. Install Claude Code, Cursor, or another agent first."
  : `🎉 Done! Installed into ${installedCount} agent(s).`
}\n`);