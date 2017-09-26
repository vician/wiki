[Powerline](https://powerline.readthedocs.io/en/latest/installation.html)  is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome, i3 and Qtile.

- Install powerline itself

		sudo apt install python3-pip
		sudo apt install fonts-powerline
		sudo pip3 install powerline-status

- Enable it for bash

		echo -e "powerline-daemon -q\nsource /usr/local/lib/python3.5/dist-packages/powerline/bindings/bash/powerline.sh" >> ~/.bashrc

- Enable git branch information

		mkdir -p ~/.config/powerline
		cp -r /usr/local/lib/python3.5/dist-packages/powerline/config_files/ ~/.config/powerline/
		# replace shell -> theme: default to default_leftonly

- You can use [powerline-gitstatus plugin](https://github.com/jaspernbrouwer/powerline-gitstatus) but bash doesn't support writing to the right side of the prompt
