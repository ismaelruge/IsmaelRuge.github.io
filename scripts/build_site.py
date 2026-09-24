"""Build an explicit static bundle; preview mode prevents search indexing."""
import argparse
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument("--preview", action="store_true")
args = parser.parse_args()
destination = ROOT / "dist"
if destination.exists():
    shutil.rmtree(destination)
destination.mkdir()
for name in ("index.html", "portfolio.css", "styles.css", "script.js", "favicon.svg", "LICENSE", "robots.txt", "sitemap.xml"):
    shutil.copy2(ROOT / name, destination / name)
for name in ("assets", "proyectos"):
    shutil.copytree(ROOT / name, destination / name)
if args.preview:
    (destination / "_headers").write_text("/*\n  X-Robots-Tag: noindex, nofollow\n", encoding="utf-8")
    (destination / "robots.txt").write_text("User-agent: *\nDisallow: /\n", encoding="utf-8")
print("Static website ready in dist/")
