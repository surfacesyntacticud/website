---
layout: default
---

# **comp:pred**
The `comp:pred` relation is used for predicative arguments of verbs.

{{< conll >}}
1	I	I	PRON	_	_	2	subj	_	_
2	was	be	AUX	_	_	0	root	_	_
3	thirteen	thirteen	NUM	_	_	2	comp:pred	_	_
{{< /conll >}}

{{< conll >}}
1	Norton	Norton	PROPN	_	_	2	subj	_	_
2	had	have	AUX	_	_	0	root	_	_
3	become	become	VERB	_	_	2	comp:aux	_	_
4	completely	completely	ADV	_	_	5	mod	_	_
5	disgruntled	disgruntled	ADJ	_	_	3	comp:pred	_	_
{{< /conll >}}

{{< conll >}}
1	Let	let	VERB	_	_	0	root	_	_
2	them	them	PRON	_	_	1	comp:obj	_	_
3	hear	hear	VERB	_	_	1	comp:pred	_	_
4	you	you	PRON	_	_	3	comp:obj	_	_
5	shout	shout	VERB	_	_	3	comp:pred	_	_
{{< /conll >}}

The `comp:pred` relation can also be used in certain subordinating constructions.

{{< conll >}}
# text = Mais la réalité est que la Mauritanie n'est pas le Maroc ou l'Algérie
# text_en = But the reality is that Mauritania isn't Morocco or Algeria.
1	Mais	but	CCONJ	_	_	4	cc	_	Gloss=but
2	la	the	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	Gloss=the
3	réalité	reality	NOUN	_	Gender=Fem|Number=Sing	4	subj	_	Gloss=reality
4	est	is	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
5	que	that	SCONJ	_	_	4	comp:pred	_	_
6	la	the	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Mauritanie	Mauritania	PROPN	_	_	9	subj	_	_
8	n'	not	ADV	_	Polarity=Neg	9	mod	_	SpaceAfter=No
9	est	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	comp:obj	_	_
10	pas	not	ADV	_	Polarity=Neg	9	mod	_	_
11	le	the	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Maroc	Morocco	PROPN	_	_	9	comp:pred	_	_
13	ou	or	CCONJ	_	_	15	cc	_	_
14	l'	the	DET	_	Definite=Def|Number=Sing|PronType=Art	15	det	_	SpaceAfter=No
15	Algérie	Algeria	PROPN	_	_	12	conj	_	SpaceAfter=No
{{< /conll >}}
