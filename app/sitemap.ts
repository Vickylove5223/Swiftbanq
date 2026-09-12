import { MetadataRoute } from 'next';
import { guidesData } from '@/lib/guidesData';
import { services } from '@/lib/services';

const baseUrl = 'https://swiftbanq.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const coreLastMod = new Date('2026-06-01');
  const guideLastMod = new Date('2026-06-01');
  const legalLastMod = new Date('2026-06-01');

  const guideEntries: MetadataRoute.Sitemap = guidesData.map((guide) => ({
    url: `${baseUrl}/blog/${guide.slug}`,
    lastModified: new Date(guide.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/products/${service.slug}`,
    lastModified: coreLastMod,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: coreLastMod,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: coreLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: guideLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...productEntries,
    ...guideEntries,
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/data-protection`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/complaints-policy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: legalLastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
