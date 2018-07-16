PIDFILE="server.pid"
LISTEN="127.0.0.1:8101"

install:
	sudo pip3 install mkdocs mkdocs-material

start:
	mkdocs serve --dev-addr=$(LISTEN) 1>/dev/null 2>/dev/null & echo $$! > $(PIDFILE)

status:
	ps faux | grep $$(cat $(PIDFILE))

stop:
	kill $$(cat $(PIDFILE))

build:
	mkdocs build

clean:
	mkdocs build --clean

restart: stop clean start

deploy: build
	ssh vf.vician.cz "sudo chown -R martin:www-data /var/www/wiki.vician.cz/"
	rsync -avz --delete --exclude="\.*" site/* vf.vician.cz:/var/www/wiki.vician.cz/
	ssh vf.vician.cz "sudo chown -R www-data:www-data /var/www/wiki.vician.cz/"
