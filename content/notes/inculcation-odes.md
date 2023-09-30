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


This is Perko's book [Differential Equations and Dynamical Systems, Third Edition (2006)](http://library.lol/main/B2FA263686F1AAB9F19B2EBA8E12DD04), a good read, if youre familiar with Analysis in $\R^{n}$. Otherwise any physics text on "non-linear dynamics" works..

What we do is, write a differential equation like 

$$\begin{bmatrix} \dot{x}_{1} \\\dot{x}_{2} \\ \dots \\ \dot{x}_{n} \end{bmatrix} = \begin{bmatrix} f_{1}(x_{1},x_{2}\dots,x_{n}) \\ f_{2}(x_{1},x_{2}\dots,x_{n}) \\ \dots \\f_{n}(x_{1},x_{2}\dots,x_{n}) \\ \end{bmatrix}$$

and make it even more compact by 

$$\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x})$$

where $\mathbf{f}:\mathcal{U} \subseteq \R^{n} \to \R^{n}$ is a *vector field* on the open domain $\mathcal{U}$.

This gives us a geometric pov on ODEs in $\R^{n}$, *and* we have a 


| solving differential equations                     | analysis and geometry of vector fields                                    |
| ------------------------------------------ | ----------------------------------- |
| an equation $$\dot{x}=\mathbf{f}(x)$$                                | a vector field $$\mathbf{f}:\mathcal{U} \subseteq \R^{n} \to \R^{n}$$         |
| solutions of the equation $$\begin{align} \dot{x}(t)&=\mathbf{f}(x(t)) \\ x(0)&=x_0 \end{align}$$                 | integral curves of the vector field $$t \mapsto \Phi^\mathbf{f}_{t}(x_{0})$$ |
| how solutions depend on initial conditions $$x_0 \mapsto x(t)$$ | flows of the vector field    $$x_0 \mapsto \Phi^\mathbf{f}_{t}(x_0)$$                          |
| conserved quantities                        | integrals of the vector field      |
| (linearly) decoupling the differential equation $$\dot{z_{i}}= f_{i}(z_i)$$ | (linear) coordinate transformation such that $$\mathbf{f}=\sum_i f_i(z_{i}) \hat{z}_i$$ |
### vector fields on smooth manifolds

Should be motivated from Perko, classical mechanics, etc.

### go beyond finite dimension

<iframe width="560" height="315" src="https://www.youtube.com/embed/VH4oawCiHPU?si=Wt1hxgkK4cpt_eWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## interpret an ODE as an operator on a function space

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=GLHHWk-09diiCYuu&amp;list=PLgAugiET8rrL7uMN9c15Br9Tmn3q6v52l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## interpret as a plane distribution using a contact structure

![](https://upload.wikimedia.org/wikipedia/en/f/f5/Standard_contact_structure.svg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/gj0FnR8Fz70?si=dKk7P_4Tjt223bQO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>