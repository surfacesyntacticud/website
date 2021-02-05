---
layout: default
title: Disfluencies in oral language
---

In oral language, speakers form sentences while speaking, which means that sometimes they might search for words while speaking. 
They may repeat a word until they find the right one, or they may try with one word and then decide to change.

## Repetitions and reformulations

To analyse constructions of repetition or reformulation, we use the relation `conj:dicto`.


> French

{{< conll >}}
# text = Euh, et c'était, bah c'était super bien, euh super spacieux.
# text_en = Um, it was, well it was really great, um super spacious. 
1	euh	euh	INTJ	_	_	5	discourse	_	Gloss=um
2	,	,	PUNCT	_	_	1	punct	_	_
3	et	et	CCONJ	_	_	5	cc	_	Gloss=and
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	subj	_	SpaceAfter=No|Gloss=it
5	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Gloss=was
6	,	,	PUNCT	_	_	9	punct	_	_
7	bah	bah	INTJ	_	_	9	discourse	_	Gloss=well
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	subj	_	SpaceAfter=No|Gloss=it
9	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	conj:dicto	_	Gloss=was
10	super	super	ADJ	_	_	11	mod	_	Gloss=super
11	bien	bien	ADV	_	_	9	mod	_	Gloss=well
12	,	,	PUNCT	_	_	15	punct	_	_
13	euh	euh	INTJ	_	_	15	discourse	_	Gloss=um
14	super	super	ADV	_	_	15	mod	_	Gloss=super
15	spacieux	spacieux	ADJ	_	Gender=Masc	9	conj:dicto	_	Gloss=spacious
16	.	.	PUNCT	_	_	5	punct	_	_
{{< /conll >}}

The `conj:dicto` relation applies also when the linked words are not the same.

> French

{{< conll >}}
# text_fr = on sait euh la quantité euh le nombre de kilos de litres effectivement de produits
# text_en = we know uh the quantity uh the number of kilos of liters actually of products 
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	2	subj	_	Gloss=we
2	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=know
3	euh	euh	INTJ	_	_	4	discourse	_	Gloss=um
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	Gloss=the
5	quantité	quantité	NOUN	_	Gender=Fem|Number=Sing	2	comp:obj	_	Gloss=quantity
6	euh	euh	INTJ	_	_	5	discourse	_	Gloss=um
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Gloss=the
8	nombre	nombre	NOUN	conj:reform	Gender=Masc|Number=Sing	5	conj:dicto	_	Gloss=number
9	de	de	ADP	_	_	8	udep	_	Gloss=of
10	kilos	kilo	NOUN	_	Gender=Masc|Number=Plur	9	comp:obj	_	Gloss=kilos
11	de	de	ADP	_	_	9	conj:dicto	_	Gloss=of
12	litres	litre	NOUN	conj:reform	Gender=Masc|Number=Plur	11	comp:obj	_	Gloss=liters
13	effectivement	effectivement	ADV	_	_	12	discourse	_	Gloss=actually
14	de	de	ADP	_	_	12	udep	_	Gloss=of
15	produits	produit	NOUN	_	Gender=Masc|Number=Plur	14	comp:obj	_	Gloss=products
{{< /conll >}}

## Unfinished constructions

Sometimes speakers utter a half-finished construction. In that case, it may happen that a word cannot be attached to its head, because the speaker decided not to utter it.

> French

{{< conll >}}
# text = Je lis son le portrait de notre de votre héros
# text_en = I'im reading his the portrayal of our of your hero
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	Gloss=I
2	lis	lire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=read
3	son	son	DET	_	Number=Sing|PossNumber=Sing|PossPerson=3|PronType=Prs	5	det	_	Gloss=his
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	conj:dicto	_	Gloss=the
5	portrait	portrait	NOUN	_	Gender=Masc|Number=Sing	2	comp:obj	_	Gloss=portrayal
6	de	de	ADP	_	_	5	udep	_	Gloss=of
7	notre	son	DET	_	Number=Sing|Person=3|PossNumber=Plur|PossPerson=1|PronType=Prs	6	comp:obj@scrap	_	Gloss=our
8	de	de	ADP	_	_	6	conj:dicto	_	Gloss=of
9	votre	son	DET	_	Number=Sing|Person=3|PossNumber=Plur|PossPerson=2|PronType=Prs	10	det	_	Gloss=your
10	héros	héros	NOUN	_	Gender=Masc	8	comp:obj	_	Gloss=hero
{{< /conll >}}

In this example we can see the construction *Je lis son le portrait de notre de votre héros* (English: *I'im reading his the portrayal of our of your hero*). This construction causes some issues because we can't attach the word *notre* to its semantic head *héros* because of the presence of the second *de*.

If the sentence was *portrait de notre votre héros* (English: *portrayal of our your hero*) we could use the `conj:dicto` relation to attach *votre* to *notre*.

{{< conll >}}
# text = portrait de notre votre héros
# text_en = portrayal of our your hero
1	portrait	portrait	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Gloss=portrayal
2	de	de	ADP	_	_	1	udep	_	Gloss=of
3	notre	son	DET	_	Number=Sing|Person=3|PossNumber=Plur|PossPerson=1|PronType=Prs	5	det	_	Gloss=our
4	votre	son	DET	_	Number=Sing|Person=3|PossNumber=Plur|PossPerson=2|PronType=Prs	3	conj:dicto	_	Gloss=your
5	héros	héros	NOUN	_	Gender=Masc	2	comp:obj	_	Gloss=hero
{{< /conll >}}

In these cases we prefer to attach the two words *de* with a `conj:dicto` relation and link the word *notre* to the first *de* as an incomplete object - `comp:obj@scrap`.


Below we can see an example when a speaker starts with one word, then decides it doesn't fit and searches for a more fitting word.

> French

{{< conll >}}
# text_fr = c'est-à-dire que le m~ le le virus sait faire sa propre besogne de lui-même
# text_en = that means that the virus can do its own work
1	c'est-à-dire	c'est-à-dire	CCONJ	_	_	0	root	_	ExtPos=CCONJ|PhraseType=Idiom|Gloss=that_means
2	que	que	SCONJ	_	_	1	comp:obj	_	InIdiom=Yes|Gloss=that
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	Gloss=the
4	m~	m~	X	_	_	8	subj	_	_
5	le	le	DET	conj:reform	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Gloss=the
6	le	le	DET	conj:reform	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	conj:dicto	_	Gloss=the
7	virus	virus	NOUN	_	Gender=Masc	4	conj:dicto	_	Gloss=virus
8	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	comp:obj	_	Gloss=knows
9	faire	faire	VERB	_	VerbForm=Inf	8	comp:obj@x	_	Gloss=make
10	sa	son	DET	_	Gender=Fem|Number=Sing|Person=3|PossNumber=Sing|PossPerson=3|PronType=Prs	12	det	_	Gloss=its
11	propre	propre	ADJ	_	Number=Sing	12	mod	_	Gloss=own
12	besogne	besogne	NOUN	_	Gender=Fem|Number=Sing	9	comp:obj	_	Gloss=work
13	de	de	ADP	_	_	9	mod	_	Gloss=of
14	lui-même	lui-même	PRON	_	_	13	comp:obj	_	Gloss=himself
{{< /conll >}}



