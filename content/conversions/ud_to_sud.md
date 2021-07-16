# Conversion from UD to SUD

This page describes the process used in the conversion from UD to SUD.
It also explains how this can be adapted to languages specificities.

## The main sequence

 * `Onf (eud_to_ud)`: Remove all enhanced annotation; the conversion supposes that the input is in basic UD format. Note that it can be safely applied to basic UD, the annotations are left unchanged.
 * `Onf (idioms)`: Add the features encoding of idioms in SUD; namely, features `ExtPos`, `PhraseType`, `InTitle` and `InIdiom` ( see [Idioms and titles](../../guidelines/u/extpos/idioms_titles)). Note that relations are not changed here.
 * `specific_expr_init`: Add an explicit node for each `ExtPos`. TODO: give detail and an example.
 
 * `Onf (sub_relations)`: Transform UD relations with subtypes into the SUD equivalent.
 * `Onf (rel_extensions)`: Transform remaining UD subtypes (not handled in `sub_relations`) into `deep` SUD feature. For instance, the Polish `cop:locat` is transformed into `cop@locat`.
 * `Onf (relations)`: Transform main UD relation into the SUD equivalent (except `case`, `aux`, `mark` and `cop`, see next step).
 * `reverse_relations.main`: Reverse relations `case`, `aux`, `mark` and `cop`. See below for detail about reversing relations.
 * `Onf (minimize_conj_dep)`: Move the dependents of a conjunction from the left conjunct to the right conjunct. Dependencies `conj`, `discourse`, `parataxis` and `punct` are not moved.
 * `Onf (add_conj_emb)`: Mark embedded `conj` relations with the extension `emb`.
 * `Onf (chained_relations)`: Dependencies of type `conj`,  and `flat:*` grouped into a bouquet are reorganized into a chain.
 * `specific_expr_close`: Remove specific nodes and edges introduced by the dual package `specific_expr_init`.
 * `Onf (unk_rel)`: Rename all non-SUD relations to `unk` (backoff package).
  
## Reversing relations

Defining rules for reversing relations is tricky mainly for two reasons:
  * When more than one relations to be reversed have the same head, the order of the reverse operation produced different output. Some mechanism to described the wanted order is necessary.
  * When reversing a relation from `N` to `M` into a relation from `M` to `N`, we have to decide for each dependent of `N` if it should be lifted up to `M` or if it should stay on `M`.

### Choosing the order

To constraint the order, a numeric level is given to each edge to be reversed and then:
 * edge with the smallest level have higher priority
 * if two edges have the same level and are on the same side of the head, the closest one have higher priority
 * if two edges have the same level and are on both sides of the head, the one before the head has higher priority.

The default levels are:
 * `case` or `case:*` &rarr; 10
 * `cop` or `cop:*` &rarr; 20
 * `aux:caus` or `aux:pass` &rarr; 30
 * `aux` or `aux:*` (≠ `aux:caus` or `aux:pass`) &rarr; 40
 * `mark` or `mark:*` &rarr; 50

The order can be changed by adding different levels to specific relation before calling the package `specific_expr_init` (see examples below for Wolof or German).
 
### Lifting dependencies

TODO

## Adapt to a specific language

### Wolof

In Wolof, the lemma *na* must always be the head of the whole structure, so it must be the last relation to be reversed. This can be specified with a rule:
 
```grew
rule na {
  pattern { e: V -[aux]-> A; A[lemma="na"] }
  commands { e.level = 100 }
}
```

From the UD annotation:

![sequoia](/conversions/ud_to_sud/wo_na.svg)

The universal conversion produces:

![sequoia](/conversions/ud_to_sud/wo_na__sud_u.svg)

And the conversion with the new `na` rule produces (see [GitHub](https://github.com/surfacesyntacticud/tools/blob/master/converter/grs/wo_UD_to_SUD.grs)):



![sequoia](/conversions/ud_to_sud/wo_na__sud_wo.svg)

### German

TODO