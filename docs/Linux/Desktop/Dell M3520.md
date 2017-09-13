## Graphics card

### Nvidia driver

- NVIDIA GM107GLM [Quadro M620 Mobile]
- version: 375.66 - `nvidia-375`
- recommended nvidia 384: http://www.nvidia.com/download/driverResults.aspx/123103/en-us
- newer drivers on ubuntu: https://launchpad.net/~graphics-drivers/+archive/ubuntu/ppa

### Nouveau driver

- Intel Corporation 591b
- dell_wmi, dell_laptop, nouveau, i915
- xserver-xorg-video-nouveau - `1.0.14`

## BIOS - fix gray screen after dell logo with no grub menu

Edit file `/etc/default/grub` and keep it like this:

```
#GRUB_HIDDEN_TIMEOUT=0
#GRUB_HIDDEN_TIMEOUT_QUIET=true
```

Reload grub: `sudo update-grub`
