_What I need on my Ubuntu desktop._

- See specific for [Ubuntu Budgie](./Ubuntu Budgie/)

- terminal

		sudo add-apt-repository ppa:webupd8team/terminix
		sudo apt update ; sudo apt upgrade ; sudo apt dist-upgrade
		gsettings set org.gnome.desktop.default-applications.terminal exec 'tilix'
		sudo update-alternatives --config x-terminal-emulator


- terminal utilities

		sudo apt install mc htop vim git tree whois python3-pip

- [insync](https://www.insynchq.com/downloads#repositories)

		sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys ACCAF35C
		echo "deb http://apt.insynchq.com/$(lsb_release -si | tr '[:upper:]' '[:lower:]') $(lsb_release -sc) non-free contrib" | sudo tee /etc/apt/sources.list.d/insync.list
		sudo apt update ; sudo apt install insync

- [keepassxc](https://keepassxc.org/download#linux) and [qtqr](https://launchpad.net/qr-tools)

		sudo snap install keepassxc
		sudo apt install qtqr

- [spotify](https://www.spotify.com/cz/download/linux/) - testing version

		sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BBEBDCB318AD50EC6865090613B00F1FD2C19886 0DF731E45CE24F27EEEB1450EFDC8610341D9410
		echo deb http://repository.spotify.com testing non-free | sudo tee /etc/apt/sources.list.d/spotify.list
		sudo apt update ; sudo apt install spotify-client

- [Standard Notes](https://standardnotes.org/getting-started?downloaded=linux)

		# Download from the link
		chmod +x ~/Downloads/standard-notes-?.?.?-x86_64.AppImage
		~/Downloads/standard-notes-?.?.?-x86_64.AppImage

- [powerline](https://powerline.readthedocs.io/en/latest/installation.html)

		sudo apt install python3-pip
		sudo pip3 install powerline-status
		echo -e "powerline-daemon -q\nsource /usr/local/lib/python3.5/dist-packages/powerline/bindings/bash/powerline.sh" >> ~/.bashrc
		sudo apt install fonts-powerline
		mkdir -p ~/.config/powerline
		cp -r /usr/local/lib/python3.5/dist-packages/powerline/config_files/ ~/.config/powerline/
		# replace shell -> theme: default to default_leftonly

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

		sudo apt install gnome-clocks arandr seahorse

- [atom](https://atom.io)

		sudo snap install --classic atom
