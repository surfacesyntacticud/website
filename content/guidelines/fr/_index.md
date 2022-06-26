---
layout: default
title: French SUD Guidelines
src: guidelines/fr/_index.md
---

This page outlines various features specific to French.

## comp:aux
In French, only three verbs are considered auxiliaries: **être**, **avoir** and **faire**.

The `comp:aux` relation can be used with one of the three sub-relations `@tense`, `@pass` or `@caus`, depending on whether the auxiliary is expressing a tense, a passive or a causative construction. In French, the relation `comp:aux@tense` is used with both verbs **être** and **avoir** and is the most common sub-relation. The relation `comp:aux@pass` is only used with the verb **être**, while `comp:aux@caus` is only used with the verb **faire**.


#### Example of an auxiliary expressing a tense
{{< conll >}}
# text_en = She has disappeared.
1	elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	Gloss=she
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=has
3	disparu	disparaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	comp:aux@tense	_	Gloss=disappeared
{{< /conll >}}

#### Example of a passive construction
{{< conll >}}
# text_en = The castle is then sold.
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	château	château	NOUN	_	Gender=Masc|Number=Sing	3	subj@pass	_	Gloss=castle
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
4	ensuite	ensuite	ADV	_	_	3	mod	_	Gloss=next
5	vendu	vendre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	comp:aux@pass	_	Gloss=sold
{{< /conll >}}

#### Example of a causative construction
{{< conll >}}
# text_en = He makes it fall.
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	subj@caus	_	Gloss=he
2	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	comp:obj@agent	_	Gloss=it
3	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=makes
4	tomber	tomber	VERB	_	VerbForm=Inf	3	comp:aux@caus	_	Gloss=fall
{{< /conll >}}


## Cleft constructions

As shown in the page about the [`comp:cleft`](.././u/relations/comp_cleft) relation,  the cleft constructions are analysed with a `comp:cleft` relation going from the head of the main sentence to the head of the complement.

* With **qui** and **que** direct object, the cleft clause is analysed as a relative clause. in particular, **qui** and **que** are analysed as relative pronouns (PRON).
{{< conll >}}
# text_en = It is the team of Avengers which is reconstituted under the aegis of SHIELD
# text = C'est l'équipe des Vengeurs qui est reconstituée sous l'égide du SHIELD
1	C'	ce	PRON	_	_	2	subj@expl	_	Gloss=It
2	est	être	AUX	_	_	0	root	_	Gloss=is
3	l'	le	DET	_	_	4	det	_	Gloss=the
4	équipe	équipe	NOUN	_	_	2	comp:pred	_	Gloss=team
5	de	de	ADP	_	_	4	udep	_	Gloss=of
6	les	le	DET	_	_	7	det	_	Gloss=the
7	Vengeurs	vengeur	NOUN	_	_	5	comp:obj	_	Gloss=Avengers
8	qui	qui	PRON	_	_	9	subj	_	Gloss=which
9	est	être	AUX	_	_	2	comp:cleft	_	Gloss=is
10	reconstituée	reconstituer	VERB	_	_	9	comp:aux@tense	_	Gloss=reconstituted
11	sous	sous	ADP	_	_	9	mod	_	Gloss=under
12	l'	le	DET	_	_	13	det	_	Gloss=the
13	égide	égide	NOUN	_	_	11	comp:obj	_	Gloss=aegis
14	de	de	ADP	_	_	13	udep	_	Gloss=of
15	le	le	DET	_	_	16	det	_	Gloss=the
16	SHIELD	SHIELD	PROPN	_	_	14	comp:obj	_	Gloss=shield
{{< /conll >}}


  * In the other cases, the cleft clause is analysed as a complement clause, with **que** as a SCONJ.
  {{< conll >}}
  # text_en = Most of the furniture is actually associated with this style.
  # text = C'est d'ailleurs à ce style que se rattache la majorité du mobilier.
  1	C'	ce	PRON	_	_	2	subj@expl	_	Gloss=it
  2	est	être	AUX	_	_	0	root	_	Gloss=is
  3	d'	de	ADP	_	_	2	mod	_	Gloss=of
  4	ailleurs	ailleurs	ADV	_	_	3	comp:obj	_	InIdiom=Yes|Gloss=actually
  5	à	à	ADP	_	_	2	comp:pred	_	Gloss=to
  6	ce	ce	DET	_	_	7	det	_	Gloss=this
  7	style	style	NOUN	_	_	5	comp:obj	_	Gloss=style
  8	que	que	SCONJ	_	_	2	comp:cleft	_	Gloss=that
  9	se	se	PRON	_	_	10	comp@pass	_	Gloss=itself
  10	rattache	rattacher	VERB	_	_	8	comp:obj	_	Gloss=associated
  11	la	le	DET	_	_	12	det	_	Gloss=the
  12	majorité	majorité	NOUN	_	G_	10	subj@pass	_	Gloss=majority
  13-14	du	_	_	_	_	_	_	_	_
  13	de	de	ADP	_	_	12	udep	_	Gloss=of
  14	le	le	DET	_	_	15	det	_	Gloss=the
  15	mobilier	mobilier	NOUN	_	_	13	comp:obj	_	Gloss=furniture
  16	.	.	PUNCT	_	_	2	punct	_	_
  {{< /conll >}}


