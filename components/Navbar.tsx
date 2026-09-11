"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ApplyModal } from '@/components/ApplyModal';
import { services } from '@/lib/services';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isProductPage = pathname?.startsWith('/products/');
  const isAboutPage = pathname === '/about';
  const isAbsoluteHeader = isHome || isProductPage || isAboutPage;
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Home hero is now white, so its header uses dark text on a white bg
  const isLightHero = isHome;
  const linkClass = isLightHero ? "text-brand-dark hover:text-gray-600" : "text-white hover:text-gray-300";
  const iconClass = isLightHero ? "text-brand-dark" : "text-white";

  return (
    <header aria-label="Main navigation" className={`${isHome ? 'absolute top-0 left-0 w-full z-50 bg-white border-b border-brand-dark/10' : isAbsoluteHeader ? 'absolute top-0 left-0 w-full z-50 bg-transparent' : 'bg-brand-dark w-full border-b border-gray-800 relative z-50'}`}>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
        onFocus={(e) => {
          e.currentTarget.style.position = 'static';
          e.currentTarget.style.width = 'auto';
          e.currentTarget.style.height = 'auto';
        }}
        onBlur={(e) => {
          e.currentTarget.style.position = 'absolute';
          e.currentTarget.style.left = '-9999px';
          e.currentTarget.style.width = '1px';
          e.currentTarget.style.height = '1px';
        }}
        className="bg-brand-yellow text-brand-dark px-4 py-2 z-50 rounded-md m-2"
      >
        Skip to main content
      </a>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block relative focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded-lg" aria-label="Swiftbanq Home">
              <Image
                src="/SBQ_Logo.svg"
                alt="Swiftbanq Credit Solutions"
                width={160}
                height={40}
                priority
                  className={`${isLightHero ? 'h-6 w-auto md:h-7 lg:h-8' : 'brightness-0 invert h-6 w-auto md:h-7 lg:h-8'}`}
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-10">

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded py-2 ${linkClass}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={() => setIsServicesOpen((v) => !v)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
              >
                Our Products <ChevronDown className="ml-1 w-4 h-4" aria-hidden="true" />
              </button>

              <div
                id="services-menu"
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl shadow-lg bg-brand-cream ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <ul className="py-2" role="menu" aria-orientation="vertical">
                  {services.map((service) => (
                    <li key={service.id} role="none">
                      <Link href={`/products/${service.slug}`} className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-brand-dark/5 hover:text-brand-dark capitalize" role="menuitem">
                        {service.id.replace('-', ' ')}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/about" className={linkClass}>About Us</Link>

            <Link href="/blog" className={linkClass}>Our Blog</Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded py-2 ${linkClass}`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                onClick={() => setIsResourcesOpen((v) => !v)}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
                aria-controls="resources-menu"
              >
                Legal <ChevronDown className="ml-1 w-4 h-4" aria-hidden="true" />
              </button>

              <div
                id="resources-menu"
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl shadow-lg bg-brand-cream ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <ul className="py-2" role="menu" aria-orientation="vertical">
                  <li role="none"><Link href="/privacy-policy" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-brand-dark/5 hover:text-brand-dark" role="menuitem">Privacy Policy</Link></li>
                  <li role="none"><Link href="/cookie-policy" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-brand-dark/5 hover:text-brand-dark" role="menuitem">Cookie Policy</Link></li>
                  <li role="none"><Link href="/data-protection" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-brand-dark/5 hover:text-brand-dark" role="menuitem">Data Protection</Link></li>
                  <li role="none"><Link href="/complaints-policy" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-brand-dark/5 hover:text-brand-dark" role="menuitem">Complaints Policy</Link></li>
                </ul>
              </div>
            </div>

            <Link href="/contact" className={linkClass}>Contact Us</Link>
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="px-6 py-3 bg-brand-yellow text-black font-bold rounded-full hover:bg-brand-yellow/90 transition-colors text-sm flex items-center gap-2"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded p-1"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className={`h-6 w-6 ${iconClass}`} aria-hidden="true" /> : <Menu className={`h-6 w-6 ${iconClass}`} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-brand-cream px-4 pb-6 py-2 overflow-y-auto w-full absolute top-full left-0 shadow-lg border-t border-brand-dark/5">
          <nav aria-label="Mobile navigation">
            <div className="space-y-1 pt-2">
              <div className="px-4 py-2 font-bold text-gray-900 text-lg">Our Products</div>
              <div className="flex flex-col pl-4 border-l-2 border-brand-yellow/30 ml-4 mb-2 space-y-1">
                {services.map((service) => (
                  <Link key={service.id} onClick={() => setIsOpen(false)} href={`/products/${service.slug}`} className="block py-2 text-base font-medium text-gray-600 hover:text-brand-dark capitalize">
                    {service.id.replace('-', ' ')}
                  </Link>
                ))}
              </div>
              <Link onClick={() => setIsOpen(false)} href="/about" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">About Us</Link>
              <Link onClick={() => setIsOpen(false)} href="/blog" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Our Blog</Link>
              <Link onClick={() => setIsOpen(false)} href="/privacy-policy" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Privacy Policy</Link>
              <Link onClick={() => setIsOpen(false)} href="/cookie-policy" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Cookie Policy</Link>
              <Link onClick={() => setIsOpen(false)} href="/data-protection" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Data Protection</Link>
              <Link onClick={() => setIsOpen(false)} href="/complaints-policy" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Complaints Policy</Link>
              <Link onClick={() => setIsOpen(false)} href="/contact" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#103623] hover:bg-white/50 rounded-xl">Contact Us</Link>
              <button
                onClick={() => { setIsOpen(false); setIsApplyModalOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 py-4 text-base font-bold text-black bg-brand-yellow hover:bg-brand-yellow/90 transition-colors rounded-full mt-6 w-full"
              >
                Apply Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </nav>
        </div>
      )}

      <ApplyModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
    </header>
  );
}
