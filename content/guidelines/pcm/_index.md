---
layout: default
title: Naija SUD Guidelines
---

This page outlines various features specific to Naija.

### Annotation of dey

The term dey in Naija performs two primary roles. The first is that of a copula. In these instances, dey is annotated as a verb and is connected to its complement with a `comp:pred` relation, as in the examples below.

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

This term is also used as an auxiliary verb which marks the imperfective aspect. In these cases, dey is annotated as an auxiliary and is connected to the following verb with a `comp:aux` relation.

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

### Zero copula

In Naija, the copula is not always needed to link subjects to their predicates. In cases where no copula is present, the predicate is connected to its subject via a `subj` relationship.

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

### The copulas be, na, and dey

However, Naija also contains three words which can effectively function as copulas. The first, *be*, is annotated as a verb, and is connected to the subject via a `subj` relationship and to the predicate via the `comp:pred` relationship. The verb *dey* follows the same scheme when used as a copula. We also treat *na* in a similar fashion, though it is tagged as a particle rather than a verb.

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

### Compounds and phrasal verbs

In our annotations of Naija, the `compound` relation is frequently used for noun compounds such as "phone book". In these contexts, `compound` functions much like the `mod` relation, except that it links two nouns together rather than a noun to an adjective.

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

The `compound` relation is also used un numbers containing more than one word.

{{< conll >}}
# text_en = Eight hundred?
1	eight	eight	NUM	_	NumType=Card	2	compound	_	AlignBegin=241315|AlignEnd=242108|deprel_main_pred=compound|Gloss=eight.CARD|head_MST=2
2	hundred	hundred	NUM	_	NumType=Card	0	root	_	AlignBegin=242108|AlignEnd=242900|deprel_main_pred=root|Gloss=hundred.CARD|head_MST=0
3	?	?	PUNCT	_	_	2	punct	_	AlignBegin=242900|AlignEnd=242900|deprel_main_pred=punct|Gloss=PUNCT|head_MST=2
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
