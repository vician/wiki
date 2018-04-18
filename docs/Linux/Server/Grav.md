## Installation

	git clone https://github.com/getgrav/grav
	cd grav
	git checkout master
	sudo apt install php7.2-cli php7.2-mbstring php7.2-curl php7.2-zip php7.2-gd php7.2-xml
	# or php7.2-fpm
	bin/grav install
	bin/gpm install admin

## Local run

	php -S 127.0.0.1:9051 system/router.php
