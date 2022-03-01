---
layout: default
---

# **@expl**

The `@expl` feature is used for arguments of predicates without semantic contents (impersonal subjects for instance).
{{< conll >}}
1	it	it	PRON	_	_	2	subj@expl	_	_
2	is	be	AUX	_	_	0	root	_	_
3	also	also	ADV	_	_	4	mod	_	_
4	desirable	desirable	ADJ	_	_	2	comp:pred	_	_
5	to	to	PART	_	_	2	comp:obj@agent	_	_
6	retain	retain	VERB	_	_	5	comp:obj	_	_
7	them	them	PRON	_	_	6	comp:obj	_	_
{{< /conll >}}

{{< conll >}}
1	it	it	PRON	_	_	2	subj@expl	_	_
2	rains	rain	VERB	_	_	0	root	_	_
3	a	a	DET	_	_	4	det	_	_
4	lot	lot	NOUN	_	_	2	mod	_	_
5	in	in	PART	_	_	2	mod	_	_
6	England	England	PROPN	_	_	5	comp:obj	_	_
{{< /conll >}}

This feature can also be used to annotate repeated subjects, such as those which are common in certain French interrogative constructions.
{{< conll >}}
# text = Jean vient-il demain ?
# text_en = Is Jean coming tomorrow?
1	Jean	Jean	PROPN	_	_	2	subj	_	Gloss=Jean
2	vient	venir	VERB	_	_	0	root	_	Gloss=come
3	-il	il	PRON	_	_	2	subj@expl	_	Gloss=he
4	demain	demain	ADV	_	_	2	mod	_	Gloss=tomorrow
5	?	?	PUNCT	_	_	2	punct	_	Gloss=?
{{< /conll >}}
