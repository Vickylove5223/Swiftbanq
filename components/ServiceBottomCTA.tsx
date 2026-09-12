import Link from 'next/link';

export function ServiceBottomCTA() {
  return (
    <section className="bg-white py-16 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark tracking-tight">
            New to cash advances?
          </h2>
          <Link 
            href="/about" 
            className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform whitespace-nowrap"
          >
            Learn how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
