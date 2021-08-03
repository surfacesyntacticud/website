build:
	cat bilat.conllu | grew transform -columns "ID FORM UPOS HEAD DEPREL" | grew transform > tmp.conllu
	dep2pict tmp.conllu bilat.svg
	grew transform -config sud -grs ../tools/converter/grs/UD_to_SUD.grs -i bilat.conllu -o bilat__sud_u.conllu
	cat bilat__sud_u.conllu | grew transform -columns "ID FORM UPOS HEAD DEPREL" | grew transform > tmp.conllu
	dep2pict tmp.conllu bilat__sud_u.svg
	rm -f tmp.conllu

clean:
	rm -f *.svg
	rm -f bilat__sud_u.conllu
