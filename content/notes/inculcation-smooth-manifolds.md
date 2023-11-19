---
created: 2023-03-30T15:26:34
modified: 2023-10-06T22:20:32
tags: [Inculcation]
title: 'Inculcation: smooth manifolds'
aliases:
    - 
---

> parent:: [[notes/inculcation]]


## initial philosophy of manifolds

> [!tip] Philosophy of manifolds I: to go out of submanifolds of $\R^{n}$
> 
> After studying submanifolds of $\R^{n}$, or just surfaces in $\R^{2}$, why do we want to think of arbitary sets as "manifolds", as something we can do things we could do to smooth surfaces? Because then *anything* could be a manifolds. 
> 
> Well not *anything*, but many sets can be attached with a smooth manifold structures. For example, $SO(\R^{3})$ (which is a group or a set of functions really!), spacetime in physics, . This helps us do *analysis* in more kinds of spaces, and generalise geometry equipped with differentiation.


## architecture of manifolds

Sadly, the definition and introductory theory of manifolds is "complete garbage" [^evan]

> [!check] Architecture of manifolds I
> 
> We obtain a set attached with coordinates.

[^evan]: [[notes/evan-chen-napkin]], chapter 45

### hence manifolds generalize coordinate systems

## motivation for the technologies

There are three motivations for the definitions and ideas
- Analysis and geometry in the submanifolds of $\mathbb{R}^{n}$ or surfaces in $\mathbb{R}^{3}$
- Analysis in normed vector spaces
- Topology, algebraic topology




There are some absurdity in the definitions of objects which are very simple in the case of normed vector spaces

| technology                                  | in normed vector space $V$                                                                         | in smooth manifold $M$                                                                                                       |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| tangent vectors                             | (not essential) velocity of curves in $V$ passing though some $p\in V$ are **just vectors in $V$** | multiple ways to define it                                                                                                   |
| tangent space                               | (not essential) $V$ itself because any $v \in V$ is a velocity of some curve                       |                                                                                                                              |
| tangent bundle                              | (not essential) ~~disjoint union of $V$ for all elements of $V$, hence **$V \times V$**~~          | $TM:= \bigcup_{p \in M} \{ p \} \times T_{p}M$                                                                               |
|                                             |                                                                                                    |                                                                                                                              |
| tangent vector fields                       | a smooth function $V \to V$                                                                        | a smooth function $M \to TM$ such that $p \in M$ is mapped to a vector in $v \in T_{p}M$ (called a *smooth section of $TM$*) |
| dual (tangent) space                        | $V^{*}:=\mathrm{Hom} \mathsf{Vec}_{\R}(V,\R)$                                                      | $T^{*}_{p}M := (T_{p}M)^{*}$                                                                                                 |
| $(p,q)$-(tangent) tensor space              | $\mathbf{T}^{p,q}(V)$                                                                            | $\mathbf{T}^{p,q}(T_{p}M)$                                                                                                 |
| tensor bundle                               | (not essential)                                                                                    | $\mathbf{T}^{p,q}TM:= \bigcup_{p \in M} \{ p \} \times \mathbf{T}^{p,q}(T_{p}M)$                                         |
| $k$-exterior (tangent) vectors              | $\Lambda^{k}(V)$                                                                                   |                                                                                                                              |
| differential $k$-form                       | a smooth function $\omega: V\to \Lambda^{k}(V)$                                                    |                                                                                                                              |
| integration of differential forms on chains |                                                                                                    |                                                                                                                              |
|                                             |                                                                                                    |                                                                                                                              |

## a first course just to construct the theory :(

- ==book== Lee - Smooth manifolds
- ==book== Boothby - manifolds
- also uses the theory inside physics
	- ==lectures== [Frederic Schuller -International Winter School on Gravity and Light 2015](https://www.youtube.com/playlist?list=PLFeEvEPtX_0S6vxxiiNPrJbLu9aK1UVC_)
	- ==lectures== Frederic Schuller - Lectures on the Geometric Anatomy of Theoretical Physics

### tangents


#### differential forms

<iframe width="560" height="315" src="https://www.youtube.com/embed/1lGM5DEdMaw?si=NbdykTqGLyJzPNTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/2ptFnIj71SM?si=pX0YhRJVtog6IZNu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### bundles


## beyond the first course and uses

- (semi)Riemannian geometry, GR
- Differential topology
	- Morse theory
	- Cobordism theory
- Knots
- Geometric classical mechanics (classical mechanics done right)
	- Lagrangian dynamics
	- Symplectic geometry and Hamiltonian dynamics
- Geometric classical field theory
- Gauge theory
- Geometric quantum mechanics
	- quantization (classical mechanics $\to$ quantum mechanics, proper)
- Smooth dynamical systems: vector fields on manifolds can give us ODEs [[inculcation-odes|Inculcation: ODEs]]