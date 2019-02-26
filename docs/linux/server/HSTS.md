## htaccess

Put this line into your `.htaccess` file

```
# Enable HSTS
<IfModule mod_headers.c>
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" env=HTTPS
</IfModule>
# END Enable HSTS
```
