'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Zap, Clock, MessageCircle } from 'lucide-react';
import { ApplyNowButton } from '@/components/ApplyNowButton';

interface MockTag {
  label: string;
  icon?: string;
  active?: boolean;
}

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  image: string;
  mockLabel?: string;
  mockTags?: MockTag[];
}

export function ServiceHero({ title, subtitle, image, mockLabel, mockTags }: ServiceHeroProps) {
  return (
    <>
    <section className="w-full text-brand-dark pt-28 md:pt-36 lg:pt-40 pb-0 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pb-16">

          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black tracking-tight leading-[1.05] mb-6 text-white">
              {title}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <ApplyNowButton className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-brand-yellow/90 transition-all flex items-center justify-center gap-2 group">
                Apply Now
                <span className="bg-brand-dark text-brand-yellow w-6 h-6 flex items-center justify-center rounded-full transition-colors text-xs group-hover:bg-brand-dark/80">→</span>
              </ApplyNowButton>
              <Link
                href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20speak%20with%20your%20sales%20team%20about%20your%20financial%20services.%20Could%20you%20please%20assist%20me%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-base md:text-lg bg-white/5 backdrop-blur-sm group"
              >
                <MessageCircle className="w-5 h-5" /> Talk To Support
              </Link>
            </div>
          </div>

          {/* Right: Image + Mock Card */}
          <div className="w-full lg:w-1/2 flex flex-col items-end justify-end relative rounded-[2.5rem] overflow-hidden min-h-[420px] lg:min-h-[500px]">
            {/* Background Image — priority since it's above the fold */}
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover object-center"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Mock Card */}
            {mockTags && mockTags.length > 0 && (
              <div className="relative z-10 w-full max-w-[320px] px-4 pb-6 pt-32">
                <div className="rounded-[2rem] pt-4 px-4 pb-5 flex flex-col bg-brand-yellow shadow-2xl">
                  {/* Label row */}
                  <div className="bg-white/80 rounded-2xl px-5 py-3 flex items-center justify-between mb-5">
                    <span className="text-sm font-semibold text-brand-dark">{mockLabel ?? 'Options'}</span>
                    <div className="flex items-center gap-1">
                      {[3, 6, 12].map((m) => (
                        <span key={m} className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${m === 6 ? 'bg-brand-dark text-brand-cream' : 'text-gray-400'}`}>{m}mo</span>
                      ))}
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="grid grid-cols-2 gap-2">
                    {mockTags.map((tag) => (
                      <span key={tag.label} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${tag.active ? 'bg-white border-gray-800 text-brand-dark' : 'bg-white border-gray-200 text-gray-500'}`}>
                        {tag.active && (
                          <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {!tag.active && tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>

    {/* Trust Badges */}
    <section className="w-full bg-white py-12 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-2">
            <Zap className="w-6 h-6 text-brand-dark" />
            <div className="text-sm font-bold uppercase tracking-wider text-brand-dark">Fast Approval</div>
            <div className="text-xs text-gray-500">Decisions in minutes</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-brand-dark" />
            <div className="text-sm font-bold uppercase tracking-wider text-brand-dark">Secure Process</div>
            <div className="text-xs text-gray-500">Bank-level encryption</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Clock className="w-6 h-6 text-brand-dark" />
            <div className="text-sm font-bold uppercase tracking-wider text-brand-dark">Flexible Terms</div>
            <div className="text-xs text-gray-500">Tailored to your needs</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
