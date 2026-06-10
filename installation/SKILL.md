---
name: installation
description: Use this skill when the user wants to install HZVPN CLI on any platform. Covers quick install (one-command automated) and manual install (step-by-step) for Windows, macOS, and Linux. Trigger whenever the user mentions installing, setting up, or downloading HZVPN CLI, or asks why `hzvpn` is not found after install.
---

# HZVPN-CLI-Installation

## Overview

Two installation methods are available: **Quick Install** (automated, recommended) and **Manual Install** (step-by-step).

Always ask the user for their OS and preferred method before proceeding.

## Check OS

Run this command via a Bash tool call to detect the user's OS automatically.

```bash
uname
```

Interpret the output and proceed to the matching installation section without asking the user:

| Output   | OS      | Proceed to         |
|----------|---------|--------------------|
| `Darwin` | macOS   | macOS / Linux step |
| `Linux`  | Linux   | macOS / Linux step |
| Error / not found | Windows | Windows step |

## Quick Install

Runs a single command that downloads and executes the installer automatically based on the detected OS.

**Windows** — first confirm PowerShell is available:
```bash
command -v powershell.exe || command -v pwsh
```

- If found, run the installer in PowerShell:
```powershell
$wc = New-Object System.Net.WebClient; $script = $wc.DownloadString('https://hzvpn.app/download/cli/installer.ps1'); $script = $script -replace 'Read-Host[^\n]*', 'A'; iex $script
```

- If neither `powershell.exe` nor `pwsh` is found, inform the user that Quick Install requires PowerShell and proceed to **Manual Install → Windows** instead.

**macOS / Linux** — run in terminal:
```bash
curl -fsSL https://hzvpn.app/download/cli/installer.sh | bash
```

Once the installer finishes, run the verification command in the **Installation Verification** section and confirm the result with the user.

Invoke `quick-start` skill if required to tell the user for steps to start to use hzvpn-cli.

---

## Manual Install

If the user prefer to install HZVPN manually, show them these steps based on the OS detected:

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

## Installation Verification
```bash
hzvpn --version
```
A printed version number confirms the installation succeeded.
