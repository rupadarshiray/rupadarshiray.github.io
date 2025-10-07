---
created: 2025-08-04T19:40:08
modified: 2025-08-04T19:40:16
tags:
  - Inculcation
title: "Inculcation: Riemann surfaces, that is, complex 1-manifolds, complex algebraic curves, round/flat/hyperbolic surfaces and so on"
aliases: "Riemann surfaces, that is, complex 1-manifolds, complex algebraic curves, round/flat/hyperbolic surfaces and so on"
---

## Riemann surfaces


### introductory textbooks

- Forster
- Miranda
- [Wilhelm Schlag](https://gauss.math.yale.edu/~ws442/complex.pdf)
- https://mathweb.tifr.res.in/~srinivas/rsfull.pdf (uses ringed spaces definition of Riemann surfaces where the rings are rings of functions on it)
- https://math.berkeley.edu/~teleman/math/Riemann.pdf
- Donaldson
- [Jost](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf)
- Renzo Cavalieri, Eric Miles (Hurwitz theory)
- ...a hundred more books and notes available online https://mathoverflow.net/questions/313254/references-for-riemann-surfaces


### introductory lecture videos

- A full course on [Riemann Surfaces by M Khalkhali](https://www.math.uwo.ca/faculty/khalkhali/riemannsurfaces.html) with [videos on YouTube](https://www.youtube.com/playlist?list=PLFLLJhtIPhRaiJp0jJM648EC6A7swNDKL)
- These lectures assume covering space theory (algebraic topology) and uniformization theory and does (pre-moduli space) classification of Riemann surfaces: https://www.youtube.com/playlist?list=PLbMVogVj5nJSm4256vuITlsovUT1xVkUL
- [Riemann Surfaces](https://www.bilibili.com/video/BV1fW41197nr/?spm_id_from=333.337.search-card.all.click) by Jacob Bernstein for MSRI summer school 2014: Complex geometry and geometric analysis on complex manifolds ^yg7hmg
	- Prerequisites: 
		- Knowledge of basic complex analysis—at the level of Ahlfors, Complex Analysis, Chapters 1-5—will be assumed. Some basic familiarity with (abstract) surface theory and differential forms will be helpful. However, I will review this material as needed.
	- Reading: 
		- The main text will be [Donaldson - Riemann Surfaces](http://www2.imperial.ac.uk/~skdona/RSPREF.PDF).
		- [Syllabus](https://www.slmath.org/ckeditor_assets/attachments/106/bernstein_hein_naber_syllabus.pdf)
	- Other useful references:
		- Farkas and Kra, Riemann Surfaces; a classical text on the subject.
		- Miranda, Algebraic Curves and Riemann Surfaces; a more algebraic perspective.
	- Week 1: Introduction to Riemann Surfaces
		- Surfaces and Topology
		- Riemann Surfaces and Holomorphic Maps
		- Maps between Riemann Surfaces
		- Calculus on Riemann Surfaces
		- De Rham Cohomology
	- Week 2: Geometric Analysis on Riemann Surfaces
		- Elliptic Functions and Integrals
		- Meromorphic Functions
		- Inverting the Laplacian
		- The Uniformization Theorem
		- Riemann Surfaces and Minimal Surfaces 

## moduli of Riemann surfaces


🤔


## Genus zero Riemann surfaces, flat tori, lattices and elliptic curves




## Higher genus Riemann surfaces, hyperbolic surfaces, Fuschian groups and Teichmuller theory


- Fuschian groups, Teichmuller theory and MCGs
	- Farb Margalit - Mapping class groups
	- [GTM091.The.Geometry.of.Discrete.Groups Beardon.A.F..(Springer.1995)](https://cjhb.site/Files.php/Books/Discrete%20Mathematics/GTM091.The.Geometry.of.Discrete.Groups%2C.Beardon.A.F..\(Springer.1995\)\(ISBN.3540907882\)\(T\)\(347s\).pdf)
- geodesic flow
- spectra
	- [Geometry and Spectra of Compact Riemann Surfaces - Google Books](https://www.google.co.in/books/edition/Geometry_and_Spectra_of_Compact_Riemann/MXL1vO5GmmsC?hl=en&gbpv=1&pg=PR3&printsec=frontcover)
	- *arithmetic quantum unique ergodicity*

## modular surfaces


- https://web.math.princeton.edu/~sarnak/Preprints/baltimore.pdf
- [Lectures on Diophantine approximation and Dynamics](https://www.math.uzh.ch/gorodnik/tifr/)

## Automorphism groups

- [Riemann surfaces and their automorphism groups - GAC2010 workshop, HRI, India](https://www.icts.res.in/sites/default/files/1285058955JonesWshopGAC.pdf)
- [Isometry groups of hyperbolic surfaces – SPP 2026](https://blog.spp2026.de/isometry-groups-of-hyperbolic-surfaces/)
- [Hyperbolic Surfaces with Prescribed Infinite Symmetry Groups on JSTOR](https://www.jstor.org/stable/4098165?seq=1)
- http://www.kurims.kyoto-u.ac.jp/EMIS/journals/DMJDMV/vol-06/16.pdf
- https://math.uchicago.edu/~may/REU2013/REUPapers/Benson-Tilsen.pdf


## morphisms




https://en.wikipedia.org/wiki/De_Franchis_theorem says there are only finitely many non-constant holomorphic mappings between two fixed compact Riemann surfaces of genus greater than 1.

bounds on that number: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/4F55ECA45BC877D46534577A07CA2C56/S0013091507000223a.pdf


| $$ _{g}X\to \! _{h}X $$ | $g=0$                 | 1                                | 2         | 3            | 4   | 5   | 6   |
| ----------------------- | --------------------- | -------------------------------- | --------- | ------------ | --- | --- | --- |
| $h=0$                   | rational maps $\C(X)$ |                                  |           |              |     |     |     |
| 1                       |                       | translations and a few isogenies |           |              |     |     |     |
| 2                       |                       |                                  | $\leq 84$ | 0            | 0   | 0   | 0   |
| 3                       |                       |                                  |           | $\leq 83(2)$ | 0   | 0   | 0   |
| 4                       |                       |                                  |           |              |     | 0   | 0   |
| 5                       |                       |                                  |           |              |     |     | 0   |
| 6                       |                       |                                  |           |              |     |     |     |

