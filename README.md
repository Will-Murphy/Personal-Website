# Will Murphy Personal Website (Next.js)

Fully migrated to **Next.js** with minimal scaffolding for easy local development and one-click Vercel deployment.

## Local setup

```bash
npm run setup
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

## Tooling baseline

- Node `>=20.10.0`
- npm `>=10`

## Troubleshooting

If setup/install fails with `403 Forbidden` for `registry.npmjs.org`, that is an environment/network policy issue (proxy/firewall/VPN), not an application code issue. In that case:

1. Run `npm config get registry` and confirm it is `https://registry.npmjs.org/`.
2. Check proxy settings (`npm config get proxy` / `npm config get https-proxy`).
3. Retry from a network that allows npm registry access.
