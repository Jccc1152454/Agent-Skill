# HZVPN CLI — Installation Skill

## Trigger Conditions

Use this skill when the user asks about:
- Installing HZVPN CLI
- Setting up HZVPN on Windows, macOS, or Linux
- Quick install vs manual install for HZVPN
- PATH configuration for HZVPN
- Verifying HZVPN CLI installation

---

## Step 1 — Ask the user which method they prefer

Before giving instructions, always ask:
1. **Which OS?** — Windows / macOS / Linux
2. **Which method?** — Quick Install (automated) or Manual Install (step-by-step)

---

## Method A: Quick Install

The fastest way. Runs a single command that handles everything automatically.

**What it does:**
- Detects OS and shell
- Downloads the latest release from GitHub
- Installs the binary
- Adds HZVPN to PATH
- Cleans up temp files

### Windows
Open **PowerShell** and run:
```powershell
iwr https://hzvpn.app/download/cli/installer.ps1 | iex
```
> Windows may warn about running a remote script — this is expected.
> Select **A — Yes to All** to continue.

### macOS / Linux
Run the installer script from a terminal (same URL pattern as above for the shell variant).

### Installation Locations

| Platform      | Location                        |
|---------------|---------------------------------|
| Windows       | `%LOCALAPPDATA%\Programs\HZVPN` |
| macOS / Linux | `~/.local/bin`                  |

### PATH Auto-Configuration

If the install directory isn't already in PATH, the installer updates your shell profile automatically. Supported profiles:
- `.zshrc`
- `.bashrc`
- `.bash_profile`
- `.profile`

---

## Method B: Manual Installation

Performs the same steps as the installer script, but manually.

### Windows

1. Download the latest release ZIP:
   `https://r2.r2hz.top/hzcli_windows1.1.17.zip`

2. Extract the archive.

3. Move these 4 files to `%LOCALAPPDATA%\Programs\HZVPN`:
   - `hzvpn.exe`
   - `MSVCP140.dll`
   - `VCRUNTIME140.dll`
   - `VCRUNTIME140_1.dll`

4. Add the folder to your **User PATH** (Windows 10/11):
   - Press `Win + S` → search **Environment Variables**
   - Click **Edit the system environment variables**
   - Click **Environment Variables**
   - Under **User variables**, select **Path** → click **Edit**
   - Click **New** and add: `%LOCALAPPDATA%\Programs\HZVPN`
   - Click **OK** on all windows to save

5. Restart your terminal.

---

### macOS

```bash
mkdir -p ~/.local/bin
mv hzvpn ~/.local/bin/
chmod +x ~/.local/bin/hzvpn
```

Add to PATH (if not already):
```bash
export PATH="$HOME/.local/bin:$PATH"
```

---

### Linux

```bash
mkdir -p ~/.local/bin
mv hzvpn ~/.local/bin/
chmod +x ~/.local/bin/hzvpn
```

Add to PATH (if not already):
```bash
export PATH="$HOME/.local/bin:$PATH"
```

---

## Verify Installation

After either method, confirm it's working:

```bash
hzvpn --version
```

A version number printed = installation successful.
