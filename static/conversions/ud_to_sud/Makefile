main:
	@if [ -d tools ] ; \
	then \
		make build ; \
	else \
		make warning ; \
	fi;

warning:
	@echo " ============ ⚠️ warning ⚠️ ============"
	@echo "This Makefile supposes that the 'tool' repository https://github.com/surfacesyntacticud/tools is locally available"
	@echo "Add a symbolic link or clone it with 'git clone https://github.com/surfacesyntacticud/tools.git'"
	@echo " ============ ⚠️ warning ⚠️ ============"

build:
	@make -C de
	@make -C fr
	@make -C wo
	@make -C ja

clean:
	@make -C de clean
	@make -C fr clean
	@make -C wo clean
	@make -C ja clean
