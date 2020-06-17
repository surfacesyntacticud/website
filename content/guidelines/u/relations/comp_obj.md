---
layout: default
---

# **comp:obj**
The `comp:obj` relation is used for direct object complements, including direct complements of an adposition or a subordinating conjunction.

## Direct object complements

{{< conll >}}
1	Norton	Norton	PROPN	_	_	2	subj	_	_
2	spent	spend	VERB	_	_	0	root	_	_
3	most	most	ADV	_	_	2	comp:obj	_	_
4	of	of	ADP	_	_	3	comp:obl	_	_
5	his	his	PRON	_	_	7	udep	_	_
6	early	early	ADJ	_	_	7	mod	_	_
7	life	life	NOUN	_	_	4	comp:obj	_	_
{{< /conll >}}

{{< conll >}}
# text = j'adore ce bar.
# text_en = I love this bar.
1	j'	I	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	SpaceAfter=No
2	adore	love	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ce	this	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	bar	bar	NOUN	_	Gender=Masc|Number=Sing	2	comp:obj	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_
{{< /conll >}}

## Direct complements of an adposition

{{< conll >}}
#text = On a décidé d'aller au CROUS de Censier, parce que c'est chouette.
#text_en = We decided to go to the Censier CROUS because it's cool.
1	on	we	PRON	_	_	2	subj	_	we
2	a	have	AUX	_	_	0	root	_	have
3	décidé	decided	VERB	_	_	2	comp:aux	_	decided
4	d'	of	ADP	_	_	3	comp:obj	_	SpaceAfter=No
5	aller	go	VERB	_	_	4	comp:obj	_	to go
6	à	to	ADP	_	_	5	comp:obl	_	to
7	le	the	DET	_	_	8	det	_	the
8	CROUS	CROUS	PROPN	_	_	6	comp:obj	_	CROUS
9	de	of	ADP	_	_	8	mod	_	of
10	Censier	Censier	PROPN	_	_	9	comp:obj	_	Censier
11	,	,	PUNCT	_	_	12	punct	_	_
12	parce	because	SCONJ	_	_	3	mod	_	because
13	que	that	SCONJ	_	_	12	fixed	_	_
14	c'	this	PRON	_	_	15	subj	_	SpaceAfter=No|it
15	est	is	AUX	_	_	12	comp:obj	_	is
16	chouette	cool	ADJ	_	_	15	comp:pred	_	great
{{< /conll >}}

{{< conll >}}
1	Get	get	VERB	VB	VerbForm=Inf	0	root	_	_
2	feedback	feedback	NOUN	NN	Number=Sing	1	comp:obj	_	Entity=(abstract-120
3	from	from	ADP	IN	_	2	udep	_	_
4	librarians	librarian	NOUN	NNS	Number=Plur	3	comp:obj	_	Entity=(person-119)
5	on	on	ADP	IN	_	2	udep	_	_
6	possible	possible	ADJ	JJ	Degree=Pos	7	mod	_	Entity=(abstract-105
7	subjects	subject	NOUN	NNS	Number=Plur	5	comp:obj	_	Entity=abstract-120)abstract-105)|SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	_	_
9	based	base	VERB	VBN	Tense=Past|VerbForm=Part	1	mod	_	_
10	on	on	ADP	IN	_	9	udep	_	_
11	already	already	ADV	RB	_	12	mod	_	_
12	known	know	VERB	VBN	Tense=Past|VerbForm=Part	13	mod	_	Entity=(abstract-121
13	gaps	gap	NOUN	NNS	Number=Plur	10	comp:obj	_	_
14	in	in	ADP	IN	_	13	udep	_	_
15	their	their	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	16	mod@poss	_	Entity=(abstract-122(person-119)
16	knowledge	knowledge	NOUN	NN	Number=Sing	14	comp:obj	_	Entity=abstract-122)
17	and	and	CCONJ	CC	_	18	cc	_	_
18	skills	skill	NOUN	NNS	Number=Plur	16	conj	_	Entity=(abstract-123)abstract-121)|SpaceAfter=No
19	.	.	PUNCT	.	_	1	punct	_	_
{{< /conll >}}

## Subordinating conjunctions

{{< conll >}}
1	this	this	PRON	_	_	2	subj	_	_
2	means	mean	VERB	_	_	0	root	_	_
3	that	that	SCONJ	_	_	2	comp:obj	_	_
4	you	you	PRON	_	_	5	subj	_	_
5	have	have	VERB	_	_	3	comp:obj	_	_
6	to	to	PART	_	_	5	comp:obj	_	_
7	make	make	VERB	_	_	6	comp:obj	_	_
8	one	one	PRON	_	_	7	comp:obj	_	_
9	of	of	ADP	_	_	8	udep	_	_
10	two	two	NUM	_	_	11	det	_	_
11	sacrifices	sacrifice	NOUN	_	_	9	comp:obj	_	_
{{< /conll >}}

{{< conll >}}
#text = Afirmó que sigue el criterio europeo y que trata de incentivar el mercado donde no lo hay.
#text_en = He stated that he follows the European criterion and tries to encourage the market where there is none.
1	Afirmó	affirmed	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	affirmed
2	que	that	SCONJ	SCONJ	_	1	comp:obj	_	that
3	sigue	follows	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	comp:obj	_	follows
4	el	the	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	the
5	criterio	criterion	NOUN	NOUN	Gender=Masc|Number=Sing	3	comp:obj	_	criterion
6	europeo	European	ADJ	ADJ	Gender=Masc|Number=Sing	5	mod	_	European
7	y	and	CCONJ	CCONJ	_	8	cc	_	and
8	que	that	SCONJ	SCONJ	_	2	conj	_	that
9	trata	tries	VERB	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	comp:obj	_	try
10	de	of	ADP	ADP	AdpType=Prep	9	comp:obl@x	_	of
11	incentivar	incentivize	VERB	VERB	VerbForm=Inf	10	comp:obj	_	to incentivize
12	el	the	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	the
13	mercado	market	NOUN	NOUN	Gender=Masc|Number=Sing	11	comp:obj	_	market
14	donde	where	PRON	PRON	PronType=Ind	17	udep	_	where
15	no	not	ADV	ADV	Polarity=Neg	17	mod	_	not
16	lo	it	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	17	comp:obj	_	it
17	hay	have	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	mod	_	there is
18	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	.
{{< /conll >}}

{{< conll >}}
#text = il faut que tu deviennes script girl.
#text_en = You need to become a script girl.
1	il	it	PRON	_	_	2	subj	_	it is
2	faut	is necessary	VERB	_	_	0	parataxis:parenth	_	necessary
3	que	that	SCONJ	_	_	2	comp:obj	_	that
4	tu	you	PRON	_	_	5	subj	_	you
5	deviennes	become	VERB	_	_	3	comp:obj	_	become
6	script	script	NOUN	_	_	7	compound	_	script
7	girl	girl	NOUN	_	_	5	comp:obj	_	girl
{{< /conll >}}
