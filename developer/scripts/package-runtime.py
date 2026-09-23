"""Create a local Chrome runtime ZIP only; never upload."""
import hashlib
import json
from pathlib import Path
import zipfile

root = Path(__file__).resolve().parent.parent
runtime = root / "chrome"
manifest = json.loads((runtime / "manifest.json").read_text(encoding="utf8"))
assert manifest["version"] == "5.1.3" and manifest["manifest_version"] == 3
allowed_roots = {"dist", "css", "images", "_locales", "view"}
allowed_files = {"manifest.json", "schema.json", "LICENSE", "README.md"}
files = []
for file in sorted(runtime.rglob("*")):
    if file.is_symlink():
        raise ValueError("Symlink forbidden")
    if not file.is_file():
        continue
    rel = file.relative_to(runtime)
    if rel.parts[0] not in allowed_roots and rel.as_posix() not in allowed_files:
        raise ValueError(f"Unexpected runtime file: {rel}")
    if file.suffix not in {".js", ".css", ".html", ".json", ".woff2", ".svg", ".png", ".gif", ".md", ".txt", ""}:
        raise ValueError(f"Unexpected runtime extension: {rel}")
    if any(part.startswith(".") for part in rel.parts):
        raise ValueError(f"Hidden file forbidden: {rel}")
    files.append(file)
out = root / "artifacts"
out.mkdir(exist_ok=True)
archive = out / "SHANNA-Authenticator-Chrome-5.1.3-built-runtime.zip"
with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    for file in files:
        z.write(file, file.relative_to(runtime).as_posix())
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    assert len(z.namelist()) == len(files)
    assert "manifest.json" in z.namelist()
digest = hashlib.sha256(archive.read_bytes()).hexdigest()
print(json.dumps({"zip": str(archive), "files": len(files), "sha256": digest}))
