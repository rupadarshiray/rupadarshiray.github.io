---
created: 2026-06-15T01:40:35
modified: 2026-06-15T01:40:44
tags: []
title: omarchy
aliases: ""
---

Watching [The Linux Experience - Omarchy - YouTube](https://www.youtube.com/watch?v=Urq__zOwQqg) (June, '26) inspired me to install *Omarchy* (pre-configured *ArchLinux* with *hyperland*). This would be my first time installing *linux*, probably in my bloodline.

## installation

I following the guide in [Guide: Dual boot Omarchy Os with Windows 11 · basecamp/omarchy · Discussion #2479 · GitHub](https://github.com/basecamp/omarchy/discussions/2479) to install *Omarchy*, as dualboot with Windows 11. I faced a few issues.

- I did not turn off *BitLockers* intially.
- After installing `archlinux`, I was supposed to install *Omarchy* using `pacman`. However, the packages where not downloaded because `pacman` was trying to get the packages offline. So I had to edit the `pacman.conf` configuration to add `mirrorlist`.

## configuration: editor

After installing, I wanted to edit the display settings. I forgot it would be in the configuration which opened in *Vim* code editor by default. I luckily installed *VScode* before; I set that as the default code editor and now I can edit settings of my operating system in *VScode*! Wao!

## configuration: shared ssd partition

I set the sdd parition that is shared between Windows 11 and Omarchy, called `main`, mounted onto `/mnt/shared`, correctly into `/etc/fstab`. But still Obsidian was not getting editing acess. So I added a symbolink (I think?)

```terminal
~ ✗ ln -s /mnt/shared ~/main
```

## configuration: $\LaTeX$

I was advised to install `texlive` instead of `MikTex`, so I did that. Then I opened up a small document on VScode and hit *$\LaTeX$ build*. It builds the PDF so fast! With *autosave* and *autobuild* turned on, the PDF rendering is almost live!

## configuration: python