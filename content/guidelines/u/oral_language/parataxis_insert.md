---
layout: default
title: parataxis:insert
---

The `parataxis:insert` is used for inserted clause. Contrary to a parenthetical clause, an inserted clause could not form an independent sentence


>French

{{< conll >}}
# text = La France est rose constate La Voix du Nord
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	France	France	PROPN	_	_	3	subj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	rose	rose	ADJ	_	Number=Sing	3	comp:pred	_	_
5	constate	constater	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis:insert	_	_
6	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Voix	Voix	PROPN	_	Gender=Fem|Number=Sing	5	subj	_	ExtPOS=PROPN
8-9	du	_	_	_	_	_	_	_	_
8	de	de	ADP	_	_	7	mod	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Nord	Nord	PROPN	_	_	8	comp:obj	_	_
{{< /conll >}}
