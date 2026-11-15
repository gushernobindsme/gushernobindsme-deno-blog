#!/usr/bin/env node
// 新しい記事の雛形を posts/<YYYY>/<MM>/<unixtime>.md に作る。
// 旧 new_post.sh はこのパスではなく posts/ 直下に作っていたため、
// 生成のたびに手で年/月ディレクトリへ移す必要があった。このスクリプトでは直接その場所に作る。
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const now = new Date();
const unixtime = Math.floor(now.getTime() / 1000);
const year = String(now.getFullYear());
const month = String(now.getMonth() + 1).padStart(2, "0");
const today = now.toISOString().slice(0, 10);

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(repoRoot, "posts", year, month);
const file = join(dir, `${unixtime}.md`);

await mkdir(dir, { recursive: true });
await writeFile(
  file,
  `---\ntitle: "${today}"\npublish_date: ${today}\ntags:\n  - Diary\n---\n\n`,
);

console.log(`created: posts/${year}/${month}/${unixtime}.md`);
