import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Protection Policy',
  description: 'Swiftbanq Credit Solutions Data Protection Policy: how we collect, process, store, and protect your personal and financial information under the Nigeria Data Protection Regulation (NDPR).',
  alternates: {
    canonical: 'https://swiftbanq.com/data-protection',
  },
  openGraph: {
    title: 'Data Protection Policy | Swiftbanq Credit Solutions',
    description: 'How Swiftbanq processes and protects your data under the NDPR. Your rights, our obligations, and how to contact our DPO.',
    url: 'https://swiftbanq.com/data-protection',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Swiftbanq Credit Solutions' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataProtectionPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Data Protection</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            At Swiftbanq Credit Solutions, protecting your personal and financial data is a core responsibility we take seriously. This Data Protection Policy outlines how we collect, process, store, and safeguard your information, and explains the rights you hold over your data. It applies to all individuals who interact with our website, products, and services.
          </p>
          <p>
            This policy is governed by the Nigeria Data Protection Regulation (NDPR) issued by the National Information Technology Development Agency (NITDA), as well as any other applicable data protection laws in Nigeria.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. Our Commitment to Data Protection</h2>
          <p>
            Swiftbanq Credit Solutions is fully committed to upholding the principles of lawful, fair, and transparent data processing. We collect only the data that is necessary for the purposes for which it is processed, and we ensure that your information is kept accurate, secure, and confidential at all times.
          </p>
          <p>
            Our data protection practices are guided by the following principles:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lawfulness, fairness, and transparency in all data processing activities.</li>
            <li>Purpose limitation: data is collected for specified, explicit, and legitimate purposes only.</li>
            <li>Data minimisation: we collect only what is necessary and relevant.</li>
            <li>Accuracy: we take reasonable steps to ensure data is kept up to date.</li>
            <li>Storage limitation: data is retained only for as long as necessary.</li>
            <li>Integrity and confidentiality: we apply appropriate technical and organisational measures to protect your data.</li>
            <li>Accountability: we take responsibility for demonstrating compliance with these principles.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. Data We Collect</h2>
          <p>
            Depending on the nature of your interaction with us, we may collect and process the following categories of personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> Full name, date of birth, gender, national identification number (NIN), Bank Verification Number (BVN), and government-issued ID details.</li>
            <li><strong>Contact Data:</strong> Email address, phone number, residential and business address.</li>
            <li><strong>Financial Data:</strong> Bank account details, credit history, income information, loan repayment records, and transaction history.</li>
            <li><strong>Business Data:</strong> Business registration details, CAC documents, financial statements, and other information relevant to SME or asset financing applications.</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, device identifiers, time zone settings, and browsing activity on our website.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services, including pages visited and actions taken.</li>
            <li><strong>Communications Data:</strong> Records of correspondence, enquiries, and feedback submitted to us.</li>
          </ul>
          <p>
            We do not knowingly collect sensitive personal data (such as health, biometric, or political data) unless it is strictly required for a specific service and you have provided explicit consent.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. How We Use Your Data</h2>
          <p>
            We process your personal data for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To assess and process loan, financing, and credit applications.</li>
            <li>To verify your identity and conduct Know Your Customer (KYC) and Anti-Money Laundering (AML) checks as required by law.</li>
            <li>To manage and administer your account and any active credit facilities.</li>
            <li>To communicate with you about your applications, transactions, and account status.</li>
            <li>To send service-related notifications, updates, and important policy changes.</li>
            <li>To improve our products, services, and website experience.</li>
            <li>To comply with legal, regulatory, and reporting obligations.</li>
            <li>To detect, investigate, and prevent fraud, financial crime, and other unlawful activities.</li>
            <li>To conduct internal analytics and business performance assessments.</li>
          </ul>
          <p>
            We will only process your data where we have a lawful basis to do so, including your consent, the performance of a contract, compliance with a legal obligation, or our legitimate business interests.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Data Security Measures</h2>
          <p>
            We implement robust technical and organisational security measures to protect your personal and financial data against unauthorised access, loss, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Encryption:</strong> All data transmitted between your device and our systems is protected using industry-standard Transport Layer Security (TLS) encryption. Sensitive data at rest is also encrypted.</li>
            <li><strong>Access Controls:</strong> Access to personal data is restricted to authorised personnel only, on a strict need-to-know basis. All staff with access to personal data are bound by confidentiality obligations.</li>
            <li><strong>Multi-Factor Authentication (MFA):</strong> We enforce multi-factor authentication for access to internal systems that handle personal data.</li>
            <li><strong>Regular Security Audits:</strong> We conduct periodic security assessments, vulnerability scans, and penetration testing to identify and address potential risks.</li>
            <li><strong>Incident Response:</strong> We maintain a documented data breach response plan to ensure swift action in the event of a security incident.</li>
            <li><strong>Staff Training:</strong> All employees handling personal data receive regular training on data protection obligations and best practices.</li>
          </ul>
          <p>
            While we take every reasonable precaution, no system is entirely immune to risk. We encourage you to protect your account credentials and notify us immediately if you suspect any unauthorised access to your information.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">5. Data Retention</h2>
          <p>
            We retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, including satisfying any legal, regulatory, accounting, or reporting requirements.
          </p>
          <p>
            In general:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data related to active loan or credit facilities is retained for the duration of the facility and for a minimum of seven (7) years after closure, in line with Nigerian financial regulations.</li>
            <li>KYC and identity verification records are retained for a minimum of five (5) years after the end of the business relationship.</li>
            <li>Website usage and technical data may be retained for up to two (2) years for analytics and security purposes.</li>
            <li>Communications and correspondence are retained for up to three (3) years unless a longer period is required by law.</li>
          </ul>
          <p>
            When data is no longer required, it is securely deleted or anonymised in accordance with our data disposal procedures.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">6. Sharing Your Data</h2>
          <p>
            We do not sell, rent, or trade your personal data to third parties. However, we may share your information with the following categories of recipients where necessary and lawful:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Regulatory and Government Bodies:</strong> Including NITDA and other authorities where required by law or regulation.</li>
            <li><strong>Credit Bureaus:</strong> For credit assessment, reporting, and verification purposes.</li>
            <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in delivering our services (e.g., cloud hosting, identity verification, payment processing), all of whom are bound by strict data processing agreements.</li>
            <li><strong>Legal and Professional Advisors:</strong> Where necessary for legal proceedings, compliance, or professional advice.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or restructuring, your data may be transferred to the relevant successor entity, subject to equivalent data protection obligations.</li>
          </ul>
          <p>
            Any third party with whom we share your data is required to handle it in accordance with applicable data protection laws and our contractual requirements.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">7. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and support our marketing activities. Cookies are small text files stored on your device when you visit our website.
          </p>
          <p>
            We use the following types of cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly. These cannot be disabled.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website so we can improve performance and content.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences to personalise your experience.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of our campaigns.</li>
          </ul>
          <p>
            You can manage or disable non-essential cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our website.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">8. Your Rights</h2>
          <p>
            Under the Nigeria Data Protection Regulation (NDPR) and applicable law, you have the following rights with respect to your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right of Access:</strong> You may request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You may request that we correct any inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure:</strong> You may request the deletion of your personal data where it is no longer necessary for the purpose it was collected, subject to legal retention obligations.</li>
            <li><strong>Right to Restriction:</strong> You may request that we limit the processing of your data in certain circumstances.</li>
            <li><strong>Right to Data Portability:</strong> You may request that we provide your data in a structured, commonly used, and machine-readable format.</li>
            <li><strong>Right to Object:</strong> You may object to the processing of your data for direct marketing or where processing is based on our legitimate interests.</li>
            <li><strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
          </ul>
          <p>
            To exercise any of these rights, please submit a written request to our Data Protection Officer. We will respond within 30 days of receiving your request. We may need to verify your identity before processing your request.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">9. Data Breach Notification</h2>
          <p>
            In the unlikely event of a personal data breach that poses a risk to your rights and freedoms, Swiftbanq Credit Solutions will notify the relevant supervisory authority (NITDA) within 72 hours of becoming aware of the breach, as required by the NDPR.
          </p>
          <p>
            Where the breach is likely to result in a high risk to your rights, we will also notify you directly without undue delay, providing details of the nature of the breach, the data affected, and the steps we are taking to address it.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">10. International Data Transfers</h2>
          <p>
            Where we transfer personal data outside Nigeria, for example, to cloud service providers or technology partners, we ensure that appropriate safeguards are in place to protect your data to a standard equivalent to that required under Nigerian law. This may include contractual clauses, data processing agreements, or other approved transfer mechanisms.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">11. Changes to This Policy</h2>
          <p>
            We may update this Data Protection Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the effective date at the top of this page and, where appropriate, notify you directly.
          </p>
          <p>
            We encourage you to review this policy periodically to stay informed about how we protect your data.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">12. Contact Our Data Protection Officer</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Data Protection Policy or the handling of your personal data, please contact our Data Protection Officer:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Email:</strong> dpo@swiftbanq.com</li>
            <li><strong>Address:</strong> Swiftbanq Credit Solutions, Lagos, Nigeria</li>
          </ul>
          <p>
            You also have the right to lodge a complaint with the National Information Technology Development Agency (NITDA) if you believe your data protection rights have been violated.
          </p>
        </div>
      </div>
    </div>
  );
}
