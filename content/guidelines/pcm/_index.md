---
layout: default
title: Naija SUD Guidelines
---

This page outlines various features and annotation conventions useful for the annotation of Naija.

# Table of contents

1. [Cleft sentences and questions](#cleft-sentences-and-questions)
2. [Be, dey, na and the zero copula](#be-dey-na-and-the-zero-copula)
3. [Compounds and phrasal verbs](#compounds-and-phrasal-verbs)
4. [Numbers and dates](#numbers-and-dates)
5. [Multi-word placenames and organizations](#multi-word-placenames-and-organizations)

---

### Cleft sentences and questions

Cleft sentences are an extremely common construction in Naija, making the `comp:cleft` relation a particularly important for the the annotation of this language. The basic cleft construction in Naija includes the phrase *na im* (it's him), followed by a verb phrase, though a number of variants exist. The following provides several such examples.

{{< conll >}}
# text_en = Laziness, that’s what destroyed you.
1	laziness	laziness	NOUN	_	_	3	dislocated	_	AlignBegin=370809|AlignEnd=371360|Gloss=laziness
2	<	<	PUNCT	_	_	1	punct	_	AlignBegin=371360|AlignEnd=371390|Gloss=PUNCT
3	na	na	PART	_	PartType=Cop	0	root	_	AlignBegin=371390|AlignEnd=371510|ExtPos=SCONJ|Gloss=be|PhraseType=Idiom
4	im	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	comp:pred	_	AlignBegin=371510|AlignEnd=371563|Gloss=NOM.SG.3
5	>+	>+	PUNCT	_	_	6	punct	_	AlignBegin=371563|AlignEnd=371563|Gloss=PUNCT
6	scatter	scatter	VERB	_	_	3	comp:cleft	_	AlignBegin=371563|AlignEnd=371990|Gloss=scatter
7	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	6	comp:obj	_	AlignBegin=371990|AlignEnd=372090|Gloss=NOM.2
8	//	//	PUNCT	_	_	3	punct	_	AlignBegin=372090|AlignEnd=372120|Gloss=PUNCT  
{{< /conll >}}

{{< conll >}}
# text_en = After all, it's Warri where you grew up.
1	after	after	ADP	_	_	4	mod:periph	_	AlignBegin=161950|AlignEnd=162120|Gloss=after
2	all	all	DET	_	_	1	comp:obj	_	AlignBegin=162120|AlignEnd=162160|Gloss=all
3	<	<	PUNCT	_	_	1	punct	_	AlignBegin=162160|AlignEnd=162190|Gloss=PUNCT
4	na	na	PART	_	PartType=Cop	0	root	_	AlignBegin=162190|AlignEnd=162340|Gloss=be
5	Warri	Warri	PROPN	_	_	4	comp:pred	_	AlignBegin=162340|AlignEnd=162524|Gloss=Warri
6	>+	>+	PUNCT	_	_	8	punct	_	AlignBegin=162524|AlignEnd=162554|Gloss=PUNCT
7	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	8	subj	_	AlignBegin=162554|AlignEnd=162677|Gloss=NOM.2
8	grow	grow	VERB	_	_	4	comp:cleft	_	AlignBegin=162677|AlignEnd=162890|Gloss=grow
9	up	up	ADP	_	_	8	compound:prt	_	AlignBegin=162890|AlignEnd=162990|Gloss=up
{{< /conll >}}

{{< conll >}}
# text_en = That's how the white people call it.
1	na	na	PART	_	PartType=Cop	0	root	_	AlignBegin=39139|AlignEnd=39299|Gloss=be
2	so	so	ADV	_	_	1	comp:pred	_	AlignBegin=39299|AlignEnd=39389|Gloss=so
3	>+	>+	PUNCT	_	_	5	punct	_	AlignBegin=39389|AlignEnd=39419|Gloss=PUNCT
4	Oyibo	Oyinbo	PROPN	_	_	5	subj	_	AlignBegin=39419|AlignEnd=39719|Gloss=foreign(er)
5	call	call	VERB	_	_	1	comp:cleft	_	AlignBegin=39719|AlignEnd=39895|Gloss=call
6	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	comp:obj	_	AlignBegin=39895|AlignEnd=39968|Gloss=ACC.SG.3
7	//	//	PUNCT	_	_	1	punct	_	AlignBegin=39968|AlignEnd=39998|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
# text_en = Hm, they are the ones who started doing it.
1	#	#	PUNCT	_	_	3	punct	_	AlignBegin=271340|AlignEnd=278340|Gloss=PUNCT
2	hm	hm	INTJ	_	_	3	discourse	_	AlignBegin=276082|AlignEnd=276400|Gloss=hm
3	na	na	PART	_	PartType=Cop	0	root	_	AlignBegin=276400|AlignEnd=276540|Gloss=be
4	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	comp:pred	_	AlignBegin=276540|AlignEnd=276680|Gloss=NOM.PL.3
5	>+	>+	PUNCT	_	_	6	punct	_	AlignBegin=276680|AlignEnd=276710|Gloss=PUNCT
6	start	start	VERB	_	_	3	comp:cleft	_	AlignBegin=276710|AlignEnd=276930|Gloss=start
7	to	to	ADP	_	_	6	comp:obl@x	_	AlignBegin=276930|AlignEnd=277060|Gloss=to
8	dey	dey	AUX	_	Aspect=Imp	7	comp:obj	_	AlignBegin=277060|AlignEnd=277208|Gloss=IPFV
9	do	do	VERB	_	_	8	comp:aux	_	AlignBegin=277208|AlignEnd=277350|Gloss=do
10	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	comp:obj	_	AlignBegin=277350|AlignEnd=277600|Gloss=ACC.SG.3
11	//	//	PUNCT	_	_	3	punct	_	AlignBegin=277600|AlignEnd=277630|Gloss=PUNCT
{{< /conll >}}

The `comp:cleft` relation is also used in questions containing interrogative words such as *who* or *where*. In such cases, the wh-word is annotated as the root, and is connected to the verb via a `comp:cleft` relation.

{{< conll >}}
# text_en = Who do you work for?
1	#	#	PUNCT	_	_	2	punct	_	AlignBegin=139780|AlignEnd=140131|Gloss=PUNCT
2	who	who	PRON	_	PronType=Int	0	root	_	AlignBegin=140131|AlignEnd=140320|Gloss=who.Q
3	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	4	subj	_	AlignBegin=140320|AlignEnd=140540|Gloss=NOM.2
4	work	work	VERB	_	_	2	comp:cleft	_	AlignBegin=140540|AlignEnd=140720|Gloss=work
5	for	for	ADP	_	_	4	comp:obl	_	AlignBegin=140720|AlignEnd=140950|Gloss=for
6	?//	?//	PUNCT	_	_	2	punct	_	AlignBegin=140950|AlignEnd=140980|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
# text_en = What is a Ponzi scheme?
1	wetin	wetin	PRON	_	PronType=Int	0	root	_	AlignBegin=134010|AlignEnd=134323|Gloss=what.Q
2	be	be	VERB	_	PartType=Cop	1	comp:cleft	_	AlignBegin=134323|AlignEnd=134462|Gloss=be
3	Ponzi	Ponzi	PROPN	_	_	4	compound	_	AlignBegin=134462|AlignEnd=134803|Gloss=Ponzi
4	Scheme	scheme	NOUN	_	_	2	comp:pred@agent	_	AlignBegin=134803|AlignEnd=135070|Gloss=scheme
5	?//	?//	PUNCT	_	_	1	punct	_	AlignBegin=135070|AlignEnd=135100|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
# text_en = Where is the money going?
1	#	#	PUNCT	_	_	2	punct	_	AlignBegin=69065|AlignEnd=69421|Gloss=PUNCT
2	where	where	ADV	_	PronType=Int	0	root	_	AlignBegin=69421|AlignEnd=69661|Gloss=where.Q
3	di	di	DET	_	Definite=Def|PronType=Art	4	det	_	AlignBegin=69661|AlignEnd=69761|Gloss=DEF.ART
4	money	money	NOUN	_	_	5	subj	_	AlignBegin=69761|AlignEnd=70024|Gloss=money
5	dey	dey	AUX	_	Aspect=Imp	2	comp:cleft	_	AlignBegin=70024|AlignEnd=70194|Gloss=IPFV
6	go	go	VERB	_	_	5	comp:aux	_	AlignBegin=70194|AlignEnd=70349|Gloss=go
7	?//	?//	PUNCT	_	_	2	punct	_	AlignBegin=70349|AlignEnd=70379|Gloss=PUNCT
{{< /conll >}}

---

### Be, dey, na and the zero copula

#### Dey

The term *dey* in Naija performs two primary roles. The first is that of a copula. In these instances, *dey* is annotated as a verb and is connected to its complement with a `comp:pred` relation, as in the examples below.

{{< conll >}}
# text_en = It's sweet.
1	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	subj	_	AlignBegin=204377|AlignEnd=204666|Gloss=it
2	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=204666|AlignEnd=204954|Gloss=be
3	sweet	sweet	ADJ	_	_	2	comp:pred	_	AlignBegin=204954|AlignEnd=205243|Gloss=sweet
{{< /conll >}}

{{< conll >}}
# text_en = I'm fine.
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	subj	_	AlignBegin=5030|AlignEnd=5260|Gloss=I
2	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=5260|AlignEnd=5490|Gloss=be
3	fine	fine	ADJ	_	_	2	comp:pred	_	AlignBegin=5490|AlignEnd=5720|Gloss=fine
{{< /conll >}}

This word is also used as an auxiliary verb which marks the imperfective aspect. In these cases, dey is annotated as an auxiliary and is connected to the following verb with a `comp:aux` relation.

{{< conll >}}
# text_en = So she was eating, sleeping, and everything.
1	so	so	ADV	_	_	3	discourse	_	AlignBegin=117700|AlignEnd=118140|Gloss=so
2	she	she	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	subj	_	AlignBegin=118418|AlignEnd=118571|Gloss=she
3	dey	dey	AUX	_	Aspect=Imp	0	root	_	AlignBegin=118601|AlignEnd=118811|Gloss=IPFV
4	chop	chop	VERB	_	_	3	comp:aux	_	AlignBegin=118811|AlignEnd=119421|Gloss=eat
5	,	,	PUNCT	_	_	6	punct	_	AlignBegin=119421|AlignEnd=119451|Gloss=,
6	dey	dey	AUX	_	Aspect=Imp	3	conj:coord	_	AlignBegin=119451|AlignEnd=119581|Gloss=IPFV
7	sleep	sleep	VERB	_	_	6	comp:aux	_	AlignBegin=119581|AlignEnd=119861|Gloss=sleep
8	,	,	PUNCT	_	_	9	punct	_	AlignBegin=119861|AlignEnd=119891|Gloss=,
9	everyting	everyting	PRON	_	_	6	conj:coord	_	AlignBegin=119891|AlignEnd=120391|Gloss=everything
{{< /conll >}}

{{< conll >}}
# text_en = You don't sell on credit?
1	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	3	subj	_	AlignBegin=131630|AlignEnd=131917|Gloss=you
2	no	no	PART	_	Polarity=Neg	3	mod	_	AlignBegin=131917|AlignEnd=132204|Gloss=NEG
3	dey	dey	AUX	_	Aspect=Imp	0	root	_	AlignBegin=132204|AlignEnd=132491|Gloss=IPFV
4	sell	sell	VERB	_	_	3	comp:aux	_	AlignBegin=132491|AlignEnd=132778|Gloss=sell
5	credit	credit	NOUN	_	_	4	mod	_	AlignBegin=132778|AlignEnd=133065|Gloss=credit
6	?	?	PUNCT	_	_	3	punct	_	AlignBegin=133065|AlignEnd=133065|Gloss=PUNCT
{{< /conll >}}

#### Be and na

In addition to *dey*, Naija contains two other words that can function as copulas: *be* and *na*. Like *dey*, *be*, is annotated as a verb, and is connected to the subject via a `subj` relationship and to the predicate via the `comp:pred` relationship. We also treat *na* in a similar fashion, though it is tagged as a particle rather than a verb.

{{< conll >}}
# text_en = She was pretending to be a city girl.
1	she	she	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	AlignBegin=75500|AlignEnd=75698|Gloss=she
2	con	con	AUX	_	Aspect=Cons	0	root	_	AlignBegin=75698|AlignEnd=75896|Gloss=CONS
3	dey	dey	AUX	_	Aspect=Imp	2	comp:aux	_	AlignBegin=75896|AlignEnd=76094|Gloss=IPFV
4	form	form	VERB	_	_	3	comp:aux	_	AlignBegin=76094|AlignEnd=76292|Gloss=form
5	sey	sey	SCONJ	_	_	4	comp:obj	_	AlignBegin=76292|AlignEnd=76490|Gloss=COMP
6	she	she	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	subj	_	AlignBegin=76490|AlignEnd=76688|Gloss=she
7	be	be	VERB	_	PartType=Cop	5	comp:obj	_	AlignBegin=76688|AlignEnd=76886|Gloss=be
8	city	city	NOUN	_	_	9	compound	_	AlignBegin=76886|AlignEnd=77084|Gloss=city
9	girl	girl	NOUN	_	_	7	comp:pred	_	AlignBegin=77084|AlignEnd=77282|Gloss=girl
10	o	o	PART	_	PartType=Disc	9	mod:emph	_	AlignBegin=77282|AlignEnd=77480|Gloss=EMPH
{{< /conll >}}

{{< conll >}}
# text_en = My daddy is a reverend, my mommy is a pastor.
1	daddy	daddy	NOUN	_	_	2	subj	_	AlignBegin=9040|AlignEnd=9340|Gloss=daddy
2	na	na	PART	_	PartType=Cop	0	root	_	AlignBegin=9340|AlignEnd=9500|Gloss=be
3	reverend	reverend	NOUN	_	_	2	comp:pred	_	AlignBegin=9500|AlignEnd=10050|Gloss=reverend
4	,	,	PUNCT	_	_	6	punct	_	AlignBegin=10020|AlignEnd=10050|Gloss=,
5	mumsie	mumsy	NOUN	_	_	6	subj	_	AlignBegin=10050|AlignEnd=10380|Gloss=mother
6	na	na	PART	_	PartType=Cop	2	parataxis:conj	_	AlignBegin=10380|AlignEnd=10490|Gloss=be
7	pastor	pastor	NOUN	_	_	6	comp:pred	_	AlignBegin=10490|AlignEnd=11100|Gloss=pastor
{{< /conll >}}

{{< conll >}}
# text_en = I'm fine.
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	subj	_	AlignBegin=5030|AlignEnd=5260|Gloss=I
2	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=5260|AlignEnd=5490|Gloss=be
3	fine	fine	ADJ	_	_	2	comp:pred	_	AlignBegin=5490|AlignEnd=5720|Gloss=fine
{{< /conll >}}

#### Zero copula

However, the copula is not always needed to link subjects to their predicates. In cases where no copula is present, the predicate is connected to its subject via a `subj` relationship.

{{< conll >}}
# text_en = It's not good.
1	e	e	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	subj	_	AlignBegin=97985|AlignEnd=98254|Gloss=it
2	no	no	PART	_	Polarity=Neg	3	mod	_	AlignBegin=98254|AlignEnd=98522|Gloss=NEG
3	good	good	ADJ	_	_	0	root	_	AlignBegin=98522|AlignEnd=98791|Gloss=good
{{< /conll >}}

{{< conll >}}
# text_en = It's plenty.
1	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	subj	_	AlignBegin=74280|AlignEnd=74920|Gloss=it
2	plenty	plenty	ADJ	_	_	0	root	_	AlignBegin=74920|AlignEnd=75560|Gloss=plenty
{{< /conll >}}

---

### Compounds and phrasal verbs

Our annotation of Naija makes frequent use of the `compound` relation. In our annotation system, this relation is systematically applied to relationships between two nouns in which one of them acts as a form of modifier. In this sense, `compound` functions much like the `mod` relation, except that it links two nouns together rather than a noun to an adjective.

{{< conll >}}
# text_en = It's not food for kids?
1	no	no	PART	_	Polarity=Neg	2	mod	_	AlignBegin=62165|AlignEnd=62648|Gloss=NEG
2	be	be	VERB	_	PartType=Cop	0	root	_	AlignBegin=62648|AlignEnd=63130|Gloss=be
3	children	child	NOUN	_	Number=Plur	4	compound	_	AlignBegin=63130|AlignEnd=63612|Gloss=child.PL
4	food	food	NOUN	_	_	2	comp:pred	_	AlignBegin=63612|AlignEnd=64095|Gloss=food
5	?	?	PUNCT	_	_	2	punct	_	AlignBegin=64095|AlignEnd=64095|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
# text_en = I know banga soup.
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	subj	_	AlignBegin=59955|AlignEnd=60188|Gloss=I
2	know	know	VERB	_	_	0	root	_	AlignBegin=60188|AlignEnd=60420|Gloss=know
3	banga	banga	NOUN	_	_	4	compound	_	AlignBegin=60420|AlignEnd=60652|Gloss=palm_kernel
4	soup	soup	NOUN	_	_	2	comp:obj	_	AlignBegin=60652|AlignEnd=60885|Gloss=soup
5	.	.	PUNCT	_	_	2	punct	_	AlignBegin=60885|AlignEnd=60885|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
# text_en = She's a city girl.
1	she	she	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	AlignBegin=76490|AlignEnd=76688|deprel_main_pred=subj|Gloss=she|head_MST=8
2	be	be	VERB	_	PartType=Cop	0	root	_	AlignBegin=76688|AlignEnd=76886|deprel_main_pred=comp:obj|Gloss=be|head_MST=5
3	city	city	NOUN	_	_	4	compound	_	AlignBegin=76886|AlignEnd=77084|deprel_main_pred=compound|Gloss=city|head_MST=10
4	girl	girl	NOUN	_	_	2	comp:pred	_	AlignBegin=77084|AlignEnd=77282|deprel_main_pred=comp:pred|Gloss=girl|head_MST=8
{{< /conll >}}

The `compound` relation is also used in some relations between nouns and adjectives, such as *dry cleaner*, which are considered fixed expressions whose meaning cannot be directly understood from its constituent parts

{{< conll >}}
# text_en = You can take it to the dry cleaner.
1	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	2	subj	_	AlignBegin=119950|AlignEnd=120306|deprel_main_pred=subj|Gloss=NOM.2|head_MST=2
2	fit	fit	AUX	_	Mood=Pot	0	root	_	AlignBegin=120306|AlignEnd=120661|deprel_main_pred=root|Gloss=ABIL|head_MST=0
3	carry	carry	VERB	_	_	2	comp:aux	_	AlignBegin=120661|AlignEnd=121017|deprel_main_pred=comp:aux|Gloss=carry|head_MST=2
4	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	3	comp:obj	_	AlignBegin=121017|AlignEnd=121373|deprel_main_pred=comp:obj|Gloss=ACC.SG.3|head_MST=3
5	go	go	VERB	_	_	3	compound:svc	_	AlignBegin=121373|AlignEnd=121729|deprel_main_pred=compound:svc|Gloss=go|head_MST=3
6	dry	dry	ADJ	_	_	7	compound	_	AlignBegin=121729|AlignEnd=122084|deprel_main_pred=mod|Gloss=dry|head_MST=7
7	cleaner	cleaner	NOUN	_	_	5	comp:obj	_	AlignBegin=122084|AlignEnd=122440|deprel_main_pred=comp:obj|Gloss=cleaner|head_MST=5
{{< /conll >}}

The subtype `compound:prt` is also used to connect the components of various phrasal verbs inherited from English.

{{< conll >}}
# text_en = Just after a minute, bring it down.
1	just	just	ADV	_	_	2	mod	_	AlignBegin=226630|AlignEnd=226860|Gloss=just
2	after	after	ADP	_	_	7	mod:periph	_	AlignBegin=226860|AlignEnd=227130|Gloss=after
3	one	one	NUM	_	NumType=Card	4	det:num	_	AlignBegin=227130|AlignEnd=227280|Gloss=one
4	minute	minute	NOUN	_	_	2	comp:obj	_	AlignBegin=227280|AlignEnd=227680|Gloss=minute
5	,	,	PUNCT	_	_	2	punct	_	AlignBegin=227680|AlignEnd=227680|Gloss=PUNCT
6	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	7	subj	_	AlignBegin=227680|AlignEnd=227792|Gloss=NOM.2
7	bring	bring	VERB	_	_	0	root	_	AlignBegin=227792|AlignEnd=227990|Gloss=bring
8	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	7	comp:obj	_	AlignBegin=227990|AlignEnd=228120|Gloss=ACC.SG.3
9	down	down	ADP	_	_	7	compound:prt	_	AlignBegin=228120|AlignEnd=228290|Gloss=down
10	.	.	PUNCT	_	_	7	punct	_	AlignBegin=228290|AlignEnd=228290|Gloss=PUNCT
{{< /conll >}}

Please note that other languages might use the `compound` relation in a more limited set of contexts, if at all. For a more general overview of this relation, please consult the dedicated page.

---

### Numbers and dates

Numbers composed of more than one word, such as *five hundred* or *six thousand* are primarily  chained together with the `flat` relation. If the number contains the coordinating conjunction *and*, such as in *one hundred and one*, the integer directly preceding the coordinating conjunction is connected to one directly following it with a `conj:coord` relation.

{{< conll >}}
# text_en = Then housing and clothing for sixty five million.
1	#	#	PUNCT	_	_	3	punct	_	AlignBegin=136812|AlignEnd=137203|Gloss=PUNCT
2	den	dem	ADV	_	_	3	mod:periph	_	AlignBegin=137203|AlignEnd=137405|Gloss=den
3	housing	housing	NOUN	_	_	0	root	_	AlignBegin=137405|AlignEnd=137841|Gloss=housing
4	and	and	CCONJ	_	_	5	cc	_	AlignBegin=137841|AlignEnd=138054|Gloss=and
5	clothing	clothing	NOUN	_	_	3	conj:coord	_	AlignBegin=138054|AlignEnd=138431|Gloss=clothing
6	of	of	ADP	_	_	5	mod	_	AlignBegin=138431|AlignEnd=138534|Gloss=of
7	sixty	sixty	NUM	_	NumType=Card	6	comp:obj	_	AlignBegin=138534|AlignEnd=138941|Gloss=sixty.CARD
8	five	five	NUM	_	NumType=Card	7	flat	_	AlignBegin=138941|AlignEnd=139261|Gloss=five.CARD
9	million	million	NUM	_	NumType=Card	8	flat	_	AlignBegin=139261|AlignEnd=139574|Gloss=million.CARD
10	//	//	PUNCT	_	_	3	punct	_	AlignBegin=139574|AlignEnd=139604|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
# text_en = You invest one hundred and thirty seven thousand.
1	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	2	subj	_	AlignBegin=98152|AlignEnd=98230|Gloss=NOM.2
2	invest	invest	VERB	_	_	0	root	_	AlignBegin=98230|AlignEnd=98757|Gloss=invest
3	#	#	PUNCT	_	_	4	punct	_	AlignBegin=98757|AlignEnd=98980|Gloss=PUNCT
4	one	one	NUM	_	NumType=Card	2	comp:obj	_	AlignBegin=98980|AlignEnd=99090|Gloss=one
5	hundred	hundred	NUM	_	NumType=Card	4	flat	_	AlignBegin=99090|AlignEnd=99390|Gloss=hundred.CARD
6	and	and	CCONJ	_	_	7	cc	_	AlignBegin=99390|AlignEnd=99520|Gloss=and
7	thirty	thirty	NUM	_	NumType=Card	5	conj:coord	_	AlignBegin=99520|AlignEnd=99760|Gloss=thirty.CARD
8	seven	seven	NUM	_	NumType=Card	7	flat	_	AlignBegin=99760|AlignEnd=100080|Gloss=seven.CARD
9	thousand	thousand	NUM	_	NumType=Card	8	flat	_	AlignBegin=100080|AlignEnd=100448|Gloss=thousand.CARD
{{< /conll >}}

If the number contains a decimal, the *point* is marked as a noun and is integrated into the number with a simple `flat` relation.  

{{< conll >}}
# text_en = One hundred and fifty six point six billion.
1	one	one	NUM	_	NumType=Card	0	det:num	_	AlignBegin=17090|AlignEnd=17300|Gloss=one
2	hundred	hundred	NUM	_	NumType=Card	1	flat	_	AlignBegin=17300|AlignEnd=17580|Gloss=hundred.CARD
3	and	and	CCONJ	_	_	4	cc	_	AlignBegin=17580|AlignEnd=17700|Gloss=and
4	fifty	fifty	NUM	_	NumType=Card	2	conj:coord	_	AlignBegin=17700|AlignEnd=18000|Gloss=fifty.CARD
5	six	six	NUM	_	NumType=Card	4	flat	_	AlignBegin=18000|AlignEnd=18300|Gloss=six.CARD
6	point	point	NOUN	_	_	5	flat	_	AlignBegin=18300|AlignEnd=18480|Gloss=point
7	six	six	NUM	_	NumType=Card	6	flat	_	AlignBegin=18480|AlignEnd=18785|Gloss=six.CARD
8	billion	billion	NUM	_	_	7	flat	_	AlignBegin=19379|AlignEnd=19980|Gloss=billion
{{< /conll >}}

If numerals are listed a sequence, such as in telephone numbers, the constituents are chained together with the `conj:coord` relation.

{{< conll >}}
# text_en = Zero nine zero five nine six five three two nine.
1	#	#	PUNCT	_	_	2	punct	_	AlignBegin=573880|AlignEnd=574100|Gloss=PUNCT
2	zero	zero	NUM	_	NumType=Card	0	root	_	AlignBegin=574100|AlignEnd=574380|Gloss=zero.CARD
3	nine	nine	NUM	_	NumType=Card	2	conj:coord	_	AlignBegin=574380|AlignEnd=574590|Gloss=nine.CARD
4	zero	zero	NUM	_	NumType=Card	3	conj:coord	_	AlignBegin=574590|AlignEnd=575100|Gloss=zero.CARD
5	nine	nine	NUM	_	NumType=Card	4	conj:coord	_	AlignBegin=575100|AlignEnd=575394|Gloss=nine.CARD
6	five	five	NUM	_	NumType=Card	5	conj:coord	_	AlignBegin=575394|AlignEnd=575700|Gloss=five.CARD
7	#	#	PUNCT	_	_	8	punct	_	AlignBegin=575700|AlignEnd=576060|Gloss=PUNCT
8	nine	nine	NUM	_	NumType=Card	6	conj:coord	_	AlignBegin=576060|AlignEnd=576294|Gloss=nine.CARD
9	six	six	NUM	_	NumType=Card	8	conj:coord	_	AlignBegin=576294|AlignEnd=576640|Gloss=six.CARD
10	five	five	NUM	_	NumType=Card	9	conj:coord	_	AlignBegin=576640|AlignEnd=576930|Gloss=five.CARD
11	three	three	NUM	_	NumType=Card	10	conj:coord	_	AlignBegin=576930|AlignEnd=577143|Gloss=three.CARD
12	two	two	NUM	_	NumType=Card	11	conj:coord	_	AlignBegin=577143|AlignEnd=577280|Gloss=two.CARD
13	nine	nine	NUM	_	NumType=Card	12	conj:coord	_	AlignBegin=577280|AlignEnd=577429|Gloss=nine.CARD
{{< /conll >}}

Note that references to radio stations which use this format nevertheless contain a `flat` relation. This is because we consider that the frequency number effectively functions as a title.

{{< conll >}}
# text_en = Bronze FM, one O one point five
1	Bronze	bronze	NOUN	_	_	0	comp:obj	_	AlignBegin=166800|AlignEnd=167090|ExtPos=PROPN|Gloss=bronze|PhraseType=Title
2	FM	FM	NOUN	_	_	1	flat	_	AlignBegin=167090|AlignEnd=167559|Gloss=FM|InTitle=Yes
3	|a	|a	PUNCT	_	_	4	punct	_	AlignBegin=167559|AlignEnd=167589|Gloss=PUNCT
4	one	one	NUM	_	NumType=Card	2	mod:appos	_	AlignBegin=167589|AlignEnd=167780|Gloss=one
5	o	o	NUM	_	_	4	flat	_	AlignBegin=167780|AlignEnd=167870|Gloss=o
6	one	one	NUM	_	NumType=Card	5	flat	_	AlignBegin=167870|AlignEnd=168040|Gloss=one
7	dot	dot	NOUN	_	_	6	flat	_	AlignBegin=168040|AlignEnd=168260|Gloss=dot
8	five	five	NUM	_	NumType=Card	7	flat	_	AlignBegin=168260|AlignEnd=168450|Gloss=five.CARD
{{< /conll >}}

When annotating dates, the `mod:appos` relation is used to connect the month to the numerical day. Meanwhile, the year is connected to the month using the `mod` relation.  

{{< conll >}}
# text_en = That this should be done before August twenty fourth, two thousand and eighteen.
1	sey	sey	SCONJ	_	_	2	discourse	_	AlignBegin=49550|AlignEnd=49730|Gloss=COMP
2	make	make	AUX	_	Mood=Opt	0	root	_	AlignBegin=49760|AlignEnd=50050|Gloss=SBJV
3	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	subj	_	AlignBegin=50050|AlignEnd=50265|Gloss=NOM.PL.3
4	do	do	VERB	_	_	2	comp:aux	_	AlignBegin=50265|AlignEnd=50510|Gloss=do
5	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	comp:obj	_	AlignBegin=50510|AlignEnd=50717|Gloss=ACC.SG.3
6	#	#	PUNCT	_	_	7	punct	_	AlignBegin=50717|AlignEnd=51078|Gloss=PUNCT
7	before	before	ADP	_	_	4	mod	_	AlignBegin=51078|AlignEnd=51590|Gloss=before
8	August	August	PROPN	_	_	7	comp:obj	_	AlignBegin=51590|AlignEnd=52162|Gloss=August
9	#	#	PUNCT	_	_	10	punct	_	AlignBegin=52162|AlignEnd=52331|Gloss=PUNCT
10	twenty	twenty	NUM	_	NumType=Card	8	mod:appos	_	AlignBegin=52331|AlignEnd=52600|Gloss=twenty.CARD
11	fourth	fourth	ADJ	_	NumType=Ord	10	flat	_	AlignBegin=52600|AlignEnd=53020|Gloss=fourth.ORD
12	two	two	NUM	_	NumType=Card	8	mod	_	AlignBegin=53020|AlignEnd=53224|Gloss=two.CARD
13	thousand	thousand	NUM	_	NumType=Card	12	flat	_	AlignBegin=53224|AlignEnd=53570|Gloss=thousand.CARD
14	and	and	CCONJ	_	_	15	cc	_	AlignBegin=53570|AlignEnd=53813|Gloss=and
15	eighteen	eighteen	NUM	_	NumType=Card	13	conj:coord	_	AlignBegin=53813|AlignEnd=54463|Gloss=eighteen.CARD
16	//	//	PUNCT	_	_	2	punct	_	AlignBegin=54463|AlignEnd=54493|Gloss=PUNCT
{{< /conll >}}

---

### Multi-word placenames and organizations

In Naija, multi-word placenames and organizations are currently annotated with a simple `flat` relation, though their constituents retain their typical parts of speech.

{{< conll >}}
# text_en = Then I came to Port Harcourt in twenty fourteen.
1	#	#	PUNCT	_	_	3	punct	_	AlignBegin=102090|AlignEnd=102457|Gloss=PUNCT
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	subj	_	AlignBegin=102457|AlignEnd=102537|Gloss=NOM.SG.1
3	con	con	AUX	_	Aspect=Cons	0	root	_	AlignBegin=102537|AlignEnd=102657|Gloss=CONS
4	come	come	VERB	_	_	3	comp:aux	_	AlignBegin=102657|AlignEnd=102837|Gloss=come
5	Port	Port	NOUN	_	_	4	comp:obj	_	AlignBegin=102837|AlignEnd=102947|ExtPos=PROPN|Gloss=Port|PhraseType=Title
6	Harcourt	Harcourt	PROPN	_	_	5	flat	_	AlignBegin=102947|AlignEnd=103137|Gloss=Harcourt|InTitle=Yes
7	for	for	ADP	_	_	4	mod	_	AlignBegin=103137|AlignEnd=103261|Gloss=for
8	twenty	twenty	NUM	_	NumType=Card	7	comp:obj	_	AlignBegin=103261|AlignEnd=103704|Gloss=twenty.CARD
9	fourteen	fourteen	NUM	_	NumType=Card	8	flat	_	AlignBegin=103704|AlignEnd=104330|Gloss=fourteen.CARD
10	//	//	PUNCT	_	_	3	punct	_	AlignBegin=104330|AlignEnd=104360|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
# text_en = They gave birth to me in Wuse General Hospital.
1	#	#	PUNCT	_	_	3	punct	_	AlignBegin=4080|AlignEnd=4899|Gloss=PUNCT
2	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	subj	_	AlignBegin=4899|AlignEnd=5016|Gloss=NOM.PL.3
3	bin	bin	AUX	_	Tense=Past	0	root	_	AlignBegin=5016|AlignEnd=5131|Gloss=PST
4	born	born	VERB	_	_	3	comp:aux	_	AlignBegin=5131|AlignEnd=5296|Gloss=give_birth
5	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	4	comp:obj	_	AlignBegin=5296|AlignEnd=5360|Gloss=ACC.SG.1
6	for	for	ADP	_	_	4	comp:obl	_	AlignBegin=5360|AlignEnd=5856|Gloss=for
7	Wuse	Wuse	PROPN	_	_	6	comp:obj	_	AlignBegin=5856|AlignEnd=6183|ExtPos=PROPN|Gloss=Wuse|PhraseType=Title
8	General	general	ADJ	_	_	7	flat	_	AlignBegin=6183|AlignEnd=6580|Gloss=general|InTitle=Yes
9	Hospital	hospital	NOUN	_	_	8	flat	_	AlignBegin=6580|AlignEnd=7052|Gloss=hospital|InTitle=Yes
10	//	//	PUNCT	_	_	3	punct	_	AlignBegin=7052|AlignEnd=7082|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
# text_en = Manchester United, oh this sports club!
1	Manchester	Manchester	PROPN	_	_	7	dislocated	_	AlignBegin=118620|AlignEnd=119365|ExtPos=PROPN|Gloss=Manchester|PhraseType=Title
2	United	United	ADJ	_	_	1	flat	_	AlignBegin=119365|AlignEnd=120036|Gloss=United|InTitle=Yes
3	<	<	PUNCT	_	_	1	punct	_	AlignBegin=120036|AlignEnd=120066|Gloss=PUNCT
4	oh	oh	INTJ	_	_	7	discourse	_	AlignBegin=120066|AlignEnd=120355|Gloss=oh
5	dis	dis	DET	_	Number=Sing|PronType=Dem	7	det	_	AlignBegin=120355|AlignEnd=120625|Gloss=SG.DEM
6	ball	ball	NOUN	_	_	7	compound	_	AlignBegin=120625|AlignEnd=120905|Gloss=ball
7	club	club	NOUN	_	_	0	root	_	AlignBegin=120905|AlignEnd=121280|Gloss=club
8	!//	!//	PUNCT	_	_	7	punct	_	AlignBegin=121280|AlignEnd=121310|Gloss=PUNCT
{{< /conll >}}

### Titles and honorifics

Honorifics such as *Mister* or *President* are connected to the names they precede with a simple `flat` relation.

{{< conll >}}
# text_en = Mister Sunday Ajayi
1	Mister	Mister	NOUN	_	_	0	conj:appos	_	AlignBegin=228030|AlignEnd=228400|Gloss=Mister
2	Sunday	Sunday	PROPN	_	_	1	flat	_	AlignBegin=228400|AlignEnd=228820|Gloss=Sunday
3	Ajayi	Ajayi	PROPN	_	_	2	flat	_	AlignBegin=228820|AlignEnd=229306|Gloss=Ajayi
{{< /conll >}}

{{< conll >}}
# text_en = President Joe Biden
1	Presido	presido	NOUN	_	_	0	subj	_	AlignBegin=17490|AlignEnd=17830|Gloss=president
2	Joe	Joe	PROPN	_	_	1	flat	_	AlignBegin=17830|AlignEnd=18270|Gloss=Joe
3	Biden	Biden	PROPN	_	_	2	flat	_	AlignBegin=18270|AlignEnd=18540|Gloss=Biden
{{< /conll >}}

However, this is not the case when a title is connected to a determiner or otherwise modified in some way. In these cases, a `mod:appos` relation is used.

{{< conll >}}
# text_en = The American president Joe Biden.
1	di	di	DET	_	Definite=Def|PronType=Art	2	det	_	AlignBegin=69661|AlignEnd=69761|Gloss=DEF.ART
2	Presido	presido	NOUN	_	_	0	subj	_	AlignBegin=17490|AlignEnd=17830|Gloss=president
3	for	for	ADP	_	_	2	mod	_	AlignBegin=90227|AlignEnd=90390|Gloss=for
4	America	America	PROPN	_	_	3	comp:obj	_	AlignBegin=17830|AlignEnd=18270|Gloss=America
5	Joe	Joe	PROPN	_	_	2	mod:appos	_	AlignBegin=17830|AlignEnd=18270|Gloss=Joe
6	Biden	Biden	PROPN	_	_	5	flat	_	AlignBegin=18270|AlignEnd=18540|Gloss=Biden
{{< /conll >}}

Official multi-word titles such as *Minister of Foreign Affairs* are treated as titles (see [here](../u/extpos/idioms_titles) for a detailed guide). The head of the title is given an ExtPos of `PROPN`.

{{< conll >}}
# text_en = The Minister of Foreign Affairs, Geoffrey Onyeama Godfrey.
1	di	di	DET	_	Definite=Def|PronType=Art	2	det	_	AlignBegin=46977|AlignEnd=47085|Gloss=DEF.ART
2	Minister	minister	NOUN	_	_	0	comp:obj	_	AlignBegin=47085|AlignEnd=47482|ExtPos=PROPN|Gloss=minister|PhraseType=Title
3	of	of	ADP	_	_	2	mod	_	AlignBegin=47482|AlignEnd=47587|Gloss=of|InTitle=Yes
4	Foreign	foreign	ADJ	_	_	5	mod	_	AlignBegin=47587|AlignEnd=47827|Gloss=foreign|InTitle=Yes
5	Affairs	affair	NOUN	_	Number=Plur	3	comp:obj	_	AlignBegin=47827|AlignEnd=48301|Gloss=affair.PL|InTitle=Yes
6	Geoffrey	Geoffrey	PROPN	_	_	3	mod:appos	_	AlignBegin=48331|AlignEnd=48727|Gloss=Geoffrey
7	Onyeama	Onyeama	PROPN	_	_	6	flat	_	AlignBegin=48727|AlignEnd=49343|Gloss=Onyeama
8	Godfrey	Godfrey	PROPN	_	_	7	flat	_	AlignBegin=49343|AlignEnd=49799|Gloss=Godfrey
{{< /conll >}}
