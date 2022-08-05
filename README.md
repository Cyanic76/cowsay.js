:warning: Moved to [**Codeberg**](https://codeberg.org/Cyanic76/cowsay.js).

# Cowsay

An API dedicated to make a cow repeat whatever you want to.

[![License](https://img.shields.io/github/license/Cyanic76/cowsay.js.svg?style=for-the-badge)](https://github.com/Cyanic76/cowsay.js/blob/master/LICENSE)

[![UptimeRobot](https://img.shields.io/uptimerobot/ratio/m792084457-c6c3bc8beebc630cc8c19d81?label=Uptime)](https://status.cyanic.tk)

## Use the API

A demo version of the API is hosted at `cowsay.api.cyanic.tk`.

Use it by **GET**ting the following URL : `https://cowsay.api.cyanic.tk/:text`. This will return a JSON object such as:

```
{
    message: "Example"
    cow: "  _______\n< Example >\n  -------\n         \\   ^__^ \n          \\  (oo)\\_______\n             (__)\\       )\\/\\\n                 ||----w |\n                 ||     ||\n    "
}
```

Be aware that GETting the `https://cowsay.api.cyanic.tk/` URL will return an HTTP 404 error. That is because you must specify a text in the URL.

### Example code with NodeJS/superagent

```js
await superagent.get("https://cowsay.api.cyanic.tk/Example").then((res, err) => {
	if(err){ /* Handle the error here */ };
	let body = JSON.parse(res.text);
})
```

---

by [Cyanic76](https://github.com/Cyanic76) - released under [MIT](https://github.com/Cyanic76/cowsay.js/blob/master/LICENSE).
