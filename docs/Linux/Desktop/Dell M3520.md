## Graphics card

### Nvidia driver

- NVIDIA GM107GLM [Quadro M620 Mobile]
- version: 375.66 - `nvidia-375`
- recommended nvidia 384: http://www.nvidia.com/download/driverResults.aspx/123103/en-us
- newer drivers on ubuntu: https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa

		sudo add-apt-repository ppa:graphics-drivers/ppa
		sudo apt-get update

### Nouveau driver

- Intel Corporation 591b
- dell_wmi, dell_laptop, nouveau, i915
- xserver-xorg-video-nouveau - `1.0.14`
