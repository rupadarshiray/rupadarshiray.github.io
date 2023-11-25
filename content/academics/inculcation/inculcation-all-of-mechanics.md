---
created: 2023-11-19T11:00:14
modified: 2023-11-23T11:04:04:51
tags:
  - Inculcation
title: "Inculcation: all of mechanics"
aliases:
---



- [[inculcation-general-dynamics]] -> [[inculcation-all-of-mechanics]]
	- [[inculcation-odes]] -> [[inculcation-mechanics-points]]
	- PDEs -> [[inculcation-mechanics-fields]]
	- ? [[inculcation-mechanics-branes]]
	- PDEs -> [[inculcation-mechanics-fluids]]

# Mechanics of "points"



## Trying to do mechanics but failing

- What is spacetime? What is an inertial frame?
- Newtonian spacetime
	- $1$ point
	- $n$ points
	- rigid bodies
- Minkowski spacetime
	- $1$ point
		- what is equation of motion??
	- field


## Doing the math part of mechanics properly

- Analysis in $\R^{n}$ and/or analysis on smooth manifolds
- Configuration spaces
- Lagrangian dynamics
- Phase space
- Hamiltonian dynamics

## Now doing the physics part of mechanics properly

- What is spacetime? 
	- Relativistic: a semi-Riemannian manifold.
- What is an inertial frame? We do not need them!
- Newtonian spacetime
	- $1$ point
	- $n$ points
	- rigid bodies

|              | Configuration space    | Lagrangian | Phase space | Hamiltonian | $V=0$ solutions                                                |
| ------------ | ---------------------- | ---------- | ----------- | ----------- | -------------------------------------------------------------- |
| 1 point      | $\R^3$ (space)                 |            |             |             | geodesics in $\R^3$ with usual metric, that is, straight lines |
| $n$ points   |                        |            |             |             |                                                                |
| 1 rigid body | $SO(3) \ltimes \R^{3}$ |            |             |             |                                                                |
|              |                        |            |             |             |                                                                |

- Minkowski spacetime
	- $1$ point
	- field

## Trying to do statistical



## Trying to do quantum

> Functional analysis on (rigged) Hilbert spaces (brings in Representation theory)

### Analogy between CM and Qm though the one point problem

We must notice the analogy

