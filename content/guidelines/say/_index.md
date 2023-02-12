---
layout: default
title: Zaar SUD Guidelines
src: guidelines/say/_index.md
---

This page outlines various features specific to Zaar.

# comp

`comp:ben`, `comp:goal`, `comp:loc`, `comp:source` are specific relations used in Zaar. 

## comp:ben
For example, the `comp:ben` relation is used when the complement is the beneficiary of the action, which is different from the `comp:obl` relation, because the complement is not syntactically nor morphologically marked. Another reason is based on the order : the dependant of a `comp:obj` relation can not stand before the dependant of a `comp:obl` relation in SUD. 

### Example of a `comp:ben` relation
{{< conll >}}
# text_en =  He said that if it became (a game) he would ask you.
1	wéy	wéy	PART	_	Mood=Qot	4	discourse	_	AlignBegin=185007|AlignEnd=185162|Gloss=EVD
2	yáː	yáː	AUX	_	Mood=Cnd|Number=Sing|Person=3	4	parataxis@mod	_	AlignBegin=185162|AlignEnd=185317|Gloss=3SG.COND
3	nǎː	naː	VERB	_	VerbForm=Fin	2	comp:aux	_	AlignBegin=185317|AlignEnd=185473|Gloss=become
4	wò	wò	AUX	_	Number=Sing|Person=3|Tense=Fut	0	root	_	AlignBegin=185473|AlignEnd=185621|Gloss=3SG.FUT
5-6	ʧetkə	_	_	_	_	_	_	_	_
5	ʧet	ʧet	VERB	_	VerbForm=Fin	4	comp:aux	_	AlignBegin=185621|AlignEnd=185695|Gloss=ask
6	=kə	=kə	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	5	comp:ben	_	AlignBegin=185695|AlignEnd=185769|Gloss=2SG.OBJ
7	//	//	PUNCT	_	_	4	punct	_	AlignBegin=185769|AlignEnd=185918|Gloss=PUNCT
{{< /conll >}}

## comp:goal
In the same way,  the `comp:goal` relation is used when the complement is the goal of the action, and will also be different from the `comp:obj` relation. 

### Example of a comp:goal relation
{{< conll >}}
# text_en =  If you enter the room, they will enter and follow you into the room.
1	kyáː	yáː	AUX	_	Mood=Cnd|Number=Sing|Person=2	5	parataxis@mod	_	AlignBegin=251131|AlignEnd=251297|Gloss=2SG.COND
2	ndá	nda	VERB	_	VerbForm=Fin	1	comp:aux	_	AlignBegin=251297|AlignEnd=251463|Gloss=enter
3	vìːn	vìːn	NOUN	_	_	2	comp:goal	_	AlignBegin=251463|AlignEnd=251629|Gloss=room
4	<	<	PUNCT	_	_	1	punct	_	AlignBegin=251629|AlignEnd=251795|Gloss=PUNCT
5	tə́	á	AUX	_	Aspect=Aor|Number=Plur|Person=3	0	root	_	AlignBegin=251795|AlignEnd=251978|Gloss=3PL.AOR
6	ʃîː	ʃiː	VERB	_	VerbForm=Fin	5	comp:aux	_	AlignBegin=251978|AlignEnd=252161|Gloss=get_down
7	tə́	á	AUX	_	Aspect=Aor|Number=Plur|Person=3	5	parataxis@conj	_	AlignBegin=252161|AlignEnd=252344|Gloss=3PL.AOR
8-9	lǎːpkə	_	_	_	_	_	_	_	_
8	lǎːp	láːp	VERB	_	VerbForm=Fin	7	comp:obj	_	AlignBegin=252344|AlignEnd=252436|Gloss=follow
9	=kə	=kə	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	8	comp:obj	_	AlignBegin=252436|AlignEnd=252527|Gloss=2SG.OBJ
10	ɗa	ɗa	ADP	_	_	8	comp:obl	_	AlignBegin=252527|AlignEnd=252710|ExtPos=ADP|Gloss=at|Idiom=Yes
11	gìp	gìp	ADP	_	_	10	unk	_	AlignBegin=252710|AlignEnd=252893|Gloss=inside|InIdiom=Yes
12	vìːnì	vìːn	NOUN	_	Definite=Ind	10	comp:obj	_	AlignBegin=252893|AlignEnd=252985|Gloss=room.INDF
13	//	//	PUNCT	_	_	5	punct	_	AlignBegin=253076|AlignEnd=253260|Gloss=PUNCT
{{< /conll >}}

