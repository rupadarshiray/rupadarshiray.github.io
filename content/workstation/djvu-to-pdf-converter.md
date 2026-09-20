---
created: 2026-09-17T19:23:08
modified: 2026-09-17T19:23:08
tags: []
title: DJVU to PDF converter
---

For preserving both the existing DjVu OCR text layer and the TOC/bookmarks, use `dpsprep`. It is specifically built to transfer the DjVu hidden OCR text and document outline into the PDF.

```bash
sudo pacman -S djvulibre python-pipx
pipx install dpsprep
```

Then go to the folder.

```bash
dpsprep input.djvu output.pdf
```