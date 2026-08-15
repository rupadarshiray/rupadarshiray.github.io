---
title: Welcome to ℝ²
modified: 2021-11-24T14:54:31
---


Hello! I hope this website finds you well!

![[about-me|about me here]]

![[about-site]]

![[about/now]]


```base
views:
  - type: list
    name: Last created
    filters:
      and:
        - file.tags.contains("current")
    order:
      - file.name
    sort:
      - property: created
        direction: DESC
    columnSize:
      file.name: 278
      file.folder: 371
      file.path: 468

```


![[academia/my-math-interests]]

The highlight of my past year has been my MS thesis.

![[my-ms-thesis]]

More stuff on this site includes the following.

- [[inculcation]]
- [[things-i-have-said-in-a-math-class]]


<!---


```base
filters:
  and:
    - file.folder.contains("content")
views:
  - type: list
    name: Folders
    filters:
      and:
        - file.folder.endsWith(file.name)
    order:
      - file.name
    sort:
      - property: file.folder
        direction: DESC
    columnSize:
      file.name: 278
      file.folder: 371
      file.path: 468

```
