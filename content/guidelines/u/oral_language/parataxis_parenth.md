---
layout: default
title: parataxis:parenth
---

The relatoin `parataxis:parenth` is used for parenthetical clauses, in the sense that the clause is backgrounded (as it was inside parentheses). A parenthetical clause could form an independent sentence.

>French

{{< conll >}}
# text = en mille neuf cent cinquante quand vous avez fait paraître ce ce chef -d' oeuvre pour moi c' est un chef -d' oeuvre qui s' appelle Un Barrage contre le Pacifique
1	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	2	subj@caus	_	_
2	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	fait	faire	AUX	DoubleAux	_	2	comp:aux	_	_
4	paraître	paraître	VERB	CAUSATIVE	VerbForm=Inf	3	comp:aux@caus	_	_
5	ce	ce	DET	_	_	7	det	_	_
6	ce	ce	DET	_	_	5	conj:dicto	_	_
7	chef	chef	NOUN	_	_	4	comp:obj	_	ExtPos=NOUN|PhraseType=Idiom
8	-d'	d'	ADP	_	_	7	unk	_	InIdiom=Yes
9	oeuvre	oeuvre	NOUN	_	_	8	unk	_	InIdiom=Yes
10	pour	pour	ADP	_	_	13	mod	_	_
11	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	10	comp:obj	_	_
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	subj	_	_
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis:parenth	_	_
14	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	chef	chef	NOUN	_	_	13	comp:pred	_	ExtPos=NOUN|PhraseType=Idiom
16	-d'	de	ADP	_	_	15	unk	_	InIdiom=Yes
17	oeuvre	oeuvre	NOUN	_	_	16	unk	_	InIdiom=Yes
18	qui	qui	PRON	_	_	20	subj	_	_
19	s'	se	PRON	_	Person=3|PronType=Prs	20	comp	_	InIdiom=Yes
20	appelle	appeler	VERB	_	_	7	mod@relcl	_	ExtPos=VERB|PhraseType=Idiom
21	Un	Un	DET	_	_	22	det	_	_
22	Barrage	Barrage	NOUN	_	_	20	comp:obj	_	ExtPOS=PROPN|Title=Yes
23	contre	contre	ADP	_	_	22	udep	_	_
24	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	Pacifique	Pacifique	PROPN	_	_	23	comp:obj	_	_
{{< /conll >}}