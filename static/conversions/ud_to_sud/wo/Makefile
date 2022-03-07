build:
	cat na.conllu | grew transform -columns "ID FORM UPOS HEAD DEPREL" | grew transform > tmp.conllu
	dep2pict tmp.conllu na.svg
	grew transform -config sud -grs ../tools/converter/grs/UD_to_SUD.grs -i na.conllu -o na__sud_u.conllu
	cat na__sud_u.conllu | grew transform -columns "ID FORM UPOS HEAD DEPREL" | grew transform > tmp.conllu
	dep2pict tmp.conllu na__sud_u.svg
	grew transform -config sud -grs ../tools/converter/grs/wo_UD_to_SUD.grs -strat wo_main -i na.conllu -o na__sud_wo.conllu
	cat na__sud_wo.conllu | grew transform -columns "ID FORM UPOS HEAD DEPREL" | grew transform > tmp.conllu
	dep2pict tmp.conllu na__sud_wo.svg
	rm -f tmp.conllu

clean:
	rm -f *.svg
	rm -f 	na__*.conllu
