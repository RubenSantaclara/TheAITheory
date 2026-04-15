import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const published = posts
    .filter((post) => post.data.published)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'The AI Theory',
    description:
      'Ensayos y análisis críticos sobre inteligencia artificial: fundamentos, epistemología, seguridad y filosofía de los sistemas inteligentes.',
    site: context.site ?? 'https://www.theaitheory.com',
    items: published.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`,
      categories: [post.data.tag],
      author: post.data.author ?? 'The AI Theory',
    })),
    customData: '<language>es-ES</language>',
    stylesheet: false,
  });
}
