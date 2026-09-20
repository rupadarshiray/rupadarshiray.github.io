---
created: 2025-06-30T19:01:58
modified: 2026-09-14T05:35:43
tags: [problem]
aliases: []
title: Which smooth manifolds can be made homogeneous?
---

During our Riemannian geometry course, [[Manan-Jain|Manan]] asked which homogeneous smooth manifolds $$ G \underbrace{ \curvearrowright }_{ \text{transitive} } M $$ can be made Riemannian homogeneous $$ G \underbrace{ \curvearrowright }_{ \text{transitive} } (M,\g) $$

The answer is very simple: [the necessary and sufficient condition is that point stabilizers $G_{p}$, which act linearly on the tangent space $\T_{p}M$, must have pre-compact image in $\nit{GL}(\T_{p}M)$.](https://rupadarshiray.github.io/notes/YiYNs7E5LmU1GrIU2AfctR.pdf)


^[https://mathoverflow.net/questions/346364/is-every-homogeneous-space-riemannian-homogeneous]
^[https://math.stackexchange.com/a/3876991/1290493]
^[[dg.differential geometry - How do you see that higher genus surfaces are not homogeneous? - MathOverflow](https://mathoverflow.net/questions/104104/how-do-you-see-that-higher-genus-surfaces-are-not-homogeneous#comment267541_104104)]

It is easy to construct counterexamples.

Every 2-transitive Lie group action on a connected smooth manifold (of dim $\geq 2$?) cannot be Riemannian because it cannot preserve a metric. The action can at most take two equidistant points to another pair of equidistant points.

Also, we can easily [count the dimension of the Lie group $\mor{Isom}(M,\g)$ when $M$ is connected](https://rupadarshiray.github.io/notes/JxeubBtaIVyOB55Kt6STWt.pdf). $$\begin{aligned} \lq{\mor{Isom}(M,\g)}{\mor{Isom}(M,\g)_{p}} & \isom_{\cat{Man}}  M\\  \dim \mor{Isom}(M,\g) - \dim \mor{Isom}(M,\g)_{p} &= \dim M \\  \dim \mor{Isom}(M,\g) &\leq  \dim O(\T_{p}M, \g_{p}) + \dim M \\ &= \frac{1}{2} \dim M (\dim M-1) + \dim M \\ &= \frac{1}{2} (\dim M) (\dim +1) \end{aligned}$$ 
This means, for example, for $\dim M =2$ we have $\dim \mor{Isom}(M,\g) \leq \frac{1}{2}(2)(3)=3$.

For these reasons, $$ \underbrace{ \nit{PSL}(2)(\C) }_{ \dim = 6 } \curvearrowright \C \pmb{P}^{1} \isom_{\cat{Man}} \underbrace{ S^{2} }_{ \dim = 2 } $$ does not preserve any Riemannian metric.


## Is every smooth manifold homogeneous?

- Given any two points in a connected manifold, there exists a diffeomorphism taking one to the other. ^[[differential geometry - Proving that given any two points in a connected manifold, there exists a diffeomorphism taking one to the other - Mathematics Stack Exchange](https://math.stackexchange.com/questions/1196147/proving-that-given-any-two-points-in-a-connected-manifold-there-exists-a-diffeo)]
- However, not all smooth manifolds are homogeneous $G$-spaces for (finite dim) Lie groups $G$: there are non-trivial necessary conditions ^[[dg.differential geometry - Example of a manifold which is not a homogeneous space of any Lie group - MathOverflow](https://mathoverflow.net/questions/89345/example-of-a-manifold-which-is-not-a-homogeneous-space-of-any-lie-group)].

> [!theorem] **(Mostow, 2005)** $M$ is a compact homogeneous $G$-space $\implies \chi(M)\geq 0$

^[[A Structure Theorem for Homogeneous Spaces | Geometriae Dedicata](https://link.springer.com/article/10.1007/s10711-004-1675-9)]



## Is a quotient of a Lie-homogeneous again Lie-homogeneous?

No. By Mostow's result, higher genus compact orientable surfaces $T^{2}_{g}, g\geq 2$ are not Lie-homogeneous, but their universal cover is $\R^{2}$ which is Lie-homogeneous.

The fact that they are not Riemannian homogeneous is easily proven by Riemann surface techniques. ^[https://mathoverflow.net/a/104106]



## Classification of connected isotropic Riemannian manifolds

Classification of every connected isotropic Riemannian manifolds is actually very simple: they are precisely [all globally symmetric spaces of rank 1](https://rupadarshiray.github.io/notes/tNmsevssMfFn3LWC3cYQiH.pdf). These are also precisely all the Riemannian manifolds whose isometry group act transitively on all pairs of equidistant points.

## Classifying homogeneous Riemannian manifolds

Much harder.

^[https://math.stackexchange.com/a/4920625]

<!---

|              |                                                                        |                                                             |
| ------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
|              | Homogeneous $G$-space $M$ (that is $G\curvearrowright M$ transitively) | $$ M\isom_{G} \frac{G}{H} $$ where $H$ is a closed subgroup |
| compact $G$? | $G$-invariant metrics on $M$                                           | $H$-invariant inner products on $\goth{g} /\goth{h}$?       |


## Isometric embedding of Riemannian 2-manifolds into $(\R^{n}, \text{DOT})$

^[[dg.differential geometry - Construct embedding given metric - MathOverflow](https://mathoverflow.net/questions/123310/construct-embedding-given-metric)]





## smooth dynamics

![[MTH401.L2#for real matrices]]


![[sett.Man.R.End.iterations]]

![[space.R.n.Vec.fixed]]
