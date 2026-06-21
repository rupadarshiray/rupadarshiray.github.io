---
created: 2021-11-24T14:29:53
modified: 2021-11-24T14:29:53
title: '(My) academia'
---

- [[my-blackboards]]
- [[my-masters-at-iiserm]]
	- [[my-ms-thesis]]
- my [[notes]]

## my talks

```base
views:
  - type: cards
    name: Table
    filters:
      and:
        - file.tags.contains("my-talks")

```

<!---

- Introduction to differential forms
- Symplectic manifolds and Hamiltonian flows
- [[2512 Talk - Rigidity and deformations]]

--->

## seminars, workshops I attended

```base
views:
  - type: cards
    name: Table
    filters:
      and:
        - file.tags.contains("event")
    groupBy:
      property: year
      direction: ASC
    order: []
    sort:
      - property: created
        direction: DESC
    image: note.thumbnail
    imageFit: contain
    imageAspectRatio: 0.75
    cardSize: 200

```


<!-- 
- Me learning and teaching how to build an academic workstation:
	- [[obsidian-and-latex]]
	- [[hierarchical-longterm-wiki]], [[constructing-hierarchical-wiki]]
- The list of [[my-books|books that I have]].
- Some [[my-notes|notes that I have made]] through the years.
- [[inculcation|Inculcation]] is a roadmap for learning fancy math and physics.

- Here is me explaining stuff in a video format
	- [[derivatives-differential-forms-and-beyond-youtube]] -->