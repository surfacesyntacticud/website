---
layout: default
title: French SUD Guidelines
---

This page outlines various features specific to French.

## comp:aux
In French, only three verbs are considered auxiliaries **être**, **avoir** and **faire**.

The `comp:aux` relation can be used with one of the three sub-relations `@tense`, `@pass` or `@caus`, depending on whether the auxiliary is expressing a tense, a passive or a causative construction. In French, the relation `comp:aux@tense` is used with both verbs **être** and **avoir** and is the most common sub-relation. The relation `comp:aux@pass` is only used with the verb **être**, while `comp:aux@caus` is only used with the verb **faire**.


#### Example of an auxiliary expressing a tense
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_en = She has disappeared.
      1	elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	Gloss=she
      2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=has
      3	disparu	disparaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	comp:aux@tense	_	Gloss=disappeared
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}




#### Example of a passive construction
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_en = The castle is then sold.
      1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
      2	château	château	NOUN	_	Gender=Masc|Number=Sing	3	subj@pass	_	Gloss=castle
      3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
      4	ensuite	ensuite	ADV	_	_	3	mod	_	Gloss=next
      5	vendu	vendre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	comp:aux@pass	_	Gloss=sold
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}

#### Example of a causative construction
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_en = He makes it fall.
      1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	subj@caus	_	Gloss=he
      2	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	comp:obj@agent	_	Gloss=it
      3	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=makes
      4	tomber	tomber	VERB	_	VerbForm=Inf	3	comp:aux@caus	_	Gloss=fall
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}


## Cleft constructions

As shown in the page about the [`comp:cleft`](.././u/relations/comp_cleft) relation,  the cleft constructions are analysed with a `comp:cleft` relation going from the head of the main sentence to the head of the complement.


* **que**
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_en = Most of the furniture is actually associated with this style.
      # text = C'est d'ailleurs à ce style que se rattache la majorité du mobilier.
      1	C'	ce	PRON	_	_	2	subj@expl	_	Gloss=it
      2	est	être	AUX	_	_	0	root	_	Gloss=is
      3	d'	de	ADP	_	_	2	mod	_	Gloss=of
      4	ailleurs	ailleurs	ADV	_	_	3	comp:obj	_	InIdiom=Yes|Gloss=actually
      5	à	à	ADP	_	_	2	comp:pred	_	Gloss=to
      6	ce	ce	DET	_	_	7	det	_	Gloss=this
      7	style	style	NOUN	_	_	5	comp:obj	_	Gloss=style
      8	que	que	SCONJ	_	_	2	comp:cleft	_	Gloss=that
      9	se	se	PRON	_	_	10	comp@pass	_	Gloss=itself
      10	rattache	rattacher	VERB	_	_	8	comp:obj	_	Gloss=associated
      11	la	le	DET	_	_	12	det	_	Gloss=the
      12	majorité	majorité	NOUN	_	G_	10	subj@pass	_	Gloss=majority
      13-14	du	_	_	_	_	_	_	_	_
      13	de	de	ADP	_	_	12	udep	_	Gloss=of
      14	le	le	DET	_	_	15	det	_	Gloss=the
      15	mobilier	mobilier	NOUN	_	_	13	comp:obj	_	Gloss=furniture
      16	.	.	PUNCT	_	_	2	punct	_	_
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}



* **qui**
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_en = It is the team of Avengers which is reconstituted under the aegis of SHIELD
      # text = C'est l'équipe des Vengeurs qui est reconstituée sous l'égide du SHIELD
      1	C'	ce	PRON	_	_	2	subj@expl	_	Gloss=It
      2	est	être	AUX	_	_	0	root	_	Gloss=is
      3	l'	le	DET	_	_	4	det	_	Gloss=the
      4	équipe	équipe	NOUN	_	_	2	comp:pred	_	Gloss=team
      5	de	de	ADP	_	_	4	udep	_	Gloss=of
      6	les	le	DET	_	_	7	det	_	Gloss=the
      7	Vengeurs	vengeur	NOUN	_	_	5	comp:obj	_	Gloss=Avengers
      8	qui	qui	PRON	_	_	9	subj	_	Gloss=which
      9	est	être	AUX	_	_	2	comp:cleft	_	Gloss=is
      10	reconstituée	reconstituer	VERB	_	_	9	comp:aux@tense	_	Gloss=reconstituted
      11	sous	sous	ADP	_	_	9	mod	_	Gloss=under
      12	l'	le	DET	_	_	13	det	_	Gloss=the
      13	égide	égide	NOUN	_	_	11	comp:obj	_	Gloss=aegis
      14	de	de	ADP	_	_	13	udep	_	Gloss=of
      15	le	le	DET	_	_	16	det	_	Gloss=the
      16	SHIELD	SHIELD	PROPN	_	_	14	comp:obj	_	Gloss=shield
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}


## Interrogatives

* **Est-ce que**
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text = Is it interesting?
      # text = Est-ce que c'est intéressant ?
      1	Est	être	VERB	_	_	0	root	_	Gloss=Is
      2	-ce	ce	PRON	_	_	1	subj@expl	_	Gloss=it
      3	que	que	SCONJ	_	_	1	comp:pred	_	Gloss=that
      4	c'	ce	PRON	_	_	5	subj	_	Gloss=it
      5	est	être	AUX	_	_	3	comp:obj	_	Gloss=is
      6	intéressant	intéressant	ADJ	_	_	5	comp:pred	_	Gloss=interesting
      7	?	?	PUNCT	_	_	1	punct	_	_
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}


* **Qu'est-ce que**
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_en = What do you have?
      # text = Qu'est ce que tu as ?
      1	Qu'	que	PRON	_	_	2	comp:pred	_	Gloss=what
      2	est	être	AUX	_	_	0	root	_	Gloss=is
      3	ce	ce	PRON	_	_	2	subj@expl	_	Gloss=it
      4	que	que	PRON	_	_	6	comp:obj	_	Gloss=that
      5	tu	il	PRON	_	_	6	subj	_	Gloss=you
      6	as	avoir	VERB	_	_	2	comp:cleft	_	Gloss=have
      7	?	?	PUNCT	_	_	2	punct	_	_
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}


