---
created: 2025-04-05T13:34:16
modified: 2025-04-05T13:34:16
tags: []
title: 'A workstation with Obsidian and LaTeX'
aliases: '' 
---

There are two broad use-cases:

- taking notes: both short term (lecture notes, book notes) and *long-term*
- writing *formal* documents

and we have these pieces of tools/applications to choose from:

- *code editors* like VS code (or something better)
- *text based note taking app* like [obsidian.md](https:\\obsidian.md) or more fancy ones based on *Vim* which I don't know about/use at all
- *typesetting systems* like LaTeX, Typst (which I don't use but still will talk about)
- *vector drawing apps* like Inkscape, Adobe Illustrator
- *hand-writing/drawing apps* like...well I used Adobe Illustrator for hand-writing/drawing for a long time XD...

In summary, we choose to implement our use-cases in the following manner:

- taking notes: use Obsidian, but one may even use Typst, (or any one of those fancy *Vim* based setups)
- writing *formal* documents: 
	- (one way) export the notes from Obsidian to PDFs
	- use VS code to write such documents on LaTeX (only way, as academia shall force you to use proper LaTeX anyways, so better not to start with Typst...)


## for notetaking

### Why use Obsidian

Rather than explaining my setup, I have mimicked it entirely here: [Bilinear-vault](https://github.com/rupadarshiray/Bilinear-vault). You just need to download it (as a zip, say, then extract the files) and open the folder through Obsidian. 

The notes look like 

[![Screenshot-2025-07-07-002445.png](https://i.postimg.cc/8PpjdxGS/Screenshot-2025-07-07-002445.png)](https://postimg.cc/V5hfmG5G)



![center|700](https://i.imgur.com/7NQ8kKa.png)

[![Screenshot-2025-03-23-022450.png](https://i.postimg.cc/C5Fkq1Jy/Screenshot-2025-03-23-022450.png)](https://postimg.cc/zbcymq9p)
[![Screenshot-2025-07-07-003550.png](https://i.postimg.cc/rmhFfwM2/Screenshot-2025-07-07-003550.png)](https://postimg.cc/479gdZYW)


A few highlights are as follows:

- Plain-text is just better. More about it here: [Why Plaintext for Notes? | Plaintext Productivity](https://plaintext-productivity.net/2-01-why-plaintext-for-notes.html)
- LaTeX preambles, snippets, conceal, etc. are available from community plugins. <br> ![](https://raw.githubusercontent.com/artisticat1/obsidian-latex-suite/main/gifs/demo.gif)
- Even full-on LaTeX code (like TikZ) diagrams can be rendered inside obsidian using plugins. <br> [![Screenshot-2025-07-07-004327.png](https://i.postimg.cc/XJ6DtfNw/Screenshot-2025-07-07-004327.png)](https://postimg.cc/7CXV2T26)
- *Embedding* notes and pieces of notes is a superpower! Rather than using definition/theorem numbers, the notes look like: <br> ![|700](https://i.imgur.com/EpR95Ap.png)
- Using a very Sympy script one can do calculations on Obsidian (completely offline): https://imgur.com/a/sympy-script-on-obsidian-B6YHR4d
- Dataview queries can help create a dynamic table of lecture note details, anything you want to display.
	- Here I made a list of lecture notes: <br>  ![|550](https://i.imgur.com/o4AdbO1.png)
	- I had a lot of notes on manifolds, but I wanted to make a list of all of them. I wrote a query for that! <br> ![Screenshot-2025-07-06-234318.png](https://i.postimg.cc/c1t4ZZcT/Screenshot-2025-07-06-234318.png)
	- But I prefer a gallery view with little pics: <br> [![Screenshot-2025-07-07-000939.png](https://i.postimg.cc/JzRCvWnT/Screenshot-2025-07-07-000939.png)](https://postimg.cc/6ybP4gCR)
- [zsviczian/obsidian-excalidraw-plugin: A plugin to edit and view Excalidraw drawings in Obsidian](https://github.com/zsviczian/obsidian-excalidraw-plugin) is a *active-in-development* plugin and even without a drawing device, it can be used to draw figures, flowcharts and also can be used to hand-write notes! It can even render LaTeX using MathJax, so making math diagrams becomes very simple. This little manifold is made using Exalidraw: <br> [![Screenshot-2025-07-06-234835.png](https://i.postimg.cc/2y1qNZSx/Screenshot-2025-07-06-234835.png)](https://postimg.cc/9wjXGzT4)
### Exporting notes from Obsidian


- ### "printing" Obsidian notes to PDF
	- "Export to PDF" is a built-in feature but the plugin [l1xnan/obsidian-better-export-pdf: Obsidian PDF export enhancement plugin](https://github.com/l1xnan/obsidian-better-export-pdf) lives up to its name and provides some enhancements.
		- [[my-notes|My notes]] especially for example https://dub.sh/spring25 is made using this plugin.
- #### Obsidian markdown to LaTeX or PDF
	- [alfredholmes/TeXNotes: Zettelkasten or Slip box with notes written in LaTeX (github.com)](https://github.com/alfredholmes/TeXNotes)
	- ![](https://raw.githubusercontent.com/zcysxy/figurebed/master/img/obsidian-pandoc.png) [zcysxy/obsidian-pandoc-filters: Pandoc filters and an academic workflow for obsidian (github.com)](https://github.com/zcysxy/obsidian-pandoc-filters)
	- using *pandoc*
		- [Pandoc Extensions (github.com)](https://github.com/pandoc-ext)
	- [Obsidian Tutorial for Academic Writing | by Leonardo Castorina | Better Humans](https://betterhumans.pub/obsidian-tutorial-for-academic-writing-87b038060522#de53)
		- using [mokeyish/obsidian-enhancing-export: This is an enhancing export plugin base on Pandoc for Obsidian (https://obsidian.md/ ). It's allow you to export to formats like Markdown、Markdown (Hugo https://gohugo.io/ )、Html、docx、Latex etc. (github.com)](https://github.com/mokeyish/obsidian-enhancing-export)
		- obsidian pandoc templates [universvm/obsidian-pandoc-templates: A repository for pandoc templates. Geared for Obsidian. (github.com)](https://github.com/universvm/obsidian-pandoc-templates)
	- using *python*
		- [MariosGkMeng/Straightforward-Obsidian2Latex: A complete converter from Obsidian to Latex (write your scientific papers in Obsidian --> print to LateX) (github.com)](https://github.com/MariosGkMeng/Straightforward-Obsidian2Latex)
	- using *julia*
		- [mscott99/Obsidian-Paper-Export: Export an Obsidian note to an academic paper format, including embedded content. (github.com)](https://github.com/mscott99/Obsidian-Paper-Export)
- #### fake it using CSS
	- [NicklasVraa/Obsidian-academic-export: Turn your obsidian notes into academic papers. (github.com)](https://github.com/NicklasVraa/Obsidian-academic-export?tab=readme-ov-file)

## long-term notemaking



<iframe width="560" height="315" src="https://www.youtube.com/embed/MYJsGksojms?si=EMXPTENV4w141XsC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## for formal documents

### the debate of LaTeX vs Typst



| size of *formal* documents $\downarrow$ <br> use-cases $\rightarrow$                          | *Overleaf* users                                                                                                                               | strictly latex code editors                    | code editors like VS code (or something better) |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------- |
| smol stuff <10 pages<br>                                                                      | can shift to typst web, easy                                                                                                                   | Typst is prbably best for them                 |                                                 |
| ranging from 10 page to 150/200 page articles, we may assume they don't use many diagrams etc | Typst is prbably best for them if (a) it could do the same thing (b) with less hassle (c) they can use typst to publish whereever they want to | they will have issues to shift to typst syntax |                                                 |
| longform lecture notes/book writers, ~500 pages with diagrams, tables and all messy stuff     | ??? they ~~probably~~ definitely pay for Overleaf, so...                                                                                       | who may speak for such pro users!              | who may speak for such pro users!               |

### setting up LaTeX on VScode with snippets and templates

1. Install https://code.visualstudio.com/
2. Install [LaTeX Workshop - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) inside Vscode
3. Follow [Install · James-Yu/LaTeX-Workshop Wiki](https://github.com/James-Yu/LaTeX-Workshop/wiki/Install)
	1. Install [Getting MiKTeX](https://miktex.org/download)
4. Install snippets [sleepymalc/VSCode-LaTeX-Inkscape: ✍ A way to integrate LaTeX, VS Code, and Inkscape in macOS](https://github.com/sleepymalc/VSCode-LaTeX-Inkscape)
5. Evan Chen's template: https://github.com/vEnhance/dotfiles/blob/main/texmf/tex/latex/evan/evan.sty
	1. How to use it? : https://web.evanchen.cc/faq-latex.html#L-4
6. Diagrams? TikZ and Inkscape: https://www.math.univ-toulouse.fr/~asaintcr/blog-entry.php?id=5ink

## brief history of everyone's inspiration

Many of the LaTeX setup is inspired from [Gilles Castel](https://castel.dev/)'s setup which he explained in three famous blog posts: [How I'm able to take notes in mathematics lectures using LaTeX and Vim | Gilles Castel](https://castel.dev/post/lecture-notes-1/) from 2019. It is built on Vim on a Linux system and that (along with a laptop with touch screen monitor) allowed him to take notes like ![](https://castel.dev/static/cb323a2ec665d98f93f78e13d3972e0e/73116/ca3.png) in class!

He used Inkscape from drawings: [How I draw figures for my mathematical lecture notes using Inkscape | Gilles Castel](https://castel.dev/post/lecture-notes-2/).

The comment section of these blogs are a warm feeling for everyone!

Castel put up [his notes](https://castel.dev/notes) taken during his bachelors and masters at KU Leuven. His [maters thesis](https://github.com/gillescastel/masterthesis) in particular is a beautiful piece of work with very good looking diagrams.

Next, he started a PhD in mathematics at KU Leuven and in a blog article from 2022 explained how he wrote notes both typed and handwritten during this time.

However, his website shows "Gilles Castel ✝2022" and indeed the university page writes:

> [!quote]
> 
> **Gilles Castel** [Website](https://castel.dev/)  
>  (KU Leuven, 2021-2022)  
>  Gilles stopped his Ph.D. studies in 2022.  
>  Before embarking in his Ph.D., he wrote a beautiful master thesis [Morse Theory: a visual guide from handlebodies to the generalized Poincare' conjecture](https://perswww.kuleuven.be/~u0096206/students/GillesMasterThesis.pdf), under the supervision of Charlotte Kirchhoff-Lukat.

 It seems Ku Leuven's who's who page also mentioned "*Deceased on July 18 2022*" but the [page is not available anymore](https://www.kuleuven.be/wieiswie/nl/person/00131443).