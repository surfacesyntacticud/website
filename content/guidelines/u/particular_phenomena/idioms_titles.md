---
layout: default
---
# Idioms and titles

SUD offers several traits which allow annotators to mark idiomatic expressions and titles while still preserving the internal syntactic relationships between their various components. We have decided to distinguish these two categories from Multi-Word Expressions (MWEs), which represent a broader category which also includes named entities.

For our purposes, "titles" refer to any title given to a film, book, painting, or other work of art, such as "Planet of the Apes," "Dark Side of the Moon," "American Gothic," or "Super Mario Bros." However, this excludes other named entities like events, holidays or locations, such as "The Gulf War", "Good Friday", or "The Eiffel Tower".

Idioms, meanwhile, refer to any figurative expression ranging from classic examples like "kick the bucket" to to extremely common phrases like "in general" whose precise meaning cannot directly be deduced from its constituents.

Idioms and titles are annotated in the following way:

- The **head** of the idiom or title contains the feature PhraseType=Idiom or PhraseType=Title
- The **head** also contains an "external part of speech" feature (ExtPos) which denotes the element's function within the wider sentence.
- The **remaining components** of the element will contain the feature PhraseType=Title or PhraseType=Idiom

This approach has several advantages. By marking these categories with features rather than a `fixed` relation, we are able to preserve its internal syntactic relationships.  

{{< conll >}}
1	Karen	Karen	PROPN	_	_	2	subj	_	_
2	loved	love	VERB	_	_	0	root	_	_
3	One	one	PRON	_	_	4	subj	_	_
4	Flew	fly	VERB	_	ExtPos=PROPN|PhraseType=Title	2	comp:obj	_	_
5	Over	over	ADP	_	InTitle=Yes	4	comp:obl	_	_
6	the	the	DET	_	InTitle=Yes	7	det	_	_
7	Cuckoo	cuckoo	NOUN	_	InTitle=Yes	8	comp:obj	_	_
8	's	's	PART	_	InTitle=Yes	9	mod@poss	_	_
9	Nest	nest	VERB	_	InTitle=Yes	5	comp:obj	_	_
{{< /conll >}}

{{< conll >}}
1	That	that	PRON	_	InIdiom=Yes	2	subj@pass	_	_
2	said	say	VERB	_	ExtPos=ADV|PhraseType=Idiom	5	mod	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	it	it	PRON	_	_	5	subj	_	_
5	was	be	AUX	_	_	0	root	_	_
6	not	not	ADV	_	_	5	mod	_	_
7	my	my	DET	_	_	8	det	_	_
8	favorite	favorite	NOUN	_	_	5	comp:pred	_	_
{{< /conll >}}