## Interrogatives

* **Est-ce que**
{{< conll >}}
# text = Is it interesting?
# text = Est-ce que c'est intéressant ?
1	Est	être	VERB	_	_	0	root	_	Gloss=Is
2	-ce	ce	PRON	_	_	1	subj@expl	_	Gloss=it
3	que	que	SCONJ	_	_	1	comp:pred	_	Gloss=that
4	c'	ce	PRON	_	_	5	subj	_	Gloss=it
5	est	être	AUX	_	_	3	comp:obj	_	Gloss=is
6	intéressant	intéressant	ADJ	_	_	5	comp:pred	_	Gloss=interesting
7	?	?	PUNCT	_	_	1	punct	_	_
{{< /conll >}}


* **Qu'est-ce que**: Interrogatives with **PRON est-ce qui/que** are analysed as particular cases of cleft clauses.
{{< conll >}}
# text_en = What do you have?
# text = Qu'est ce que tu as ?
1	Qu'	que	PRON	_	_	2	comp:pred	_	Gloss=what
2	est	être	AUX	_	_	0	root	_	Gloss=is
3	ce	ce	PRON	_	_	2	subj@expl	_	Gloss=it
4	que	que	PRON	_	_	6	comp:obj	_	Gloss=that
5	tu	il	PRON	_	_	6	subj	_	Gloss=you
6	as	avoir	VERB	_	_	2	comp:cleft	_	Gloss=have
7	?	?	PUNCT	_	_	2	punct	_	_
{{< /conll >}}

## Interjections and other discourse markers

Pure interjections (such as _ah_, _hein_, _ouais_, _euh_, etc.) are analysed as INTJs. Discourse markers coming from other POS (such as _enfin_, _chouette_, _disons_, etc.), as well as idioms (such as _en fait_, _tu sais_, etc.), keep their original POS but have an additional `ExtPos = INTJ` feature. Except 4 of them which are frequent and are analysed as pure INTJs:  _bon_, _ben_, _quoi_, and _tiens_. 

Example : 
{{< conll >}}
# text_en = So it was the price of, I mean, the price of a full course you know. 
# text = Donc le prix d'un, enfin ouais c'était, le prix d'un repas en fait hein.
1	donc	donc	ADV	_	_	10	discourse	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	prix	prix	NOUN	_	Gender=Masc|Number=Sing	10	dislocated	_	_
4	d'	de	ADP	_	_	3	udep	_	SpaceAfter=No
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	comp:obj@scrap	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	enfin	enfin	ADV	_	_	3	discourse	_	ExtPos=INTJ
8	ouais	ouais	INTJ	_	_	3	discourse	_	_
9	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	subj	_	SpaceAfter=No
10	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	prix	prix	NOUN	_	Gender=Masc|Number=Sing	10	comp:pred	_	_
14	d'	de	ADP	_	_	13	udep	_	SpaceAfter=No
15	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	repas	repas	NOUN	_	Gender=Masc|Number=Sing	14	comp:obj	_	_
17	en	en	ADP	_	_	10	discourse	_	ExtPos=ADV|Idiom=Yes
18	fait	fait	NOUN	_	Gender=Masc|Number=Sing	17	comp:obj	_	InIdiom=Yes
19	hein	hein	INTJ	_	_	10	discourse	_	SpaceAfter=No
20	.	.	PUNCT	_	_	10	punct	_	_
{{< /conll >}}

{{<conll>}}
# text_en = uh so actually uh you'll see then.
# text = euh ben en fait juste euh tu verras après.
1	euh	euh	INTJ	_	_	8	discourse	_	_
2	ben	ben	INTJ	_	_	8	discourse	_	_
3	en	en	ADP	_	_	8	discourse	_	ExtPos=ADV|Idiom=Yes
4	fait	fait	NOUN	_	Gender=Masc|Number=Sing	3	comp:obj	_	InIdiom=Yes
5	juste	juste	ADV	_	_	8	mod	_	_
6	euh	euh	INTJ	_	_	5	discourse	_	_
7	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	8	subj	_	_
8	verras	voir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	0	root	_	_
9	après	après	ADV	_	_	8	mod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_
{{</conll>}}

## Reported speech

Reported speech as a feature `Reported=Yes` on its head. It is generally the `comp:obj`of a speech verb, such as _dire_ 'to say'.

