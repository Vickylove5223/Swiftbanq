'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const SERVICES = [
  { value: 'sme', label: 'SME Financing', desc: 'LPO, Invoice Discounting, Contract & Bridge Finance' },
  { value: 'asset', label: 'Asset Financing', desc: 'Vehicles, equipment, machinery & more' },
  { value: 'personal', label: 'Personal Loan', desc: 'For salary earners and professionals' },
  { value: 'treasury', label: 'Investment', desc: 'Invest and earn 12%–20% per annum' },
  { value: 'equipment', label: 'Equipment Financing', desc: 'Office equipment, laptops, machinery & more' },
];

const AMOUNTS = [
  '₦100,000 – ₦500,000',
  '₦500,000 – ₦1,000,000',
  '₦1,000,000 – ₦5,000,000',
  '₦5,000,000 – ₦20,000,000',
  '₦20,000,000+',
];

export function ApplyPageForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: '',
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    amount: '',
    message: '',
  });

  const isBusiness = form.service === 'sme' || form.service === 'asset' || form.service === 'equipment';

  function set(field: keyof typeof form, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
        <div className="bg-white rounded-3xl p-12 max-w-lg w-full text-center shadow-sm">
          <div className="w-20 h-20 rounded-full bg-brand-yellow flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-brand-dark" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-brand-dark mb-3">Application Received!</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Thank you, {form.fullName.split(' ')[0]}. Our team will review your application and reach out within <strong className="text-brand-dark">24 hours</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-8 py-3 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow/90 transition-colors"
            >
              Back to Home
            </Link>
            <a
              href="https://wa.me/2347086429380?text=Hi%20Swiftbanq!%20I%20just%20submitted%20an%20application%20online%20and%20wanted%20to%20follow%20up."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-gray-300 text-brand-dark font-medium hover:bg-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          
          <h1 className="text-4xl md:text-5xl font-heading font-medium text-brand-dark tracking-tight leading-[1.1] mb-4">
            Start your application
          </h1>
          <p className="text-gray-500 text-lg">
            Fill in the details below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-3 mb-10" aria-label="Application progress">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step >= s ? 'bg-brand-dark text-white' : 'bg-gray-200 text-gray-400'
                }`}
                aria-current={step === s ? 'step' : undefined}
              >
                {step > s ? <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> : s}
              </div>
              <span className={`text-sm font-medium hidden sm:block ${step >= s ? 'text-brand-dark' : 'text-gray-400'}`}>
                {s === 1 ? 'Service & Amount' : 'Your Details'}
              </span>
              {s < 2 && <div className={`w-12 h-0.5 ${step > s ? 'bg-brand-dark' : 'bg-gray-200'}`} aria-hidden="true" />}
            </div>
          ))}
        </div>

        {/* Form card */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm" aria-label="Loan application form">

          {step === 1 && (
            <div className="space-y-6">
              <fieldset>
                <legend className="block text-sm font-bold text-brand-dark mb-3">
                  Which service are you interested in?
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => set('service', s.value)}
                      aria-pressed={form.service === s.value}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${
                        form.service === s.value
                          ? 'border-brand-dark bg-brand-yellow/10'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 mt-0.5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
                          form.service === s.value
                            ? 'bg-brand-yellow border-brand-dark'
                            : 'bg-white border-gray-300'
                        }`}>
                          {form.service === s.value && (
                            <svg className="w-3 h-3 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-brand-dark text-sm mb-1">{s.label}</div>
                          <div className="text-gray-400 text-xs leading-snug">{s.desc}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="block text-sm font-bold text-brand-dark mb-3">
                  {form.service === 'treasury' ? 'Investment amount' : 'Loan amount needed'}{' '}
                 
                </legend>
                <div className="flex flex-wrap gap-2">
                  {AMOUNTS.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => set('amount', a)}
                      aria-pressed={form.amount === a}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                        form.amount === a
                          ? 'bg-brand-dark text-white border-brand-dark'
                          : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400'
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </fieldset>

              <button
                type="button"
                disabled={!form.service || !form.amount}
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-full bg-brand-yellow text-brand-dark font-bold text-base hover:bg-brand-yellow/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              {/* Summary chip */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/30 mb-2">
                <div className="flex-1">
                  <span className="font-bold text-brand-dark text-sm">
                    {SERVICES.find(s => s.value === form.service)?.label}
                  </span>
                  <span className="text-gray-500 text-sm"> · {form.amount}</span>
                </div>
                <button type="button" onClick={() => setStep(1)} className="text-xs text-gray-400 underline hover:text-brand-dark">
                  Change
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="fullName" className="block text-sm font-bold text-brand-dark mb-2">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    required
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Chinedu Okafor"
                    value={form.fullName}
                    onChange={e => set('fullName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-dark transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-brand-dark mb-2">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    placeholder="080XXXXXXXX"
                    value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-dark transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-brand-dark mb-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-dark transition-colors text-base"
                  />
                </div>

                {isBusiness && (
                  <div className="sm:col-span-2">
                    <label htmlFor="businessName" className="block text-sm font-bold text-brand-dark mb-2">
                      Business name
                    </label>
                    <input
                      id="businessName"
                      required
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. TechPro Solutions Ltd"
                      value={form.businessName}
                      onChange={e => set('businessName', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-dark transition-colors text-base"
                    />
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-bold text-brand-dark mb-2">
                    Tell us more <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Briefly describe your purpose or any additional details..."
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-dark transition-colors text-base resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-full border border-gray-300 text-brand-dark font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 rounded-full bg-brand-yellow text-brand-dark font-bold text-base hover:bg-brand-yellow/90 transition-colors"
                >
                  Submit Application
                </button>
              </div>

              <p className="text-xs text-gray-400 text-center pt-1">
                By submitting you agree to our{' '}
                <Link href="/privacy-policy" className="underline hover:text-brand-dark">Privacy Policy</Link>.
              </p>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}
