---
created: 2023-11-19T11:00:14
modified: 2023-12-12T12:14:21
tags:
  - Inculcation
title: "Inculcation: all of mechanics"
aliases:
---

main article: [[inculcation]]

> I make a very specific use of the words "physics" and "mechanics", here. Of course I shall explain what I mean, but do note, it is a personal choice.  

## all of physics, all at once

Before doing anything, just watch this:

> [!important] Mechanics using the Action principle
> 
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=_JXvZTvRZWIzq9M0&amp;list=PLlFCvH2vR5kRzC1LQtHy_MUAquC-tQiiW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
> 
>(ignore the Fourier expansion of electric field stuff, just the ideas behind GR, QFT matters!)
>
> Continue with GR and action: [General Relativity by Prof. Thanu Padmanabhan - YouTube](https://www.youtube.com/playlist?list=PLfrsXbPUIUSB6xoXyIvVEHYiG-hVmJhHf) ^keitg9


> [!important] After that watch these lectures covering *Newtonian, Lagrangian, Hamiltonian, Statistical mechanics, special relativity* all at once!
> 
> <iframe src="https://www.youtube.com/embed/videoseries?list=PL5E4E56893588CBA8" style=" top:0; left:0; width:80%; border:none;  height:500px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>
> 
> - These are nice as an intro "proper" physics, they will look fascinating, but my recommended levels of motivation and precision is absent. These are "Feynman lectures done right". One may watch his non-linear dynamics and quantum mechanics lectures right after this.
> - But nothing is explained rigorously, although hinted at, lots of details are skipped and Balki name drops a LOT of stuff. You may choose to ignore them initially, because each term becomes a rabbit hole for math topics.

^3431f3


> [!important] Balakrishnan's quantum physics
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=6JKljRVWEioPWlTx&amp;list=PL0F530F3BAF8C6FCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
^3fyeee


## what is physics actually then

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

This is an example of the table for *electromagnetic field* (for $\hbar =0$). Gauge fields will be discussed in [[#Doing the proper theory of gauge fields]].



Although we must do physics in the more *specific* sense (in contrast to *abstract* sense) as well, so we make this little table for reference with common terminology:

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

# How to do mechanics properly

## understanding the philosophy

How one should do is by [[inculcation-linear-constructions|constructing everything linearly]].

Schuller's lectures are a good place to start:


> [!important]  Lectures on Geometrical Anatomy of Theoretical Physics by Frederic Schuller
> These lectures start from logic!
> 
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=3JE4_9J8N1KMemlr&amp;list=PLPH7f_7ZlzxTi6kS4vCmv4ZKm9u8g5yic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
> 

^4mh1b2

But for more, after doing [[inculcation-analysis-finite-vector-spaces]] and [[inculcation-smooth-manifolds]] we can do: 

- [[inculcation-odes]] $\to$ [[inculcation-all-of-mechanics#Mechanics of points done properly]]
- functional analysis, PDEs $\to$  QM, [[inculcation-all-of-mechanics#Mechanics of fluids|fluids]], etc

Doing ODEs with proper rigor helps eliminate errors from intuition, cyclic reasoning etc. this is the whole reason why [[inculcation-linear-constructions]] exists!


But there are a whole lot of benefits of *abstract* thinking and relying on general framework as well.

> [!hint] Philosphy: ODEs do not care about spacetime or coordinates or other structures
> 
> - For instance, what one must understand is (among many other things), in the side of ODEs: Lagrangian, Hamiltonian etc really *do not care* about the spacetime, or what you are trying to describe even: give it a ray of light in Newtonian spcaetime, or a point particle moving around a black hole (Swartzchild spacetime): the description remains the same.
> 	- Configuration space $\leftrightarrow$ Lagrangian dynamics, any other ODE
> 	- Phase space $\leftrightarrow$ Hamiltonian dynamics
> - I do not mean the equations remains the same btw! I just mean use can use the general prescription (math!) like Lagrangians and Hamiltonians for any spacetime!
> - This would therefore mean, the "statistical mechanics" prescription would also be, in this way - because statistical mechanics just starts from the phase space - the methods independent of "spacetimes" per say as phase space only depend on the configuration spaces.




## doing the spacetimes bit

This doesn't need to be done first, or before [[#Mechanics of points done properly]], but these lectures are amazing:

> [!tip] The WE-Heraeus International Winter School on Gravity and Light
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=w6II_RQnncxuwK0v&amp;list=PL6YPgEhGKjOGKriFcF0LCJ4J8LDY3-nyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
> 
> - [THE WE-HERAEUS INTERNATIONAL WINTER SCHOOL ON GRAVITY AND LIGHT (Spanish Translation Available!) (richie291.wixsite.com)](https://richie291.wixsite.com/theoreticalphysics/post/the-we-heraeus-international-winter-school-on-gravity-and-light)
> - [Maths with Physics: The WE-Heraeus International Winter School on Gravity and Light, Lectures, Tutorials and Solutions](http://mathswithphysics.blogspot.com/2016/07/the-we-heraeus-international-winter.html) 

^uii1hk

# Mechanics of points done properly


> That is: as we see in *"classical mechanics"*, but the idea of a configuration space captures rays (as in ray optics) and rigid bodies along with finite number of point particles.


## writing the equations

|              | Configuration space                   | Lagrangian | Phase space | Hamiltonian | $V=0$ solutions                                                |
| ------------ | ------------------------------------- | ---------- | ----------- | ----------- | -------------------------------------------------------------- |
| 1 point      | $\R^3$ (space)                        |            |             |             | geodesics in $\R^3$ with usual metric, that is, straight lines |
| $n$ points   | $(\mathbb{R}^{3})^{n}$                |            |             |             |                                                                |
| 1 rigid body | $SO(3) \ltimes \R^{3}$ (a Lie group!) |            |             |             |                                                                |

The famous textbooks are

- V. I. Arnold - Mathematical Methods of Classical Mechanics-
- Abraham R., Marsden J.E. - Foundations of Mechanics (1987)
- Jerrold E. Marsden, Tudor S. Ratiu - Introduction To Mechanics And Symmetry A Basic Exposition of Classical Mechanical Systems-Springer (2010)

Similar tables can be found here:

![[inculcation-geodesic-flows#interpreting a lot of systems as geodesic flows and vice versa]]


Here there are PDE dynamics on a infinite dynamical space thought of as "mechanics of a point"! Yes, we can think of fluid dynamics as classical dynamics on an infinite dimensional phase space! This phase space is not a vector space as the equation is non-linear.

## solving the equations

Physics textbooks on "classical mechanics" aren't rigorous, they don't worry about a lot of things. What exactly are we missing then?

- only worry about *local* properties of the configuration spaces, *local* solutions of the equations: so for example it cannot differentiate between a cylinder or a sphere as configuration spaces, because *locally* they are "same" given how we are describing them (smooth manifolds).
- both local and global properties of ODEs are studied in [[inculcation-odes]], in for example Perko's book.


### geometry behind the dynamics

The geometry behind dynamics of a ODE is that of a vector field on a manifold.

![[inculcation-odes#vector fields and ODE dictionary]]

- The geometry of a Lagrangian is behind the algebra of a chain complex called "variational bicomplex" that it creates, (apart from the optimization problem). I've not read much about it.
- We can even convert some Lagrangian problems to geodesics on some spaces which becomes *Riemannian geometry*. Exploring more on this here: [[inculcation-geodesic-flows]]
- The geometry behind Hamiltonian dynamics is studied under the name of *symplectic geometry*. A good intro reference with regards to mechanics is: https://people.math.harvard.edu/~jeffs/SymplecticNotes.pdf

## probabilistic description of points

> As done in *statistical mechanics*.

> [!todo] Main goal of statistical mechanics 
> derive the *empirical* laws of thermodynamics from the classical mechanics description (so just "$F=ma$")
> 

- Boltzmann, Gibbs invented *statistical mechanics* to give more meaning to the thermodynamic quantities
- *Ergodic theory* was invented to ask when does the assumptions made by Boltzmann and others hold.
- My first reference was [[#^3431f3|Balki's lectures on classical physics]], other physics references include [MIT 8.333 Statistical Mechanics I: Statistical Mechanics of Particles, Fall 2013 - YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP60gl3fdUTKRrt5t_GPx2sRg)
- [Statistical Mechanics From Thermodynamics to the Renormalization Group](http://library.lol/main/A8C329B75A3CB6CEEF87790E8C8C88BA)
- [Roderich Tumulka's notes](https://www.math.uni-tuebingen.de/de/forschung/maphy/lehre/ss-2019/statisticalphysics/dateien/lecture-notes.pdf) is best reference I've seen, actually talks about the main goal
- [Information Geometry (ucr.edu)](https://math.ucr.edu/home/baez/information/)
	- Part 17-21 is where thermodynamics is discussed
- [Classical Mechanics versus Thermodynamics (ucr.edu)](https://math.ucr.edu/home/baez/classical_vs_thermo/)

From John Baez's ideas we what we get is 
$$
\mathrm{Probabilistic}:\mathrm{CM} \ (X,\mu) \to \mathrm{StatMech} \ (Q,\pi) \to \mathrm{Thermo} \ (Q,S)
$$

%%As of now, I have obtained some justifications for the definitions in statistical mechanics, but it still remains a formal study (and not a replacement of the actual dynamics).%%

So did we succeed? Did we (does the above references) "prove" thermodynamics from just "$F=ma$"?

No. Not equilibrium statistical mechanics anyways. The following are some pitfalls:

> [!bug]
> 
> - People claim "Luoville's theorem of Hamiltonian dynamics explains equilibrium statistical mechanics" $\leftarrow$ this makes no sense! Luoville's theorem just says the vector field corresponding to the ODE has divergence 0 which is $\iff$ its flow is volume preserving. Bazzilion many ODEs (even physical ones!) preserve volume but they don't even come close to having properties like thermalization.
> 	- Dynamics of $n$ harmonic oscillators is such an example which is even PERIODIC in time (for specific parameters)! hah! People even compute $Z(\beta)=\int_{\R^{2n}} \exp(-\beta H)$ for this, please give me ANY physical interpretation of this computation!?!
> - If you think "ergodicity" of the flow is enough assumption to reproduce equilibrium stat mech look at ['ergodicity, as usually stated, is neither sufficient not necessary for thermalization'](https://physics.stackexchange.com/questions/541504/how-can-ergodicity-explain-thermalization#comment1224693_541504)
> - When [Poincaré recurrence theorem](https://en.wikipedia.org/wiki/Poincar%C3%A9_recurrence_theorem) is used to contradict existence of a thermal equilibrium, people are quick to say "the recurrence times are LARGER compared to thermalization times" $\leftarrow$ which is true until it isn't!
> 	- Fermi and company found this curious case experimentally: [Fermi–Pasta–Ulam–Tsingou problem - Wikipedia](https://en.wikipedia.org/wiki/Fermi%E2%80%93Pasta%E2%80%93Ulam%E2%80%93Tsingou_problem)

You can't change information of $10^{23}$ dimensions into $4$ variables, sadly, nope. How is thermodynamics true then? In what sense I mean? Well...Roderich Tumulka's notes above tries to explain a lot. I oscillate between being convinced and not.

However, the following book has a "proof" of Boltzmann's (non-equilibrium stat mech) equation for dilute gases in some very precise sense.

> [!important] Carlo Cercignani, Reinhard Illner, Mario Pulvirenti - The Mathematical Theory of Dilute Gases-Springer-Verlag New York (1994)

## quantization of the mechanics of points


> As done in *quantum mechanics*.
> Essentially, functional analysis on (rigged) Hilbert spaces (brings in representation theory)


- [Woit's Quantum Theory, Groups and Representations](https://www.math.columbia.edu/~woit/QM/qmbook.pdf)
- Brian C. Hall - Quantum Theory for Mathematicians-Springer-Verlag New York (2013)
- Leon A. Takhtajan - Quantum Mechanics for Mathematicians-American Mathematical Society (2008)

> [!important] Frederic Schuller's lectures on quantum mechanics with lecture notes
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=7z1WbGoFOaWrNThN&amp;list=PLPH7f_7ZlzxQVx5jRjbfRGEzWY_upS5K6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
> 
> - [Maths with Physics: Frederic Schuller's Lectures on Quantum Theory with Lecture Notes](http://mathswithphysics.blogspot.com/2016/07/frederic-schullers-lectures-on-quantum.html)
> - [DR. FREDERIC SCHULLER'S COURSE OF QUANTUM THEORY (richie291.wixsite.com)](https://richie291.wixsite.com/theoreticalphysics/post/dr-frederic-schuller-s-course-of-quantum-theory)
e
So let's ponder on what quantum mechanics does really. It gives us a linear dynamics from a ODE: 
$$
\mathrm{Quantizaton}:\mathrm{CM} \ (X,H) \to \mathrm{QM} \ (L^{2}(X), \hat{H})
$$

but now we observe the correspondence between them, even though they are very different structure wise:
 ![[the-corresp-between-cm-and-qm#though the one point problem]]

# Mechanics of fields

> 🚧 This section is still under construction.

## Why upgrade to Lagrangian fields?

"Classical field theory" as a course was COOKED up to teach QFT because any quantum theory is defined by a classical theory and then we quantize it

> quantization: ClassicalFT → QFT

%%this is VERY UNPHYSICAL in a way, proper physics says we must have a THEORY OF EVERYTHING and then we may take some limits c → ∞ , ħ, G →0, etc to get "approximate" theories, BUT WE CAN'T HAVE SUCH THINGS,  so we just just do mathematically inspired stuff%%

## Doing the proper theory of Lagrangian fields

so the actual content must be this 

- given you know vector bundles on smooth manifolds, we say field configuration bundles $=$ some vector bundle on spacetime 
- this is what i call spacetime fields , now write a Lagrangian and study it, the spacetime be a semi-Riemannian manifold (not flat), then div of stress energy tensor= 0 doesn't imply global conservation laws, we must have Killing vector fields %%(I'VE NOT STUDIED THIS WELL YET FORGIVE ME IF IT'S KINDA OFF)%%
- you might have use the representation $Spin(n) → SO(n)$, which allows you to define spin bundle where $Spin(n)$ bundles
 
spin geometry $:=$ study of dirac operators on such bundles

## Doing the proper theory of gauge fields

> gauge fields DO NOT happen on spacetime! (that is, the field's domain isn't the spacetime manifold)

- http://nicf.net/articles/classical-em/

The following books are okay:

- Gregory L. Naber - Topology, Geometry and Gauge fields - two volumes
- Mikio Nakahara - Geometry, topology, and physics


## quantization of field theories


- https://www.youtube.com/watch?v=fjJsX4ektBA&list=PLbMVogVj5nJRYLTwyuusiiFchFU-WvElW
- https://www.youtube.com/@tobiasjosborne/playlists
- https://www.youtube.com/watch?v=ACZC_XEyg9U
- https://www.youtube.com/playlist?list=PLDlWMHnDwyljrnVxoGoBkHclt3VEkP0Kf
-  https://www.youtube.com/playlist?list=PLbMVogVj5nJQ3slQodXQ5cSEtcp4HbNFc
- https://www.youtube.com/watch?v=29v0B2Fol3k&list=PL04QVxpjcnjiByGS5xGhiqC_G0rJVDDem&index=6&t=994



# Mechanics of fluids


> [!check] The **physics** of fluid mechanics: Averaging a differential equation system with high number of dynamical variables
> 
> Hamiltonian system of a system of particles <center> $\downarrow$ </center>
> Statistical mechanics of the system of particles: Boltzmann equation with the probability distribution $f(\mathbf{x},t)$ <center> $\downarrow$ </center>
> Take the average of quantities at the point $(\mathbf{x},t)$ and get equations for velocity and pressure $\mathbf{v}(\mathbf{x},t),p(\mathbf{x},t)$: 
> - Continuity of mass
> - Continuity of momentum
> - Continuity of energy
> - Entropy inequality
> - ...is that it?

> My question is ==can we do this for any Hamiltonian system?== Or even any ODE with high enough ($\sim 10^{23}$) dimension? Probably not. But let's not worry about that!

---

There are various physical and computational aspects to it

- [Interfacial Phenomena | Mathematics | MIT OpenCourseWare](https://ocw.mit.edu/courses/18-357-interfacial-phenomena-fall-2010/)
- [Lectures on Finite Element Methods for Fluid Dynamics, a full semester course on CFD using FEM. - YouTube](https://www.youtube.com/playlist?list=PLseC-R59hYulujxXowYDySos6dkg7QAD7)


<iframe width="560" height="315" src="https://www.youtube.com/embed/XoefjJdFq6k?si=xltnMasUkduN11UQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/VH4oawCiHPU?si=Wt1hxgkK4cpt_eWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Thus there is an analysis side to it.

---

But there is a geometric, and [topological](https://en.wikipedia.org/wiki/Topological_fluid_dynamics) side to it too,

- [The Euler-Arnold equation | What's new (wordpress.com)](https://terrytao.wordpress.com/2010/06/07/the-euler-arnold-equation/)
- [Vladimir I. Arnold, Boris A. Khesin - Topological Methods in Hydrodynamics](https://library.lol/main/061427D2C2ACB6D593D99EEE8B1CAD25)
- https://www2.math.upenn.edu/~ghrist/preprints/fluidshandbook.pdf
- [Introduction to Topological Fluid Dynamics - Lecture 1 (of 7) (youtube.com)](https://www.youtube.com/playlist?list=PLWoCS9bDDOr3v2iyTjhEENtH5zM3Ytkdf) and more: [Short Course Video Lectures – Welcome to Renzo Ricca's website](https://www.renzoricca.com/2023/07/03/video-courses/)
- [Geometric Fluid Dynamics, Fall 2021 (utoronto.ca)](https://www.math.utoronto.ca/khesin/teaching/henan/geometricfluids21.html)
- [fea-khesin-alt.qxp (toronto.edu)](https://www.math.toronto.edu/khesin/papers/amshydro.pdf)
- [Topological fluid dynamics - Wikipedia - references](https://en.wikipedia.org/wiki/Topological_fluid_dynamics#References)


---

Turbulence is still an unsolved problem.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_UoTTq651dE?si=EOi15dGihAaJzt79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Mechanics with a lattice somewhere

Where does the Ising model sit in all these? Does it even need a "spacetime"?

