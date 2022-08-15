---
created: 2022-08-13T20:14:02
modified: 2022-08-13T20:14:02
tags: [Obsidian]
title: 'Starting with Obsidian: Volcanic Eruption'
aliases:
    - 'Starting with Obsidian'
---

[[notes/what-is-obsidian|What is Obsidian]] is actually *what to know about Obsidian* before starting. Here we actually start with an empty Obsidian vault.

> [!warning] You may also download this pre-made template vault and skip all the setting work: [Bilinear-vault](https://github.com/riddyrayes/Bilinear-vault)
> 
# Stages in Eruption

An how-to for the **Obsidian ecosystem** with a 🌋 volcano theme.[^1]

[^1]: The names of major levels inspired from the TL;DR of the article https://sciencing.com/stages-volcano-eruption-8549867.html

- [[notes/starting-with-obsidian#The Quakes|The Quakes]] - the very basics for starting hour
- [[notes/starting-with-obsidian#The Emissions|The Emissions]] - the important information for starting week
- [[notes/starting-with-obsidian#The Venting|The Venting]] - Knowledge Management Techniques, Integration with other Editors, Folders and Tags best uses
- [[notes/starting-with-obsidian#The Buildup|The Buildup]] - technical aspects of note taking and managing - Diagrams, Equations
- [[notes/starting-with-obsidian#The Collapse|The Collapse]] - applied aspects of note making and managing - Task Management, Zotero Integration and Citation management
- [[notes/starting-with-obsidian#The Explosion|The Explosion]] - spider webbing a large vault
- [[notes/starting-with-obsidian#The Growth and failures|The Growth and failures]] - growing into a galactic civilization
- [[notes/starting-with-obsidian#The Ash and Lava|The Ash and Lava]] - sharing the vault to public 
- [[notes/starting-with-obsidian#Back to Dormant|Back to Dormant]] - further development in ecosystem and workflow

> 🛑 DON'T PANIC

> [!info] Info
> 
> - Reader is requested to only read **The Quakes** part on day 1 of using Obsidian.
> - Reader may use CTRL+Scroll to increase or decrease the font size of the text.

---


# The Quakes

> the very first of the first stuff
 

> [!tip] The reader is advised to
> 
> - Open a blank vault and make a note
> - Readout the official [help pages](https://help.obsidian.md/) alongside this section.

1. Create a blank note.
2. Writing note on Obsidian uses two modes, Preview and Edit. It can be toggled from top right button.


The first Hotkeys to learn:
- `CTRL+E` - Switch from **Preview** to **edit mode**
- `CTRL+P` - Open **command palette**, to search for various operations to do
- `CTRL+O` - Quickly open some note or create a new one

## Markdown Syntax _(unofficially) Obsidian flavored_

Writing in Obsidian uses basic Markdown syntax. 


```js
// Links and Embeds
```
- link to a note: `[[note]]`
	- embed: `![[note]]`
- link to a heading: `[[note#heading]]`
	- embed: `[[note#heading]]`
- link to a block (specific line) try: `[[note#^`
	- embed: `![[note#^` 
- link to a picture: `![[pic.png]]`
- link to a pdf: `[[file.pdf]]`
	- embed: `![[file.pdf]]`
- link to a specific page of a pdf: `[[file.pdf#page=5]]`
	- embed: `![[file.pdf#page=5]]`
- link to a file: `[[file.extension]]`
~~~js
// Text Styles
**bold**
*italic* _italic_
~~strikethrough~~
> quotes

// Lists and tasks
- Unordered list (Hotkey: CTRL+ENTER)
1. Ordered list
- [ ] Task (Hotkey: CTRL+ENTER twice)

// Headings
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

// Callouts
> [!important]
> This is important.
~~~

More here: [Format your notes - Obsidian Help](https://help.obsidian.md/How+to/Format+your+notes).

## Necessary Settings

`CTRL+,` or click on Settings icon at bottom right to open settings.
There would be a list of OPTIONS to open from:

The default settings works fine mostly, the things that advised to change and to be informed about are:

- **Editor**
	- ![](https://i.imgur.com/0YtJwKS.png)
	- ![](https://i.imgur.com/9arMsbt.png)
> [!warning]
> Do not turn on Vim key bindings if you are unfamiliar with Vim editor.
- **Files & Links**
	- ![](https://i.imgur.com/7ClKYAH.png)
- **Appearance**
	- Choose a theme made by the community:
	- ![](https://i.imgur.com/9SRbQP7.png)
- **Hotkeys**
	- Choose a "Hotkey" configuration for the commands.
- **About**
	- Keep Automatic updates turned on.
	- Make sure to reinstall Obsidian of the installer version becomes too old.
	- Turn on Receive insider builds if user is on *Obsidian Catalyst*.
- **Account**
	- No account required if Obsidian Sync, Publish or Receive insider builds are not desired

## Core plugins
Most plugins appear in the little left menu.  They have a separate settings options list:

1. [[notes/starting-with-obsidian#Tags|Tags]] - Use `#tags` to group notes based on any label. The tag pane arrives at the right pane. Drag to any preferable spot.
2. **Page Preview** - Hover over links to preview note.
3. **Starred** - Make a list of notes that are "Starred"
4. **Markdown format importer** - Turn off if reader is not a Roam or Bear user
5. **Daily notes**
6. **Templates**
7. **Unique note cretaor** - Can be used as an 'Inbox' of notes
8. **Random note** - Opens a random note
9. **Outline** - Open a "ouline" from all `#` headers from Note options at top right triple dots.
10. **Slides** - Use a note to start a full screen presentation
11. **Audio recorder** - Record audio
12. **Workspace** - Save the current configuration of notes as "Workspace"
13. **File recovery** - File versioning and recovery for notes
14. **Publish and Sync** - Paid *Obsidian.md* features

---

# The Emissions
> *the information for the first week into Obsidian*

- Using the mobile app
- Sync and Backup
## In-built features
- Templates
- Daily Notes

## Linking and Styling of Notes
- Tables
- LaTeX
- Callouts
## Community Plugins
[🗂️ 02.01 Plugins by Category - Obsidian Hub - Obsidian Publish](https://publish.obsidian.md/hub/02+-+Community+Expansions/02.01+Plugins+by+Category/%F0%9F%97%82%EF%B8%8F+02.01+Plugins+by+Category)

First few plugins to check out:
- Calendar plugin
- Sliding panes plugin

<!--- ## Mobile-Desktop interaction
The use of mobile app and desktop apps different in a lot ways. There are some best practices to find the best out of the synchronization.


## Sync and Backup
Obsidian Sync

### GitHub repository Sync

### Drive Backup and Sync
Services like Google Drive, OneDrive and iCloud
### Devices Sync
- [Syncthing](https://syncthing.net/) - an open-source solution to sync in most device

## Templates

## Daily Notes


## CSS Themes and Snippets

There are community themes that can be downloaded from settings.

### Exploring Snippets

There are numerous CSS snippets from the community used for various purposes.

### Development
--->

---

# The Venting
> _Vault Management Techniques, Other Editors, Folders, Tags_

## Vault Structure
- [[notes/folders-in-obsidian|Folders]]
- Tags
- Hierarchies

## Markdown Manipulation and more
- Zettlr
- Pandoc - 
- VScode - 
- LogSeq

## Vault Management

## External Applications
- Xjournal++
- Calendar app
- Mail app
- Live Weather
- Dendron
- Zotero
- VCcode

---

# The Buildup
> technical aspects of note taking and managing_
- Search
- [[notes/obsidian-metadata-and-query|Metadata and Query]]
- Diagrams
- Equations
	- also check the full on LaTeX implementation
- Images
- Web bookmarking
	- Raindrop
	- Markdownload
	- Tab copy
- Mail
- Videos
- Podcasts

---

# The Collapse
> _applied aspects of note making and managing_


- Zotero Integration
- Active Recall and Spaced Repetitio
- Task Management



---

# The Explosion
> _spider webbing a large vault_

- Graph View

## Idea Emergence

- **LYT Kit**
	- The kit suggests readers to have at least 100 notes.

---

# The Growth and failures
> _growing into a galactic civilization_
## File recovery


---

# The Ash and Lava
> *sharing the vault to public*

- Obsidian Publish
- GitHub Pages
- Tweets


---


# Back to Dormant
> _further development in ecosystem and workflow_
- [[notes/academic-workstation#Tinkering with superplugins|Tinkering with superplugins]]
- Dendron
- *full-on* **LaTex**
	- For more rigorous use of mathematical notation and equations, chemical structures and equations, diagrams, we must use the industry standard - LaTex. Various Tex utility software like TexStudio, services, or even Vim can be used to create LaTex documents but for the purpose of keeping a familiar aspect to a unfamiliar wold, we shall use VScode to write LaTex documents and integrate with Obsidian.
