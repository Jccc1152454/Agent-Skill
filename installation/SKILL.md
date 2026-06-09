---
name: installation
description: Use this skill when the user wants to install HZVPN CLI on any platform. Covers quick install (one-command automated) and manual install (step-by-step) for Windows, macOS, and Linux. Trigger whenever the user mentions installing, setting up, or downloading HZVPN CLI, or asks why `hzvpn` is not found after install.
---

# HZVPN-CLI-Installation

## Overview

Two installation methods are available: **Quick Install** (automated, recommended) and **Manual Install** (step-by-step).

Always ask the user for their OS and preferred method before proceeding.

## Quick Install

Runs a single command that automatically detects the OS, downloads the latest binary from GitHub, installs it, adds it to PATH, and cleans up temp files.

**Windows** — run in PowerShell:
```powershell
iwr https://hzvpn.app/download/cli/installer.ps1 | iex
```
If Windows prompts about running a remote script, select **A — Yes to All**.

**macOS / Linux** — run in terminal:
```bash
curl -fsSL https://hzvpn.app/download/cli/installer.sh | bash
```

### Install locations
| Platform      | Path                            |
|---------------|---------------------------------|
| Windows       | `%LOCALAPPDATA%\Programs\HZVPN` |
| macOS / Linux | `~/.local/bin`                  |

### PATH auto-config
The installer automatically updates the shell profile if the install directory isn't already in PATH. Supported profiles: `.zshrc`, `.bashrc`, `.bash_profile`, `.profile`.

---

## Manual Install

### Windows
1. Download the latest ZIP: `https://r2.r2hz.top/hzcli_windows1.1.17.zip`
2. Extract the archive.
3. Move these 4 files into `%LOCALAPPDATA%\Programs\HZVPN`:
   - `hzvpn.exe`
   - `MSVCP140.dll`
   - `VCRUNTIME140.dll`
   - `VCRUNTIME140_1.dll`
4. Add `%LOCALAPPDATA%\Programs\HZVPN` to User PATH:
   - `Win + S` → search **Environment Variables** → **Edit the system environment variables**
   - **Environment Variables** → under **User variables**, select **Path** → **Edit** → **New**
   - Paste the path → **OK** on all windows
5. Restart the terminal.

### macOS / Linux
```bash
mkdir -p ~/.local/bin
mv hzvpn ~/.local/bin/
chmod +x ~/.local/bin/hzvpn
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc  # or ~/.bashrc
source ~/.zshrc
```

---

## Verify
```bash
hzvpn --version
```
A printed version number confirms the installation succeeded.
