---
layout: default
---

# **comp:aux**

The `comp:aux` relation is used for the argument of auxiliaries, and corresponds to the `aux` relationship as defined by UD.

{{< conll >}}
1	Do	do	AUX	_	_	0	root	_	_
2	you	you	PRON	_	_	1	subj	_	_
3	remember	remember	VERB	_	_	1	comp:aux	_	_
4	?	?	PUNCT	_	_	1	punct	_	_
{{< /conll >}}

{{< conll >}}
1	It	it	PRON	_	_	2	subj	_	_
2	had	had	AUX	_	_	0	root	_	_
3	nearly	nearly	ADV	_	_	4	mod	_	_
4	stopped	stop	VERB	_	_	2	comp:aux	_	_
5	raining	rain	VERB	_	_	4	comp:pred	_	_
6	.	.	PUNCT	_	_	2	punct	_	_
{{< /conll >}}

In case of multiple auxiliaries, our analysis differs from the one in UD.

{{< conll >}}
1	We	we	PRON	_	_	2	subj	_	_
2	might	may	AUX	_	_	0	root	_	_
3	could	can	AUX	_	_	2	comp:aux	_	_
4	go	go	VERB	_	_	3	comp:aux	_	_
5	.	.	PUNCT	_	_	2	punct	_	_
{{< /conll >}}

{{< conll >}}
# text_en = If I had a similar chance, I wouldn't waste it
# text_sk = Ak by som mal podobnú šancu, ja ju nepremrhám.
1	Ak	ak	SCONJ	_	_	10	mod	_	Gloss=if
2	by	by	AUX	_	_	1	comp:obj	_	Gloss=AUX.cond
3	som	byť	AUX	_	_	2	comp:aux	_	Gloss=am
4	mal	mať	VERB	_	_	3	comp:aux	_	Gloss=had
5	podobnú	podobný	ADJ	_	_	6	mod	_	Gloss=similar
6	šancu	šanca	NOUN	_	_	4	comp:obj	_	Gloss=chance
7	,	,	PUNCT	_	_	1	punct	_	_
8	ja	ja	PRON	_	_	10	subj	_	Gloss=I
9	ju	on	PRON	_	_	10	comp:obj	_	Gloss=it
10	nepremrhám	premrhať	VERB	_	_	0	root	_	Gloss=not waste
{{< /conll >}}

{{< conll >}}
# text_en = Every man that is missing, you will be punished
# text_wo = Képp ku wuute dees na la mbugal, ñu folli la mbaa ñu rey la.
1	Képp	képp	PRON	PRON	NounClass=Wol1|Number=Sing|Person=3|PronType=Tot	5	dislocated	_	_
2	ku	bu	PRON	PRON	NounClass=Wol1|Number=Sing|Person=3|PronType=Rel	3	subj	_	_
3	wuute	wuute	VERB	VERB	Mood=Ind|VerbForm=Fin	1	mod@relcl	_	_
4	dees	di	AUX	AUX	Aspect=Imp|Mood=Ind|Person=0|Tense=Pres	5	comp:aux	_	_
5	na	na	AUX	INFL	Aspect=Perf|Mood=Ind|Number=Sing|Person=3	0	root	_	_
6	la	ko	PRON	CL	Case=Acc|Number=Sing|Person=2|PronType=Prs	7	comp:obj	_	_
7	mbugal	mbugal	VERB	VERB	Mood=Ind|VerbForm=Fin	4	comp:aux	_	SpaceAfter=No
{{< /conll >}}

## Deep syntactic features
The relation `comp:aux` can have these features:
* [@tense](../../deep_features/tense)
* [@pass](../../deep_features/pass)
* [@caus](../../deep_features/caus)
