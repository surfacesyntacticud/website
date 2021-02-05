---
layout: default
title: parataxis:obj
---
Direct discourse is attached its governor by the relation `parataxis:obj`.

>French

{{< conll >}}
# text_fr = Ce qui est horrible c' est de se dire je n' en sortirai jamais
# text_en = What is horrible is to think I will never get out
1	Ce	ce	PRON	_	_	6	dislocated	_	Gloss=this
2	qui	qui	PRON	_	_	3	subj	_	Gloss=that
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	mod@relcl	_	Gloss=is
4	horrible	horrible	ADJ	_	Gender=Masc|Number=Sing	3	comp:pred	_	Gloss=horrible
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	subj	_	Gloss=that
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
7	de	de	ADP	_	_	6	comp:pred	_	Gloss=to
8	se	se	PRON	_	Person=3|PronType=Prs	9	comp	_	InIdiom=Yes|Gloss=yourself
9	dire	dire	VERB	_	VerbForm=Inf	7	comp:obj	_	ExtPos=VERB|PhraseType=Idiom|Gloss=say
10	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	13	subj	_	Gloss=I
11	n'	ne	ADV	_	Polarity=Neg	13	mod	_	Gloss=not
12	en	en	PRON	_	Person=3|PronType=Prs	13	comp:obj	_	Gloss=of
13	sortirai	sortir	VERB	ETRE	Number=Sing|Person=1	9	parataxis:obj	_	Gloss=get_out
14	jamais	jamais	ADV	_	_	13	mod	_	Gloss=never
{{< /conll >}}

>Naija
{{< conll >}}
# sent_id = ABJ_GWA_02_Market-Food-Church_DG__58
# sound_url = http://www.tal.univ-paris3.fr/trameur/iTrameur-naija/mp3/ABJ_GWA_02_Market-Food-Church_DG.mp3
# speaker_id = Sp275
# text = eh e say [ you go parboil di banga //] //
# text_en = She said you'll parboil the banga.
# text_ortho = Eh e say you go parboil di banga.
1	eh	eh	INTJ	_	_	3	discourse	_	AlignBegin=84260|AlignEnd=84598|Gloss=eh
2	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	subj	_	AlignBegin=84598|AlignEnd=84935|Gloss=NOM.SG.3
3	say	say	VERB	_	_	0	root	_	AlignBegin=84935|AlignEnd=85272|Gloss=say
4	[	[	PUNCT	_	_	6	punct	_	AlignBegin=85272|AlignEnd=85272|Gloss=PUNCT
5	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	6	subj	_	AlignBegin=85272|AlignEnd=85610|Gloss=NOM.2
6	go	go	AUX	_	Aspect=Prosp	3	parataxis:obj	_	AlignBegin=85610|AlignEnd=85948|Gloss=PROSP
7	parboil	parboil	VERB	_	_	6	comp:aux	_	AlignBegin=85948|AlignEnd=86285|Gloss=parboil
8	di	di	DET	_	Definite=Def|PronType=Art	9	det	_	AlignBegin=86285|AlignEnd=86622|Gloss=DEF.ART
9	banga	banga	NOUN	_	_	7	comp:obj	_	AlignBegin=86622|AlignEnd=86960|Gloss=palm_kernel
10	//]	//]	PUNCT	_	_	6	punct	_	AlignBegin=86960|AlignEnd=86960|Gloss=PUNCT
11	//	//	PUNCT	_	_	3	punct	_	AlignBegin=86960|AlignEnd=86960|Gloss=PUNCT
{{< /conll >}}
