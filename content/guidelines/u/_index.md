---
layout: default
title: SUD Guidelines
---

SUD is a Surface-syntax Universal Dependencies scheme. SUD follows the Surface syntax criteria (favoring functional heads) and can be automatically converted to the UD scheme.

This page describes the universal principles used in SUD. Some pages are available for specific usage of SUD in [French](../french) and [Naija](../pcm).

## General Principles
SUD differs from UD in several [general principles](./general_principles).
The key differences between SUD and UD as well as a table summarizing the most frequent correspondences may be consulted [here](./correspondences).

The other layers of annotations follow the UD guidelines. Please refer to UD for these aspects:

  * [Tokenization and word segmentation](https://universaldependencies.org/u/overview/tokenization.html)
  * [Morphology](https://universaldependencies.org/u/overview/morphology.html)
  * [POS tags](https://universaldependencies.org/u/pos) ([single document](https://universaldependencies.org/u/pos/all.html))
  * [Features](https://universaldependencies.org/u/feat) ([single document](https://universaldependencies.org/u/feat/all.html))
    * [Layered features](https://universaldependencies.org/u/overview/feat-layers.html)
    * [Language-specific features](https://universaldependencies.org/ext-feat-index.html)

## Specific SUD relations

SUD has 4 specific syntactic relations and a few extended relations:

 * [`subj`](relations/subj)
 * [`udep`](relations/udep)
   * [`comp`](relations/comp)
     * [`comp:aux`](relations/comp_aux)
     * [`comp:cleft`](relations/comp_cleft)
     * [`comp:obj`](relations/comp_obj)
     * [`comp:obl`](relations/comp_obl)
     * [`comp:pred`](relations/comp_pred)
   * [`mod`](relations/mod)

SUD shares a number of syntactic relations with UD, the list of which is given below (links to UD related page are given):
  [`vocative`](https://universaldependencies.org/u/dep/vocative.html),
  [`compound`](https://universaldependencies.org/u/dep/compound.html),
  [`dislocated`](https://universaldependencies.org/u/dep/dislocated.html),
  [`discourse`](https://universaldependencies.org/u/dep/discourse.html),
  [`appos`](https://universaldependencies.org/u/dep/appos.html),
  [`det`](https://universaldependencies.org/u/dep/det.html),
  [`clf`](https://universaldependencies.org/u/dep/clf.html),
  [`conj`](https://universaldependencies.org/u/dep/conj.html),
  [`cc`](https://universaldependencies.org/u/dep/cc.html),
  [`flat`](https://universaldependencies.org/u/dep/flat.html),
  [`parataxis`](https://universaldependencies.org/u/dep/parataxis.html),
  [`orphan`](https://universaldependencies.org/u/dep/orphan.html),
  [`goeswith`](https://universaldependencies.org/u/dep/goeswith.html),
  [`reparandum`](https://universaldependencies.org/u/dep/reparandum.html),
  [`punct`](https://universaldependencies.org/u/dep/punct.html).

## SUD deep features
In SUD, dependency relations are designed to describe syntactic surface relations.
Information related to deep syntax or semantics is given on dependencies with *deep features* which are extensions to dependency label introduced by the `@` symbol.

The main deep features are:
[`@agent`](deep_features/agent),
[`@caus`](deep_features/caus),
[`@expl`](deep_features/expletive),
[`@lvc`](deep_features/lvc),
[`@pass`](deep_features/pass),
[`@relcl`](deep_features/relcl),
[`@tense`](deep_features/tense),
[`@x`](deep_features/x).

## Particular linguistic phenomena
For each linguistic phenomenon below, there is an explanation of how SUD takes it into account.

* [Coordination](./particular_phenomena/coord)
* [Idioms and titles](./particular_phenomena/idioms_titles)
* [Light verb constructions](./particular_phenomena/lvc)
* [Comparative, superlative and consecutive constructions](./particular_phenomena/comparative)
* [Compounds and flats](./particular_phenomena/compounds)
