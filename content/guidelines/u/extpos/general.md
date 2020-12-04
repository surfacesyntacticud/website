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

{{< conll >}}
# shownfeatures = FORM, UPOS, LEMMA, MISC.Gloss, FEATS.ExtPos, FEATS.PhraseType, FEATS.InTitle
1	Karen	Karen	PROPN	_	_	2	subj	_	_
2	loved	love	VERB	_	_	0	root	_	_
3	One	one	PRON	_	InTitle=Yes	4	subj	_	_
4	Flew	fly	VERB	_	ExtPos=PROPN|PhraseType=Title	2	comp:obj	_	_
5	Over	over	ADP	_	InTitle=Yes	4	comp:obl	_	_
6	the	the	DET	_	InTitle=Yes	7	det	_	_
7	Cuckoo	cuckoo	NOUN	_	InTitle=Yes	8	comp:obj	_	_
8	's	's	PART	_	InTitle=Yes	9	mod@poss	_	_
9	Nest	nest	VERB	_	InTitle=Yes	5	comp:obj	_	_
{{< /conll >}}
