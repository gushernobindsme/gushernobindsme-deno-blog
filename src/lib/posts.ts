import { getCollection, type CollectionEntry } from "astro:content";

export async function getSortedPosts(): Promise<CollectionEntry<"posts">[]> {
  const posts = await getCollection("posts");
  return posts.sort(
    (a, b) => b.data.publish_date.valueOf() - a.data.publish_date.valueOf(),
  );
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ja-JP", { dateStyle: "long" }).format(date);
}

export function postUrl(post: CollectionEntry<"posts">): string {
  return `/${post.id}`;
}
