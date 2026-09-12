'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ApplyModal } from '@/components/ApplyModal';

const cards = [
  {
    title: 'LPO Finance',
    description: 'Execute government and supply contracts without draining your working capital reserves.',
    image: '/images/asset-card.jpg',
    alt: 'Swiftbanq LPO Finance for SMEs in Nigeria',
    tags: ['LPO', 'Supply', 'Contracts'],
  },
  {
    title: 'Invoice Discounting',
    description: 'Unlock the cash tied up in unpaid invoices and keep your operations running smoothly.',
    image: '/invoice discounting.jpg',
    alt: 'Swiftbanq Invoice Discounting Services for businesses',
    tags: ['Invoices', 'Cash Flow', 'IDF'],
  },
  {
    title: 'Contract & Bridge Finance',
    description: 'Short-term funding to bridge the gap between project execution and final payment, so your contracts never stall.',
    image: '/contract financing.jpg',
    alt: 'Swiftbanq Contract and Bridge Financing',
    tags: ['Bridge', 'Contract', 'Short-term'],
  },
  {
    title: 'Project Finance & Syndication',
    description: 'Structured long-term financing for large-scale business expansion and capital-intensive projects. Built for ambitious enterprises.',
    image: '/images/treasury-card.jpg',
    alt: 'Swiftbanq Project Finance & Syndication solutions',
    tags: ['Syndication', 'Long-term', 'Expansion'],
  },
];

export function SmeServiceCards() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <button
            key={card.title}
            onClick={() => setModalOpen(true)}
            className="border border-brand-dark/10 rounded-2xl p-6 flex flex-col text-left cursor-pointer hover:border-brand-dark/30 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-brand-dark text-2xl">{card.title}</h3>
              <span className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{card.description}</p>
            <div className="rounded-xl overflow-hidden h-64 relative">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover"
                unoptimized
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 flex gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="bg-white/90 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
