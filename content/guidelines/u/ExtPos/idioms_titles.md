---
layout: default
---
# Idioms and titles

SUD offers several traits which allow annotators to mark idiomatic expressions and titles while still preserving the internal syntactic relationships between their various components. We have decided to distinguish these two categories from Multi-Word Expressions (MWEs), which represent a broader category which also includes named entities.

For our purposes, "titles" refer to any title given to a film, book, painting, or other work of art, such as *Planet of the Apes*, *Dark Side of the Moon*, *American Gothic*, or *Super Mario Bros*. However, this excludes other named entities like events, holidays or locations, such as *The Gulf War*, *Good Friday*, or *The Eiffel Tower*.

Idioms, meanwhile, refer to any figurative expression ranging from classic examples like *kick the bucket* to to extremely common phrases like *in general* whose precise meaning cannot directly be deduced from its constituents. Pronominal verbs, such as those common in Romance languages, are also treated as idioms.

Idioms and titles are annotated in the following way:

- The **head** of the idiom or title contains the feature `Idiom=Yes` or `Title=Yes`
- The **head** also contains an "external part of speech" feature (`ExtPos`) which denotes the element's function within the wider sentence. Please note that all titles will carry the `ExtPos` value of `PROPN`.
- The **remaining components** of the element will contain the feature `InIdiom=Yes` or `InTitle=Yes`.

This approach has several advantages. By marking these categories with features rather than a `fixed` relation, we are able to preserve its internal syntactic relationships.  

**NB**: Until version 2.8, the feature `PhraseType=Idiom` was used for the head of idioms (now replaced by `Idiom=Yes`) and the feature `PhraseType=Title` was used for the head of titles (now replaced by `Title=Yes`)

## With internal syntactic relations

> English

{{< conll >}}
1	Karen	Karen	PROPN	_	_	2	subj	_	_
2	loved	love	VERB	_	_	0	root	_	_
3	One	one	PRON	_	InTitle=Yes	4	subj	_	_
4	Flew	fly	VERB	_	ExtPos=PROPN|Title=Yes	2	comp:obj	_	_
5	Over	over	ADP	_	InTitle=Yes	4	comp:obl	_	_
6	the	the	DET	_	InTitle=Yes	7	det	_	_
7	Cuckoo	cuckoo	NOUN	_	InTitle=Yes	8	comp:obj	_	_
8	's	's	PART	_	InTitle=Yes	9	mod@poss	_	_
9	Nest	nest	VERB	_	InTitle=Yes	5	comp:obj	_	_
{{< /conll >}}

> English

{{< conll >}}
1	That	that	PRON	_	InIdiom=Yes	2	subj@pass	_	_
2	said	say	VERB	_	ExtPos=ADV|Idiom=Yes	5	mod	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	it	it	PRON	_	_	5	subj	_	_
5	was	be	AUX	_	_	0	root	_	_
6	not	not	ADV	_	_	5	mod	_	_
7	my	my	DET	_	_	8	det	_	_
8	favorite	favorite	NOUN	_	_	5	comp:pred	_	_
{{< /conll >}}

> English

{{< conll >}}
1	Finance	finance	NOUN	_	_	4	subj	_	_
2	and	and	CCONJ	_	_	3	cc	_	_
3	mentorship	mentorship	NOUN	_	_	1	conj	_	_
4	should	shall	AUX	_	_	0	root	_	_
5	go	go	VERB	_	_	4	comp:aux	_	_
6	hand	hand	NOUN	_	ExtPos=ADV|Idiom=Yes	5	mod	_	_
7	in	in	ADP	_	InIdiom=Yes	6	udep	_	_
8	hand	hand	NOUN	_	InIdiom=Yes	7	comp:obj	_	_
{{< /conll >}}


> Spanish

{{< conll >}}
# text_en = His name is Alejandro.
1	Se	se	PRON	_	InIdiom=Yes	2	comp	_	Gloss=himself
2	llama	llamar	VERB	_	ExtPos=VERB|Idiom=Yes	0	root	_	Gloss=calls
3	Alejandro	Alejandro	PROPN	_	_	2	comp:pred	_	Gloss=Alejandro
{{< /conll >}}

## Without internal syntactic relations

When there is no clear internal syntactic structure, the relation `unk` is used.

> English

{{< conll >}}
1	Let	let	VERB	_	_	0	root	_	_
2	me	I	PRON	_	_	1	comp:obj	_	_
3	know	know	VERB	_	_	1	comp:pred	_	_
4	what	what	PRON	_	_	5	subj	_	_
5	's	be	AUX	_	_	3	comp:obj	_	_
6	happening	happen	VERB	_	_	5	comp:aux	_	_
7	as	as	SCONJ	_	ExtPos=SCONJ|Idiom=Yes	5	mod	_	_
8	soon	soon	ADV	_	InIdiom=Yes	7	unk	_	_
9	as	as	SCONJ	_	InIdiom=Yes	8	unk	_	_
10	you	you	PRON	_	_	11	subj	_	_
11	can	can	AUX	_	_	7	comp:obj	_	_
{{< /conll >}}


> French

{{< conll >}}
# sent_id = fr-ud-train_10134__shorten
# text_en = I found the rates applied here to be quite correct.
# text = j'ai trouvé tout à fait correct les tarifs appliqués ici.
1	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	Gloss=I
2	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=--
3	trouvé	trouver	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	comp:aux@tense	_	Gloss=found
4	tout	tout	ADV	_	ExtPos=ADV|Idiom=Yes	7	mod	_	Gloss=quite
5	à	à	ADP	_	InIdiom=Yes	4	unk	_	Gloss=--
6	fait	fait	NOUN	_	Gender=Masc|InIdiom=Yes|Number=Sing	5	unk	_	Gloss=--
7	correct	correct	ADJ	_	Gender=Masc|Number=Sing|Typo=Yes	3	comp:pred	_	Gloss=correct
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	Gloss=the
9	tarifs	tarif	NOUN	_	Gender=Masc|Number=Plur	3	comp:obj	_	Gloss=rates
10	appliqués	appliquer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	9	mod	_	Gloss=applied
11	ici	ici	ADV	_	_	10	mod	_	Gloss=here
{{< /conll >}}