# compound

## compound:prt

## compound:redup

## compound:svc
The `compound:svc` relation defines a serial verb construction that is normally connecting two (different) verbs. In Zaar, this relation can also connect two auxiliaries that are repeated. 

### Example of a serial verb construction with auxiliaries

{{< conll >}}
text_en =  You see, we would even go and spend the night in Pankshin and come back, no?
1	kyáː	yáː	AUX	_	Mood=Cnd|Number=Sing|Person=2	5	parataxis@discourse	_	AlignBegin=267490|AlignEnd=267585|Gloss=2SG.COND
2	yél	yel	VERB	_	VerbForm=Fin	1	comp:aux	_	AlignBegin=267585|AlignEnd=267680|Gloss=see
3	<	<	PUNCT	_	_	1	punct	_	AlignBegin=267680|AlignEnd=267774|Gloss=PUNCT
4	hár	hár	ADP	_	_	5	mod	_	AlignBegin=267774|AlignEnd=267940|Gloss=up_to
5	má	wò	AUX	_	Number=Plur|Person=1|Tense=Fut	0	root	_	AlignBegin=267940|AlignEnd=268106|Gloss=1PL.FUT
6	ɗyǎː	ɗyáː	VERB	_	VerbForm=Fin	5	comp:aux	_	AlignBegin=268106|AlignEnd=268272|Gloss=be_able|SVC=Yes
7	má	wò	AUX	_	Number=Plur|Person=1|Tense=Fut	5	compound:svc	_	AlignBegin=268272|AlignEnd=268438|Gloss=1PL.FUT
8	ɬǐː	ɬə	VERB	_	Aspect=Res|VerbForm=Fin	7	comp:aux	_	AlignBegin=268438|AlignEnd=268521|Gloss=go.RES
9	má	wò	AUX	_	Number=Plur|Person=1|Tense=Fut	7	compound:svc	_	AlignBegin=268604|AlignEnd=268770|Gloss=1PL.FUT
10	ɬə́	ɬə	VERB	_	VerbForm=Fin	9	comp:aux	_	AlignBegin=268770|AlignEnd=268936|Gloss=go|SVC=Yes
11	mbûɗíː	mbút	VERB	_	Aspect=Res|VerbForm=Fin	10	compound:svc	_	AlignBegin=268936|AlignEnd=269019|Gloss=spend_night
12	Pànʃín	Pànʃín	PROPN	_	_	11	comp:loc	_	AlignBegin=269102|AlignEnd=269266|Gloss=Pankshin
13	mə̀	á	AUX	_	Aspect=Aor|Number=Plur|Person=1	9	parataxis@conj	_	AlignBegin=269266|AlignEnd=269451|Gloss=1PL.AOR
14-16	sûmíɗi	_	_	_	_	_	_	_	_
14	sû	su	VERB	_	VerbForm=Fin	13	comp:aux	_	AlignBegin=269451|AlignEnd=269513|Gloss=return
15	=mí	=mí	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	14	comp:obj	_	AlignBegin=269513|AlignEnd=269575|Gloss=1PL.OBJ
16	ɗi	ɗi	PART	_	_	14	compound:prt	_	AlignBegin=269575|AlignEnd=269636|Gloss=CTP
17-18	ŋǎːn	_	_	_	_	_	_	_	_
17	ŋǎː	ŋaː	PART	_	PartType=Int	5	mod	_	AlignBegin=269636|AlignEnd=269728|Gloss=VRT
18	hŋ́	hŋ́	PART	_	Polarity=Neg	5	mod	_	AlignBegin=269728|AlignEnd=269821|Gloss=NEG
19	?//	?//	PUNCT	_	_	5	punct	_	AlignBegin=269821|AlignEnd=270005|Gloss=PUNCT
{{< /conll >}}

