---
layout: default
title: Zaar SUD Guidelines
src: guidelines/say/_index.md
---

This page outlines various features specific to Zaar.

## compound:svc

The `compound:svc` relation defines a serial verb construction that is normally connecting two (different) verbs. In Zaar, this relation can also connect two auxiliaries that are repeated. 

Example

{{< conll >}}
# text_en =  You see, we would even go and spend the night in Pankshin and come back, no?
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
{{< /conll >}
