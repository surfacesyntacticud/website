---
layout: default
title: conj:dicto
---

This relation is used to indicate difluencies when a speaker corrects his speech. It is parallel to the [`reparandum`](https://universaldependencies.org/u/dep/reparandum.html) relationship used in UD and for analysis of written texts in UD.

> French

{{< conll >}}
# sent_id = ParisStories_2019_stagePrimaire_15
# text_fr = j'ai j'ai vraiment adoré ce côté là .
# text_en = I did I did really like that part
1	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	SpaceAfter=No
2	ai	ai~	AUX	_	Number=Sing|Person=1	0	root	_	_
3	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	subj	_	SpaceAfter=No
4	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	conj:dicto	_	_
5	vraiment	vraiment	ADV	_	_	6	mod	_	_
6	adoré	adorer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	comp:aux	_	_
7	ce	ce	DET	_	_	8	det	_	_
8	côté	côté	NOUN	_	Gender=Masc|Number=Sing	6	comp:obj	_	_
9	là	là	ADV	_	_	8	mod	_	_
10	.	.	PUNCT	_	_	_	_	_	_
{{< /conll >}}

Note that `conj:dicto` (SUD) considers the first element as the head of the next one, while `reparandum` (UD) considers these constructions as reparations and considers the last element as head. 
This is because UD relies more on the semantics - it is the last element that holds the meaning. SUD on the other hand relies on the syntactic aspect and considers that it is the first element that occupies the syntactic position.

This may result in some incoherencies. Note the following example. In this sentence we have two options of annotation. We can annotate the *é~* with an unknown POS (`X`). In that case `X` is the head of a `subj` relation which is undesirable (only `VERB` and `AUX` should be head of a `subj` relation). The other option would be to guess the POS and lemma of the unfinished word with the risk of guessing it wrong. In our case the token *é~* would be annotated with the lemma *être* and POS `AUX`. In this scenario, *é~* becomes part of the paradigm of the conjugated verb *être* which is also undesirable.


In SUD we decided to adopt the following analysis.

> French

{{< conll >}}
# text_fr = C' é~ c' était vraiment
# text_en = It w~ it was really
1	C'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	subj	_	_
2	é~	é~	X	_	_	0	root	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	subj	_	_
4	était	être	AUX	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	conj:dicto	_	_
5	vraiment	vraiment	ADV	_	_	4	mod	_	_
{{< /conll >}}

For more examples on disfluencies, you can refer to [this page](../disfulencies).