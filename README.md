## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (**Settings → Pages → Source: GitHub Actions**).

The site is served at https://levelcraftconstruction.com, set under **Settings → Pages → Custom domain**. `site.url` in `app/site.ts` must match that domain: canonical URLs, share previews, and the sitemap are built from it. Keep **Enforce HTTPS** on, since the share image URL is `https://`.

After changing share tags or the share image, use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to refresh Facebook's cached preview. Other apps refresh on their own over time.
