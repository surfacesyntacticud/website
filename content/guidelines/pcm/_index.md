# SUD for Naija

This page outlines various features specific to Naija.

### comp:aux relationships

The auxiliary verb dey is connected to the verbs it accompanies using a comp:aux relationship, as so:

{{< conll >}}
1	so	so	ADV	_	_	5	discourse	_	AlignBegin=117700|AlignEnd=118140|Gloss=so
2	#	#	PUNCT	_	_	1	punct	_	AlignBegin=118140|AlignEnd=118418|Gloss=PUNCT
3	she	she	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	subj	_	AlignBegin=118418|AlignEnd=118571|Gloss=NOM.F.SG.3
4	{	{	PUNCT	_	_	5	punct	_	AlignBegin=118571|AlignEnd=118601|Gloss=PUNCT
5	dey	dey	AUX	_	Aspect=Imp	0	root	_	AlignBegin=118601|AlignEnd=118811|Gloss=IPFV
6	chop	chop	VERB	_	_	5	comp:aux	_	AlignBegin=118811|AlignEnd=119421|Gloss=eat
7	|c	|c	PUNCT	_	_	8	punct	_	AlignBegin=119421|AlignEnd=119451|Gloss=PUNCT
8	dey	dey	AUX	_	Aspect=Imp	5	conj:coord	_	AlignBegin=119451|AlignEnd=119581|Gloss=IPFV
9	sleep	sleep	VERB	_	_	8	comp:aux	_	AlignBegin=119581|AlignEnd=119861|Gloss=sleep
10	|c	|c	PUNCT	_	_	11	punct	_	AlignBegin=119861|AlignEnd=119891|Gloss=PUNCT
11	everyting	everyting	PRON	_	_	8	conj:coord	_	AlignBegin=119891|AlignEnd=120391|Gloss=everything
12	}	}	PUNCT	_	_	5	punct	_	AlignBegin=120391|AlignEnd=120421|Gloss=PUNCT
13	//	//	PUNCT	_	_	5	punct	_	AlignBegin=120391|AlignEnd=120421|Gloss=PUNCT
{{< /conll >}}

### subj relationships

In addition to connecting verbs to their subjects, Naija and other languages without which do not always make use of a copula use the subj relationship to connect adjectives to their subjects.


{{< conll >}}
1	e	e	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	subj	_	AlignBegin=97985|AlignEnd=98254|Gloss=NOM.SG.3
2	no	no	PART	_	Polarity=Neg	3	mod	_	AlignBegin=98254|AlignEnd=98522|Gloss=NEG
3	good	good	ADJ	_	_	0	root	_	AlignBegin=98522|AlignEnd=98791|Gloss=good
4	//	//	PUNCT	_	_	3	punct	_	AlignBegin=98791|AlignEnd=98791|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
1	#	#	PUNCT	_	_	5	punct	_	AlignBegin=172698|AlignEnd=173760|Gloss=PUNCT
2	[eng	[eng	PUNCT	_	_	5	punct	_	AlignBegin=172698|AlignEnd=173760|Gloss=PUNCT
3	but	but	CCONJ	_	_	5	cc	_	AlignBegin=173760|AlignEnd=174011|Gloss=but
4	beer	beer	NOUN	_	_	5	subj	_	AlignBegin=174011|AlignEnd=174285|Gloss=beer
5	is	be	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Cop	0	root	_	AlignBegin=174285|AlignEnd=174408|Gloss=be.IND.SG.3.PRS.FIN
6	very	very	ADV	_	_	7	mod	_	AlignBegin=174408|AlignEnd=174691|Gloss=very
7	good	good	ADJ	_	_	5	comp:pred	_	AlignBegin=174691|AlignEnd=175055|Gloss=good
8	#	#	PUNCT	_	_	9	punct	_	AlignBegin=175055|AlignEnd=176265|Gloss=PUNCT
9	because	because	SCONJ	_	_	7	mod	_	AlignBegin=176265|AlignEnd=177027|Gloss=because
10	#	#	PUNCT	_	_	12	punct	_	AlignBegin=177027|AlignEnd=177595|Gloss=PUNCT
11	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	subj	_	AlignBegin=177595|AlignEnd=177680|Gloss=NOM.SG.3
12	would	would	AUX	_	VerbForm=Fin	9	comp:obj	_	AlignBegin=177680|AlignEnd=177903|Gloss=would.FIN
13	help	help	VERB	_	_	12	comp:aux	_	AlignBegin=177903|AlignEnd=178259|Gloss=help
14	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	13	comp:obj	_	AlignBegin=178259|AlignEnd=178530|Gloss=NOM.2
15	eng]	eng]	PUNCT	_	_	5	punct	_	AlignBegin=178530|AlignEnd=178560|Gloss=PUNCT
16	//	//	PUNCT	_	_	5	punct	_	AlignBegin=178530|AlignEnd=178560|Gloss=PUNCT
{{< /conll >}}

{{< conll >}}
1	she	she	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	AlignBegin=75500|AlignEnd=75698|Gloss=NOM.F.SG.3
2	con	con	AUX	_	Aspect=Cons	0	root	_	AlignBegin=75698|AlignEnd=75896|Gloss=CONS
3	dey	dey	AUX	_	Aspect=Imp	2	comp:aux	_	AlignBegin=75896|AlignEnd=76094|Gloss=IPFV
4	form	form	VERB	_	_	3	comp:aux	_	AlignBegin=76094|AlignEnd=76292|Gloss=form
5	sey	sey	SCONJ	_	_	4	comp:obj	_	AlignBegin=76292|AlignEnd=76490|Gloss=COMP
6	[	[	PUNCT	_	_	8	punct	_	AlignBegin=76490|AlignEnd=76490|Gloss=PUNCT
7	she	she	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	subj	_	AlignBegin=76490|AlignEnd=76688|Gloss=NOM.F.SG.3
8	be	be	VERB	_	PartType=Cop	5	comp:obj	_	AlignBegin=76688|AlignEnd=76886|Gloss=be1
9	city	city	NOUN	_	_	10	compound	_	AlignBegin=76886|AlignEnd=77084|Gloss=city
10	girl	girl	NOUN	_	_	8	comp:pred	_	AlignBegin=77084|AlignEnd=77282|Gloss=girl
11	o	o	PART	_	PartType=Disc	10	mod:emph	_	AlignBegin=77282|AlignEnd=77480|Gloss=EMPH
12	]	]	PUNCT	_	_	8	punct	_	AlignBegin=77480|AlignEnd=77480|Gloss=PUNCT
13	//	//	PUNCT	_	_	2	punct	_	AlignBegin=77480|AlignEnd=77480|Gloss=PUNCT
{{< /conll >}}
