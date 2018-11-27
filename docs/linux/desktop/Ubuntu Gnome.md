	sudo apt install gnome-tweak-tool

## Theme

	sudo apt install arc-theme chrome-gnome-shell

- go to [user themes extension](https://extensions.gnome.org/extension/19/user-themes/) install browser extension and the extension
- change the appearence in gnome tweak tool

		sudo apt install pocillo-icon-theme budgie-wallpapers

## Gnome Shell Extensions

- [AlternateTab](https://extensions.gnome.org/extension/15/alternatetab/)
- [Battery Status](https://extensions.gnome.org/extension/817/battery-status/)
- [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)
- [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
	- If the dock is visible on the lock screen [remove the ubuntu dock](https://github.com/micheleg/dash-to-dock/issues/649) like this:
			sudo mv /usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com ~/
- [Media Player Indicator](https://extensions.gnome.org/extension/55/media-player-indicator/)
- [Notification Counter](https://extensions.gnome.org/extension/1386/notification-counter/)
- [Openweather](https://extensions.gnome.org/extension/750/openweather/)
- [Sound Input & Output Device Chooser](https://extensions.gnome.org/extension/906/sound-output-device-chooser/)
- [Suspend Button](https://extensions.gnome.org/extension/826/suspend-button/) - missing suspend button
- [System Monitor](https://extensions.gnome.org/extension/120/system-monitor/)
- [TopIcons Plus](https://extensions.gnome.org/extension/1031/topicons/) - missing systray
- [User Themes](https://extensions.gnome.org/extension/19/user-themes/)
- [Workpsace Indicator](https://extensions.gnome.org/extension/21/workspace-indicator/)


## Ubuntu as Gnome

	sudo apt install gnome-session
	sudo apt install plymouth-theme-ubuntu-gnome-logo plymouth-theme-ubuntu-gnome-text
	sudo apt install gnome-backgrounds
	sudo update-alternatives --config gdm3.css
	sudo update-alternatives --config default.plymouth
	sudo update-alternatives --config text.plymouth
