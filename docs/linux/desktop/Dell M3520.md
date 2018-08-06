## Graphics card

### Nvidia driver

- NVIDIA GM107GLM [Quadro M620 Mobile]
- version: 375.66 - `nvidia-375`
- recommended nvidia 384: http://www.nvidia.com/download/driverResults.aspx/123103/en-us
- newer drivers on ubuntu: https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa

		sudo add-apt-repository ppa:graphics-drivers/ppa
		sudo apt-get update

- configure linux kernel [source](https://charlienewey.github.io/getting-nvidia-drivers-working-on-ubuntu-17-10/)
- create file `/etc/modprobe.d/blacklist-nouveau.conf`

		blacklist nouveau
		blacklist lbm-nouveau
		alias nouveau off
		alias lbm-nouveau off

- create file `/etc/modprobe.d/nvidia-drm-nomodeset.conf` with content

		options nvidia-drm modeset=1

- update initial ramdisk

		sudo update-initramfs -u

### Nouveau driver

- Intel Corporation 591b
- dell_wmi, dell_laptop, nouveau, i915
- xserver-xorg-video-nouveau - `1.0.14`
