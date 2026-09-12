
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Swiftbanq Credit Solutions Privacy Policy: how we collect, use, share, and protect your personal information in compliance with the Nigeria Data Protection Regulation (NDPR).',
  alternates: {
    canonical: 'https://swiftbanq.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Swiftbanq Credit Solutions',
    description: 'How Swiftbanq collects, uses, and protects your personal data in compliance with Nigerian data protection laws.',
    url: 'https://swiftbanq.com/privacy-policy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Swiftbanq Credit Solutions' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            At Swiftbanq Credit Solutions, we are committed to protecting your privacy and handling your personal information with care and transparency. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, apply for our services, or interact with us in any capacity.
          </p>
          <p>
            This policy applies to all personal information we collect and process, whether online or offline, and should be read alongside our Data Protection Policy, which provides additional detail on our data protection practices and your rights under the Nigeria Data Protection Regulation (NDPR).
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. Information We Collect</h2>
          <p>
            We collect personal information that you provide directly to us, as well as information that is automatically collected when you use our services or visit our website. The types of information we may collect include:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Personal Identification Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full name, date of birth, and gender.</li>
            <li>National Identification Number (NIN) and Bank Verification Number (BVN).</li>
            <li>Government-issued identification documents (driver&apos;s licence, international passport, voter&apos;s card).</li>
            <li>Photographs and biometric data (where required for identity verification).</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Contact Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address, phone number, and mobile number.</li>
            <li>Residential address, postal address, and business address.</li>
            <li>Emergency contact details and next of kin information.</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Financial Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bank account details, including account numbers and banking history.</li>
            <li>Credit history, credit scores, and reports from credit bureaus.</li>
            <li>Income information, employment details, and salary records.</li>
            <li>Tax identification numbers and tax returns.</li>
            <li>Loan and repayment history with us and other financial institutions.</li>
            <li>Transaction records and payment information.</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Business Information (for SME clients)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Business registration details and Corporate Affairs Commission (CAC) documents.</li>
            <li>Financial statements, business plans, and cash flow projections.</li>
            <li>Details of business operations, industry sector, and key personnel.</li>
            <li>Business bank account information and transaction history.</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Technical and Usage Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address, browser type and version, and device identifiers.</li>
            <li>Operating system, screen resolution, and time zone settings.</li>
            <li>Website usage data, including pages visited, time spent, and click patterns.</li>
            <li>Cookies and similar tracking technologies (see our Cookie Policy for details).</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. How We Collect Information</h2>
          <p>
            We collect information through various methods:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Directly from you:</strong> When you complete application forms, contact us, or provide information during the onboarding process.</li>
            <li><strong>From third parties:</strong> Including credit bureaus, employers, banks, and other financial institutions (with your consent).</li>
            <li><strong>Automatically:</strong> Through cookies, web beacons, and analytics tools when you visit our website.</li>
            <li><strong>From public sources:</strong> Such as business registries, court records, and regulatory databases.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. How We Use Your Information</h2>
          <p>
            We use your personal information for the following purposes:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Service Provision</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing and evaluating loan and financing applications.</li>
            <li>Conducting credit assessments and risk evaluations.</li>
            <li>Managing your account and any active credit facilities.</li>
            <li>Processing payments and managing repayment schedules.</li>
            <li>Providing customer support and responding to enquiries.</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Legal and Regulatory Compliance</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verifying your identity and conducting Know Your Customer (KYC) checks.</li>
            <li>Complying with Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) requirements.</li>
            <li>Meeting reporting obligations to regulatory authorities.</li>
            <li>Responding to legal requests and court orders.</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Risk Management and Security</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Detecting, investigating, and preventing fraud and financial crime.</li>
            <li>Monitoring transactions for suspicious activity.</li>
            <li>Protecting the security and integrity of our systems and services.</li>
            <li>Conducting internal audits and risk assessments.</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Communication and Marketing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sending service-related notifications and account updates.</li>
            <li>Providing information about new products and services (with your consent).</li>
            <li>Conducting customer satisfaction surveys and market research.</li>
            <li>Personalising your experience with our services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Legal Basis for Processing</h2>
          <p>
            We process your personal information based on the following legal grounds:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent:</strong> Where you have given clear consent for specific processing activities.</li>
            <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract with you.</li>
            <li><strong>Legal obligation:</strong> Where we are required to process your data to comply with legal or regulatory requirements.</li>
            <li><strong>Legitimate interests:</strong> Where processing is necessary for our legitimate business interests, provided this does not override your fundamental rights and freedoms.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">5. Data Security</h2>
          <p>
            We implement comprehensive security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Our security measures include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Encryption:</strong> All data transmission is protected using industry-standard SSL/TLS encryption.</li>
            <li><strong>Access controls:</strong> Strict access controls ensure that only authorised personnel can access personal data on a need-to-know basis.</li>
            <li><strong>Multi-factor authentication:</strong> Enhanced authentication measures for system access.</li>
            <li><strong>Regular security audits:</strong> Periodic assessments to identify and address potential vulnerabilities.</li>
            <li><strong>Staff training:</strong> Regular training for all employees on data protection and security best practices.</li>
            <li><strong>Incident response:</strong> Documented procedures for responding to data breaches and security incidents.</li>
          </ul>
          <p>
            While we implement robust security measures, no system is completely secure. We encourage you to protect your account credentials and notify us immediately of any suspected unauthorised access.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">6. Sharing Your Information</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties for marketing purposes. However, we may share your information with the following categories of recipients:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Regulatory and Government Bodies</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Applicable financial regulators.</li>
            <li>National Information Technology Development Agency (NITDA).</li>
            <li>Law enforcement agencies and courts (when legally required).</li>
            <li>Tax authorities and other government agencies.</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Financial Services Partners</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Credit bureaus for credit reporting and assessment purposes.</li>
            <li>Banks and payment processors for transaction processing.</li>
            <li>Insurance companies (for asset-backed financing).</li>
            <li>Debt collection agencies (in case of default).</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mt-8 mb-3">Service Providers</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Technology providers for system hosting and maintenance.</li>
            <li>Identity verification and KYC service providers.</li>
            <li>Professional advisors, including lawyers, auditors, and consultants.</li>
            <li>Marketing and communications service providers (with your consent).</li>
          </ul>

          <p>
            All third parties with whom we share your information are required to maintain appropriate security measures and use your information only for the specified purposes.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">7. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including satisfying legal, regulatory, and business requirements. Our retention periods include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Active customer data:</strong> For the duration of your relationship with us plus seven (7) years after closure.</li>
            <li><strong>KYC and identity records:</strong> Minimum of five (5) years after the end of the business relationship.</li>
            <li><strong>Transaction records:</strong> Seven (7) years from the date of the transaction.</li>
            <li><strong>Marketing communications:</strong> Until you withdraw consent or up to three (3) years of inactivity.</li>
            <li><strong>Website usage data:</strong> Up to two (2) years for analytics purposes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">8. Your Rights</h2>
          <p>
            Under the Nigeria Data Protection Regulation (NDPR), you have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Right to erasure:</strong> Request deletion of your personal data (subject to legal retention requirements).</li>
            <li><strong>Right to restrict processing:</strong> Request limitation of how we process your data.</li>
            <li><strong>Right to data portability:</strong> Request your data in a portable format.</li>
            <li><strong>Right to object:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
            <li><strong>Right to withdraw consent:</strong> Withdraw consent for processing where consent is the legal basis.</li>
          </ul>
          <p>
            To exercise these rights, please contact our Data Protection Officer at dpo@swiftbanq.com. We will respond to your request within 30 days.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">9. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar technologies to enhance your browsing experience and analyse website usage. We use:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential cookies:</strong> Necessary for website functionality.</li>
            <li><strong>Analytics cookies:</strong> To understand how visitors use our website.</li>
            <li><strong>Preference cookies:</strong> To remember your settings and preferences.</li>
            <li><strong>Marketing cookies:</strong> To deliver relevant advertisements (with your consent).</li>
          </ul>
          <p>
            You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">10. International Transfers</h2>
          <p>
            We may transfer your personal data outside Nigeria to service providers or business partners. When we do so, we ensure appropriate safeguards are in place, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contractual clauses requiring equivalent data protection standards.</li>
            <li>Verification that the receiving country has adequate data protection laws.</li>
            <li>Implementation of additional security measures where necessary.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Update the effective date at the top of this policy.</li>
            <li>Notify you via email or through our website.</li>
            <li>Obtain your consent where required by law.</li>
          </ul>
          <p>
            We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">12. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Data Protection Officer:</strong> dpo@swiftbanq.com</li>
            <li><strong>General Enquiries:</strong> info@swiftbanq.com</li>
            <li><strong>Address:</strong> Swiftbanq Credit Solutions, Lagos, Nigeria</li>
            <li><strong>Business Hours:</strong> Monday – Friday, 8:00am – 5:00pm WAT</li>
          </ul>
          <p>
            You also have the right to lodge a complaint with the National Information Technology Development Agency (NITDA) if you believe your privacy rights have been violated.
          </p>
        </div>
      </div>
    </div>
  );
}
