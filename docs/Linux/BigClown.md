## Flash firmware

- Get the firmware
	- base usb gateway: https://github.com/bigclownlabs/bcf-gateway/releases (file: firmware.bin)
	- remote sensor: https://github.com/bigclownlabs/bcf-generic-node/releases (file depends on your purpose)
- Install dfu-util (Ubuntu)

		sudo apt install dfu-util

- Connect the module via USB in DFU mode:
	- hold B button while you insert it into USB port
	- or press and hold B button, then R button while still pressing the B button and then release R button and then the B button

- You can check connected devices:

		sudo dfu-util -l

- Flash the new firmware

		sudo dfu-util -s 0x08000000:leave -d 0483:df11 -a 0 -D firmware.bin

## Install USB gateway

See [https://gitlab.labs.nic.cz/mvician/bigclown-gateway](https://gitlab.labs.nic.cz/mvician/bigclown-gateway)