* **en mode**: Reported speech can also be introduced by the idomatic preposition _en mode_.
{{<conll>}}
# text_en = he was like are you really sure miss, uh.
# text = il était là en mode mais vous êtes sûre madame, euh.
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	subj	_	_
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	là	là	ADV	_	_	2	comp:pred	_	_
4	en	en	ADP	_	_	2	mod	_	ExtPos=ADP|Idiom=Yes
5	mode	mode	NOUN	_	Number=Sing	4	comp:obj	_	InIdiom=Yes
6	mais	mais	CCONJ	_	_	8	cc	_	_
7	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	8	subj	_	_
8	êtes	être	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	5	comp:obj	_	Reported=Yes
9	sûre	sûr	ADJ	_	Gender=Fem|Number=Sing	8	comp:pred	_	_
10	madame	madame	NOUN	_	Gender=Fem|Number=Sing	8	vocative	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	euh	euh	INTJ	_	_	8	discourse	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_
{{</conll>}}


* **être là**
Sometimes, _en mode_ is absent and there is a direct relation between the idiom _être là_ and the reported speech, which we decide to label `comp:obj`.

{{<conll>}}
# text_en = ah, and me, I, I was like, my god what is this guy.
# text = ah, et moi, je me, j'étais là, mon dieu mais c'est quoi ce gars.
1	ah	ah	INTJ	_	_	11	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	et	et	CCONJ	_	_	10	cc	_	_
4	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	10	dislocated	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	10	subj	_	_
7	me	se	PRON	_	Number=Sing|Person=1|PronType=Prs	6	unk@scrap	_	SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	_
9	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	conj:dicto	_	SpaceAfter=No
10	étais	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
11	là	là	ADV	_	_	10	comp:pred	_	SpaceAfter=No
12	,	,	PUNCT	_	_	10	punct	_	_
13	mon	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=1|PronType=Prs	14	det	_	_
14	dieu	dieu	NOUN	_	_	17	discourse	_	ExtPos=INTJ
15	mais	mais	CCONJ	_	_	17	cc	_	_
16	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	subj	_	SpaceAfter=No
17	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	comp:obj	_	Reported=Yes
18	quoi	quoi	PRON	_	Person=3|PronType=Int	17	comp:pred	_	_
19	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	20	det	_	_
20	gars	gars	NOUN	_	Gender=Masc	17	dislocated	_	SpaceAfter=No
21	.	.	PUNCT	_	_	10	punct	_	_
{{</conll>}}


## Pronominal verbs

Four relations are considered for the reflexive marker _se_: `comp:obj`, `comp:obl`, `comp@expl`, and `comp@pass`.

The 3rd person reflexive marker _se_ is always analysed as a reflexive pronoun: `PRON` and `Reflex=Yes`. 

For the 1st and 2nd person reflexive pronoun (_me_, _te_, _nous_, _vous_), they are analysed as `lemma=se`and `Reflex=Yes`, only when `comp@expl`. In other cases, they are analysed as ordinary object or oblique pronouns.

The semantic dstinction between reflexive meaning (_je me rase_) and reciprocal meaning (_ils s'aiment_) is not marked. 

* `comp:obj`: Reflexive pronouns replacing a direct object.
{{<conll>}}
# text = donc ils se retournent.
# text_en = and then they turn around

1	donc	donc	ADV	_	_	4	cc	_	_
2	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	subj	_	_
3	se	le	PRON	_	Person=3|PronType=Prs	4	comp:obj	_	Reflex=Yes
4	retournent	retourner	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_
{{</conll>}}

* `comp:obl`: Reflexive pronouns replacing an oblique complement.
{{<conll>}}
# text = ils se racontent leurs vacances.
# text_en =  they tell each other about their vacation.

1	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	3	subj	_	_
2	se	lui	PRON	_	Person=3|PronType=Prs	3	comp:obl	_	Reflex=Yes
3	racontent	raconter	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	leurs	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=3|PronType=Prs	5	det	_	_
5	vacances	vacance	NOUN	_	Gender=Fem|Number=Plur	3	comp:obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_
{{</conll>}}

* `comp@expl` : For pronominal verbs i.e. verbs that can only be used with a relexive pronoun (such as _se souvenir_, _s'évaporer_, etc.), or lexicalised verb senses (such as _s'entendre_).
{{<conll>}}
# text = tu te souviens ?
# text_en = do you remember ?

1	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	3	subj	_	_
2	te	se	PRON	_	Number=Sing|Person=2|PronType=Prs	3	comp@expl	_	InIdiom=Yes|Reflex=Yes
3	souviens	souvenir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	ExtPos=VERB|Idiom=Yes
4	?	?	PUNCT	_	_	3	punct	_	_
{{</conll>}}

* `comp@pass`: For passive reflexive constructions, where the the object has been promoted in the subject position: _je vend des livres_ => _les livres se vendent bien_. The marker _se_ is still analysed as a reflexive pronoun, even if it has no pronominal vlue.
{{<conll>}}
# text = donc ça s'est fait.
# text_en = and then it was done 

1	donc	donc	ADV	_	_	4	discourse	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	subj	_	_
3	s'	se	PRON	_	Person=3|PronType=Prs	5	comp@pass	_	Reflex=Yes|SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	comp:aux	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_
{{</conll>}}
