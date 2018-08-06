Everything has to be in `/etc/caddy/Caddyfile`

Caddy examples: https://github.com/caddyserver/examples

## Common headers

```
header / {
  Strict-Transport-Security "max-age=31536000;"
  X-XSS-Protection "1; mode=block"
  X-Content-Type-Options "nosniff"
  X-Frame-Options "DENY"
}
```
## Redirect to HTTPS
```
redir 301 {
	if {>X-Forwarded-Proto} is http
	/  https://{host}{uri}
}
```
## Enable PHP
```
fastcgi / /var/run/php/php7.0-fpm.sock {
  index index.php
}
```

## Build projects

### Pelican
```
root /var/www/pelican/output/
git {
  repo example.com/pelican.git
  path /var/www/pelican
  then pelican content/
}
```

### Mkdocs
```
root /var/www/pelican/site/
git {
  repo example.com/pelican.git
  path /var/www/pelican
  then mkdocs build
}
```
