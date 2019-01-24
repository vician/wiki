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

- https://www.if-not-true-then-false.com/2015/fedora-nvidia-guide/
- https://fedoramagazine.org/install-nvidia-gpu/
