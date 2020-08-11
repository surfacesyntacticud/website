## General principles
The main differences with respect to UD are the following:

 * The definition of relations is based on the **syntactic position** and not on semantic relations or the category of the dependents. In other words, two units that commute and exclude each other occupy the same position and must have the same function.

 * **Functional heads** (instead of lexical heads): The head of a unit is the distributional head, that is, the element that control the distribution of the unit. This points out the functional head in most cases. For instance, the adposition *to* is the head of *to Mary* because *Mary* and *to Mary* do not have the same distribution (at all).

 * In some cases, this criterion does not give a clear situation because two words have head features. In this case, a second gradual criterion comes into play where we prefer to give the status of dependent to the one that changes less the distribution of the unit. According to this principle, a coordinative conjunction such as *and* does not govern the conjunct following it, because *and Mary*, *and red*, or *and is sleeping* occupy completely different positions. In the same way, the determiner is analyzed as a dependent of the noun because nouns partly control the distribution of a combination determiner-noun (*this morning* can work as a modifier of a verb contrary to *this boy*).

 * SUD relations are organized in a **taxonomic hierarchy**: A relation that is the daughter of another one inherits its syntactic properties with the addition of specific properties. Indeed, sometimes, we cannot take into account all possible distinctions, either because of the conversion from different treebanks not containing enough information, or because a sentence does not allow to make a clear decision.
A way of naming a daughter of a relation `R` is to add an extension `EXT` to `R`, calling this new relation `R:EXT`.

 * It is possible to distinguish between **arguments** and **modifiers**: Although this distinction involves semantic criteria (an argument of a lexical unit L is an obligatory participant in the semantic description of L), we consider that it is hard to avoid, because especially for verb dependents, most language have special functions.

 * A **multiple coordination**, such as *John, Mary and Peter*, is analyzed as a chain instead of a bouquet: One of the main argument for the chain-analysis is that it reduces the dependency length. See the [page](../particular_phenomena/coord) dedicated to coordination.

 * There is a strict distinction between surface-syntactic relations and deep-syntactic features expressed as extensions of syntactic relation names using the `@` symbol.

UD relations that are not used in **SUD**:
[`nsubj`](https://universaldependencies.org/u/dep/nsubj.html),
[`csubj`](https://universaldependencies.org/u/dep/csubj.html),
[`obj`](https://universaldependencies.org/u/dep/obj.html),
[`iobj`](https://universaldependencies.org/u/dep/iobj.html),
[`obl`](https://universaldependencies.org/u/dep/obl.html),
[`xcomp`](https://universaldependencies.org/u/dep/xcomp.html),
[`ccomp`](https://universaldependencies.org/u/dep/ccomp.html),
[`amod`](https://universaldependencies.org/u/dep/amod.html),
[`nmod`](https://universaldependencies.org/u/dep/nmod.html),
[`nummod`](https://universaldependencies.org/u/dep/nummod.html),
[`advmod`](https://universaldependencies.org/u/dep/advmod.html),
[`acl`](https://universaldependencies.org/u/dep/acl.html),
[`advcl`](https://universaldependencies.org/u/dep/advcl.html),
[`aux`](https://universaldependencies.org/u/dep/aux.html),
[`cop`](https://universaldependencies.org/u/dep/cop.html),
[`case`](https://universaldependencies.org/u/dep/case.html),
[`mark`](https://universaldependencies.org/u/dep/mark.html).
These 17 relations are replaced by three major relations in SUD --
[`subj`](../relations/subj),
[`comp`](../relations/comp),
[`mod`](../relations/mod)
(subject, complement, modifier) -- with possible sub-relations, in addition to the general [`udep`](../relations/udep) (underspecified dependency) to a more marginal extent.
