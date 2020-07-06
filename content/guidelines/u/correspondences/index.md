## Correspondences between SUD and UD

This page is dedicated to exploring several key differences between SUD and UD labels, and the correspondences between the two schemes (For information about the conversion process, see [SUD corpora](../../../data)).

SUD is a dependency-based annotation scheme. Annotation choices rely on surface-syntactic distributional criteria, while at the same time attempting to maintain convertibility with the UD annotation scheme as much as possible.

SUD represents an alternative rather than a competitor to UD, and was designed in such a way that the two can convey the same informational content. The two schemes enjoy a nearly perfect degree of two-way convertibility, meaning that conversions between the two schemes can take place without informational loss in most cases. Because of this, correspondences between the two are most often regular and predictable.

Correspondences between SUD and UD relationships are impacted by several key properties. Firstly, SUD annotations are less redundant and more economical than UD annotations. For example, we can see in the table below that SUD uses a single `subj` relation which comprises both the `nsubj` (nominal subject) and `csubj` (clausal subject) relationships in UD. However, the information provided by UD's distinction between nominal and clausal subjects is not lost in under the simpler SUD scheme: the differentiation can be recovered automatically from the POS of the subject and its context, though how this context is taken into account depends on the language. In total, a subset of 17 UD relations (`nsubj`, `csubj`, `obj`, `iobj`, `obl`, `xcomp`, `ccomp`, `amod`, `nmod`, `nummod`, `advmod`, `acl`, `advcl`, `aux`, `cop`, `case`, `mark`) is replaced by three major relations in SUD: `subj`, `comp`, `mod`, as well as `udep` to a marginal extent.

In addition to its more economical set of labels, SUD also diverges from UD in the sense that it does not systematically label content words as heads. Instead, SUD treats adpositions, subordinating conjunctions, auxiliaries, and copulas as heads. This is because SUD identifies surface syntactic heads using the main criterion that they determine the distribution of the syntactic unit in question. For example, the SUD scheme would identify the preposition *to* in the sentence *Peter talked to Mary* as a head, since it determines the distribution of *Mary*. The UD scheme would label *Mary* as a head based on the fact that it is a content word. Because of this difference, **the direction of certain syntactic relationships is reversed between SUD and UD**. This namely applies to the SUD relationships `aux`, `cop`, `case`, and `mark`, which are also highlighted in **bold** in the correspondence table below. You may also find more information about this aspect of SUD relations on the [general principles](../general_principles) page.

### Table of correspondences between UD and SUD

{{< rawhtml >}}

<table class="center">
    <thead>
        <tr>
            <th>UD</th>
            <th>SUD</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>nsubj</td>
          <td rowspan=2>subj</td>
        </tr>
        <tr>
          <td>csubj</td>
        </tr>
        <tr>
          <td><b>aux</b></td>
          <td>comp:aux</td>
        </tr>
        <tr>
          <td><b>cop</b></td>
          <td>comp:pred</td>
        </tr>
        <tr>
          <td>xcomp</td>
          <td rowspan=5>comp:obj</td>
        <tr>
          <td><b>case</b></td>
        </tr>
        <tr><td><b>mark</b></td></tr>
        <tr><td>obj</td></tr>
        <tr><td>ccomp</td></tr>
        <tr>
          <td>ccomp</td>
          <td rowspan=3>comp:obl</td>
        </tr>
        <tr><td>obl</td></tr>
        <tr>
          <td>iobj</td>
        </tr>
        <tr><td>obl</td><td>udep</td></tr>
        <tr>
          <td rowspan>obl, acl, nmod</td>
          <td rowspan=5>mod</td>
        </tr>
        <tr><td>advcl</td></tr>
        <tr><td>advmod</td></tr>
        <tr><td>amod</td></tr>
        <tr><td>nummod</td></tr>
        <tr>
          <td rowspan=2>fixed</td>
          <td>unk@fixed</td>
        </tr>
        <tr>
          <td>...@fixed</td>
        </tr>

    </tbody>
</table>
</div>
{{< /rawhtml >}}


### Example of a sentence annotated in SUD (above) and UD (below).

{{< conll >}}
# sent_id = email-enronsent38_01-0114
# text = I am out of the office today but will be back tomorrow.
1	I	_	PRON	_	_	2	subj	_	_
2	am	_	AUX	_	_	0	root	_	_
3	out	_	ADP	_	_	2	comp:pred	_	_
4	of	_	ADP	_	_	3	comp:obj	_	_
5	the	_	DET	_	_	6	det	_	_
6	office	_	NOUN	_	_	4	comp:obj	_	_
7	today	_	NOUN	_	_	2	mod	_	_
8	but	_	CCONJ	_	_	9	cc	_	_
9	will	_	AUX	_	_	2	conj	_	_
10	be	_	AUX	_	_	9	comp:aux	_	_
11	back	_	ADV	_	_	10	comp:pred	_	_
12	tomorrow	_	NOUN	_	_	9	mod	_	_
13	.	_	PUNCT	.	_	2	punct	_	_
{{< /conll >}}

{{< conll >}}
# sent_id = email-enronsent38_01-0114
# text = I am out of the office today but will be back tomorrow.
1	I	_	PRON	_	_	6	nsubj	_	_
2	am	_	AUX	_	_	6	cop	_	_
3	out	_	ADP	_	_	6	case	_	_
4	of	_	ADP	_	_	6	case	_	_
5	the	_	DET	_	_	6	det	_	_
6	office	_	NOUN	_	_	0	root	_	_
7	today	_	NOUN	_	_	6	obl:tmod	_	_
8	but	_	CCONJ	_	_	11	cc	_	_
9	will	_	AUX	_	_	11	aux	_	_
10	be	_	AUX	_	_	11	cop	_	_
11	back	_	ADV	_	_	6	conj	_	_
12	tomorrow	_	NOUN	_		11	obl:tmod	_	_
13	.	_	PUNCT	.	_	6	punct	_	_
{{< /conll >}}
