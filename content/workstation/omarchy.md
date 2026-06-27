---
created: 2026-06-15T01:40:35
modified: 2026-06-15T01:40:44
tags: []
title: omarchy
---

Watching [The Linux Experience - Omarchy - YouTube](https://www.youtube.com/watch?v=Urq__zOwQqg) (June, '26) inspired me to install *Omarchy* (pre-configured *ArchLinux* with *hyperland*). This would be my first time installing *linux*, probably in my bloodline.

## installation

I following the guide in [Guide: Dual boot Omarchy Os with Windows 11 · basecamp/omarchy · Discussion #2479 · GitHub](https://github.com/basecamp/omarchy/discussions/2479) to install *Omarchy*, as dualboot with Windows 11. I faced a few issues.

- I did not turn off *BitLockers* intially.
- After installing Arch Linux using `archinstall`, choosing and mounting the correct partition, I was supposed to install *Omarchy* using `pacman`. However, the packages where not downloaded because `pacman` was trying to get the packages offline. So I had to edit the `pacman.conf` configuration to add `mirrorlist`.

## configuration: editor

After installing, I wanted to edit the display settings. I forgot it would be in the configuration which opened in *Vim* code editor by default. I luckily installed *VScode* before; I set that as the default code editor and now I can edit settings of my operating system in *VScode*! Wao!

## configuration: shared ssd partition

I set the SSD parition that is shared between Windows 11 and Omarchy, called `main`, mounted onto `/mnt/shared`, correctly into `/etc/fstab`. But still Obsidian was not getting editing acess. So I added a symbolink (I think?)

```terminal
~ ✗ ln -s /mnt/shared ~/main
```
## configuration: obsidian

Obsidian came preinstalled on Omarchy. I needed to fix the SSD parition before I could work with Obsidian because my vault in on that parition. Now, I open Obsidian from `/main/vault`. It works flawlessly! This is one thing I like about tools that have this nature: I open the folder and it opens up on any system at any moment of time just as it was intended. Maybe some features, say that required $\LaTeX$ or `python` installed, won't work, but Obsidian opens up on any system almost exactly the same.

However, I was met with a few bugs along the way!

## configuration: $\LaTeX$

I was advised to install `texlive` instead of `MikTex`, so I did that. Then I opened up a small document on VScode and hit *$\LaTeX$ build*. It built the PDF so fast! With *autosave* and *autobuild* turned on, the PDF rendering is almost live! Although this is probably because of `texlive` rather than `linux`.

Now, I can use the *Obsidian $\LaTeX$ Render* plugin to use my installed $\LaTeX$ distribution to generate `svg` from a $\LaTeX$ codeblock in my notes.  

## configuration: `python`

I did not install `sage` on windows because it needed `WSL`. Now that I am on Linux itself, installing and using `sage` is a breeze!

I wanted to use `python` from inside Obsidian. To do this, I needed to create a virtual environment in the vault folder. I had never used `python` virtual environment before, but I wasn't that hard to figure out. 

## configuration: transparent background

I removed background color from Obsidian and Firefox using CSS and it produced a transparent *glassy* background effect:

![img](https://i.imgur.com/T4AvJZI.png)



## bug: `electron39` PDF viewer on Arch Linux

I encountered the bug https://forum.obsidian.md/t/arch-linux-pdf-viewer-renders-blank-after-electron39-libdrm-update/114148 which made me downgade my `electron` distribution a little bit:

```
sudo pacman -U https://archive.archlinux.org/packages/e/electron39/electron39-39.8.9-1-x86_64.pkg.tar.zst
```

## bug: stylus using `electron` on `wayland`

Because of the bug https://forum.obsidian.md/t/using-a-stylus-pen-with-wayland-means-mouse-events-get-ignored/110296, I have to run Obsidian on X11 by

```
obsidian --ozone-platform=x11
```