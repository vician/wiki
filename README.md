# wiki
Personal wiki, migrated from dokuwiki

## Install

```
sudo apt install python3-pip
sudo pip3 install mkdocs mkdocs-material
ssh-keygen -t ecdsa -f /etc/caddy/wiki.id_ecdsa
chown www-data:www-data /etc/caddy/wiki.id_ecdsa /etc/caddy/wiki.id_ecdsa.pub
```

## Caddy

```
wiki.vician.cz {
	tls EMAIL

	gzip

	root /var/www/wiki.vician.cz/site/

	git {
		repo https://github.com/vician/wiki
		path /var/www/wiki.vician.cz
		then mkdocs build
		hook /webhook SECRET
	}
}

```
