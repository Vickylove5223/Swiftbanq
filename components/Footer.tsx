import Link from 'next/link';
import Image from 'next/image';
import { ApplyNowButton } from '@/components/ApplyNowButton';

export function Footer() {
  return (
    <>
      {/* Pre-footer CTA */}
      <section aria-label="Get started with Swiftbanq" className="relative bg-brand-dark py-32 md:py-40 border-b border-white/5 overflow-hidden">
        {/* Pattern - Left */}
        <div className="absolute top-0 h-[800px] w-[550px] pointer-events-none select-none z-0 opacity-40" style={{ left: '-440px' }}>
          <Image src="/pattern 4.svg" alt="Swiftbanq Credit Solutions Design Elements" fill className="object-cover object-left-top" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#1a1a1a]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
        </div>
        {/* Pattern - Right (mirrored) */}
        <div className="absolute top-0 h-[800px] w-[550px] pointer-events-none select-none z-0 opacity-40 scale-x-[-1]" style={{ right: '-440px' }}>
          <Image src="/pattern 4.svg" alt="Swiftbanq Credit Solutions Footer Pattern" fill className="object-cover object-left-top" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#1a1a1a]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white tracking-tight mb-12 leading-[1.1]">
            Unlock the <span className="italic text-brand-yellow font-light">financial growth</span> you&apos;ve been needing.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <ApplyNowButton />
            <Link href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20your%20financial%20services.%20Could%20you%20please%20assist%20me%3F" target="_blank" rel="noopener noreferrer" className="px-10 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg">
              Talk To Support            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-cream pt-24 pb-12" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between mb-24 gap-16">
            {/* Brand */}
            <div className="w-full lg:w-1/3">
              <Link href="/" className="flex items-center mb-4" aria-label="Swiftbanq Credit Solutions home">
                <Image src="/SBQ_Logo.svg" alt="Swiftbanq Credit Solutions" width={160} height={40} className="brightness-0 invert opacity-90" />
              </Link>
              <p className="text-brand-cream/80 text-sm font-medium leading-relaxed mb-6">
                Empowering financial growth through smart, accessible credit solutions for businesses and individuals across Nigeria.
              </p>
            </div>

            {/* Links Grid */}
            <nav aria-label="Footer navigation" className="w-full lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
              <div>
                <h3 className="text-brand-cream/60 font-medium mb-8 text-sm uppercase tracking-wider">Products</h3>
                <ul className="space-y-5">
                  <li>
                    <Link href="/products/sme-loans" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">SME Financing</Link>
                  </li>
                  <li>
                    <Link href="/products/asset-financing" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Asset Financing</Link>
                  </li>
                  <li>
                    <Link href="/products/asset-financing" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Equipment Financing</Link>
                  </li>
                  <li>
                    <Link href="/products/sme-loans" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Digital Lending</Link>
                  </li>
                  <li>
                    <Link href="/products/investments" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Investment</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-brand-cream/60 font-medium mb-8 text-sm uppercase tracking-wider">Company</h3>
                <ul className="space-y-5">
                  <li>
                    <Link href="/blog" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Our Blog</Link>
                  </li>
                  <li>
                    <Link href="/about" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Cookie Policy</Link>
                  </li>
                  <li>
                    <Link href="/data-protection" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Data Protection</Link>
                  </li>
                  <li>
                    <Link href="/complaints-policy" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">Complaints Policy</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-brand-cream/60 font-medium mb-8 text-sm uppercase tracking-wider">Get in Touch</h3>
                <ul className="space-y-5">
                  <li>
                    <a href="tel:+2347086429380" className="font-medium hover:text-brand-yellow transition-colors text-[15px]">07086429380</a>
                  </li>
                  <li>
                    <a href="mailto:enquiries@swiftbanq.com" className="font-medium hover:text-brand-yellow transition-colors text-[15px] break-all">enquiries@swiftbanq.com</a>
                  </li>
                  <li>
                    <address className="font-medium text-[15px] text-brand-cream leading-relaxed not-italic">
                      6, Babatunde Jose Street,<br />
                      Off Ademola Adetokunbo V.I,<br />
                      Lagos, Nigeria.
                    </address>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 gap-6 border-t border-brand-cream/10">
            <p className="text-brand-cream/80 text-sm font-medium">
              Copyright &copy; {new Date().getFullYear()} Swiftbanq Credit Solutions. All rights reserved.
            </p>
          </div>

          <div className="pt-10 text-xs text-brand-cream/50 space-y-4 leading-[1.8] font-medium max-w-6xl">
            <p>
              Loans and financing options are subject to approval, terms, and conditions. Interest rates and repayment structures may vary based on creditworthiness, market conditions, and regulatory guidelines.
            </p>
            <p>
              Swiftbanq Credit Solutions is a duly licensed money lending institution operating under the regulatory framework of the Lagos State Money Lenders Law. We are not a deposit-taking commercial bank, but a financial partner empowering growth through accessible credit and structured investment.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
