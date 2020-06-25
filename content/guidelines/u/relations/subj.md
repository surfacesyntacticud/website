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

The `subj` relation has two deep sub-relations. The sub-relation `subj@expl` is used to indicate that the subject is present to fill in an obligatory syntactic position and has no semantic value.

{{< conll >}}
# sent_fr = Il pleut dans ma maison
# text_en = It rains in my house
1	Il	il	PRON	_	_	2	subj@expl	_	_
2	pleut	pleuvoir	VERB	_	_	0	root	_	_
3	dans	dans	ADP	_	_	2	mod	_	_
4	ma	son	DET	_	_	5	det	_	_
5	maison	maison	NOUN	_	_	3	comp:obj	_	_
{{< /conll >}}

The sub-relation `subj@pass` is used to indicate a passive construction.

{{< conll >}}
# text = L'œuvre est située dans la galerie
1	L'	le	DET	_	_	2	det	_	_
2	œuvre	œuvre	NOUN	_	_	3	subj@pass	_	_
3	est	être	AUX	_	_	0	root	_	_
4	située	situer	VERB	_	_	comp:aux@pass	_	_
5	dans	dans	ADP	_	_	4	comp:obl	_	_
6	la	le	DET	_	_	7	det	_	_
7	galerie	galerie	NOUN	_	_	5	comp:obj	_	_
{{< /conll >}}