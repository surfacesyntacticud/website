---
layout: default
---

# **comp:pred**
The `comp:pred` relation is used for predicative arguments of verbs.

> English

{{< conll >}}
1	I	I	PRON	_	_	2	subj	_	_
2	was	be	AUX	_	_	0	root	_	_
3	thirteen	thirteen	NUM	_	_	2	comp:pred	_	_
{{< /conll >}}

> English

{{< conll >}}
1	Norton	Norton	PROPN	_	_	2	subj	_	_
2	had	have	AUX	_	_	0	root	_	_
3	become	become	VERB	_	_	2	comp:aux	_	_
4	completely	completely	ADV	_	_	5	mod	_	_
5	disgruntled	disgruntled	ADJ	_	_	3	comp:pred	_	_
{{< /conll >}}

> English

{{< conll >}}
1	Let	let	VERB	_	_	0	root	_	_
2	them	them	PRON	_	_	1	comp:obj	_	_
3	hear	hear	VERB	_	_	1	comp:pred	_	_
4	you	you	PRON	_	_	3	comp:obj	_	_
5	shout	shout	VERB	_	_	3	comp:pred	_	_
{{< /conll >}}

> English

{{< conll >}}
1	Prague	Prague	PROPN	_	_	2	subj	_	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	considered	consider	VERB	VBN	Tense=Past|VerbForm=Part	2	comp:aux@pass	_	_
4	to	to	PART	TO	_	3	comp:pred	_	_
5	be	be	AUX	VB	VerbForm=Inf	4	comp:obj	_	_
6	one	one	NUM	CD	NumType=Card	5	comp:pred	_	_
7	of	of	ADP	IN	_	6	udep	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	11	det	_	_
9	most	most	ADV	RBS	_	10	mod	_	_
10	beautiful	beautiful	ADJ	JJ	Degree=Pos	11	mod	_	_
11	cities	city	NOUN	NNS	Number=Plur	7	comp:obj	_	_
12	in	in	ADP	IN	_	11	udep	_	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	_	Entity=(place-12
14	world	world	NOUN	NN	Number=Sing	12	comp:obj	_	Entity=place-1)place-11)place-12)|SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_
{{< /conll >}}

> French

{{< conll >}}
# sent_id = fr-ud-train_12228
# text = Je trouve cette attitude totalement inadmissible !
# text_en = I find this attitude totally unacceptable!
1	Je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	Gloss=I
2	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=find
3	cette	ce	DET	_	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	det	_	Gloss=this
4	attitude	attitude	NOUN	_	Gender=Fem|Number=Sing	2	comp:obj	_	Gloss=attitude
5	totalement	totalement	ADV	_	_	6	mod	_	Gloss=totally
6	inadmissible	inadmissible	ADJ	_	Number=Sing	2	comp:pred	_	Gloss=unacceptable
7	!	!	PUNCT	_	_	2	punct	_	Gloss=!
{{< /conll >}}

> French

{{< conll >}}
# text_en = The South is considered a dynamic and rich area in terms of industry.
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Art	2	det	_	Gloss=the
2	Sud	sud	NOUN	_	Gender=Masc|Number=Sing	3	subj@pass	_	Gloss=south
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
4	considéré	considérer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	comp:aux@pass	_	Gloss=considered
5	comme	comme	ADP	_	_	4	comp:pred	_	Gloss=as
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Art	7	det	_	Gloss=a
7	bassin	bassin	NOUN	_	Gender=Masc|Number=Sing	5	comp:obj	_	Gloss=basin
8	dynamique	dynamique	ADJ	_	Gender=Masc|Number=Sing	7	mod	_	Gloss=dynamic
9	et	et	CCONJ	_	_	10	cc	_	Gloss=and
10	riche	riche	ADJ	_	Gender=Masc|Number=Sing	8	conj	_	Gloss=rich
11	en	en	ADP	_	_	10	mod	_	Gloss=in
12	termes	terme	NOUN	_	Gender=Masc|Number=Plur	11	comp:obj	_	Gloss=terms
13	d'	de	ADP	_	_	12	udep	_	Gloss=of
14	industrie	industrie	NOUN	_	Gender=Fem|Number=Sing	13	comp:obj	_	Gloss=industry
{{< /conll >}}

The `comp:pred` relation can also be used in certain subordinating constructions.

> French

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
