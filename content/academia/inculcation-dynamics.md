---
created: 2024-10-21T15:20:34+05:30
modified: 2024-12-07T00:51:21+05:30
tags: [Inculcation]
title: 'Inculcation: everything in a dynamics pov'
aliases: null
---

## motivating dynamical systems

What is "dynamics"? A dynamical system, in general, is a monoid action on a set.

Ignoring the generality, let's consider the definition of a discrete dynamical system

> [!important] **Definition:** discrete dynamical system (where the time is $\mathbb{N}$)
> A function $$ f:X\to X $$ on a set is considered to be a **discrete dynamical system** (autonomous) where the iterations of the map $$\mathsf{Id}, f , f^{2}, f^{3}, \dots $$ are considered the time map for $t=0,1,2,3,\dots$. Thus orbit of a point $x\in X$ is defined to be $$ x, f(x), f(f(x)), f(f(f(x))),\dots $$

Simply put, just "iterations of a map" produces the dynamics.


We reinterpret a lot of math in terms of dynamics:

- [[inculcation-linear-algebra|Linear algebra]] is study of iterations of one linear map on a vector space.
- **Finite group theory** studies group action on a (finte) set are by definition "dynamics"
- A **module** of a ring is just a special group action by the additive group of the ring which also plays well with the multiplicative structure. **Representation theory** in most cases studies such modules.
- There are various applications of theorems that are "dynamical"
	- proof of existence of ODEs using contraction mapping theorem
- Solutions of an [[inculcation-odes|ODE]] (with unique solutions) on $M$ produces a flow map $$ \phi^{t}: M \to M $$ on the phase space $M$ that map initial conditions $x$ to solution curves $\phi^{t}(x)$ (this is the definition). Thus this is a "continuous-time dynamics".
- A common proof of existence of solutions to ODEs uses a fixed point theorem, which is in turn a "dynamical" theorem!
- Machines have a natural monoid action.


## the fixed point theorem for contractions


## complex dynamics

