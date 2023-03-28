---
id: GHNidRLG8Vg9TUNwEcwOG
title: Wiki
tags: [Workstation, Wiki]
desc: "A Wiki with Hierarchical Bases for long-term knowledge on Mathematics and Sciences"
created: 2021-11-02T01:35:43
toc: true
---

> A Dendron Workspace for building a "Wiki" for Hierarchical but Networked, Non-Linear Notemaking and Studying

> [!note] Note
> 
> A Wiki might have different definitions in other contexts, my definition of wiki might not match with others.

# building the foundations

The fundamental problem is this:

> Context based notes, for example, lecture notes, book notes, etc. are the first hand-down self-documentation of the topics presented.

The fundamental philosophy behind this "Wiki":
> After a thorough reading on a subject, writing long-term notes on the learned knowledge is desired. This must be generated free from **contextual bounds** and must be let freely stand on the basis of its conceptual standing.

## further problems that extend the premise

### extremely loose, unstructured set of notes is undesirable
An alphabetically sorted notes on topics would be hardly desireable. Unrelated topics with same names would pop up together. Even if all notes are heavily-linked and kept non-linear, it would be a nightmare to actually find some specific note purely by search.

> [!example] Example: similar topics but which differ
> 
> For every programming language there are the usual data types, classes, etc. which must be separate for each language.
Thus, they must be kept in some sort of a hierarchy.

### highly categorical, rigid (eg: folder-based) structure of notes is undesirable
Structures must be let changed over time. This is simpler to do when just files under a single folder is concerned.
The dilemma of placing notes on topics with mixed-concepts, which is practically all of the Sciences and especially Mathematics, will be a waste of time. The hierarchy must be kept simple and easy. A unending series of sub-folders would not be such an example.

### a mix of the above two is nice
Hierarchy should be allowed to grow naturally. For initiating the wiki, one may choose to divide by subjects/disciplines, and then by the first level division of topics in the subject, however large in numbers they may be. 
The lower branches of the hierarchy must maintain a value of looseness without loosing identity structures. The hierarchy headers might give a linear list of topics in a special conceptual manner, but the notes itself might not follow those divisions.
There maybe two places a note can be, if one relationship can not be prioritised over the other, one can loosen the hierarchy and let the note reside above (or create a or more fake-parents using tags).
Also, one possible factor that maybe chosen: the hierarchy, even at discipline level must be cascading style. This means they are ordered from more general topics to specialised ones.

> [!example] Example: Cascading style disciplines
> 
> There is no real solid wall in the scientific community, hence a personal convention can be applied. All study abstract physical systems, models and theoretical applications can be placed under "Physics" discipline. And thus the further practical, experimental or other special applications can be placed under Engineering (like Robotics), Astronomy (like Cosmology) etc. Even cross-discipline fields like Astrophysics can be placed under Astronomy due to this convention. Same for Astrobiology and Astrochemistry, where the abstraction comes as biological and chemical systems for Biology and Chemistry respectively.

This allows one to have folders for different disciplines.
### multiple iterations of same topic is undesirable
This is encountered while learning topics linearly.

> [!example] Example: Dulpicate encounter of same topic
> 
> While learning Organic Chemistry at High School Standard, one may learn "Hydration of Alkenes" under the header "Reactions of Alkenes" and later under "Preparations of Alcohol"

This duplicity is at the core of the nature of the concepts at play here. There may be two tracts (organic reactions and organic compounds) which follow each other and link parts of themselves. One path takes a compound, through a reaction, to another compound. And there are hundreds of reactions that goes back and forth from thousands of reactions.

### choosing the _most balanced_
In this manner the right balance between hierarchy, parents, networks, relationships which keep the conceptual nature intact must be obtained. The conventional education and research literature might impose some different approach, which is simpler to teach to beginners, linearly - but that does not mean it follows the objective conceptual approach. It may be historical approach, or just some cherry-picked topics chosen for a final goal.

The fight is also between reductionism and holism. Reducing a topic to its bare fundamentals is a good approach but by analysing very broad scale developments and similarities of separated fundamentals broadens understanding of the topics.

### densely linked individuals is desired
To keep the nature of links hold value one may choose to use them in fields for querying as a database later. 
Interlinked notes can be of help in discovering hidden connection - gaining wisdom!
Tags might be used as a hierarchical fake-parent which cannot be structured onto the notes because the parents' division have an intersect.

> [!example] Example: Intersecting Divisions
>
> Several math topics can be put in three of the major divisions - ALgebra, Analysis and Geometry.


## quality test for the pieces

Here's a nice thought experiment for a quality check of an individual note or a range of notes on one or many topics.

> [!tip] Hypothetical
> 
> You have been assigned to give an exam as a part an life-threatening dare where you will be tested on something that you learned 6 years ago. You did not review this subject in the last 6 years at all. You have been given a binary choice of materials you can refer to during the exam: the whole power of every possible books, papers, articles in existence along with the whole of internet vs your entire wiki of notes.

One should make notes and build the wiki in such a manner that choice easily becomes the latter option, not the former. 😊


# Technicalities for implementing this idea

[Dendron](https://dendron.so) has a hierarchy-first approach which is why it contains the best features to be implementing the wiki on. It can be implemented with a combination of Obsidian and Dendron.

## file naming convention
I prefer the simple `parent.child.grandchild.great-gandchild` style of "."-separated namespace hierarchies.


# Further developments
- Building the hierarchies for various disciplines and fields of study: [Hierarchical bases](academic-curation.workstation.wiki.hierarchical-bases)

# Testing of power

**TO BE YET TESTED BY ME ;)**

- *test if this wiki can help to generate new ideas (whatever that means?!)*
- test if the notes can surprise the author thyself

# Resources
The philosophies can be further investigated in:
- "Evergreen Notes": https://notes.andymatuschak.org/
- "Zettelkasten": https://zettelkasten.de/posts/
- [Obsidian for Students - A Two-Phase Workflow - 🌳 Walk in the Forest](https://walkintheforest.com/Content/Posts/Obsidian+for+Students+-+A+Two-Phase+Workflow)
- [A Hierarchy First Approach to Note Taking (kevinslin.com)](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64/) and by extension his [Personal Knowledge Management](https://www.kevinslin.com/notes/e9c72b4f-adb8-4f15-a6aa-9f9d81538561/)
