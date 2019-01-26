	sudo apt install gnome-session
	sudo apt install plymouth-theme-ubuntu-gnome-logo plymouth-theme-ubuntu-gnome-text
	sudo apt install gnome-backgrounds
	sudo update-alternatives --config gdm3.css
	sudo update-alternatives --config default.plymouth
	sudo update-alternatives --config text.plymouth

## Dash to Dock


- If the dock is visible on the lock screen [remove the ubuntu dock](https://github.com/micheleg/dash-to-dock/issues/649) like this:

		sudo mv /usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com ~/
