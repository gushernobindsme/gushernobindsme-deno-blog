# gushernobindsme.com

gushernobindsme のブログ。[Astro](https://astro.build) で静的に生成し、
[Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) で配信する。

(旧実装は [deno_blog](https://github.com/denoland/deno_blog) + Deno Deploy。
Deno Deploy Classic の終了に伴い移行した。)

## Usage

```bash
npm install
npm run dev
```

新しい記事の雛形を作るには次を実行する。`posts/<year>/<month>/<unixtime>.md` が生成される。

```bash
npm run new-post
```

記事は Markdown + frontmatter (`title` / `publish_date` / `tags`) で書く。

## Build / Deploy

```bash
npm run build    # dist/ に静的ファイルを出力
npm run deploy   # ビルドして wrangler deploy
```

`master` への push で GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) が
自動でビルドとデプロイを行う。
