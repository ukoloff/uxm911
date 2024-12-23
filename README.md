# uxm911
Quick request to ServiceDesk


## Notes

Windows-commands to recreate `assets` links:
```bat
mklink /D assets\fa ..\node_modules\font-awesome
mklink /D assets\bootswatch ..\node_modules\bootswatch\dist
```

Add hook `.git/hooks/post-merge`
for automatic restart
```sh
#!/bin/sh
npm restart
```
