# `robots.txt` snippet.
> Opt your web properties out from known AI scraper tools.

### NPM package.

`yarn add disallow-ai` or `npm i disallow-ai`

See below for API.

### What is this?
This is an opinionated, maintained list of known user agents of scraper bots that use web content to train AI models.

This package is intended to help webmasters automatically opt out of training AI/machine learning models with the content of a property. Its intention is to remain visible for search engines and productivity tools. It's optimized for Node.js servers (e.x., Express/Next.js) but you can also copy-paste contents from [`src/robots.txt`](/src/robots.txt ) directly into your `robots.txt` file on any web server.


### API.
- `printRobotsTXT(options)` prints text string for `robots.txt` (same content as the above snippet).
    - `options.path` if you want to set a disallow path to something other than `/`, you'll need to pass a value to this key.
- `userAgents` is a direct reference to an array of objects with all the user agent info.

### Sources
https://darkvisitors.com/

Contributions welcome.
