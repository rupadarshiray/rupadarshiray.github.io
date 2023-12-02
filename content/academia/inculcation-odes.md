---
created: 2023-09-30T09:58:25
modified: 2023-09-30T09:58:28
tags:
  - Inculcation
title: "Inculcation: ODEs"
aliases:
---

# Inculcation: ODEs

AKA "Non-linear dynamics", "smooth dynamical systems", "systems" even.

## interpret a ODE as a vector field

This is a standard geometric interpretation.

### vector fields on $\R^{n}$

Did you ever think an ordinary differential equations book will have this picture:

![|700](https://i.imgur.com/yRrKeIe.png)


This is Perko's book [Differential Equations and Dynamical Systems, Third Edition (2006)](http://library.lol/main/B2FA263686F1AAB9F19B2EBA8E12DD04), a good read, if youre familiar with Analysis in $\R^{n}$. Otherwise any physics text on "non-linear dynamics" works, for example Steven Strogatz's Non-linear dynamics lecture videos and book.

---

What we do is, write a differential equation like 

$$\dot{x}_{i}=f_{i}(x_{1},x_{2},\dots,x_{n})$$

for all $1\leq i \leq n$ so we have $n$ equations for $n$ variables $x_{i}$ and make it even more compact by

$$\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x})$$

where $\mathbf{f}:\mathcal{U} \subseteq \R^{n} \to \R^{n}$ is a *vector field* on the open domain $\mathcal{U}$.

This gives us a geometric pov on ODEs in $\R^{n}$, *and* we have a 


| solving differential equations                     | analysis and geometry of vector fields                                    |
| ------------------------------------------ | ----------------------------------- |
| an equation $$\dot{x}=\mathbf{f}(x)$$                                | a vector field $$\mathbf{f}:\mathcal{U} \subseteq \R^{n} \to \R^{n}$$         |
| solutions of the eq uation $$\begin{align} \dot{x}(t)&=\mathbf{f}(x(t)) \\ x(0)&=x_0 \end{align}$$                 | integral curves of the vector field $$t \mapsto \Phi^\mathbf{f}_{t}(x_{0})$$ |
| how solutions depend on initial conditions $$x_0 \mapsto x(t)$$ | flows of the vector field    $$x_0 \mapsto \Phi^\mathbf{f}_{t}(x_0)$$                          |
| conserved quantities                        | integrals of the vector field      |
| (linearly) decoupling the differential equation $$\dot{z_{i}}= f_{i}(z_i)$$ | (linear) coordinate transformation such that $$\mathbf{f}=\sum_i f_i(z_{i}) \hat{z}_i$$ |

### much  elementary introduction

Inspired from models in population dynamics

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=RWkkdMxW5eoywhc6&amp;list=PLhkiT_RYTEU1ibOVwE5Af5GE_WybGa9J_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=_X3mgtZ6do3oX5aj&amp;list=PLbN57C5Zdl6j_qJA-pARJnKsmROzPnO9V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### more formal lectures

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=hlva1bjtL_s2MCYJ&amp;list=PLLq_gUfXAnkmC-VWIJ_HW8cdOZLEtHfXJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Shorter videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=WhjHlL_dhxpBQ_dy&amp;list=PLUeHTafWecAUqSh3Gy0NNr7H3OsXoC-aK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### vector fields on smooth manifolds

Should be motivated from Perko, classical mechanics, etc.

### go beyond finite dimension

<iframe width="560" height="315" src="https://www.youtube.com/embed/VH4oawCiHPU?si=Wt1hxgkK4cpt_eWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## interpret an ODE as an operator on a function space

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=GLHHWk-09diiCYuu&amp;list=PLgAugiET8rrL7uMN9c15Br9Tmn3q6v52l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## interpret as a plane distribution using a contact structure

![](https://upload.wikimedia.org/wikipedia/en/f/f5/Standard_contact_structure.svg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/gj0FnR8Fz70?si=dKk7P_4Tjt223bQO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>