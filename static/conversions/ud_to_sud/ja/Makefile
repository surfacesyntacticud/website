build:
	cat 3_rel.conllu | grew transform -columns "ID FORM UPOS HEAD DEPREL" | grew transform > tmp.conllu
	dep2pict tmp.conllu 3_rel.svg
	grew transform -config sud -grs ../tools/converter/grs/UD_to_SUD.grs -i 3_rel.conllu -o 3_rel__sud_u.conllu
	cat 3_rel__sud_u.conllu | grew transform -columns "ID FORM UPOS HEAD DEPREL" | grew transform > tmp.conllu
	dep2pict tmp.conllu 3_rel__sud_u.svg
	rm -f tmp.conllu

clean:
	rm -f *.svg
	rm -f 3_rel__*.conllu
