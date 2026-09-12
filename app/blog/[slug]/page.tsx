import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { guidesData } from '@/lib/guidesData';

export function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const guide = guidesData.find((g) => g.slug === resolvedParams.slug);
  if (!guide) return { title: 'Guide Not Found' };
  const url = `https://swiftbanq.com/blog/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: `${guide.title} | Swiftbanq Credit Solutions`,
      description: guide.excerpt,
      url,
      publishedTime: guide.date,
      images: [{ url: guide.coverImage, alt: guide.title }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [guide.coverImage],
    },
  };
}

// Extremely basic markdown to HTML converter for the mock data
function renderContent(markdown: string) {
  let html = markdown
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-brand-dark mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-brand-dark mt-10 mb-6">$1</h2>')
    .replace(/^\*\*([^]*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/^\- (.*$)/gim, '<li class="ml-4 mb-2 list-disc">$1</li>')
    .replace(/\n\n/g, '<br/>')
    .replace(/<br\/>(<li)/g, '$1') // cleanup lists
    .replace(/(<li.*<\/li>)/gim, '<ul class="mb-6">$1</ul>')
    .replace(/<\/ul><ul class="mb-6">/g, ''); // merge adjacent uls
  
  // Wrap stray paragraphs
  html = html.split('<br/>').map(p => {
    p = p.trim();
    if (p && !p.startsWith('<h') && !p.startsWith('<ul')) {
      return `<p class="mb-6 text-lg text-gray-600 leading-relaxed">${p}</p>`;
    }
    return p;
  }).join('');

  return { __html: html };
}

export default async function GuidePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = guidesData.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  return (
    <article className="w-full bg-transparent pb-24 pt-6 md:pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-brand-dark hover:text-brand-yellow transition-colors mb-10">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          Back to all blog posts
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 font-semibold mb-6">
            <span className="bg-white px-3 py-1 rounded-full text-brand-dark">{guide.category}</span>
            <span>{new Date(guide.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{guide.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark tracking-tight leading-tight mb-8">
            {guide.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            {guide.excerpt}
          </p>
        </header>

        {/* Cover Image */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden mb-16 shadow-lg">
          <Image 
            src={guide.coverImage} 
            alt={guide.title} 
            fill 
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none text-gray-600"
          dangerouslySetInnerHTML={renderContent(guide.content)}
        />

        {/* Call to action */}
        <div className="mt-20 bg-brand-yellow rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-heading font-medium text-brand-dark mb-4">Ready to take the next step?</h2>
          <p className="text-lg text-brand-dark/80 mb-8 max-w-2xl mx-auto">
            Apply for our fast and flexible financing solutions today and get the support you need to reach your goals.
          </p>
          <Link href="/apply" className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-dark/90 transition-colors">
            Apply Now
          </Link>
        </div>

        {/* Related Guides */}
        {(() => {
          const related = guidesData
            .filter((g) => g.slug !== guide.slug)
            .sort((a, b) => (a.category === guide.category ? -1 : 1) - (b.category === guide.category ? -1 : 1))
            .slice(0, 3);
          if (related.length === 0) return null;
          return (
            <div className="mt-20">
              <h2 className="text-3xl font-heading font-medium text-brand-dark mb-10 tracking-tight">Related Posts</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group block h-full">
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-44 w-full overflow-hidden">
                        <Image
                          src={r.coverImage}
                          alt={r.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-bold text-brand-dark">
                          {r.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-brand-dark mb-2 leading-snug group-hover:text-brand-yellow transition-colors">
                          {r.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 flex-1">{r.excerpt}</p>
                        <div className="mt-4 flex items-center font-bold text-brand-dark group-hover:text-brand-yellow transition-colors text-sm">
                          Read post
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

      </div>
    </article>
  );
}
