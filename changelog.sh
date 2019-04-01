#!/bin/bash

index=1
#CI_COMMIT_SHA=8adc15f9e2891dfe2ed2f8d602cfa179b2a8526d

grep HASH mkdocs.yml 1>/dev/null 2>/dev/null
if [ $? -eq 0 ]; then
	echo "Enabling dry run"
	DRYRUN=1
else
	DRYRUN=0
fi

while true; do
	CI_COMMIT_SHA=$(git log --format="%H" -n $index | tail -n 1)
	files=$(git diff-tree --no-commit-id --name-only -r $CI_COMMIT_SHA)
	docs_changed=0
	for file in ${files[@]}; do
		echo -n "- $file"
		if [[ "$file" =~ ^docs/ ]]; then
			docs_changed=1
			file=$(echo $file | sed 's/^docs\///g')
			file=$(echo $file | sed 's/\.md$//g')
			if [ $DRYRUN -ne 1 ]; then
				echo "- [$file]($file)" >> docs/index.md
			fi
			echo " ---> $file"
		else
			echo " ---> skip"
		fi
	done
	if [ $docs_changed -eq 1 ]; then
		echo "-> something in docs/ was changed - exiting"
		break
	fi
	let index++
	echo "-> trying commit $index"
done
