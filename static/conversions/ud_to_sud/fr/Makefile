build:
	cat post.conllu | grew_dev transform -columns "ID FORM UPOS HEAD DEPREL" | grew_dev transform > tmp.conllu
	dep2pict tmp.conllu post.svg
	grew_dev transform -config sud -grs ../tools/converter/grs/UD_to_SUD.grs -i post.conllu -o post__sud_u.conllu
	cat post__sud_u.conllu | grew_dev transform -columns "ID FORM UPOS HEAD DEPREL" | grew_dev transform > tmp.conllu
	dep2pict tmp.conllu post__sud_u.svg
	grew_dev transform -config sud -grs ../tools/converter/grs/fr_UD_to_SUD.grs -strat fr_main -i post.conllu -o post__sud_fr.conllu
	cat post__sud_fr.conllu | grew_dev transform -columns "ID FORM UPOS HEAD DEPREL" | grew_dev transform > tmp.conllu
	dep2pict tmp.conllu post__sud_fr.svg
	rm -f tmp.conllu

clean:
	rm -f *.svg
	rm -f post__*.conllu
