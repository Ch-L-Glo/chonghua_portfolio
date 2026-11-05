"""Compatibility entry point for the existing Cloudflare Pages build setting.
The application is Next.js; all page generation is performed by Node.js.
"""
from pathlib import Path
import subprocess
root = Path(__file__).resolve().parent.parent
subprocess.run(['npm', 'ci', '--no-audit', '--no-fund'], cwd=root, check=True)
subprocess.run(['npm', 'run', 'build'], cwd=root, check=True)
