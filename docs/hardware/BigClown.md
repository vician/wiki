## Flash firmware

### BigClown Flashing tool

<https://www.bigclown.com/doc/tools/bcf/>

- Install

		sudo pip3 install --upgrade --no-cache-dir bcf

- Get list of connected devices

		bcf devices

- Flash gateway

		sudo bcf flash --device /dev/ttyACM0 bigclownlabs/bcf-gateway-core-module:latest

- Flash battery

		sudo bcf flash --device /dev/ttyACM0 bigclownlabs/bcf-generic-node-battery-standard:latest

### Manual flash

- Get the firmware
	- gateway core module: <https://github.com/bigclownlabs/bcf-gateway/releases> (file e.g.: `bcf-gateway-core-module-v?.?.?.bin`)
	- remote sensor: <https://github.com/bigclownlabs/bcf-generic-node/releases> (file e.g.: `bcf-generic-node-battery-standard-v?.?.?.bin`)
- Install `dfu-util` (Ubuntu)

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

## Aqicn - get coordinates

	wget -qO- "https://api.waqi.info/search/?token=YOUR_SECRET_API_KEY&keyword=Plzen" | json_pp
