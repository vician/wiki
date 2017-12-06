
## WEBP

Download everything to one folder and run this command in this folder:

	find . -name "*.webp" -exec ffmpeg -i {} {}.png \;

Or run in for specific file

	ffmpeg -i input.webp output.png
