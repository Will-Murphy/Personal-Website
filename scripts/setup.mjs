#!/usr/bin/env node
import { execSync } from 'node:child_process'

const run = (cmd) => execSync(cmd, { stdio: 'inherit' })

console.log('→ Checking npm registry access...')
try {
  run('npm ping --registry=https://registry.npmjs.org')
} catch {
  console.error('\n✖ Unable to reach npm registry. Check VPN/proxy/firewall settings and retry.')
  process.exit(1)
}

console.log('→ Installing dependencies...')
run('npm install')

console.log('\n✓ Setup complete. Run `npm run dev` to start locally.')
