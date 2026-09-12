'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Swiftbanq?",
    answer: "Swiftbanq is a duly licensed money lending institution operating under the regulatory framework of the Lagos State Money Lenders Law. We provide comprehensive financial solutions including SME Financing, Asset Financing, Digital Lending, and Investment.",
  },
  {
    question: "What type of loans do you offer?",
    answer: "We offer a diverse range of loan products including Local Purchase Orders (LPO), Invoice Discounting Facility (IDF), Bridge Finance, Contract Finance, Vehicle Financing, Office/Household Equipment Loans, and Digital Lending for salary earners.",
  },
  {
    question: "How fast is the loan disbursement process?",
    answer: "Our digital lending platform and streamlined processes allow for rapid assessment. Once your application is approved and all documentation is verified, disbursement is done instantly.",
  },
  {
    question: "How does Swiftbanq protect my data and assets?",
    answer: "We employ industry-standard encryption, regulatory compliance measures, and strict data privacy protocols to ensure your information and financial transactions are always secure.",
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium leading-[1.1] text-brand-dark tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="border-t border-brand-dark/20">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-brand-dark/20">
                  <button
                    onClick={() => toggleFAQ(index)}
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
