import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Swiftbanq Credit Solutions Cookie Policy: how we use cookies and similar technologies on our website, your choices, and how to manage your preferences.',
  alternates: {
    canonical: 'https://swiftbanq.com/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | Swiftbanq Credit Solutions',
    description: 'How Swiftbanq uses cookies and similar technologies, and how you can manage your preferences.',
    url: 'https://swiftbanq.com/cookie-policy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Swiftbanq Credit Solutions' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-medium tracking-tight mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-medium">
          <p>
            This Cookie Policy explains how Swiftbanq Credit Solutions (&quot;Swiftbanq&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website at swiftbanq.com. It explains what these technologies are, why we use them, and your rights to control their use.
          </p>
          <p>
            By continuing to use our website, you consent to our use of cookies as described in this policy. You may withdraw or adjust your consent at any time using the methods described below.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to website owners about how their site is being used.
          </p>
          <p>
            Cookies can be &quot;session cookies&quot; (which expire when you close your browser) or &quot;persistent cookies&quot; (which remain on your device for a set period or until you delete them). We may also use similar technologies such as web beacons, pixels, and local storage, which function in a comparable way.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">2. How We Use Cookies</h2>
          <p>
            We use cookies for the following purposes:
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-3">2.1 Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the website to function properly. They enable core features such as page navigation, secure access to account areas, and form submissions. Without these cookies, services you have requested cannot be provided. These cookies do not require your consent.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Session management and authentication.</li>
            <li>Security and fraud prevention.</li>
            <li>Load balancing and server performance.</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-3">2.2 Performance and Analytics Cookies</h3>
          <p>
            These cookies collect information about how visitors use our website, for example, which pages are visited most often and whether users receive error messages. All information collected is aggregated and anonymous. We use this data to improve how our website works.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tracking page views, session duration, and user journeys.</li>
            <li>Identifying and diagnosing technical issues.</li>
            <li>Measuring the effectiveness of our content and features.</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-3">2.3 Functionality Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, more personalised features. They may also be used to provide services you have requested, such as watching a video or commenting on a blog.
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-3">2.4 Marketing and Targeting Cookies</h3>
          <p>
            These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and to help measure the effectiveness of advertising campaigns. They are usually placed by advertising networks with our permission.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Retargeting and remarketing to previous website visitors.</li>
            <li>Measuring the performance of marketing campaigns.</li>
            <li>Building profiles of user interests to serve relevant ads.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">3. Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and to deliver advertisements on and through the website. These third parties may include analytics providers, advertising networks, and social media platforms.
          </p>
          <p>
            We do not control the use of third-party cookies and cannot access them due to the way cookies work. Third-party cookies are governed by the respective privacy policies of those third parties. We encourage you to review the privacy policies of any third-party services you interact with through our website.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">4. Cookies We Use</h2>
          <p>
            The table below provides details of the specific cookies we use and the purpose of each:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 mt-4">
              <thead>
                <tr className="bg-[#FDF8E7]">
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold text-brand-dark">Cookie Name</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold text-brand-dark">Type</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold text-brand-dark">Purpose</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold text-brand-dark">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">_session</td>
                  <td className="border border-gray-200 px-4 py-3">Strictly Necessary</td>
                  <td className="border border-gray-200 px-4 py-3">Maintains your session state across page requests</td>
                  <td className="border border-gray-200 px-4 py-3">Session</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">_csrf</td>
                  <td className="border border-gray-200 px-4 py-3">Strictly Necessary</td>
                  <td className="border border-gray-200 px-4 py-3">Protects against cross-site request forgery attacks</td>
                  <td className="border border-gray-200 px-4 py-3">Session</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">_ga</td>
                  <td className="border border-gray-200 px-4 py-3">Analytics</td>
                  <td className="border border-gray-200 px-4 py-3">Google Analytics, distinguishes unique users</td>
                  <td className="border border-gray-200 px-4 py-3">2 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">_gid</td>
                  <td className="border border-gray-200 px-4 py-3">Analytics</td>
                  <td className="border border-gray-200 px-4 py-3">Google Analytics, distinguishes users within 24 hours</td>
                  <td className="border border-gray-200 px-4 py-3">24 hours</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">cookie_consent</td>
                  <td className="border border-gray-200 px-4 py-3">Functionality</td>
                  <td className="border border-gray-200 px-4 py-3">Stores your cookie consent preferences</td>
                  <td className="border border-gray-200 px-4 py-3">1 year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">5. Your Cookie Choices</h2>
          <p>
            You have the right to decide whether to accept or reject cookies (other than strictly necessary cookies). You can exercise your cookie preferences in the following ways:
          </p>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-3">5.1 Browser Settings</h3>
          <p>
            Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies, or to alert you when cookies are being sent. Please note that if you disable cookies, some parts of our website may not function correctly.
          </p>
          <p>
            Instructions for managing cookies in common browsers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data.</li>
            <li><strong>Mozilla Firefox:</strong> Options → Privacy &amp; Security → Cookies and Site Data.</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data.</li>
            <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data.</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-dark mt-8 mb-3">5.2 Opt-Out Tools</h3>
          <p>
            For analytics cookies, you may opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.
          </p>
          <p>
            For interest-based advertising, you can opt out through the Digital Advertising Alliance (DAA) or the Network Advertising Initiative (NAI) opt-out tools.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">6. Do Not Track</h2>
          <p>
            Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want your online activity tracked. Our website does not currently respond to DNT signals, as there is no consistent industry standard for how to interpret them. We will continue to monitor developments in this area.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">7. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we use cookies.
          </p>
          <p>
            If we make material changes to this policy, we will notify you by posting a prominent notice on our website or by other appropriate means.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">8. Relationship to Our Privacy Policy</h2>
          <p>
            This Cookie Policy should be read alongside our Privacy Policy, which provides further information about how we collect, use, and protect your personal data. The use of cookies may involve the processing of personal data, and our Privacy Policy explains your rights in relation to that data.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-12 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong>Email:</strong> enquiries@swiftbanq.com</li>
            <li><strong>Address:</strong> 6, Babatunde Jose Street, Off Ademola Adetokunbo V.I, Lagos, Nigeria.</li>
            <li><strong>Business Hours:</strong> Monday – Friday, 8:00am – 5:00pm WAT</li>
          </ul>

          <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
            <strong>Effective Date:</strong> May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
