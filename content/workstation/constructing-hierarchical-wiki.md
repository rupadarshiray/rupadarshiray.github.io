---
id: 1pMVxQT9bCpITrQhazStP
title: 'Constructing a hierarchical wiki'
desc: 'Building an ecosystem of knowledge with the philosophy, on top of Dendron'
created: 2021-11-06T01:44:39
modified: 2021-12-18T01:50:22
tags: [Workstation, Wiki]
alias: []
enableToc: true
---

- previous:: [[hierarchical-longterm-wiki]]

> Building an ecosystem of knowledge with the philosophy from [[hierarchical-longterm-wiki|Wiki]]

Note: Everything mentioned is only a presently chosen custom, and is possible to change in the future (and has been changed times again), as the wiki develops.

## The Subjects

[[hierarchical-longterm-wiki#a mix of the above two is nice|As it was clarified]], its best to create the wiki in its primary stage with a cascading style definition of subjects.

Let each subject reside in their own folder with a shortened name.
```js
- 00 Wiki
	- cs/          \\ Computer
	- chm/         \\ Chemistry
	- ea/          \\ Earth
	- ast/         \\ Astronomy
	- mat/         \\ Mathematics
	- phy/         \\ Physics
	- bio/         \\ Biology
```

With Dendron each such subject is given a "root" note.

![|300](https://i.imgur.com/DuDzWeN.png)

```js
- 00 Wiki
	- cs/
		- cs-root.md
	- chm/
		- chm-root.md
	- ea/
		- ea-root.md
	- ast/
		- ast-root.md
	- mat/
		- mat-root.md
	- phy/
		- phy-root.md
	- bio/
		- bio-root.md
```

### Physics

#### Frameworks

> Frameworks characterise the primary axioms for kinematics and dynamics of the universe, particles and fields.

The motivation for a proper hierarchial base for frameworks in Theoretical Physics come in these following steps:
1. Starting at Newtonian _and by extension all of_ Classical Mechanics, 
2. We must deviate from the origin in three different ways:
    - a Gravitational interaction related with the constant $G$
    - a relativistic understanding of the universe itself, content in the constant $c^{-1}$
    - a _amplitudistic_ dynamics of particles and fields that result in Quantum theories, related to the constant $\hbar$
3. All the 3 deviations follow the correspondence principle when the constants are "_turned on_" from `0` (at origin) to `1`
4. There are following combinations of the "frameworks" from these deviations (the order of the constants follow their historical developments: $G \ c^{-1} \hbar$ ):
    - 000 Mechanics - (origin) Classical Mechanics (non-relativistic, non-quantum without gravity)
    - 100 Mechanics - Classical Mechanics with Newtonian Gravitation, Celestial Mechanics
    - 010 Mechanics - "Special Relativistic" Mechanics
    - 001 Mechanics - Non-Relativistic Mechanics
    - 110 Mechanics - "General Relativity" and Gravitation
    - 011 Mechanics - Quantum Field Theory 
    - 111 Mechanics - ?Quantum Gravity?
5. The dynamics in each of these characteristicly depend on the framework they are based on.

#### Theories

> A Theory is a implementation of the mechanics in a given framework.

A Theory must **always** be settled with a framework.

- Electrodynamics - the theory of Electromagnatic fields and charges
  - `010E` - _Classical_ Electrodynamics
  - `110E` - _Classical_ Electrodynamics in curved SpaceTime 
  - `010E` - Quantum Electrodynamics and more!
- `0½½ME` Theory of Matter, Heat and Fields
  - Heat: Transfer and Thermostatics
  - Continuum Mechanics
      - Solid Mechanics
      - Fluid Mechanics
      - Electromagnatic Fluid Mechanics
- `0½½E` Electromagnetics
      - Electromagnetic Circuitry, Electronics
      - Optics

#### Statistical Mechanics
> It transends any framework!

> Statistical mechanics is the art of turning the microscopic laws of physics into a description of Nature on a macroscopic scale.

#### final state
```yml
phy/root

	- 000M
	- 100M
	- 010M
	- 001M
	- 110M
	- 011M
	- 111M
	
	- statM
	
	- 010E
	- 0½½E
		- 0½½E.circuitry
	- 0½½ME
		- 0½½ME.continuum
		- 0½½ME.fluid
		- 0½½ME.solid
```

More fields of study and further levels in the hierarchies will be added as the wiki develops.

The Physics part of the wiki currently looks like this:

![](https://i.imgur.com/d9lnW7N.png)


### Chemistry

#### Organic Chemistry
Let there be three hierarchies:
- Organic Formalism
- Organic Compounds
- Organic Reactions

"Formalism" shall contain the foundational and theoretical formalism aspects of the subject, and "Compounds" and "Reactions" would contain those things precisely following some category divisions.

This may be considered a first draft:

```yml
chm/root

	- orgform # organic formalism
		- characterization
		- classification
		- molecular structure
		- electronic effects
		- isomerism
		- reaction intermediates
		- reaction mechanism

	- ogc # organic compounds
	    - ogc.hydrocarbon
    	- ogc.oxygen
    	- ogc.nitrogen
    	- ogc.sulphur
    	- ogc.phosphorous
    	- ogc.halogen
    	- ogc.metallic
    	- ogc.poly
    	- ogc.dye

	- ogr # organic reactions
	    - ogr.rxn # general rxn: between AX and BY; "rxn.diazo+alc"
	    - ogr.rplc # replacement rxn: AX by Y; rplc.diazo-H
	    - ogr.hydrolysis
	    - ogr.hydration
	    - ogr.dehydration
	    - ogr.red
	    - ogr.oxd
	    - ogr.conden
	    - ogr.elim
	    - ogr.subs
	    - ogr.rearr
	    - ogr.synt
	    - ogr.test
	    - ogr.reagent # organic reagents
```
### Mathematics

I have constructed a second iteration of the Mathematics wiki structure over at [[constructing-a-mathematics-wiki|Constructing a Mathematics Wiki]].

<!---
 Biology
> yet to be developed further

```yml
bio/root

	- king # 5 Kingdom Biological Classification
		- king.mo  
		- king.pr  
		- king.fu  
		- king.pl 
		- king.an
```
--->

### Astronomy

This may be considered a first draft:
```yml
ast/root

	- clst # evolution and observation
	  - clst.planetary # astronomy and geology
	    - clst.planetary.earth
	  - clst.stellar
	  - clst.solar
	  - clst.comet
	  - clst.solar sys
	  - clst.galactic
	  - clst.extragalactic
	- cosm # cosmology
```

### Earth Sciences
> yet to be developed

### Computer Sciences
> yet to be developed



# Resources
- My Dendron Schemas for the subjects will be added here: [riddyrayes/Dendron-Schemas-for-Systems](https://github.com/riddyrayes/Dendron-Schemas-for-Systems)