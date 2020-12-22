---
layout: default
title: dislocated
---

The `dislocated` relation is used to analyze detached elements that do not enter in the core grammatical relations of a sentence. 

>French
{{< conll >}}
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	subj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	duré	durer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	comp:aux	_	_
4	dix	dix	NUM	_	Number=Plur	5	det	_	_
5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	comp:obj	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	silence	silence	NOUN	_	Gender=Masc|Number=Sing	2	dislocated	_	_
8	autour	autour	ADV	_	_	7	mod	_	_
9	de	de	ADP	_	_	8	comp:obl	_	_
10	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	9	comp:obj	_	_
{{< /conll >}}

Here is an example with French tonic pronouns.

>French
{{< conll >}}
# text_fr = Moi je pense qu' il vient pas
# text_en = I think he is not coming
1	Moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	3	dislocated	_	Gloss=me
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	subj	_	Gloss=I
3	pense	penser	VERB	_	Number=Sing|Person=1	0	root	_	Gloss=think
4	qu'	que	SCONJ	_	_	3	comp:obj	_	Gloss=that
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	subj	_	Gloss=he
6	vient	vient	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	comp:obj	_	Gloss=comes
7	pas	pas	ADV	_	Polarity=Neg	6	mod	_	Gloss=not
{{< /conll >}}


In case of multiple propositions in one sentence, `dislocated` is used when the second proposition doesn't hold any actual information value and it cannot be neither separated nor negated.

Let's consider the following example:
>French
{{< conll >}}
# text = j'ai des copines euh actuellement euh , je m'entends super bien avec
1	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	SpaceAfter=No
2	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	dislocated	_	_
3	des	de+le	DET	_	_	4	det	_	_
4	copines	copine	NOUN	_	Gender=Fem|Number=Plur	2	comp:obj	_	_
5	actuellement	actuellement	ADV	_	_	2	mod	_	_
6	,	,	PUNCT	_	_	2	punct	_	_
7	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	9	subj	_	_
8	m'	le	PRON	_	_	9	comp:obj	_	SpaceAfter=No
9	entends	entendre	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
10	super	super	ADV	_	_	11	mod	_	_
11	bien	bien	ADV	_	_	9	mod	_	_
12	avec	avec	ADP	_	_	9	comp:obl	_	_
{{< /conll >}}

In this sentence, the proposition *J'ai des copines* (*I have some friends*) doesn't provide any information. The fact that the speaker has some friends is considered as obvious and we cannot negate it or question it. The informational content of this sentence is **about** these friends, not about the fact that the speaker has some.
