#!/bin/bash

CI_COMMIT_SHA=$1

files=$(git diff-tree --no-commit-id --name-only -r $CI_COMMIT_SHA)

for file in ${files[@]}; do
	file=$(echo $file | sed 's/^docs\///g')
	file=$(echo $file | sed 's/\.md$//g')
	echo "- [$file]($file)" >> docs/index.md
done
