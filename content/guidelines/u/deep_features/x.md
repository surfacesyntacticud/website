---
layout: default
title: "@x"
src: guidelines/u/deep_features/x.md
---

The `@x` feature is used to annotate relationships with verbs that do not have an explicitly marked subject, but whose semantic subject can nevertheless be found in the sentence. This relationship therefore applies essentially to infinitive verbs which relate to a subject introduced earlier in the sentence. For example, in the sentence *he wants to eat*, *he* has a clear semantic relationship with *to eat*.


{{< conll >}}
1	He	he	PRON	_	_	2	subj	_	_
2	did	do	AUX	_	_	0	root	_	_
3	not	not	PART	_	_	4	mod	_	_
4	ask	ask	VERB	_	_	2	comp:aux	_	_
5	me	I	PRON	_	_	4	comp:obl	_	_
6	to	to	PART	_	_	4	comp:obj@x	_	_
7	sit	sit	VERB	_	_	6	comp:obj	_	_
8	down	down	PART	_	_	7	mod	_	_
{{< /conll >}}

{{< conll >}}
1	the	the	DET	_	_	2	det	_	_
2	developer	developer	NOUN	_	_	3	subj	_	_
3	has	have	AUX	_	_	0	root	_	_
4	to	to	PART	_	_	3	comp:aux@x	_	_
5	use	use	VERB	_	_	4	comp:obj	_	_
6	another	another	ADJ	_	_	7	mod	_	_
7	language	language	NOUN	_	_	5	comp:obj	_	_
8	in	in	ADP	_	_	5	mod@x	_	ExtPos=ADP|PhraseType=Idiom
9	order	order	NOUN	_	_	8	unk	_	InIdiom=Yes
10	to	to	PART	_	_	8	comp@obj	_	_
11	write	write	VERB	_	_	10	comp@obj	_	_
{{< /conll >}}

While this feature is most often used in relationships between finite verbs and the infinitives they govern, note that the governing element does not necessarily need to be a verb. The following example highlights how the `@x`feature can apply to the relation between an infinitive and a governing adjective.

{{< conll >}}
1	I	I	PRON	_	_	2	subj	_	_
2	am	be	VERB	_	_	0	root	_	_
3	proud	proud	ADJ	_	_	2	comp:pred	_	_
4	to	to	PART	_	_	3	comp:obl@x	_	_
5	be	be	VERB	_	_	4	comp:obj	_	_
6	a	a	DET	_	_	7	det	_	_
7	linguist	linguist	NOUN	_	_	5	comp:pred	_	_
{{< /conll >}}
