- Install requiremetns on Arch Linux

		sudo pacman -S pulseaudio-equalizer
		
- Install requireents on Ubuntu

		sudo apt install pulseaudio-equalizer pavucontrol

- Temporary load modules

		pactl load-module module-equalizer-sink
		pactl load-module module-dbus-protocol

- Run gui frontend

		qpaeq

- If qpaeq has no effect, install pavucontrol and change "ALSA Playback on" to "FFT based equalizer on ..." while the media player is running.
- Load equalizer and dbus module on every boot
	- Edit the `/etc/pulse/default.pa` or `~/.config/pulse/default.pa` file with your favorite editor and append the following lines:

			### Load the integrated PulseAudio equalizer and D-Bus module
			load-module module-equalizer-sink
			load-module module-dbus-protocol
