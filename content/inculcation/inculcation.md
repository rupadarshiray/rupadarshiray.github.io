---
created: 2026-08-26T11:29:59
modified: 2026-08-26T11:29:59
tags: []
aliases: []
---


## I start with groups, vector spaces and metric spaces

#### finite groups

<iframe width="100%" height="315" src="https://www.youtube.com/embed/mH0oCDa74tE?si=Kk1xTVuDkV2Ap7Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The miniseries [Essence of Group Theory - YouTube](https://www.youtube.com/playlist?list=PLDcSwjT2BF_VuNbn8HiHZKKy59SgnIAeO) carries it forward.


#### vector spaces

<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=Cq-M0B5yEuDGeziD&amp;list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

We see with just the "little" definition of a vector space, we can have things like  **writing any vector as a unique linear combination of finitely many vectors from a smaller subset of the entire space**. This much of *structure* is enough to ask a lot of questions and a solve a whole lot of problems! If you want more things, we can have more things! (oriented vector space, inner product spaces, normed vector spaces, etc.). 

- `lectures, book` Linear Algebra Done Right - Sheldon Axler
- `lecture videos` [Linear Algebra by Dr. K.C. Sivakumar](https://www.youtube.com/playlist?list=PLbMVogVj5nJQ2vsW_hmyvVfO4GYWaaPp7)

Need help proving stuff? Try following the arrows to prove equivalent conditions for injectivity of linear maps on finite dim spaces:

![](https://i.imgur.com/Jf457uG.png)


#### metric spaces

#### real numbers

#### Napkin

Evan Chen's [A Infinitely Large Napkin](https://venhance.github.io/napkin/Napkin.pdf) is an introduction to a lots of fields of math! However, it is NOT a textbook but a really nice introductory reference. It starts with groups and metric spaces!

#### Prinston companion to mathematics

[The Princeton Companion to Mathematics](https://sites.math.rutgers.edu/~zeilberg/akherim/PCM.pdf)

#### history of mathematics

`lecture videos` [MathHistory: A course in the History of Mathematics](https://www.youtube.com/playlist?list=PL55C7C83781CF4316) (although be aware, the instructor doesn't believe that $\R$ exists)

#### handwavy physics

We learn physics though the Action principle.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=_JXvZTvRZWIzq9M0&amp;list=PLlFCvH2vR5kRzC1LQtHy_MUAquC-tQiiW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Ignore the Fourier expansion of electric field stuff, just the ideas behind GR, QFT matters! Continue with GR and action: [General Relativity by Prof. Thanu Padmanabhan - YouTube](https://www.youtube.com/playlist?list=PLfrsXbPUIUSB6xoXyIvVEHYiG-hVmJhHf).

After that watch these lectures covering *Newtonian, Lagrangian, Hamiltonian mechanics, statistical mechanics, special relativity* all at once!

<iframe src="https://www.youtube.com/embed/videoseries?list=PL5E4E56893588CBA8" style=" top:0; left:0; width:100%; border:none;  height:500px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>

These are nice as an intro "proper" physics, they will look fascinating, but my recommended levels of motivation and precision is absent. These are "Feynman lectures done right". One may watch his non-linear dynamics and quantum mechanics lectures right after this. But nothing is explained "rigorously", although hinted at, lots of details are skipped and Balki name drops a LOT of stuff. You may choose to ignore them initially, because each term becomes a rabbit hole for math topics.


Going ahead, we can look at quantum physics.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=6JKljRVWEioPWlTx&amp;list=PL0F530F3BAF8C6FCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

From these previous lectures, one must agree that doing **physics** is a three step process:

- **Step 1**: Choose your ***spacetime***, you have 3 major types of options:
	- $c^{-1}=0$ Newtonian: the good ol' "non-relativistic" spacetime
	- $c^{-1}=1, G=0$ Minkowski: the SR spacetime
	- $c^{-1}=1, G=1$ Lorentzian: a whole range of GR spacetimes
- **Step 2**: Choose what the ***contents*** of your spacetime must be:
	- points: point particles, bodies with finite number of degrees of freedom, rays
	- fields: infinite degrees of freedom
	- fluids: "spacetime itself flowing" (they are different from fields, yes)
	- condensed matter
- **Step 3**: Choose a ***description*** for the contents (although not all of the following is possible for all the *contents* in step 2)
	- $\hbar = 0$ "classical mechanics/classical field theory" description - that is, writing equations of motion, $ma=F$ for particles in $c\to \infty$ or Maxwell's equations for EM fields
	- $\hbar =0$ "classical statistics" description
	- $\hbar =1$ "quantum mechanics/QFT" description
	- $\hbar=1$ "quantum statistical" description

BUT! Does the description of matter really depend very much on the spacetime? Yes sure, the equation of motion will change drastically, but the methods in ODEs do not change at all! We can study about spherical harmonics in waves, electrodynamics and in QM class - their physical interpretation is different but their *math* interpretation remains the same!

Hence, there is a component to this in the second step of the 3 step process: which is *"abstract"*. How much of the things we study can we abstract out? Can it be really useful in doing physics?

![](https://i.imgur.com/BIqIRsH.png)


This makes sense to me because generally quantum mechanics is taught before fluid mechanics, which is true because the former is a linear PDE - which makes it much easier - just introduce eigenvectors and eigenvalues and the method can be explained!

Now for an example:

> [!quote] Around 1850 Maxwell realized that the [field strength](https://ncatlab.org/nlab/show/field+strength) of the [electromagnetic field](https://ncatlab.org/nlab/show/electromagnetic+field) is modeled by what today we call a closed [differential 2-form](https://ncatlab.org/nlab/show/differential+form) on [spacetime](https://ncatlab.org/nlab/show/spacetime). In the 1930s Dirac observed that more precisely this 2-form is the [curvature](https://ncatlab.org/nlab/show/curvature) 2-form of a [U(1)](https://ncatlab.org/nlab/show/circle+group)-[principal bundle](https://ncatlab.org/nlab/show/principal+bundle) with [connection](https://ncatlab.org/nlab/show/connection+on+a+bundle), hence that the electromagnetic field is modeled by what today is called a degree 2-cocycle in _[ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology)_ . ^[https://ncatlab.org/nlab/show/higher+category+theory+and+physics#GaugeTheory]

![](https://i.imgur.com/XYgxUjp.png)

Although we must do physics in the more *specific* sense (in contrast to *abstract* sense) as well, so we make this little table for reference with common terminology.

| contents          | description     | $c^{-1}=0$ Newtonian spacetime                                                                 | $c^{-1}=1, G=0$ Minkowski spacetime (SR)        | $c^{-1}=1, G=1$ Lorentzian manifolds (GR)    |
| ----------------- | --------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- | -------------------------------------------- |
|                   | $\hbar =0$      |                                                                                                |                                                 |                                              |
| points            | "actual"        | "classical mechanics" Kleppner, Goldstein, David Morin, LandauLifshitz vol 1, Balki's lectures | "relativistic mechanics" LandauLifshitz vol 2   | "general relativity" LandauLifshitz vol 2    |
|                   | "stat"          | "statistical mechanics"  Kardar                                                                | "relativistic statistical mechanics" Palash Pal |                                              |
| fields            | "actual"        | "non-relativistic classical field theory"                                                      | "classical field theory"                        | "classical field theory in curved spacetime" |
|                   | "stat"          |                                                                                                | "statistical field theory"                      |                                              |
| fluids            |                 | "fluid mechanics"                                                                              | "relativistic fluid mechanics"                  | "fluid mechanics in curved spacetime"        |
|                   |                 |                                                                                                |                                                 |                                              |
|                   | $\hbar =1$      |                                                                                                |                                                 |                                              |
| points            | "actual"        | "quantum mechanics" Griffiths, Balki's lectures, Shankar                                       | -                                               | -                                            |
|                   | "stat"          | "quantum statistical mechanics" QM textbooks ^ should cover this                               | -                                               | -                                            |
| fields            | "actual"        |                                                                                                | "QFT"                                           | "QFT in curved spacetime" or "global QFT"    |
|                   | "stat"          |                                                                                                |                                                 |                                              |
| fluids            | quantum fluids? | ?                                                                                              | ?                                               | ?                                            |
| atoms?            |                 |                                                                                                |                                                 |                                              |
| condensed matter? |                 |                                                                                                |                                                 |                                              |
|                   |                 |                                                                                                |                                                 | QG?                                          |

In general, there are

- Landau Lifshitz volumes 1-10
- [David Tong's notes](http://www.damtp.cam.ac.uk/user/tong/teaching.html) for many of the elements in the table
- look below for more!

So, essentially we did all of physics together. But did we do it properly? Did we went onto understanding the details?

## II continue with algebra, analysis, topology and geometry

#### rings and modules


Looking back on linear algebra, we can reiterate the following.

A $k$-vector space $V$ with a endomorphism $T$ (fancy name for linear map $V\to V$) gives a $k[X]$-module structure on $V$, so we can directly use $k[X]$-modules classification theorems to construct the theorems on canonical forms.

I am still looking on how to understand *two* linear endomorphisms giving a $k[X,Y]$ structure on $V$. At the least, I can re-interpret the theorem that says "we always have a common eigenvector of two commuting linear maps" as the following.

Let's say we have a $k[X,Y]$-module $V$ defined by two linear endomorphisms $V\to V$. Then we always have at least one *simple* non-trivial $k[X,Y]$-submodule of $V$. 
#### representation theory of finite groups

A group homomorphism from a (say, finite for now) group $G$ to the general linear group on a vector space $V$  $$ G \to {GL}(V) $$ is called a *representation of the group $G$*. One can classify and study such homomorphisms (upto an equivalence ofcourse) and it's called representation theory (of finite groups). This "helps" in doing linear algebra when we have a invertible linear map $V\to V$, in my opinion.
#### cute topology

- [Topology & Geometry by Dr Tadashi Tokieda - YouTube](https://www.youtube.com/playlist?list=PLTBqohhFNBE_09L0i-lf3fYXF5woAbrzJ)
- Knot theory
	- [How The Most Useless Branch of Math Could Save Your Life - YouTube](https://www.youtube.com/watch?v=8DBhTXM_Br4&t=246s)
	- [Knot Theory - YouTube](https://www.youtube.com/playlist?list=PLOROtRhtegr4c1H1JaWN1f6J_q1HdWZOY)

![[visualizing-higher-dimensions]]

- how topology affects and interacts with geometry, analysis, algebra (Lie groups, say) and physics
	- [Gauss–Bonnet theorem - Wikipedia](https://en.wikipedia.org/wiki/Gauss%E2%80%93Bonnet_theorem)
	- [Dirac's belt trick, Topology, and Spin ½ particles - YouTube](https://www.youtube.com/watch?v=ACZC_XEyg9U)
	- [The derivative isn't what you think it is. - YouTube](https://www.youtube.com/watch?v=2ptFnIj71SM)

#### curves and surfaces

- `book` do Carmo - Differential geometry of curves and surfaces
- `lecture videos` [ICTP Diploma - Differential Geometry - Claudio Arezzo - YouTube](https://www.youtube.com/playlist?list=PLLq_gUfXAnkl5JArcktbOrIUeR5rra-Gz) These lectures has pre-requisites of basic linear algebra, analysis in $\mathbb{R}^{n}$, knowing total derivatives and bilinear forms with introducing yourself a little *topology* (compactness, connectedness).

#### GGT

#### probability and information theory

<iframe width="100%" height="315" src="https://www.youtube.com/embed/v68zYyaEmEA?si=jHpmEwYRdWKGO01Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


#### illustrations in mathematics

#### elementary algebraic geometry and number theory

[![281](https://m.media-amazon.com/images/I/61A4APM3UNL._SL1257_.jpg)](https://link.springer.com/book/10.1007/978-3-319-18588-0)

## III linearly construct from the ground up

#### logic

#### set theory

#### real analysis


*Total derivative* of function $$ f:U \subseteq V\to W $$ between finite-dim real normed vector spaces at a point $p\in U$ is supposed to be a linear map $$D_{p}f:V\to W$$ that "approximates" $f$ near $p$. So if $D_{p}f$ is a rotation (as a linear map), then $$ f: U \to f(U) $$ should "look" like a rotation "near $p$".

---

- Analysis by Herbert Amann and Joachim Escher [Volume I](http://library.lol/main/D52F82501240A7F94F77CCA630B43F6E)

#### complex analysis

![[inculcation-riemann-surfaces#III]]

#### measure theory

- [cmat.edu.uy/~mordecki/courses/medida2013/book.pdf](https://www.cmat.edu.uy/~mordecki/courses/medida2013/book.pdf)

#### topology

- `book` Munkres
- http://www.math.toronto.edu/ivan/mat327/?resources
- http://math.iisc.ac.in/~gadgil/topology-2021/all-lectures/
- [Topology (MTH-TOP) - YouTube](https://www.youtube.com/playlist?list=PLp0hSY2uBeP8jgD0wTQM-RjkakSEBdHUD)
- For a quick one lecture introduction with motivation: [Lecture 1: Topology (International Winter School on Gravity and Light 2015) - YouTube](https://www.youtube.com/watch?v=7G4SqIboeig)
- [π-Base](https://topology.pi-base.org/)

#### dynamics

#### Galois theory

#### algebraic topology

- `book` [Hatcher's textbook](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)
- `lecture videos` [Algebraic Topology - Pierre Albin - YouTube](https://www.youtube.com/playlist?list=PLpRLWqLFLVTCL15U6N3o35g4uhMSBVA2b)

#### smooth manifolds
#### semiRiemannian manifolds

#### geometric mechanics

Schuller's lectures are a good place to start.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=w6II_RQnncxuwK0v&amp;list=PL6YPgEhGKjOGKriFcF0LCJ4J8LDY3-nyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

People have written up notes from these lectures: [THE WE-HERAEUS INTERNATIONAL WINTER SCHOOL ON GRAVITY AND LIGHT (Spanish Translation Available!) (richie291.wixsite.com)](https://richie291.wixsite.com/theoreticalphysics/post/the-we-heraeus-international-winter-school-on-gravity-and-light) and [Maths with Physics: The WE-Heraeus International Winter School on Gravity and Light, Lectures, Tutorials and Solutions](http://mathswithphysics.blogspot.com/2016/07/the-we-heraeus-international-winter.html) .


---

- `lecturenotes` Use measure theory to do [Classical Equilibrium Statistical Mechanics](https://warwick.ac.uk/fac/sci/maths/people/staff/stefan_adams/lecturenotestvi/cdias-adams-30.pdf)
#### symplectic manifolds

#### computation in mathematics

## IV

#### functional analysis

- https://www.kryakin.site/am2/Stein-Shakarchi%5D-4-Functional-Analys.pdf
- Papa and grandpa Rudin
- [MIT 18.102 Introduction to Functional Analysis, Spring 2021](https://www.youtube.com/playlist?list=PLUl4u3cNGP63micsJp_--fRAjZXPrQzW_)
- [IMPA Doctorate program: Functional Analysis (2019)](https://www.youtube.com/playlist?list=PLo4jXE-LdDTTIIIRwqK35CbFJieSJEcVR)

#### Fourier analysis

#### ergodic theory

#### PDEs

- [Partial Differential Equations - Giovanni Bellettini - Lecture 01 - YouTube](https://www.youtube.com/watch?v=Rq1iRT2LL-8)
- `talk` [Mathematics of Turbulent Flows: A Million Dollar Problem! by Edriss S Titi - YouTube](https://www.youtube.com/watch?v=VH4oawCiHPU)

#### Lie groups, Lie algebras and their finite dimensioal representation theory

#### more mechanics

- Gregory L. Naber - Topology, Geometry and Gauge fields - two volumes
- Mikio Nakahara - Geometry, topology, and physics

#### Cartan's geometry
#### more complex analysis, Riemann surfaces, algebraic curves, hyperbolic surfaces

![[inculcation-riemann-surfaces#IV]]

#### several complex variables

#### Algebraic varieties

#### commutative, homological and categorical algebra
#### complex manifolds


## V


### Riemannian geometry

### symplectic geometry

- [Floer homology](https://math.berkeley.edu/~gbeiner/floer_homology.html)

### Algebraic geometry

### abstract harmonic analysis

### number theory

### global, microlocal, infinite dimensional analysis

### symmetric spaces, semisimple Lie groups, their unitary representations

### Gromov hyperbolic groups

### locally symmetric spaces/discrete subgroups: deformations and rigidity