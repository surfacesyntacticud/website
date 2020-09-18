---
layout: default
---

# **subj**

The `subj` relation is used for all subjects, regardless of their form (nominal or verbal). This relationship encompasses both the `nsubj` and `csubj` relationships as defined by UD, as the following examples show.

> English

{{< conll >}}
1	A	a	DET	_	_	2	det	_	_
2	man	man	NOUN	_	_	3	subj	_	_
3	walks	walk	VERB	_	_	0	root	_	_
{{< /conll >}}

> English

{{< conll >}}
# sent_id = GUM_whow_joke-55
# text = Practicing your joke is crucial.
# s_type=decl
1	Practicing	practice	VERB	VBG	VerbForm=Ger	4	subj	_	_
2	your	your	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	3	mod@poss	_	_
3	joke	joke	NOUN	NN	Number=Sing	1	comp:obj	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	crucial	crucial	ADJ	JJ	Degree=Pos	4	comp:pred	_	SpaceAfter=No
{{< /conll >}}

## Deep syntactic features

The `subj` relation has two deep syntactic sub-relations. The sub-relation `subj@expl` is used to indicate that the subject is present to fill in an obligatory syntactic position and has no semantic value. You can find more information about the expletive constructions on this [page](../../deep_features/expletive).

> French

{{< conll >}}
# sent_fr = Il pleut dans ma maison
# text_en = It's raining in my house
1	Il	il	PRON	_	_	2	subj@expl	_	Gloss=it
2	pleut	pleuvoir	VERB	_	_	0	root	_	Gloss=rains
3	dans	dans	ADP	_	_	2	mod	_	Gloss=in
4	ma	son	DET	_	_	5	det	_	Gloss=my
5	maison	maison	NOUN	_	_	3	comp:obj	_	Gloss=house
{{< /conll >}}

Meanwhile, the sub-relation `subj@pass` is used to indicate a passive construction. This sub-relation can be used for both standard passive constructions, and for mediopassive constructions.
You can find more information about passive constructions on this [page](../../deep_features/pass).

### Passive constructions

> English

{{< conll >}}
# text = This shall be applauded
1	This	this	PRON	DT	Number=Sing|PronType=Dem	2	subj@pass	_	Entity=(event-70)
2	shall	shall	AUX	MD	VerbForm=Fin	0	root	_	_
3	be	be	AUX	VB	VerbForm=Inf	2	comp:aux	_	_
4	applauded	applaud	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	comp:aux@pass	_	_
{{< /conll >}}

> French

{{< conll >}}
# text = Il fut bâti en 1998.
# text_en = It was build in 1998.
1	Il	il	PRON	_	_	2	subj@pass	_	Gloss=It
2	fut	être	AUX	_	_	0	root	_	Gloss=was
3	bâti	bâtir	VERB	_	_	2	comp:aux@pass	_	Gloss=built
4	en	en	ADP	_	_	2	mod	_	Gloss=in
5	1998	1998	NUM	_	_	4	comp:obj	_	Gloss=1998
{{< /conll >}}

### Mediopassive constructions

> Czech

{{< conll >}}
# text_en = the number of employees decreased
# text_cs = počet zaměstnanců se snížil
1	počet	počet	NOUN	_	_	4	subj@pass	_	Gloss=number
2	zaměstnanců	zaměstnanec	NOUN	_	_	1	mod	_	Gloss=employees.PL.GEN
3	se	se	PRON	_	_	4	comp@pass	_	Gloss=itself
4	snížil	snížit	VERB	_	_	0	root	_	Gloss=decrease
{{< /conll >}}

> French

{{< conll >}}
# text_en = the book is selling well
# text_cs = le livre se vend bien
1	le	le	DET	_	_	2	det	_	Gloss=the
2	livre	livre	NOUN	_	_	4	subj@pass	_	Gloss=book
3	se	se	PRON	_	_	4	comp@pass	_	Gloss=itself
4	vend	vendre	VERB	_	_	0	root	_	Gloss=sell
5	bien	bien	ADV	_	_	4	mod	_	Gloss=well
{{< /conll >}}
