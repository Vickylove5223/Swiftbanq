interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

export function ServiceTestimonials({ testimonials }: ServiceTestimonialsProps) {
  const displayTestimonials = testimonials.slice(0, 2);

  return (
    <section className="pb-24 pt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-16">
        <div className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Real Experiences</div>
        <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-dark tracking-tight leading-[1.05]">
          &ldquo;Safe and fast.&rdquo;
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
        {displayTestimonials.map((testimonial, idx) => (
          <div key={idx} className="flex flex-col">
            <p className="text-xl md:text-2xl font-medium text-brand-dark leading-relaxed mb-8 relative pl-6">
              <span className="text-5xl absolute left-0 -top-4 text-brand-yellow/50">&ldquo;</span>
              {testimonial.quote}
            </p>
            <div className="mt-auto flex items-center gap-4">
              <div>
                <div className="font-bold text-brand-dark">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
