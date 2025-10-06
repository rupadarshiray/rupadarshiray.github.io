---
created: 2023-11-19T10:50:02
modified: 2023-11-19T14:39:56
tags:
  - Inculcation
title: "Inculcation: Linear constructions"
aliases:
---

> Coming from the main article: [[inculcation]], you have seen how deep things are. So now we go back and focus on the details.

## starting out

Life is very non-linear, but arguments should not be circular.

> [!tip] Philosophy: construct spaces and do algebra, analysis, geometry, and whatever we want to do!
> - the idea is to *create* meaning, objects out of nothing..., even in familiar spaces and then going to unfamiliar ones!
> - reminder: nothing (even rigor) is more scary than doing wrong stuff!


We start with logic and set theory, do analysis, algebra, geometry and topology: there is no actual distinction between their build-up, only in their vibes.

![](https://i.imgur.com/RFZF0UK.png)



- build the grounds
	- construct propositional logic
	- construct first order based on propositional logic
	- construct ZFC set theory based on first order logic
- build structures on sets (or beyond) and work inside
	- inside $\Z, \Q, \R$
	- studying [[inculcation-groups|groups]]
	- out on metric spaces
	- inside $\R^{n}$ or vector spaces
		- out on normed $\R$-vector spaces, inner product spaces
	- out on rings and fields
	- in graphs
	- out on categories
	- [[inculcation-linear-constructions#Out on topological spaces|Out on topological spaces]]
	- [[inculcation-linear-constructions#Out on measure spaces|Out on measure spaces]]
	- out on smooth manifolds
		- smooth manifolds with more structures
	- out on infinite dim spaces


## finite groups

![[inculcation#little things groups, group actions]]

## Inside the reals and metric spaces



> [!todo] Real analysis, task 1
> We must *set theoretically* construct(!!), starting from $\mathbb{Z}$, $\mathbb{Q}$ and then $\R$.

> [!todo] Real analysis, task 2
> - Define sequences, and the $\epsilon-N$ definition of limits of sequences.
> - Try to prove that $\frac{1}{n}$ converges to $0$ as $n\to \infty$

- `book` Tao Analysis volume I, II - this is the best reference for any beginner!
- `book` Apostol - Mathematical Analysis
- `lectures` [Real Analysis on YouTube – Francis Su](https://math.hmc.edu/su/real-analysis-youtube/)
	- <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL0E754696F72137EC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
- `lectures` [Real Analysis by Prof. S.H. Kulkarni, Department of Mathematics, IIT Madras - NPTEL](https://www.youtube.com/playlist?list=PLbMVogVj5nJSxFihV-ec4A3z_FOGPRCo-)
- `book` Rudin - Principles of Mathematical Analysis (Baby Rudin)
- `book` [Stein, Shakarchi - Fourier analysis](https://kryakin.site/am2/Stein-Shakarchi-1-Fourier_Analysis.pdf)

---

- #### Metric spaces with the intuition of $\R$
	- Sequences and series
	- $\epsilon-\delta$ limits of functions, continuous functions
	- *get motivated for topological spaces*: prove the theorem that a function is continuous if and only if preimage of open sets is open

## Inside finite dim vector spaces

We do more inside $\mathbb{R}^{n}$ and venture slightly out to do analysis in finite-dim real normed vector spaces, which are of course linearly bijective to $\R^{n}$.

- [[inculcation-linear-algebra|Inculcation: Linear algebra]]
- [[inculcation-analysis-finite-vector-spaces|Inculcation: Analysis in finite-dimensional vector spaces]]: total derivatives, measure theory, differential forms, flows, holomorphic functions

> [!note] Diffferential geometry of submanifolds of $\mathbb{R}^{n}$
> `lecturenotes` [diffgeo.pdf (ethz.ch)](https://people.math.ethz.ch/~salamon/PREPRINTS/diffgeo.pdf) *One can distinguish extrinsic differential geometry and intrinsic differential geometry. The former restricts attention to submanifolds of Euclidean space while the latter studies manifolds equipped with a Riemannian metric. The extrinsic theory is more accessible because we can visualize curves and surfaces in $\mathbb{R}^{3}$ , but some topics can best be handled with the intrinsic theory...*

But a better thing to do is directly jump to [[inculcation-linear-constructions#Out on smooth manifolds|smooth manifolds]] altogether...

<!---
## Living completely outside $\R^{n}$

> [!danger] Going outside of $\mathbb{R}^{n}$ (or finite dim vector spaces) for *analysis*: there are two routes
> - *analysis on (finite dim) manifolds* (comes up in classical mechanics, ODEs, Hamiltonian systems, oscillations)
> - *analysis in function spaces(infinite dim complete normed/inner product spaces)* (comes up in quantum mechanics, PDEs, waves) ^bggpgh

[[inculcation-analysis-finite-vector-spaces|Analysis in finite dimensional vector spaces]] was just the beginning 🔥🔥🔥

--->


## Over rings

AKA *rings and modules*

There are usually three

- **first course on rings and modules**
- **commutative algebra**
- **(non-commutative) algebraic structures**

## representation theory of finite groups

There are different levels to study representation theory of finite groups:

- **before doing finite groups** when one has basic ideas of matrices/linear algebra one may try to ponder on
	- consider a finite set of $n\times n$ matrices which are closed under multiplication and has inverses: 
	- easy example is for an invertible matrix $A$ consider the set $$ \{ I,A,A^{2}, \dots \} $$ this set might be finite or infinite, if this is finite then $A^{n}=I$ for some $n$, then what can we say about the matrix $A$
		- Try to prove that if the field is $\mathbb{C}$ (or any algebraically closed field) $A$ must be diagonalizable.
		- Find what the eigenvalues of $A$ may be if the field is $\C$.
	-  ![[inculcation-linear-algebra#representation theory is just spicy linear algebra]]
- **after doing finite groups and linear algebra** it is easy to study representation theory of finite groups any text like 
	- `book` Artin
	- `book` Fulton Harris
	- `book` Dummit and Foote covers all the introductory theory
- **after doing rings and modules** the same theory hits different, rephrase everything about representations of a group $G$ with its group algebra $\mathbb{C}[G]$
- **after doing commutative algebra**, I *feel* it will give another vibe


## Over fields

AKA *fields and galois theory*



## Out on measure spaces

AKA abstract measure theory, probability theory



## Out on topological spaces

AKA the fields of topology, algebraic topology

> [!note] First semester course on **Topology** (AKA general topology/point set topology) - *as opposed to cute topology, we prove more content here*
> - `book` Munkres
> - http://www.math.toronto.edu/ivan/mat327/?resources
> - http://math.iisc.ac.in/~gadgil/topology-2021/all-lectures/
> - [Topology (MTH-TOP) - YouTube](https://www.youtube.com/playlist?list=PLp0hSY2uBeP8jgD0wTQM-RjkakSEBdHUD)
> - For a quick one lecture introduction with motivation: [Lecture 1: Topology (International Winter School on Gravity and Light 2015) - YouTube](https://www.youtube.com/watch?v=7G4SqIboeig)

> [!note] First semester course on **Algebraic topology** - *study of holes in topological spaces*
> We learn *homotopy* groups, *homology* groups and at last *cohomology* groups!
> 
> - `book` [Hatcher's textbook](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)
> - `lectures` [Algebraic Topology - Pierre Albin - YouTube](https://www.youtube.com/playlist?list=PLpRLWqLFLVTCL15U6N3o35g4uhMSBVA2b)
> 



## Out on smooth manifolds

AKA *"intrinsic differential geometry"* or *analysis on manifolds*.

May try `lectures` [Frederic Schuller -International Winter School on Gravity and Light 2015](https://www.youtube.com/playlist?list=PLFeEvEPtX_0S6vxxiiNPrJbLu9aK1UVC_) without any other context or to get into it fully: [[inculcation-smooth-manifolds]].


## Inside infinite dim spaces

AKA *functional analysis*!


- `lectures` Frederic Schuller - Quantum Theory
- https://www.kryakin.site/am2/Stein-Shakarchi%5D-4-Functional-Analys.pdf
- Papa and grandpa Rudin


## Out on Riemannian manifolds



## Working with topological groups and Lie groups

Lie groups are famous. There are different levels to study Lie groups:

- **after doing finite groups** one may try to study matrix Lie groups, using knowledge of multivariable calculus, it must not be ideal
- **after doing topology, smooth manifolds** you must already know definitions of topological and Lie groups along with their Lie algebras and exponential map
- **after doing algebraic topology** you will start understanding what simply connected Lie groups allow that its quotients by discrete subgroups don't

There are references here: [[inculcation-lie-groups]]


## Out on *algebraic varieties*

