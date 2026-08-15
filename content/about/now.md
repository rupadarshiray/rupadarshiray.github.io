---
created: 2021-12-18T02:22:36
modified: 2021-12-18T02:22:36
tags: []
permalink: /now
title: now
description: This is a [/now page](https://nownownow.com/about) for me!
---



[[my-masters-at-iiserm|I graduated from IISER Mohali with a Masters in Mathematics in June '26]] after completing [[my-ms-thesis|my MS thesis in April]].


```base
views:
  - type: list
    name: Last created
    filters:
      and:
        - file.folder.contains("academia")
    order:
      - file.name
    sort:
      - property: created
        direction: DESC
    limit: 4
    columnSize:
      file.name: 278
      file.folder: 371
      file.path: 468

```


<!--- 
Working on my [[my-ms-thesis|MS thesis]]: on symmetric spaces, their boundaries, rigidity and ergodicity!
