---
layout: default
---

# **udep**
The `udep` relation is used for complements when one does not wish to or is unable to distinguish between arguments and modifiers. This is relationship can notably be used in cases where the complement's relationship with its governor is ambiguous. When there is little debate about the nature of the relationship, the more specific label is preferred.

The governor and the dependent of a `udep` relation can have any POS.

{{< conll >}}
1	An	a	DET	_	_	2	det	_	_
2	act	act	NOUN	_	_	0	root	_	_
3	of	of	ADP	_	_	2	udep	_	_
4	creation	creation	NOUN	_	_	3	comp:obj	_	_
{{< /conll >}}

{{< conll >}}
1	She	she	PRON	_	_	2	subj	_	_
2	smiles	smile	VERB	_	_	0	root	_	_
3	at	at	ADP	_	_	2	udep	_	_
4	this	this	DET	_	_	5	det	_	_
5	discomfiture	discomfiture	NOUN	_	_	3	comp:obj	_	_
{{< /conll >}}

{{< conll >}}
1	Ficha	ficha	PRON	_	_	0	root	_	_
2	de	de	ADP	_	_	1	udep	_	_
3	Juanjo	juanjo	PROPN	_	_	2	comp:obl	_	_
4	Ciércoles	ciércoles	PROPN	_	_	3	flat	_	_
5	en	en	ADP	_	_	1	udep	_	_
6	Don	don	PROPN	_	_	5	comp:obj	_	_
7	Balón	balón	PROPN	_	_	6	appos	_	_
{{< /conll >}}
