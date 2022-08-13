---
created: 2022-08-13T14:01:18
modified: 2022-08-13T14:01:18
tags: []
title: 'Why write in Obsidian'
aliases:
    - 
---

There are drawbacks to writing in Obsidian for taking notes for Mathematics and Sciences - be it lecture notes or long-term notes. There are two other possibilities:
- # **taking notes in *full-on* LaTeX** and keeping them as PDFs
	- This is certainly not for everyone.
	- One can even compile topic-wise notes and embed them onto Obsidian notes: 
		- ![|550](https://i.imgur.com/Lonjhi3.png)
		- [^1]
- # **handwriting them digitally** *completely* and keeping them as PDFs
	- This requires a stylus/pen equipped device.
	- Again, we can embed the PDFs: 
		- ![|550](https://i.imgur.com/UrETEFk.png)

# Writing in Obsidian using *MathJax*, *Callouts* and *Excalidraw plugin*
But Obsidian with MathJax, Callouts and Excalidraw plugin provides the perfect balance between the two:
- ![|550](https://i.imgur.com/TisLGWB.png)

## further benefits
Writing in Obsidian in this way provides benefits over each of the individual methods, and more:
- ### MathJax is as strong as *full-on* LaTeX.
	- LaTeX preambles, snippets, conceal, etc. are available from community plugins.
		- ![](https://raw.githubusercontent.com/artisticat1/obsidian-latex-suite/main/gifs/demo.gif)
	- There is a plugin for TikZ diagrams too in Obsidian!
		- ![|450](https://i.imgur.com/GkRRePf.png)
- ### Obsidian notes and the entire vault is **dynamic and inter-connectable**.
	- Between lectures, one can directly **link to previously written notes**, to specific pages in documents in the vault. One can embed them too! To me, this is a superpower! Live preview has made this even better!
	- In long-term notes, *block-embedding* callouts is also very nifty:
		- ![|550](https://i.imgur.com/9Qku4Fw.png)
- ### Obsidian notes are plain-text.
	- That has benefits over storing the content of the notes as PDFs.
- ### Dynamic queries
	- Dataview queries can help create a dynamic table of lecture note details, anything you want to display.
	- I used a parameter "topic" in the front-matter to list all topics discussed in the lecture. 
		- ![|550](https://i.imgur.com/o4AdbO1.png)
	- Tags, tasks can be used intelligently to make use of the dynamic queries!
- ### Drawing and diagrams
	- Excalidraw plugin is a *active-in-development* plugin and even without a drawing device, it can be used to draw figures, flowcharts and also can be used to hand-write notes!


[^1]: [Zettelkasten + LaTeX + VS Code = Productivity++ ? | by Xavier Pinho | Level Up Coding (gitconnected.com)](https://levelup.gitconnected.com/zettelkasten-latex-vs-code-productivity-a7deb650608e)