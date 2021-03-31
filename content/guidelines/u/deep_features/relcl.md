---
layout: default
---

# **@relcl**
The `@relcl` feature is used for the relation between the head of a relative clause and its antecedent.

{{< rawhtml >}}
    <reactive-dep-tree
      interactive="true"
      shown-metas="text_en"
      shown-features="UPOS,LEMMA,FEATS.Tense,FEATS.VerbForm,FEATS.Number,FEATS.Person,MISC.Gloss"
      hidden-features="XPOS"
      conll="
      1	This	this	PRON	_	_	2	subj	_	_
      2	is	be	AUX	_	_	0	root	_	_
      3	money	money	NOUN	_	_	2	comp:aux@pass	_	_
      4	you	you	PRON	_	_	5	subj	_	_
      5	've	have	AUX	_	_	3	mod@relcl	_	_
      6	earned	earn	VERB	_	_	5	comp:aux@tense	_	_
      "
    ></reactive-dep-tree>
{{< /rawhtml >}}



