# kill_the_ga
chrome extention. ga tool killer
```text:folder
 manifest.json
 main.js
 icon.png 
```

1. manifest.json
```json:manifest.json
{
	"name": "kill the ga","version": "1.0","manifest_version": 2,
	"description": "kill the ga","icons": {"16": "icon.png","48": "icon.png","128": "icon.png"},
	"content_scripts": [{  "matches": ["<all_urls>"], "js": ["main.js"]  }]
} 
```

2. main.js
```js:main.js

```
3. icon.png
