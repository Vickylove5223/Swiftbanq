'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

export function ServiceTestimonials({ testimonials }: ServiceTestimonialsProps) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex((i + testimonials.length) % testimonials.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const active = testimonials[index];

  return (
    <section className="pb-24 pt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-dark tracking-tight leading-[1.05]">
          &ldquo;Safe and fast.&rdquo;
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center min-h-[220px] sm:min-h-[180px]">
          <p className="text-xl md:text-2xl font-medium text-brand-dark leading-relaxed mb-8 relative pl-6 text-left sm:text-center sm:pl-0">
            <span className="text-5xl absolute left-0 sm:static sm:block sm:mb-2 -top-4 text-brand-yellow/50">&ldquo;</span>
            {active.quote}
          </p>
          <div>
            <div className="font-bold text-brand-dark">{active.author}</div>
            <div className="text-sm text-gray-500">{active.role}</div>
          </div>
        </div>

        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-brand-yellow' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
