---
created: 2023-11-19T11:00:14
modified: 2023-11-23T11:04:04:51
tags:
  - Inculcation
title: "Inculcation: all of mechanics"
aliases:
---



Before doing anything, just watch this [Mechanics using the Action by T Paddy](https://youtube.com/playlist?list=PLlFCvH2vR5kRzC1LQtHy_MUAquC-tQiiW).

After that watch these lectures covering *Newtonian, Lagrangian, Hamiltonian, Statistical mechanics, special relativity* all at once!

<iframe src="https://www.youtube.com/embed/videoseries?list=PL5E4E56893588CBA8" style=" top:0; left:0; width:80%; border:none;  height:500px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>

These are nice as an intro "proper" physics, they will look fascinating, but my recommended levels of motivation and precision is absent. These are "Feynman lectures done right". One may watch his non-linear dynamics and quantum mechanics lectures right after this.

But nothing is explained rigorously, lots of details are skipped and Balki name drops a LOT of stuff. You may choose to ignore them initially, because each term becomes a rabbit hole for math topics.

How one should do is by [[inculcation-linear-constructions|constructing everything linearly]]:

- [[inculcation-general-dynamics]] -> [[inculcation-all-of-mechanics]]
	- [[inculcation-odes]] -> [[inculcation-all-of-mechanics#Mechanics of "points"|Mechanics of "points"]]
	- PDEs -> [[inculcation-mechanics-fields]]
	- ? [[inculcation-mechanics-branes]]
	- PDEs -> [[inculcation-mechanics-fluids]]


# Mechanics of "points"


AKA *"classical mechanics"*.


- #book LandauL volume I is the big reference.
- Other books include Goldstein and Morin


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
- [[inculcation-odes]]
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

## Trying to do probabilistic 

AKA statistical



## Trying to do quantum

> Functional analysis on (rigged) Hilbert spaces (brings in Representation theory)

 ![[the-connection-between-cm-and-qm#though the one point problem]]


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

