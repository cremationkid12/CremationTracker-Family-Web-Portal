# Cremation Tracker — Family portal

Simple website for families to track cremation progress with a PIN or share link. No app download.

Repo: [github.com/cremationkid12/CremationTracker-Family-Web-Portal](https://github.com/cremationkid12/CremationTracker-Family-Web-Portal)

## Run

```bash
cp .env.example .env
npm install
npm run dev
```

Default: [http://localhost:5173](http://localhost:5173)

API: `VITE_API_BASE_URL` (default `http://localhost:8020`)

## Routes

| Path | Purpose |
|------|---------|
| `/` | Enter PIN |
| `/status?pin=…` | Status by PIN |
| `/f/:token` | Status by family share token |
| `/privacy` | Privacy (placeholder until counsel) |
| `/terms` | Terms (placeholder until counsel) |

## Backend

- `GET /v1/public/family?pin=`
- `GET /v1/public/family/:token`

## Deploy (Vercel)

1. Import this repo into Vercel (Vite framework preset).
2. Set env: `VITE_API_BASE_URL=https://<your-railway-api-host>` (no trailing slash).
3. `vercel.json` rewrites SPA routes (`/f/:token`, `/privacy`, `/terms`) to `index.html`.
4. After deploy, set the API’s `FAMILY_PORTAL_BASE_URL` and `ALLOWED_ORIGINS` to this Vercel URL.
5. Rebuild/redeploy the API (or restart) so share links use the production origin.

**Do not** treat Privacy/Terms as final legal copy until counsel replaces the placeholders.
