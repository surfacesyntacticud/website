---
layout: default
title: French SUD Guidelines
---
# SUD for French

This page outlines various features specific to French.


### comp:aux
In French, only three verbs are considered auxiliaries **être**, **avoir** and **faire**.

The `comp:aux` relation can be used with one of the three sub-relations `@tense`, `@pass` or `@caus`, depending on whether the auxiliary is expressing a tense, a passive or a causative construction. In French, the relation `comp:aux@tense` is used with both verbs **être** and **avoir** and is the most common sub-relation. The relation `comp:aux@pass` is only used with the verb **être**, while `comp:aux@caus` is only used with the verb **faire**.


#### Example of an auxiliary expressing a tense
{{< conll >}}
# text_en = She has disappeared.
1	elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	Gloss=she
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=has
3	disparu	disparaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	comp:aux@tense	_	Gloss=disappeared
{{< /conll >}}

#### Example of a passive construction
{{< conll >}}
# text_en = The castle is then sold.
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	château	château	NOUN	_	Gender=Masc|Number=Sing	3	subj@pass	_	Gloss=castle
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
4	ensuite	ensuite	ADV	_	_	3	mod	_	Gloss=next
5	vendu	vendre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	comp:aux@pass	_	Gloss=sold
{{< /conll >}}

#### Example of a causative construction
{{< conll >}}
# text_en = He makes it fall.
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	subj	_	Gloss=he
2	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	comp:obj@agent	_	Gloss=it
3	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=makes
4	tomber	tomber	VERB	_	VerbForm=Inf	3	comp:aux@caus	_	Gloss=fall
{{< /conll >}}
