import { notFound } from 'next/navigation';
import { services } from '@/lib/services';
import { ServiceHero } from '@/components/ServiceHero';
import { ServiceSubServices } from '@/components/ServiceSubServices';
import { ServiceBenefits } from '@/components/ServiceBenefits';
import { ServiceHowItWorks } from '@/components/ServiceHowItWorks';
import { ServiceTestimonials } from '@/components/ServiceTestimonials';
import { ServiceFAQ } from '@/components/ServiceFAQ';

import { ApplyNowButton } from '@/components/ApplyNowButton';

// Generate static params for all services so they are built at build time
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  const url = `https://swiftbanq.com/products/${service.slug}`;

  return {
    title: `${service.heroTitle} | Swiftbanq Services`,
    description: service.heroSubtitle,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      title: `${service.heroTitle} | Swiftbanq Credit Solutions`,
      description: service.heroSubtitle,
      url,
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.heroTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.heroTitle} | Swiftbanq Credit Solutions`,
      description: service.heroSubtitle,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="w-full bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <ServiceHero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        image={service.heroImage}
        mockLabel={service.heroMockLabel}
        mockTags={service.heroMockTags}
        whatIsTitle={service.whatIsTitle}
        whatIsDescription={service.whatIsDescription}
        whoCanApply={service.whoCanApply}
      />
      
      {service.subServices && service.subServices.length > 0 && (
        <ServiceSubServices subServices={service.subServices} title={service.subServicesTitle} />
      )}

      <ServiceHowItWorks 
        image={service.heroImage}
        steps={service.howItWorks}
        title={service.title}
        howItWorksTitle={service.howItWorksTitle}
      />

      <ServiceBenefits 
        title={service.title}
        benefits={service.benefits}
      />

      <ServiceTestimonials 
        testimonials={service.testimonials}
      />

      <ServiceFAQ 
        faqs={service.faqs}
      />

    </main>
  );
}
