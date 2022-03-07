---
layout: default
title: Conversion from UD to SUD
src: conversions/ud_to_sud.md
---

This page describes the process used in the conversion from UD to SUD.
It also explains how this can be adapted to languages specificities.

## The main sequence

 * `Onf (eud_to_ud)`: Remove all enhanced annotation; the conversion supposes that the input is in basic UD format. Note that it can be safely applied to basic UD, the annotations are left unchanged.
 * `Onf (idioms)`: Add the features encoding of idioms in SUD; namely, features `ExtPos`, `PhraseType`, `InTitle` and `InIdiom` (see [Idioms and titles](../../guidelines/u/extpos/idioms_titles)). Note that relations are not changed here.
 * `specific_expr_init`: Add an explicit node for each `ExtPos`. TODO: give detail and an example.
 
 * `Onf (sub_relations)`: Transform UD relations with subtypes into the SUD equivalent.
 * `Onf (rel_extensions)`: Transform remaining UD subtypes (not handled in `sub_relations`) into `deep` SUD feature. For instance, the Polish `cop:locat` is transformed into `cop@locat`.
 * `Onf (relations)`: Transform main UD relation into the SUD equivalent (except `case`, `aux`, `mark` and `cop`, see next step).
 * `reverse_relations.main`: Reverse relations `case`, `aux`, `mark` and `cop`. See below for detail about reversing relations.
 * Move the dependents of a conjunction from the left conjunct to the right conjunct. Dependencies `conj`, `discourse`, `parataxis` and `punct` are not moved. 
    * `Onf (shared_left_conj-dep)`
    * `Onf (unshared_left_conj-dep)`
    * `Onf (minimize_right_conj-dep)`
 * `Onf (add_conj_emb)`: Mark embedded `conj` relations with the extension `emb`.
 * `Onf (chained_relations)`: Dependencies of type `conj`,  and `flat:*` grouped into a bouquet are reorganised into a chain.
 * `specific_expr_close`: Remove specific nodes and edges introduced by the dual package `specific_expr_init`.
 * `Onf (unk_rel)`: Rename all non-SUD relations to `unk` (backoff package).
  
Defining rules for reversing relations is tricky mainly for two reasons:
  * When more than one relations to be reversed have the same head, the order of the reverse operations produced different output. Some mechanism to describe the wanted order is necessary.
  * When reversing a relation from `N` to `M` into a relation from `M` to `N`, we have to decide for each dependent of `N` if it should be lifted up to `M` or if it should stay on `N`.

## Choosing the order when reversing relations

To constraint the order, a numeric level is given to each edge to be reversed and then:
  1. edge with the smallest level have higher priority
  2. if two edges have the same level and are on the same side of the head, the closest one has higher priority
  3. if two edges have the same level and are on both sides of the head, the one after the head has higher priority.

By default, the 4 relations `case`, `cop`, `aux` and `mark` (and their subtypes) are given the level 10.

We give below examples of conversions with multiple reversing of relations.
In Japanese or in German, the default rules are applied.
The order can be changed by adding different levels to specific relations before calling the strategy `reverse_relations.main` (see examples below for French and Wolof).

### Japanese
In Japanese all UD relations `case`, `cop`, `aux` and `mark` are left-headed. The constraint 2 applies.

| ![ud_logo](/images/ud.svg) | ![sud_logo](/images/sud.svg) |
|:---------:|:---------:|
| ![japanese_ud_ex](/conversions/ud_to_sud/ja/3_rel.svg) | ![japanese_ud_ex](/conversions/ud_to_sud/ja/3_rel__sud_u.svg) |

### German
In German, there are many cases with edges on both sides. Contraint 3 applies here:

| ![ud_logo](/images/ud.svg) | ![sud_logo](/images/sud.svg) |
|:---------:|:---------:|
| ![german_ud_ex](/conversions/ud_to_sud/de/bilat.svg) | ![german_sud_ex](/conversions/ud_to_sud/de/bilat__sud_u.svg) |

### French

In French, levels are set to:
 * `case` or `case:*` &rarr; 10
 * `cop` or `cop:*` &rarr; 20
 * `aux:caus` or `aux:pass` &rarr; 30
 * `aux` or `aux:*` (≠ `aux:caus` or `aux:pass`) &rarr; 40
 * `mark` or `mark:*` &rarr; 50

From the UD annotation:

![french_example_ud](/conversions/ud_to_sud/fr/post.svg)

The universal conversion produces:

![french_example_ud_default](/conversions/ud_to_sud/fr/post__sud_u.svg)

And the conversion with the French specific levels (see [GitHub](https://github.com/surfacesyntacticud/tools/blob/master/converter/grs/fr_UD_to_SUD.grs)):

![french_example_ud_specif](/conversions/ud_to_sud/fr/post__sud_fr.svg)


### Wolof

In Wolof, the lemma *na* must always be the head of the whole structure, so it must be the last relation to be reversed. This can be specified with a rule: 

```grew
rule na {
  pattern { e: V -[aux]-> A; A[lemma="na"] }
  commands { e.level = 100 }
}
```

From the UD annotation:

![wolof_example_ud](/conversions/ud_to_sud/wo/na.svg)

The universal conversion produces:

![wolof_example_ud_default](/conversions/ud_to_sud/wo/na__sud_u.svg)

And the conversion with the new `na` rule produces (see [GitHub](https://github.com/surfacesyntacticud/tools/blob/master/converter/grs/wo_UD_to_SUD.grs)):

![wolof_example_ud_specif](/conversions/ud_to_sud/wo/na__sud_wo.svg)

More examples of *na* as the head of a double `aux` construction: [Grew-match](http://universal.grew.fr/?corpus=SUD_Wolof-WTB@conv&custom=6226075687afb).


## Lifting dependencies

TODO
