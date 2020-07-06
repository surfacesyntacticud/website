---
layout: default
---
# Comparative, superlative and consecutive constructions

In **comparative constructions** where each term is introduced with a grammatical pair like *more... than*, the relation between the two grammatical words is labeled `comp:obj`, with the first word being the head of the second. Consider the example:

{{< conll >}}
# text = vous êtes plus jeune que moi
# text_en = You are younger than me
1	Vous	vous	PRON	_	_	2	subj	_	Gloss=you
2	êtes	être	AUX	_	_	0	root	_	Gloss=are
3	plus	plus	ADV	_	_	4	mod	_	Gloss=more
4	jeune	jeune	ADJ	_	_	2	comp:pred	_	Gloss=young
5	que	que	SCONJ	_	_	3	comp:obj	_	Gloss=than
6	moi	lui	PRON	_	_	5	comp:obj	_	Gloss=I
{{< /conll >}}

Note that the first grammatical word of the comparison (*plus*) is considered a modifier of the property being compared. Examples in other languages: *plus ... que* (French), *più ... di* (Italian), *bardziej ... niż* (Polish).

Sometimes, there is no grammatical word introducing the first term of the comparison; the property being compared has a particular inflection or it is represented with a specific word. In this case, the dependency `comp:obj` would be used to link the property directly to the *than* term, with no modifier relationship.

{{< conll >}}
1	John	John	PROPN	_	_	2	subj	_	_
2	is	be	AUX	_	_	0	root	_	_
3	taller	tall	ADJ	_	_	2	comp:pred	_	_
4	than	than	ADV	_	_	3	comp:obj	_	_
5	Mary	Mary	PROPN	_	_	4	comp:obj	_	_
{{< /conll >}}

**Superlative constructions** containing a reference to the group of nouns compared are annotated with a `udep` relation connecting the comparative to the preposition.

{{< conll >}}
1	John	John	PROPN	_	_	2	subj	_	_
2	is	be	AUX	_	_	0	root	_	_
3	the	the	DET	_	_	4	det	_	_
4	tallest	tall	ADJ	_	_	2	comp:pred	_	_
5	of	of	ADP	_	_	4	udep	_	_
6	his	his	DET	_	_	7	det	_	_
7	friends	friend	NOUN	_	_	5	comp:obj	_	_
{{< /conll >}}

{{< conll >}}
1	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Art	2	det	_	Gloss=the
2	meilleur	meilleur	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Gloss=best
3	de	de	ADP	_	_	2	udep	_	Gloss=of
4	la	le	DET	_	Definite=Def|Number=Plur|Person=3|PronType=Art	5	det	_	Gloss=the
5	trilogie	trilogie	NOUN	_	Gender=Masc|Number=Plur	3	comp:obj	_	Gloss=trilogy
{{< /conll >}}


In **consecutive constructions**, such as *so... that* or in other languages: *tellement ... que* (French), *così ... che* (Italian), *tak ... że* (Polish), the analysis would be similar:

{{< conll >}}
# text = It was so successful that the military continued to use it
1	It	it	PRON	_	_	2	subj	_	_
2	was	be	AUX	_	_	0	root	_	_
3	so	so	ADV	_	_	4	mod	_	_
4	successful	successful	ADJ	_	_	2	comp:pred	_	_
5	that	that	SCONJ	IN	_	3	comp:obj	_	_
6	the	the	DET	_	_	7	det	_	_
7	military	military	NOUN	_	_	8	subj	_	_
8	continued	continue	VERB	_	_	5	comp:obj	_	_
9	to	to	PART	TO	_	8	comp:pred	_	_
10	use	use	VERB	_	_	9	comp:obj	_	_
11	it	it	PRON	_	_	10	comp:obj	_	_
{{< /conll >}}

These constructions are similar to other constructions organized around pairs of correlated words. For example, in French:

{{< conll >}}
# text = Il est la première personne à avoir gravi ce sommet
# text_en = He is the first person to have climbed that summit
1	Il	il	PRON	_	_	2	subj	_	Gloss=he
2	est	être	AUX	_	_	0	root	_	Gloss=is
3	la	le	DET	_	_	5	det	_	Gloss=the
4	première	premier	ADJ	_	_	5	mod	_	Gloss=first
5	personne	personne	NOUN	_	_	2	comp:pred	_	Gloss=person
6	à	à	ADP	_	_	4	comp:obl@x	_	Gloss=to
7	avoir	avoir	AUX	_	_	6	comp:obj	_	Gloss=have
8	gravi	gravir	VERB	_	_	7	comp:aux	_	Gloss=climbed
9	ce	ce	DET	_	_	10	det	_	Gloss=that
10	sommet	sommet	NOUN	_	_	8	comp:obj	_	Gloss=summit
{{< /conll >}}
