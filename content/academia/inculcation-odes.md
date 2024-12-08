---
created: 2023-09-30T09:58:25
modified: 2023-09-30T09:58:28
tags:
  - Inculcation
title: "Inculcation: ODEs"
aliases:
---


AKA "non-linear dynamics", "smooth dynamical systems", "systems" even (as in most of the content in "systems biology").

## interpret any general ODE as a vector field and study it *visually*

This is a standard *geometric* interpretation.

Did you ever think an ordinary differential equations book will have this picture:

![|700](https://i.imgur.com/yRrKeIe.png)


This is Perko's book [Differential Equations and Dynamical Systems, Third Edition (2006)](http://library.lol/main/B2FA263686F1AAB9F19B2EBA8E12DD04), a good read, if you're familiar with Analysis in $\R^{n}$. Otherwise any physics text on "non-linear dynamics" works, for example Steven Strogatz's Non-linear dynamics lecture videos and book.

### vector fields and ODE dictionary

What we do is, write a differential equation like 

$$
\dot{x}_{i}=f_{i}(x_{1},x_{2},\dots,x_{n})
$$

for all $1\leq i \leq n$ so we have $n$ equations for $n$ variables $x_{i}$ and make it even more compact by

$$
\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x})
$$

where $\mathbf{f}:\mathcal{U} \subseteq \R^{n} \to \R^{n}$ is a *vector field* on the open domain $\mathcal{U}$.

This gives us a geometric pov on ODEs in $\R^{n}$, *and* we have a 


| solving differential equations                                                                        | analysis and geometry of vector fields                                                  |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| an equation $\dot{x}=\mathbf{f}(x)$                                                                 | a vector field $\mathbf{f}:\mathcal{U} \subseteq \R^{n} \to \R^{n}$                   |
| solutions of the equation $\begin{aligned} \dot{x}(t)&=\mathbf{f}(x(t)) \\ x(0)&=x_0 \end{aligned}$ | integral curves of the vector field $t \mapsto \Phi^\mathbf{f}_{t}(x_{0})$            |
| how solutions depend on initial conditions $x_0 \mapsto x(t)$                                       | flows of the vector field    $x_0 \mapsto \Phi^\mathbf{f}_{t}(x_0)$                   |
| conserved quantities                                                                                  | integrals of the vector field                                                           |
| (linearly) decoupling the differential equation $\dot{z_{i}}= f_{i}(z_i)$                           | (linear) coordinate transformation such that $\mathbf{f}=\sum_i f_i(z_{i}) \hat{z}_i$ |


^d2a7b1


We may convert ordinary differential equation of *any* order to first order by taking enough independent variables and defining them to be higher derivatives.

### much elementary introduction

A short introduction with examples from models in population dynamics:

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=RWkkdMxW5eoywhc6&amp;list=PLhkiT_RYTEU1ibOVwE5Af5GE_WybGa9J_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

A full semester course:

