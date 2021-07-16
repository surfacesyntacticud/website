doc:
	@echo " ============ ⚠️  warning ⚠️  ============"
	@echo "This Makefile supposes that the 'tool' repository https://github.com/surfacesyntacticud/tools is locally available"
	@echo "Add a symbolic link or clone it with 'git clone https://github.com/surfacesyntacticud/tools.git'"
	@echo " ============ ⚠️  warning ⚠️  ============"

wolof:
	dep2pict wo_na.conllu wo_na.svg
	grew transform -grs tools/converter/grs/UD_to_SUD.grs -i wo_na.conllu -o wo_na__sud_u.conllu
	grew transform -grs tools/converter/grs/wo_UD_to_SUD.grs -strat wo_main -i wo_na.conllu -o wo_na__sud_wo.conllu
	dep2pict wo_na__sud_u.conllu wo_na__sud_u.svg
	dep2pict wo_na__sud_wo.conllu wo_na__sud_wo.svg