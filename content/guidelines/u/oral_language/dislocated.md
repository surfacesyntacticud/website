---
layout: default
title: dislocated
---

The `dislocated` relation is used to analyze detached elements that do not enter in the core grammatical relations of a sentence.

>French

{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_fr = ça a duré dix ans le silence autour de moi
      # text_en = çthe silence around me lasted for ten years
      1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	subj	_	Gloss=that
      2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=has
      3	duré	durer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	comp:aux	_	Gloss=lasted
      4	dix	dix	NUM	_	Number=Plur	5	det	_	Gloss=ten
      5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	comp:obj	_	Gloss=years
      6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Gloss=the
      7	silence	silence	NOUN	_	Gender=Masc|Number=Sing	2	dislocated	_	Gloss=silence
      8	autour	autour	ADV	_	_	7	mod	_	Gloss=around
      9	de	de	ADP	_	_	8	comp:obl	_	Gloss=of
      10	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	9	comp:obj	_	Gloss=me
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}

>Naija
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # sent_id = JOS_21_Marriage-Talk-With-Oscar-1_DG__167
      # sound_url = http://www.tal.univ-paris3.fr/trameur/iTrameur-naija/mp3/JOS_21_Marriage-Talk-With-Oscar-1_DG.mp3
      # speaker_id = Sp139
      # text = anyting wey go disturb my sleep < I no dey like am //
      # text_en = Anything that will disturb my sleep, I don't like it.
      # text_ortho = Anyting wey go disturb my sleep, I no dey like am.
      1	anyting	anyting	PRON	_	_	10	dislocated	_	AlignBegin=307870|AlignEnd=308103|Gloss=anything
      2	wey	wey	SCONJ	_	_	1	mod@relcl	_	AlignBegin=308103|AlignEnd=308335|Gloss=REL
      3	go	go	AUX	_	Aspect=Prosp	2	comp:obj	_	AlignBegin=308335|AlignEnd=308568|Gloss=PROSP
      4	disturb	disturb	VERB	_	_	3	comp:aux	_	AlignBegin=308568|AlignEnd=308801|Gloss=disturb
      5	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	6	mod:poss	_	AlignBegin=308801|AlignEnd=309034|Gloss=POSS.SG.1
      6	sleep	sleep	VERB	_	_	4	comp:obj	_	AlignBegin=309034|AlignEnd=309266|Gloss=sleep
      7	<	<	PUNCT	_	_	1	punct	_	AlignBegin=309266|AlignEnd=309266|Gloss=PUNCT
      8	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	subj	_	AlignBegin=309266|AlignEnd=309499|Gloss=NOM.SG.1
      9	no	no	PART	_	Polarity=Neg	10	mod	_	AlignBegin=309499|AlignEnd=309732|Gloss=NEG
      10	dey	dey	AUX	_	Aspect=Imp	0	root	_	AlignBegin=309732|AlignEnd=309965|Gloss=IPFV
      11	like	like	VERB	_	_	10	comp:aux	_	AlignBegin=309965|AlignEnd=310197|Gloss=like
      12	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	11	comp:obj	_	AlignBegin=310197|AlignEnd=310430|Gloss=ACC.SG.3
      13	//	//	PUNCT	_	_	10	punct	_	AlignBegin=310430|AlignEnd=310430|Gloss=PUNCT
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}

This relation can also be used for pronouns which are detached from the core syntactic structure of an utterance, such as French tonic pronouns.

>French

{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_fr = Moi je pense qu' il vient pas
      # text_en = I think he is not coming
      1	Moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	3	dislocated	_	Gloss=me
      2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	subj	_	Gloss=I
      3	pense	penser	VERB	_	Number=Sing|Person=1	0	root	_	Gloss=think
      4	qu'	que	SCONJ	_	_	3	comp:obj	_	Gloss=that
      5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	subj	_	Gloss=he
      6	vient	vient	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	comp:obj	_	Gloss=comes
      7	pas	pas	ADV	_	Polarity=Neg	6	mod	_	Gloss=not
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}

>Naija
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_en = It's not good.
      1	e	e	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	subj	_	AlignBegin=97985|AlignEnd=98254|Gloss=it
      2	no	no	PART	_	Polarity=Neg	3	mod	_	AlignBegin=98254|AlignEnd=98522|Gloss=NEG
      3	good	good	ADJ	_	_	0	root	_	AlignBegin=98522|AlignEnd=98791|Gloss=good
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}

In case of multiple propositions in one sentence, `dislocated` is used when the second proposition doesn't hold any actual information value and it cannot be neither separated nor negated.

Let's consider the following example:
>French

{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_fr = j'ai des copines euh actuellement euh , je m'entends super bien avec
      # text_fr = I have friends uh currently uh, I get along really well with (them)
      1	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	SpaceAfter=No|Gloss=I
      2	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	dislocated	_	Gloss=have
      3	des	de+le	DET	_	_	4	det	_	Gloss=the
      4	copines	copine	NOUN	_	Gender=Fem|Number=Plur	2	comp:obj	_	Gloss=friends
      5	actuellement	actuellement	ADV	_	_	2	mod	_	Gloss=currently
      6	,	,	PUNCT	_	_	2	punct	_	_
      7	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	9	subj	_	Gloss=I
      8	m'	le	PRON	_	_	9	comp:obj	_	SpaceAfter=No|Gloss=myself
      9	entends	entendre	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=get_along
      10	super	super	ADV	_	_	11	mod	_	Gloss=super
      11	bien	bien	ADV	_	_	9	mod	_	Gloss=well
      12	avec	avec	ADP	_	_	9	comp:obl	_	Gloss=with
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}


In this sentence, the proposition *J'ai des copines* (*I have some friends*) doesn't provide any information. The fact that the speaker has some friends is considered as obvious and we cannot negate it or question it. The informational content of this sentence is **about** these friends, not about the fact that the speaker has some.
