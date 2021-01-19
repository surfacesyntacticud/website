---
layout: default
title: parataxis:parenth
---

The `parataxis:parenth` relation is used for parenthetical clauses, in the sense that the clause is backgrounded (as if it were inside parentheses). A parenthetical clause could form an independent sentence.

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

> Naija
{{< conll >}}
# text = en mille neuf cent cinquante quand vous avez fait paraître ce ce chef -d' oeuvre pour moi c' est un chef -d' oeuvre qui s' appelle Un Barrage contre le Pacifique
# sent_id = ABJ_INF_08_Impatience_DG__27
# sound_url = http://www.tal.univ-paris3.fr/trameur/iTrameur-naija/mp3/ABJ_INF_08_Impatience_DG.mp3
# speaker_id = Sp27
# text = from primary four ( dat time < I even still dey seven years //) < one day < naim { my papa just || my papa } just come school //
# text_en = From primary four (I was still seven at the time), one day, then my father just... my father just came to the school.
# text_ortho = From primary four (dat time, I even still dey seven years, ), one day, naim my papa just, my papa just come school.
1	from	from	ADP	_	_	29	mod:periph	_	AlignBegin=58888|AlignEnd=59237|Gloss=from
2	primary	primary	NOUN	_	_	1	comp:obj	_	AlignBegin=59237|AlignEnd=59585|Gloss=primary
3	four	four	NUM	_	NumType=Card	2	mod:num	_	AlignBegin=59585|AlignEnd=59934|Gloss=four.CARD
4	(	(	PUNCT	_	_	11	punct	_	AlignBegin=59934|AlignEnd=59934|Gloss=PUNCT
5	dat	dat	DET	_	Number=Sing|PronType=Dem	6	det	_	AlignBegin=59934|AlignEnd=60283|Gloss=SG.DEM
6	time	time	NOUN	_	_	11	mod:periph	_	AlignBegin=60283|AlignEnd=60632|Gloss=time
7	<	<	PUNCT	_	_	6	punct	_	AlignBegin=60632|AlignEnd=60632|Gloss=PUNCT
8	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	subj	_	AlignBegin=60632|AlignEnd=60980|Gloss=NOM.SG.1
9	even	even	ADV	_	_	11	mod	_	AlignBegin=60980|AlignEnd=61329|Gloss=even
10	still	still	ADV	_	_	11	mod	_	AlignBegin=61329|AlignEnd=61678|Gloss=still
11	dey	dey	VERB	_	VerbType=Cop	3	parataxis:parenth	_	AlignBegin=61678|AlignEnd=62027|Gloss=be2
12	seven	seven	NUM	_	NumType=Card	13	det:num	_	AlignBegin=62027|AlignEnd=62375|Gloss=seven.CARD
13	years	year	NOUN	_	Number=Plur	11	comp:pred	_	AlignBegin=62375|AlignEnd=62724|Gloss=year.PL
14	//)	//)	PUNCT	_	_	11	punct	_	AlignBegin=62724|AlignEnd=62724|Gloss=PUNCT
15	<	<	PUNCT	_	_	1	punct	_	AlignBegin=62724|AlignEnd=62724|Gloss=PUNCT
16	one	one	DET	_	Definite=Spec|PronType=Art	17	det	_	AlignBegin=62724|AlignEnd=63073|Gloss=SPEC.ART
17	day	day	NOUN	_	_	29	mod:periph	_	AlignBegin=63073|AlignEnd=63421|Gloss=day
18	<	<	PUNCT	_	_	17	punct	_	AlignBegin=63421|AlignEnd=63421|Gloss=PUNCT
19	naim	naim	ADV	_	_	29	mod:periph	_	AlignBegin=63421|AlignEnd=63770|Gloss=then
20	{	{	PUNCT	_	_	22	punct	_	AlignBegin=63770|AlignEnd=63770|Gloss=PUNCT
21	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	22	mod:poss	_	AlignBegin=63770|AlignEnd=64119|Gloss=POSS.SG.1
22	papa	papa	NOUN	_	_	29	subj	_	AlignBegin=64119|AlignEnd=64468|Gloss=papa
23	just	just	ADV	_	_	22	mod@scrap	_	AlignBegin=64468|AlignEnd=64816|Gloss=just
24	||	||	PUNCT	_	_	26	punct	_	AlignBegin=64816|AlignEnd=64816|Gloss=PUNCT
25	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	26	mod:poss	_	AlignBegin=64816|AlignEnd=65165|Gloss=POSS.SG.1
26	papa	papa	NOUN	_	_	22	conj:dicto	_	AlignBegin=65165|AlignEnd=65514|Gloss=papa
27	}	}	PUNCT	_	_	22	punct	_	AlignBegin=65165|AlignEnd=65514|Gloss=PUNCT
28	just	just	ADV	_	_	29	mod	_	AlignBegin=65514|AlignEnd=65863|Gloss=just
29	come	come	VERB	_	_	0	root	_	AlignBegin=65863|AlignEnd=66211|Gloss=come
30	school	school	NOUN	_	_	29	comp:obj	_	AlignBegin=66211|AlignEnd=66560|Gloss=school
31	//	//	PUNCT	_	_	29	punct	_	AlignBegin=66560|AlignEnd=66560|Gloss=PUNCT
{{< /conll >}}
