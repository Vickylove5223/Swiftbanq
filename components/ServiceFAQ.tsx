"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-8 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/3 lg:sticky top-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-dark tracking-tight leading-[1.05] mb-8">
              <span className="italic font-serif">Questions?</span><br />
              Answers.
            </h2>
            <Link 
              href="#apply" 
              className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block"
            >
              Get Started
            </Link>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full lg:w-2/3">
            <div className="border-t border-brand-dark/20">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-brand-dark/20">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    className="w-full flex justify-between items-center py-6 md:py-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded-sm"
                  >
                    <span className="text-xl md:text-2xl font-medium text-brand-dark pr-8">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-brand-dark">
                      {openIndex === index ? (
                        <Minus className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                      ) : (
                        <Plus className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] mb-8 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-lg text-gray-700 leading-relaxed pr-8 md:pr-16">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
