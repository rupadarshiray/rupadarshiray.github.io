---
created: 2023-03-27T22:44:08
modified: 2026-08-26T11:29:59
tags: []
aliases: []
---

This list was made with materials found on the internet (mostly freely available), to reduce my pain of searching each time they are needed. All opinions, arrangements, organizations etc are strictly mine. Because of that, this list lacks topics like number theory, algebraic geometry, graph theory, algorithms, combinatorics, etc.

This list was recently (August '26) revamped!

## I 

We start with groups, vector spaces and metric spaces.

### finite groups

<iframe width="100%" height="315" src="https://www.youtube.com/embed/mH0oCDa74tE?si=Kk1xTVuDkV2Ap7Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The miniseries [Essence of Group Theory - YouTube](https://www.youtube.com/playlist?list=PLDcSwjT2BF_VuNbn8HiHZKKy59SgnIAeO) carries it forward.


### vector spaces

<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=Cq-M0B5yEuDGeziD&amp;list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

We see with just the "little" definition of a vector space, we can have things like  **writing any vector as a unique linear combination of finitely many vectors from a smaller subset of the entire space**. This much of *structure* is enough to ask a lot of questions and a solve a whole lot of problems! If you want more things, we can have more things! (oriented vector space, inner product spaces, normed vector spaces, etc.). 

- `lectures, book` Linear Algebra Done Right - Sheldon Axler
- `lecture videos` [Linear Algebra by Dr. K.C. Sivakumar](https://www.youtube.com/playlist?list=PLbMVogVj5nJQ2vsW_hmyvVfO4GYWaaPp7)

Need help proving stuff? Try following the arrows to prove equivalent conditions for injectivity of linear maps on finite dim spaces:

![](https://i.imgur.com/Jf457uG.png)


### metric spaces

### real analysis I

### Napkin

Evan Chen's [A Infinitely Large Napkin](https://venhance.github.io/napkin/Napkin.pdf) is an introduction to a lots of fields of math! However, it is NOT a textbook but a really nice introductory reference. It starts with groups and metric spaces!

### The Prinston Companion to Mathematics

[The Princeton Companion to Mathematics](https://sites.math.rutgers.edu/~zeilberg/akherim/PCM.pdf)

### history of mathematics

`lecture videos` [MathHistory: A course in the History of Mathematics](https://www.youtube.com/playlist?list=PL55C7C83781CF4316) (although be aware, the instructor doesn't believe that $\R$ exists)

### handwavy physics

We learn physics though the Action principle.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=_JXvZTvRZWIzq9M0&amp;list=PLlFCvH2vR5kRzC1LQtHy_MUAquC-tQiiW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Ignore the Fourier expansion of electric field stuff, just the ideas behind GR, QFT matters! Continue with GR and action: [General Relativity by Prof. Thanu Padmanabhan - YouTube](https://www.youtube.com/playlist?list=PLfrsXbPUIUSB6xoXyIvVEHYiG-hVmJhHf).

After that watch these lectures covering *Newtonian, Lagrangian, Hamiltonian mechanics, statistical mechanics, special relativity* all at once!

<iframe src="https://www.youtube.com/embed/videoseries?list=PL5E4E56893588CBA8" style=" top:0; left:0; width:100%; border:none;  height:500px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>

These are nice as an intro "proper" physics, they will look fascinating, but my recommended levels of motivation and precision is absent. These are "Feynman lectures done right". One may watch his non-linear dynamics and quantum mechanics lectures right after this. But nothing is explained "rigorously", although hinted at, lots of details are skipped and Balki name drops a LOT of stuff. You may choose to ignore them initially, because each term becomes a rabbit hole for math topics.


Going ahead, we can look at quantum physics.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=6JKljRVWEioPWlTx&amp;list=PL0F530F3BAF8C6FCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

For more mechanics one may look at


<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=_X3mgtZ6do3oX5aj&amp;list=PLbN57C5Zdl6j_qJA-pARJnKsmROzPnO9V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


and

- `book` Steven Strogatz - Nonlinear dynamics and chaos : with applications to physics, biology, chemistry, and engineering

## II 

We continue with algebra, analysis, topology and geometry.

### rings and modules


Looking back on linear algebra, we can reiterate the following.

A $k$-vector space $V$ with a endomorphism $T$ (fancy name for linear map $V\to V$) gives a $k[X]$-module structure on $V$, so we can directly use $k[X]$-modules classification theorems to construct the theorems on canonical forms.

I am still looking on how to understand *two* linear endomorphisms giving a $k[X,Y]$ structure on $V$. At the least, I can re-interpret the theorem that says "we always have a common eigenvector of two commuting linear maps" as the following.

Let's say we have a $k[X,Y]$-module $V$ defined by two linear endomorphisms $V\to V$. Then we always have at least one *simple* non-trivial $k[X,Y]$-submodule of $V$. 
### representation theory of finite groups

A group homomorphism from a (say, finite for now) group $G$ to the general linear group on a vector space $V$  $$ G \to {GL}(V) $$ is called a *representation of the group $G$*. One can classify and study such homomorphisms (up to an equivalence of course) and it's called representation theory (of finite groups). This "helps" in doing linear algebra when we have a invertible linear map $V\to V$, in my opinion.
### cute topology

- [Topology & Geometry by Dr Tadashi Tokieda - YouTube](https://www.youtube.com/playlist?list=PLTBqohhFNBE_09L0i-lf3fYXF5woAbrzJ)
- Knot theory
	- [How The Most Useless Branch of Math Could Save Your Life - YouTube](https://www.youtube.com/watch?v=8DBhTXM_Br4&t=246s)
	- [Knot Theory - YouTube](https://www.youtube.com/playlist?list=PLOROtRhtegr4c1H1JaWN1f6J_q1HdWZOY)

![[visualizing-higher-dimensions]]

- how topology affects and interacts with geometry, analysis, algebra (Lie groups, say) and physics
	- [Gauss–Bonnet theorem - Wikipedia](https://en.wikipedia.org/wiki/Gauss%E2%80%93Bonnet_theorem)
	- [Dirac's belt trick, Topology, and Spin ½ particles - YouTube](https://www.youtube.com/watch?v=ACZC_XEyg9U)
	- [The derivative isn't what you think it is. - YouTube](https://www.youtube.com/watch?v=2ptFnIj71SM)

### curves and surfaces

- `book` do Carmo - Differential geometry of curves and surfaces
- `lecture videos` [ICTP Diploma - Differential Geometry - Claudio Arezzo - YouTube](https://www.youtube.com/playlist?list=PLLq_gUfXAnkl5JArcktbOrIUeR5rra-Gz) These lectures has pre-requisites of basic linear algebra, analysis in $\mathbb{R}^{n}$, knowing total derivatives and bilinear forms with introducing yourself a little *topology* (compactness, connectedness).

### probability and information theory

<iframe width="100%" height="315" src="https://www.youtube.com/embed/v68zYyaEmEA?si=jHpmEwYRdWKGO01Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### illustrations in mathematics

- `lecture videos` [2026 - T1 - Illustration as a mathematical research technique | Tag | Carmin.tv](https://www.carmin.tv/en/collections/2026-t1-illustration-as-a-mathematical-research-technique)


### elementary algebraic geometry and number theory

[![281](https://m.media-amazon.com/images/I/61A4APM3UNL._SL1257_.jpg)](https://link.springer.com/book/10.1007/978-3-319-18588-0)

## III 

Life and mathematical adventure is very nonlinear, but arguments should not be circular. We linearly construct from the ground up to have a stronger foundation for mathematics.

### logic

### set theory

### real analysis II


*Total derivative* of function $$ f:U \subseteq V\to W $$ between finite-dim real normed vector spaces at a point $p\in U$ is supposed to be a linear map $$D_{p}f:V\to W$$ that "approximates" $f$ near $p$. So if $D_{p}f$ is a rotation (as a linear map), then $$ f: U \to f(U) $$ should "look" like a rotation "near $p$".

---

- Analysis by Herbert Amann and Joachim Escher [Volume I](http://library.lol/main/D52F82501240A7F94F77CCA630B43F6E)

### complex analysis

![[inculcation-riemann-surfaces#1]]

### measure theory

- [cmat.edu.uy/~mordecki/courses/medida2013/book.pdf](https://www.cmat.edu.uy/~mordecki/courses/medida2013/book.pdf)

### topology

- `book` Munkres
- http://www.math.toronto.edu/ivan/mat327/?resources
- http://math.iisc.ac.in/~gadgil/topology-2021/all-lectures/
- [Topology (MTH-TOP) - YouTube](https://www.youtube.com/playlist?list=PLp0hSY2uBeP8jgD0wTQM-RjkakSEBdHUD)
- For a quick one lecture introduction with motivation: [Lecture 1: Topology (International Winter School on Gravity and Light 2015) - YouTube](https://www.youtube.com/watch?v=7G4SqIboeig)
- [π-Base](https://topology.pi-base.org/)

### Galois theory



### algebraic topology I

- `book` [Hatcher's textbook](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)
- `lecture videos` [Algebraic Topology - Pierre Albin - YouTube](https://www.youtube.com/playlist?list=PLpRLWqLFLVTCL15U6N3o35g4uhMSBVA2b)

### topological and geometric group theory

- Clara Loh - "Geometric Group Theory"
- Pierre de la Harpe - "Topics in Geometric Group Theory"
-  [Office Hours with a Geometric Group Theorist](http://press.princeton.edu/titles/11042.html)

### smooth manifolds


- `lecture videos` [TMS 2024 Spring: Differential Forms in Algebraic Topology](https://www.youtube.com/playlist?list=PLQZfZKhc0kiA149d8nmkY7DARwyjzHfl0)
- `lecture videos` https://www.math.iitb.ac.in/~ronnie/Fall2020/MA815.html

### dynamics

This is more a "dynamical systems" course, but has ODEs too

<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=hlva1bjtL_s2MCYJ&amp;list=PLLq_gUfXAnkmC-VWIJ_HW8cdOZLEtHfXJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


And follows the notes 

- `lecture notes` [SLI.pdf (bris.ac.uk)](https://people.maths.bris.ac.uk/~ip13935/dyn/SLI.pdf)

![|246](https://i.imgur.com/FfULVge.png)

![](https://i.imgur.com/5wSZ3Dr.png)

- `book` Arnold's Ordinary Differential Equations is also a good resource.
- `book` [Gerald Teschl's book on ODEs and dynamical systems](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/index.html) is amazing!

And move onto more dynamical systems

- `book` Hasselblat and A Katok - A First Course in Dynamics
- `lecture notes` [Dr. Richard Brown Math 110.421, Dynamical Systems, Spring 2010](https://math.jhu.edu/~brown/courses/s10/SyllabusS10421.htm)****

![[everything-in-a-dynamics-pov]]

### semi-Riemannian manifolds

### geometric mechanics

Schuller's lectures are a good place to start.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=w6II_RQnncxuwK0v&amp;list=PL6YPgEhGKjOGKriFcF0LCJ4J8LDY3-nyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

People have written up notes from these lectures: [THE WE-HERAEUS INTERNATIONAL WINTER SCHOOL ON GRAVITY AND LIGHT (Spanish Translation Available!) (richie291.wixsite.com)](https://richie291.wixsite.com/theoreticalphysics/post/the-we-heraeus-international-winter-school-on-gravity-and-light) and [Maths with Physics: The WE-Heraeus International Winter School on Gravity and Light, Lectures, Tutorials and Solutions](http://mathswithphysics.blogspot.com/2016/07/the-we-heraeus-international-winter.html) .


---

- `lecturenotes` Use measure theory to do [Classical Equilibrium Statistical Mechanics](https://warwick.ac.uk/fac/sci/maths/people/staff/stefan_adams/lecturenotestvi/cdias-adams-30.pdf)

### PDEs

- [Partial Differential Equations - Giovanni Bellettini - Lecture 01 - YouTube](https://www.youtube.com/watch?v=Rq1iRT2LL-8)
- `talk` [Mathematics of Turbulent Flows: A Million Dollar Problem! by Edriss S Titi - YouTube](https://www.youtube.com/watch?v=VH4oawCiHPU)

### symplectic manifolds

- `lecture videos` [Fields Academy Course: Symplectic Geometry](https://www.youtube.com/playlist?list=PLArBKNfJxuukGoNZD6yBjie_zgY-x8Vn2)

### computation in mathematics

## IV


### analysis

We start with some Functional analysis.

- `book` https://www.kryakin.site/am2/Stein-Shakarchi%5D-4-Functional-Analys.pdf
- Papa and grandpa Rudin
- `lecture videos` [MIT 18.102 Introduction to Functional Analysis, Spring 2021](https://www.youtube.com/playlist?list=PLUl4u3cNGP63micsJp_--fRAjZXPrQzW_)
- `lecture videos` [IMPA Doctorate program: Functional Analysis (2019)](https://www.youtube.com/playlist?list=PLo4jXE-LdDTTIIIRwqK35CbFJieSJEcVR)

Then look at some Fourier analysis.

- `book` M Pinsky - Introduction to Fourier Analysis and Wavelets (2009)
- `lecture videos` [【MIT数学课程】傅里叶分析：18.103 Fourier Analysis: Theory and Applications Fall 2020_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Qz4y167rb/)

Some even more hard-core analysis.

- `lecture videos` [【MIT数学课程】 微分分析：18.155 Differential Analysis Ⅰ Fall 2020_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV12K4y1L7Z4/)
- `lecture videos` [【MIT数学课程】 微分分析：18.156 Differential Analysis Ⅱ Spring 2021_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1fV411e77t/)

### ergodic theory

- `book` Einsiedler and Ward - Ergodic Theory
- `lecture videos` [Ergodic Theory, Geometry and Dynamics](https://people.math.harvard.edu/~ctm/home/text/class/harvard/275/20/html/index.html)

![[inculcation-lie-groups#ergodic theory and Lie groups]]

### Lie groups, Lie algebras and their finite dimensional representation theory

![[inculcation-lie-groups#introductory]]

- `book` Fulton, Harris - Representation theory

![[inculcation-lie-groups#Lie groups and Lie algebras]]

### mechanics

- `book` Gregory L. Naber - Topology, Geometry and Gauge fields - two volumes
- `book` Mikio Nakahara - Geometry, topology, and physics


### algebraic topology II

- `book` May - Algebraic topology
- `lecture videos` https://metaphor.ethz.ch/x/2022/fs/401-3002-12L/ [Algebraic Topology II (Spring 2020)（部分）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1wQ4y1B7xd/)
- `lecture videos` [Algebraic topology from a geometric perspective](https://pages.uoregon.edu/dps/GeometricAlgebraicTopology/)

### symplectic dynamics



### differential geometry

- `book` R W Sharpe, S S Chern - Differential Geometry Cartan’s Generalization of Klein’s Erlangen Program-Springer (1997)
- `lecture videos` [【MIT数学课程】 黎曼几何：18.965 Geometry of Manifolds Ⅰ 2020 Fall_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV19T4y1M7W5/)


### algebraic varieties

- `book` Harris - Algebraic geometry



### commutative, homological and categorical algebra


Well...

### more complex analysis, Riemann surfaces, algebraic curves, hyperbolic surfaces

![[inculcation-riemann-surfaces#2]]


### several complex variables and complex manifolds


- `lecture notes` https://agag-jboehm.math.rptu.de/~boehm/lehre/21_CM/cm.pdf
- `lecture notes` [Lecture Notes by Zbigniew Błocki](https://gamma.im.uj.edu.pl/~blocki/publ/ln/)
- `lecture notes` https://www.math.stonybrook.edu/~cschnell/pdf/notes/complex-manifolds.pdf from https://www.math.stonybrook.edu/~cschnell/mat545/
- https://www.math.stonybrook.edu/~cschnell/pdf/notes/abelian-varieties.pdf
- `lecture notes` https://www.jirka.org/scv/scv.pdf
- `book` [From Holomorphic Functions to Complex Manifolds | Springer Nature Link](https://link.springer.com/book/10.1007/978-1-4684-9273-6)
- `lecture notes` https://enric-sf.github.io/courses/CG/CG_ln.pdf from https://enric-sf.github.io/courses/CG/complex_geometry.html
- `book` Herbert Alexander, John Wermer - Several Complex Variables and Banach Algebras
- `book` Joseph L Taylor - Several complex variables with connections to algebraic geometry and Lie groups
- `book` Lars Hörmander - An Introduction to Complex Analysis in Several Variables, 3rd Edition (1990)
- `lecture videos` [Pierre Albin - Math 514: Complex Algebraic Geometry - Fall 2020](https://palbin.web.illinois.edu/Math514.Fall2020/Lectures.html)
- `lecture videos` [Hans-Joachim Hein - Complex Geometry](https://www.bilibili.com/video/BV1Qv41177Hp/?spm_id_from=333.337.search-card.all.click)
	- Prerequisites: Basics of manifolds, tensor fields, differential forms, etc. Warner, Foundations of Differentiable Manifolds and Lie Groups, Chapters 1, 2, 4, 6, contains all we need and much more.
	- Basic complex analysis as in Stein & Shakarchi, Complex Analysis, Chapters 1, 2, 3, 8.
	- Reading: 
		- Huybrechts, Complex Geometry, is an excellent basic textbook with exercises.
		- Lecture notes by Joel Fine: http://homepages.ulb.ac.be/∼joelfine/papers.html#survey.
		- Complex Monge-Ampere: http://gamma.im.uj.edu.pl/∼blocki/publ/ln/tln.pdf.
		- For the end of Week 2: http://arxiv.org/pdf/0803.0985.pdf, Section 5.
	- Week 1: Introduction to Complex Geometry
		- Holomorphic Functions and Complex Calculus
		- Complex Manifolds
		- Holomorphic Line Bundles
		- Pseudoconvexity and Pseudoconcavity
		- The Kodaira Embedding Theorem
	- Week 2: Topics in Kahler-Einstein Manifolds
		- Kahler Manifolds
		- Ricci Curvature and the Complex Monge-Ampere Equation
		- Examples of Ricci-flat Spaces
		- Basic Estimates for the Complex Monge-Ampere Equation
		- The Mukai-Umemura Manifold


### Riemannian geometry


A second course in Riemannian geometry is of fashion.

- `lecture videos` [Topics in Geometry and Topology: A Second Course in Riemannian Geometry - Fields Academy Shared Graduate Course](https://www.youtube.com/playlist?list=PLArBKNfJxuunOXcRxEq1lbJ2AmwaGCo7E)

We can specifically look at *Ricci flows*!

- `lecture videos` [Gerhard Huisken - Ricci flow](https://www.mfo.de/about-the-institute/staff/prof-dr-gerhard-huisken/lectures/introduction-to-ricci-flow)
- `article` [Richard H Bamler - Recent developments in Ricci flows](https://arxiv.org/abs/2102.12615)

The fields of spectral geometry and geometric analysis are very interesting!

- `lecture videos` [Masoud Khalkhali - Spectral geometry](https://www.youtube.com/playlist?list=PLFLLJhtIPhRYZ9dRdS_xWvgPafZBdpsKs)
- `book` Olivier Lablée - Spectral Theory in Riemannian Geometry
- `lecture videos` [Aaron Naber - Geometric Analysis](https://www.bilibili.com/video/BV1fW41197nr/?spm_id_from=333.337.search-card.all.click)
	- **Prerequisites:** Basics of manifolds, tensors, and differential forms. Basics of PDE theory, for instance Evans’s book Partial Differential Equations, in particular those chapters on second order elliptic and parabolic equations. Familiarity with exponential maps, injectivity radius, and geodesics would be helpful, for instance chapter one of Jost’s book Riemannian Geometry and Geometric Analysis is more than sufficient.
	- **Reading:** The main source will be Petersen’s book on Riemannian Geometry. We will also rely on Jost’s Riemannian Geometry and Geometric Analysis, and on the book by Cheeger Degeneration of Riemannian Metrics Under Ricci Curvature Bounds. More advanced topics will use relevant papers in the field.
	- Week 1: Introduction to Geometric Analysis
		- Review of Manifolds and Smooth Structure
		- Introduction to Curvature and Geodesic Coordinates
		- Laplacians and Harmonic Coordinates
		- Heat Kernels and Geometry
		- Sectional Curvature and Finite Diffeomorphism Theorems
	- Week 2: Topics in Regularity Theory
		- Ricci Curvature, Volume Monotonicity and Rigidity Theorems
		- Ricci Curvature and Almost Rigidity Theorems
		- Lower Ricci Curvature and Stratification Theorems
		- Bounded Ricci Curvature and ε-regularity Theorems
		- Outline of Regularity Theory for Einstein Manifolds
- `lecture videos` [【MIT数学课程】 流形上的几何：18.966 Geometry of Manifolds Ⅱ 2021 Spring_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Pi4y1K7vH/)
	- More about this course at [[course-mit18.96x-geometry]]
- [MAT 6229: Geometric spectral theory | Institut des sciences mathématiques](https://www.ism.uqam.ca/accueil/formation-courses/equations-aux-derivees-partielles-theorie-spectrale-geometrique/?language=default)

We may also look at some Kahler geometry.

- `talk video` [Harish Seshadri - Volume and diameter of positively curved Kähler manifolds - YouTube](https://www.youtube.com/watch?v=TbhT0nsp1aY)

### abstract harmonic analysis, operator theory

- `book` Folland - Abstract harmonic analysis

![[inculcation-lie-groups#Banach algebras C -algebras]]

### analytic group theory

- `lecture notes` [[2402.15867v1] An Invitation to Analytic Group Theory](https://arxiv.org/abs/2402.15867v1)

### Algebraic geometry

Well...

## V


### symmetric spaces, semisimple Lie groups, their unitary representations and discrete subgroups


We look at locally symmetric spaces and correspondingly discrete subgroups of semisimple Lie groups: their deformations and phenomenon of rigidity. We have Mostow's strong rigidity.

![[inculcation-lie-groups#Lie groups symmetric spaces and beyond]]



![[inculcation-lie-groups#large events]]

### global, microlocal, infinite dimensional analysis

- `lecture videos` [MIT 18.157 Microlocal Analysis Spring 2021](https://www.bilibili.com/video/BV1uK4y1J7ni/)
- `lecture videos` [Microlocal Analysis - 2021 Fall, Peter Hintz (ETH Zürich)](https://www.bilibili.com/video/BV1nW4y1h7xc/)
- `lecture notes` [Semiclassical Microlocal Analysis](http://staff.ustc.edu.cn/~wangzuoq/Courses/20F-SMA/)
- `lecture notes` [18.157: Introduction to Microlocal Analysis](https://math.mit.edu/~rbm/18.157-F09/18.157-F09.html)
- `lecture videos` [TMS 2018 Spring: An introduction to Geometric Measure Theory](https://www.youtube.com/playlist?list=PLQZfZKhc0kiB2R3BxRidyjo643DtjxVVn)

### nilpotent Lie groups and their unitary representations

### number theory


### low dimensional topology and geometry

- `lecture videos` [Introduction to Knot Theory and 3-manifold Topology - YouTube](https://www.youtube.com/playlist?list=PLQZfZKhc0kiDgNnwBlFhvsYZT_-qtXYS5)
- `lecture videos` [MT855F20: Low-dimensional topology and the Casson invariant](https://sites.google.com/bc.edu/john-baldwin/teaching/mt855f20?authuser=0)

### dynamics and rigidity


- `book` [Amie Wilkinson - Geometry, Dynamics, and Rigidity](https://www.math.uchicago.edu/~wilkinso/papers/GDRFinalDraft6-4-2026.pdf)
- `list` [Kathryn Mann - Student reading](https://e.math.cornell.edu/people/mann/studentreading.pdf)

### locally symmetric spaces of higher rank and hyperbolic manifolds in higher dimensions

### symplectic topology

- `list` [Floer homology](https://math.berkeley.edu/~gbeiner/floer_homology.html)
- `workshop`, `talk videos` [Workshop on Hamiltonian Geometry and Quantization | Fields Institute for Research in Mathematical Sciences](https://www.fields.utoronto.ca/activities/24-25/Hamiltonian-Geometry)
- `lecture videos` [Fukaya categories and mirror symmetry](https://www.youtube.com/playlist?list=PLj6jTBBj-5B8sDB0CHOGUBkKUjYRa95E-)


### algebraic curves and Riemann surfaces, moduli and Teichmuller spaces

![[inculcation-riemann-surfaces#3]]

### VI


- https://mathtube.org/
- https://www.carmin.tv/en/
- https://www.math.stonybrook.edu/videos/
- https://www.birs.ca/videos/
- https://www.youtube.com/@nctsmathdivision9695/playlists
- https://www.youtube.com/@workshopingeometrictopolog8344/playlists
- https://www.youtube.com/@institutfourier/playlists
- https://www.youtube.com/@mathematicsathse1021/playlists
- https://www.youtube.com/@nationalcentreformathemati3331/playlists
- https://www.youtube.com/@impabr/playlists
- https://www.youtube.com/@FieldsInstitute/playlists
- https://www.mpim-bonn.mpg.de/search/node/video