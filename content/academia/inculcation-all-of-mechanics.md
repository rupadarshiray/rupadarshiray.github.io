---
created: 2023-11-19T11:00:14
modified: 2023-12-12T12:14:21
tags:
  - Inculcation
title: "Inculcation: all of mechanics"
aliases:
---
> I make a very specific use of the words "physics" and "mechanics", here. Ofcourse I shall explain what I mean, but do note, it is a personal choice.  

## trying to do physics but failing


- What is spacetime? What is an inertial frame?

Before doing anything, just watch this:

> [!tip] Mechanics using the Action principle
> 
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=_JXvZTvRZWIzq9M0&amp;list=PLlFCvH2vR5kRzC1LQtHy_MUAquC-tQiiW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
>
> Continue with GR and action: [General Relativity by Prof. Thanu Padmanabhan - YouTube](https://www.youtube.com/playlist?list=PLfrsXbPUIUSB6xoXyIvVEHYiG-hVmJhHf)


> [!tip] After that watch these lectures covering *Newtonian, Lagrangian, Hamiltonian, Statistical mechanics, special relativity* all at once!
> 
> <iframe src="https://www.youtube.com/embed/videoseries?list=PL5E4E56893588CBA8" style=" top:0; left:0; width:80%; border:none;  height:500px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>
> 
> - These are nice as an intro "proper" physics, they will look fascinating, but my recommended levels of motivation and precision is absent. These are "Feynman lectures done right". One may watch his non-linear dynamics and quantum mechanics lectures right after this.
> - But nothing is explained rigorously, although hinted at, lots of details are skipped and Balki name drops a LOT of stuff. You may choose to ignore them initially, because each term becomes a rabbit hole for math topics.

^3431f3


## what is physics actually then

From these previous lectures, one must agree that doing **physics** is a three step process:

- Step 1: Choose your ***spacetime***, you have 3 major types of options:
	- $c^{-1}=0$ Newtonian: the good ol' "non-relativistic" spacetime
	- $c^{-1}=1, G=0$ Minkowski: the SR spacetime
	- $c^{-1}=1, G=1$ Lorentzian: a whole range of GR spacetimes
- Step 2: Choose what the ***contents*** of your spacetime must be:
	- points: point particles, bodies with finite number of degrees of freedom, rays
	- fields: infinite degrees of freedom
	- fluids: "spacetime itself flowing" (they are different from fields, yes)
	- condensed matter
- Step 3: Choose a ***description*** for the contents (although not all of the following is possible for all the *contents* in step 2)
	- $\hbar = 0$ "classical mechanics/classical field theory" description - that is, writing equations of motion, $ma=F$ for particles in $c\to \infty$ or Maxwell's equations for EM fields
	- $\hbar =0$ "classical statistics" description
	- $\hbar =1$ "quantum mechanics/QFT" description
	- $\hbar=1$ "quantum statistical" description

BUT! Does the description of matter really depend very much on the spacetime? Yes sure, the equation of motion will change drastically, but the methods in ODEs do not change at all! We can study about spherical harmonics in waves, electrodynamics and in QM class - their physical interpretation is different but their *math* interpretation remains the same!

Hence, there is a component to this in the second step of the 3 step process: which is *"abstract"*. How much of the things we study can we abstract out? Can it be really useful in doing physics?

![](https://i.imgur.com/BIqIRsH.png)


This makes sense to me because generally quantum mechanics is taught before fluid mechanics, which is true because the former is a linear PDE - which makes it much easier - just introduce eigenvectors and eigenvalues and the method can be explained!

> [!info]  Lectures on Geometrical Anatomy of Theoretical Physics by Frederic Schuller
> These lectures start from logic!
> 
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=3JE4_9J8N1KMemlr&amp;list=PLPH7f_7ZlzxTi6kS4vCmv4ZKm9u8g5yic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


Although we must do physics as well, so we make this little table for reference with common terminology:

| contents | description | $c^{-1}=0$ Newtonian spacetime | $c^{-1}=1, G=0$ Minkowski spacetime (SR) | $c^{-1}=1, G=1$ Lorentzian manifolds (GR) |
| ---- | ---- | ---- | ---- | ---- |
|  | $\hbar =0$ |  |  |  |
| points | "actual" | "classical mechanics" Kleppner, Goldstein, David Morin, LandauLifshitz vol 1, Balki's lectures | "relativistic mechanics" LandauLifshitz vol 2 | "general relativity" LandauLifshitz vol 2 |
|  | "stat" | "statistical mechanics"  Kardar  | "relativistic statistical mechanics" Palash Pal  |  |
| fields | "actual" | "non-relativistic classical field theory" | "classical field theory"  | "classical field theory in curved spacetime" |
|  | "stat" |  | "statistical field theory" |  |
| fluids |  | "fluid mechanics" | "relativistic fluid mechanics" | "fluid mechanics in curved spacetime" |
|  |  |  |  |  |
|  | $\hbar =1$ |  |  |  |
| points | "actual" | "quantum mechanics" Griffiths, Balki's lectures, Shankar | - | - |
|  | "stat" | "quantum statistical mechanics" QM textbooks ^ should cover this | - | - |
| fields | "actual" |  | "QFT"  | "QFT in curved spacetime" or "global QFT" |
|  | "stat" |  |  |  |
| fluids | quantum fluids? | ? | ? | ? |
| atoms? |  |  |  |  |
| condensed matter? |  |  |  |  |
|  |  |  |  | QG? |

In general, there are

- Landau Lifshitz volumes 1-10
- [David Tong's notes](http://www.damtp.cam.ac.uk/user/tong/teaching.html) for many of the elements in the table
- look below!

So, essentially we did all of physics together. But did we do it properly? Did we went onto understanding the details?

# How to do mechanics properly

## understanding the philosophy

How one should do is by [[inculcation-linear-constructions|constructing everything linearly]]: 

- first analysis in $\R^{n}$ and/or analysis on smooth manifolds, then
	- [[inculcation-odes]] -> [[inculcation-all-of-mechanics#Mechanics of points done properly]]
	- PDEs 
	- PDEs -> [[inculcation-mechanics-fields]]
	- ? [[inculcation-mechanics-branes]]
	- PDEs -> [[inculcation-mechanics-fluids]]
- What one must understand is, in the side of ODEs: Lagrangian, Hamiltonian etc really *do not care* about the spacetime, or what you are trying to describe even: give it a ray of light in Newtonian spcaetime, or a point particle moving around a black hole (Swartzchild spacetime): the description remains the same.
	- Configuration space $\leftrightarrow$ Lagrangian dynamics, any other ODE
	- Phase space $\leftrightarrow$ Hamiltonian dynamics
- I do not mean the equations remains the same btw! I just mean use can use the general prescription (math!) like Lagrangians and Hamiltonians for any spacetime!
- This would therefore mean, the "statistical mechanics" prescription would also be, in this way - because statistical mechanics just starts from the phase space - the methods independent of "spacetimes" per say as phase space only depend on the configuration spaces.

> [!hint]
> You might wonder that we do not need this much details, or need to do things "properly", whatever that means. The physics textbooks do cover most of the content, with a bit of analysis and geometry everything becomes well-understood as well as "proper". I am assuming things like linear algebra "trivial", but one has to start from that, thats why [[inculcation-linear-constructions]] exists!



## doing the spacetimes bit

This doesn't need to be done first, or before [[#Mechanics of points done properly]], but these lectures are amazing:

> [!tip] The WE-Heraeus International Winter School on Gravity and Light
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=w6II_RQnncxuwK0v&amp;list=PL6YPgEhGKjOGKriFcF0LCJ4J8LDY3-nyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
> 
> - [THE WE-HERAEUS INTERNATIONAL WINTER SCHOOL ON GRAVITY AND LIGHT (Spanish Translation Available!) (richie291.wixsite.com)](https://richie291.wixsite.com/theoreticalphysics/post/the-we-heraeus-international-winter-school-on-gravity-and-light)
> - [Maths with Physics: The WE-Heraeus International Winter School on Gravity and Light, Lectures, Tutorials and Solutions](http://mathswithphysics.blogspot.com/2016/07/the-we-heraeus-international-winter.html) 

^uii1hk

Doing this lectures mean you shall be clear of all spacetimes not just GR.

# Mechanics of points done properly


> That is: as we see in *"classical mechanics"*, but the idea of a configuration space captures rays (as in ray optics) and rigid bodies along with finite number of point particles.


## writing the equations

|              | Configuration space    | Lagrangian | Phase space | Hamiltonian | $V=0$ solutions                                                |
| ------------ | ---------------------- | ---------- | ----------- | ----------- | -------------------------------------------------------------- |
| 1 point      | $\R^3$ (space)                 |            |             |             | geodesics in $\R^3$ with usual metric, that is, straight lines |
| $n$ points   |                        |            |             |             |                                                                |
| 1 rigid body | $SO(3) \ltimes \R^{3}$ |            |             |             |                                                                |
|              |                        |            |             |             |                                                                |

## solving the equations

- Physics textbooks on "classical mechanics" only worry about *local* properties of the configuration spaces, *local* solutions of the equations: so for example it cannot differentiate between a cylinder or a sphere as configuration spaces, because *locally* they are "same" given how we are describing them (smooth manifolds).
- Both local and global properties of ODEs are studied in [[inculcation-odes]], in for example Perko's book.


## probabilistic description of points

> As done in *statistical mechanics*.

> [!todo] **Main goal of statistical mechanics**: derive the empirical laws of thermodynamics from the classical mechanics description.
> 

- Boltzmann, Gibbs invented *statistical mechanics* to give more meaning to the thermodynamic quantities
- Ergodic theory was invented to ask when does the assumptions made by Boltzmann and others hold.
- First reference should be [[#^3431f3|Balki's lectures]], other physics references include [MIT 8.333 Statistical Mechanics I: Statistical Mechanics of Particles, Fall 2013 - YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP60gl3fdUTKRrt5t_GPx2sRg)
- [Statistical Mechanics From Thermodynamics to the Renormalization Group](http://library.lol/main/A8C329B75A3CB6CEEF87790E8C8C88BA)
- [Roderich Tumulka's notes](https://www.math.uni-tuebingen.de/de/forschung/maphy/lehre/ss-2019/statisticalphysics/dateien/lecture-notes.pdf) is best reference I've seen
	- actually talks about the main goal
- [Information Geometry (ucr.edu)](https://math.ucr.edu/home/baez/information/)
	- Part 17-21 is where thermodynamics is discussed
- [Classical Mechanics versus Thermodynamics (ucr.edu)](https://math.ucr.edu/home/baez/classical_vs_thermo/)

Hence what we get is 
$$
\mathrm{Probabilistic}:\mathrm{CM} \ (X,\mu) \to \mathrm{StatMech} \ (Q,\pi) \to \mathrm{Thermo} \ (Q,S)
$$

## quantization of the mechanics of points



> As done in *quantum mechanics*.
> Essentially, functional analysis on (rigged) Hilbert spaces (brings in Representation theory)

> [!tldr] Balakrishnan's quantum physics
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=6JKljRVWEioPWlTx&amp;list=PL0F530F3BAF8C6FCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
^3fyeee


> [!important] Frederic Schuller's lectures on quantum mechanics with lecture notes
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=7z1WbGoFOaWrNThN&amp;list=PLPH7f_7ZlzxQVx5jRjbfRGEzWY_upS5K6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
> 
> - [Maths with Physics: Frederic Schuller's Lectures on Quantum Theory with Lecture Notes](http://mathswithphysics.blogspot.com/2016/07/frederic-schullers-lectures-on-quantum.html)
> - [DR. FREDERIC SCHULLER'S COURSE OF QUANTUM THEORY (richie291.wixsite.com)](https://richie291.wixsite.com/theoreticalphysics/post/dr-frederic-schuller-s-course-of-quantum-theory)

So 
$$
\mathrm{Quantizaton}:\mathrm{CM} \ (X,H) \to \mathrm{QM} \ (L^{2}(X), \hat{H})
$$

but now we observe the correspondence between them, even though they are very different structure wise:
 ![[the-connection-between-cm-and-qm#though the one point problem]]

# Mechanics of fields

> This section is still under construction.

## Why upgrade to Lagrangian fields?

"Classical field theory" as a course was COOKED up to teach QFT because any quantum theory is defined by a classical theory and then we quantize it

 quantization: ClassicalFT → QFT

this is VERY UNPHYSICAL, proper physics says we must have a THEORY OF EVERYTHING and then we may take some limits c → ∞ , ħ, G →0, etc to get "approximate" theories, BUT WE CAN'T HAVE SUCH THINGS,  so we just just do mathematically inspired stuff

## Doing the proper theory of Lagrangian fields

so the actual content must be this 

- given you know vector bundles on smooth manifolds, we say field configuration bundles = some vector bundle on spacetime 
- this is what i call spacetime fields , now write a Lagrangian and study it, the spacetime be a semiriemannian manifold (not flat), then div of stress energy tensor= 0 doesn't imply global conservation laws, we must have Killing vector fields (I'VE NOT STUDIED THIS WELL YET FORGIVE ME IF IT'S KINDA OFF)
- you might have use the representation Spin(n) → SO(n), which allows you to define spin bundle where Spin(n) bundles

spin geometry:= study of dirac operators on such bundles

## Doing the proper theory of gauge fields

> gauge fields DO NOT happen on spacetime! (that is, the field's domain isn't the spacetime manifold)

- http://nicf.net/articles/classical-em/
- Gregory L. Naber - Topology, Geometry and Gauge fields - two volumes
- Mikio Nakahara - Geometry, topology, and physics


## quantization of field theories


(1) https://www.youtube.com/watch?v=fjJsX4ektBA&list=PLbMVogVj5nJRYLTwyuusiiFchFU-WvElW
(2) https://www.youtube.com/@tobiasjosborne/playlists
(3) https://www.youtube.com/watch?v=ACZC_XEyg9U
(4) https://www.youtube.com/playlist?list=PLDlWMHnDwyljrnVxoGoBkHclt3VEkP0Kf
(5)  https://www.youtube.com/playlist?list=PLbMVogVj5nJQ3slQodXQ5cSEtcp4HbNFc
(6) https://www.youtube.com/watch?v=29v0B2Fol3k&list=PL04QVxpjcnjiByGS5xGhiqC_G0rJVDDem&index=6&t=994



# Mechanics of fluids



> [!check] The **physics** of fluid mechanics: Averaging a differential equation system with high number of dynamical variables
> 
> Hamiltonian system of a system of particles
> $$\downarrow$$
> Statistical mechanics of the system of particles: Boltzmann equation with the probability distribution $f(\mathbf{x},t)$
> $$\downarrow$$
> Take the average of quantities at the point $(\mathbf{x},t)$ and get equations for them 
> $$\mathbf{v}(\mathbf{x},t)$$
> $$p(\mathbf{x},t)$$
> equations obtained: 
> - Continuity of mass
> - Continuity of momentum
> - Continuity of energy
> - Entropy inequality
> - ...is that it?

> My question is ==can we do this for any Hamiltonian system?== Or even any ODE with high enough ($\sim 10^{23}$) dimension? But let's not worry about that!

---


<iframe width="560" height="315" src="https://www.youtube.com/embed/XoefjJdFq6k?si=xltnMasUkduN11UQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/VH4oawCiHPU?si=Wt1hxgkK4cpt_eWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/_UoTTq651dE?si=EOi15dGihAaJzt79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Mechanics with a lattice somewhere

Where does the Ising model sit in all these?

