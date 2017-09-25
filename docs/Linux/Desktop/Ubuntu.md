_What I need on my Ubuntu desktop._

- [Newest budgie](https://launchpad.net/~ubuntubudgie/+archive/ubuntu/backports)
         
         sudo add-apt-repository ppa:ubuntubudgie/backports
         sudo apt update ; sudo apt upgrade
         
- Gnome tweak tool

         sudo apt install gnome-tweak-tool
         # Check global dark theme
         # Reduce amount of Workspace
         
- terminal utilities

         sudo apt install mc htop vim git tree whois python3-pip

- [insync](https://www.insynchq.com/downloads#repositories)

         sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys ACCAF35C
         echo "deb http://apt.insynchq.com/$(lsb_release -si | tr '[:upper:]' '[:lower:]') $(lsb_release -sc) non-free contrib" | sudo tee /etc/apt/sources.list.d/insync.list
         sudo apt update ; sudo apt install insync

- [keepassxc](https://keepassxc.org/download#linux)

         sudo snap install keepassxc
  
- [spotify](https://www.spotify.com/cz/download/linux/)

         sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BBEBDCB318AD50EC6865090613B00F1FD2C19886 0DF731E45CE24F27EEEB1450EFDC8610341D9410
         echo deb http://repository.spotify.com testing non-free | sudo tee /etc/apt/sources.list.d/spotify.list
         sudo apt update ; sudo apt install spotify-client

- [standardnotes](https://standardnotes.org/getting-started?downloaded=linux)

         # Download from the link 
         chmod +x ~/Downloads/standard-notes-?.?.?-x86_64.AppImage
         ~/Downloads/standard-notes-?.?.?-x86_64.AppImage

- [powerline](https://powerline.readthedocs.io/en/latest/installation.html)

         sudo apt install python3-pip
         sudo pip3 install powerline-status
         echo "source /usr/local/lib/python3.5/dist-packages/powerline/bindings/bash/powerline.sh" >> ~/.bashrc
         sudo apt install fonts-powerline
         mkdir -p ~/.config/powerline
         /usr/local/lib/python3.5/dist-packages/powerline/config_files/config.json ~/.config/powerline/config.json
         # replace shell -> theme: default to default_leftonly

- calibre

         sudo apt install calibre

- [gradio](https://github.com/haecker-felix/gradio/wiki/Install-Gradio)

         sudo add-apt-repository ppa:haecker-felix/gradio-daily
         sudo apt update ; sudo apt install gradio
         
- [pulse audio equalizer](PulseAudio Equalizer/)
- pidgin

         sudo apt install pidgin pidgin-plugin-pack

- thunderbird

         sudo apt install thunderbird enigmail thunderbird-gnome-support
         # check for new message in all folders: server.default.check_all_folders_for_new → true

- [telegram](https://telegram.org/dl/desktop/linux)
- gnome clocks

         sudo apt install gnome-clocks
         
- [atom](https://atom.io)

         sudo snap install --classic atom