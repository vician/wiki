## Mirror to GitHub

- Create deploy key with push allowed and put it into your CI Variables
- Create file `.gitlab-ci.yml` inside root of your GitLab repository with content:

```
before_script:
    - apt update
    - DEBIAN_FRONTEND=noninteractive apt install -y openssh-client git
    - mkdir -p $HOME/.ssh
    - chmod 700 $HOME/.ssh
    - rm -f $HOME/.ssh/known_hosts
    - ssh-keyscan -t rsa,dsa,ecdsa github.com >> $HOME/.ssh/known_hosts
    - chmod 644 $HOME/.ssh/known_hosts
    - eval $(ssh-agent -s)
    - ssh-add -D
    - echo -en "$SSH_KEY" | tr -d '\r' | ssh-add - > /dev/null
    - ssh-add -l


mirror-master:
    script:
        - git remote add upstream git@github.com:vician/nzmk || true
        - git fetch upstream
        - git push --force --progress upstream HEAD:master
    only:
        - master

mirror-tags:
    script:
        - git remote add upstream git@github.com:vician/nzmk || true
        - git fetch upstream
        - git push --force --progress --tags upstream HEAD:master
    only:
        - tags
```
