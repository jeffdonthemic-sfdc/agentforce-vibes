import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const videos = await getCollection('videos');
  const resources = await getCollection('resources');
  const base = import.meta.env.BASE_URL;
  
  const videoItems = videos.map((video) => ({
    title: video.data.title,
    description: video.data.description || '',
    url: video.data.videoUrl,
    type: 'video',
    duration: video.data.duration,
    pubDate: video.data.pubDate.toISOString(),
  }));
  
  const resourceItems = resources.map((resource) => ({
    title: resource.data.title,
    description: resource.data.description || '',
    url: resource.data.url,
    type: 'resource',
    resourceType: resource.data.type,
    pubDate: resource.data.pubDate.toISOString(),
  }));
  
  const searchIndex = [...videoItems, ...resourceItems];
  
  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
