---
layout: default
---

# **@x**

The `@x` feature is used for relations between a verb and an infinitive complement to indicate that the subject of the infinitive is controlled by the verb governor.

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
8	in	in	ADP	_	_	5	mod@x	_	_
9	order	order	NOUN	_	_	8	unk@fixed	_	_
10	to	to	PART	_	_	8	comp@obj	_	_
11	write	write	VERB	_	_	10	comp@obj	_	_
{{< /conll >}}

