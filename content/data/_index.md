---
layout: default
title: SUD data • Version 2.13
src: data/_index.md
---

In version 2.13 of SUD data, released in November 2023:
 - 3 corpora are maintained in the mSUD format (called **Native mSUD**). For these corpora, both mSUD and SUD versions are available in the tgz archive.
 - 7 corpora are maintained in the SUD format (called **Native SUD**)
 - 248 corpora are automatically converted to SUD from the corresponding UD data (version 2.13)

Hence, the full 2.13 release contains 258 SUD corpora, together with the mSUD version for three of them: `Beja-NSC`, `Chinese-Beginner` and `Chinese-PatentChar`.
Note that UD 2.13 has 259 corpora but one corpus cannot be released in the SUD version, because of its CC license which contain the **ND** (NoDerivative) flags:
 - [UD_Portuguese-CINTIL](https://github.com/UniversalDependencies/UD_Portuguese-CINTIL) &rarr; `License: CC BY-NC-ND 4.0`

## Download all corpora
Download the full set of 258 SUD corpora: [sud-treebanks-v2.13.tgz](https://grew.fr/download/sud-treebanks-v2.13.tgz).

# Native SUD and mSUD corpora

The 3 **Native mSUD** corpora:

| Corpus 2.13 | Native mSUD | Conversion to SUD |
|--------|------------|-------|
| `Beja-NSC`| [Files](https://github.com/surfacesyntacticud/SUD_Beja-NSC/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=mSUD_Beja-NSC@2.13) | [Files](https://github.com/surfacesyntacticud/mSUD_Beja-NSC/tree/r2.13/not-to-release/SUD_Beja-NSC) • [Grew-match](http://universal.grew.fr/?corpus=SUD_Beja-NSC@2.13) |
| `Chinese-Beginner`|[Files](https://github.com/surfacesyntacticud/SUD_Chinese-Beginner/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=mSUD_Chinese-Beginner@2.13) |  [Files](https://github.com/surfacesyntacticud/mSUD_Chinese-Beginner/tree/r2.13/not-to-release/SUD_Chinese-Beginner) • [Grew-match](http://universal.grew.fr/?corpus=SUD_Chinese-Beginner@2.13) |
| `Chinese-PatentChar`|  [Files](https://github.com/surfacesyntacticud/SUD_Chinese-PatentChar/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=mSUD_Chinese-Beginner@2.13) | [Files](https://github.com/surfacesyntacticud/mSUD_Chinese-PatentChar/tree/r2.13/not-to-release/SUD_Chinese-PatentChar) • [Grew-match](http://universal.grew.fr/?corpus=SUD_Chinese-PatentChar@2.13) |

The 7 **Native SUD** corpora:

| Corpus | Native SUD |
|--------|------------|
| [`SUD_French-GSD`](https://github.com/surfacesyntacticud/SUD_French-GSD) | [Files](https://github.com/surfacesyntacticud/SUD_French-GSD/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=SUD_French-GSD@2.13) |
| [`SUD_French-ParisStories`](https://github.com/surfacesyntacticud/SUD_French-ParisStories) | [Files](https://github.com/surfacesyntacticud/SUD_French-ParisStories/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=SUD_French-ParisStories@2.13) |
| [`SUD_French-Rhapsodie`](https://github.com/surfacesyntacticud/SUD_French-Rhapsodie) | [Files](https://github.com/surfacesyntacticud/SUD_French-Rhapsodie/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=SUD_French-Rhapsodie@2.13) |
| [`SUD_French-Sequoia`](https://github.com/surfacesyntacticud/SUD_French-Sequoia) | [Files](https://github.com/surfacesyntacticud/SUD_French-Sequoia/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=SUD_French-Sequoia@2.13) |
| [`SUD_Haitian_Creole-Autogramm`](https://github.com/surfacesyntacticud/SUD_Haitian_Creole-Autogramm) | [Files](https://github.com/surfacesyntacticud/SUD_Haitian_Creole-Autogramm/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=SUD_Haitian_Creole-Autogramm@2.13) |
| [`SUD_Naija-NSC`](https://github.com/surfacesyntacticud/SUD_Naija-NSC) | [Files](https://github.com/surfacesyntacticud/SUD_Naija-NSC/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=SUD_Naija-NSC@2.13) |
| [`SUD_Zaar-Autogramm`](https://github.com/surfacesyntacticud/SUD_Zaar-Autogramm) | [Files](https://github.com/surfacesyntacticud/SUD_Zaar-Autogramm/archive/refs/tags/r2.13.tar.gz) • [Grew-match](http://universal.grew.fr/?corpus=SUD_Zaar-Autogramm@2.13) |



# Conversion from UD

  * 248 corpora of SUD 2.13 are obtained by conversion from UD. The version of the data and tools used:
    * Input data: [version 2.13 of UD corpora](http://hdl.handle.net/11234/1-5287)
    * **Grew** conversion rules system: [tag `v2.13` of the conversion system](https://github.com/surfacesyntacticud/tools/tree/v2.13/converter)
    * Tools: [**grew**](https://gitlab.inria.fr/grew/grew) version 1.14.0, [**grewlib**](https://github.com/grew-nlp/grewlib) version 1.14.0 and [**conll**](https://github.com/grew-nlp/conll) version 1.17.2


## Access to each corpus

In the table below, for each corpus you can access to the [Grew-match](http://universal.grew.fr) query system.


| Corpus | Grew-match |
|--------|------------|
| `Abaza-ATB` | [[Query](http://universal.grew.fr/?corpus=SUD_Abaza-ATB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Abaza-ATB@2.13_table.html)] |
| `Afrikaans-AfriBooms` | [[Query](http://universal.grew.fr/?corpus=SUD_Afrikaans-AfriBooms@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Afrikaans-AfriBooms@2.13_table.html)] |
| `Akkadian-PISANDUB` | [[Query](http://universal.grew.fr/?corpus=SUD_Akkadian-PISANDUB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Akkadian-PISANDUB@2.13_table.html)] |
| `Akkadian-RIAO` | [[Query](http://universal.grew.fr/?corpus=SUD_Akkadian-RIAO@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Akkadian-RIAO@2.13_table.html)] |
| `Akuntsu-TuDeT` | [[Query](http://universal.grew.fr/?corpus=SUD_Akuntsu-TuDeT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Akuntsu-TuDeT@2.13_table.html)] |
| `Albanian-TSA` | [[Query](http://universal.grew.fr/?corpus=SUD_Albanian-TSA@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Albanian-TSA@2.13_table.html)] |
| `Amharic-ATT` | [[Query](http://universal.grew.fr/?corpus=SUD_Amharic-ATT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Amharic-ATT@2.13_table.html)] |
| `Ancient_Greek-Perseus` | [[Query](http://universal.grew.fr/?corpus=SUD_Ancient_Greek-Perseus@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Ancient_Greek-Perseus@2.13_table.html)] |
| `Ancient_Greek-PROIEL` | [[Query](http://universal.grew.fr/?corpus=SUD_Ancient_Greek-PROIEL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Ancient_Greek-PROIEL@2.13_table.html)] |
| 🆕 `Ancient_Greek-PTNK` | [[Query](http://universal.grew.fr/?corpus=SUD_Ancient_Greek-PTNK@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Ancient_Greek-PTNK@2.13_table.html)] |
| `Ancient_Hebrew-PTNK` | [[Query](http://universal.grew.fr/?corpus=SUD_Ancient_Hebrew-PTNK@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Ancient_Hebrew-PTNK@2.13_table.html)] |
| `Apurina-UFPA` | [[Query](http://universal.grew.fr/?corpus=SUD_Apurina-UFPA@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Apurina-UFPA@2.13_table.html)] |
| `Arabic-NYUAD` | [[Query](http://universal.grew.fr/?corpus=SUD_Arabic-NYUAD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Arabic-NYUAD@2.13_table.html)] |
| `Arabic-PADT` | [[Query](http://universal.grew.fr/?corpus=SUD_Arabic-PADT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Arabic-PADT@2.13_table.html)] |
| `Arabic-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Arabic-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Arabic-PUD@2.13_table.html)] |
| `Armenian-ArmTDP` | [[Query](http://universal.grew.fr/?corpus=SUD_Armenian-ArmTDP@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Armenian-ArmTDP@2.13_table.html)] |
| `Armenian-BSUT` | [[Query](http://universal.grew.fr/?corpus=SUD_Armenian-BSUT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Armenian-BSUT@2.13_table.html)] |
| `Assyrian-AS` | [[Query](http://universal.grew.fr/?corpus=SUD_Assyrian-AS@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Assyrian-AS@2.13_table.html)] |
| `Bambara-CRB` | [[Query](http://universal.grew.fr/?corpus=SUD_Bambara-CRB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Bambara-CRB@2.13_table.html)] |
| `Basque-BDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Basque-BDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Basque-BDT@2.13_table.html)] |
| `Beja-NSC` (Native) | [[Query](http://universal.grew.fr/?corpus=SUD_Beja-NSC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Beja-NSC@2.13_table.html)] |
| `Belarusian-HSE` | [[Query](http://universal.grew.fr/?corpus=SUD_Belarusian-HSE@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Belarusian-HSE@2.13_table.html)] |
| `Bengali-BRU` | [[Query](http://universal.grew.fr/?corpus=SUD_Bengali-BRU@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Bengali-BRU@2.13_table.html)] |
| `Bhojpuri-BHTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Bhojpuri-BHTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Bhojpuri-BHTB@2.13_table.html)] |
| `Bororo-BDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Bororo-BDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Bororo-BDT@2.13_table.html)] |
| `Breton-KEB` | [[Query](http://universal.grew.fr/?corpus=SUD_Breton-KEB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Breton-KEB@2.13_table.html)] |
| `Bulgarian-BTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Bulgarian-BTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Bulgarian-BTB@2.13_table.html)] |
| `Buryat-BDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Buryat-BDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Buryat-BDT@2.13_table.html)] |
| `Cantonese-HK` | [[Query](http://universal.grew.fr/?corpus=SUD_Cantonese-HK@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Cantonese-HK@2.13_table.html)] |
| `Catalan-AnCora` | [[Query](http://universal.grew.fr/?corpus=SUD_Catalan-AnCora@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Catalan-AnCora@2.13_table.html)] |
| `Cebuano-GJA` | [[Query](http://universal.grew.fr/?corpus=SUD_Cebuano-GJA@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Cebuano-GJA@2.13_table.html)] |
| `Chinese-CFL` | [[Query](http://universal.grew.fr/?corpus=SUD_Chinese-CFL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Chinese-CFL@2.13_table.html)] |
| `Chinese-GSD` | [[Query](http://universal.grew.fr/?corpus=SUD_Chinese-GSD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Chinese-GSD@2.13_table.html)] |
| `Chinese-GSDSimp` | [[Query](http://universal.grew.fr/?corpus=SUD_Chinese-GSDSimp@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Chinese-GSDSimp@2.13_table.html)] |
| 🆕 `Chinese-Beginner` (Native) | [[Query](http://universal.grew.fr/?corpus=SUD_Chinese-Beginner@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Chinese-Beginner@2.13_table.html)] |
| `Chinese-HK` | [[Query](http://universal.grew.fr/?corpus=SUD_Chinese-HK@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Chinese-HK@2.13_table.html)] |
| `Chinese-PatentChar` (Native) | [[Query](http://universal.grew.fr/?corpus=SUD_Chinese-PatentChar@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Chinese-PatentChar@2.13_table.html)] |
| `Chinese-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Chinese-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Chinese-PUD@2.13_table.html)] |
| `Chukchi-HSE` | [[Query](http://universal.grew.fr/?corpus=SUD_Chukchi-HSE@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Chukchi-HSE@2.13_table.html)] |
| 🆕 `Classical_Armenian-CAVaL` | [[Query](http://universal.grew.fr/?corpus=SUD_Classical_Armenian-CAVaL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Classical_Armenian-CAVaL@2.13_table.html)] |
| `Classical_Chinese-Kyoto` | [[Query](http://universal.grew.fr/?corpus=SUD_Classical_Chinese-Kyoto@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Classical_Chinese-Kyoto@2.13_table.html)] |
| `Coptic-Scriptorium` | [[Query](http://universal.grew.fr/?corpus=SUD_Coptic-Scriptorium@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Coptic-Scriptorium@2.13_table.html)] |
| `Croatian-SET` | [[Query](http://universal.grew.fr/?corpus=SUD_Croatian-SET@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Croatian-SET@2.13_table.html)] |
| `Czech-CAC` | [[Query](http://universal.grew.fr/?corpus=SUD_Czech-CAC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Czech-CAC@2.13_table.html)] |
| `Czech-CLTT` | [[Query](http://universal.grew.fr/?corpus=SUD_Czech-CLTT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Czech-CLTT@2.13_table.html)] |
| `Czech-FicTree` | [[Query](http://universal.grew.fr/?corpus=SUD_Czech-FicTree@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Czech-FicTree@2.13_table.html)] |
| `Czech-PDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Czech-PDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Czech-PDT@2.13_table.html)] |
| `Czech-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Czech-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Czech-PUD@2.13_table.html)] |
| 🆕 `Czech-Poetry` | [[Query](http://universal.grew.fr/?corpus=SUD_Czech-Poetry@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Czech-Poetry@2.13_table.html)] |
| `Danish-DDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Danish-DDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Danish-DDT@2.13_table.html)] |
| `Dutch-Alpino` | [[Query](http://universal.grew.fr/?corpus=SUD_Dutch-Alpino@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Dutch-Alpino@2.13_table.html)] |
| `Dutch-LassySmall` | [[Query](http://universal.grew.fr/?corpus=SUD_Dutch-LassySmall@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Dutch-LassySmall@2.13_table.html)] |
| `English-Atis` | [[Query](http://universal.grew.fr/?corpus=SUD_English-Atis@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_English-Atis@2.13_table.html)] |
| `English-ESLSpok` | [[Query](http://universal.grew.fr/?corpus=SUD_English-ESLSpok@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_English-ESLSpok@2.13_table.html)] |
| `English-EWT` | [[Query](http://universal.grew.fr/?corpus=SUD_English-EWT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_English-EWT@2.13_table.html)] |
| `English-GENTLE` | [[Query](http://universal.grew.fr/?corpus=SUD_English-GENTLE@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_English-GENTLE@2.13_table.html)] |
| `English-GUM` | [[Query](http://universal.grew.fr/?corpus=SUD_English-GUM@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_English-GUM@2.13_table.html)] |
| `English-GUMReddit` | [[Query](http://universal.grew.fr/?corpus=SUD_English-GUMReddit@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_English-GUMReddit@2.13_table.html)] |
| `English-LinES` | [[Query](http://universal.grew.fr/?corpus=SUD_English-LinES@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_English-LinES@2.13_table.html)] |
| `English-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_English-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_English-PUD@2.13_table.html)] |
| `English-Pronouns` | [[Query](http://universal.grew.fr/?corpus=SUD_English-Pronouns@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_English-Pronouns@2.13_table.html)] |
| `Erzya-JR` | [[Query](http://universal.grew.fr/?corpus=SUD_Erzya-JR@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Erzya-JR@2.13_table.html)] |
| `Estonian-EDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Estonian-EDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Estonian-EDT@2.13_table.html)] |
| `Estonian-EWT` | [[Query](http://universal.grew.fr/?corpus=SUD_Estonian-EWT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Estonian-EWT@2.13_table.html)] |
| `Faroese-OFT` | [[Query](http://universal.grew.fr/?corpus=SUD_Faroese-OFT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Faroese-OFT@2.13_table.html)] |
| `Faroese-FarPaHC` | [[Query](http://universal.grew.fr/?corpus=SUD_Faroese-FarPaHC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Faroese-FarPaHC@2.13_table.html)] |
| `Finnish-FTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Finnish-FTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Finnish-FTB@2.13_table.html)] |
| `Finnish-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Finnish-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Finnish-PUD@2.13_table.html)] |
| `Finnish-TDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Finnish-TDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Finnish-TDT@2.13_table.html)] |
| `Finnish-OOD` | [[Query](http://universal.grew.fr/?corpus=SUD_Finnish-OOD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Finnish-OOD@2.13_table.html)] |
| `French-FQB` | [[Query](http://universal.grew.fr/?corpus=SUD_French-FQB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_French-FQB@2.13_table.html)] |
| `French-GSD` (Native) | [[Query](http://universal.grew.fr/?corpus=SUD_French-GSD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_French-GSD@2.13_table.html)] |
| `French-ParTUT` | [[Query](http://universal.grew.fr/?corpus=SUD_French-ParTUT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_French-ParTUT@2.13_table.html)] |
| `French-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_French-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_French-PUD@2.13_table.html)] |
| `French-Sequoia` (Native) | [[Query](http://universal.grew.fr/?corpus=SUD_French-Sequoia@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_French-Sequoia@2.13_table.html)] |
| `French-ParisStories` (Native)  | [[Query](http://universal.grew.fr/?corpus=SUD_French-ParisStories@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_French-ParisStories@2.13_table.html)] |
| `French-Rhapsodie` (Native)  | [[Query](http://universal.grew.fr/?corpus=SUD_French-Rhapsodie@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_French-Rhapsodie@2.13_table.html)] |
| `Frisian_Dutch-Fame` | [[Query](http://universal.grew.fr/?corpus=SUD_Frisian_Dutch-Fame@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Frisian_Dutch-Fame@2.13_table.html)] |
| `Galician-CTG` | [[Query](http://universal.grew.fr/?corpus=SUD_Galician-CTG@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Galician-CTG@2.13_table.html)] |
| `Galician-TreeGal` | [[Query](http://universal.grew.fr/?corpus=SUD_Galician-TreeGal@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Galician-TreeGal@2.13_table.html)] |
| 🆕 `Georgian-GLC` | [[Query](http://universal.grew.fr/?corpus=SUD_Georgian-GLC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Georgian-GLC@2.13_table.html)] |
| `German-GSD` | [[Query](http://universal.grew.fr/?corpus=SUD_German-GSD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_German-GSD@2.13_table.html)] |
| `German-HDT` | [[Query](http://universal.grew.fr/?corpus=SUD_German-HDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_German-HDT@2.13_table.html)] |
| `German-LIT` | [[Query](http://universal.grew.fr/?corpus=SUD_German-LIT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_German-LIT@2.13_table.html)] |
| `German-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_German-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_German-PUD@2.13_table.html)] |
| `Gothic-PROIEL` | [[Query](http://universal.grew.fr/?corpus=SUD_Gothic-PROIEL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Gothic-PROIEL@2.13_table.html)] |
| `Greek-GDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Greek-GDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Greek-GDT@2.13_table.html)] |
| `Greek-GUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Greek-GUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Greek-GUD@2.13_table.html)] |
| `Guajajara-TuDeT` | [[Query](http://universal.grew.fr/?corpus=SUD_Guajajara-TuDeT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Guajajara-TuDeT@2.13_table.html)] |
| `Guarani-OldTuDeT` | [[Query](http://universal.grew.fr/?corpus=SUD_Guarani-OldTuDeT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Guarani-OldTuDeT@2.13_table.html)] |
| `Haitian_Creole-Autogramm` | [[Query](http://universal.grew.fr/?corpus=SUD_Haitian_Creole-Autogramm@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Haitian_Creole-Autogramm@2.13_table.html)] |
| `Hebrew-HTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Hebrew-HTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Hebrew-HTB@2.13_table.html)] |
| `Hebrew-IAHLTwiki` | [[Query](http://universal.grew.fr/?corpus=SUD_Hebrew-IAHLTwiki@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Hebrew-IAHLTwiki@2.13_table.html)] |
| 🆕 `Highland_Puebla_Nahuatl-ITML` | [[Query](http://universal.grew.fr/?corpus=SUD_Highland_Puebla_Nahuatl-ITML@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Highland_Puebla_Nahuatl-ITML@2.13_table.html)] |
| `Hindi-HDTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Hindi-HDTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Hindi-HDTB@2.13_table.html)] |
| `Hindi-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Hindi-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Hindi-PUD@2.13_table.html)] |
| `Hittite-HitTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Hittite-HitTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Hittite-HitTB@2.13_table.html)] |
| `Hungarian-Szeged` | [[Query](http://universal.grew.fr/?corpus=SUD_Hungarian-Szeged@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Hungarian-Szeged@2.13_table.html)] |
| `Icelandic-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Icelandic-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Icelandic-PUD@2.13_table.html)] |
| `Icelandic-Modern` | [[Query](http://universal.grew.fr/?corpus=SUD_Icelandic-Modern@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Icelandic-Modern@2.13_table.html)] |
| `Icelandic-IcePaHC` | [[Query](http://universal.grew.fr/?corpus=SUD_Icelandic-IcePaHC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Icelandic-IcePaHC@2.13_table.html)] |
| `Indonesian-GSD` | [[Query](http://universal.grew.fr/?corpus=SUD_Indonesian-GSD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Indonesian-GSD@2.13_table.html)] |
| `Indonesian-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Indonesian-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Indonesian-PUD@2.13_table.html)] |
| `Indonesian-CSUI` | [[Query](http://universal.grew.fr/?corpus=SUD_Indonesian-CSUI@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Indonesian-CSUI@2.13_table.html)] |
| `Irish-Cadhan` | [[Query](http://universal.grew.fr/?corpus=SUD_Irish-Cadhan@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Irish-Cadhan@2.13_table.html)] |
| `Irish-IDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Irish-IDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Irish-IDT@2.13_table.html)] |
| `Irish-TwittIrish` | [[Query](http://universal.grew.fr/?corpus=SUD_Irish-TwittIrish@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Irish-TwittIrish@2.13_table.html)] |
| `Italian-ISDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-ISDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-ISDT@2.13_table.html)] |
| `Italian-MarkIT` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-MarkIT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-MarkIT@2.13_table.html)] |
| `Italian-ParTUT` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-ParTUT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-ParTUT@2.13_table.html)] |
| `Italian-PoSTWITA` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-PoSTWITA@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-PoSTWITA@2.13_table.html)] |
| `Italian-TWITTIRO` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-TWITTIRO@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-TWITTIRO@2.13_table.html)] |
| `Italian-ParlaMint` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-ParlaMint@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-ParlaMint@2.13_table.html)] |
| `Italian-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-PUD@2.13_table.html)] |
| 🆕 `Italian-Old` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-Old@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-Old@2.13_table.html)] |
| `Italian-Valico` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-Valico@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-Valico@2.13_table.html)] |
| `Italian-VIT` | [[Query](http://universal.grew.fr/?corpus=SUD_Italian-VIT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Italian-VIT@2.13_table.html)] |
| `Japanese-BCCWJ` | [[Query](http://universal.grew.fr/?corpus=SUD_Japanese-BCCWJ@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Japanese-BCCWJ@2.13_table.html)] |
| `Japanese-BCCWJLUW` | [[Query](http://universal.grew.fr/?corpus=SUD_Japanese-BCCWJLUW@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Japanese-BCCWJLUW@2.13_table.html)] |
| `Japanese-GSD` | [[Query](http://universal.grew.fr/?corpus=SUD_Japanese-GSD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Japanese-GSD@2.13_table.html)] |
| `Japanese-GSDLUW` | [[Query](http://universal.grew.fr/?corpus=SUD_Japanese-GSDLUW@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Japanese-GSDLUW@2.13_table.html)] |
| `Japanese-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Japanese-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Japanese-PUD@2.13_table.html)] |
| `Japanese-PUDLUW` | [[Query](http://universal.grew.fr/?corpus=SUD_Japanese-PUDLUW@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Japanese-PUDLUW@2.13_table.html)] |
| `Javanese-CSUI` | [[Query](http://universal.grew.fr/?corpus=SUD_Javanese-CSUI@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Javanese-CSUI@2.13_table.html)] |
| `Kaapor-TuDeT` | [[Query](http://universal.grew.fr/?corpus=SUD_Kaapor-TuDeT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Kaapor-TuDeT@2.13_table.html)] |
| `Kangri-KDTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Kangri-KDTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Kangri-KDTB@2.13_table.html)] |
| `Karelian-KKPP` | [[Query](http://universal.grew.fr/?corpus=SUD_Karelian-KKPP@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Karelian-KKPP@2.13_table.html)] |
| `Karo-TuDeT` | [[Query](http://universal.grew.fr/?corpus=SUD_Karo-TuDeT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Karo-TuDeT@2.13_table.html)] |
| `Kazakh-KTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Kazakh-KTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Kazakh-KTB@2.13_table.html)] |
| `Khunsari-AHA` | [[Query](http://universal.grew.fr/?corpus=SUD_Khunsari-AHA@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Khunsari-AHA@2.13_table.html)] |
| `Kiche-IU` | [[Query](http://universal.grew.fr/?corpus=SUD_Kiche-IU@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Kiche-IU@2.13_table.html)] |
| `Komi_Permyak-UH` | [[Query](http://universal.grew.fr/?corpus=SUD_Komi_Permyak-UH@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Komi_Permyak-UH@2.13_table.html)] |
| `Komi_Zyrian-IKDP` | [[Query](http://universal.grew.fr/?corpus=SUD_Komi_Zyrian-IKDP@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Komi_Zyrian-IKDP@2.13_table.html)] |
| `Komi_Zyrian-Lattice` | [[Query](http://universal.grew.fr/?corpus=SUD_Komi_Zyrian-Lattice@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Komi_Zyrian-Lattice@2.13_table.html)] |
| `Korean-GSD` | [[Query](http://universal.grew.fr/?corpus=SUD_Korean-GSD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Korean-GSD@2.13_table.html)] |
| `Korean-Kaist` | [[Query](http://universal.grew.fr/?corpus=SUD_Korean-Kaist@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Korean-Kaist@2.13_table.html)] |
| `Korean-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Korean-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Korean-PUD@2.13_table.html)] |
| `Kurmanji-MG` | [[Query](http://universal.grew.fr/?corpus=SUD_Kurmanji-MG@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Kurmanji-MG@2.13_table.html)] |
| `Kyrgyz-KTMU` | [[Query](http://universal.grew.fr/?corpus=SUD_Kyrgyz-KTMU@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Kyrgyz-KTMU@2.13_table.html)] |
| `Latin-ITTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Latin-ITTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Latin-ITTB@2.13_table.html)] |
| `Latin-LLCT` | [[Query](http://universal.grew.fr/?corpus=SUD_Latin-LLCT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Latin-LLCT@2.13_table.html)] |
| `Latin-Perseus` | [[Query](http://universal.grew.fr/?corpus=SUD_Latin-Perseus@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Latin-Perseus@2.13_table.html)] |
| `Latin-PROIEL` | [[Query](http://universal.grew.fr/?corpus=SUD_Latin-PROIEL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Latin-PROIEL@2.13_table.html)] |
| `Latin-UDante` | [[Query](http://universal.grew.fr/?corpus=SUD_Latin-UDante@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Latin-UDante@2.13_table.html)] |
| `Latvian-LVTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Latvian-LVTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Latvian-LVTB@2.13_table.html)] |
| `Ligurian-GLT` | [[Query](http://universal.grew.fr/?corpus=SUD_Ligurian-GLT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Ligurian-GLT@2.13_table.html)] |
| `Lithuanian-ALKSNIS` | [[Query](http://universal.grew.fr/?corpus=SUD_Lithuanian-ALKSNIS@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Lithuanian-ALKSNIS@2.13_table.html)] |
| `Lithuanian-HSE` | [[Query](http://universal.grew.fr/?corpus=SUD_Lithuanian-HSE@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Lithuanian-HSE@2.13_table.html)] |
| `Livvi-KKPP` | [[Query](http://universal.grew.fr/?corpus=SUD_Livvi-KKPP@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Livvi-KKPP@2.13_table.html)] |
| `Low_Saxon-LSDC` | [[Query](http://universal.grew.fr/?corpus=SUD_Low_Saxon-LSDC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Low_Saxon-LSDC@2.13_table.html)] |
| 🆕 `Macedonian-MTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Macedonian-MTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Macedonian-MTB@2.13_table.html)] |
| `Madi-Jarawara` | [[Query](http://universal.grew.fr/?corpus=SUD_Madi-Jarawara@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Madi-Jarawara@2.13_table.html)] |
| `Maghrebi_Arabic_French-Arabizi` | [[Query](http://universal.grew.fr/?corpus=SUD_Maghrebi_Arabic_French-Arabizi@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Maghrebi_Arabic_French-Arabizi@2.13_table.html)] |
| `Makurap-TuDeT` | [[Query](http://universal.grew.fr/?corpus=SUD_Makurap-TuDeT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Makurap-TuDeT@2.13_table.html)] |
| `Malayalam-UFA` | [[Query](http://universal.grew.fr/?corpus=SUD_Malayalam-UFA@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Malayalam-UFA@2.13_table.html)] |
| `Maltese-MUDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Maltese-MUDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Maltese-MUDT@2.13_table.html)] |
| `Manx-Cadhan` | [[Query](http://universal.grew.fr/?corpus=SUD_Manx-Cadhan@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Manx-Cadhan@2.13_table.html)] |
| `Marathi-UFAL` | [[Query](http://universal.grew.fr/?corpus=SUD_Marathi-UFAL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Marathi-UFAL@2.13_table.html)] |
| `Mbya_Guarani-Dooley` | [[Query](http://universal.grew.fr/?corpus=SUD_Mbya_Guarani-Dooley@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Mbya_Guarani-Dooley@2.13_table.html)] |
| `Mbya_Guarani-Thomas` | [[Query](http://universal.grew.fr/?corpus=SUD_Mbya_Guarani-Thomas@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Mbya_Guarani-Thomas@2.13_table.html)] |
| 🆕 `Middle_French-PROFITEROLE` | [[Query](http://universal.grew.fr/?corpus=SUD_Middle_French-PROFITEROLE@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Middle_French-PROFITEROLE@2.13_table.html)] |
| `Moksha-JR` | [[Query](http://universal.grew.fr/?corpus=SUD_Moksha-JR@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Moksha-JR@2.13_table.html)] |
| `Munduruku-TuDeT` | [[Query](http://universal.grew.fr/?corpus=SUD_Munduruku-TuDeT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Munduruku-TuDeT@2.13_table.html)] |
| `Naija-NSC` (Native) | [[Query](http://universal.grew.fr/?corpus=SUD_Naija-NSC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Naija-NSC@2.13_table.html)] |
| `Nayini-AHA` | [[Query](http://universal.grew.fr/?corpus=SUD_Nayini-AHA@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Nayini-AHA@2.13_table.html)] |
| `Neapolitan-RB` | [[Query](http://universal.grew.fr/?corpus=SUD_Neapolitan-RB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Neapolitan-RB@2.13_table.html)] |
| `Nheengatu-CompLin` | [[Query](http://universal.grew.fr/?corpus=SUD_Nheengatu-CompLin@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Nheengatu-CompLin@2.13_table.html)] |
| `North_Sami-Giella` | [[Query](http://universal.grew.fr/?corpus=SUD_North_Sami-Giella@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_North_Sami-Giella@2.13_table.html)] |
| `Norwegian-Bokmaal` | [[Query](http://universal.grew.fr/?corpus=SUD_Norwegian-Bokmaal@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Norwegian-Bokmaal@2.13_table.html)] |
| `Norwegian-Nynorsk` | [[Query](http://universal.grew.fr/?corpus=SUD_Norwegian-Nynorsk@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Norwegian-Nynorsk@2.13_table.html)] |
| `Old_Church_Slavonic-PROIEL` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_Church_Slavonic-PROIEL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_Church_Slavonic-PROIEL@2.13_table.html)] |
| `Old_East_Slavic-Birchbark` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_East_Slavic-Birchbark@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_East_Slavic-Birchbark@2.13_table.html)] |
| `Old_East_Slavic-RNC` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_East_Slavic-RNC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_East_Slavic-RNC@2.13_table.html)] |
| `Old_East_Slavic-Ruthenian` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_East_Slavic-Ruthenian@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_East_Slavic-Ruthenian@2.13_table.html)] |
| `Old_East_Slavic-TOROT` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_East_Slavic-TOROT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_East_Slavic-TOROT@2.13_table.html)] |
| `Old_French-SRCMF` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_French-SRCMF@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_French-SRCMF@2.13_table.html)] |
| `Old_Irish-DipSGG` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_Irish-DipSGG@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_Irish-DipSGG@2.13_table.html)] |
| `Old_Irish-DipWBG` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_Irish-DipWBG@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_Irish-DipWBG@2.13_table.html)] |
| `Old_Russian-RNC` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_Russian-RNC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_Russian-RNC@2.13_table.html)] |
| `Old_Russian-TOROT` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_Russian-TOROT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_Russian-TOROT@2.13_table.html)] |
| `Old_Turkish-Tonqq` | [[Query](http://universal.grew.fr/?corpus=SUD_Old_Turkish-Tonqq@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Old_Turkish-Tonqq@2.13_table.html)] |
| `Persian-Seraji` | [[Query](http://universal.grew.fr/?corpus=SUD_Persian-Seraji@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Persian-Seraji@2.13_table.html)] |
| `Persian-PerDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Persian-PerDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Persian-PerDT@2.13_table.html)] |
| `Pomak-Philotis` | [[Query](http://universal.grew.fr/?corpus=SUD_Pomak-Philotis@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Pomak-Philotis@2.13_table.html)] |
| `Polish-LFG` | [[Query](http://universal.grew.fr/?corpus=SUD_Polish-LFG@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Polish-LFG@2.13_table.html)] |
| `Polish-PDB` | [[Query](http://universal.grew.fr/?corpus=SUD_Polish-PDB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Polish-PDB@2.13_table.html)] |
| `Polish-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Polish-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Polish-PUD@2.13_table.html)] |
| `Portuguese-Bosque` | [[Query](http://universal.grew.fr/?corpus=SUD_Portuguese-Bosque@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Portuguese-Bosque@2.13_table.html)] |
| 🆕 `Portuguese-GSD` | [[Query](http://universal.grew.fr/?corpus=SUD_Portuguese-GSD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Portuguese-GSD@2.13_table.html)] |
| `Portuguese-PetroGold` | [[Query](http://universal.grew.fr/?corpus=SUD_Portuguese-PetroGold@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Portuguese-PetroGold@2.13_table.html)] |
| 🆕 `Portuguese-Porttinari` | [[Query](http://universal.grew.fr/?corpus=SUD_Portuguese-Porttinari@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Portuguese-Porttinari@2.13_table.html)] |
| `Portuguese-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Portuguese-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Portuguese-PUD@2.13_table.html)] |
| `Romanian-ArT` | [[Query](http://universal.grew.fr/?corpus=SUD_Romanian-ArT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Romanian-ArT@2.13_table.html)] |
| `Romanian-Nonstandard` | [[Query](http://universal.grew.fr/?corpus=SUD_Romanian-Nonstandard@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Romanian-Nonstandard@2.13_table.html)] |
| `Romanian-RRT` | [[Query](http://universal.grew.fr/?corpus=SUD_Romanian-RRT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Romanian-RRT@2.13_table.html)] |
| `Romanian-SiMoNERo` | [[Query](http://universal.grew.fr/?corpus=SUD_Romanian-SiMoNERo@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Romanian-SiMoNERo@2.13_table.html)] |
| `Russian-GSD` | [[Query](http://universal.grew.fr/?corpus=SUD_Russian-GSD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Russian-GSD@2.13_table.html)] |
| 🆕 `Russian-Poetry` | [[Query](http://universal.grew.fr/?corpus=SUD_Russian-Poetry@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Russian-Poetry@2.13_table.html)] |
| `Russian-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Russian-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Russian-PUD@2.13_table.html)] |
| `Russian-SynTagRus` | [[Query](http://universal.grew.fr/?corpus=SUD_Russian-SynTagRus@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Russian-SynTagRus@2.13_table.html)] |
| `Russian-Taiga` | [[Query](http://universal.grew.fr/?corpus=SUD_Russian-Taiga@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Russian-Taiga@2.13_table.html)] |
| `Sanskrit-UFAL` | [[Query](http://universal.grew.fr/?corpus=SUD_Sanskrit-UFAL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Sanskrit-UFAL@2.13_table.html)] |
| `Sanskrit-Vedic` | [[Query](http://universal.grew.fr/?corpus=SUD_Sanskrit-Vedic@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Sanskrit-Vedic@2.13_table.html)] |
| `Scottish_Gaelic-ARCOSG` | [[Query](http://universal.grew.fr/?corpus=SUD_Scottish_Gaelic-ARCOSG@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Scottish_Gaelic-ARCOSG@2.13_table.html)] |
| `Serbian-SET` | [[Query](http://universal.grew.fr/?corpus=SUD_Serbian-SET@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Serbian-SET@2.13_table.html)] |
| `Sinhala-STB` | [[Query](http://universal.grew.fr/?corpus=SUD_Sinhala-STB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Sinhala-STB@2.13_table.html)] |
| `Skolt_Sami-Giellagas` | [[Query](http://universal.grew.fr/?corpus=SUD_Skolt_Sami-Giellagas@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Skolt_Sami-Giellagas@2.13_table.html)] |
| `Slovak-SNK` | [[Query](http://universal.grew.fr/?corpus=SUD_Slovak-SNK@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Slovak-SNK@2.13_table.html)] |
| `Slovenian-SSJ` | [[Query](http://universal.grew.fr/?corpus=SUD_Slovenian-SSJ@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Slovenian-SSJ@2.13_table.html)] |
| `Slovenian-SST` | [[Query](http://universal.grew.fr/?corpus=SUD_Slovenian-SST@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Slovenian-SST@2.13_table.html)] |
| `Soi-AHA` | [[Query](http://universal.grew.fr/?corpus=SUD_Soi-AHA@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Soi-AHA@2.13_table.html)] |
| `South_Levantine_Arabic-MADAR` | [[Query](http://universal.grew.fr/?corpus=SUD_South_Levantine_Arabic-MADAR@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_South_Levantine_Arabic-MADAR@2.13_table.html)] |
| `Spanish-AnCora` | [[Query](http://universal.grew.fr/?corpus=SUD_Spanish-AnCora@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Spanish-AnCora@2.13_table.html)] |
| `Spanish-GSD` | [[Query](http://universal.grew.fr/?corpus=SUD_Spanish-GSD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Spanish-GSD@2.13_table.html)] |
| `Spanish-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Spanish-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Spanish-PUD@2.13_table.html)] |
| `Swedish-LinES` | [[Query](http://universal.grew.fr/?corpus=SUD_Swedish-LinES@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Swedish-LinES@2.13_table.html)] |
| `Swedish-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Swedish-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Swedish-PUD@2.13_table.html)] |
| `Swedish_Sign_Language-SSLC` | [[Query](http://universal.grew.fr/?corpus=SUD_Swedish_Sign_Language-SSLC@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Swedish_Sign_Language-SSLC@2.13_table.html)] |
| `Swedish-Talbanken` | [[Query](http://universal.grew.fr/?corpus=SUD_Swedish-Talbanken@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Swedish-Talbanken@2.13_table.html)] |
| `Swiss_German-UZH` | [[Query](http://universal.grew.fr/?corpus=SUD_Swiss_German-UZH@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Swiss_German-UZH@2.13_table.html)] |
| `Tagalog-TRG` | [[Query](http://universal.grew.fr/?corpus=SUD_Tagalog-TRG@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Tagalog-TRG@2.13_table.html)] |
| `Tagalog-Ugnayan` | [[Query](http://universal.grew.fr/?corpus=SUD_Tagalog-Ugnayan@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Tagalog-Ugnayan@2.13_table.html)] |
| `Tamil-TTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Tamil-TTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Tamil-TTB@2.13_table.html)] |
| `Tamil-MWTT` | [[Query](http://universal.grew.fr/?corpus=SUD_Tamil-MWTT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Tamil-MWTT@2.13_table.html)] |
| `Tatar-NMCTT` | [[Query](http://universal.grew.fr/?corpus=SUD_Tatar-NMCTT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Tatar-NMCTT@2.13_table.html)] |
| `Teko-TuDeT` | [[Query](http://universal.grew.fr/?corpus=SUD_Teko-TuDeT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Teko-TuDeT@2.13_table.html)] |
| `Telugu-MTG` | [[Query](http://universal.grew.fr/?corpus=SUD_Telugu-MTG@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Telugu-MTG@2.13_table.html)] |
| `Thai-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Thai-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Thai-PUD@2.13_table.html)] |
| `Tupinamba-TuDeT` | [[Query](http://universal.grew.fr/?corpus=SUD_Tupinamba-TuDeT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Tupinamba-TuDeT@2.13_table.html)] |
| `Turkish-Atis` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish-Atis@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish-Atis@2.13_table.html)] |
| `Turkish-BOUN` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish-BOUN@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish-BOUN@2.13_table.html)] |
| `Turkish-FrameNet` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish-FrameNet@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish-FrameNet@2.13_table.html)] |
| `Turkish-GB` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish-GB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish-GB@2.13_table.html)] |
| `Turkish-IMST` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish-IMST@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish-IMST@2.13_table.html)] |
| `Turkish-Kenet` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish-Kenet@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish-Kenet@2.13_table.html)] |
| `Turkish-PUD` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish-PUD@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish-PUD@2.13_table.html)] |
| `Turkish-Penn` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish-Penn@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish-Penn@2.13_table.html)] |
| `Turkish-Tourism` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish-Tourism@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish-Tourism@2.13_table.html)] |
| `Turkish_German-SAGT` | [[Query](http://universal.grew.fr/?corpus=SUD_Turkish_German-SAGT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Turkish_German-SAGT@2.13_table.html)] |
| `Ukrainian-IU` | [[Query](http://universal.grew.fr/?corpus=SUD_Ukrainian-IU@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Ukrainian-IU@2.13_table.html)] |
| `Umbrian-IKUVINA` | [[Query](http://universal.grew.fr/?corpus=SUD_Umbrian-IKUVINA@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Umbrian-IKUVINA@2.13_table.html)] |
| `Upper_Sorbian-UFAL` | [[Query](http://universal.grew.fr/?corpus=SUD_Upper_Sorbian-UFAL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Upper_Sorbian-UFAL@2.13_table.html)] |
| `Urdu-UDTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Urdu-UDTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Urdu-UDTB@2.13_table.html)] |
| `Uyghur-UDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Uyghur-UDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Uyghur-UDT@2.13_table.html)] |
| 🆕 `Veps-VWT` | [[Query](http://universal.grew.fr/?corpus=SUD_Veps-VWT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Veps-VWT@2.13_table.html)] |
| `Vietnamese-VTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Vietnamese-VTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Vietnamese-VTB@2.13_table.html)] |
| `Warlpiri-UFAL` | [[Query](http://universal.grew.fr/?corpus=SUD_Warlpiri-UFAL@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Warlpiri-UFAL@2.13_table.html)] |
| `Welsh-CCG` | [[Query](http://universal.grew.fr/?corpus=SUD_Welsh-CCG@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Welsh-CCG@2.13_table.html)] |
| `Western_Armenian-ArmTDP` | [[Query](http://universal.grew.fr/?corpus=SUD_Western_Armenian-ArmTDP@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Western_Armenian-ArmTDP@2.13_table.html)] |
| `Western_Sierra_Puebla_Nahuatl-ITML` | [[Query](http://universal.grew.fr/?corpus=SUD_Western_Sierra_Puebla_Nahuatl-ITML@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Western_Sierra_Puebla_Nahuatl-ITML@2.13_table.html)] |
| `Wolof-WTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Wolof-WTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Wolof-WTB@2.13_table.html)] |
| `Xavante-XDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Xavante-XDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Xavante-XDT@2.13_table.html)] |
| `Xibe-XDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Xibe-XDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Xibe-XDT@2.13_table.html)] |
| `Yakut-YKTDT` | [[Query](http://universal.grew.fr/?corpus=SUD_Yakut-YKTDT@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Yakut-YKTDT@2.13_table.html)] |
| `Yoruba-YTB` | [[Query](http://universal.grew.fr/?corpus=SUD_Yoruba-YTB@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Yoruba-YTB@2.13_table.html)] |
| `Yupik-SLI` | [[Query](http://universal.grew.fr/?corpus=SUD_Yupik-SLI@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Yupik-SLI@2.13_table.html)] |
| `Zaar-Autogramm` (Native) | [[Query](http://universal.grew.fr/?corpus=SUD_Zaar-Autogramm@2.13)] [[Relations](http://universal.grew.fr/meta/SUD_Zaar-Autogramm@2.13_table.html)] |

