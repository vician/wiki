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
