_What I need on my Ubuntu desktop._

- terminal utilities

		sudo apt install git mc htop vim git tree whois python3-pip acpi gdebi lm-sensors p7zip-full curl

- set vim default

		sudo update-alternatives --config editor

- See specifics for [Ubuntu Budgie](./Ubuntu Budgie/)

- terminal

		sudo add-apt-repository ppa:webupd8team/terminix
		sudo apt update ; sudo apt upgrade ; sudo apt dist-upgrade; sudo apt install tilix
		gsettings set org.gnome.desktop.default-applications.terminal exec 'tilix'
		sudo update-alternatives --config x-terminal-emulator

- [insync](https://www.insynchq.com/downloads#repositories)

		sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys ACCAF35C
		echo "deb http://apt.insynchq.com/$(lsb_release -si | tr '[:upper:]' '[:lower:]') $(lsb_release -sc) non-free contrib" | sudo tee /etc/apt/sources.list.d/insync.list
		sudo apt update ; sudo apt install insync

- [keepassxc](https://keepassxc.org/download#linux) and [qtqr](https://launchpad.net/qr-tools) ([bug with lock screen](https://github.com/keepassxreboot/keepassxc/issues/687))

		sudo snap install keepassxc
		sudo apt install qtqr qreator

- [spotify](https://www.spotify.com/cz/download/linux/) - testing version

		sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BBEBDCB318AD50EC6865090613B00F1FD2C19886 0DF731E45CE24F27EEEB1450EFDC8610341D9410
		echo deb http://repository.spotify.com testing non-free | sudo tee /etc/apt/sources.list.d/spotify.list
		sudo apt update ; sudo apt install spotify-client

- [Standard Notes](https://standardnotes.org/getting-started?downloaded=linux)

		# Download from the link
		chmod +x ~/Downloads/standard-notes-?.?.?-x86_64.AppImage
		~/Downloads/standard-notes-?.?.?-x86_64.AppImage

- bash configuration

		export GIT_PS1_SHOWDIRTYSTATE=1
		export GIT_PS1_SHOWSTASHSTATE=1
		export GIT_PS1_SHOWUNTRACKEDFILES=1
		export GIT_PS1_SHOWUPSTREAM="auto verbose"
		PS1='\[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]$(__git_ps1)\$ '


- calibre

		sudo apt install calibre

- [gradio](https://github.com/haecker-felix/gradio/wiki/Install-Gradio)
	- Install as snap or flatpak or via [UUR](https://uur.vician.cz)

			./uur gradio.uur

	- Or see [UUR manual installation](https://uur.vician.cz/packages/gradio/)

- [pulse audio equalizer](PulseAudio Equalizer/)
- pidgin

		sudo apt install pidgin pidgin-plugin-pack pidgin-awayonlock

- thunderbird
	- install with GPG and gnome support

			sudo apt install thunderbird enigmail thunderbird-gnome-support

	- check for new message in all folders, go to Preferences -> Advanced -> Config Editor -> _I accept the risk!" -> search `server.default.check_all_folders_for_new` -> double click on the line for change it to `true`

- [telegram](https://telegram.org/dl/desktop/linux)
- GUI programs

		sudo apt install gnome-clocks arandr seahorse geany geany-plugins gitg redshift-gtk vlc gimp

- [atom](https://atom.io)

		sudo add-apt-repository ppa:webupd8team/atom
		sudo apt update ; sudo apt install atom

- install firefox, remove flash ([check if flash is installed](http://isflashinstalled.com/))

		sudo apt install firefox
		sudo apt remove flashplugin-installer

- enable u2f (yubikey, etc.)
	- open `about:config`
	- search for webauth
	- enable (value=True) these two:
		- `security.webauth.u2`
		- `security.webauth.webauthn_enable_usbtoken`

- nextcloud client

		sudo add-apt-repository ppa:nextcloud-devs/client
		sudo apt-get update
		sudo apt install nextcloud-client nextcloud-client-nautilus

- [boostnote](https://boostnote.io/#download)
- [skype](https://get.skype.com/getskype-webwrap-deb)
- [teamviewer](https://www.teamviewer.com/en/download/linux/)
- firewall

		sudo apt install gufw
