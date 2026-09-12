interface Step {
  title: string;
  description: string;
}

interface ServiceHowItWorksProps {
  image?: string;
  steps: Step[];
  title?: string;
  howItWorksTitle?: string;
}

export function ServiceHowItWorks({ steps, title, howItWorksTitle }: ServiceHowItWorksProps) {
  return (
    <section className="bg-transparent py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-black text-brand-dark tracking-tight leading-[1.05] mb-4">
            {howItWorksTitle || title || 'Our Process'}
          </h2>
          <p className="text-gray-600 text-lg max-w-xl">
            No hidden charges, no complex deductions. Everything is clearly communicated upfront.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="relative">

          {/* Horizontal line — lg (4-col) only, runs through circle centers */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-0.5 bg-brand-yellow z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex lg:flex-col">

                {/* Vertical connector line — mobile & sm only, between steps */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-14 bottom-0 w-0.5 bg-brand-yellow z-0" />
                )}

                {/* Circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 ring-4 ring-brand-cream mb-0 lg:mb-6 mr-6 lg:mr-0">
                  <span className="text-brand-dark font-black text-lg">{idx + 1}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-10 lg:pb-0">
                  <h3 className="text-xl font-black text-brand-dark mb-3 leading-tight mt-1 lg:mt-0">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
