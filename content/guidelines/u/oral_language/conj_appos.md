---
layout: default
title: conj:appos
---

This relation is used for appositions. In an apposition, conjuncts have the same referent, but two clearly different denotations. The conjunct in apposition forms a predication in the background (in *Mary, my best friend*, the second conjunct *my best friend* is a predication on the first conjunct *Mary*, it is equivalent to *Mary is my best friend*).

Ex:
> French

{{< conll >}}
# text_fr = Nietzsche le philosophe allemand parle de a une définition de l'art
# text_en = Nietzsche the German philosopher speaks of has an art definition
1	Nietzsche	Nietzsche	PROPN	_	_	5	subj	_	Gloss=Niezsche
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	Gloss=the
3	philosophe	philosophe	NOUN	_	Gender=Masc|Number=Sing	1	conj:appos	_	Gloss=philosopher
4	allemand	allemand	ADJ	_	Gender=Masc|Number=Sing	3	mod	_	Gloss=German
5	parle	parler	VERB	_	_	0	root	_	Gloss=talks
6	de	de	ADP	_	_	5	comp:obl	_	Gloss=about
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj:dicto	_	Gloss=has
8	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	Gloss=a
9	définition	définition	NOUN	_	Gender=Fem|Number=Sing	7	comp:obj	_	Gloss=definition
10	de	de	ADP	_	_	9	udep	_	Gloss=of
11	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	Gloss=the
12	art	art	NOUN	_	Gender=Masc|Number=Sing	10	comp:obj	_	Gloss=art
{{< /conll >}}

> Naija

{{< conll >}}
# sent_id = WAZA_01_Triplea-Sports_MG__10
# sound_url = http://www.tal.univ-paris3.fr/trameur/iTrameur-naija/mp3/WAZA_01_Triplea-Sports_MG.mp3
# speaker_id = Sp278
# text = # yes o { Osun United coach |a Rier Duke Udi } sef < # de say [ de beat am wella inside di level ] //
# text_en = Yes, it was reported that Osun United's coach, Rier Duke Udi, was beaten mercilessly in the attack.
# text_ortho = Yes o Osun United coach, Rier Duke Udi sef, de say de beat am wella inside di level.
1	#	#	PUNCT	_	_	17	punct	_	AlignBegin=61725|AlignEnd=61905|Gloss=PUNCT
2	yes	yes	INTJ	_	_	17	discourse	_	AlignBegin=61905|AlignEnd=62075|Gloss=yes
3	o	o	PART	_	PartType=Disc	2	mod:emph	_	AlignBegin=62075|AlignEnd=62170|Gloss=EMPH
4	{	{	PUNCT	_	_	5	punct	_	AlignBegin=62170|AlignEnd=62200|Gloss=PUNCT
5	Osun	Osun	PROPN	_	_	7	mod	_	AlignBegin=62200|AlignEnd=62505|ExtPos=PROPN|Gloss=Osun|PhraseType=Title
6	United	United	ADJ	_	_	5	flat	_	AlignBegin=62505|AlignEnd=62821|Gloss=United|InTitle=Yes
7	coach	coach	NOUN	_	_	17	dislocated	_	AlignBegin=62821|AlignEnd=63045|Gloss=coach
8	|a	|a	PUNCT	_	_	9	punct	_	AlignBegin=63045|AlignEnd=63075|Gloss=PUNCT
9	Rier	Rier	PROPN	_	_	7	conj:appos	_	AlignBegin=63075|AlignEnd=63315|Gloss=Rier
10	Duke	duke	NOUN	_	_	9	flat	_	AlignBegin=63315|AlignEnd=63651|Gloss=duke
11	Udi	Udi	PROPN	_	_	10	flat	_	AlignBegin=63651|AlignEnd=63845|Gloss=Udi
12	}	}	PUNCT	_	_	9	punct	_	AlignBegin=63845|AlignEnd=63875|Gloss=PUNCT
13	sef	sef	PART	_	PartType=Disc	9	mod:emph	_	AlignBegin=63875|AlignEnd=64245|Gloss=FOC
14	<	<	PUNCT	_	_	7	punct	_	AlignBegin=64245|AlignEnd=64275|Gloss=PUNCT
15	#	#	PUNCT	_	_	7	punct	_	AlignBegin=64275|AlignEnd=64451|Gloss=PUNCT
16	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	17	subj	_	AlignBegin=64451|AlignEnd=64520|Gloss=NOM.PL.3
17	say	say	VERB	_	_	0	root	_	AlignBegin=64520|AlignEnd=64640|Gloss=say
18	[	[	PUNCT	_	_	20	punct	_	AlignBegin=64640|AlignEnd=64670|Gloss=PUNCT
19	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	20	subj	_	AlignBegin=64670|AlignEnd=64780|Gloss=NOM.PL.3
20	beat	beat	VERB	_	_	17	parataxis:obj	_	AlignBegin=64780|AlignEnd=64990|Gloss=beat
21	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	20	comp:obj	_	AlignBegin=64990|AlignEnd=65100|Gloss=ACC.SG.3
22	wella	wella	ADV	_	_	20	mod	_	AlignBegin=65100|AlignEnd=65390|Gloss=very_well
23	inside	inside	ADP	_	_	22	mod	_	AlignBegin=65390|AlignEnd=65730|Gloss=inside
24	di	di	DET	_	Definite=Def|PronType=Art	25	det	_	AlignBegin=65730|AlignEnd=65840|Gloss=DEF.ART
25	level	level	NOUN	_	_	23	comp:obj	_	AlignBegin=65840|AlignEnd=66220|Gloss=level
26	]	]	PUNCT	_	_	20	punct	_	AlignBegin=66220|AlignEnd=66250|Gloss=PUNCT
27	//	//	PUNCT	_	_	17	punct	_	AlignBegin=66220|AlignEnd=66250|Gloss=PUNCT
{{< /conll >}}
