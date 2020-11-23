---
layout: default
---

In version 2.7 of SUD data, released in November 2020:
 * 3 corpora are built in the SUD format (called **Native SUD**)
 * 180 corpora of UD 2.7 are automatically converted to SUD from the corresponding UD data.

# Native SUD corpora

In the table below, the 3 native SUD corpora are given.
Note that each corresponding UD version is obtained by automatic conversion.

| Corpus | Files | Grew-match |
|--------|------------|-------|
| [`SUD_French-GSD`](https://github.com/surfacesyntacticud/SUD_French-GSD) | [2.7](https://github.com/surfacesyntacticud/SUD_French-GSD/archive/r2.7.zip) -- [latest](https://github.com/surfacesyntacticud/SUD_French-GSD/archive/master.zip) | [2.7](http://match.grew.fr/?corpus=SUD_French-GSD@2.7) -- [latest](http://match.grew.fr/?corpus=SUD_French-GSD@latest) |
| [`SUD_French-Spoken`](https://github.com/surfacesyntacticud/SUD_French-Spoken) | [2.7](https://github.com/surfacesyntacticud/SUD_French-Spoken/archive/r2.7.zip) -- [latest](https://github.com/surfacesyntacticud/SUD_French-Spoken/archive/master.zip) | [2.7](http://match.grew.fr/?corpus=SUD_French-Spoken@2.7) -- [latest](http://match.grew.fr/?corpus=SUD_French-Spoken@latest) |
| [`SUD_Naija-NSC`](https://github.com/surfacesyntacticud/SUD_Naija-NSC) | [2.7](https://github.com/surfacesyntacticud/SUD_Naija-NSC/archive/r2.7.zip) -- [latest](https://github.com/surfacesyntacticud/SUD_Naija-NSC/archive/master.zip) | [2.7](http://match.grew.fr/?corpus=SUD_Naija-NSC@2.7) -- [latest](http://match.grew.fr/?corpus=SUD_Naija-NSC@latest) |

# SUD data for version 2.7

All UD (version 2.7), except the 3 ones coming from native SUD (`UD_French-GSD`, `UD_French-Spoken` and `UD_Naija-NSC`) are converted in SUD format with the [UD &rarr; SUD conversion system](https://github.com/surfacesyntacticud/tools/tree/master/converter) (usable with the [Grew](https://grew.fr) software).

Hence, the data below are built with:
  * The 3 native SUD described above
  * 180 corpora converted:
    * from [version 2.7 of UD corpora](http://hdl.handle.net/11234/1-3424)
    * with [tag `v2.7` of the conversion system](https://github.com/surfacesyntacticud/tools/tree/v2.7/converter)

## Download all corpora
Download the full set of 183 SUD corpora: [sud-treebanks-v2.7.tgz](https://www.grew.fr/download/sud-treebanks-v2.7.tgz) (:warning: the file was changed on November 23th, consider reloading if needed).

## Access to each corpus

In the table below, for each corpus you can access to the [Grew-match](http://match.grew.fr) query system.

| Corpus | Grew-match |
|--------|------------|
| `Afrikaans-AfriBooms` | [[Query](http://match.grew.fr/?corpus=SUD_Afrikaans-AfriBooms@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Afrikaans-AfriBooms@2.7_table.html)] |
| `Akkadian-PISANDUB` | [[Query](http://match.grew.fr/?corpus=SUD_Akkadian-PISANDUB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Akkadian-PISANDUB@2.7_table.html)] |
| :new: `Akkadian-RIAO` | [[Query](http://match.grew.fr/?corpus=SUD_Akkadian-RIAO@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Akkadian-RIAO@2.7_table.html)] |
| :new: `Akuntsu-TuDeT` | [[Query](http://match.grew.fr/?corpus=SUD_Akuntsu-TuDeT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Akuntsu-TuDeT@2.7_table.html)] |
| `Albanian-TSA` | [[Query](http://match.grew.fr/?corpus=SUD_Albanian-TSA@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Albanian-TSA@2.7_table.html)] |
| `Amharic-ATT` | [[Query](http://match.grew.fr/?corpus=SUD_Amharic-ATT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Amharic-ATT@2.7_table.html)] |
| `Ancient_Greek-Perseus` | [[Query](http://match.grew.fr/?corpus=SUD_Ancient_Greek-Perseus@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Ancient_Greek-Perseus@2.7_table.html)] |
| `Ancient_Greek-PROIEL` | [[Query](http://match.grew.fr/?corpus=SUD_Ancient_Greek-PROIEL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Ancient_Greek-PROIEL@2.7_table.html)] |
| :new: `Apurina-UFPA` | [[Query](http://match.grew.fr/?corpus=SUD_Apurina-UFPA@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Apurina-UFPA@2.7_table.html)] |
| `Arabic-NYUAD` | [[Query](http://match.grew.fr/?corpus=SUD_Arabic-NYUAD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Arabic-NYUAD@2.7_table.html)] |
| `Arabic-PADT` | [[Query](http://match.grew.fr/?corpus=SUD_Arabic-PADT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Arabic-PADT@2.7_table.html)] |
| `Arabic-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Arabic-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Arabic-PUD@2.7_table.html)] |
| `Armenian-ArmTDP` | [[Query](http://match.grew.fr/?corpus=SUD_Armenian-ArmTDP@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Armenian-ArmTDP@2.7_table.html)] |
| `Assyrian-AS` | [[Query](http://match.grew.fr/?corpus=SUD_Assyrian-AS@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Assyrian-AS@2.7_table.html)] |
| `Bambara-CRB` | [[Query](http://match.grew.fr/?corpus=SUD_Bambara-CRB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Bambara-CRB@2.7_table.html)] |
| `Basque-BDT` | [[Query](http://match.grew.fr/?corpus=SUD_Basque-BDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Basque-BDT@2.7_table.html)] |
| `Belarusian-HSE` | [[Query](http://match.grew.fr/?corpus=SUD_Belarusian-HSE@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Belarusian-HSE@2.7_table.html)] |
| `Bhojpuri-BHTB` | [[Query](http://match.grew.fr/?corpus=SUD_Bhojpuri-BHTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Bhojpuri-BHTB@2.7_table.html)] |
| `Breton-KEB` | [[Query](http://match.grew.fr/?corpus=SUD_Breton-KEB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Breton-KEB@2.7_table.html)] |
| `Bulgarian-BTB` | [[Query](http://match.grew.fr/?corpus=SUD_Bulgarian-BTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Bulgarian-BTB@2.7_table.html)] |
| `Buryat-BDT` | [[Query](http://match.grew.fr/?corpus=SUD_Buryat-BDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Buryat-BDT@2.7_table.html)] |
| `Cantonese-HK` | [[Query](http://match.grew.fr/?corpus=SUD_Cantonese-HK@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Cantonese-HK@2.7_table.html)] |
| `Catalan-AnCora` | [[Query](http://match.grew.fr/?corpus=SUD_Catalan-AnCora@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Catalan-AnCora@2.7_table.html)] |
| `Chinese-CFL` | [[Query](http://match.grew.fr/?corpus=SUD_Chinese-CFL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Chinese-CFL@2.7_table.html)] |
| `Chinese-GSD` | [[Query](http://match.grew.fr/?corpus=SUD_Chinese-GSD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Chinese-GSD@2.7_table.html)] |
| `Chinese-GSDSimp` | [[Query](http://match.grew.fr/?corpus=SUD_Chinese-GSDSimp@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Chinese-GSDSimp@2.7_table.html)] |
| `Chinese-HK` | [[Query](http://match.grew.fr/?corpus=SUD_Chinese-HK@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Chinese-HK@2.7_table.html)] |
| `Chinese-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Chinese-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Chinese-PUD@2.7_table.html)] |
| :new: `Chukchi-HSE` | [[Query](http://match.grew.fr/?corpus=SUD_Chukchi-HSE@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Chukchi-HSE@2.7_table.html)] |
| `Classical_Chinese-Kyoto` | [[Query](http://match.grew.fr/?corpus=SUD_Classical_Chinese-Kyoto@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Classical_Chinese-Kyoto@2.7_table.html)] |
| `Coptic-Scriptorium` | [[Query](http://match.grew.fr/?corpus=SUD_Coptic-Scriptorium@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Coptic-Scriptorium@2.7_table.html)] |
| `Croatian-SET` | [[Query](http://match.grew.fr/?corpus=SUD_Croatian-SET@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Croatian-SET@2.7_table.html)] |
| `Czech-CAC` | [[Query](http://match.grew.fr/?corpus=SUD_Czech-CAC@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Czech-CAC@2.7_table.html)] |
| `Czech-CLTT` | [[Query](http://match.grew.fr/?corpus=SUD_Czech-CLTT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Czech-CLTT@2.7_table.html)] |
| `Czech-FicTree` | [[Query](http://match.grew.fr/?corpus=SUD_Czech-FicTree@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Czech-FicTree@2.7_table.html)] |
| `Czech-PDT` | [[Query](http://match.grew.fr/?corpus=SUD_Czech-PDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Czech-PDT@2.7_table.html)] |
| `Czech-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Czech-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Czech-PUD@2.7_table.html)] |
| `Danish-DDT` | [[Query](http://match.grew.fr/?corpus=SUD_Danish-DDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Danish-DDT@2.7_table.html)] |
| `Dutch-Alpino` | [[Query](http://match.grew.fr/?corpus=SUD_Dutch-Alpino@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Dutch-Alpino@2.7_table.html)] |
| `Dutch-LassySmall` | [[Query](http://match.grew.fr/?corpus=SUD_Dutch-LassySmall@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Dutch-LassySmall@2.7_table.html)] |
| `English-ESL` | [[Query](http://match.grew.fr/?corpus=SUD_English-ESL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_English-ESL@2.7_table.html)] |
| `English-EWT` | [[Query](http://match.grew.fr/?corpus=SUD_English-EWT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_English-EWT@2.7_table.html)] |
| `English-GUM` | [[Query](http://match.grew.fr/?corpus=SUD_English-GUM@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_English-GUM@2.7_table.html)] |
| `English-GUMReddit` | [[Query](http://match.grew.fr/?corpus=SUD_English-GUMReddit@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_English-GUMReddit@2.7_table.html)] |
| `English-LinES` | [[Query](http://match.grew.fr/?corpus=SUD_English-LinES@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_English-LinES@2.7_table.html)] |
| `English-ParTUT` | [[Query](http://match.grew.fr/?corpus=SUD_English-ParTUT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_English-ParTUT@2.7_table.html)] |
| `English-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_English-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_English-PUD@2.7_table.html)] |
| `English-Pronouns` | [[Query](http://match.grew.fr/?corpus=SUD_English-Pronouns@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_English-Pronouns@2.7_table.html)] |
| `Erzya-JR` | [[Query](http://match.grew.fr/?corpus=SUD_Erzya-JR@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Erzya-JR@2.7_table.html)] |
| `Estonian-EDT` | [[Query](http://match.grew.fr/?corpus=SUD_Estonian-EDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Estonian-EDT@2.7_table.html)] |
| `Estonian-EWT` | [[Query](http://match.grew.fr/?corpus=SUD_Estonian-EWT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Estonian-EWT@2.7_table.html)] |
| `Faroese-OFT` | [[Query](http://match.grew.fr/?corpus=SUD_Faroese-OFT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Faroese-OFT@2.7_table.html)] |
| :new: `Faroese-FarPaHC` | [[Query](http://match.grew.fr/?corpus=SUD_Faroese-FarPaHC@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Faroese-FarPaHC@2.7_table.html)] |
| `Finnish-FTB` | [[Query](http://match.grew.fr/?corpus=SUD_Finnish-FTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Finnish-FTB@2.7_table.html)] |
| `Finnish-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Finnish-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Finnish-PUD@2.7_table.html)] |
| `Finnish-TDT` | [[Query](http://match.grew.fr/?corpus=SUD_Finnish-TDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Finnish-TDT@2.7_table.html)] |
| :new: `Finnish-OOD` | [[Query](http://match.grew.fr/?corpus=SUD_Finnish-OOD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Finnish-OOD@2.7_table.html)] |
| `French-FQB` | [[Query](http://match.grew.fr/?corpus=SUD_French-FQB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_French-FQB@2.7_table.html)] |
| `French-FTB` | [[Query](http://match.grew.fr/?corpus=SUD_French-FTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_French-FTB@2.7_table.html)] |
| `French-GSD` (Native) | [[Query](http://match.grew.fr/?corpus=SUD_French-GSD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_French-GSD@2.7_table.html)] |
| `French-ParTUT` | [[Query](http://match.grew.fr/?corpus=SUD_French-ParTUT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_French-ParTUT@2.7_table.html)] |
| `French-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_French-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_French-PUD@2.7_table.html)] |
| `French-Sequoia` | [[Query](http://match.grew.fr/?corpus=SUD_French-Sequoia@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_French-Sequoia@2.7_table.html)] |
| `French-Spoken` (Native)  | [[Query](http://match.grew.fr/?corpus=SUD_French-Spoken@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_French-Spoken@2.7_table.html)] |
| `Galician-CTG` | [[Query](http://match.grew.fr/?corpus=SUD_Galician-CTG@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Galician-CTG@2.7_table.html)] |
| `Galician-TreeGal` | [[Query](http://match.grew.fr/?corpus=SUD_Galician-TreeGal@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Galician-TreeGal@2.7_table.html)] |
| `German-GSD` | [[Query](http://match.grew.fr/?corpus=SUD_German-GSD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_German-GSD@2.7_table.html)] |
| `German-HDT` | [[Query](http://match.grew.fr/?corpus=SUD_German-HDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_German-HDT@2.7_table.html)] |
| `German-LIT` | [[Query](http://match.grew.fr/?corpus=SUD_German-LIT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_German-LIT@2.7_table.html)] |
| `German-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_German-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_German-PUD@2.7_table.html)] |
| `Gothic-PROIEL` | [[Query](http://match.grew.fr/?corpus=SUD_Gothic-PROIEL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Gothic-PROIEL@2.7_table.html)] |
| `Greek-GDT` | [[Query](http://match.grew.fr/?corpus=SUD_Greek-GDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Greek-GDT@2.7_table.html)] |
| `Hebrew-HTB` | [[Query](http://match.grew.fr/?corpus=SUD_Hebrew-HTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Hebrew-HTB@2.7_table.html)] |
| `Hindi_English-HIENCS` | [[Query](http://match.grew.fr/?corpus=SUD_Hindi_English-HIENCS@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Hindi_English-HIENCS@2.7_table.html)] |
| `Hindi-HDTB` | [[Query](http://match.grew.fr/?corpus=SUD_Hindi-HDTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Hindi-HDTB@2.7_table.html)] |
| `Hindi-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Hindi-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Hindi-PUD@2.7_table.html)] |
| `Hungarian-Szeged` | [[Query](http://match.grew.fr/?corpus=SUD_Hungarian-Szeged@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Hungarian-Szeged@2.7_table.html)] |
| `Icelandic-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Icelandic-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Icelandic-PUD@2.7_table.html)] |
| :new: `Icelandic-IcePaHC` | [[Query](http://match.grew.fr/?corpus=SUD_Icelandic-IcePaHC@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Icelandic-IcePaHC@2.7_table.html)] |
| `Indonesian-GSD` | [[Query](http://match.grew.fr/?corpus=SUD_Indonesian-GSD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Indonesian-GSD@2.7_table.html)] |
| `Indonesian-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Indonesian-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Indonesian-PUD@2.7_table.html)] |
| :new: `Indonesian-CSUI` | [[Query](http://match.grew.fr/?corpus=SUD_Indonesian-CSUI@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Indonesian-CSUI@2.7_table.html)] |
| `Irish-IDT` | [[Query](http://match.grew.fr/?corpus=SUD_Irish-IDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Irish-IDT@2.7_table.html)] |
| `Italian-ISDT` | [[Query](http://match.grew.fr/?corpus=SUD_Italian-ISDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Italian-ISDT@2.7_table.html)] |
| `Italian-ParTUT` | [[Query](http://match.grew.fr/?corpus=SUD_Italian-ParTUT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Italian-ParTUT@2.7_table.html)] |
| `Italian-PoSTWITA` | [[Query](http://match.grew.fr/?corpus=SUD_Italian-PoSTWITA@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Italian-PoSTWITA@2.7_table.html)] |
| `Italian-TWITTIRO` | [[Query](http://match.grew.fr/?corpus=SUD_Italian-TWITTIRO@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Italian-TWITTIRO@2.7_table.html)] |
| `Italian-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Italian-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Italian-PUD@2.7_table.html)] |
| `Italian-VIT` | [[Query](http://match.grew.fr/?corpus=SUD_Italian-VIT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Italian-VIT@2.7_table.html)] |
| `Japanese-BCCWJ` | [[Query](http://match.grew.fr/?corpus=SUD_Japanese-BCCWJ@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Japanese-BCCWJ@2.7_table.html)] |
| `Japanese-GSD` | [[Query](http://match.grew.fr/?corpus=SUD_Japanese-GSD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Japanese-GSD@2.7_table.html)] |
| `Japanese-Modern` | [[Query](http://match.grew.fr/?corpus=SUD_Japanese-Modern@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Japanese-Modern@2.7_table.html)] |
| `Japanese-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Japanese-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Japanese-PUD@2.7_table.html)] |
| `Karelian-KKPP` | [[Query](http://match.grew.fr/?corpus=SUD_Karelian-KKPP@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Karelian-KKPP@2.7_table.html)] |
| `Kazakh-KTB` | [[Query](http://match.grew.fr/?corpus=SUD_Kazakh-KTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Kazakh-KTB@2.7_table.html)] |
| :new: `Khunsari-AHA` | [[Query](http://match.grew.fr/?corpus=SUD_Khunsari-AHA@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Khunsari-AHA@2.7_table.html)] |
| `Komi_Permyak-UH` | [[Query](http://match.grew.fr/?corpus=SUD_Komi_Permyak-UH@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Komi_Permyak-UH@2.7_table.html)] |
| `Komi_Zyrian-IKDP` | [[Query](http://match.grew.fr/?corpus=SUD_Komi_Zyrian-IKDP@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Komi_Zyrian-IKDP@2.7_table.html)] |
| `Komi_Zyrian-Lattice` | [[Query](http://match.grew.fr/?corpus=SUD_Komi_Zyrian-Lattice@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Komi_Zyrian-Lattice@2.7_table.html)] |
| `Korean-GSD` | [[Query](http://match.grew.fr/?corpus=SUD_Korean-GSD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Korean-GSD@2.7_table.html)] |
| `Korean-Kaist` | [[Query](http://match.grew.fr/?corpus=SUD_Korean-Kaist@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Korean-Kaist@2.7_table.html)] |
| `Korean-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Korean-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Korean-PUD@2.7_table.html)] |
| `Kurmanji-MG` | [[Query](http://match.grew.fr/?corpus=SUD_Kurmanji-MG@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Kurmanji-MG@2.7_table.html)] |
| `Latin-ITTB` | [[Query](http://match.grew.fr/?corpus=SUD_Latin-ITTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Latin-ITTB@2.7_table.html)] |
| `Latin-LLCT` | [[Query](http://match.grew.fr/?corpus=SUD_Latin-LLCT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Latin-LLCT@2.7_table.html)] |
| `Latin-Perseus` | [[Query](http://match.grew.fr/?corpus=SUD_Latin-Perseus@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Latin-Perseus@2.7_table.html)] |
| `Latin-PROIEL` | [[Query](http://match.grew.fr/?corpus=SUD_Latin-PROIEL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Latin-PROIEL@2.7_table.html)] |
| `Latvian-LVTB` | [[Query](http://match.grew.fr/?corpus=SUD_Latvian-LVTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Latvian-LVTB@2.7_table.html)] |
| `Lithuanian-ALKSNIS` | [[Query](http://match.grew.fr/?corpus=SUD_Lithuanian-ALKSNIS@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Lithuanian-ALKSNIS@2.7_table.html)] |
| `Lithuanian-HSE` | [[Query](http://match.grew.fr/?corpus=SUD_Lithuanian-HSE@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Lithuanian-HSE@2.7_table.html)] |
| `Livvi-KKPP` | [[Query](http://match.grew.fr/?corpus=SUD_Livvi-KKPP@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Livvi-KKPP@2.7_table.html)] |
| `Maltese-MUDT` | [[Query](http://match.grew.fr/?corpus=SUD_Maltese-MUDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Maltese-MUDT@2.7_table.html)] |
| :new: `Manx-Cadhan` | [[Query](http://match.grew.fr/?corpus=SUD_Manx-Cadhan@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Manx-Cadhan@2.7_table.html)] |
| `Marathi-UFAL` | [[Query](http://match.grew.fr/?corpus=SUD_Marathi-UFAL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Marathi-UFAL@2.7_table.html)] |
| `Mbya_Guarani-Dooley` | [[Query](http://match.grew.fr/?corpus=SUD_Mbya_Guarani-Dooley@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Mbya_Guarani-Dooley@2.7_table.html)] |
| `Mbya_Guarani-Thomas` | [[Query](http://match.grew.fr/?corpus=SUD_Mbya_Guarani-Thomas@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Mbya_Guarani-Thomas@2.7_table.html)] |
| `Moksha-JR` | [[Query](http://match.grew.fr/?corpus=SUD_Moksha-JR@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Moksha-JR@2.7_table.html)] |
| :new:`Munduruku-TuDeT` | [[Query](http://match.grew.fr/?corpus=SUD_Munduruku-TuDeT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Munduruku-TuDeT@2.7_table.html)] |
| `Naija-NSC` (Native) | [[Query](http://match.grew.fr/?corpus=SUD_Naija-NSC@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Naija-NSC@2.7_table.html)] |
| :new: `Nayini-AHA` | [[Query](http://match.grew.fr/?corpus=SUD_Nayini-AHA@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Nayini-AHA@2.7_table.html)] |
| `North_Sami-Giella` | [[Query](http://match.grew.fr/?corpus=SUD_North_Sami-Giella@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_North_Sami-Giella@2.7_table.html)] |
| `Norwegian-Bokmaal` | [[Query](http://match.grew.fr/?corpus=SUD_Norwegian-Bokmaal@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Norwegian-Bokmaal@2.7_table.html)] |
| `Norwegian-Nynorsk` | [[Query](http://match.grew.fr/?corpus=SUD_Norwegian-Nynorsk@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Norwegian-Nynorsk@2.7_table.html)] |
| `Norwegian-NynorskLIA` | [[Query](http://match.grew.fr/?corpus=SUD_Norwegian-NynorskLIA@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Norwegian-NynorskLIA@2.7_table.html)] |
| `Old_Church_Slavonic-PROIEL` | [[Query](http://match.grew.fr/?corpus=SUD_Old_Church_Slavonic-PROIEL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Old_Church_Slavonic-PROIEL@2.7_table.html)] |
| `Old_French-SRCMF` | [[Query](http://match.grew.fr/?corpus=SUD_Old_French-SRCMF@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Old_French-SRCMF@2.7_table.html)] |
| `Old_Russian-RNC` | [[Query](http://match.grew.fr/?corpus=SUD_Old_Russian-RNC@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Old_Russian-RNC@2.7_table.html)] |
| `Old_Russian-TOROT` | [[Query](http://match.grew.fr/?corpus=SUD_Old_Russian-TOROT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Old_Russian-TOROT@2.7_table.html)] |
| :new: `Old_Turkish-Tonqq` | [[Query](http://match.grew.fr/?corpus=SUD_Old_Turkish-Tonqq@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Old_Turkish-Tonqq@2.7_table.html)] |
| `Persian-Seraji` | [[Query](http://match.grew.fr/?corpus=SUD_Persian-Seraji@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Persian-Seraji@2.7_table.html)] |
| :new: `Persian-PerDT` | [[Query](http://match.grew.fr/?corpus=SUD_Persian-PerDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Persian-PerDT@2.7_table.html)] |
| `Polish-LFG` | [[Query](http://match.grew.fr/?corpus=SUD_Polish-LFG@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Polish-LFG@2.7_table.html)] |
| `Polish-PDB` | [[Query](http://match.grew.fr/?corpus=SUD_Polish-PDB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Polish-PDB@2.7_table.html)] |
| `Polish-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Polish-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Polish-PUD@2.7_table.html)] |
| `Portuguese-Bosque` | [[Query](http://match.grew.fr/?corpus=SUD_Portuguese-Bosque@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Portuguese-Bosque@2.7_table.html)] |
| `Portuguese-GSD` | [[Query](http://match.grew.fr/?corpus=SUD_Portuguese-GSD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Portuguese-GSD@2.7_table.html)] |
| `Portuguese-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Portuguese-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Portuguese-PUD@2.7_table.html)] |
| `Romanian-Nonstandard` | [[Query](http://match.grew.fr/?corpus=SUD_Romanian-Nonstandard@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Romanian-Nonstandard@2.7_table.html)] |
| `Romanian-RRT` | [[Query](http://match.grew.fr/?corpus=SUD_Romanian-RRT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Romanian-RRT@2.7_table.html)] |
| `Romanian-SiMoNERo` | [[Query](http://match.grew.fr/?corpus=SUD_Romanian-SiMoNERo@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Romanian-SiMoNERo@2.7_table.html)] |
| `Russian-GSD` | [[Query](http://match.grew.fr/?corpus=SUD_Russian-GSD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Russian-GSD@2.7_table.html)] |
| `Russian-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Russian-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Russian-PUD@2.7_table.html)] |
| `Russian-SynTagRus` | [[Query](http://match.grew.fr/?corpus=SUD_Russian-SynTagRus@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Russian-SynTagRus@2.7_table.html)] |
| `Russian-Taiga` | [[Query](http://match.grew.fr/?corpus=SUD_Russian-Taiga@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Russian-Taiga@2.7_table.html)] |
| `Sanskrit-UFAL` | [[Query](http://match.grew.fr/?corpus=SUD_Sanskrit-UFAL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Sanskrit-UFAL@2.7_table.html)] |
| `Sanskrit-Vedic` | [[Query](http://match.grew.fr/?corpus=SUD_Sanskrit-Vedic@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Sanskrit-Vedic@2.7_table.html)] |
| `Scottish_Gaelic-ARCOSG` | [[Query](http://match.grew.fr/?corpus=SUD_Scottish_Gaelic-ARCOSG@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Scottish_Gaelic-ARCOSG@2.7_table.html)] |
| `Serbian-SET` | [[Query](http://match.grew.fr/?corpus=SUD_Serbian-SET@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Serbian-SET@2.7_table.html)] |
| `Skolt_Sami-Giellagas` | [[Query](http://match.grew.fr/?corpus=SUD_Skolt_Sami-Giellagas@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Skolt_Sami-Giellagas@2.7_table.html)] |
| `Slovak-SNK` | [[Query](http://match.grew.fr/?corpus=SUD_Slovak-SNK@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Slovak-SNK@2.7_table.html)] |
| `Slovenian-SSJ` | [[Query](http://match.grew.fr/?corpus=SUD_Slovenian-SSJ@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Slovenian-SSJ@2.7_table.html)] |
| `Slovenian-SST` | [[Query](http://match.grew.fr/?corpus=SUD_Slovenian-SST@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Slovenian-SST@2.7_table.html)] |
| :new: `Soi-AHA` | [[Query](http://match.grew.fr/?corpus=SUD_Soi-AHA@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Soi-AHA@2.7_table.html)] |
| :new: `South_Levantine_Arabic-MADAR` | [[Query](http://match.grew.fr/?corpus=SUD_South_Levantine_Arabic-MADAR@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_South_Levantine_Arabic-MADAR@2.7_table.html)] |
| `Spanish-AnCora` | [[Query](http://match.grew.fr/?corpus=SUD_Spanish-AnCora@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Spanish-AnCora@2.7_table.html)] |
| `Spanish-GSD` | [[Query](http://match.grew.fr/?corpus=SUD_Spanish-GSD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Spanish-GSD@2.7_table.html)] |
| `Spanish-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Spanish-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Spanish-PUD@2.7_table.html)] |
| `Swedish-LinES` | [[Query](http://match.grew.fr/?corpus=SUD_Swedish-LinES@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Swedish-LinES@2.7_table.html)] |
| `Swedish-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Swedish-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Swedish-PUD@2.7_table.html)] |
| `Swedish_Sign_Language-SSLC` | [[Query](http://match.grew.fr/?corpus=SUD_Swedish_Sign_Language-SSLC@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Swedish_Sign_Language-SSLC@2.7_table.html)] |
| `Swedish-Talbanken` | [[Query](http://match.grew.fr/?corpus=SUD_Swedish-Talbanken@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Swedish-Talbanken@2.7_table.html)] |
| `Swiss_German-UZH` | [[Query](http://match.grew.fr/?corpus=SUD_Swiss_German-UZH@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Swiss_German-UZH@2.7_table.html)] |
| `Tagalog-TRG` | [[Query](http://match.grew.fr/?corpus=SUD_Tagalog-TRG@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Tagalog-TRG@2.7_table.html)] |
| `Tagalog-Ugnayan` | [[Query](http://match.grew.fr/?corpus=SUD_Tagalog-Ugnayan@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Tagalog-Ugnayan@2.7_table.html)] |
| `Tamil-TTB` | [[Query](http://match.grew.fr/?corpus=SUD_Tamil-TTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Tamil-TTB@2.7_table.html)] |
| :new: `Tamil-MWTT` | [[Query](http://match.grew.fr/?corpus=SUD_Tamil-MWTT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Tamil-MWTT@2.7_table.html)] |
| `Telugu-MTG` | [[Query](http://match.grew.fr/?corpus=SUD_Telugu-MTG@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Telugu-MTG@2.7_table.html)] |
| `Thai-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Thai-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Thai-PUD@2.7_table.html)] |
| :new: `Tupinamba-TuDeT` | [[Query](http://match.grew.fr/?corpus=SUD_Tupinamba-TuDeT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Tupinamba-TuDeT@2.7_table.html)] |
| `Turkish-GB` | [[Query](http://match.grew.fr/?corpus=SUD_Turkish-GB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Turkish-GB@2.7_table.html)] |
| `Turkish-IMST` | [[Query](http://match.grew.fr/?corpus=SUD_Turkish-IMST@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Turkish-IMST@2.7_table.html)] |
| `Turkish-PUD` | [[Query](http://match.grew.fr/?corpus=SUD_Turkish-PUD@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Turkish-PUD@2.7_table.html)] |
| :new: `Turkish-BOUN` | [[Query](http://match.grew.fr/?corpus=SUD_Turkish-BOUN@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Turkish-BOUN@2.7_table.html)] |
| :new: `Turkish_German-SAGT` | [[Query](http://match.grew.fr/?corpus=SUD_Turkish_German-SAGT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Turkish_German-SAGT@2.7_table.html)] |
| `Ukrainian-IU` | [[Query](http://match.grew.fr/?corpus=SUD_Ukrainian-IU@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Ukrainian-IU@2.7_table.html)] |
| `Upper_Sorbian-UFAL` | [[Query](http://match.grew.fr/?corpus=SUD_Upper_Sorbian-UFAL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Upper_Sorbian-UFAL@2.7_table.html)] |
| `Urdu-UDTB` | [[Query](http://match.grew.fr/?corpus=SUD_Urdu-UDTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Urdu-UDTB@2.7_table.html)] |
| `Uyghur-UDT` | [[Query](http://match.grew.fr/?corpus=SUD_Uyghur-UDT@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Uyghur-UDT@2.7_table.html)] |
| `Vietnamese-VTB` | [[Query](http://match.grew.fr/?corpus=SUD_Vietnamese-VTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Vietnamese-VTB@2.7_table.html)] |
| `Warlpiri-UFAL` | [[Query](http://match.grew.fr/?corpus=SUD_Warlpiri-UFAL@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Warlpiri-UFAL@2.7_table.html)] |
| `Welsh-CCG` | [[Query](http://match.grew.fr/?corpus=SUD_Welsh-CCG@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Welsh-CCG@2.7_table.html)] |
| `Wolof-WTB` | [[Query](http://match.grew.fr/?corpus=SUD_Wolof-WTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Wolof-WTB@2.7_table.html)] |
| `Yoruba-YTB` | [[Query](http://match.grew.fr/?corpus=SUD_Yoruba-YTB@2.7)] [[Relations](http://match.grew.fr/_meta/SUD_Yoruba-YTB@2.7_table.html)] |
