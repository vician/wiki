- Install requirements on Ubuntu

		sudo apt install pulseaudio-equalizer pavucontrol

- Temporary load modules

		pactl load-module module-equalizer-sink
		pactl load-module module-dbus-protocol

- Run gui frontend

		qpaeq

- If qpaeq has no effect, install pavucontrol and change "ALSA Playback on" to "FFT based equalizer on ..." while the media player is running.

## Load equalizer and dbus module on every boot

- Edit the `/etc/pulse/default.pa` and append the following lines:

		### Load the integrated PulseAudio equalizer and D-Bus module
		load-module module-equalizer-sink
		load-module module-dbus-protocol

_Good description for [Ubuntu 14.04 on webupd8.org](http://www.webupd8.org/2013/03/install-pulseaudio-with-built-in-system.html)_
