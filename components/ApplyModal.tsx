'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel — same bg as site cream */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors text-brand-dark"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Heading */}
        <div className="mb-8 pr-6">
          <h2
            id="apply-modal-title"
            className="text-2xl font-heading font-semibold text-brand-dark mb-2"
          >
            How would you like to apply?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Choose the option that works best for you.
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-4">
          {/* Option 1: Application Form */}
          <Link
            href="/apply"
            onClick={onClose}
            className="group flex items-center gap-5 p-5 rounded-2xl border-2 border-brand-yellow/40 bg-white/60 hover:bg-white hover:border-brand-yellow hover:shadow-md transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow/40 transition-colors">
              <svg className="w-6 h-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-brand-dark text-base">Fill Application Form</p>
              <p className="text-gray-500 text-sm mt-0.5">Complete our quick online form and we&apos;ll get back to you.</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-dark transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Option 2: Account Officer via WhatsApp */}
          <a
            href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%27d%20like%20to%20apply%20for%20a%20loan%20and%20speak%20with%20a%20Dedicated%20Account%20Officer.%20Could%20you%20please%20assist%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-5 p-5 rounded-2xl border-2 border-[#25D366]/30 bg-white/60 hover:bg-white hover:border-[#25D366] hover:shadow-md transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-brand-dark text-base">Dedicated Account Officer</p>
              <p className="text-gray-500 text-sm mt-0.5">Chat directly with an officer on WhatsApp for personalised help.</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#25D366] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
