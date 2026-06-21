---
created: 2024-09-16T15:47:44
modified: 2024-09-16T15:47:44
tags: []
title: 'Sorting out minus signs in differential geometry'
aliases: '' 
---

## in the Lie algebra of vector fields on a smooth manifold


> [!bug]
> The usual definition of commutator $[X,Y]:=XY-YX$ as derivations of $\mathcal{C}^{\infty}(M)$ and infinitesimal generators of Lie group actions $$ V \mapsto \dvf{}{t} \bigg|_{t=0}  \exp(tV)(-)  $$ produces an **anti-homomorphism** $\goth{g} \to \mathrm{Vec}(M)$. This is expected because $\mathrm{LDiff}(M)$ acts on $\mathcal{C}^{\infty}(M)$ on the right.
> - settle with the $[X,Y]=XY-YX$ brackets
> 	- [?] does it agree with brackets in $\mor{End}\cat{Vec}$?
> 	- settle with the anti-homomorphism
> 	- use $V \mapsto \dvf{}{t} \bigg|_{t=0}  \exp(-tV)(-)$ as definition of infinitesimal generators
> 		- [!] this seems to produce $-X$ as the infinitesimal generator of flow of $X$
> - use the brackets $-[X,Y]$, possibly defined using flows/adjoint action



## in the Hamiltonian vector field of a smooth function on a symplectic manifold


Hamiltonian vector field of $H \in \mathcal{C}^{\infty}(M)$ is
$$ -\omega^{-1}\dd{H} $$
where $\omega$ is the symplectic form.

Why the minus sign?