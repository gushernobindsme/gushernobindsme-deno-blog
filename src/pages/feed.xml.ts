import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getSortedPosts } from "../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getSortedPosts();
  return rss({
    title: "泥水エンジニア日記",
    description: "gushernobindsme",
    site: context.site!,
    // astro.config.mjs の trailingSlash: "never" に合わせる。既定では末尾スラッシュが付く。
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publish_date,
      link: `/${post.id}`,
      categories: post.data.tags,
    })),
  });
}
