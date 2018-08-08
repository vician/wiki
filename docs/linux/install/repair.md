## Reinstall GRUB after BIOS Update on LUKS encrypted system

Source: [sowhatisthesolution.wordpress.com](https://sowhatisthesolution.wordpress.com/2017/07/02/reinstall-grub-after-bios-update-on-luks-encrypted-system/)

	cryptsetup luksOpen /dev/sda3 sda3_crypt
	sudo lvscan
	sudo mount /dev/ubuntu-vg/root /mnt
	sudo mount /dev/sda2 /mnt/boot
	for i in /dev /dev/pts /proc /sys /run ; do sudo mount -B $i /mnt$i ; done
	sudo mount -o bind /etc/resolv.conf /mnt/etc/resolv.conf
	sudo mount /dev/sda1 /mnt/boot/efi/
	sudo chroot /mnt /bin/bash
	sudo grub-install /dev/sda
	update-initramfs -c -k all
