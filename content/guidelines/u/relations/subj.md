---
layout: default
---

# **subj**

The `subj` relation is used for all subjects, regardless of their form (nominal or verbal). This relationship encompasses both the
`nsubj` and `csubj` relationships as defined by UD, as the following examples show.


{{< conll >}}
1	A	a	DET	_	_	2	det	_	_
2	man	man	NOUN	_	_	3	subj	_	_
3	walks	walk	VERB	_	_	0	root	_	_
{{< /conll >}}

{{< conll >}}
# sent_id = GUM_whow_joke-55
# text = Practicing your joke is crucial.
# s_type=decl
1	Practicing	practice	VERB	VBG	VerbForm=Ger	4	subj	_	_
2	your	your	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	3	mod@poss	_	_
3	joke	joke	NOUN	NN	Number=Sing	1	comp:obj	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	crucial	crucial	ADJ	JJ	Degree=Pos	4	comp:pred	_	SpaceAfter=No
6	.	.	PUNCT	.	_	4	punct	_	_
{{< /conll >}}

## Deep syntactic features

The `subj` relation has two deep syntactic sub-relations. The sub-relation `subj@expl` is used to indicate that the subject is present to fill in an obligatory syntactic position and has no semantic value.

{{< conll >}}
# sent_fr = Il pleut dans ma maison
# text_en = It's raining in my house
1	Il	il	PRON	_	_	2	subj@expl	_	Gloss=it
2	pleut	pleuvoir	VERB	_	_	0	root	_	Gloss=rains
3	dans	dans	ADP	_	_	2	mod	_	Gloss=in
4	ma	son	DET	_	_	5	det	_	Gloss=my
5	maison	maison	NOUN	_	_	3	comp:obj	_	Gloss=house
{{< /conll >}}

The sub-relation `subj@pass` is used to indicate a passive construction.

{{< conll >}}
# text = This shall be applauded
1	This	this	PRON	DT	Number=Sing|PronType=Dem	2	subj@pass	_	Entity=(event-70)
2	shall	shall	AUX	MD	VerbForm=Fin	0	root	_	_
3	be	be	AUX	VB	VerbForm=Inf	2	comp:aux	_	_
4	applauded	applaud	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	comp:aux@pass	_	_
{{< /conll >}}

{{< conll >}}
# text_fr = L'œuvre est située dans la galerie
# text_en = The artwork is located in the gallery.
1	L'	le	DET	_	_	2	det	_	Gloss=the
2	œuvre	œuvre	NOUN	_	_	3	subj@pass	_	Gloss=artwork
3	est	être	AUX	_	_	0	root	_	Gloss=is
4	située	situer	VERB	_	_	3	comp:aux@pass	_	Gloss=placed
5	dans	dans	ADP	_	_	4	comp:obl	_	Gloss=in
6	la	le	DET	_	_	7	det	_	Gloss=the
7	galerie	galerie	NOUN	_	_	5	comp:obj	_	Gloss=gallery
{{< /conll >}}

{{< conll >}}
# text_en = the number of employees decreased
# text_cs = počet zaměstnanců se snížil
1	počet	počet	NOUN	_	_	4	subj@pass	_	Gloss=number
2	zaměstnanců	zaměstnanec	NOUN	_	_	1	mod	_	Gloss=employees.PL.GEN
3	se	se	PRON	_	_	4	comp@pass	_	_
4	snížil	snížit	VERB	_	_	0	root	_	Gloss=decrease
{{< /conll >}}
