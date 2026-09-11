import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Target, Users, Landmark, Users2, Handshake, Award, Lightbulb, UserCheck, BadgeCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Swiftbanq Credit Solutions is a licensed NBFI in Lagos, Nigeria. Learn about our mission to close the financial gap for SMEs and individuals through fast, fair, and structured credit products.',
  alternates: {
    canonical: 'https://swiftbanq.com/about',
  },
  openGraph: {
    title: 'About Us | Swiftbanq Credit Solutions',
    description: 'Learn about Swiftbanq — a licensed Non-Bank Financial Institution in Lagos, Nigeria committed to delivering swift, secure, and structured credit solutions.',
    url: 'https://swiftbanq.com/about',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About Swiftbanq Credit Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div className="w-full bg-transparent">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-medium text-white tracking-tight mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A licensed, forward-thinking financial institution committed to delivering swift, secure, and structured credit solutions across Nigeria.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">


        {/* Mission Statement + Values */}
        <div className="mb-24 space-y-20">

          {/* Big statement + body copy */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark leading-tight tracking-tight">
              We exist to <span className="font-bold bg-brand-yellow px-2 md:px-4 py-1 rounded-xl text-brand-dark inline-block transform -rotate-2 my-2">close</span> the financial gap for businesses and individuals across Nigeria.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded with a clear mandate, Swiftbanq Credit Solutions was built to serve the underserved — SMEs chasing growth, salary earners navigating life&apos;s surprises, and businesses that need a financial partner who moves at their pace.
              </p>
              <p>
                We combine regulatory discipline with modern thinking to deliver credit products that are fast, fair, and structured for the real economy. Every loan we issue is a commitment to someone&apos;s ambition.
              </p>
              <div className="flex flex-col gap-6 pt-2">
                <div>
                  <h3 className="font-bold text-brand-dark text-base mb-1">Legal Status</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Duly Licensed money lending institution in Lagos, Nigeria, operating strictly under the regulatory framework of the Nigeria Money Lenders Law and allied prudential guidelines.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-base mb-1">Business Model</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We are a Non-Bank Financial Institution focused on offering flexible short to medium term lendings crafted for the modern economy.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Goal Section */}
        <div className="bg-brand-dark rounded-3xl p-6 sm:p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-brand-dark to-brand-dark opacity-50"></div>
          <div className="relative z-10">
            {/* Section header removed as requested */}

            {/* Two-column layout separated by divider */}
            <div className="grid md:grid-cols-[1fr_1px_1fr] gap-0">
              {/* Mission */}
              <div className="flex flex-col items-start pb-8 md:pb-0 md:pr-10">
                <div className="w-14 h-14 rounded-xl bg-brand-yellow flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-brand-dark" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To offer a range of advisory services to a diverse base of clients in a precise and professional manner capable of adding value to and unlocking potentials inherent in the client's businesses.
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block bg-white/15 mx-8" />

              {/* Goal */}
              <div className="flex flex-col items-start pt-8 md:pt-0 md:pl-10 border-t border-white/15 md:border-t-0">
                <div className="w-14 h-14 rounded-xl bg-brand-yellow flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-brand-dark" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become the preferred choice for clients seeking advisory services based on our experience, expertise and service.
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* Values — full width */}
        <div className="mt-16 md:mt-20 mb-16 md:mb-20">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark tracking-tight mb-6">We live by our values.</h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Our core principles guide every interaction and decision we make, ensuring we always deliver our best.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 w-full">
            {[
              { icon: <Users2 className="w-5 h-5 text-brand-dark" />, title: "People First", desc: "We prioritize the needs, goals, and trust of our customers in every decision we make." },
              { icon: <Handshake className="w-5 h-5 text-brand-dark" />, title: "Integrity", desc: "We operate with honesty and transparency — no hidden fees, no false promises." },
              { icon: <Award className="w-5 h-5 text-brand-dark" />, title: "Excellence", desc: "We strive to exceed expectations with world-class service and performance." },
              { icon: <Lightbulb className="w-5 h-5 text-brand-dark" />, title: "Innovation", desc: "We embrace technology and fresh thinking to deliver smarter financial solutions." },
              { icon: <UserCheck className="w-5 h-5 text-brand-dark" />, title: "Customer Centric", desc: "We design every service around your needs, goals, and experience." },
              { icon: <BadgeCheck className="w-5 h-5 text-brand-dark" />, title: "Professionalism", desc: "We deliver with quality, clarity, and consistent standards." },
            ].map((v, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-brand-yellow flex items-center justify-center">{v.icon}</div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm mb-0.5">{v.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join the journey section */}
        <div className="mt-32 md:mt-40 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden">
            <Image
              src="/team.jpg"
              alt="Swiftbanq Credit Solutions team collaborating on Digital Lending"
              fill
              unoptimized
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark leading-tight tracking-tight mb-6">
              We&apos;re building something meaningful. Come be part of it.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Swiftbanq, we believe great work happens when talented people care about the same things — speed, integrity, and real impact. If that sounds like you, we&apos;d love to connect.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-brand-yellow text-brand-dark rounded-full font-bold hover:bg-brand-yellow/90 transition-colors text-lg w-full sm:w-auto">
              Get in touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
