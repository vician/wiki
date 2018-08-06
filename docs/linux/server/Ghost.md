## Install

	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash
	sudo apt install nodejs
	sudo npm i -g ghost-cli
	mkdir /var/www/your-ghost-instance
	ghost install --db sqlite3 --dbpath ./content/data/ghost.db

## Update

Go to ghost directory

	cd /var/www/your-ghost-instance
	sudo npm i -g ghost-cli@latest
	ghost migrate
	ghost update
