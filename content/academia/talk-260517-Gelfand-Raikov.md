---
created: 2026-05-17
modified: 2026-05-23T18:33:49
tags: [talk, attended]
aliases: []
title: Talk on the Gelfand-Raikov theorem
---

> [!abstract]
> Speaker: [[Manan-Jain|Manan Jain]]
> 
> Title: The Gel'fand-Raikov Theorem
> 
> Abstract. A topological group is said to admit a complete system of linear representations if they separate the points of the group. The existence of unitary irreducible complete systems was established for compact groups by Peter-Weyl and Haar, and for locally compact Abelian groups by von-Neumann and Gelfand-Raikov. The latter then extended the result to all locally compact groups, which is the Gel'fand-Raikov theorem. In this talk, we will go over the GNS correspondence between cyclic unitary representations and positive-definite functions for groups, and then leverage it to obtain "enough" unirreps to prove the theorem. The only formal prerequisites for the talk are basic measure theory and functional analysis.
> 
> Timing: 11AM, 17 May (Sunday)

The talk was on a proof of the [Gelfand–Raikov theorem](https://en.wikipedia.org/wiki/Gelfand–Raikov_theorem) which states that the collection of unitary representations of a locally compact Hausdorff topological group $G$ separates points of $G$.

The proof requires constructing the GNS correspondence for groups: which functions on $G$ form the matrix coefficients of unitary representations on $G$.

The references for the theorem is

- Gelfand and Raikov's original paper *I. Gelfand, D. Raikov, “[Irreducible unitary representations of locally bicompact groups](https://www.mathnet.ru/php/archive.phtml?wshow=paper&jrnid=sm&paperid=6181&option_lang=eng)”, Rec. Math. (Mat. Sbornik) N.S., 13(55):2-3 (1943), 301–316*
- Bekka, de la Harpe, "Kazhdan's Property (T)", Appendix C (GNS construction)
- Folland's textbook on harmonic analysis, chapter 3

> [!quote]
> An aspect of unitary representation theory I didn't bring up today but is nevertheless very interesting is the decomposition of a given representation.
> 
> For finite (or more generally, compact) groups, every unitary representation decomposes into a _direct sum_ of the irreducibles. In particular, the left regular representation of the group contains all (isomorphism classes of) irreducibles of the group as direct summands.
> 
> This already breaks down in the locally compact Abelian setting: the left regular representation of the reals under addition has _no_ finite-dimensional subrepresentations (of course, the irreducibles are all one-dimensional, the characters of the group).
> 
> What one still has is decomposition into what one calls a _direct integral_ of Hilbert spaces. This decomposition is done with respect to a measure on the unitary dual, which is what one calls the Plancherel measure (Fourier analysis class throwback!)
> 
> It turns out that we still have a "reasonable" Plancherel measure for a large class of groups, called the type I groups. The definition comes from operator algebras and has something to do with the group algebras. For groups that are not type I, it turns out you can still decompose your unitary representations into direct integrals, but the uniqueness is lost.
> 
> One of Harish-Chandra's major accomplishments was determining the Plancherel measure for a large class of Lie groups (I forgot the right adjectives...), and found out that it is supported entirely on what one calls "tempered representations".
> 
> (My own work is concerned with a certain generalisation of temperedness for unitary representations)
> 
> But the Plancherel measure gives an interesting interpretation to how different irreducibles occur in a decomposition: the parts that occur as direct summands correspond to positive Plancherel measure, while those that can be "approximated" in a certain sense by the left regular representations are tempered (and still in the support of this measure, typically).
> 
> \- Manan
