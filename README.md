# Hono - Vercel AI SDK via Cloudflare Workers

```txt
pnpm install
pnpm dev
```

```txt
pnpm deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
pnpm generate-types
```

Pass the `CloudflareBindings` as generics when instantiating `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

To add secrets to your Cloudflare Worker, run:

```txt
npx wrangler secret put SECRET_NAME
```