> [!note] Steven Strogatz's Non-linear dynamics
> 
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=_X3mgtZ6do3oX5aj&amp;list=PLbN57C5Zdl6j_qJA-pARJnKsmROzPnO9V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
> 
> and his book [Nonlinear dynamics and chaos : with applications to physics, biology, chemistry, and engineering](http://library.lol/main/1D7C9CA22A793FE3A34C21B28DB3AB14)

This playlist (and the channel) consists of shorter videos:

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=WhjHlL_dhxpBQ_dy&amp;list=PLUeHTafWecAUqSh3Gy0NNr7H3OsXoC-aK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### more formal lectures

> [!note] ICTP's Dynamical systems
>  <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=hlva1bjtL_s2MCYJ&amp;list=PLLq_gUfXAnkmC-VWIJ_HW8cdOZLEtHfXJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
> 
> This is more a "dynamical systems" course, but has ODEs too. Lecture notes: [SLI.pdf (bris.ac.uk)](https://people.maths.bris.ac.uk/~ip13935/dyn/SLI.pdf)

And as I said above, this book has a pre-requisite of some analysis, but still one must cover the topics in the contents:

> [!tip] [Differential Equations and Dynamical Systems, Third Edition (2006)](http://library.lol/main/B2FA263686F1AAB9F19B2EBA8E12DD04) 
> 
> ![|500](https://i.imgur.com/FfULVge.png)
> ![](https://i.imgur.com/5wSZ3Dr.png)

[Arnold's Ordinary Differential Equations](http://library.lol/main/9C48404C4DC01501F08C25351487916C) is also a good resource.


## formal theory of ODEs

### hard analysis perspective on ODEs
### generalizing ODEs to manifolds: flow of vector fields on smooth manifolds

Should be motivated from Perko, classical mechanics, etc. We, very naturally, want to write ODEs on surfaces, toruses or other "surfaces" of even higher dimensions AKA manifolds.

- Define the **Lie bracket** of vector fields, **exponential** of vector fields $$\exp: \mathrm{Vec}(M)\to \mathrm{LDiff}(M)$$ 
	- think of  the Lie algebra of vector fields as "the Lie algebra" of the "Lie group" local diffeomorphisms on the manifold $M$
	- show that the flows of two vector fields commute $\iff$ their Lie bracket is $0$.
- Given a smooth $H:\R^{2}\to \R$, how can we produce a vector field that "preserves" this function? Well Hamilton's equations on $\R^{2}$ $$ \begin{bmatrix} \dot{x} \\ \dot{y} \end{bmatrix} = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} \frac{{\partial H}}{\partial x} \\ \frac{{\partial H}}{\partial y} \end{bmatrix} $$ produces a vector field perpendicular to the gradient of $H$ which does the job! But in doing so, this "Hamiltonian vector field" of $H$ produces nice geometrical properties. For example it has zero divergence, implying its flow preserves area (in $\R^2$ )! 
	- **Symplectic geometry** helps study the geometry of Hamilton's equations in a general setting.

For more on smooth manifolds: [[inculcation-smooth-manifolds]].

Use topology in your study of ODEs:

- On **compact manifolds**, every vector field is *complete*, that is, the solutions of ODEs exist *globally* in time.
- On the **2-sphere**, any vector field is zero atleast at one point, has atleast one fixed point (Hairy ball theorem!).
- In general, use **index theorems** to know about vector fields on manifolds.
- and more!

In general, study **smooth Lie group action on smooth manifolds**, whose special case is an $\R$-action - that is a complete vector field.

### complete resource on the study of ODEs

This series by Arnold exists:

> [!tip] Encyclopaedia of Mathematical Sciences Dynamical Systems vol 1-10
> 
> 1. [Dynamical Systems I: ODEs and smooth dynamical systems](http://library.lol/main/50AEF13AFA55CF451CDF5F2DDCE4B5F9)
> 2. [Dynamical Systems II: Ergodic Theory with Applications to Dynamical Systems and Statistical Mechanics](http://library.lol/main/0F843795B86B9CFE0B6B2CF07C70F247)
> 3. [Dynamical Systems III: Mathematical Aspects of Classical and Celestial Mechanics](http://library.lol/main/3202BBEBE8B9815467107F1A97BF0B3D)
> 4. [Dynamical Systems IV: Symplectic Geometry and its Applications](http://library.lol/main/18B86ACD9AB90E7B1AEE3AEA6DDFD9C2)
> 5. [Dynamical Systems V: Bifurcation Theory and Catastrophe Theory](http://library.lol/main/42FB2D5A011C751A5BAD704A88D3C1EF)
> 6. [Dynamical Systems VI: Singularity Theory I](http://library.lol/main/4C640F6B177EEC1BCA3608562A9E72BD)
> 7. [Dynamical Systems VII: Integrable Systems, Nonholonomic Dynamical Systems](http://library.lol/main/123E78A46F90C712BFE3FA4283D278F4)
> 8. [Dynamical Systems VIII: Singularity Theory II - Applications](http://library.lol/main/1BE6B3E2B2203C12B3B99C810F2C9C7E)
> 9. [Dynamical Systems IX: Dynamical Systems with Hyperbolic Behaviour](http://library.lol/main/F4FCF5C2E7BE3916542E18A0FED5D6C7)
> 10. [Dynamical Systems X: General Theory of Vortices](http://library.lol/main/9898F298DFF5DDDF2CE7558AE336ECBD)
>  ^jcq2iy


### go beyond finite dimension

Interpret heat equation, fluid flows, Schrodinger equation as infinite dimensional ODE and watch the consequences:

<iframe width="560" height="315" src="https://www.youtube.com/embed/VH4oawCiHPU?si=Wt1hxgkK4cpt_eWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## interpret a linear ODE as an operator on a function space


<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=GLHHWk-09diiCYuu&amp;list=PLgAugiET8rrL7uMN9c15Br9Tmn3q6v52l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## interpret as a plane distribution using a contact structure

![](https://upload.wikimedia.org/wikipedia/en/f/f5/Standard_contact_structure.svg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/gj0FnR8Fz70?si=dKk7P_4Tjt223bQO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# generalize to dynamical systems


Should be motivated from ODEs, or just plain playing with functions.