# 10 Million Reach — website

A static website (HTML, CSS, JavaScript). No build tools or server code needed.

```
index.html              the whole site (Home, Services, Solutions, Case Studies, Pricing, About, Contact)
assets/css/styles.css   all styles
assets/js/main.js       content data, pricing builder, previews, animations
assets/img/             favicon, app icon, social share image
404.html                sends unknown URLs back to the homepage
CNAME                   custom domain for GitHub Pages (10millionreach.com)
.nojekyll               tells GitHub Pages to serve files as-is
robots.txt, sitemap.xml search engine files
```

## Publish on GitHub Pages

1. Create a new repository on GitHub, for example `10millionreach-website`.
2. Upload everything in this folder to the root of the repository (drag and drop on github.com works).
   Make sure the hidden `.nojekyll` file is included.
3. In the repository go to **Settings → Pages**.
   Under **Build and deployment** choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/10millionreach-website/`.

## Connect 10millionreach.com

The `CNAME` file already contains `10millionreach.com`. At your domain registrar add these DNS records:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | `<your-username>.github.io` |

Then in **Settings → Pages** enter `10millionreach.com` as the custom domain and tick **Enforce HTTPS** once it becomes available.
If you do not want a custom domain yet, delete the `CNAME` file.

## Make the contact form send emails

The form works in demo mode until it is connected.

1. Create a free form at https://formspree.io (or a similar service) and copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. Open `assets/js/main.js` and set it on line 3:
   ```js
   const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';
   ```
3. Commit. Briefs (name, email, company, services, budget, message) now arrive in your inbox.

## Before launch checklist

- Replace the illustrative case-study clients and figures with real, client-approved results (search `const CASES` in `main.js`).
- Check the agency stats on Home and About (10M+, 140+, 4.6×, 96%, team sizes).
- Review the prices in the pricing builder (search `const CORE` and `IND` in `main.js`; all prices are halved by `HALF=.5`).
- Remove the "Design draft" note in the footer of `index.html`.
- Confirm the contact email `hello@10millionreach.com`.

## Preview locally

Open `index.html` in a browser, or run a small local server from this folder:

```
python3 -m http.server 8000
```

and visit http://localhost:8000.
