---
created: 2026-09-16T15:36:06
modified: 2026-09-16T15:36:06
tags: []
title: Intuitively understanding localizable measure spaces
---

[[Manan-Jain|Manan]] told me about the following.

Let $(X,\Sigma, \mu)$ be a $[0, \infty]$-measure space. Consider the natural map $$\begin{aligned}  L^{\infty}(X,\mu)& \to L^{1}(X,\mu)^{\bigstar}  \\ f &\mapsto \left( g \mapsto \int_{X} fg \dd{\mu}  \right)\end{aligned}$$
Then if $\mu$ is a $\sigma$-finite measure then this is an isometric isomorphism. There is a generalization that says the following.

- The map is an isometric **injection** $\iff$ $\mu$ is **semifinite**, that is, every measurable subset of $X$ (with possibly infinite $\mu$-measure) has a futher finite $\mu$-measure subset.
	- Here, if $\mu$ is not semifinite, then there is a measurable subset $A$ with $\mu(A)=\infty$ whose measurable subsets are all $\mu$-measure zero. Then for $L^{\infty}$ functions supported on $A$, such as $\chi_{A}$, we have $$ \forall g\in L^{1} , \int_{X} g \chi_{A} \dd{\mu} = 0  $$
	- So to these $L^{\infty}$ functions are "invisible" to $L^{1}$ functions. Semifiniteness is necessary and sufficient to break that invisibility.
- The map is an isometric **isomorphism** $\iff$ $\mu$ is **localizable**, that is, semifinite and has a "gluing" property: for any family of measurable functions $\left\{ f_{i}: E_{i} \to \C \right\}$. such that $$ f_{i} \equiv f_{j} \ \text{ae on } E_{i} \cap E_{j} $$ then there is a $f:X\to \C$ such that for each $i$ $$ f\equiv f_{i} \text{ ae on } E_{i} $$^[https://math.stackexchange.com/a/405587/1290493]



<!---

	- Consider a semifinite and localizable measure space. For $E \subseteq X$ $$ L^{1}(X,\mu)^{{\bigstar}} \xrightarrow{} L^{1}(E,\mu)^{\bigstar} \isom L^{\infty} (E,\mu)  $$
		- So for each $\Phi\in L^{\infty}$, we have a $\Phi_{E}\in L^{\infty}(E,\mu)$ such that $$ \Phi(-) \equiv \int_{E} - \Phi_{E} \dd{\mu}  $$
		- These local representatives are compatible: $$ \int_{E\cap F} (-) (\Phi_{E}-\Phi_{F}) \dd{\mu} = 0  $$ which implies $\Phi_{E} \equiv \Phi_{E}$ almost everywhere on $E\cap F$.
		- 

[2/3, 8:19 PM] Manan Jain: A measure space is localisable iff L^\infty is a von Neumann algebra
[2/3, 8:21 PM] Rupadarshi Ray: wooooooooooooo
[2/3, 8:22 PM] Rupadarshi Ray: which is iff L ᪲= L¹* ?
[2/3, 8:22 PM] Rupadarshi Ray: presentation ploz
[2/3, 8:25 PM] Manan Jain: Yes
[2/3, 8:25 PM] Manan Jain: This is the characterisation I told you about earlier


Someone just described the "moral" reason why all this works, and it's actually pretty cool. The weaker notion is semifiniteness, which says every positive measure set has a positive, _finite_ measure subset. Semifiniteness gives you an isometric embedding of $L^{∞} \hookrightarrow L^1(X) ^{\bigstar}$. The reason why you would even have a failure of injectivity when the space is not semifinite is as follows: you would have some measurable set of infinite measure with no measurable subsets of finite nonzero measure
You can still define different L^∞ functions supported on this pathological set just fine
But these functions will act on L^1 trivially: no integrable function can have its support contained in such a set
So to these L^∞ functions, L^1 is kind of invisible
Semifiniteness is necessary and sufficient to break that invisibility

For the localisability bit, I told you that one of the characterisations is in terms of gluing arbitrary collections of measurable functions that agree a.e. on overlaps
The result is easy to see for sets of finite measures (I think?), so semifiniteness+the ability to glue also allows you to make this map surjective
Very vague and much worse than what I was explained, but this was supposed to be a moral lesson anyway 🙏