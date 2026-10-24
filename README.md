# randy.gg

Randy's link page, published at https://randy.gg. Plain static files in `site/`: no package manager, no build (Oct 2026, supply chain). Preview with any static server, e.g. `python3 -m http.server -d site`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which uploads `site/` to **GitHub Pages** (actions pinned by commit SHA). The custom domain is `randy.gg` (`site/CNAME`); Cloudflare proxies it and handles DNS and HTTPS.

Check the [deployment runs](https://github.com/randyprime/linktree/actions/workflows/deploy.yml) and the [live site](https://randy.gg) after a push. The old `bigrando420/linktree` URL redirects here.

Short paths such as `/terrafactor` are `site/<path>/index.html` refresh pages: copy one to add another. Pages serves them as 200, not an HTTP redirect.
