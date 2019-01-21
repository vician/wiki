## Use GPG2 as default

  old_gpg=$(which gpg)
  sudo mv $old_gpg ${old_gpg}1
  sudo ln -s $(which gpg2) $old_gpg
