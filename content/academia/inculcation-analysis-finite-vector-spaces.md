---
created: 2023-03-29T16:44:22
modified: 2023-03-29T16:44:22
tags:
  - Inculcation
title: "Inculcation: Analysis in finite-dimensional vector spaces"
aliases:
  - "Inculcation: Analysis in finite-dimensional vector spaces"
---

> parent:: [[inculcation]]


- A lot of these material is present in [[inculcation-math-pedias#Napkin|Napkin]] but it does not give enough page-length to fully grasp the whole topic, maybe?
- [[shifrin-multivariable-mathematics]] does a good job at the calculus
- Analysis by Herbert Amann and Joachim Escher [Volume I](http://library.lol/main/D52F82501240A7F94F77CCA630B43F6E) or Rudin or Apostol contains the analysis

![[derivatives-differential-forms-and-beyond-youtube]]


## total and directional derivative of functions

*Total derivative* of function $$ f:U \subseteq V\to W $$ between finite-dim real normed vector spaces at a point $p\in U$ is supposed to be a linear map $$D_{p}f:V\to W$$ that "approximates" $f$ near $p$. So if $D_{p}f$ is a rotation (as a linear map), then $$ f: U \to f(U) $$ should "look" like a rotation "near $p$".


## measurable functions and their integrals

AKA "*measure theory*".

- [cmat.edu.uy/~mordecki/courses/medida2013/book.pdf](https://www.cmat.edu.uy/~mordecki/courses/medida2013/book.pdf)


## differential forms, their integration and exterior derivative


We look at the (familiar) structure of

$$\begin{array}{} \mathcal{C}^{\infty}(U) &\xrightarrow{\mathrm{grad} } &\mathrm{Vec}^{\infty}(U)&\xrightarrow{\mathrm{curl}} &\mathrm{Vec}^{\infty}(U)&\xrightarrow{\mathrm{div}} &\mathcal{C}^{\infty}(U)  \\
&&\mathrm{curl}\circ \mathrm{grad}=0  \\
&&&& \mathrm{div}\circ \mathrm{curl}=0  \\
\end{array}$$

where $U \subseteq \mathbb{R}^{3}$.

Writing this in a different notation: for $\mathcal{C}^{\infty}(U) \xrightarrow{\mathrm{grad} } \mathrm{Vec}^{\infty}(U)\xrightarrow{\mathrm{curl}} \mathrm{Vec}^{\infty}(U)$ 

$$ \begin{array}{c} f & \xmapsto{\mathrm{d}} &\mathrm{d}f= \underbrace{ \sum_{i} \frac{\partial f}{\partial x_{i}} \mathrm{d}{x_{i}} }_{ \text{this looks like grad} } \\
& & \omega= \sum_{i} \omega_{i} \mathrm{d}{x_{i}} & \xmapsto{\mathrm{d}} & \mathrm{d}\omega = \underbrace{ \sum_{i} \mathrm{d}\omega_{i} \wedge \mathrm{d}{x_{i}} }_{ \text{this looks like curl} }  \end{array}
$$

and then continuing for $\mathrm{Vec}^{\infty}(U)\xrightarrow{\mathrm{div}} \mathcal{C}^{\infty}(U)$

$$\begin{array}{c} 
&&&&\mathrm{d}\omega = \underbrace{ \sum_{i} \mathrm{d}\omega_{i} \wedge \mathrm{d}{x_{i}} }_{ \text{this looks like curl} } \\

&&& & \alpha = \sum_{i>j} \alpha_{ij} \mathrm{d}x_{i} \wedge \mathrm{d}x_{j} & \xmapsto{\mathrm{d}} & \mathrm{d}\alpha = \underbrace{ \sum_{i>j} \mathrm{d}\alpha_{ij} \wedge \mathrm{d}x_{i} \wedge \mathrm{d}x_{j}  }_{ \text{this looks like div (check!)} }\\
&&&&&&\beta= \beta_{123}  \ \mathrm{d}{x_{1}}  \wedge \mathrm{d}{x_{2}}  \wedge\mathrm{d}{x_{3}} &\xmapsto{\mathrm{d}} 0 \end{array} $$
where we understand that the "wedge" $\wedge$ works like the cross product $$ \mathrm{d}{x_{i}} \wedge \mathrm{d}x_{j} = - \mathrm{d}x_{j} \wedge \mathrm{d}x_{i} $$
It is easily seen $$ \mathrm{d}(\mathrm{d} (-) )=0 $$
doesn't matter what's inside the $(-)$, a real function $f$ or the objects $\omega$, $\alpha$ or $\beta$ (called 0,1,2,3-forms respectively) when their components are differentiable functions.

We see this "exterior derivative" $$\mathrm{d}$$ thus "unifies" grad, curl and div and generalizes because it may be defined as $$\text{d}\omega=\mathrm{d}{\left( \sum\omega_{I} \mathrm{d}{x_{I}} \right)}:= \mathrm{d}{\omega_{I}}\wedge \mathrm{d}{x_{I}}$$
in any dimension.

But what are these $$ \mathrm{d}x_{i} $$
mean?

---

Integrating differential forms on chains (generalizing line, surface, volume integrals) is very simple $$\int \omega $$

Here we have the fundamental theorem of calculus but generalized:


<iframe width="560" height="315" src="https://www.youtube.com/embed/1lGM5DEdMaw?si=NbdykTqGLyJzPNTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---


 The de Rham complex $$ \Omega^{k} \xrightarrow{\mathrm{d}{}} \Omega^{k+1} $$
begs the question, when is a closed form $\mathrm{d}{\omega}=0$ exact (there exists $g$ such that $\mathrm{d}{g}=\omega$?)

The Poincare lemma says locally, any closed form is exact. Fine, if you're happy with it. But there are closed forms whose integrals are not zero.

Hence they are not exact. Then when are **closed forms exact, globally?**

But plot twist! This question is purely topological!

<iframe width="560" height="315" src="https://www.youtube.com/embed/2ptFnIj71SM?si=pX0YhRJVtog6IZNu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


<!--
### things that requires a metric

- Musical isomorphism: converting vector fields to 1-forms
- Hodge duals


### algebraic structures that naturally came up

- Vector space, linear transformations
- Tensor product of vector spaces
- **Algebras of a vector space**: Tensor algebra, symmetric algebra, exterior algebra
- Exact sequences, cohomology
- sheaves


-->

## vector fields and their flows


The relevant material is in [[inculcation-odes]]

![[inculcation-odes#vector fields and ODE dictionary]]



## in complex vector spaces

We may mimic everything above to complex vector spaces with a norm!

This for example leads to **closed** differential forms of the form $$ f(z) \mathrm{d}z $$ where $\mathrm{d}z:= \mathrm{d}x+i \mathrm{d}y$. 

This starts the study of *complex analysis* (well, if we consider complex analytic $f$ :).

<!--
## next: generalize!


![[inculcation-linear-constructions#^bggpgh]]

-->