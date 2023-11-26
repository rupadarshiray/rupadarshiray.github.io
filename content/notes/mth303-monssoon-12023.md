---
created: 2023-11-26T16:46:55
modified: 2023-11-26T16:47:32
tags: []
title: 'MTH303 of Monssoon 12023'
aliases: '' 
---


References:

- Primary reference will be classroom.
- Most of the material is drawn from following textbooks (but may not appear in the same order).
	1. Michael L. O’Leary: A First Course in Mathematical Logic and Set Theory
	2. Herbert B. Enderton: A mathematical introduction to logic.
- Following textbooks are also going to be useful.
    1. P. T. Johnstone: Notes on Logic and Set Theory.
    2. Yu. I. Manin: A Course in Mathematical Logic for Mathematicians.
- A beautiful book (graphic novel!) that gives you a sense of the intellectual turmoil in the late 19th century when logical foudations as we know today were being laid is the following:
    1. Logicomix: An Epic Search for Truth, (writers: Apostolos Doxiadis, Christos Papadimitriou and Artist: Alecos Papadatos, Annie Di Donna). 


# *Logic*

## Russell's paradox

Trying to make a definition

> [!example]
> 
> > Definition
> > A **proper set** is not a member of itself. $$A \notin A.$$
> 
> Let $$B= \{ A : A \notin A \}$$
> now $$ B \in B ??$$
> 
> Russel's paradox.




## Hilber's quest

Works of Hilbert.

---

### Prove true/not true

> [!example] Take another set $$C=\{ A : A \in A \}$$ Does $$C \in C?$$
> - Proof by contradiction
> 	- suppose $C \notin C$, then by definition of $C$ $\implies C \notin C$


---

- logical systems.
	- propositional logic (AND, OR, NOT)
	- first order logic (FORALL, etc)
- logical principles.
- symantic system
- symtactic(?)
- meta language = English

# Logical system

> [!definition] A **logical system** consists of
>  - "Language"
> 	- Alphabet 
> 		- $A, B, C, (, ), \forall$, $\exists$, $\lor, \land$...
> 	- Grammar *well formed formulas*
> - "Truth valuation" *semantic*
> - "Proof methods" *syntactic*
> - Axioms
