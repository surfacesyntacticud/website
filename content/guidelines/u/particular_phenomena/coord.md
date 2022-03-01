---
layout: default
title: Coordination
src: guidelines/u/particular_phenomena/coord.md
---

## Chained conjuncts
In UD, all conjuncts of a coordination are attached to the head of the first conjunct in a bouquet. In SUD, each conjunct is attached to the head of the previous one in a chain.

The first example below shows the annotation of a coordination in UD and the second one the corresponding annotation in SUD.

> English 

{{< conll >}}
1	John	John	PROPN	_	_	7	nsubj	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	Mary	Mary	PROPN	_	_	1	conj	_	_
4	and	and	CCONJ	_	_	5	cc	_	_
5	Peter	Peter	PROPN	_	_	1	conj	_	_
6	will	will	AUX	_	_	7	aux	_	_
7	come	come	VERB	_	_	0	root	_	_
{{< /conll >}}

> English 

{{< conll >}}
1	John	John	PROPN	_	_	6	subj	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	Mary	Mary	PROPN	_	_	1	conj	_	_
4	and	and	CCONJ	_	_	5	cc	_	_
5	Peter	Peter	PROPN	_	_	3	conj	_	_
6	will	will	AUX	_	_	0	root	_	_
7	come	come	VERB	_	_	6	comp:aux	_	_
{{< /conll >}}


## Embedded coordination
The conjunct of a coordination can itself be a coordination. Theoretically, this embedding can be nested indefinitely. In natural corpora, however, there is typically only one level of iteration.
The `conj` label does not make a distinction between embedded relations and surface relations because they form a single chain. However, these relations can be distinguished with the use of the extension `emb` for embedded coordinations, as the following example shows.

> English 

{{< conll >}}
1	John	John	PROPN	_	_	9	subj	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	Mary	Mary	PROPN	_	_	1	conj	_	_
4	or	or	CCONJ	_	_	6	cc	_	_
5	her	her	DET	_	_	6	det	_	_
6	brother	brother	NOUN	_	_	3	conj:emb	_	_
7	and	and	CCONJ	_	_	8	cc	_	_
8	Peter	Peter	PROPN	_	_	6	conj	_	_
9	will	will	AUX	_	_	0	root	_	_
10	come	come	VERB	_	_	9	comp:aux	_	_
{{< /conll >}}


## Shared dependents
Left dependents on coordination are attached to the head of the coordination. Since the head of a coordination is the head of the leftmost conjunct, it is not possible to distinguish these dependents from the own dependents of the leftmost conjunct.

Right dependents on a coordination are attached to the head of the rightmost conjunct, but they can be confused with the own dependents of this conjunct.

As a consequence, left and right dependents on a coordination are marked with feature `Shared=Yes`, which distinguishes them from the own dependents of the respective leftmost and rightmost conjuncts.
