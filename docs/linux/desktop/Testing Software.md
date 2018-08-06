## [Thunderbird](https://launchpad.net/~mozillateam/+archive/ubuntu/thunderbird-next)

	sudo add-apt-repository ppa:mozillateam/thunderbird-next
	sudo apt update; sudo apt upgrade

## [Firefox](https://launchpad.net/~mozillateam/+archive/ubuntu/firefox-next)

	sudo add-apt-repository ppa:mozillateam/firefox-next
	sudo apt update; sudo apt upgrade

## Gajim (nightly version)

	sudo apt-get remove gajim
	wget -q https://gajim.org/gajim.key -O - | sudo apt-key add -
	sudo sh -c "echo deb ftp://ftp.gajim.org/debian unstable main > /etc/apt/sources.list.d/gajim.list"
	sudo apt-get update
	sudo apt-get install gajim-nightly

### Rolling back

	sudo rm /etc/apt/sources.list.d/gajim.list
	sudo apt update
	sudo apt remove gajim-nightly
	sudo apt install gajim
