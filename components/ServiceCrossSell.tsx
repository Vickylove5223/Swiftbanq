import Link from 'next/link';

export function ServiceCrossSell() {
  return (
    <section className="bg-white py-24 border-t border-gray-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
          GROW WITH US
        </div>
        <h2 className="text-5xl md:text-6xl font-heading font-black text-brand-dark tracking-tight leading-[1.05] mb-16">
          Ready to <span className="italic font-serif">level up</span><br />
          from cash to credit?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-brand-dark rounded-3xl p-10 flex flex-col items-start text-left text-white shadow-xl hover:-translate-y-2 transition-transform">
            <h3 className="text-3xl md:text-4xl font-black mb-4">Credit<br />Cards</h3>
            <p className="text-gray-400 font-medium mb-10 text-lg">Build credit on your terms<br />with our business cards.</p>
            <div className="mt-auto">
              <Link 
                href="/products/business-loans" 
                className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-10 flex flex-col items-start text-left text-brand-dark shadow-xl hover:-translate-y-2 transition-transform">
            <h3 className="text-3xl md:text-4xl font-black mb-4">Line<br />of Credit</h3>
            <p className="text-gray-500 font-medium mb-10 text-lg">Flexible funding tailored to<br />your business needs.</p>
            <div className="mt-auto">
              <Link 
                href="/products/lpo-financing" 
                className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
