## Generate new key

	gpg2 --full-gen-key


## Export

- My fingerprint

		gpg --fingerprint --list-keys me@example.org

- My public key

		gpg --armor --export me@example.org

- My private key

		gpg --armor --export-secret-keys me@example.org

## Import

	gpg --import file.asc

## Sign

- Show

		gpg -K --fingerprint

- Refresh

		gpg --refresh-keys

- Sign

		gpg --ask-cert-level --sign-key 00AA11BB22CC33DD

- Send the sign

		gpg --send-keys 00AA11BB22CC33DD

## Recv all keys I already signed

https://gitlab.com/snippets/1738577

	gpg --refresh-keys me@example.com
	gpg --list-sigs me@example.com |grep -v "sig  " | grep "not found" | awk '{print $3}' |  xargs -L1 gpg --recv-keys
	gpg --list-sigs me@example.com | grep "not found" | awk '{print $2}' | xargs -L1 gpg --recv-keys
