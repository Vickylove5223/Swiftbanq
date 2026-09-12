import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Car, Smartphone, TrendingUp, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { FAQSection } from '@/components/FAQSection';
import { HeroMockup } from '@/components/HeroMockup';
import { ApplyNowButton } from '@/components/ApplyNowButton';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://swiftbanq.com',
  },
};

// FAQ structured data — mirrors the questions in FAQSection component
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Swiftbanq?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swiftbanq is a duly licensed money lending institution operating under the regulatory framework of the Lagos State Money Lenders Law. We provide comprehensive financial solutions including SME Financing, Asset Financing, Digital Lending, and Investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of loans do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a diverse range of loan products including Local Purchase Orders (LPO), Invoice Discounting Facility (IDF), Bridge Finance, Contract Finance, Vehicle Financing, Office/Household Equipment Loans, and Digital Lending for salary earners.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is the loan disbursement process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our digital lending platform and streamlined processes allow for rapid assessment. Once your application is approved and all documentation is verified, disbursement is done instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Swiftbanq protect my data and assets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We employ industry-standard encryption, regulatory compliance measures, and strict data privacy protocols to ensure your information and financial transactions are always secure.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-24 md:pt-28 lg:pt-32 pb-0 overflow-hidden bg-white text-brand-dark px-4 lg:px-8">
        {/* Main Content: headline left, subtext + CTAs right */}
        <div className="w-full max-w-[1400px] mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-heading font-black text-brand-dark tracking-tighter leading-[1.02] sm:leading-[0.92] text-left">
            Borrow and <br /> Invest Wisely <br /> with Us.
          </h1>

          <div className="flex flex-col items-start lg:items-end gap-6 lg:pt-4">
            <div className="flex flex-col items-start gap-6 max-w-md">
              <p className="text-lg sm:text-xl text-brand-dark/70 text-left">
                Fast, transparent financing and investment for businesses and individuals ready to grow.
              </p>

              <div className="flex flex-row flex-wrap gap-4 relative z-30">
                <ApplyNowButton className="px-6 py-3 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow/90 transition-colors flex items-center justify-center gap-2 text-sm group">
                  Apply Now
                  <span className="bg-brand-dark text-brand-yellow w-5 h-5 flex items-center justify-center rounded-full transition-transform group-hover:translate-x-1 text-xs">→</span>
                </ApplyNowButton>
                <Link href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20your%20financial%20services.%20Could%20you%20please%20assist%20me%3F" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-brand-dark/20 text-brand-dark font-bold hover:bg-brand-dark/5 transition-colors flex items-center justify-center gap-2 text-sm bg-transparent backdrop-blur-sm group">
                  <MessageCircle className="w-4 h-4" /> Talk To Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width hero image */}
        <div className="relative left-1/2 -translate-x-1/2 w-screen h-[280px] sm:h-[340px] md:h-[430px] lg:h-auto lg:aspect-[2.3/1] mt-12 md:mt-16 overflow-hidden">
          <Image
            src="/images/hero-brand-african-team.png"
            alt="Swiftbanq customers"
            fill
            priority
            quality={90}
            className="object-cover object-bottom"
          />
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="bg-brand-yellow text-brand-dark py-3 sm:py-4 overflow-hidden border-b-2 border-black relative z-10">
        <div className="flex w-max animate-marquee">
          {/* Duplicate content to create seamless infinite scroll */}
          {[1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5 whitespace-nowrap">
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">SME Financing</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">Invoice Discounting</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">Working Capital</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">LPO Financing</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
              <span className="font-heading font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">Inventory Financing</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-brand-dark flex-shrink-0">
                <path d="M6 0.5L6.3648 3.9311L7.88111 0.831691L7.05041 4.18064L9.53533 1.78676L7.60932 4.64962L10.7631 3.25L7.97412 5.28148L11.4164 5.04494L8.10081 6L11.4164 6.95506L7.97412 6.71852L10.7631 8.75L7.60932 7.35038L9.53533 10.2132L7.05041 7.81936L7.88111 11.1683L6.3648 8.0689L6 11.5L5.6352 8.0689L4.11889 11.1683L4.94959 7.81936L2.46467 10.2132L4.39068 7.35038L1.23686 8.75L4.02588 6.71852L0.583557 6.95506L3.89919 6L0.583557 5.04494L4.02588 5.28148L1.23686 3.25L4.39068 4.64962L2.46467 1.78676L4.94959 4.18064L4.11889 0.831691L5.6352 3.9311L6 0.5Z" fill="currentColor"></path>
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/* Why Swiftbanq Section */}
      <section className="py-12 md:py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left side label */}
            <div className="w-full lg:w-1/4 flex-shrink-0">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black text-sm font-medium tracking-wide text-black uppercase">
                Why Swiftbanq
              </div>
            </div>
            
            {/* Right side content */}
            <div className="w-full lg:w-3/4">
              <p className="text-3xl md:text-5xl lg:text-[3.5rem] font-heading font-medium leading-[1.2] text-black mb-12 tracking-tight">
                Not everyone gets the financial support they need in Nigeria. But <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2 shadow-sm">with us you will.</span>
              </p>
              
              <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-12">
              We understand the unique challenges Nigerian SMEs and entrepreneurs face. <span className="font-normal">That&apos;s why we created Swiftbanq – to provide tailored, fast, and accessible financing that empowers local businesses to grow, scale, and thrive in the Nigerian economy.</span>
            </p>
            </div>
          </div>

          {/* Fixed background image */}
          <div className="w-full mt-12 md:mt-16 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden" style={{ backgroundImage: 'url(/9d39ee6d-9615-4289-9f68-1944b4d9b771.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          </div>
        </div>
      </section>

      {/* Services Header */}
      <section id="services" className="pt-12 pb-4 md:pt-16 md:pb-6 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left sm:text-center max-w-5xl mx-auto">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark tracking-tight leading-[1.2] mb-4 max-w-full mx-auto">
              Introducing SwiftBanq Loans
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible financing solutions designed to help you or your business needs.
            </p>

          </div>
        </div>
      </section>

      {/* Service 1: SME Financing */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-stretch gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              <Image src="/swiftbanq-office-4.jpg" alt="Swiftbanq SME Financing solutions for Nigerian businesses" fill className="object-cover object-center" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-3 pb-5 flex flex-col bg-brand-yellow">



                  {/* Loan term */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-brand-dark">Repayment</span>
                    <div className="flex items-center gap-1">
                      {[3, 6, 12].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 6 ? "bg-brand-dark text-brand-cream" : "text-gray-400"}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Personal Loans", active: true },
                      { label: "School Fees Loans", icon: "🎓" },
                      { label: "Salary Advance", icon: "💸" },
                      { label: "Working Capital", icon: "💼" },
                      { label: "Payroll Support", icon: "👥" },
                    ].map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${tag.active ? "bg-white border-gray-800 text-brand-dark" : "bg-white border-gray-200 text-gray-500"}`}>
                        {tag.active && <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        {!tag.active && tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark tracking-tight leading-[1.1] mb-6">
                Personal / SME loans tailored to your needs
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-tight font-normal">
                Tailored loans for personal needs and small business growth. Get the funds you need quickly and easily.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Quick disbursement
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Competitive rates
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <ApplyNowButton variant="dark" className="order-2 sm:order-1 px-10 py-4 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow/90 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg group" />
                <Link href="/products/sme-loans" className="order-1 sm:order-2 text-brand-dark font-bold hover:text-brand-yellow transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 2: Asset Financing */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-stretch gap-12 lg:gap-20">

            {/* Right (visually): UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              <Image src="https://img.magnific.com/free-photo/warehouse-manager-reading-report-tablet-about-successful-delivery-distribution-warehouse-logistics-center_342744-1554.jpg?t=st=1782722892~exp=1782726492~hmac=f7128d59f1973d532399c6b569d71bb5096d49bcbacb84dbd071f6bfec836e51&w=2000" alt="Swiftbanq Vehicle and Asset Financing options in Nigeria" fill className="object-cover object-center" unoptimized />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-3 pb-5 flex flex-col bg-brand-yellow">



                  {/* Loan term */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-brand-dark">Repayment</span>
                    <div className="flex items-center gap-1">
                      {[12, 24, 36].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 24 ? "bg-brand-dark text-brand-cream" : "text-gray-400"}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "LPO Finance", active: true },
                      { label: "Supply Contracts", icon: "📦" },
                      { label: "Govt Contracts", icon: "🏛️" },
                      { label: "Oil & Gas Contracts", icon: "⛽" },
                    ].map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${tag.active ? "bg-white border-gray-800 text-brand-dark" : "bg-white border-gray-200 text-gray-500"}`}>
                        {tag.active && <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        {!tag.active && tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Left: Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark tracking-tight leading-[1.1] mb-6">
                LPO & Contract financing to fulfill orders fast
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-tight font-normal">
                Secure the funding needed to fulfill your contracts and supply orders without delay.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Flexible repayment
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Low interest rates
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <ApplyNowButton variant="dark" className="order-2 sm:order-1 px-10 py-4 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow/90 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg group" />
                <Link href="/products/lpo-financing" className="order-1 sm:order-2 text-brand-dark font-bold hover:text-brand-yellow transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 3: Equipment Financing */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-stretch gap-12 lg:gap-20">

            {/* Left: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              <Image src="/images/asset-finance-car.jpg" alt="Industrial Equipment financing by Swiftbanq Credit Solutions" fill className="object-cover object-center" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-3 pb-5 flex flex-col bg-brand-yellow">

                  {/* Loan term */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-brand-dark">Business Term</span>
                    <div className="flex items-center gap-1">
                      {[12, 24, 36].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${m === 24 ? "bg-brand-dark text-brand-cream" : "text-gray-400"}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Leases", active: true },
                      { label: "Vehicle Acquisition", icon: "🚗" },
                      { label: "Equipment Acquisition", icon: "⚙️" },
                    ].map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${tag.active ? "bg-white border-gray-800 text-brand-dark" : "bg-white border-gray-200 text-gray-500"}`}>
                        {tag.active && <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        {!tag.active && tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark tracking-tight leading-[1.1] mb-6">
                Asset financing to scale your business
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-tight font-normal">
                Acquire the assets, vehicles, and equipment your business needs to scale and operate efficiently.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  No heavy collateral
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Custom payment schedules
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <ApplyNowButton variant="dark" className="order-2 sm:order-1 px-10 py-4 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow/90 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg group" />
                <Link href="/products/asset-financing" className="order-1 sm:order-2 text-brand-dark font-bold hover:text-brand-yellow transition-colors text-base underline underline-offset-4">Learn More</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 4: Personal Loan */}
      <section className="py-6 md:py-8 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-stretch gap-12 lg:gap-20">

            {/* Right: UI Card mockup */}
            <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px]">
              {/* Section background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://img.magnific.com/free-photo/young-black-race-man-with-blueprint-stading-near-glass-building_1157-50906.jpg?t=st=1782723001~exp=1782726601~hmac=6f790a9dfc7ffa0322910a10e475bec41adea815d27a9dc8c8dd35ab3ad07892&w=2000" alt="Family home secured with Swiftbanq Digital Lending" className="object-cover object-center absolute inset-0 w-full h-full" />
              {/* Mock card overlaying the image */}
              <div className="relative z-[2] w-full max-w-[420px] pt-16 px-3 pb-6">
                <div className="rounded-[2.5rem] pt-4 px-3 pb-5 flex flex-col bg-brand-yellow">

                  {/* Loan term selector */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-brand-dark">Short term</span>
                    <div className="flex items-center gap-1">
                      {[3, 6, 9].map((m) => (
                        <span
                          key={m}
                          className={`px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                            m === 6 ? "bg-brand-dark text-brand-cream" : "text-gray-400"
                          }`}
                        >
                          {m}mo
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Purpose tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Invoice Discounting", active: true },
                      { label: "Receivables Discounting", icon: "🧾" },
                    ].map((tag) => (
                      <span
                        key={tag.label}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${
                          tag.active ? "bg-white border-gray-800 text-brand-dark" : "bg-white border-gray-200 text-gray-500"
                        }`}
                      >
                        {tag.active && (
                          <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        )}
                        {!tag.active && tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Left: Text content */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark tracking-tight leading-[1.1] mb-6">
                Invoice & Receivables discounting
              </h3>

              <p className="text-xl text-gray-600 mb-8 leading-tight font-normal">
                Turn your unpaid invoices into immediate cash to maintain healthy working capital.
              </p>

              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Same-day funding
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Instalment repayment
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <ApplyNowButton variant="dark" className="order-2 sm:order-1 px-10 py-4 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow/90 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg group" />
                <Link href="/products/invoice-discounting" className="order-1 sm:order-2 text-brand-dark font-bold hover:text-brand-yellow transition-colors text-base underline underline-offset-4">
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 5: Investment (Piggyvest Investify Style) */}
      <section className="py-20 md:py-32 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col mb-16 max-w-3xl">
            <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase tracking-wider mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z"/></svg>
              Swiftbanq Investments
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium text-white tracking-tight leading-[1.1] mb-6">
              Start investing with as <br className="hidden md:block" />little as ₦100,000
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Swiftbanq offers pre-vetted, low-to-medium-risk investment opportunities with returns of up to 20% per annum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-items-end md:justify-items-start">
            {/* Card 1 */}
            <div className="bg-[#2a2a2a] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group hover:bg-[#333] transition-colors duration-300">
              <div className="mb-12 h-32 relative">
                {/* Visual placeholder for cards */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute top-4 right-4 w-24 h-24 bg-brand-yellow/20 rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Flexible investment options</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Choose from a variety of plans designed to fit your financial goals, whether you prefer short-term gains or long-term growth.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#2a2a2a] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group hover:bg-[#333] transition-colors duration-300">
              <div className="mb-12 h-32 flex items-center justify-end md:justify-center relative">
                <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Competitive returns</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Benefit from high-yield investment opportunities that maximise your returns, helping you reach your financial targets faster.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#2a2a2a] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group hover:bg-[#333] transition-colors duration-300">
              <div className="mb-12 h-32 relative flex items-center justify-end md:justify-start">
                <div className="flex -space-x-4 ml-4 group-hover:space-x-0 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#4a4a4a] border-4 border-[#2a2a2a] z-30"></div>
                  <div className="w-16 h-16 rounded-full bg-[#3a3a3a] border-4 border-[#2a2a2a] z-20"></div>
                  <div className="w-16 h-16 rounded-full bg-brand-yellow border-4 border-[#2a2a2a] z-10"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Expertly curated investments</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Rest easy knowing that our team of experts carefully selects and manages each investment opportunity to ensure optimal performance.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-12 md:py-16 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top: headline */}
          <div className="mb-16 lg:mb-20 text-center flex justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark tracking-tight leading-tight">
              A message from <span className="font-light italic">our CEO</span>
            </h2>
          </div>

          {/* Card stack */}
          {/* Mobile: simple column card. Desktop: stacked card effect */}
          <div className="relative h-auto lg:h-[460px]">
            {/* Decorative back cards — hidden on mobile */}
            <div className="hidden lg:block absolute inset-y-6 right-[-2%] w-[70%] bg-[#f5f3e8] rounded-[2.5rem] transform rotate-[1.5deg] z-0" />
            <div className="hidden lg:block absolute inset-y-3 right-[1%] w-[68%] bg-brand-yellow rounded-[2.5rem] transform -rotate-[0.5deg] z-[1]" />

            {/* Front card */}
            <div className="relative lg:absolute lg:inset-0 lg:right-[5%] bg-brand-dark rounded-[2.5rem] overflow-hidden flex flex-col sm:flex-row z-[2]">

              {/* Image */}
              <div className="w-full sm:w-[38%] relative shrink-0 h-80 sm:h-auto">
                <Image
                  src="/images/ceo.jpeg"
                  alt="Olawale Osundele, Founder & CEO, Swiftbanq"
                  fill
                  unoptimized
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name + title + quote */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-[3.5rem] font-heading font-bold text-white leading-[1.05] mb-1">
                  Olawale Osundele
                </h3>
                <p className="text-white/60 font-semibold text-base mb-6">CEO of Swiftbanq</p>
                <p className="text-white font-medium text-lg leading-relaxed">
                  &ldquo;At SWIFTBANQ, we are accelerating access to capital with bold solutions that empower businesses and individuals to thrive. Our commitment is clear - fast, transparent and responsible lending that fuels opportunity. The market is evolving and so we are. Together, we will unlock new horizons in finance and growth.&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      <FAQSection />


    </div>
    </>
  );
}
