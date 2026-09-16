---
created: 2025-03-15T18:28:19
modified: 2025-03-15T18:28:19
tags:
  - talk/attended
title: Sarbeswar Pal - Rational curves and a conjecture of Drinfeld
---




> [!abstract]
> Everyone is invited to the next talk of the Graduate Students’ Group seminar, whose details are as follows:
> 
> Speaker: Dr. Sarbeswar Pal
> 
> Topic: Rational curves and an application of it to a conjecture of Drinfeld.
> 
> Abstract: In this lecture I will introduce the basic notions of rational curves in a smooth projective variety over complex numbers. We will see some interesting properties of the variety of rational curves and see how this helps us to prove a conjecture of Drinfeld.
> 
> Date: 15 March, 2025 (Tomorrow)
> Time: 6:00 PM - 7:00 PM
> Venue: AB2 2A or 2B
> 



> [!question] 
> Let $X \subset \C P^{M}$ be a smooth projective variety. Does there exist a rational curve $$ \C P^{1}\to X $$
> 
> In general, no.


> $\T X$ is not **nef**.

$$ c_{1}(\T X)=  $$

---

We know $$ \mor{Mor}_{d}( P^{1},X) $$is a quasi-projective variety.

---


Suppose $$ f: P^{1}\to X $$ is a rational curve and
$$ \T X \to X $$ is the projection from the tangent bundle.

Now the pullback
$$ f^{*}\T X \to P^{1} $$ is a vector bundle on $P^{1}$.


> **Grothendiek.** Any vector bundle on $P^{1}$ is a direct sum of line bundle $$ \bigoplus _{i} \mathcal{O}(a_{i}) $$for $a_{i}\in \Z$

As $$ \dim X = n \implies \T X \text{ has rank }n \implies f^{*}\T X \text{ has rank }n$$

Then $$ f^{*} \T X = \bigoplus_{i=1}^{n} \mathcal{O}(a_{i})  $$
 for $$ a_{1}\geq \dots\geq a_{n} $$
> [!definition] $f$ is free if $a_{n}\geq 0$ and is non-free otherwise

$X$ is Fano if...

$$ K_{X}:= \nbit{\Lambda}^{n} \T X $$ (canonical bundle)

Let $L$ is a globally generated line bundle? $$ \Phi_{L} :X \to P(H^{0}(L)^{*}) $$
Then ...

> [!definition] $X$ is **Fano** if $K_{X}$ ample.

> **Fact:** $\exists$ an open set $X^{\text{free}} \subset X$ such that any rational curve which intersects $X^{\text{free}}$ is **free**.

> [!question] 
> is $X^{\text{free}}$ empty? is it proper?

We don't know, in general.

> [!definition] $X^{\text{nf}}:= X\setminus X^{\text{free}}$ 

> [!question] 
> $X$ be a Fano projective manifold of (Picard rank 1) such that $\T X$ is not nef. Then $X^{\text{nf}}$ is nonempty. 
> 1. What can we say about $\dim X^{\text{nf}}$?

Guess: $X^{\text{nf}}$ is pure of co-dim 1.

> [!example] 
> - $P^{n}$ is Fano of Picard rank 1, and tangent bundle is... 
> - $$ X= \mathrm{Gr}(r,\C^{n}) $$


> [!example] Examples of non-nef
> Let $X$ be a general hypersurface in $P^{n}$ of degree $d\leq n$.

- Intersection of two quadratics
- $X$  is curve $$ M(r,n) $$ be moduli of stable vec buns. It is smooth, Fano of Picard rank 1


---

$E\in M(r,n)$ is called **wobbly** if $$ \exists \phi: E\to E\otimes  K_{C} $$ such that $\phi^{m}=0: E\to E\otimes K_{C}$.

> [!warning] Drinfeld's conjecture
>Locus of wobbly bundles is pure of codim 1

> [!theorem] A vector bundle is wobbly if $\exists$ a non-free rational curve passing through $E$.

---


> [!warning] Conjecture
> Let $X$ be Fano, Picard rank 1, different from $P^{n}$. Then any non-constant endomorphism $$ X\to X $$ is isomorphism.

All proved examples (Grassmanians, homogeneous spaces?) have $\T X$ nef.


> [!bug] Guess
> Let $X$ Fano, Picard rank 1, $X \neq P^{n}$, $\T X$ is not nef $$ f: X\to X $$ then $$ f^{-1}(X^{\text{nf}}) = X^{\text{nf}} $$

This proves the conjecture.

