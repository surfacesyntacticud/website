---
layout: default
title: SUD Guidelines
src: guidelines/u/_index.md
---

SUD is a Surface-syntax Universal Dependencies scheme. SUD follows the Surface syntax criteria (favoring functional heads) and can be automatically converted to the UD scheme.

This page describes the universal principles used in SUD. Some pages are available for specific usage of SUD in [French](../fr) and [Naija](../pcm).

## General Principles
SUD differs from UD in several [general principles](./general_principles).
The key differences between SUD and UD as well as a table summarizing the most frequent correspondences may be consulted [here](../../conversions).

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

However, we must stress that there are some differences between the usage of some of these relations in UD and SUD. Namely, the relations `appos`, `conj` and `reparandum` are only used when analysing written texts. When analysing oral texts, we use instead the relations `conj:appos`, `conj:coord` and `conj:dicto` respectively. The same goes for `parataxis` which is used differently in SUD when analysing oral textes. We will explain the details in the section below.

## Relations specific to SUD used when analysing oral texts
 * [paradigmatical lists](oral_language/conj)
   * [`conj:dicto`](oral_language/conj_dicto)
   * [`conj:coord`](oral_language/conj_coord)
   * [`conj:appos`](oral_language/conj_appos)
 * [macrosyntactic relations](oral_language/macrosyntax)
   * [`parataxis:parenth`](oral_language/parataxis_parenth)
   * [`parataxis:insert`](oral_language/parataxis_insert)
   * [`parataxis:obj`](oral_language/parataxis_obj)
   * [`dislocated`](oral_language/dislocated)
   * [`vocative`](oral_language/vocative)
   * [`discourse`](oral_language/discourse)

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
* [Idioms and titles](./extpos/idioms_titles)
* [Light verb constructions](./particular_phenomena/lvc)
* [Comparative, superlative and consecutive constructions](./particular_phenomena/comparative)
* [Compounds and flats](./particular_phenomena/compounds)

## Usages of the ExtPos feature
In SUD, the External POS (`ExtPos`) feature is used to designate multi-word units which together behave like a certain part of speech, even though none of their constituents carry that part of speech.
It can also be used for cases where the internal POS of a token is different its usage.
A detailed description of the `ExtPos` feature and its usages can be found [here](./extpos/) and on the [Idioms and titles](./extpos/idioms_titles) page.

## Analyzing phenomena specific to spoken language

SUD is also used to annotate oral corpora. Spoken language is distinct from written texts in several ways, which can sometimes make it more difficult to analyze.
Below, we propose analyses of several such phenomena.

* [Disfluencies](./oral_language/disfulencies)
