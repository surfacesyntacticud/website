---
layout: default
title: discourse
src: guidelines/u/oral_language/discourse.md
---

The `discourse` relation is used to link discourse markers. These markers are not clearly linked to the structure of the sentence, except in an expressive way.

In some cases the discourse marker can be another proposition.
Ex: *He comes on wednesday, I think.* In this sentence *I think* is a discourse marker because it lacks an object (the object of the verb *think* is the rest of the sentence) and because they are fixed (*I think* doesn't commute with *he thinks*).


>French

{{< conll >}}
# text_fr = Ils sont un peu euh , un peu choqués je pense
# text_en = They are a bit um, a bit shocked I think
1	Ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	subj	_	Gloss=they
2	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=are
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	InIdiom=Yes|Gloss=a
4	peu	peu	NOUN	_	_	9	mod	_	ExtPos=ADV|PhraseType=Idiom|Gloss=bit
5	euh	euh	INTJ	_	_	7	discourse	_	Gloss=um
6	,	,	PUNCT	_	_	5	punct	_	_
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	InIdiom=Yes|Gloss=a
8	peu	peu	NOUN	_	_	4	conj:dicto	_	ExtPos=ADV|PhraseType=Idiom|Gloss=bit
9	choqués	choquer	VERB	_	_	2	comp:pred	_	Gloss=shocked
10	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	11	subj	_	Gloss=I
11	pense	penser	VERB	_	Number=Sing|Person=1	2	discourse	_	Gloss=think
{{< /conll >}}


The `discourse` relation is also used for simple discourse markers such as interjections or adverbs.

>French

{{< conll >}}
# text_fr = Enfin c'était un shooting photo .
# text_en = Well it was a photo shooting .
1	Enfin	enfin	ADV	_	_	3	discourse	_	|Gloss=finally
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	subj	_	SpaceAfter=No|Gloss=it
3	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Gloss=was
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=a
5	shooting	shooting	NOUN	_	_	3	comp:pred	_	Gloss=shooting
6	photo	photo	NOUN	_	Gender=Fem|Number=Sing	5	mod	_	Gloss=photo
7	.	.	PUNCT	_	_	3	punct	_	_
{{< /conll >}}

>Naija

{{< conll >}}
# text = so < just do wetin de want //
# text_en = So, just do what they want.
# text_ortho = So, just do wetin de want.
1	so	so	ADV	_	_	4	discourse	_	AlignBegin=163233|AlignEnd=163569|Gloss=so
2	<	<	PUNCT	_	_	1	punct	_	AlignBegin=163569|AlignEnd=163569|Gloss=PUNCT
3	just	just	ADV	_	_	4	mod	_	AlignBegin=163569|AlignEnd=163905|Gloss=just
4	do	do	VERB	_	_	0	root	_	AlignBegin=163905|AlignEnd=164242|Gloss=do
5	wetin	wetin	PRON	_	PronType=Int	4	comp:obj	_	AlignBegin=164242|AlignEnd=164578|Gloss=what.Q
6	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	subj	_	AlignBegin=164578|AlignEnd=164914|Gloss=NOM.PL.3
7	want	want	VERB	_	_	5	mod@relcl	_	AlignBegin=164914|AlignEnd=165250|Gloss=want
8	//	//	PUNCT	_	_	4	punct	_	AlignBegin=165250|AlignEnd=165250|Gloss=PUNCT
{{< /conll >}}
