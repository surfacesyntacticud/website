---
layout: default
title: conj:coord
---

This relation is used to link elements connected with a coordinating conjunction such as *and* and *or*. The conjunction itself is linked to the second element with a `cc` relation. It is analogous to [`conj`](https://universaldependencies.org/u/dep/conj.html) relation in UD and SUD for written language.

> French

{{< conll >}}
# text = Elle a instoré dans ce pays la démocratie politique et sociale
1	Elle	il	PRON	_	_	2	subj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	instauré	instaurer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	comp:aux	_	_
4	dans	dans	ADP	_	_	3	mod	_	_
5	ce	ce	DET	_	_	6	det	_	_
6	pays	pays	NOUN	_	Gender=Masc	4	comp:obj	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	démocratie	démocratie	NOUN	_	Gender=Fem|Number=Sing	3	comp:obj	_	_
9	politique	politique	ADJ	_	Number=Sing	8	mod	_	_
10	et	et	CCONJ	_	_	11	cc	_	_
11	sociale	sociale	NOUN	_	_	9	conj:coord	_	_
{{< /conll >}}

> Naija

{{< conll >}}
# sent_id = JOS_10_Mothers-Against-Mini-Skirts_DG__51
# sound_url = http://www.tal.univ-paris3.fr/trameur/iTrameur-naija/mp3/JOS_10_Mothers-Against-Mini-Skirts_DG.mp3
# speaker_id = Sp125
# text = weda { you be my daughter o |c or not } < I go call you //
# text_en = Whether you are my daughter, or not, I will call you.
# text_ortho = Weda you be my daughter o, or not, I go call you.
1	weda	weda	SCONJ	_	_	14	mod:periph	_	AlignBegin=90370|AlignEnd=90676|Gloss=whether
2	{	{	PUNCT	_	_	4	punct	_	AlignBegin=90676|AlignEnd=90676|Gloss=PUNCT
3	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	4	subj	_	AlignBegin=90676|AlignEnd=90981|Gloss=NOM.2
4	be	be	VERB	_	PartType=Cop	1	comp:obj	_	AlignBegin=90981|AlignEnd=91287|Gloss=be1
5	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	6	mod:poss	_	AlignBegin=91287|AlignEnd=91592|Gloss=POSS.SG.1
6	daughter	daughter	NOUN	_	_	4	comp:pred	_	AlignBegin=91592|AlignEnd=91898|Gloss=daughter
7	o	o	PART	_	PartType=Disc	6	mod:emph	_	AlignBegin=91898|AlignEnd=92204|Gloss=EMPH
8	|c	|c	PUNCT	_	_	10	punct	_	AlignBegin=92204|AlignEnd=92204|Gloss=PUNCT
9	or	or	CCONJ	_	_	10	cc	_	AlignBegin=92204|AlignEnd=92509|Gloss=or
10	not	not	PART	_	Polarity=Neg	4	conj:coord	_	AlignBegin=92509|AlignEnd=92815|Gloss=NEG
11	}	}	PUNCT	_	_	4	punct	_	AlignBegin=92815|AlignEnd=92815|Gloss=PUNCT
12	<	<	PUNCT	_	_	1	punct	_	AlignBegin=92815|AlignEnd=92815|Gloss=PUNCT
13	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	subj	_	AlignBegin=92815|AlignEnd=93120|Gloss=NOM.SG.1
14	go	go	AUX	_	Aspect=Prosp	0	root	_	AlignBegin=93120|AlignEnd=93426|Gloss=PROSP
15	call	call	VERB	_	_	14	comp:aux	_	AlignBegin=93426|AlignEnd=93731|Gloss=call
16	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	15	comp:obj	_	AlignBegin=93731|AlignEnd=94037|Gloss=NOM.2
17	//	//	PUNCT	_	_	14	punct	_	AlignBegin=94037|AlignEnd=94037|Gloss=PUNCT
{{< /conll >}}

In case of multiple coordinating constructions, we analyze them in a chain in contrast to UD, which analyzes them as a bouquet structure.
This helps to reduce cumbersome long-distance relations. We also believe it to be a more accurate representation of the cognitive process of coordination.

> French

{{< conll >}}
# text = Elle saura conjuguer le changement et la cohésion sociale l' esprit d' initiative et la sécurité la modernité et le bien vivre ensemble
1	Elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	_
2	saura	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
3	conjuguer	conjuguer	VERB	_	VerbForm=Inf	2	comp:obj@x	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	changement	changement	NOUN	_	Gender=Masc|Number=Sing	3	comp:obj	_	_
6	et	et	CCONJ	_	_	8	cc	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	cohésion	cohésion	NOUN	_	Gender=Fem|Number=Sing	5	conj:coord	_	_
9	sociale	social	ADJ	_	Gender=Fem|Number=Sing	8	mod	_	_
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	esprit	esprit	NOUN	_	Gender=Masc|Number=Sing	8	conj:coord	_	_
12	d'	de	ADP	_	_	11	udep	_	_
13	initiative	initiative	NOUN	_	Gender=Fem|Number=Sing	12	comp:obj	_	_
14	et	et	CCONJ	_	_	16	cc	_	_
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	sécurité	sécurité	NOUN	_	Gender=Fem|Number=Sing	11	conj:coord	_	_
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	modernité	modernité	NOUN	_	Gender=Fem|Number=Sing	16	conj:coord	_	_
19	et	et	CCONJ	_	_	22	cc	_	_
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
21	bien	bien	ADV	_	_	22	mod	_	_
22	vivre	vivre	VERB	_	VerbForm=Inf	18	conj:coord	_	_
23	ensemble	ensemble	ADV	_	_	22	mod	_	_
{{< /conll >}}

> Naija

{{< conll >}}
# sent_id = KAD_22_Chatting-At-The-Restaurant_DG__134
# sound_url = http://www.tal.univ-paris3.fr/trameur/iTrameur-naija/mp3/KAD_22_Chatting-At-The-Restaurant_DG.mp3
# speaker_id = Sp205
# text = I finish < she con post am out for { Instagram |c Facebook |c Whatsapp |c Everywhere } //
# text_en = I finished and she posted it on Instagram, Facebook, Whatsapp, everywhere.
# text_ortho = I finish, she con post am out for Instagram, Facebook, Whatsapp, Everywhere.
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	subj	_	AlignBegin=226776|AlignEnd=227174|Gloss=NOM.SG.1
2	finish	finish	VERB	_	_	5	parataxis:dislocated	_	AlignBegin=227174|AlignEnd=227572|Gloss=finish
3	<	<	PUNCT	_	_	2	punct	_	AlignBegin=227572|AlignEnd=227572|Gloss=PUNCT
4	she	she	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	subj	_	AlignBegin=227572|AlignEnd=227970|Gloss=NOM.F.SG.3
5	con	con	AUX	_	Aspect=Cons	0	root	_	AlignBegin=227970|AlignEnd=228368|Gloss=CONS
6	post	post	VERB	_	_	5	comp:aux	_	AlignBegin=228368|AlignEnd=228766|Gloss=post
7	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	6	comp:obj	_	AlignBegin=228766|AlignEnd=229164|Gloss=ACC.SG.3
8	out	out	ADP	_	_	6	compound:prt	_	AlignBegin=229164|AlignEnd=229562|Gloss=out
9	for	for	ADP	_	_	6	comp:obl	_	AlignBegin=229562|AlignEnd=229960|Gloss=for
10	{	{	PUNCT	_	_	11	punct	_	AlignBegin=229960|AlignEnd=229960|Gloss=PUNCT
11	Instagram	Instagram	PROPN	_	_	9	comp:obj	_	AlignBegin=229960|AlignEnd=230358|Gloss=Instagram
12	|c	|c	PUNCT	_	_	13	punct	_	AlignBegin=230358|AlignEnd=230358|Gloss=PUNCT
13	Facebook	Facebook	PROPN	_	_	11	conj:coord	_	AlignBegin=230358|AlignEnd=230756|Gloss=Facebook
14	|c	|c	PUNCT	_	_	15	punct	_	AlignBegin=230756|AlignEnd=230756|Gloss=PUNCT
15	Whatsapp	WhatsApp	PROPN	_	_	13	conj:coord	_	AlignBegin=230756|AlignEnd=231154|Gloss=WhatsApp
16	|c	|c	PUNCT	_	_	17	punct	_	AlignBegin=231154|AlignEnd=231154|Gloss=PUNCT
17	Everywhere	everywhere	ADV	_	_	15	conj:coord	_	AlignBegin=231154|AlignEnd=231552|Gloss=everywhere
18	}	}	PUNCT	_	_	11	punct	_	AlignBegin=231552|AlignEnd=231552|Gloss=PUNCT
19	//	//	PUNCT	_	_	5	punct	_	AlignBegin=231552|AlignEnd=231552|Gloss=PUNCT
{{< /conll >}}


For more information about coordinaiton, see the [dedicated page](../../particular_phenomena/coord).
