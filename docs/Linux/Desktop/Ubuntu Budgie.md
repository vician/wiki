## Ubuntu Budgie 17.04

###  BIOS - fix gray screen after dell logo with no grub menu

_This is fixed in Ubuntu Budgie 17.10 (tested on beta1)._

1. Start OS - if you see only gray screen after dell logo pres `CTRL+ALT+DELETE` and wait when OS boot again, grub should appear if not, do this step again
1. Edit file `/etc/default/grub` and disable `GRUB_HIDDEN_TIMEOUT` like this:

		#GRUB_HIDDEN_TIMEOUT=0

1. Reload grub:

		sudo update-grub

1. If you have disk encrypted, you will properly see GRUB but then there will be again only gray screen after it, press `CTRL+ALT+F2` - screen should change to black (if not press it again) then press `CTRL+ALT+F7` - black screen with password promt should appear

### Use backports for newset Budgie Desktop (10.4) with ALT+TAB, several applets and other features

_Ubuntu Budgie 17.10 already has Budgie Desktop 10.4._

Install [ppa backports](https://launchpad.net/~ubuntubudgie/+archive/ubuntu/backports)

	sudo add-apt-repository ppa:ubuntubudgie/backports
	sudo apt update ; sudo apt upgrade

## Install Gnome Tweak Tool

	sudo apt install gnome-tweak-tool

I personally use:

- Appearance -> Global Dark Theme -> Enabled
- Appearance -> Enable animations -> Disabled
- Workspaces -> Number of Workspaces -> `2`


## Additional applets

### Caffeine

	sudo apt install caffeine

### Simple weather indicator

	sudo add-apt-repository ppa:kasra-mp/ubuntu-indicator-weather
	sudo apt update && sudo apt install indicator-weather

Do not forgot to put it into startup applications.

## National Geographic Wallpaper

	sudo add-apt-repository ppa:atareao/atareao
	sudo apt update ; sudo atp install national-geographic-wallpaper
