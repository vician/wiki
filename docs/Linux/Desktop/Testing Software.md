## [Thunderbird](https://launchpad.net/~mozillateam/+archive/ubuntu/thunderbird-next)

	sudo add-apt-repository ppa:mozillateam/thunderbird-next
	sudo apt update; sudo apt upgrade

## [Firefox](https://launchpad.net/~mozillateam/+archive/ubuntu/firefox-next)

	sudo add-apt-repository ppa:mozillateam/firefox-next
	sudo apt update; sudo apt upgrade

## Gajim (nightly version)

	sudo apt remove gajim
	sudo apt autoremove
	echo "deb ftp://ftp.gajim.org/debian unstable main" | sudo tee /etc/apt/sources.list.d/gajim.list
	wget -O /tmp/gajim-dev-keyring.deb ftp://ftp.gajim.org/debian/dists/unstable/main/binary-amd64/gajim-dev-keyring_2016.03.29_all.deb
	sudo dpkg -i /tmp/gajim-dev-keyring.deb
	sudo apt update
	sudo apt install gajim-dev
