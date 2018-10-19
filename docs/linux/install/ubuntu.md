[Official instructions](https://help.ubuntu.com/community/VerifyIsoHowto)

## Get necessary files

Choose your variant of Ubuntu and download iso file (alternatively via torrents).


| Version     | Official | Budgie | Xfce | Mate | KDE |
| --------- | --------- | ------ | ---- | ---- | --- |
| 18.10 [^cosmic] | [Gnome](http://releases.ubuntu.com/cosmic/) | [Budgie](http://cdimage.ubuntu.com/ubuntu-budgie/releases/cosmic/release/) | [Xubuntu](http://cdimage.ubuntu.com/xubuntu/releases/cosmic/release/) | [Mate](http://cdimage.ubuntu.com/ubuntu-mate/releases/cosmic/release/) | [Kubuntu](http://cdimage.ubuntu.com/kubuntu/releases/cosmic/release/) |
| 18.04 LTS | [Gnome](http://releases.ubuntu.com/bionic/) | [Budgie](http://cdimage.ubuntu.com/ubuntu-budgie/releases/bionic/release/) | [Xubuntu](http://cdimage.ubuntu.com/xubuntu/releases/bionic/release/) | [Mate](http://cdimage.ubuntu.com/ubuntu-mate/releases/bionic/release/) | [Kubuntu](http://cdimage.ubuntu.com/kubuntu/releases/bionic/release/) |
| 16.04 LTS | [Unity](http://releases.ubuntu.com/xenial/) | [Budgie](http://cdimage.ubuntu.com/ubuntu-budgie/releases/xenial/release/) | [Xubuntu](http://cdimage.ubuntu.com/xubuntu/releases/xenial/release/) | [Mate](http://cdimage.ubuntu.com/ubuntu-mate/releases/xenial/release/) | [Kubuntu](http://cdimage.ubuntu.com/kubuntu/releases/xenial/release/) |
| 14.04 LTS[^trusty] | [Unity](http://releases.ubuntu.com/trusty/) | [Budgie](http://cdimage.ubuntu.com/ubuntu-budgie/releases/trusty/release/) | [Xubuntu](http://cdimage.ubuntu.com/xubuntu/releases/trusty/release/) |  | [Kubuntu](http://cdimage.ubuntu.com/kubuntu/releases/trusty/release/) |

On top of that get these files from the same directory:

- `SHA256SUMS`
- `SHA256SUMS.gpg`

All three files put into the same directory.


## Check the integrity

	sha256sum --ignore-missing -c SHA256SUMS

## Get the keys for signature verification

	gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys 843938DF228D22F7B3742BC0D94AA3F0EFE21092 C5986B4F1257FFA86632CBA746181433FBB75451

## Check the signature

	gpg --verify SHA256SUMS.gpg SHA256SUMS


[^cosmic]: End of Live: July 2019
[^trusty]: End of Live: April 2019
