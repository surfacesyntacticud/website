---
layout: default
title: "@lvc"
src: guidelines/u/deep_features/lvc.md
---

The `@lvc` feature is used for arguments of light verbs.

> English

{{< conll >}}
1	take	take	VERB	_	_	0	root	_	_
2	part	part	NOUN	_	_	1	comp:obj@lvc	_	_
3	in	in	ADP	_	_	1	comp:obl	_	_
4	the	the	DET	_	_	5	det	_	_
5	discussion	discussion	NOUN	_	_	3	comp:obj	_	_
{{< /conll >}}

> French

{{< conll >}}
# text_en = He's afraid of the spider
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	subj	_	Gloss=he
2	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=have
3	peur	peur	NOUN	_	Gender=Fem|Number=Sing	2	comp:obj@lvc	_	Gloss=fear
4	de	de	ADP	_	_	3	comp:obl	_	Gloss=of
5	l'	le	DET	_	Definite=Def|Number=Sing|Person=3|PronType=Art	6	det	_	Gloss=the
6	araignée	araignée	PROPN	_	_	4	comp:obj	_	Gloss=spider
{{< /conll >}}

See [issue #5](https://github.com/surfacesyntacticud/guidelines/issues/5) for a discussion about light verb construction annotation in SUD.