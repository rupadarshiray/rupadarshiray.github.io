---
created: 2023-03-28T15:58:54
modified: 2023-11-19T14:33:07
tags: [Inculcation]
title: 'Inculcation: Linear algebra'
aliases:
    - 
---

> parent:: [[notes/inculcation]]

> [!tip] Philosophy of linear algebra I - finding happiness in small things
> - we see with just the little definition of a vector space, we can have things like  **writing any vector as a unique linear combination of a smaller set**
> - if you want more things, we can have more things! (oriented vector space, inner product spaces, normed vector spaces, etc.)

- #### a pre-semester essense
	- [Essence of linear algebra by 3Blue1Brown - YouTube](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)

> [!tip] Philosophy of linear algebra II - giving lore being objects
> - origin story of matrices
> - origin story of tensors

- #### a first semester course
	- #lectures [Linear Algebra by Dr. K.C. Sivakumar](https://www.youtube.com/playlist?list=PLbMVogVj5nJQ2vsW_hmyvVfO4GYWaaPp7)
	- #lectures #book Linear Algebra Done Right - Sheldon Axler
		- [Book website](https://linear.axler.net/), [Third ed pdf](http://library.lol/main/FA472BC434699EFE0F9BD5DC4E2E595E)
		- [YouTube lectures](https://www.youtube.com/playlist?list=PLGAnmvB9m7zOBVCZBUUmSinFV0wEir2Vw)
	- Chapters 9-15 from [A Infinitely Large Napkin](https://venhance.github.io/napkin/Napkin.pdf)
	- majorly they cover upto spectral theorem

> [!tip] Philosophy of linear algebra III - what is a vector?
> - a vector is an element of a **vector space**. no more no less. so you can add them and scale them. but they *belong* somewhere. closure of their operations is also just as important as the operations themselves.
> 	- now given a basis, lets say, we have a specific pov (coordinates) on the space
> 	- if we wanna change the basis, the pov (coordinate) changes
> 	- but that's just how we look at things! doesn't really effect the "sacred space"
> 	- this also implies that the transformation of the pov (coordinates) must follow certain rule (must be linear transformations) that **preserve the structure of the space**
> 		- because if we can add vectors, then the **addition of two vector is sacred**, they must not depend on the pov
> - if you want more characteristic to a vector, like length (or angles) between vectors, then you say the vector is an element of a normed vector space (or an inner product space)
> 	- again the change of pov must follow certain rule that **preserve the structure of the space**
> 		- because if we can measure lengths of vectors, then the **lengths are sacred too**, they must not depend on the pov
> - this philosophy is opposite to "a vector(or tensor) is a specified tuple of numbers that follows some given transformation rule" which definite works~

Need help proving stuff? Try following the arrows:

![](https://i.imgur.com/Jf457uG.png)


> [!tip] Philosophy of linear algebra IV - thinking objects as part of a whole/constructing the whole first
> - the set of all linear maps from $V$ to $W$ (written as $\mathsf{Hom}(V,W$ ) *is made into a vector space* (as a subspace of the set of all functions between them, which is also a vector space)!
> - **anything is possible** (if it is constructable, and most things are)

- #### after a first semester course
	- [Nick on Twitter: "Stop confusing geometric algebra with useful mathematics" / Twitter](https://twitter.com/anisomorphism/status/1630250818388500480)
	- Tensor, symmetric and exterior algebra of a vector space
