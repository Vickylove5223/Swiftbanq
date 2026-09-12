
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complaints Policy',
  description: 'Swiftbanq Credit Solutions Complaints Policy — how to raise a complaint, our resolution process, timelines, and your right to escalate to relevant regulatory bodies.',
  alternates: {
    canonical: 'https://swiftbanq.com/complaints-policy',
  },
  openGraph: {
    title: 'Complaints Policy | Swiftbanq Credit Solutions',
    description: 'How to raise a complaint with Swiftbanq, our resolution process, timelines, and escalation rights.',
    url: 'https://swiftbanq.com/complaints-policy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Swiftbanq Credit Solutions' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComplaintsPolicyPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Complaints Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            Swiftbanq Credit Solutions is committed to delivering excellent service to every client. We recognise, however, that there may be occasions when we fall short of your expectations. When that happens, we want to hear from you. Your feedback helps us improve, and every complaint is taken seriously.
          </p>
          <p>
            This Complaints Policy sets out how you can raise a concern, what you can expect from us during the process, and what options are available to you if you remain dissatisfied after our review.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. Our Commitment to You</h2>
          <p>
            We are committed to handling all complaints:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Promptly, fairly, and with respect.</li>
            <li>In a transparent manner, keeping you informed at every stage.</li>
            <li>Without bias or prejudice, regardless of the nature of the complaint.</li>
            <li>In full compliance with the Lagos State Money Lenders Law and other applicable regulatory frameworks.</li>
          </ul>
          <p>
            We treat every complaint as an opportunity to learn and improve our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. What Counts as a Complaint</h2>
          <p>
            A complaint is any expression of dissatisfaction — whether written or verbal — about our products, services, staff, processes, or decisions. This includes but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Errors or delays in processing loan or financing applications.</li>
            <li>Disputes over interest rates, fees, or charges applied to your account.</li>
            <li>Concerns about the conduct or communication of our staff.</li>
            <li>Issues with loan disbursement, repayment processing, or account management.</li>
            <li>Concerns about how your personal data has been handled.</li>
            <li>Dissatisfaction with the outcome of a previous enquiry or service interaction.</li>
          </ul>
          <p>
            General enquiries or requests for information are not treated as complaints, though we handle these with the same level of care.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. How to Make a Complaint</h2>
          <p>
            You may submit a complaint through any of the following channels:
          </p>
          <ul className="list-none pl-0 space-y-2">
            <li><strong>Email:</strong> complaints@swiftbanq.com</li>
            <li><strong>Phone:</strong> Contact our dedicated customer support line during business hours (Monday – Friday, 8:00am – 5:00pm WAT).</li>
            <li><strong>In Writing:</strong> Send a written complaint to our head office address in Lagos, Nigeria.</li>
            <li><strong>Online:</strong> Use the contact form available on our website at the Contact Us page.</li>
          </ul>
          <p>
            All channels are monitored and complaints received through any of them will be logged and treated with equal priority.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Information to Include in Your Complaint</h2>
          <p>
            To help us investigate and resolve your complaint as efficiently as possible, please provide the following details when submitting:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your full name and contact details (phone number and email address).</li>
            <li>Your account number, loan reference number, or any other relevant identifier.</li>
            <li>A clear and detailed description of the issue, including what happened, when it occurred, and how it has affected you.</li>
            <li>The outcome you are seeking (e.g., correction of an error, refund, explanation, or apology).</li>
            <li>Copies of any supporting documents, correspondence, or evidence relevant to your complaint.</li>
          </ul>
          <p>
            Providing complete information upfront helps us avoid unnecessary delays in resolving your complaint.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">5. Our Resolution Process</h2>
          <p>
            Once we receive your complaint, we follow a structured process to ensure it is handled fairly and thoroughly:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Acknowledgement:</strong> We will acknowledge receipt of your complaint within 24 hours of receiving it, providing you with a reference number and the name of the team member handling your case.
            </li>
            <li>
              <strong>Investigation:</strong> A dedicated member of our customer resolution team will review all relevant records, communications, and documentation related to your complaint. Where necessary, we may contact you for additional information.
            </li>
            <li>
              <strong>Resolution:</strong> We aim to provide a full written response and resolution within 5 working days of receiving your complaint. For complex matters requiring deeper investigation, we may require up to 14 working days. In such cases, we will notify you of the extended timeline and provide regular progress updates.
            </li>
            <li>
              <strong>Outcome Communication:</strong> Our response will clearly explain our findings, the decision reached, any action we are taking, and the reasons for our conclusion. Where applicable, we will outline any remedial steps or compensation offered.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">6. Complaint Timelines Summary</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acknowledgement:</strong> Within 24 hours of receipt.</li>
            <li><strong>Standard Resolution:</strong> Within 5 working days.</li>
            <li><strong>Complex Cases:</strong> Up to 14 working days, with interim updates provided.</li>
            <li><strong>Final Response:</strong> No later than 30 calendar days from the date the complaint was received, in line with applicable consumer protection guidelines.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">7. Escalation Within Swiftbanq</h2>
          <p>
            If you are not satisfied with the initial response provided by our customer resolution team, you may request that your complaint be escalated to our senior management for a further review. To escalate, simply reply to the resolution email or contact us directly, stating that you wish to escalate and the reasons for your dissatisfaction.
          </p>
          <p>
            Senior management will conduct an independent review of your complaint and provide a final internal response within 7 working days of the escalation request.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">8. External Escalation — Regulatory Bodies</h2>
          <p>
            If you remain dissatisfied after exhausting our internal complaints process, you have the right to refer your complaint to the relevant regulatory authority. Swiftbanq Credit Solutions operates under the oversight of the Lagos State Ministry of Home Affairs and applicable Money Lenders Law authorities, and you may escalate unresolved complaints to:
          </p>
          <ul className="list-none pl-0 space-y-2">
            <li><strong>Federal Competition and Consumer Protection Commission (FCCPC)</strong></li>
            <li>Website: <span className="text-brand-dark">www.fccpc.gov.ng</span></li>
          </ul>
          <p>
            You may also seek independent legal advice if you believe your rights have been violated.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">9. Confidentiality</h2>
          <p>
            All complaints are treated with strict confidentiality. Information shared during the complaints process will only be used for the purpose of investigating and resolving your complaint, and will be handled in accordance with our Data Protection Policy and the Nigeria Data Protection Regulation (NDPR).
          </p>
          <p>
            We will not disclose your complaint details to any third party without your consent, except where required by law or regulation.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">10. Complaints Record and Continuous Improvement</h2>
          <p>
            We maintain a comprehensive record of all complaints received, including their nature, the outcome, and the time taken to resolve them. This data is reviewed regularly by our management team to identify recurring issues, systemic weaknesses, and opportunities to improve our products and services.
          </p>
          <p>
            We also maintain complaints records for reporting to relevant regulatory bodies as required under applicable consumer protection regulations.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">11. Unreasonable or Vexatious Complaints</h2>
          <p>
            While we are committed to investigating all complaints fairly, we reserve the right to decline to investigate or continue investigating a complaint that is deemed to be frivolous, vexatious, or made in bad faith. In such cases, we will notify you in writing of our decision and the reasons for it.
          </p>
          <p>
            This does not affect your right to refer the matter to relevant regulatory bodies.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">12. Contact Us</h2>
          <p>
            For all complaints and related enquiries, please reach out to our Customer Resolution Team:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Email:</strong> complaints@swiftbanq.com</li>
            <li><strong>General Enquiries:</strong> info@swiftbanq.com</li>
            <li><strong>Address:</strong> Swiftbanq Credit Solutions, Lagos, Nigeria</li>
            <li><strong>Business Hours:</strong> Monday – Friday, 8:00am – 5:00pm WAT</li>
          </ul>
          <p>
            We value your trust and are committed to resolving every concern with the seriousness and urgency it deserves.
          </p>
        </div>
      </div>
    </div>
  );
}
