[Oficiální návod v angličtině](https://help.ubuntu.com/community/VerifyIsoHowto)

## Získejte potřebné soubory

Z následujícího seznamu si vyberte zvolenou variantu Ubuntu a stáhněte si iso soubor (ev. přes torenty).

| Verze     | Oficiální | Budgie | Xfce | Mate | KDE |
| --------- | --------- | ------ | ---- | ---- | --- |
| 18.04 LTS | [Gnome](http://releases.ubuntu.com/bionic/) | [Budgie](http://cdimage.ubuntu.com/ubuntu-budgie/releases/bionic/release/) | [Xubuntu](http://cdimage.ubuntu.com/xubuntu/releases/bionic/release/) | [Mate](http://cdimage.ubuntu.com/ubuntu-mate/releases/bionic/release/) | [Kubuntu](http://cdimage.ubuntu.com/kubuntu/releases/bionic/release/) |
| 16.04 LTS | [Unity](http://releases.ubuntu.com/xenial/) | [Budgie](http://cdimage.ubuntu.com/ubuntu-budgie/releases/xenial/release/) | [Xubuntu](http://cdimage.ubuntu.com/xubuntu/releases/xenial/release/) | [Mate](http://cdimage.ubuntu.com/ubuntu-mate/releases/xenial/release/) | [Kubuntu](http://cdimage.ubuntu.com/kubuntu/releases/xenial/release/) |
| 14.04 LTS | [Unity](http://releases.ubuntu.com/xenial/) | [Budgie](http://cdimage.ubuntu.com/ubuntu-budgie/releases/xenial/release/) | [Xubuntu](http://cdimage.ubuntu.com/xubuntu/releases/xenial/release/) | [Mate](http://cdimage.ubuntu.com/ubuntu-mate/releases/xenial/release/) | [Kubuntu](http://cdimage.ubuntu.com/kubuntu/releases/xenial/release/) |

Navíc stáhněte ze stejného adresáře soubory:

- `SHA256SUMS`
- `SHA256SUMS.gpg`

Všechny tři stažené soubory mějte umístěné v jednom adresáři.

## Ověřte integritu

	sha256sum --ignore-missing -c SHA256SUMS

## Stáhněte si klíče, které měly podepsat kontrolní součet

	gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys 843938DF228D22F7B3742BC0D94AA3F0EFE21092 C5986B4F1257FFA86632CBA746181433FBB75451

## Ověřte podpis souboru s kontrolním součtem

	gpg --verify SHA256SUMS.gpg SHA256SUMS
