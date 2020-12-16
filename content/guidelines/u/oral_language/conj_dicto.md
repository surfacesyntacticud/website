---
layout: default
title: Use of the relation conj:dicto
---

This relation is used to indicate difluencies when a speaker corrects his speech.


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

Note that `conj:dicto` goes from the first element to the second, while `reparandum` goes the opposite way.