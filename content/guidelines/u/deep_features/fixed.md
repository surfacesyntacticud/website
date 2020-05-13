---
layout: default
---

# **@fixed**

The `@fixed` feature is used for dependents on a word that form a multi-word expression (MWE) with it.

When a MWE has no internal syntactic structure, all components are linked in a chain from the left to the right by an `unk@fixed` relation.

{{< conll >}}
1	Finance	finance	NOUN	_	_	2	subj	_	_
2	and	and	CCONJ	_	_	3	cc	_	_
3	mentorship	mentorship	NOUN	_	_	1	conj	_	_
4	should	shall	AUX	_	_	0	root	_	_
5	go	go	VERB	_	_	4	comp:aux	_	_
6	hand	hand	NOUN	_	_	5	mod	_	_
7	in	in	ADP	_	_	6	udep@fixed	_	_
8	hand	hand	NOUN	_	_	7	comp:obj@fixed	_	_
{{< /conll >}}

{{< conll >}}
1	Let	let	VERB	_	_	0	root	_	_
2	me	I	PRON	_	_	1	comp:obj	_	_
3	know	know	VERB	_	_	1	comp:pred	_	_
4	what	what	PRON	_	_	5	subj	_	_
5	's	be	AUX	_	_	3	comp:obj	_	_
6	happening	happen	VERB	_	_	5	comp:aux	_	_
7	as	as	SCONJ	_	_	5	mod	_	_
8	soon	soon	ADV	_	_	7	unk@fixed	_	_
9	as	as	SCONJ	_	_	8	unk@fixed	_	_
10	you	you	PRON	_	_	11	subj	_	_
11	can	can	AUX	_	_	7	comp:obj	_	_
{{< /conll >}}
