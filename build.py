"""Delegate the configured Cloudflare Pages command to the build script."""
from pathlib import Path
from runpy import run_path

run_path(str(Path(__file__).resolve().parent / "scripts" / "build.py"), run_name="__main__")
