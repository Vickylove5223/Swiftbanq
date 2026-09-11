import { Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    title: "Secured capital seamlessly",
    quote: "Swiftbanq's SME Financing helped us secure the capital we needed to fulfill a major government contract without wiping out our cash flow.",
    name: 'Chinedu K.',
    role: 'Contractor',
    date: '2 days ago'
  },
  {
    title: "Perfectly structured payments",
    quote: 'Acquiring our new delivery fleet was a breeze. Their asset financing structured our payments perfectly to match our monthly revenue.',
    name: 'Nkechi A.',
    role: 'Logistics Manager',
    date: '1 week ago'
  },
  {
    title: "Incredibly seamless process",
    quote: 'The digital lending process is incredibly seamless. I got a loan disbursed directly to my account within minutes for a personal emergency.',
    name: 'Adebayo O.',
    role: 'Salary Earner',
    date: '3 weeks ago'
  },
  {
    title: "Highly competitive returns",
    quote: "With their structured investment, my company's idle funds are now yielding highly competitive returns safely and securely.",
    name: 'Fatima K.',
    role: 'Financial Director',
    date: '1 month ago'
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-12 tracking-tight text-center leading-tight">
          Hear what our clients are saying
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-[#00b67a] p-0.5 rounded-sm">
                    <Star className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                ))}
              </div>

              {/* Title & Verified */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-brand-dark leading-tight">{t.title}</h3>
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author & Date */}
              <div className="pt-4 border-t border-gray-100">
                <div className="font-bold text-brand-dark text-sm">{t.name}</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-gray-500 text-xs">{t.role}</span>
                  <span className="text-gray-400 text-xs">{t.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
