---
layout: default
title: conj:coord
---

This relation is used to link elements connected with a coordinating conjunction such as *and* and *or*. The conjunction itself is linked to the second element with a `cc` relation. It is parallel to [`conj`](https://universaldependencies.org/u/dep/conj.html) relation in UD and in SUD for written language.

> French

{{< conll >}}
# text = Elle a instoré dans ce pays la démocratie politique et sociale
1	Elle	il	PRON	_	_	2	subj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	instauré	instaurer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	comp:aux	_	_
4	dans	dans	ADP	_	_	3	mod	_	_
5	ce	ce	DET	_	_	6	det	_	_
6	pays	pays	NOUN	_	Gender=Masc	4	comp:obj	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	démocratie	démocratie	NOUN	_	Gender=Fem|Number=Sing	3	comp:obj	_	_
9	politique	politique	ADJ	_	Number=Sing	8	mod	_	_
10	et	et	CCONJ	_	_	11	cc	_	_
11	sociale	sociale	NOUN	_	_	9	conj:coord	_	_
{{< /conll >}}

In case of multipe coordinating constructions, we analyse them in a chain in contrast to UD that analyses them in a bouquet.
Thanks to this, the relation distance is shorter. We also believe it is a more accurate representation of the cognitive process of coordination.

> French

{{< conll >}}
# text = Elle saura conjuguer le changement et la cohésion sociale l' esprit d' initiative et la sécurité la modernité et le bien vivre ensemble
1	Elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	_
2	saura	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
3	conjuguer	conjuguer	VERB	_	VerbForm=Inf	2	comp:obj@x	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	changement	changement	NOUN	_	Gender=Masc|Number=Sing	3	comp:obj	_	_
6	et	et	CCONJ	_	_	8	cc	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	cohésion	cohésion	NOUN	_	Gender=Fem|Number=Sing	5	conj:coord	_	_
9	sociale	social	ADJ	_	Gender=Fem|Number=Sing	8	mod	_	_
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	esprit	esprit	NOUN	_	Gender=Masc|Number=Sing	8	conj:coord	_	_
12	d'	de	ADP	_	_	11	udep	_	_
13	initiative	initiative	NOUN	_	Gender=Fem|Number=Sing	12	comp:obj	_	_
14	et	et	CCONJ	_	_	16	cc	_	_
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	sécurité	sécurité	NOUN	_	Gender=Fem|Number=Sing	11	conj:coord	_	_
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	modernité	modernité	NOUN	_	Gender=Fem|Number=Sing	16	conj:coord	_	_
19	et	et	CCONJ	_	_	22	cc	_	_
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
21	bien	bien	ADV	_	_	22	mod	_	_
22	vivre	vivre	VERB	_	VerbForm=Inf	18	conj:coord	_	_
23	ensemble	ensemble	ADV	_	_	22	mod	_	_
{{< /conll >}}

For more information about coordination, see the [dedicated page](../../particular_phenomena/coord).