| the "classical" problem in Hamiltonian dynamics  ![x](https://i.imgur.com/Y851wUa.png)                                                                                                                                                                                                                                                                 | the quantum problem in Schrodinger/H picture     ![](https://i.imgur.com/8fpJAgs.png)                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (physical) space is $\R^{3}$ and time is $\R$                                                                                                                                                                                                                                                                                                          | (physical) space is $\R^{3}$ and time is $\R$                                                                                                                                                                                                                                                        |
| configucation space is set of all positions possible $\R^{3}$                                                                                                                                                                                                                                                                                          | the domain of the wave function is  $\R^{3}$  (= configuration space)                                                                                                                                                                                                                                |
| the **phase space** is set of all positions, momentum pairs possible $$\R^{3}\times\R^{3}$$ whose "dimension" is $6$                                                                                                                                                                                                                                   | the "**quantum phase space**" is the set of all wave functions, set of all *square integrable functions $\R^{3}\to \C$* $$L^{2}(\R^{3},\C)$$  whose "dimension" is not finite!                                                                                                                       |
| Hamiltonian is a smooth function $\R^{3}\times \R^{3}\to \R$ $$H(q,p)=\frac{p^{2}}{2m}+V(q)$$                                                                                                                                                                                                                                                          | the "Hamiltonian" is a Hermitian linear functions $L^{2}(\R^{3})\to L^{2}(\R^{3})$ $$\hat H=\frac{\hat p^{2}}{2m}+\hat{V}$$                                                                                                                                                                          |
| **Hamilton's equations**                                                                                                                                                                                                                                                                                                                               | **Schrodinger equation**                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                      |
| **Observables** are smooth functions $\R^{3}\to \R$ (just like Hamiltonian)                                                                                                                                                                                                                                                                            | **Observables** are Hermitian linear functions $L^{2}(\R^{3})\to L^{2}(\R^{3})$ (just like quantum "Hamiltonian")                                                                                                                                                                                    |
| The set of all observables is the set of all smooth functions, so $$\mathcal{C}^{\infty}(\R^{6})$$ where we can define the Poisson brackets $\{ ,  \}$                                                                                                                                                                                                 | The set of all observables is the set of all Hermitian linear functions  $L^{2}(\R^{3})\to L^{2}(\R^{3})$, this is a subspace of all linear functions and is closed in the commutator brackets $[, ]$                                                                                                |
| position $${q}_{i}$$                                                                                                                                                                                                                                                                                                                                   | $$\hat{q}_{i}$$                                                                                                                                                                                                                                                                                      |
| momentum $$p_{i}$$                                                                                                                                                                                                                                                                                                                                     | $$\hat{p}_{i}= \pdvf{}{q_{i}}$$                                                                                                                                                                                                                                                                      |
| **momentum "generates" translations** - $$\exp(\alpha X_{p_{i}})$$ (*$X_{p_{i}}$ is the Hamiltonian vector field of $p_{i}$, exponential of vector fields*) - translation is a group action by $$(\R^{3}, +)$$ onto the phase space $\R^{6}$  - which is **not** a symmetry here! because $$\{ H, p_{i} \}\neq 0$$ if we have a non-constant potential | **momentum "generates" translations** - $$\exp(\alpha\hat{p}_{i})$$ (*exponential of linear maps*) - translation is a group action by $$(\R^{3}, +)$$ onto the phase space $L^{2}(\R^{3})$  - which is **not** a symmetry here! because $$\{ H, p_{i} \}\neq 0$$ if we have a non-constant potential |
| $$L_{i}$$                                                                                                                                                                                                                                                                                                                                              | $$\hat{L}_{i}$$                                                                                                                                                                                                                                                                                      |
| **angular momentum "generates" rotations**  - $$\exp(\theta  X_{L_{i}})$$ (*$X_{L_{i}}$ is the Hamiltonian vector field of $L_{i}$, exponential of vector fields*) - rotation is a group action by $$SO(3)$$ onto the phase space $\R^{6}$  - which **is a symmetry** here! because $$\{ H, L_{i} \}= 0$$ if we have a non-constant potential          | **angular momentum "generates" rotations**  - $$\exp(\theta  \hat{L}_{i})$$ (*exponential of linear maps*) - rotation is a group action by $$SO(3)$$ onto the quantum phase space $L^{2}(\R^{3})$  - which **is a symmetry** here! because $$\{ H, L_{i} \}= 0$$ if we have a non-constant potential |
| the group action is symplectic, and more specifically *Hamiltonian*!                                                                                                                                                                                                                                                                                                                                                      | the above group actions act by unitary transformations because exponential of Hermitian maps are unitary                                                                                                                                                                                                                                                                                                     |


This analogy can be generalised many folds (geometric quantization of a Hamiltonian group action).


# Mechanics of fields

## Why upgrade to Lagrangian fields?

classical field theory was COOKED up to teach QFT because any quantum theory is defined by a classical theory and then we quantize it

 quantization: ClassicalFT → QFT

this is VERY UNPHYSICAL, proper physics says we must have a THEORY OF EVERYTHING and then we may take some limits c → ∞ , ħ, G →0, etc to get "approximate" theories, BUT WE CAN'T HAVE SUCH THINGS,  so we just just do mathematically inspired stuff

## Doing the proper theory of lagrangian fields

so the actual content must be this 

- given you know vector bundles on smooth manifolds, we say field configuration bundles = some vector bundle on spacetime 

this is what i call spacetime fields , now write a Lagrangian and study it, the spacetime be a semiriemannian manifold (not flat), then div of stress energy tensor= 0 doesn't imply global conservation laws, we must have Killing vector fields (I'VE NOT STUDIED THIS WELL YET FORGIVE ME IF IT'S KINDA OFF)

- you might have use the representation Spin(n) → SO(n), which allows you to define spin bundle where Spin(n) bundles

spin geometry:= study of dirac operators on such bundles

## Doing the proper theory of gauge fields

- gauge fields DO NOT happen on spacetime! (field ka domain isn't spacetime manifold)


## quantization


(1) https://www.youtube.com/watch?v=fjJsX4ektBA&list=PLbMVogVj5nJRYLTwyuusiiFchFU-WvElW
(2) https://www.youtube.com/@tobiasjosborne/playlists
(3) https://www.youtube.com/watch?v=ACZC_XEyg9U
(4) https://www.youtube.com/playlist?list=PLDlWMHnDwyljrnVxoGoBkHclt3VEkP0Kf
(5)  never tried this https://www.youtube.com/playlist?list=PLbMVogVj5nJQ3slQodXQ5cSEtcp4HbNFc
(6) https://www.youtube.com/watch?v=29v0B2Fol3k&list=PL04QVxpjcnjiByGS5xGhiqC_G0rJVDDem&index=6&t=994

the point of quantum is its a pair: a classical theory and its quantization

classical mechanics (Hamiltonian dynamics) -> QM
classical field theory -> QFT

we clearly know classical field theories, EM lagrangian, scalar fields, gauge fields etc, very nice diff geom stuff, we can do them on GR spacetimes, we can have matter fields with values in C^n with representation of groups "related" to SO(3) (spinor fields SU(2))

but the quantization of these theories dont exist
if you can find the Hilb space for Yang Mills you have done half of the 1 million dollar problem

AS FAR AS I UNDERSTAND IT

the proper things we have is lattice theories, theories not on R^4 but on Z^4, whose separation is L, if we take L-> 0 limit somehow we get actual theories (mentioned in the (6) video of the list)

---

(7) Gregory L. Naber - Topology, Geometry and Gauge fields - two volumes
(8) Mikio Nakahara - Geometry, topology, and physics
etc


# Mechanics of fluids
