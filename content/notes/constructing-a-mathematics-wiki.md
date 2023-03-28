---
created: 2022-08-16T01:34:29
modified: 2022-08-16T01:34:29
tags: [Workstation, Wiki]
title: 'Constructing a Mathematics Wiki'
aliases:
    - 
---

# Iteration I

To [[notes/constructing-hierarchical-wiki|construct a wiki]] for for Mathematics initially I had chosen this structure:

> [!bug] First iteration of wiki structure
> 
> It is difficult, in my opinion to have a strong divisions in Mathematics topics. But we may use the classification developed in [zbMATH Open](https://www.zbmath.org/classification/) with the following first level in hierarchy grouping the numbered classes:
> - `f` Foundations: `03`
> 	- Logic, Proofs, Sets
> - `a` Abstraction: `05-22` 
> 	- Combinatorics, Algebra, Abstract algebra, Number theory, etc.
> - `y` Analysis: `26-49`
> 	- Analysis in $\mathbb{R}, \mathbb{R}^n, \mathbb{C}$
> - `g` Geometry: `51-53`
> - `t` Topology: `54-58`
> - `p` Applications: `60-97`
> 
> This can easily lead to problems, and thus must be handled and refactored in due course.

which finally resulted in:

```js
f. "Formalism"
	- logic
	- proofs
	- sets
a. "Algebra and Abstraction"
	- N
	- Z
	- Q
	- R
		- exixtence and construction
		- algebra
		- plolynomials
	- a.matrices
	- a.polynomials
	- a.combinatorics
	- a.groups
	- a.vector spaces
	- a.number theory
y. "Analysis"
	- analysis on spaces
		- R
			- construction
			- real functions
			- real functions.single
			- real functions.multi
			- limits
		- analysis on metric spaces
			- functions between metric spaces
				- limits of functions between metric spaces
				- continuous functions between metric spaces
		- analysis on vector spaces
	- analysis on systems
		- dynamical systems
		- PDEs
g. "Geometry"
t. "Topology"
	- metric spaces
p. "Applied"
	- statistics
```



And it eventually lead to problems, as visible from the multiple presence of a note on `R` (the reals) under Algebra *and* analysis.

It was also difficult to write on `metric spaces`, the definition had to kept under `topology` but the definition of limit of functions etc. had to kept under `analysis`.
# Iteration II
But this gave me and idea to look it with a different light. The present system is as follows:

> [!done] Second iteration of vault structure
> 
> We have a four level hierarchy:
>  
> - **Mathematical Foundations**
> 	- Logic, proofs
> - **Mathematical Structures**
> 	- Essentially `sets` all “structure” defined on `sets`
> 	- All abstract stuff, no precise constructions, all from vector spaces to manifolds are here.
> - **Mathematical Spaces**
> 	- All precise constructions.
> 	- Starting from all “number sets”: $\mathbb{N, Z, Q, R, C}$
> 	- Their algebra, topology, analysis on them - all studied under them - as it should be.
> 	- All the other sets like $\mathbb{R}^n$ and matrices also fall here.
> - **Mathematical Systems**
> 	- Essentially everything else.
> 	- Analytical systems: from dynamical system to PDEs
> 	- Algebraic systems: from polynomials to system of equations
> 


```js
//second iteration of wiki structure

- foundations
	- logic
- structures
	- sets
	- groups
	- rings
	- fields
	- vector spaces
	- vector spaces inner product
	- vector spaces normed
		- analysis
	- algebras
		- Grassmann/Exterior algebra
		- Clifford/Geometric algebra
		- Tensor algebra
	- metric spaces
		|- topology, analysis, etc.
	- topological spaces
	- topological vector spaces
	- Hilbert spaces
	- Fréchet spaces
	- Banach Spaces
	- topological manifolds
		- smooth
			- Riemannian
			- Pseudo-Riemannian
			- Symplectic
			- ...
	- category
- spaces
	- N
	- Z
	- Q
	- R
		|- algebra
		|- analysis
		|- topology
		|- geometry
	- R^3
	- R^n
		|- algebra
		|- analysis
		|- topology
		|- geometry
	- M_nxm(F) //matrices from field F
	- C
	- G^n
	- l^p
	- L^p
	- C^p(U)
	- C^n
- systems
	- polynomials
	- comninatorics
	- system of equations
	- sequences, series
	- dynamical systems
	- functional equations
	- PDEs
	- geometry
	- number theory
	- statistics
```


This shows the page for Mathematical Structures:
![](https://i.imgur.com/AInJrZU.png)
