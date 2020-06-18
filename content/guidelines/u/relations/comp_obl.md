---
layout: default
---

# **comp:obl**
The `comp:obl` relation is used for oblique arguments of verbs, adjectives, adverbs, nouns or pronouns, regardless of their form.

{{< conll >}}
1	it	it	PROPN	_	_	2	subj	_	_
2	belongs	belong	VERB	_	_	0	root	_	_
3	to	to	ADP	_	_	2	comp:obl	_	_
4	a	a	DET	_	_	5	det	_	_
5	past	past	NOUN	_	_	3	comp:obj	_	_
{{< /conll >}}

{{< conll >}}
1	coming	come	VERB	_	_	0	root	_	_
2	into	into	ADP	_	_	1	comp:obl	_	_
3	the	the	DET	_	_	4	det	_	_
4	area	area	NOUN	_	_	2	comp:obj	_	_
5	to	to	PART	_	_	1	comp:obl	_	_
6	see	see	VERB	_	_	5	comp:obj	_	_
7	concerts	concert	NOUN	_	_	6	comp:obj	_	_
{{< /conll >}}

{{< conll >}}
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	subj	_	Entity=(person-8)
2	gives	give	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	2	comp:obl	_	Entity=(person-2)
4	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(abstract-96
5	hooded	hooded	ADJ	JJ	Degree=Pos	6	mod	_	_
6	look	look	NOUN	NN	Number=Sing	2	comp:obj	_	Entity=abstract-96)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_
{{< /conll >}}

{{< conll >}}
# text = I am afraid that this works
1	j'	je	PRON	_	_	2	subj	_	Gloss=I
2	ai	avoir	VERB	_	_	0	root	_	Gloss=have
3	peur	peur	NOUN	_	_	2	comp:obj@lvc	_	Gloss=fear
4	que	que	SCONJ	_	_	3	comp:obl	_	Gloss=that
5	ça	ça	PRON	_	_	6	subj	_	Gloss=this
6	marche	marcher	VERB	_	_	4	comp:obj	_	Gloss=works
{{< /conll >}}

{{< conll >}}
# text = many modern buildings
1	beaucoup	beaucoup	ADV	_	_	0	root	_	Gloss=many
2	de	de	VERB	_	_	1	comp:obl	_	Gloss=of
3	bâtiments	bâtiment	NOUN	_	_	2	comp:obj	_	Gloss=buildings
4	modernes	moderne	ADJ	_	_	3	mod	_	Gloss=modern
{{< /conll >}}
