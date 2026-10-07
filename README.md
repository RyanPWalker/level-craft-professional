# Level Craft Construction (professional site)

Marketing site for Level Craft Construction, built with Next.js (static export) and hosted on GitHub Pages. This is the professional redesign of [RyanPWalker/level-craft](https://github.com/RyanPWalker/level-craft), which keeps the pixel-art theme.

## Development

```bash
corepack enable  # once, provides the pinned Yarn version
yarn install
yarn dev         # http://localhost:3000
yarn build       # static output in ./out
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup: in the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

Until a custom domain is set, the site is served at https://ryanpwalker.github.io/level-craft-professional/. The workflow passes the Pages path prefix to the build as `PAGES_BASE_PATH`.

To move it to `levelcraft.co`, remove the custom domain from the original repo's Pages settings, add a `public/CNAME` containing `levelcraft.co` here, and set the same domain under **Settings → Pages → Custom domain**.
