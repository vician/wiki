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

		git commit –fixup=COMMIT
		git rebase -i FIRST_NON_FIXUP_COMMIT_OR_PARENT –autosquash
		git push -f

## Merge past commit together

		git rebase -i THE_LATEST_COMMIT
