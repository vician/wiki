#!/bin/bash

index=1
#CI_COMMIT_SHA=8adc15f9e2891dfe2ed2f8d602cfa179b2a8526d

grep HASH mkdocs.yml 1>/dev/null 2>/dev/null
if [ $? -eq 0 ]; then
	echo "Enabling debug mode"
	DEBUG=1
fi


while true; do
	CI_COMMIT_SHA=$(git log --format="%H" -n $index | tail -n 1)
	files=$(git diff-tree --no-commit-id --name-only -r $CI_COMMIT_SHA)
	docs_changed=0
	for file in ${files[@]}; do
		if [ $DEBUG -eq 1 ]; then
			echo -n "- $file"
		fi
		if [[ "$file" =~ ^docs/ ]]; then
			docs_changed=1
			file=$(echo $file | sed 's/^docs\///g')
			file=$(echo $file | sed 's/\.md$//g')
			if [ $DEBUG -ne 1 ]; then
				echo "- [$file]($file)" >> docs/index.md
			else
				echo " ---> $file"
			fi
		else
			echo " ---> skip"
		fi
	done
	if [ $docs_changed -eq 1 ]; then
		if [ $DEBUG -eq 1 ]; then
			echo "-> something in docs/ was changed - exiting"
		fi
		break
	fi
	if [ $DEBUG -eq 1 ]; then
		echo "-> trying another commit"
	fi
	let index++
done
