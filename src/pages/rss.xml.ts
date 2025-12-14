import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');
  const videos = await getCollection('videos');
  const resources = await getCollection('resources');
  
  // Combine and sort by date
  const allItems = [
    ...blog.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description || '',
      link: `/blog/${post.slug}/`,
      category: 'Article',
    })),
    ...videos.map(video => ({
      title: video.data.title,
      pubDate: video.data.pubDate,
      description: video.data.description || '',
      link: `/videos/${video.slug}/`,
      category: 'Video',
    })),
    ...resources.map(resource => ({
      title: resource.data.title,
      pubDate: resource.data.pubDate,
      description: resource.data.description || '',
      link: resource.data.url,
      category: 'Resource',
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Agentforce Vibes',
    description: 'Turn ideas into apps, agents, and workflows. Latest articles and videos about Agentforce Vibes development.',
    site: context.site || 'https://jeffdonthemic-sfdc.github.io/agentforce-vibes',
    items: allItems,
    customData: `<language>en-us</language>`,
  });
}

