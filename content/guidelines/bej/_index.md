---
layout: default
title: Beja SUD Guidelines
src: guidelines/bej/_index.md
---

**NB:** This page is under construction. A overview of the SUD annotation of the Beja corpus is available in the paper: [A morph-based and a word-based treebank for Beja](https://aclanthology.org/2021.tlt-1.5.pdf).

## Annotation at the morph level

The SUD corpus of Beja is firstly annotated at the morph level (`SUD_Beja-NSC`).
In the UD repository, the word-based corpus is released as `UD_Beja-NSC`.

The two other combinations are also available:
 * `SUD_Beja-NSC_WB` the data following SUD guidelines but at the word level
 * `UD_Beja-NSC_MB` the data following UD guidelines but at the morph level

The table below shows how the conversions are made in order to produce all the corpora described above.

|   | SUD | | UD |
|:-:|:-----:|:-:|:----:|
| **morph-based** | **`SUD_Beja-NSC`** [![gh](/images/Octocat.png)](https://github.com/surfacesyntacticud/SUD_Beja-NSC) [![gm](/images/square_g.svg)](http://universal.grew.fr/?corpus=SUD_Beja-NSC@latest) | [&#x21e8;](https://github.com/surfacesyntacticud/tools/tree/master/converter) | `UD_Beja-NSC_MB` [![gh](/images/Octocat.png)](https://github.com/UniversalDependencies/UD_Beja-NSC/tree/dev/not-to-release) [![gm](/images/square_g.svg)](http://universal.grew.fr/?corpus=UD_Beja-NSC_MB@conv) |
| | [&#x21e9;](https://github.com/surfacesyntacticud/tools/tree/master/morph2word) | | |
| **word-based** | `SUD_Beja-NSC_WB` [![gh](/images/Octocat.png)](https://github.com/surfacesyntacticud/SUD_Beja-NSC/tree/master/word_based) [![gm](/images/square_g.svg)](http://universal.grew.fr/?corpus=SUD_Beja-NSC_WB@latest) | [&#x21e8;](https://github.com/surfacesyntacticud/tools/tree/master/converter) | **`UD_Beja-NSC`** [![gh](/images/Octocat.png)](https://github.com/UniversalDependencies/UD_Beja-NSC/tree/dev) [![gm](/images/square_g.svg)](http://universal.grew.fr/?corpus=UD_Beja-NSC@conv) |
