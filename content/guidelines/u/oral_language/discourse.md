---
layout: default
title: discourse
---

The `discourse` relation is used to link discourse markers. These markers are not clearly linked to the structure of the sentence, except in an expressive way.

In some cases the discourse marker can be another proposition.
Ex: *He comes on wednesday, I think.* In this sentence *I think* is a discourse marker because it misses its object (the object of the verb *think* is the rest of the sentence) and because they are fixed (*I think* doesn't commute with *he thinks*).


>French

{{< conll >}}
# text_fr = Ils sont un peu euh , un peu choqués je pense
# text_en = They are a bit um, a bit shocked I think
1	Ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	subj	_	_
2	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	InIdiom=Yes
4	peu	peu	NOUN	_	_	9	mod	_	ExtPos=ADV|PhraseType=Idiom
5	euh	euh	INTJ	_	_	7	discourse	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	InIdiom=Yes
8	peu	peu	NOUN	_	_	4	conj:dicto	_	ExtPos=ADV|PhraseType=Idiom
9	choqués	choquer	VERB	_	_	2	comp:pred	_	_
10	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	11	subj	_	_
11	pense	penser	VERB	_	Number=Sing|Person=1	2	discourse	_	_
{{< /conll >}}


The `discourse` relation is also used for simple discourse markers such as interjections or adverbs.

>French

{{< conll >}}
# text_fr = Enfin c'était un shooting photo .
# text_en = Well it was a photo shooting .
1	Enfin	enfin	ADV	_	_	3	discourse	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	subj	_	SpaceAfter=No
3	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	shooting	shooting	NOUN	_	_	3	comp:pred	_	_
6	photo	photo	NOUN	_	Gender=Fem|Number=Sing	5	mod	_	_
7	.	.	PUNCT	_	_	3	punct	_	_
{{< /conll >}}
