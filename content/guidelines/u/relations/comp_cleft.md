---
title: "Comp_cleft"
date: 2020-04-28T10:38:53+02:00
---

# **comp:cleft**

The `comp:cleft` relation is used in cleft sentences for the dependency from the head of the sentence to the head of the complement clause.

{{< conll >}}
1	It	it	PRON	_	_	2	subj	_	_
2	was	be	AUX	_	_	0	root	_	_
3	from	from	ADP	_	_	2	comp:pred	_	_
4	John	John	PROPN	_	_	3	comp:obj	_	_
5	that	that	SCONJ	_	_	2	comp:cleft	_	_
6	she	she	PRON	_	_	7	subj	_	_
7	heard	hear	VERB	_	_	5	comp:obj	_	_
8	the	the	DET	_	_	9	det	_	_
9	news	news	NOUN	_	_	7	comp:obj	_	_
{{< /conll >}}

Sometimes, there is an ambiguity between a relative clause and a cleft clause. Consider the sentence `It is the electric car that I chose`.

If someone says this sentence in a context where he has to choose between a gasoline car and an electric car, the sentence is interpreted as a cleft sentence with the following annotation.

{{< conll >}}
1	It	it	PRON	_	_	2	subj	_	_
2	is	be	AUX	_	_	0	root	_	_
3	the	the	DET	_	_	5	det	_	_
4	electric	electric	ADJ	_	_	5	mod	_	_
5	car	car	NOUN	_	_	2	comp:pred	_	_
6	that	that	SCONJ	_	_	2	comp:cleft	_	_
7	I	I	PRON	_	_	8	subj	_	_
8	chose	choose	VERB	_	_	6	comp:obj	_	_
{{< /conll >}}

If someone says this sentence in a context where he shows a particular electric car among other electric cars, the sentence is interpreted as a sentence with a relative clause with the following annotation.

{{< conll >}}
1	It	it	PRON	_	_	2	subj	_	_
2	is	be	AUX	_	_	0	root	_	_
3	the	the	DET	_	_	5	det	_	_
4	electric	electric	ADJ	_	_	5	mod	_	_
5	car	car	NOUN	_	_	2	comp:pred	_	_
6	that	that	PRON	_	_	7	comp:obj	_	_
7	I	I	PRON	_	_	8	subj	_	_
8	chose	choose	VERB	_	_	5	mod@relcl	_	_
{{< /conll >}}

