## Material theme

- Install

		pip3 install mkdocs mkdocs-material

- Enable this theme in `mkdocs.yml`

		theme: material

## Makefile

```Makefile
DEPLOYSEVER="example.com"
DEPLOYPATH="/var/www/$(DEPLOYSEVER)"

SERVEHOST="127.0.0.1"
SERVEPORT="8000"

PIDFILE="server.pid"
LISTEN="$(SERVEHOST):$(SERVEPORT)"

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
	#scp -r site/ $(DEPLOYSEVER):$(DEPLOYPATH)
	mkdocs gh-deploy
```

## Gitignore

```
server.pid
site/
```
