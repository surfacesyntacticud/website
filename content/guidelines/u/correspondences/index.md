## Correspondences between SUD and UD

SUD represents an alternative to UD rather than a competing annotation scheme, and was designed in such a way that the two can convey the same informational content. The two schemes exhibit nearly perfect isomorphism, meaning that conversion can go both ways without informational loss in most cases. This means that correspondences between the two are most often regular and predictable.

Correspondences between SUD and and UD relationships are impacted by several key properties. Firstly, SUD annotations are less redundant and more economical than UD annotations. For example, we can see in the table below that SUD uses a single `subj` relation which comprises both the `nsubj` (nominal subject) and `csubj` (clausal subject) relationships in UD. However, the information provided by UD's distinction between nominal and clausal subjects is not lost in under the simpler SUD scheme: the differentiation can be recovered automatically from the POS of the subject and its context, though how this context is taken into account depends on the language.

Secondly, SUD also diverges from UD in the sense that it does not systematically label content words as heads. Instead, SUD treats adpositions, subordinating conjunctions, auxiliaries, and copulas as heads. This is because SUD identifies surface syntactic heads using the main criterion that they determine the distribution of the syntactic unit in question. For example, the SUD scheme would identify the preposition *to* in the sentence *Peter talked to Mary* as a head, since it determines the distribution of *Mary*. The UD scheme would label *Mary* as a head based on the fact that it is a function word. Because of this difference, **the direction of certain syntactic relationships is reversed between SUD and UD**. This namely applies to the SUD relationships `aux`, `cop`, `case`, and `mark`, which are also highlighted in **bold** in the correspondence table below. You may also find more information about this aspect of SUD relations on the [general principles](../general_principles) page.

{{< rawhtml >}}
<table>
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
          <td rowspan=4>comp:obj</td>
        <tr>
          <td><b>case</b></td>
        </tr>
        <tr><td><b>mark</b></td></tr>
        <tr><td>obj</td></tr>
        <tr>
          <td>ccomp</td>
          <td rowspan=2>comp:obl</td>
        </tr>
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
{{< /rawhtml >}}
