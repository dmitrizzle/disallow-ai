# Opt your web properties out from known AI scraper tools.

`yarn add disallow-ai` or `npm i disallow-ai`

This is an opinionated, maintained list of known user agents of scraper bots that use web content to train AI models.

This package is intended to help webmasters automatically opt out of training AI/machine learning models with the content of a property. Its intention is to remain visible for search engines and productivity tools. It's optimized for Node.js servers (e.x., Express/Next.js) but you can also copy-paste contents from [`src/robots.txt`](/src/robots.txt) directly into your `robots.txt` file on any web server.


### API.
- `printRobotsTXT(options)` prints text string for `robots.txt` (same content as the above snippet).
    - `options.path` if you want to set a disallow path to something other than `/`, you'll need to pass a value to this key.
- `userAgents` is a direct reference to an array of objects with all the user agent info.

#### Example.
```javascript
const express = require("express");
const server = express();

const { printRobotsTXT } = require("disallow-ai");
server.get("/robots.txt", (req, res, next) => {
    res.type("text/plain");
    res.send(printRobotsTXT());
});

server.listen();

```

### Sources.
https://darkvisitors.com/

Contributions welcome.
