# Seapunk Stack

The Seapunk Stack is for creating landing page style websites deployed to
Cloudflare Pages.

## What's in the Template

- [Remix](https://remix.run/docs) with
  [Vite](https://remix.run/docs/en/main/guides/vite)
- Deployment to Cloudflare via `pnpm run deploy` command
- ESLint for linting
- Prettier for code formatting
- PNPM for package management
- [remix-flat-routes](https://github.com/kiliman/remix-flat-routes) for
  co-locating route files with components.

# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the
[Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on
supported features.

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
pnpm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Development

Run the Vite dev server:

```sh
pnpm run dev
```

To run Wrangler:

```sh
pnpm run build
pnpm run start
```

## Deployment

> [!WARNING] Cloudflare does _not_ use `wrangler.toml` to configure deployment
> bindings. You **MUST** [configure deployment bindings manually in the
> Cloudflare dashboard][bindings].

First, build your app for production:

```sh
pnpm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
pnpm run deploy
```

[bindings]: https://developers.cloudflare.com/pages/functions/bindings/
