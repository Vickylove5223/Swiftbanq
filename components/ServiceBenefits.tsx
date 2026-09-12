import React from 'react';

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  title: string;
  benefits: Benefit[];
}

// Decorative visuals per card index, matching the homepage investment section style
function CardVisual({ idx, icon: Icon }: { idx: number; icon: React.ElementType }) {
  if (idx === 0) {
    return (
      <div className="mb-12 h-32 relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-300" />
        <div className="absolute top-4 right-4 w-24 h-24 bg-brand-yellow/20 rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
      </div>
    );
  }
  if (idx === 1) {
    return (
      <div className="mb-12 h-32 flex items-center justify-end relative">
        <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10 text-brand-dark" />
        </div>
      </div>
    );
  }
  return (
    <div className="mb-12 h-32 relative flex items-center justify-end">
      <div className="flex -space-x-4 ml-4 group-hover:space-x-0 transition-all duration-300">
        <div className="w-16 h-16 rounded-full bg-[#4a4a4a] border-4 border-[#2a2a2a] z-30" />
        <div className="w-16 h-16 rounded-full bg-[#3a3a3a] border-4 border-[#2a2a2a] z-20" />
        <div className="w-16 h-16 rounded-full bg-brand-yellow border-4 border-[#2a2a2a] z-10" />
      </div>
    </div>
  );
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-brand-dark rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 lg:p-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white tracking-tight max-w-xl leading-[1.05]">
            Why people keep choosing us
          </h2>
          <p className="text-gray-300 text-lg max-w-sm leading-relaxed">
            No hidden charges, no complex deductions. Everything clearly communicated upfront.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group hover:bg-[#333] transition-colors duration-300"
            >
              <CardVisual idx={idx} icon={benefit.icon} />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
