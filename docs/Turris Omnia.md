## Hostname

Change it in file `/etc/config/system`

	option hostname 'turris'


## OpenSSH

- Disable password login - uncomment and change to no in file `/etc/config/sshd`

		option PasswordAuthentication no

- Disable root login - uncomment and change to no in file `/etc/config/sshd`

		option PermitRootLogin no

- Create user for you

		adduser YOURUSERNAME

- Create home directory for you

		mkdir -p /home/YOURUSERNAME
		chown YOURUSERNAME:YOURUSERNAME /home/YOURUSERNAME

- Configure SSH authorized_keys

		mkdir /home/YOURUSERNAME/.ssh
		echo "YOURSSHKEY" > /home/YOURUSERNAME/.ssh/authorized_keys
		chown -R YOURUSERNAME:YOURUSERNAME /home/YOURUSERNAME/.ssh
		chmod 600 /home/YOURUSERNAME/.ssh/authorized_keys

- Restart ssh <file bash>

		/etc/init.d/sshd restart

- Install sudo

		opkg install sudo

- Create sudo group with your user

		groupadd --system sudo
		usermod -a -G sudo YOURUSERNAME

- Create sudoers file for your user in file `/etc/sudoers.d/YOURUSERNAME`
	- Sudo without password

			YOURUSERNAME  ALL=(ALL) NOPASSWD : ALL

	- Sudo with password

			YOURUSERNAME    ALL=(ALL:ALL)  ALL

Sources:

- [openwrt.org](https://wiki.openwrt.org/doc/howto/secure.access#allow_temporary_privileged_access_using_sudo)
