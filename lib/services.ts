import { Briefcase, CreditCard, Clock, CheckCircle2, TrendingUp, Building } from 'lucide-react';

export type ServiceData = {
  id: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroMockLabel?: string;
  heroMockTags?: { label: string; icon?: string; active?: boolean }[];
  title: string;
  howItWorksTitle?: string;
  subServicesTitle?: string;
  benefits: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
  howItWorks: {
    title: string;
    description: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  subServices?: {
    title: string;
    description: string;
  }[];
};

export const services: ServiceData[] = [
  {
    id: 'sme-loans',
    slug: 'sme-loans',
    subServices: [
      { title: 'Personal Loans', description: 'Quick access to personal funds for emergencies, education, and lifestyle needs.' },
      { title: 'School Fees Loans', description: 'Never miss a school term — get funds to cover tuition and education expenses fast.' },
      { title: 'Salary Advance', description: 'Access a portion of your next paycheck before payday to handle urgent needs.' },
      { title: 'Working Capital', description: 'Keep your business running smoothly with flexible short-term working capital.' },
      { title: 'Payroll Support', description: 'Ensure you never miss payroll — we fund your staff salaries when cash flow is tight.' },
    ],
    heroTitle: 'Get Fast Personal & SME Loans',
    heroSubtitle: 'With Swiftbanq, you can access immediate flexible capital — so you can meet personal needs or keep your business moving quickly while you wait.',
    heroImage: '/swiftbanq-office-4.jpg',
    heroMockLabel: 'Repayment',
    heroMockTags: [
      { label: 'Personal Loans', active: true },
      { label: 'School Fees Loans', icon: '🎓' },
      { label: 'Salary Advance', icon: '💸' },
      { label: 'Working Capital', icon: '💼' },
      { label: 'Payroll Support', icon: '👥' },
    ],
    title: 'Swiftbanq Personal/SME Loans, unlock flexible capital — fast.',
    howItWorksTitle: 'Our Personal & SME Loan Process',
    subServicesTitle: 'Explore what we offer under Personal & SME Loans',
    benefits: [
      {
        icon: TrendingUp,
        title: 'Competitive interest rates',
        description: 'Enjoy smart funding that is fair to you, managing and growing your capital without a heavy burden.',
      },
      {
        icon: CheckCircle2,
        title: 'Minimal paperwork required',
        description: 'No long protocols. Apply online in a few clicks with basic documentation and without the stress.',
      },
      {
        icon: Clock,
        title: '48 hour turnaround time',
        description: 'Get your loan decision within 48 hours. Focus on your goals while we fund your needs in record time.',
      }
    ],
    howItWorks: [
      {
        title: 'Apply Online',
        description: 'Upload your application and necessary documents on our portal securely to initiate the process.'
      },
      {
        title: 'Get Appraised',
        description: 'Our team will review your application swiftly to ensure everything meets our criteria for funding.'
      },
      {
        title: 'Receive Funds',
        description: 'Once approved, we disburse the funds directly to your account immediately to keep you moving.'
      },
      {
        title: 'Flexible Repayment',
        description: 'Repay over convenient tenures tailored to your cash flow, ensuring a stress-free experience.'
      }
    ],
    testimonials: [
      {
        quote: 'Swiftbanq made it so easy to get capital when my business needed it most. The process was straightforward, fast, and completely stress-free.',
        author: 'Adeoye (R) Johnson',
        role: 'CEO, Ade Ventures'
      },
      {
        quote: 'When my kids\' school fees were due and cash was tight, Swiftbanq provided a salary advance in under 24 hours. A real lifesaver!',
        author: 'Chinwe Okonkwo',
        role: 'Civil Servant'
      },
      {
        quote: 'The working capital loan helped us stock up for the holiday season. The rates were fair and the team was incredibly helpful.',
        author: 'Ibrahim Musa',
        role: 'Retail Store Owner'
      }
    ],
    faqs: [
      { question: 'Who can apply for Personal/SME Loans?', answer: 'Both individuals with verified income and registered small/medium enterprises in Nigeria can apply.' },
      { question: 'Do I need to provide collateral?', answer: 'It depends on the loan amount and type. Many of our smaller personal and SME loans are unsecured.' },
      { question: 'How quickly can I get funded?', answer: 'Once all documents are verified, disbursements typically happen within 48 hours.' },
      { question: 'What is the maximum amount I can borrow?', answer: 'Loan limits vary based on your income or business revenue and credit assessment.' },
      { question: 'Are there hidden charges?', answer: 'No. All fees and interest rates are transparently communicated before you accept the loan.' }
    ]
  },
  {
    id: 'lpo-financing',
    slug: 'lpo-financing',
    subServices: [
      { title: 'LPO Finance', description: 'Direct capital to execute Local Purchase Orders from verified corporate and government institutions.' },
      { title: 'Supply Contracts', description: 'Funding to fulfill supply agreements and keep your supply chain moving without delays.' },
      { title: 'Govt Contracts', description: 'Finance government contracts with confidence — we handle the funding.' },
      { title: 'Oil & Gas Contracts', description: 'Specialized financing for upstream and downstream Oil & Gas contracts.' },
    ],
    heroTitle: 'Execute Contracts with LPO Financing',
    heroSubtitle: 'Never lose a supply contract because of cash flow. We provide the capital you need to execute Local Purchase Orders smoothly.',
    heroImage: 'https://img.magnific.com/free-photo/warehouse-manager-reading-report-tablet-about-successful-delivery-distribution-warehouse-logistics-center_342744-1554.jpg?t=st=1782722892~exp=1782726492~hmac=f7128d59f1973d532399c6b569d71bb5096d49bcbacb84dbd071f6bfec836e51&w=2000',
    heroMockLabel: 'Repayment',
    heroMockTags: [
      { label: 'LPO Finance', active: true },
      { label: 'Supply Contracts', icon: '📦' },
      { label: 'Govt Contracts', icon: '🏛️' },
      { label: 'Oil & Gas Contracts', icon: '⛽' },
    ],
    title: 'Our LPO Financing Process',
    howItWorksTitle: 'Our LPO Financing Process',
    subServicesTitle: 'Explore what we offer under LPO Financing',
    benefits: [
      {
        icon: TrendingUp,
        title: 'Competitive interest rates',
        description: 'Enjoy smart funding that is fair to you, managing and growing your capital without a heavy burden.',
      },
      {
        icon: CheckCircle2,
        title: 'Minimal paperwork required',
        description: 'No long protocols. Apply online in a few clicks with basic documentation and without the stress.',
      },
      {
        icon: Clock,
        title: '48 hour turnaround time',
        description: 'Get your financing decision within 48 hours. Focus on executing the contract while we fund your needs.',
      }
    ],
    howItWorks: [
      {
        title: 'Apply Online',
        description: 'Upload your verified Local Purchase Order or Contract details to our secure portal.'
      },
      {
        title: 'Get your LPO Evaluated',
        description: 'We quickly evaluate the contract and the employer.'
      },
      {
        title: 'We Provide Funding for LPO Execution',
        description: 'We make direct payments to your suppliers or vendors so you can deliver on the contract.'
      },
      {
        title: 'Client pays us',
        description: 'Once you deliver, your client pays the invoice directly to a domiciled account to settle the facility.'
      }
    ],
    testimonials: [
      {
        quote: 'We won a massive government supply contract but lacked the upfront capital. Swiftbanq funded our suppliers within days.',
        author: 'Olamide Peters',
        role: 'Managing Director, OP Logistics'
      },
      {
        quote: 'The LPO financing process was incredibly smooth. They understand the urgency of corporate procurement.',
        author: 'Emeka Nnamdi',
        role: 'Contractor'
      },
      {
        quote: 'Thanks to Swiftbanq, we can bid for larger Oil & Gas contracts knowing we have a reliable financial partner to back us up.',
        author: 'Sarah Bello',
        role: 'Operations Head'
      }
    ],
    faqs: [
      { question: 'What types of contracts do you finance?', answer: 'We finance LPOs from reputable FMCGs, Telecoms, Oil & Gas companies, and government parastatals.' },
      { question: 'Do you fund the full contract value?', answer: 'We typically fund up to 70% of the contract value or the total cost of supplies, whichever is applicable.' },
      { question: 'Who pays the supplier?', answer: 'We make payments directly to the verified supplier or manufacturer to ensure funds are utilized for the contract.' },
      { question: 'How quickly can I get funded?', answer: 'Upon verification of the LPO, funding is usually processed within 48 hours.' },
      { question: 'Are there hidden charges?', answer: 'No, all setup fees and interest rates are clearly stated upfront.' }
    ]
  },
  {
    id: 'asset-financing',
    slug: 'asset-financing',
    subServices: [
      { title: 'Leases', description: 'Finance assets through structured lease agreements with flexible buyout options at end of term.' },
      { title: 'Vehicle Acquisition', description: 'Acquire cars, delivery vans, or trucks for personal or business use with easy monthly payments.' },
      { title: 'Equipment Acquisition', description: 'Procure office equipment, industrial machinery, medical equipment , IT infrastructure and other business assets without upfront capital.' },
    ],
    heroTitle: 'Acquire Assets without the Heavy Burden',
    heroSubtitle: 'From vehicles to specialized equipment, get what your business needs today and pay comfortably over time.',
    heroImage: '/images/asset-finance-car.jpg',
    heroMockLabel: 'Business Term',
    heroMockTags: [
      { label: 'Leases', active: true },
      { label: 'Vehicle Acquisition', icon: '🚗' },
      { label: 'Equipment Acquisition', icon: '⚙️' },
      { label: 'Industrial Machinery', icon: '🏭' },
    ],
    title: 'Swiftbanq Asset Financing, unlock the equipment you need — fast.',
    howItWorksTitle: 'Our Asset Financing Process',
    subServicesTitle: 'Explore what we offer under Asset Financing',    benefits: [
      {
        icon: TrendingUp,
        title: 'Competitive interest rates',
        description: 'Enjoy smart funding that is fair to you, managing and growing your capital without a heavy burden.',
      },
      {
        icon: CheckCircle2,
        title: 'Minimal paperwork required',
        description: 'No long protocols. Apply online in a few clicks with basic documentation and without the stress.',
      },
      {
        icon: Clock,
        title: '48 hour turnaround time',
        description: 'Get your financing decision within 48 hours. Focus on operations while we procure your needs.',
      }
    ],
    howItWorks: [
      {
        title: 'Apply Online',
        description: 'Submit an application with the proforma invoice of the asset you wish to acquire.'
      },
      {
        title: 'Equity Contribution',
        description: 'Make the agreed initial equity contribution (usually 20-30% of the asset value).'
      },
      {
        title: 'Asset Procurement',
        description: 'We purchase the asset and hand it over to you for immediate business use.'
      },
      {
        title: 'Repay over time',
        description: 'Pay the balance in comfortable monthly installments while the asset generates income.'
      }
    ],
    testimonials: [
      {
        quote: 'Upgrading our delivery fleet was seamless. Swiftbanq bought the vans, and we pay monthly from our profits.',
        author: 'Tunde Afolabi',
        role: 'Logistics Manager'
      },
      {
        quote: 'We needed specialized medical equipment. Swiftbanq made it possible without draining our working capital.',
        author: 'Dr. Fatima Umar',
        role: 'Clinic Director'
      },
      {
        quote: 'The asset finance process is fast and transparent. Best financial decision we made this year.',
        author: 'Chinedu Eze',
        role: 'Factory Owner'
      }
    ],
    faqs: [
      { question: 'What kind of assets can I finance?', answer: 'We finance vehicles, office equipment, industrial machinery, and specialized medical/IT equipment.' },
      { question: 'Do I need to make a down payment?', answer: 'Yes, a minimum equity contribution (typically 20% to 30%) is required depending on the asset.' },
      { question: 'Who owns the asset during repayment?', answer: 'The asset remains in Swiftbanq\'s name as security until the final installment is paid, after which ownership is transferred to you.' },
      { question: 'How quickly can I get funded?', answer: 'Once equity is paid and documents verified, we proceed with procurement within 48 hours.' },
      { question: 'Are there hidden charges?', answer: 'No. The total cost of the lease, including insurance and tracking (if applicable), is communicated upfront.' }
    ]
  },
  {
    id: 'invoice-discounting',
    slug: 'invoice-discounting',
    subServices: [
      { title: 'Invoice Discounting', description: 'Get up to 70% of your verified invoice value upfront while your client\'s payment is still pending.' },
      { title: 'Receivables Discounting', description: 'Convert your outstanding receivables into immediate working capital to keep operations running.' },
    ],
    heroTitle: 'Get Discounts on Unpaid Invoices',
    heroSubtitle: 'With Swiftbanq Invoice Discounting, you can get immediate access to up to 70% of your unpaid invoices — so you can keep your operations moving quickly while you wait.',
    heroImage: 'https://img.magnific.com/free-photo/young-black-race-man-with-blueprint-stading-near-glass-building_1157-50906.jpg?t=st=1782723001~exp=1782726601~hmac=6f790a9dfc7ffa0322910a10e475bec41adea815d27a9dc8c8dd35ab3ad07892&w=2000',
    heroMockLabel: 'Short term',
    heroMockTags: [
      { label: 'Invoice Discounting', active: true },
      { label: 'Receivables Discounting', icon: '🧾' },
      { label: 'Corporate Invoices', icon: '🏢' },
      { label: 'Govt Parastatals', icon: '🏛️' },
    ],
    title: 'Swiftbanq invoice discounting, unlock cash tied up in unpaid invoices — fast.',
    howItWorksTitle: 'Our Invoice Discounting Process',
    subServicesTitle: 'Explore what we offer under Invoice Discounting',
    benefits: [
      {
        icon: TrendingUp,
        title: 'Competitive interest rates',
        description: 'Enjoy smart funding that is fair to you, managing and growing your capital without a heavy burden.',
      },
      {
        icon: CheckCircle2,
        title: 'Minimal paperwork required',
        description: 'No long protocols. Apply online in a few clicks with basic documentation and without the stress.',
      },
      {
        icon: Clock,
        title: '48 hour turnaround time',
        description: 'Get your invoice discounted within 48 hours. Focus on your next contract while we fund your needs.',
      }
    ],
    howItWorks: [
      {
        title: 'Apply Online',
        description: 'Upload invoices securely on our portal and provide evidence of job completion to initiate the process.'
      },
      {
        title: 'Get your invoice value',
        description: 'Get up to 70% of the invoice value within 48 hours. Once we have verified the invoice, the majority of the funds goes to your business account.'
      },
      {
        title: 'Client(Employer) pays later',
        description: 'Your client(Employer) pays the invoice directly to a domiciled bank account. We deduct our fee and remit the balance to you.'
      },
      {
        title: 'You Receive the Balance',
        description: 'Once payment is confirmed, our principal repayment plus interest is deducted.'
      }
    ],
    testimonials: [
      {
        quote: 'Swiftbanq is a game changer! They discounted my invoice within 48 hours and I met my payroll obligations without stress.',
        author: 'Adeoye (R) Johnson',
        role: 'CEO, Tech Solutions'
      },
      {
        quote: 'The prompt invoice discounting service meant we didn\'t have to halt operations while waiting for a major client to pay.',
        author: 'Bisola Alabi',
        role: 'Managing Director'
      },
      {
        quote: 'Cash flow is king, and Swiftbanq ensures ours is never tied up in unpaid invoices. Exceptional and fast service.',
        author: 'Kenneth Okorie',
        role: 'Business Owner'
      }
    ],
    faqs: [
      { question: 'Who can use Invoice Discounting?', answer: 'Registered businesses that supply goods or services to reputable corporate organizations or government bodies on credit terms.' },
      { question: 'Do I need to be an existing customer?', answer: 'No, but you will need to open an account and undergo a basic KYC verification process.' },
      { question: 'What percentage of my invoice will I get?', answer: 'We typically discount up to 70% of the verified invoice value.' },
      { question: 'How quickly can I get funded?', answer: 'Upon successful verification of the invoice with the issuer, funding is processed within 48 hours.' },
      { question: 'Are there setup fees or hidden charges?', answer: 'No. We charge a transparent discount fee based on the tenure of the invoice.' }
    ]
  },
  {
    id: 'investments',
    slug: 'investments',
    subServices: [
      { title: 'Fixed Deposits', description: 'Secure investments with guaranteed returns over fixed tenures.' },
      // { title: 'Target Savings', description: 'Structured plans to help you save towards specific goals.' },
      { title: 'Corporate Treasury', description: 'Portfolio management and treasury solutions for businesses.' }
    ],
    heroTitle: 'Start investing with as little as ₦100,000',
    heroSubtitle: 'Swiftbanq offers pre-vetted, low-to-medium-risk investment opportunities with competitive returns to help you grow your wealth.',
    heroImage: '/images/home-business-men.jpg',
    title: 'Swiftbanq Investments, secure your financial future today.',
    howItWorksTitle: 'Our Investment Process',
    subServicesTitle: 'Explore what we offer under Investments',
    benefits: [
      {
        icon: TrendingUp,
        title: 'Competitive returns',
        description: 'Benefit from high-yield investment opportunities that maximise your returns, helping you reach your financial targets faster.',
      },
      {
        icon: CheckCircle2,
        title: 'Flexible investment options',
        description: 'Choose from a variety of plans designed to fit your financial goals, whether you prefer short-term gains or long-term growth.',
      },
      {
        icon: Briefcase,
        title: 'Expertly curated investments',
        description: 'Rest easy knowing that our team of experts carefully selects and manages each investment opportunity to ensure optimal performance.',
      }
    ],
    howItWorks: [
      {
        title: 'Sign Up',
        description: 'Create an account and complete the KYC process on our secure investment portal.'
      },
      {
        title: 'Choose a Plan',
        description: 'Browse our curated list of investment plans and select the one that aligns with your financial goals.'
      },
      {
        title: 'Fund Your Investment',
        description: 'Transfer funds securely into your investment account using your preferred payment method.'
      },
      {
        title: 'Watch Your Money Grow',
        description: 'Track your investment performance and earn competitive returns over your chosen tenure.'
      }
    ],
    testimonials: [
      {
        quote: 'Swiftbanq Investments has helped me secure my family\'s future. The returns are excellent and the platform is so easy to use.',
        author: 'Ngozi Adebayo',
        role: 'Business Owner'
      },
      {
        quote: 'I started with a small amount and have watched my wealth grow consistently. Highly recommend their curated plans!',
        author: 'Emmanuel Chukwu',
        role: 'Civil Engineer'
      },
      {
        quote: 'Their expert team takes the stress out of investing. I know my money is in safe hands and growing steadily.',
        author: 'Aisha Bello',
        role: 'Marketing Manager'
      }
    ],
    faqs: [
      { question: 'What is the minimum amount I can invest?', answer: 'You can start investing with as little as ₦100,000.' },
      { question: 'Are my investments safe?', answer: 'Yes, we only offer pre-vetted, low-to-medium-risk investment opportunities managed by our expert team.' },
      { question: 'Can I withdraw my money at any time?', answer: 'Withdrawal terms depend on the specific investment plan you choose. Some plans offer flexible withdrawals, while others have fixed tenures.' },
      { question: 'What kind of returns can I expect?', answer: 'Returns vary by plan, but we offer competitive rates up to 20% per annum on our premium investment options.' },
      { question: 'How do I track my investment?', answer: 'You can monitor your investment growth, view statements, and manage your portfolio directly through your user dashboard.' }
    ]
  }
];
