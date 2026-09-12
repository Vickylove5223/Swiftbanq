'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Briefcase, TrendingUp, CheckCircle2 } from 'lucide-react';

const tabs = [
  { id: 'personal-loan', label: 'Personal Loan' },
  { id: 'investing', label: 'Investment' },
  { id: 'business-loan', label: 'Business Loan' },
];

function PersonalLoanScreen() {
  return (
    <div className="px-8 pt-6 pb-8 bg-gradient-to-b from-gray-50 to-white h-full relative">
      <h3 className="text-2xl font-bold text-gray-900 leading-tight">Hi James,</h3>
      <p className="text-gray-500 mb-8">Welcome to Swiftbanq!</p>

      <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Total Approved</p>
      <div className="text-5xl font-light text-gray-900 tracking-tight mb-2 flex items-start">
        <span className="text-3xl text-gray-400 font-sans mt-1 mr-1">₦</span>500,800<span className="text-3xl text-gray-400 mt-auto mb-1">.00</span>
      </div>
      <div className="flex items-center text-xs text-gray-500 mb-8 font-medium">
        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        UPDATED ON 3/04/2026
      </div>

      <div className="flex justify-between items-end mb-2">
        <div className="text-sm font-bold text-gray-800">
          ₦124.00 <span className="text-gray-400 font-normal">out of ₦500,800.00 fixed</span>
        </div>
        <div className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded">10%</div>
      </div>
      {/* Progress bars */}
      <div className="flex gap-0.5 mb-8">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`h-4 flex-1 rounded-sm ${i < 3 ? 'bg-[#00d084]' : 'bg-gray-100'}`}></div>
        ))}
      </div>

      <div className="flex gap-2 relative z-10">
        <button className="flex-1 bg-gray-900 text-white rounded-full py-2.5 text-sm font-semibold">Take New Loan</button>
        <button className="flex-1 bg-white border border-gray-200 text-gray-900 rounded-full py-2.5 text-sm font-semibold shadow-sm">View Loans</button>
      </div>

      {/* Info card */}
      <div className="mt-8 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative z-10 flex gap-4">
        <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0">
          <Briefcase className="w-6 h-6 text-brand-dark" />
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900 mb-1">Active Loan <span className="text-brand-dark">₦375 million</span></div>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">
            Next repayment is due in 5 days.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
}

function InvestingScreen() {
  return (
    <div className="px-8 pt-6 pb-8 bg-gradient-to-b from-gray-50 to-white h-full relative">
      <h3 className="text-2xl font-bold text-gray-900 leading-tight">Portfolio</h3>
      <p className="text-gray-500 mb-6">Your investments at a glance</p>

      <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Total Value</p>
      <div className="text-5xl font-light text-gray-900 tracking-tight mb-2 flex items-start">
        <span className="text-3xl text-gray-400 font-sans mt-1 mr-1">₦</span>8.45M<span className="text-3xl text-gray-400 mt-auto mb-1"></span>
      </div>
      <div className="flex items-center text-xs text-green-600 mb-8 font-bold">
        <TrendingUp className="w-3 h-3 mr-1" />
        +20% avg. historical return
      </div>

      {/* Investment breakdown */}
      <div className="space-y-3 mb-8">
        {[
          { label: 'Fixed Income', pct: 45, rate: '22%', color: 'bg-brand-yellow' },
          { label: 'Treasury Bills', pct: 30, rate: '17%', color: 'bg-gray-900' },
          { label: 'Money Market', pct: 25, rate: '20%', color: 'bg-green-400' },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs font-medium text-gray-600 mb-1">
              <span>{item.label}</span>
              <span>{item.rate} p.a.</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 relative z-10">
        <button className="flex-1 bg-gray-900 text-white rounded-full py-2.5 text-sm font-semibold">Invest Now</button>
        <button className="flex-1 bg-white border border-gray-200 text-gray-900 rounded-full py-2.5 text-sm font-semibold shadow-sm">View Returns</button>
      </div>

      {/* Info card */}
      <div className="mt-8 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative z-10 flex gap-4">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <TrendingUp className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900 mb-1">Maturity in <span className="text-green-600">12 days</span></div>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">
            Your Fixed Income plan matures soon.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
}

function BusinessLoanScreen() {
  return (
    <div className="px-8 pt-6 pb-8 bg-gradient-to-b from-gray-50 to-white h-full relative">
      <h3 className="text-2xl font-bold text-gray-900 leading-tight">Business Finance</h3>
      <p className="text-gray-500 mb-6">SME & Corporate Solutions</p>

      <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Credit Facility</p>
      <div className="text-5xl font-light text-gray-900 tracking-tight mb-2 flex items-start">
        <span className="text-3xl text-gray-400 font-sans mt-1 mr-1">₦</span>100M<span className="text-3xl text-gray-400 mt-auto mb-1"></span>
      </div>
      <div className="flex items-center text-xs text-gray-500 mb-6 font-medium">
        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        APPROVED, ACTIVE
      </div>

      {/* Feature list */}
      <ul className="space-y-2.5 mb-8">
        {['LPO & Contract Finance', 'Invoice Discounting', 'Bridge Finance', 'Project Syndication'].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex gap-2 relative z-10">
        <button className="flex-1 bg-gray-900 text-white rounded-full py-2.5 text-sm font-semibold">Apply Now</button>
        <button className="flex-1 bg-white border border-gray-200 text-gray-900 rounded-full py-2.5 text-sm font-semibold shadow-sm">Learn More</button>
      </div>

      {/* Info card */}
      <div className="mt-8 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative z-10 flex gap-4">
        <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0">
          <Briefcase className="w-6 h-6 text-brand-dark" />
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900 mb-1">Fast Approval <span className="text-brand-dark">48 hrs</span></div>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">
            Dedicated relationship manager assigned.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
}

export function HeroMockup() {
  const [activeTab, setActiveTab] = useState('personal-loan');

  return (
    <div className="relative z-20 w-full max-w-sm lg:max-w-md mx-4 flex flex-col h-full">
      {/* Tabs */}
      <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-sm border border-gray-100 mb-3 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-gray-900 text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mockup Card */}
      <div className="flex-1 bg-white rounded-t-[2.5rem] overflow-hidden border-none">
        {/* iOS Header */}
        <div className="flex justify-between items-center px-6 pt-4 pb-2">
          <div className="relative h-7 w-32">
            <Image src="/SBQ_Logo.svg" alt="Swiftbanq" fill className="object-contain object-left" />
          </div>
          <div className="flex flex-col justify-center gap-[3px]">
            <div className="w-4 h-[2px] bg-gray-900 rounded-full"></div>
            <div className="w-4 h-[2px] bg-gray-900 rounded-full"></div>
            <div className="w-4 h-[2px] bg-gray-900 rounded-full"></div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="h-full overflow-hidden">
          {activeTab === 'personal-loan' && <PersonalLoanScreen />}
          {activeTab === 'investing' && <InvestingScreen />}
          {activeTab === 'business-loan' && <BusinessLoanScreen />}
        </div>
      </div>
    </div>
  );
}
