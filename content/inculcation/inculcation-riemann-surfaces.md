---
created: 2025-08-04T19:40:08
modified: 2025-08-04T19:40:16
tags:
  - Inculcation
title: "Inculcation: complex analysis and Riemann surfaces, that is, complex 1-manifolds, complex algebraic curves, round/flat/hyperbolic surfaces and so on"
aliases: Riemann surfaces, that is, complex 1-manifolds, complex algebraic curves, round/flat/hyperbolic surfaces and so on
---

Riemann surfaces are connected complex 1-manifolds. Compact Riemann surfaces are same as $\mathbb {C}$-algebraic curves. We can study meromorphic functions and meromorphic forms on these spaces.

- `book` Forster
- `book` Miranda
- `book` [Wilhelm Schlag](https://gauss.math.yale.edu/~ws442/complex.pdf)
- `lecture videos` on [Riemann Surfaces by M Khalkhali](https://www.math.uwo.ca/faculty/khalkhali/riemannsurfaces.html) with [videos on YouTube](https://www.youtube.com/playlist?list=PLFLLJhtIPhRaiJp0jJM648EC6A7swNDKL)
- `book` Donaldson
- `book` [Jost](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf)


There are alternative ways to define Riemann surfaces: the nicest of which is as the *ringed space of functions* locally isomorphic to open subsets of $\mathbb{C}$.

- `lecture notes` https://mathweb.tifr.res.in/~srinivas/rsfull.pdf (uses ringed spaces definition of Riemann surfaces where the rings are rings of functions on it)
- `lecture notes` https://math.berkeley.edu/~teleman/math/Riemann.pdf

And there are many more references... a hundred more books and notes available online https://mathoverflow.net/questions/313254/references-for-riemann-surfaces.

Ahlfors has the *Etale space* definition of domain of *global holomorphic functions*. Those class of spaces actually exhaust the entire class of Riemann surfaces.

- ??

The uniformization theorem for Riemann surfaces state that any simply connected Riemann surface is biholomorphic to either $\mathbb{C}$, the unit disk or $\mathbb{C} \pmb{P}^{1}$.

- `lecture videos` [Riemann Surfaces](https://www.bilibili.com/video/BV1fW41197nr/?spm_id_from=333.337.search-card.all.click) by Jacob Bernstein for MSRI summer school 2014: Complex geometry and geometric analysis on complex manifolds ^yg7hmg
	- Prerequisites: 
		- Knowledge of basic complex analysis—at the level of Ahlfors, Complex Analysis, Chapters 1-5—will be assumed. Some basic familiarity with (abstract) surface theory and differential forms will be helpful. However, I will review this material as needed.
	- Reading: 
		- The main text will be [Donaldson - Riemann Surfaces](http://www2.imperial.ac.uk/~skdona/RSPREF.PDF).
		- [Syllabus](https://www.slmath.org/ckeditor_assets/attachments/106/bernstein_hein_naber_syllabus.pdf)
	- Other useful references:
		- Farkas and Kra, Riemann Surfaces; a classical text on the subject.
		- Miranda, Algebraic Curves and Riemann Surfaces; a more algebraic perspective.
	- Week 1: Introduction to Riemann Surfaces
		- Surfaces and Topology
		- Riemann Surfaces and Holomorphic Maps
		- Maps between Riemann Surfaces
		- Calculus on Riemann Surfaces
		- De Rham Cohomology
	- Week 2: Geometric Analysis on Riemann Surfaces
		- Elliptic Functions and Integrals
		- Meromorphic Functions
		- Inverting the Laplacian
		- The Uniformization Theorem
		- Riemann Surfaces and Minimal Surfaces 

By the uniformization theorem, every Riemann surface is a quotient of $\mathbb{C}$, the unit disk or $\mathbb{C} \pmb{P}^{1}$ by a discrete subgroup of their automorphism group acting freely. No such quotient exists for $\mathbb{C} \pmb{P}^{1}$. We can easily classify the quotients of $\mathbb{C}$. The quotients of the unit disk by torsion free Fuchsian groups are a intersecting class of objects of study.

- `lecture videos` These lectures assume covering space theory (algebraic topology) and uniformization theory and does (pre-moduli space) classification of Riemann surfaces: https://www.youtube.com/playlist?list=PLbMVogVj5nJSm4256vuITlsovUT1xVkUL

Riemann surfaces which are quotients of the unit disk by torsion free Fuchsian groups are biholomorphic if and only if the Fuchsian groups are conjugate inside the automorphism group of the unit disk. Oriented hyperbolic surfaces (connected, complete Riemannian 2-manifolds of constant sectional curvature -1) are also quotients of the unit disk by torsion free Fuchsian groups, with oriented isometries related to conjugacies. Therefore we may study, even classify Riemann surfaces through the theory of oriented hyperbolic surfaces.

- `book` Katok
- `book` [GTM091.The.Geometry.of.Discrete.Groups Beardon.A.F..(Springer.1995)](https://cjhb.site/Files.php/Books/Discrete%20Mathematics/GTM091.The.Geometry.of.Discrete.Groups%2C.Beardon.A.F..\(Springer.1995\)\(ISBN.3540907882\)\(T\)\(347s\).pdf)

The space of all *marked* Riemann surfaces of genus $g$ is called Teichmuller space of genus $g$ Riemann surfaces. These spaces are complex manifolds of dimension depending on the genus $g$.

- `book` Farb Margalit - Mapping class groups

We may define a weaker notion of isomorphism of Riemann surfaces: quasiconformal homeomorphism. The class of marked Riemann surfaces quasiconformal to a fixed Riemann surface generalise the Teichmuller space of compact Riemann surfaces. 

- `book` Hubbard

A hyperbolic surface comes with its Laplacian. We may study its spectrum and eigenfunctions and ask interesting questions!

- `book` [Geometry and Spectra of Compact Riemann Surfaces - Google Books](https://www.google.co.in/books/edition/Geometry_and_Spectra_of_Compact_Riemann/MXL1vO5GmmsC?hl=en&gbpv=1&pg=PR3&printsec=frontcover)
- `book` *arithmetic quantum unique ergodicity*

We may study the spectral theory of modular surfaces and extract number theoretic facts.

- `paper` https://web.math.princeton.edu/~sarnak/Preprints/baltimore.pdf
- `lecture notes` [Lectures on Diophantine approximation and Dynamics](https://www.math.uzh.ch/gorodnik/tifr/)

We can ask questions about *moduli* of Riemann surfaces, such as its spectra as genus goes to infinity and so on.

- ???

We can compactify the moduli space.

- `article` [Algebraic and Analytic Compactifications of Moduli Spaces](https://www.ams.org/notices/202209/rnoti-p1476.pdf)
