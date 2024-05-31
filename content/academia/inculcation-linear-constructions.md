---
created: 2023-11-19T10:50:02
modified: 2023-11-19T14:39:56
tags:
  - Inculcation
title: "Inculcation: Linear constructions"
aliases:
---


> Now that you see how deep things are, go back and focus on the details.

Life is very non-linear, but arguments should not be circular.

> [!tip] Philosophy: construct spaces and do algebra, analysis, geometry, and whatever we can do!
> - the idea is to *create* meaning, objects out of nothing..., even in familiar spaces and then going to unfamiliar ones!
> - reminder: nothing (even rigor) is more scary than doing wrong stuff!


We start with logic and set theory, do analysis, algebra, geometry and topology: there is no actual distinction between their build-up, only in their vibes.

![[inculcation-linear-constructions.Drawing 231119143637]]

- build the grounds
	- logic: propositional
	- logic: first order
	- first order set theory
- build structures on sets (or beyond) and work inside 
	- inside $\Z, \Q, \R$
	- out on groups
	- out on metric spaces
	- inside $\R^{n}$
	- out on vector spaces
		- out on normed $\R$-vector spaces, inner product spaces
	- surfaces inside $\R^{3}$, in submanifolds of $\R^{n}$
	- out on rings and fields
	- out on modules
	- in graphs
	- out on categories
	- out on topological spaces
	- out on measure spaces
	- out on smooth manifolds
		- smooth manifolds with more structures
	- out on infinite dim spaces
- what do we do now? everything here have a tiny different vibes
	- analysis
		- ODEs
		- PDEs
	- geometry
	- dynamics
	- mechanics
	- algebra
		- finite groups
		- representations
		- Lie algebras
	- topology and algebraic topology
	- algebraic geometry
	- number theory


### Inside reals and metric spaces


- #book Tao Analysis vol I, II - this is the best reference for any beginner!
- #book Apostol - Mathematical Analysis
- #book Rudin Analysis (Baby Rudin)
- #### Analysis in $\R$
	- Construct(!!) from $\mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$
	- Sequences, limits of sequences
- #### Metric spaces with the intuition of $\R$
	- Sequences and series
	- $\epsilon-\delta$ limits of functions, continuous functions
	- *get motivated for topological spaces*: prove the theorem that a function is continuous if and only if preimage of open sets is open


---

### Inside finite dim vector spaces spaces

We do more inside $\mathbb{R}^{n}$ and venture slightly out to do analysis in finite-dim real normed vector spaces, which are ofcourse diffeomorphic to $\R^{n}$.

- #### In normed vector spaces
	- [[inculcation-analysis-finite-vector-spaces|Analysis in finite-dimensional normed vector spaces]]
- #### Differential geometry of submanifolds of $\mathbb{R}^{n}$
	- #lecturenotes [diffgeo.pdf (ethz.ch)](https://people.math.ethz.ch/~salamon/PREPRINTS/diffgeo.pdf) One can distinguish extrinsic differential geometry and intrinsic differential geometry. The former restricts attention to submanifolds of Euclidean space while the latter studies manifolds equipped with a Riemannian metric. The extrinsic theory is more accessible because we can visualize curves and surfaces in $\mathbb{R}^{3}$ , but some topics can best be handled with the intrinsic theory...
	- better thing to do is directly jump to smooth manifolds altogether.


## Living completely outside $\R^{n}$

> [!danger] Going outside of $\mathbb{R}^{n}$ for *analysis*: there are two routes
> - *analysis on (finite dim) manifolds* (classical mechanics, ODEs, Hamiltonian systems, oscillations)
> - *analysis in function spaces(infinite dim complete normed/inner product spaces)* (quantum mechanics, PDEs, waves)

[[inculcation-analysis-finite-vector-spaces|Analysis in normed vector spaces]] was just the begining.

### *Measure spaces* (measure theory)

> I've no idea yet!


### *Topological spaces*

AKA the fields of topology, algebraic topology

> [!note] First semester course on **Topology** (AKA general topology/point set topology) - *as opposed to cute topology, we prove more content here*
> - #book Munkres
> - http://www.math.toronto.edu/ivan/mat327/?resources
> - http://math.iisc.ac.in/~gadgil/topology-2021/all-lectures/
> - [Topology (MTH-TOP) - YouTube](https://www.youtube.com/playlist?list=PLp0hSY2uBeP8jgD0wTQM-RjkakSEBdHUD)
> - For a quick one lecture introduction with motivation: [Lecture 1: Topology (International Winter School on Gravity and Light 2015) - YouTube](https://www.youtube.com/watch?v=7G4SqIboeig)

> [!note] First semester course on **Algebraic topology** - *study of holes in topological spaces*
> We learn *homotopy* groups, *homology* groups and at last *cohomology* groups!
> 
> - #book Hatcher
> - #lectures [Algebraic Topology - Pierre Albin - YouTube](https://www.youtube.com/playlist?list=PLpRLWqLFLVTCL15U6N3o35g4uhMSBVA2b)
> 



### Out on smooth manifolds

AKA *"intrinsic differential geometry"* or *analysis on manifolds*.

May try #lectures [Frederic Schuller -International Winter School on Gravity and Light 2015](https://www.youtube.com/playlist?list=PLFeEvEPtX_0S6vxxiiNPrJbLu9aK1UVC_) without any other context or to get into it fully: [[inculcation-smooth-manifolds]].



### Inside infinite dim spaces 

AKA functional analysis!

Of course, I've no idea about this.
- #lectures Frederic Schuller - Quantum Theory
