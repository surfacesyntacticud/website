# **comp:cleft**

The `comp:cleft` relation is used in cleft sentences for the dependency from the head of the sentence to the head of the complement clause.

> English

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

> French

{{< conll >}}
#text_en = So it was then Alba who retook control of the situation and quelled a popular revolt before the royal court.
1	C'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	subj@expl	_	Gloss=it
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
3	alors	alors	ADV	_	_	2	mod	_	Gloss=so
4	Alba	Alba	PROPN	_	_	2	comp:pred	_	Gloss=Alba
5	qui	qui	PRON	_	PronType=Rel	6	subj	_	Gloss=who
6	reprend	reprendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	comp:cleft	_	Gloss=retakes
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Art	8	det	_	Gloss=the
8	contrôle	contrôle	NOUN	_	Gender=Masc|Number=Sing	6	comp:obj	_	Gloss=control
9	de	de	ADP	_	_	8	udep	_	Gloss=of
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Art	11	det	_	Gloss=the
11	situation	situation	NOUN	_	Gender=Fem|Number=Sing	9	comp:obj	_	Gloss=situation
12	et	et	CCONJ	_	_	14	cc	_	Gloss=and
13	qui	qui	PRON	_	PronType=Rel	14	subj	_	Gloss=who
14	réprime	réprimer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	Gloss=quells
15	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|Person=3|PronType=Art	16	det	_	Gloss=a
16	révolte	révolte	NOUN	_	Gender=Fem|Number=Sing	14	comp:obj	_	Gloss=revolt
17-18	du	_	_	_	_	_	_	_	_
17	de	de	ADP	_	_	16	udep	_	Gloss=of
18	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Art	19	det	_	Gloss=the
19	peuple	peuple	NOUN	_	Gender=Masc|Number=Sing	17	comp:obj	_	Gloss=people
20	devant	devant	ADP	_	_	16	udep	_	Gloss=before
21	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Art	22	det	_	Gloss=the
22	cour	cour	NOUN	_	Gender=Fem|Number=Sing	20	comp:obj	_	Gloss=court
23	royale	royal	ADJ	_	Gender=Fem|Number=Sing	22	mod	_	Gloss=royal
{{< /conll >}}

Sometimes, there is an ambiguity between a relative clause and a cleft clause. Consider the sentence `It is the electric car that I chose`.

If someone utters this sentence in a context where they must choose between a gasoline car and an electric car, the sentence is interpreted as a cleft sentence with the following annotation.

> English

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

But if the sentence is uttered in a context where the speaker is referring to one of several electric cars, the sentence is interpreted as having a relative clause with the following annotation.

> English

{{< conll >}}
1	It	it	PRON	_	_	2	subj	_	_
2	is	be	AUX	_	_	0	root	_	_
3	the	the	DET	_	_	5	det	_	_
4	electric	electric	ADJ	_	_	5	mod	_	_
5	car	car	NOUN	_	_	2	comp:pred	_	_
6	that	that	PRON	_	_	8	comp:obj	_	_
7	I	I	PRON	_	_	8	subj	_	_
8	chose	choose	VERB	_	_	5	mod@relcl	_	_
{{< /conll >}}
