# Source code for production of the SUD website

This repository contains the source code for production of the SUD website: https://surfacesyntacticud.github.io/

The SUD website is automatically updated when this repository is modified on github.

## Modification of the SUD website

All pages of the website are written with the markdown syntax and are stored in the `content` folder. Other static files (like images), should be put in the `static` folder.

:warning: **Please**: do not change files outside of these two folders.

## Local version of the website

The website is generated with [Hugo](https://gohugo.io/). It is not necessary to install it but it is strongly recommended if you want to preview your changes locally before updating the website.

### Installation of Hugo
Visit the [Install Hugo](https://gohugo.io/getting-started/installing/) page for local installation.
On MacOSX, it can be installed with `brew install hugo` for instance.

### Run Hugo locally
Once Hugo is installed, you have to run the following command from the main directory:

`hugo server`

and the website is available on http://localhost:1313/ and is updated dynamically each time you save your file.

## Update production website

From the root of your site:

```
git submodule update --remote --merge
```



## Modification of the website

### Add a new page

 1. If you want your page to have subpages like `guidelines/u`:
  * build a folder in `content` with the same path `guidelines/u`
  * put the code of the page in this folder with the name "_index.md" (the underscore is needed for Hugo to generate correctly the page).

 1. If you don't want your page to have subpages like `guidelines/deep_features/agent`:
  * put a file `agent.md` in the folder `guidelines/deep_features/`

### Draw a dependency graph in a page

With Kim's [arborator-draft](https://github.com/Arborator/arborator-draft), it is possible to draw dependency graphs from CoNLL data in the source page with the following syntax:

```
{{< conll >}}
1	A	a	DET	_	_	2	det	_	_
2	man	man	NOUN	_	_	3	subj	_	_
3	walks	walk	VERB	_	_	0	root	_	_
{{< /conll >}}
```

:warning: you must use a tabulation character to separate columns in the CoNLL code.


