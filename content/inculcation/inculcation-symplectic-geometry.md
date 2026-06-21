---
created: 2024-12-17T21:26:18
modified: 2024-12-17T21:26:25
tags:
  - Inculcation
title: "Inculcation: Symplectic geometry"
aliases: ""
---

parent: [[inculcation]]


## motivating Hamiltonian vector fields

Given a smooth $H:\R^{2}\to \R$, how can we produce a vector field that "preserves" this function? Well Hamilton's equations on $\R^{2}$ $$ \begin{bmatrix} \dot{x} \\ \dot{y} \end{bmatrix} = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} \frac{{\partial H}}{\partial x} \\ \frac{{\partial H}}{\partial y} \end{bmatrix} $$ produces a vector field perpendicular to the gradient of $H$ which does the job! But in doing so, this "Hamiltonian vector field" of $H$ produces nice geometrical properties. For example it has zero divergence, implying its flow preserves area (in $\R^2$ )! 

**Symplectic geometry** helps study the geometry of such vector fields in a general setting on "Symplectic manifolds" which are smooth manifolds with the *minimum* structure needed to define *Hamiltonian vector fields*.