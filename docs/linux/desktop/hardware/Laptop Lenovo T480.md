## Disable touchscreen

```
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="04f3", ATTRS{idProduct}=="2398", ATTR{authorized}="0"' | sudo tee /etc/udev/rules.d/80-touchscreen.rules
udevadm control --reload-rules && udevadm trigger
```

You can find `idVendor` and `idProduct` by running

```
cat /proc/bus/input/devices
```

## Nvidia GPU


### Disable nouveau

[Source](https://www.if-not-true-then-false.com/2015/fedora-nvidia-guide/)

Do it after immediately after first boot of Fedora (everything as root).

- Disable nouveau driver:

		echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf

- Start without nouveau: Append `rd.driver.blacklist=nouveau` to end of `GRUB_CMDLINE_LINUX="..."` in `/etc/sysconfig/grub`
- Update grub2

		# BIOS
		grub2-mkconfig -o /boot/grub2/grub.cfg
		# UEFI
		grub2-mkconfig -o /boot/efi/EFI/fedora/grub.cfg

- Remove nouveau

		dnf remove xorg-x11-drv-nouveau


### Install Nvidia

[Source](https://fedoramagazine.org/install-nvidia-gpu/)

	sudo dnf update
	reboot # Will reboot your computer - do the next steps after it
	sudo dnf install fedora-workstation-repositories
	sudo dnf config-manager --set-enabled rpmfusion-nonfree-nvidia-driver
	reboot # Will reboot your computer - do the next steps after it
	sudo dnf repository-packages rpmfusion-nonfree-nvidia-driver info

- Login, connect to the internet, and open the Software app. Click Add-ons> Hardware Drivers> NVIDIA Linux Graphics Driver> Install.
- Reboot
- Verify that secure boot is disabled
