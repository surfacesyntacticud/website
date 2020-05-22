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
