---
created: 2023-03-28T15:58:54
modified: 2023-11-19T14:33:07
tags:
  - Inculcation
title: "Inculcation: Linear algebra"
aliases:
  - "Inculcation: Linear algebra"
---

> parent:: [[inculcation]]




## starting out

> [!tip] Philosophy of linear algebra I - finding happiness in small things (mathematical minimalism)
> - We see with just the "little" definition of a vector space, we can have things like  **writing any vector as a unique linear combination of finitely many vectors from a smaller subset of the entire space**.
> - This much of *structure* is enough to ask a lot of questions and a solve a whole lot of problems!
> - If you want more things, we can have more things! (oriented vector space, inner product spaces, normed vector spaces, etc.).

> [!note] pre-first semester course essense
> Start with 3b1b:
> 
> <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=Cq-M0B5yEuDGeziD&amp;list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
> 
> A very good place to start (basic) mathematics like linear algebra is to read chapters from Napkin:
> 
> ![[inculcation-math-pedias#Napkin]]
> 


> [!tip] Philosophy of linear algebra II - giving lore behind objects
> - *origin story of matrices*: they were actually "linear maps" all along!
> 	- As in every matrix gives a linear map between the vector spaces $k^n \to k^m$.
> 	- Now try learning how to write a matrix for a given linear map between aribtrary vector spaces $V \to W$
> 	- Rotations are linear maps! Trace is a linear map! Transposition of matrices is a linear map! Try writing all of them as matrices (if they are not defined as matrices anyways)
> 	- What about derivatives tho? They are linear maps too? Can we write them as a matrix?
> - *origin story of tensors*: they are actually multi-linear maps!
> 	- Maybe wait a while to start with tensors, but keep this idea in the back of your mind: tensors are multi-linear maps in a proper sense.

## a first semester course

> [!note] A first semester course on linear algebra
> - #lectures #book Linear Algebra Done Right - Sheldon Axler
> 	- [Book website](https://linear.axler.net/), [Third ed pdf](http://library.lol/main/FA472BC434699EFE0F9BD5DC4E2E595E)
> 	- [YouTube lectures](https://www.youtube.com/playlist?list=PLGAnmvB9m7zOBVCZBUUmSinFV0wEir2Vw)
> - #lectures [Linear Algebra by Dr. K.C. Sivakumar](https://www.youtube.com/playlist?list=PLbMVogVj5nJQ2vsW_hmyvVfO4GYWaaPp7)
> - Chapters 9-15 from [A Infinitely Large Napkin](https://venhance.github.io/napkin/Napkin.pdf)
> - mostly they cover upto canonical forms, spectral theorem

> [!tip] Philosophy of linear algebra III - what is a vector?
> - a vector is an element of a **vector space**. no more no less. so you can add them and scale them. but they *belong* somewhere. closure of their operations is also just as important as the operations themselves.
> 	- now given a basis, lets say, we have a specific pov (coordinates) on the space
> 	- if we wanna change the basis, the pov (coordinate) changes
> 	- but that's just how we look at things! doesn't really effect the "sacred space"
> 	- this also implies that the transformation of the pov (coordinates) must follow certain rule (must be linear transformations) that **preserve the structure of the space**
> 	- because if we can add vectors, then the **addition of two vector is sacred**, they must not depend on the pov
> - if you want more characteristic to a vector, like length (or angles) between vectors, then you say the vector is an element of a normed vector space (or an inner product space)
> 	- again the change of pov must follow certain rule that **preserve the structure of the space**
> 	- because if we can measure lengths of vectors, then the **lengths are sacred too**, they must not depend on the pov
> - this philosophy is opposite to "a vector(or tensor) is a specified tuple of numbers that follows some given transformation rule" which definite works~

---

Need help proving stuff? Try following the arrows to prove equivalent conditions for injectivity of linear maps on finite dim spaces:

![](https://i.imgur.com/Jf457uG.png)


> [!tip] Philosophy of linear algebra IV - thinking objects as part of a whole/constructing the whole first
> - the set of all linear maps from $V$ to $W$ (written as $\mathsf{Hom}(V,W$ ) *is made into a vector space* (as a subspace of the set of all functions $V \to W$ which is also a vector space)!
> - **anything is possible** (if it is constructable, and most things are)



## after a first semester course

- Don't fall into traps like "geometric algebra", it's crap
- Tensor, symmetric and exterior algebra of a vector space


## a second semester on linear algebra

- In the first semester, you were probably in first year and only did "real" vector spaces, that is vector spaces where scalars are only coming from real numbers $\R$. We can generalize this to any "*field*" $k$ and there are many motivations to do this.
	- $\mathbb{C}$ is algebraically closed 
- The canonical forms of a linear endomorphism (fancy name for linear map $V\to V$)
- Every if you did do linear algebra on general fields in the first semester you might like to understand the intersection: category theory $\cap$ linear algebra
	- Duality is a functor $V\mapsto V^{*}$
	- Double duality is a *natural* functor $V \mapsto V^{**}$

## linear algebra after doing rings and modules

A $k$-vector space $V$ with a endomorphism $T$ (fancy name for linear map $V\to V$) gives a $k[X]$-module structure on $V$, so we can directly use $k[X]$-modules classification theorems to construct the theorems on canonical forms.

I am still looking on how to understand *two* linear endomorphisms giving a $k[X,Y]$ structure on $V$. At the least, I can re-interpret the theorem that says "we always have a common eigenvector of two commuting linear maps" as the following

> Let's say we have a $k[X,Y]$-module $V$ defined by two linear endomorphisms $V\to V$. Then we always have at least one *simple* non-trivial $k[X,Y]$-submodule of $V$. 

## representation theory is just spicy linear algebra

A group homomorphism from a (say, finite for now) group $G$ to the general linear group on a vector space $V$  $$ G \to {GL}(V) $$ is called a *representation of the group $G$*. One can classify and study such homomorphisms (upto an equivalence ofcourse) and it's called representation theory (of finite groups). This "helps" in doing linear algebra when we have a invertible linear map $V\to V$, in my opinion.

