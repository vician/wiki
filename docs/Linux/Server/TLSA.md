- Blog post in czech on root.cz: https://www.root.cz/clanky/protokol-dane-aneb-z-kroceni-zlych-certifikacnich-autorit/

## Generate record

- Web: https://www.huque.com/bin/gen_tlsa
- Python: https://github.com/pieterlexis/swede
- Python: https://github.com/letoams/hash-slinger

## Verify record

- Web: https://www.huque.com/bin/danecheck
- Addon to browsers: https://www.dnssec-validator.cz/

## Swede

### Install

	sudo apt install python python-unbound python-argparse python-ipaddr python-m2crypto
	git clone https://github.com/pieterlexis/swede

### Generate

	./swede create --port $PORT --protocol $PROTOCOL --output rfc --usage $USAGE --selector $SELECTOR --mtype $MTYPE $DOMAIN

#### Usage

	                     1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 3 3
	 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
	+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
	|  Cert. Usage  |   Selector    | Matching Type |               /
	+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+               /
	/                                                               /
	/                 Certificate Association Data                  /
	/                                                               /
	+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
