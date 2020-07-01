---
layout: default
---

# **comp**
The `comp` relation is used for arguments of verbs, nouns, adjectives, adverbs, auxiliaries, adpositions and conjunctions.

This relation is refined into several sub-relations:  [`comp:aux`](../comp_aux) (auxiliary argument), [`comp:cleft`](../comp_cleft) (cleft clauses), [`comp:obj`](../comp_obj) (direct object),[`comp:obl`](../comp_obl) (oblique argument), [`comp:pred`](../comp_pred) (predicative argument).

In most cases, SUD native corpora are directly annotated with the sub-relations, rather than with the `comp` relation. However, `comp` may sometimes be used when one has difficulty deciding between `comp:obj` and `comp:obl`.

With certain French reflexive verbs it is difficult to determine the role of a pronoun. In constructions such as *Il s'en sort* the pronoun *se* no longer provides the semantic value of an argument of the verb, however it fits so well into the normal argument structure that it is hard to recognize that it cannot be de-pronominalized. That's why we decided to annotate the relation `comp`. 

{{< conll >}}
# text_fr = Il s'en sort bien
# text_en = He's doing well
1	Il	il	PRON	_	_	4	subj	_	Gloss=he
2	s'	se	PRON	_	_	4	comp	_	Gloss=himself
3	en	en	PRON	_	_	4	comp	_	Gloss=of
4	sort	sortir	VERB	_	_	0	root	_	Gloss=go out
5	bien	bien	ADV	_	_	4	mod	_	Gloss=well
{{< /conll >}}


{{< conll >}}
# text_fr = Il se souvient
# text_en = He remembers
1	Il	il	PRON	_	_	3	subj	_	Gloss=he
2	se	se	PRON	_	_	3	comp	_	Gloss=himself
3	souvient	souvenir	VERB	_	_	0	root	_	Gloss=remembers
{{< /conll >}}