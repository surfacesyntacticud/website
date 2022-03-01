---
layout: default
title: "@pass"
src: guidelines/u/deep_features/pass.md
---


The `@pass` feature is used for the arguments of **passive auxiliaries**.


The relation between the auxiliary and the verb is marked `comp:aux@pass` and the subject of the auxiliary bears the `subj@pass` feature.

> English

{{< conll >}}
1	They	they	PRON	_	_	2	subj@pass	_	_
2	were	be	AUX	_	_	0	root	_	_
3	killed	kill	VERB	_	_	2	comp:aux@pass	_	_
{{< /conll >}}

> French

{{< conll >}}
# text_fr = Le château est ensuite vendu
# text_en = Later the castle is sold
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Art	2	det	_	wordform=le|Gloss=The
2	château	château	NOUN	_	Gender=Masc|Number=Sing	3	subj@pass	_	Gloss=castle
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
4	ensuite	ensuite	ADV	_	_	3	mod	_	Gloss=then
5	vendu	vendre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	comp:aux@pass	_	Gloss=sold
{{< /conll >}}


In case of **passive reflexive constructions**, the subject is analysed with a regular `subj` relation and the pronoun with the `comp@pass` relation. For more information about the usage of `comp`, see the [dedicated page](../../relations/comp).

> French

{{< conll >}}
# text_fr = L'affaire se complique un peu
# text_en = The case gets a little complicated
1	L'	le	DET	_	Definite=Def|Number=Sing|Person=3|PronType=Art	2	det	_	SpaceAfter=No|wordform=l'|Gloss=The
2	affaire	affaire	NOUN	_	Gender=Fem|Number=Sing	4	subj	_	Gloss=case
3	se	se	PRON	_	Person=3|PronType=Prs	4	comp@pass	_	Gloss=PRON.refl
4	complique	compliquer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=complicates
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Art	4	mod	_	ExtPos=ADV|PhraseType=Idiom|Gloss=a
6	peu	peu	ADV	_	_	5	unk	_	InIdiom=Yes|Gloss=little
{{< /conll >}}


Complements of the verbs in a passive construction are marked `comp:obj@pass`

> French

{{< conll >}}
# text_en = It is decided that the execution of the sentence is postponed
# text = Il est décidé que l'exécution de la sentence soit différé
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	subj@expl	_	wordform=il|Gloss=It
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
3	décidé	décider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	comp:aux@pass	_	Gloss=decided
4	que	que	SCONJ	_	_	3	comp:obj@pass	_	Gloss=that
5	l'	le	DET	_	Definite=Def|Number=Sing|Person=3|PronType=Art	6	det	_	SpaceAfter=No|Gloss=the
6	exécution	exécution	NOUN	_	Gender=Fem|Number=Sing	10	subj@pass	_	Gloss=execution
7	de	de	ADP	_	_	6	udep	_	Gloss=if
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Art	9	det	_	Gloss=the
9	sentence	sentence	NOUN	_	Gender=Fem|Number=Sing	7	comp:obj	_	Gloss=sentence
10	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	comp:obj	_	Gloss=be
11	différé	différer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	comp:aux@pass	_	Gloss=postponed
{{< /conll >}}