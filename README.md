# Smartgrow Infotech – FDE Program Site

Static landing page (HTML/CSS/JS, no build step).

```
index.html   page markup
styles.css   design tokens and styles
app.js       config (WhatsApp/Instagram) + content data + interactions
vercel.json  Vercel headers / clean URLs
docs/        PRD, reference blueprint, handoff notes
```

## Run locally
`python -m http.server 8080` → http://localhost:8080

## Deploy on Vercel
Import the repo → Framework Preset **Other** → leave Root Directory, Build Command and Output Directory empty → Deploy.

## Configure
Edit `CONFIG` at the top of `app.js` (WhatsApp number, Instagram URL). Mentor/certification content is sample data.
