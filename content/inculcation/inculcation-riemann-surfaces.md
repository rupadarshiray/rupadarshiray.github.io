---
created: 2025-08-04T19:40:08
modified: 2025-08-04T19:40:16
tags:
  - Inculcation
title: "Inculcation: complex analysis and Riemann surfaces, that is, complex 1-manifolds, complex algebraic curves, round/flat/hyperbolic surfaces and so on"
aliases: Riemann surfaces, that is, complex 1-manifolds, complex algebraic curves, round/flat/hyperbolic surfaces and so on
---
Complex analysis is the study of holomorphic functions on open subsets of $\mathbb{C}$.

- `book` Ahlfors - Complex analysis
- `book` [Stein and Sakarchi - Complex analysis](https://www.fing.edu.uy/~cerminar/Complex_Analysis.pdf)

After a first course on complex analysis, we can move onto functional analytic techniques. Using such tools we can prove the *Riemann mapping theorem*.

- `book` [Conway - Complex analysis I](https://psm73.wordpress.com/wp-content/uploads/2009/03/conway.pdf), Chapter 6, 11, 12
- `lecture notes` [Tao - 246A, Notes 5: conformal mapping](https://terrytao.wordpress.com/2016/10/18/246a-notes-5-conformal-mapping/)

There some some number theoretic results that we can prove using the theory of holomorphic functions.

- `book` [Tao - 246B – complex analysis](https://terrytao.wordpress.com/category/teaching/246b-complex-analysis/)

We can do even more functional analysis with holomorphic functions. We can ask: what does holomorphic images of disks look like? How large or small can they be? Do they contain a disk of some fixed radius?

- `book` [Conway - Complex analysis II](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/conwaycx2.pdf)
- `lecture notes` [Tao - Holomorphic images of disks](https://terrytao.wordpress.com/2020/11/28/holomorphic-images-of-disks/)
- `wikipedia` [Conformal radius - Wikipedia](https://en.wikipedia.org/wiki/Conformal_radius)
- `lecture notes` [Tao - 246C notes 3: Univalent functions, the Loewner equation, and the Bieberbach conjecture | What's new](https://terrytao.wordpress.com/2018/05/02/246c-notes-3-univalent-functions-the-loewner-equation-and-the-bieberbach-conjecture/)

One may study a generalization of conformal maps, called *quasiconformal homeomorphisms*. We can prove results about them similar to holomorphic maps. Using this theory, we can produce an explicit sequence of maps that converge to the Riemann mapping as in the *Riemann mapping theorem*.

- `lecture notes` [Tao - 246C notes 2: Circle packings, conformal maps, and quasiconformal maps | What's new](https://terrytao.wordpress.com/2018/04/12/246c-notes-2-circle-packings-conformal-maps-and-quasiconformal-maps/)
- `lecture notes, videos` [Christopher Bishop  - MAT 627, Topics in Complex Analysis, Spring 2025](https://www.math.stonybrook.edu/~bishop/classes/math627.S25/)

We can even look at some random processes.

- `lecture notes, videos` [McMullen - From Conformal Invariants to Percolation](https://people.math.harvard.edu/~ctm/home/text/class/harvard/219/21/html/syl.html)
- `lecture notes` [246C notes 4: Brownian motion, conformal invariance, and SLE | What's new](https://terrytao.wordpress.com/2018/05/29/246c-notes-4-brownian-motion-conformal-invariance-and-sle/)

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

---

Standard texts prove the monodromy theorem for analytic continuations. However that just says when two such continuations are bound to be the same. We don't have any result about *existence* of analytic continuations. Why?

It is because they *may* behave very *weirdly*.

We however know what is the maximal extent of analytic continuations. Riemann asked this question originally. Ahlfors has the *Etale space* definition of domain of *global holomorphic functions*. Forster denotes this as $\left\vert \mathscr{O} \right\vert$. Its connected components actually exhaust the entire class of open Riemann surfaces (I think?).

- ??

We can look at examples of such global domains of functions/gems of functions such as $z^{1/n}$, or such fractional power of polynomials $p(z)$, and so on. These functions are roots of polynomials $\mathbb{C}(z)[T]$ for example $z^{1/n}$ satisfies $T^{n}-z=0$. Some people call such functions *algebraic*. Standard texts such as Forster talks about *Riemann surfaces of algebraic functions*, which are more generally roots of polynomials over meromorphic functions $\mathscr{M}(X)[T]$ over a compact Riemann surface $X$. Such functions have global domain a finite branched cover over $X$.

Alright, we dealt with *algebraic functions* that satisfy a polynomial with coefficients in the field of meromorphic functions. What other holomorphic germs can we deal with? How about the *elliptic integral* $$ \int \frac{1}{\sqrt{z(z-1)(z-\lambda)}}\mathrm{d}z $$ where $\lambda\in \mathbb{C}\setminus\{ 0,1 \}$. How may we describe these functions? Well there are two ways to talk about them.

First, we can construct their *Riemann surface*. Forster does this, even for higher degree polynomials *hyperelliptic integrals*.

Second, we can try to ask what's the "inverse" of the function defined above. There is a nice answer to this! Its the Weirstrass elliptic function $\wp_{\lambda}$. Such elliptic functions are meromorphic on complex tori $\mathbb{C} / \mathbb{Z}\{ \omega_1, \omega_2 \}$ isomorphic to the elliptic curve defined by the polynomial $y^{2}= x(x-1)(x-\lambda)$. These $\omega_1, \omega_2$ are the periods of this elliptic curve.

Period of an elliptic curve uniquely reconstructs it as a Riemann surface. However, doing this with compact Riemann surfaces of genus higher than one is a bit tricky. Equivalent question is how may we "invert" integrals of the form $$ \int \frac{1}{\sqrt{p(z)}}\mathrm{d}z $$ where $p$ is a polynomial of degree 5 or higher. The degree 3,4 case corresponds to the case of elliptic curves.

- `book` [Complex Analysis 2: Riemann Surfaces, Several Complex Variables, Abelian Functions, Higher Modular Functions | Springer Nature Link](https://link.springer.com/book/10.1007/978-3-642-20554-5) Chapters 4 to 7

The works of Abel and Jacobi shows that we can think of these integrals as holomorphic 1-forms on compact Riemann surfaces $X$ and their inverses are functions on their Jacobian, a complex tori of dimension = genus of $X$.

The theorem of Torelli shows that the period of a higher genus compact Riemann surface also reconstructs it uniquely.

This chain of thought somehow leads us to *Hodge theory*.

---

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

- `book` Hubbard - Techmuller theory volume 1

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
