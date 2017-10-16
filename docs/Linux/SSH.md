## SSH proxy

- Create socket proxy via SSH

		ssh -D 8080 -N sshusername@sshserver

- Configure your browser to socket proxy on `localhost:8080`

## Reverse tunnel

- Run SSH on target machine (behind NAT)
- Create tunnel to forwarding server

		ssh -R 5022:localhost:22 forwardinguser@forwardingserver

- Connect to the forwarding server

		ssh youruser@forwardingserver

 - Connect to the target machine via the reverse tunnel (on forwarding server)

		ssh localuser@localost -p 5022

Sources:
- https://www.abclinuxu.cz/blog/fuky/2015/6/reverzni-ssh-tunel
- http://www.dsl.cz/jak-na-to/jak-na-reverzni-ssh-tunel
