import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = await getCollection('blog');
  const base = import.meta.env.BASE_URL;
  
  const searchIndex = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description || '',
    url: `${base}/blog/${post.slug}`,
    pubDate: post.data.pubDate.toISOString(),
  }));
  
  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
