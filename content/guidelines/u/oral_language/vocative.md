---
layout: default
title: vocative
---
The `vocative` relation is used when a speaker directly addresses a listener in an utterance.

>French
{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # text_fr = Merci beaucoup monsieur
      # text_en = Thank you very much sir
      1	Merci	merci	NOUN	_	_	0	root	_	Gloss=thanks
      2	beaucoup	beaucoup	ADV	_	_	1	mod	_	Gloss=much
      3	monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	1	vocative	_	Gloss=sir
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
      # text_en = Uh... auntie, it's not easy.
      # text_ortho = Ehn auntie, di ting no easy o.
      1	ehn	ehn	INTJ	_	_	7	discourse	_	AlignBegin=5850|AlignEnd=6134|Gloss=ehn
      2	auntie	auntie	NOUN	_	_	7	vocative	_	AlignBegin=6134|AlignEnd=6419|Gloss=auntie
      3	<	<	PUNCT	_	_	2	punct	_	AlignBegin=6419|AlignEnd=6419|Gloss=PUNCT
      4	di	di	DET	_	Definite=Def|PronType=Art	5	det	_	AlignBegin=6419|AlignEnd=6703|Gloss=DEF.ART
      5	ting	ting	NOUN	_	_	7	subj	_	AlignBegin=6703|AlignEnd=6987|Gloss=thing
      6	no	no	PART	_	Polarity=Neg	7	mod	_	AlignBegin=6987|AlignEnd=7271|Gloss=NEG
      7	easy	easy	ADJ	_	_	0	root	_	AlignBegin=7271|AlignEnd=7556|Gloss=easy
      8	o	o	PART	_	PartType=Disc	7	mod:emph	_	AlignBegin=7556|AlignEnd=7840|Gloss=EMPH
      9	//	//	PUNCT	_	_	7	punct	_	AlignBegin=7840|AlignEnd=7840|Gloss=PUNCT
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}
# text = ehn auntie < di ting no easy o //

