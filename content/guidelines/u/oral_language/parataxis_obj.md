---
layout: default
title: parataxis:obj
---
A direct discourse is attached its governor by the relation `parataxis:obj`.

>French
{{< conll >}}
# text = Ce qui est horrible c' est de se dire je n' en sortirai jamais
1	Ce	ce	PRON	_	_	6	dislocated	_	_
2	qui	qui	PRON	_	_	3	subj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	mod@relcl	_	_
4	horrible	horrible	ADJ	_	Gender=Masc|Number=Sing	3	comp:pred	_	_
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	subj	_	_
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	de	de	ADP	_	_	6	comp:pred	_	_
8	se	se	PRON	_	Person=3|PronType=Prs	9	comp	_	InIdiom=Yes
9	dire	dire	VERB	_	VerbForm=Inf	7	comp:obj	_	ExtPos=VERB|PhraseType=Idiom
10	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	13	subj	_	_
11	n'	ne	ADV	_	Polarity=Neg	13	mod	_	_
12	en	en	PRON	_	Person=3|PronType=Prs	13	comp:obj	_	_
13	sortirai	sortir	VERB	ETRE	Number=Sing|Person=1	9	parataxis:obj	_	_
14	jamais	jamais	ADV	_	_	13	mod	_	_
{{< /conll >}}