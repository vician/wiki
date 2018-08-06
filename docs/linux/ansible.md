## Create list of dictionaries

	- name: Create list of items (with indexed)
	  set_fact:
		list_items: "{'index': '{{ item.0 }}', 'value': '{{ item.1 }}' }"
	  with_indexed_items: "{{ list }}"
	  register: creating_list_items

	- name: Create list of dictionaris
	  set_fact:
		list: "{{ creating_list_items.results | map(attribute='ansible_facts.list_items') | list }}"

## Add all hosts to known_hosts

	grep -v "^\[\|^#" hosts | xargs -L1 ssh
