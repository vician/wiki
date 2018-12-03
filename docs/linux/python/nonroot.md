1. You need to install Python itself and Python environment package
	- Debian or Ubuntu (default Python is Python2):

			sudo apt install python3 python3-virtualenv

	- Fedora, RHEL or CentOS (default Python is Python3):

			sudo yum install python	python-virtualenv

1. Create Python virtual environment (use command `python3` on Debian/Ubuntu) named `env`:

		python -m virtualenv pyenv

1. Enable created environment `env` (you need to do it everytime you are in new bash and want to use the environment):

		source pyenv/bin/activate

1. Update pip:

		pip install --upgrade pip

1. Install other pip packages which you need:

		pip install PACKAGENAME

