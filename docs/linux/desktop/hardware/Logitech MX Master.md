- https://wiki.archlinux.org/index.php/Logitech_MX_Master

| Physical action              | detected as           |
|------------------------------|-----------------------|
| Left button                  | button 1              |
| Press to wheel               | button 2              |
| Right button                 | button 3              |
| Scroll wheel up              | button 4              |
| Scroll wheel down            | button 5              |
| Press "i" button under wheel | undetectable in linux |
| Scroll hor_wheel right (up)  | button 6              |
| Scroll hor_wheel left (down) | button 7              |
| Side-bottom button           | button 8              |
| Side-top button              | button 9              |
| Thumb button                 | Ctrl+Alt+Tab          |


## Thumb wheel

- Install `xbindkey` and `xautomation`.
- Create file `~/.xbindkeysrc`

		# thumb wheel up => increase volume
		"xte 'key XF86AudioRaiseVolume'"
			b:6

		# thumb wheel down => lower volume
		"xte 'key XF86AudioLowerVolume'"
			b:7

- Create file for autostart `~/.config/autostart/xbindkeys.dekstop`:

		[Desktop Entry]
		Type=Application
		Name=xbindkeys
		TryExec=xbindkeys
		Exec=xbindkeys
		Icon=xbindkeys

## Thumb button

It raise `CTRL+ALT+TAB`. So it's more complicated. But you can configure it as a PlayPause button.

1. Go to _Settings -> Devices -> Keyboard_
2. Change the old function for `CTRL+ALT+TAB` - it's _Switch system controls_ by default, I changed it to `SHIFT+CTRL+TAB` ![](mxmaster-old.png)
3. Crete a new shortcut - you can press the thumb button to catch it exactly. I configure it for `xte 'key XF86AudioPlay'` to play or pause my music. ![](mxmaster-new.png)