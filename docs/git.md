## Commit during dettached head

_You commit your work and then you discovered that git head is dettached (typically because of commiting in git submodule)._

```
git branch tempwork
git checkout master
git merge tempwork
```

## Remove branches

- Local branch: `git branch -d the_local_branch`
- Remote branch: `git push origin :the_remote_branch`

## Rename branches

- Local branch: `git branch -m <oldname> <newname>`
- Current local branch: `git branch -m <newname>`
- Remove the remote: `oldname` and create the `newname`

## Fixup commit

- We have open merge request
- Review with git log -p brings some necessary changes
- Change the things
- Do git commit as usual or …
- Remember which commit brings the thing which should be changed

		git commit --fixup=COMMIT
		git rebase -i FIRST_NON_FIXUP_COMMIT_OR_PARENT --autosquash
		git push -f

## Merge past commit together

	git rebase -i THE_LATEST_COMMIT

## Global configuration

File: `~/.gitconfig`

	[user]
		email = YOUREMAIL
		name = YOURNAME
		signingkey = YOURGPGKEY
	[commit]
		gpgsign = True
	[tag]
		gpgsign = True
		forceSignAnnotated = True
	[push]
		default = current
	[color]
		ui = true
	[alias]
		st = status
		ci = commint
		co = checkout
		br = branch
		ll = log --oneline --graph --all --decorate
		wdiff = diff --word-diff
		merge-all = !~/.developer/git-merge-all.sh
		fix = "!git commit --fixup=HEAD"
		ri = "rebase -i --autosquash"

	[diff "decrypt"]
		textconv = ansible-vault view
	[core]
		excludesfile = ~/.gitignore

### Global gitignore

```
.*.swp
.*.swo
.*~
```

## Mirror to another git server

	git remote add upstream git@ANOTHERGITSERVER:PATH
	git fetch upstream
	git push --force --tags --progress upstream HEAD:master
