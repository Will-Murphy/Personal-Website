# Will Murphy Personal Website (Next.js)

Fully migrated to **Next.js** with minimal scaffolding for easy local development and one-click Vercel deployment.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy (Vercel)

1. Push to GitHub.
2. Import the repo in Vercel.
3. Keep defaults (Framework auto-detected as Next.js).
4. Deploy.

## Edit content quickly

- Main content: `app/page.js`
- Styling/theme: `app/globals.css`
- App metadata wrapper: `app/layout.js`

No Gatsby files or Gatsby build tooling remain.


## Troubleshooting

If `npm install` fails with `403 Forbidden` for `registry.npmjs.org`, your environment is blocking npm registry access (proxy/firewall policy). Set your npm registry/proxy settings appropriately and retry.
