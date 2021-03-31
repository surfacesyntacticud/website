---
layout: default
---

# **comp**
The `comp` relation is used for arguments of verbs, nouns, adjectives, adverbs, auxiliaries, adpositions and conjunctions.

This relation is refined into several sub-relations:  [`comp:aux`](../comp_aux) (auxiliary argument), [`comp:cleft`](../comp_cleft) (cleft clauses), [`comp:obj`](../comp_obj) (direct object),[`comp:obl`](../comp_obl) (oblique argument), [`comp:pred`](../comp_pred) (predicative argument).

In most cases, SUD native corpora are directly annotated with the sub-relations, rather than with the `comp` relation. However, `comp` may sometimes be used when one has difficulty deciding between `comp:obj` and `comp:obl`.

In **French**, the `comp` label is frequently used to annotate reflexive pronouns and other pronominal clitics which contribute to the formation of pronominal verbs when it is difficult to determine the role of a pronoun. In constructions such as *Il s'en sort* the pronoun *se* no longer provides the semantic value of an argument of the verb. However, it fits so well into the typical argument structure that it is hard to recognize that it cannot be de-pronominalized. For this reason, we annotate the relation with a `comp` label.

{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_fr = Il s'en sort bien
      # text_en = He's doing well
      1	Il	il	PRON	_	_	4	subj	_	Gloss=he
      2	s'	se	PRON	_	_	4	comp	_	Gloss=himself
      3	en	en	PRON	_	_	4	comp	_	Gloss=of
      4	sort	sortir	VERB	_	_	0	root	_	Gloss=go out
      5	bien	bien	ADV	_	_	4	mod	_	Gloss=well
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}


{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_fr = Christine s'en veut à son amie
      # text_en = Christine is angry at her friend
      1	Christine	Christine	PROPN	_	_	3	subj	_	Gloss=Christine
      2	en	en	PRON	_	_	3	comp	_	Gloss=of
      3	veut	vouloir	VERB	_	_	0	root	_	Gloss=want
      4	à	à	ADP	_	_	3	comp:obl	_	Gloss=to
      5	son	son	DET	_	_	6	det	_	Gloss=her
      6	amie	ami	NOUN	_	_	4	comp:obj	_	Gloss=friend
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}


{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_fr = Il se souvient
      # text_en = He remembers
      1	Il	il	PRON	_	_	3	subj	_	Gloss=he
      2	se	se	PRON	_	_	3	comp	_	Gloss=himself
      3	souvient	souvenir	VERB	_	_	0	root	_	Gloss=remembers
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}


In the case of **passive reflexive constructions**, the pronoun is labelled `comp` with the deep syntactic feature `@pass`.

{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_fr = Il se situe à environ 13 kilomètres
      # text_en = It is situated about 13 kilometers to the north-east
      1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	subj	_	wordform=il|Gloss=it
      2	se	se	PRON	_	Person=3|PronType=Prs	3	comp@pass	_	Gloss=is
      3	situe	situer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=situated
      4	à	à	ADP	_	_	3	comp:obl	_	Gloss=at
      5	environ	environ	ADV	_	_	6	mod	_	Gloss=about
      6	13	13	NUM	_	_	7	det	_	Gloss=13
      7	kilomètres	kilomètre	NOUN	_	Gender=Masc|Number=Plur	4	comp:obj	_	Gloss=kilometers
      8-9	au	_	_	_	_	_	_	_	_
      8	à	à	ADP	_	_	7	udep	_	_
      9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Art	10	det	_	_
      10	nord-ouest	nord-ouest	NOUN	_	Gender=Masc|Number=Sing	8	comp:obj	_	_
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}

