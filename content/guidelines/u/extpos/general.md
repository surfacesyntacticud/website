---
layout: default
---
# The ExtPos feature

The ExtPos feature was introduced to facilitate the annotation of idioms, titles, and other multi-word phrases which behave like a certain part of speech, even though none of their constituents necessarily carry that part of speech. This feature allows the annotator to preserve the internal syntactic relationships between the various components of these units.

- The **head** of the phrase contains carries the ExtPos feature, which denotes the phrases's function within the wider sentence. For example, the title of a novel, which functions as a proper noun, would carry the feature ExtPos=PROPN.
- The **head** also carries a PhraseType feature, PhraseType=Idiom or PhraseType=Title
- The **remaining components** of the element will contain the feature InIdiom=Yes or InTitle=Yes, depending on the value of the PhraseType feature of its governor.

## Titles

The ExtPos feature is notably used to annotate titles. For our purposes, "title" refers to any title given to a film, book, painting, or other work of art, such as *Planet of the Apes*, *Dark Side of the Moon*, *American Gothic*, or *Super Mario Bros*. However, this excludes other named entities like events, holidays or locations, such as The Gulf War, Good Friday, or The Eiffel Tower. The head of a title always carries the ExtPos value of PROPN.

{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      # shownfeat < just do wetin de want //
      # text_en = So, just do what they want.
      # text_ortho = So, just do wetin de want.
      1	so	so	ADV	_	_	4	discourse	_	AlignBegin=163233|AlignEnd=163569|Gloss=so
      2	<	<	PUNCT	_	_	1	punct	_	AlignBegin=163569|AlignEnd=163569|Gloss=PUNCT
      3	just	just	ADV	_	_	4	mod	_	AlignBegin=163569|AlignEnd=163905|Gloss=just
      4	do	do	VERB	_	_	0	root	_	AlignBegin=163905|AlignEnd=164242|Gloss=do
      5	wetin	wetin	PRON	_	PronType=Int	4	comp:obj	_	AlignBegin=164242|AlignEnd=164578|Gloss=what.Q
      6	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	subj	_	AlignBegin=164578|AlignEnd=164914|Gloss=NOM.PL.3
      7	want	want	VERB	_	_	5	mod@relcl	_	AlignBegin=164914|AlignEnd=165250|Gloss=want
      8	//	//	PUNCT	_	_	4	punct	_	AliRB	_	InTitle=Yes	5	comp:obj	_	_
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}
