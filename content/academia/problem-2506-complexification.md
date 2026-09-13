---
created: 2025-06-15T08:17:37
modified: 2026-09-13T18:58:36
tags: [problem]
title: Complexifications in the analytic and algebraic categories
---

[[Sanskar]], when discussing with me about the definiton of complexification of $\R$-Lie groups, came to the following conclusion.

The complexification of $\R$ as a Lie group is $\C$. And complexification of $S^{1}$ is $\C^{\times}$.

Now consider the $\R$-Lie group $$ \C^{\times} \isom S^{1} \times \R_{>0} \isom S^{1} \times\R $$
Its complexification must be $$ \C^{\times} \times \C $$

However, consider the $\R$-algebraic group given by $$ \C^{\times} $$
We can write this as $$ G:= Z(z(x^{2}+y^{2})-1) $$
with the identification $$\begin{aligned} \C^{\times} &\to  G(\R)   \\ x+iy  &\mapsto \left( x,y, \frac{1}{x^{2}+y^{2}} \right)\end{aligned}$$
with the group law pushed forward.

Now, by construction $$ G(\R) \isom \C^{\times} $$
However, $$ G(\C) \isom\C^{\times} \times\C^{\times} $$

Therefore, algebraic complexification and analytic complexification do not agree with each other.