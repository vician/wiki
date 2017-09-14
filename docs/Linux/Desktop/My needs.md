- terminal utilities

         sudo apt install mc htop vim git

- [insync](https://www.insynchq.com/downloads#repositories)

         sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys ACCAF35C
         echo "deb http://apt.insynchq.com/$(lsb_release -si | tr '[:upper:]' '[:lower:]') $(lsb_release -sc) non-free contrib" | sudo tee /etc/apt/sources.list.d/insync.list
         sudo apt update ; sudo apt install insync

- [keepassxc](https://keepassxc.org/download#linux)

         sudo snap install keepassxc
  
- [spotify](https://www.spotify.com/cz/download/linux/)

         sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BBEBDCB318AD50EC6865090613B00F1FD2C19886 0DF731E45CE24F27EEEB1450EFDC8610341D9410
         echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list
         sudo apt update ; sudo apt install spotify-client

- [standardnotes](https://standardnotes.org/getting-started?downloaded=linux)

         # Download from the link 
         chmod +x ./standard-notes-?.?.?-x86_64.AppImage
         ./standard-notes-?.?.?-x86_64.AppImage

- [powerline](https://powerline.readthedocs.io/en/latest/installation.html)

         sudo apt install python3-pip
         sudo pip3 install powerline-status
         echo "source /usr/local/lib/python3.5/dist-packages/powerline/bindings/bash/powerline.sh" >> ~/.bashrc
         sudo apt install fonts-powerline

- calibre

         sudo apt install calibre
