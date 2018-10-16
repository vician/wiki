## Flash

- Install requirements

		sudo apt install fastboot

- Download appropriate image
- Use relevant key combination and boot to fastboot
- Erase and flash bootloader

		sudo fastboot devices # is device connected?
		sudo fastboot oem unlock # unlock device
		sudo fastboot erase boot
		sudo fastboot erase cache
		sudo fastboot erase recovery
		sudo fastboot erase system
		sudo fastboot erase userdata
		sudo fastboot flash bootloader boot.img # or other name of img file

- Reboot bootloader

		sudo fastboot reboot-bootloader

- Flash

		sudo fastboot -w update file.zip
