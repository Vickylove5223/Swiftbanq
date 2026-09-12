import Image from 'next/image';

interface SubService {
  title: string;
  description: string;
}

interface ServiceSubServicesProps {
  subServices: SubService[];
  title?: string;
}

const imageMapping: Record<string, string> = {
  // SME Loans
  'Personal Loans': '/images/home-family.jpg',
  'School Fees Loans': '/images/hero-card-4.jpg',
  'Salary Advance': '/images/home-meeting.jpg',
  'Working Capital': '/images/sme-card.jpg',
  'Payroll Support': '/images/home-business-men.jpg',
  'Rent Advance': '/images/hero-card-1.jpg',
  // LPO Financing
  'LPO Finance': 'https://img.magnific.com/free-photo/warehouse-manager-reading-report-tablet-about-successful-delivery-distribution-warehouse-logistics-center_342744-1554.jpg?t=st=1782722892~exp=1782726492~hmac=f7128d59f1973d532399c6b569d71bb5096d49bcbacb84dbd071f6bfec836e51&w=2000',
  'Supply Contracts': 'https://img.magnific.com/free-photo/warehouse-manager-checking-orders-list-coordinating-parcels-packing-process-african-american-woman-supervisor-with-laptop-controlling-freight-cardboard-boxes-sealing-dispatching_482257-66197.jpg?t=st=1782726485~exp=1782730085~hmac=46daae34deef6dda3399f8e495c3b07b8907eadd108d640f0bedf963c9bdaa28&w=2000',
  'Govt Contracts': '/images/hero-card-4.jpg',
  'Oil & Gas Contracts': 'https://img.magnific.com/free-photo/portrait-smiling-technician-industrial-plant-working-diagnose-equipment_482257-126201.jpg?t=st=1782726652~exp=1782730252~hmac=691d44b882ffe4905173e76b07b8ad744f8df49977e96c03073450e49eb3fd58&w=2000',
  'Bridge Finance': '/images/hero-card-3.jpg',
  'Project Finance & Syndication': '/image-3.jpg',
  // Asset Financing
  'Leases': '/images/asset-card.jpg',
  'Vehicle Acquisition': '/images/asset-finance-car.jpg',
  'Equipment Acquisition': '/images/asset-industrial.jpg',
  'Building Acquisition': 'https://img.magnific.com/free-photo/multi-racial-builders-standing-outdoors-back-view-wearing-uniform-talking-about-new-glass-building-working-poject-city-infrastructure_1157-50888.jpg?t=st=1782727095~exp=1782730695~hmac=cc6e0f4a1f11c5f2027bc7e9ca5a637a8f7b34a6d6d7c73c5f01b5905249da40&w=2000',
  'Industrial Machinery': '/swiftbanq-office-3.jpg',
  'IT & Laptops': '/image-45.jpg',
  // Invoice Discounting
  'Invoice Discounting': '/images/sme-card.jpg',
  'Receivables Discounting': '/images/hero-card-1.jpg',
  'Corporate Invoice Discounting': '/image-01.jpg',
  'Government Invoice Discounting': '/swiftbanq-office.jpg',
  'Export Invoice Financing': '/swiftbanq-office-4.jpg',
  'Supply Chain Financing': '/images/asset-card.jpg',
  // Investments
  'Fixed Deposits': '/images/treasury-card.jpg',
  'Flexible Savings Plan': '/images/home-family.jpg',
  'Wealth & Retirement Plan': '/images/why-section.jpg',
};

export function ServiceSubServices({ subServices, title }: ServiceSubServicesProps) {
  if (!subServices || subServices.length === 0) return null;

  return (
    <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-brand-dark rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 lg:p-20 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-6">
          OUR SERVICES
        </div>
        <h2 className="text-5xl md:text-6xl font-heading font-black text-white tracking-tight leading-[1.05] mb-16">
          {title ?? <>Explore what we <span className="italic font-serif">offer</span><br />under this product</>}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {subServices.map((service, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-5 md:p-6 flex flex-col items-start transition-transform hover:-translate-y-1 border border-white/10"
            >
              <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight text-white">
                {service.title}
              </h3>
              <p className="text-white/60 font-medium mb-6 text-sm md:text-base">
                {service.description}
              </p>

              <div className="mt-auto w-full h-40 md:h-48 relative rounded-2xl overflow-hidden bg-white/10">
                <Image
                  src={imageMapping[service.title] || '/images/hero-card-1.jpg'}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
