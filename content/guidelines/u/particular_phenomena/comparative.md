---
layout: default
---
# Comparative and consecutive constructions

In **comparative constructions** where each term is introduced with a grammatical word like *more... than*, the relation between the two grammatical words is laballed `comp:obj`, the first word being the head of the second. Consider the example:

{{< conll >}}
# text = vous êtes plus jeune que moi
# text_en = You are younger than I
1	Vous	vous	PRON	_	_	2	subj	_	Gloss=you
2	êtes	être	AUX	_	_	0	root	_	Gloss=are
3	plus	plus	ADV	_	_	4	mod	_	Gloss=more
4	jeune	jeune	ADJ	_	_	2	comp:pred	_	Gloss=young
5	que	que	SCONJ	_	_	3	comp:obj	_	Gloss=than
6	moi	lui	PRON	_	_	5	comp:obj	_	Gloss=I
{{< /conll >}}

Note that the first grammatical word of the comparison (*plus*) is considered a modifier of the property being compared. Examples in other languages: *plus ... que* (French), *più ... di* (Italian), *bardziej ... niż* (Polish).

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


Sometimes, there is no grammatical word introducing the first term of the comparison; the property being compared has a particular inflection or it is represented with a specific word. In this case, the dependency `comp:obj` expressing the comparison between the two terms would have the compared property as its source and there would be no modifier relationship.

{{< conll >}}
1	John	John	PROPN	_	_	2	subj	_	_
2	is	be	AUX	_	_	0	root	_	_
3	taller	tall	ADJ	_	_	2	comp:pred	_	_
4	than	than	ADV	_	_	3	comp:obj	_	_
5	Mary	Mary	PROPN	_	_	4	comp:obj	_	_
{{< /conll >}}

These constructions are similar to other constructions organized around pairs of correlated words. For example, in French:

{{< conll >}}
# text = Il est la première personne à avoir gravi ce sommet
1	Il	il	PRON	_	_	2	subj	_	_
2	est	être	AUX	_	_	0	root	_	_
3	la	le	DET	_	_	5	det	_	_
4	première	premier	ADJ	_	_	5	mod	_	_
5	personne	personne	NOUN	_	_	2	comp:pred	_	_
6	à	à	ADP	_	_	4	comp:obl@x	_	_
7	avoir	avoir	AUX	_	_	6	comp:obj	_	_
8	gravi	gravir	VERB	_	_	7	comp:aux	_	_
9	ce	ce	DET	_	_	10	det	_	_
10	sommet	sommet	NOUN	_	_	8	comp:obj	_	_
{{< /conll >}}