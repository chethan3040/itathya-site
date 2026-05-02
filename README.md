# Focus Forge — itathya.com

Marketing landing page for **Focus Forge**, a product by **itathya**.
Static HTML/CSS/JS — no build step.

## Files

```
site/
├── index.html      Landing page
├── styles.css      All styling (ink/ember design tokens)
├── main.js         Dashboard mock animations (burn strip, streak heatmap)
├── vercel.json     Deploy config (caching, security headers)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Local preview

Any static server. From the `site/` directory:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or with Node:

```bash
npx serve .
```

## Deploy to Vercel (recommended)

One-time setup:

```bash
npm i -g vercel    # if you don't have it
cd site
vercel login
vercel             # first deploy creates the project
vercel --prod      # promotes to production
```

### Connect itathya.com

1. In Vercel → Project → **Settings → Domains**, add `itathya.com` and `www.itathya.com`.
2. At your domain registrar, point DNS to Vercel:
   - **A record** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
3. Vercel issues an SSL cert automatically (~1 minute).

That's it. Pushes to `main` (if you connect a git repo) auto-deploy.

## Deploy elsewhere

It's a static site — drop the contents of `site/` onto any host:

- **Netlify** — `netlify deploy --prod --dir=.`
- **GitHub Pages** — push `site/` to a repo, enable Pages from the branch
- **Cloudflare Pages** — connect a repo, build command empty, output dir `.`
- **S3 + CloudFront** — sync to a bucket, point CloudFront at it
- **Any FTP host** — upload all files to web root

## What it links to

| Link | Goes to |
|---|---|
| Sign in / Sign up CTAs | `https://focusforge.in` (the actual app) |
| Footer "App" link | `https://focusforge.in` |
| Footer "itathya" link | `https://itathya.com` |
| Contact | `mailto:support@itathya.com` |
| `/privacy`, `/terms` | placeholders — add those pages later |

If `focusforge.in` ever moves under `itathya.com/app` or similar, search-and-replace `https://focusforge.in` in `index.html`.

## Design tokens (for future edits)

```
--ink       #0E1117    background
--ink-2     #161A22    cards
--ink-3     #1F242E    nested cards
--ember     #F5A524    primary accent (CTAs, highlights)
--ember-2   #FFB94A    hover state
--arc       #3B82F6    secondary accent (data signals only)
--ok        #16A34A    success/positive deltas
--text      #F2F1ED    foreground
```

Type: **Inter Tight** (display/UI) + **JetBrains Mono** (numerics, labels). Loaded from Google Fonts.

## Updating content

Most copy lives directly in `index.html`. The dashboard mock numbers (1h 42m, 27d, 88%, etc.) are also in `index.html`. The burn-strip pattern and streak heatmap intensities are in `main.js` — change the arrays to update them.
