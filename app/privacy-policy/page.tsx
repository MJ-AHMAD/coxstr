import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | TRUSTED-ALLY | Cox's Bazar Tourism",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
              <p className="text-gray-600">Last Updated: March 19, 2025</p>
            </div>

            <div className="prose max-w-none text-gray-600">
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to TRUSTED-ALLY Tourism. We respect your privacy and are committed to protecting your personal
                data. This privacy policy will inform you about how we look after your personal data when you visit our
                website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  <strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.
                </li>
                <li>
                  <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone
                  numbers.
                </li>
                <li>
                  <strong>Financial Data</strong> includes payment card details.
                </li>
                <li>
                  <strong>Transaction Data</strong> includes details about payments to and from you and other details of
                  products and services you have purchased from us.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                  and version, time zone setting and location, browser plug-in types and versions, operating system and
                  platform, and other technology on the devices you use to access this website.
                </li>
                <li>
                  <strong>Profile Data</strong> includes your username and password, purchases or orders made by you,
                  your interests, preferences, feedback and survey responses.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you use our website, products and services.
                </li>
                <li>
                  <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing
                  from us and our third parties and your communication preferences.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                  fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors and other third parties who have a business
                need to know. They will only process your personal data on our instructions and they are subject to a
                duty of confidentiality.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
                collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
                reporting requirements. We may retain your personal data for a longer period in the event of a complaint
                or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins and applications. Clicking on those
                links or enabling those connections may allow third parties to collect or share data about you. We do
                not control these third-party websites and are not responsible for their privacy statements. When you
                leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Changes to the Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <div className="mt-2 mb-8">
                <p>
                  <strong>Email:</strong> privacy@trusted-ally.com
                </p>
                <p>
                  <strong>Phone:</strong> +880 1234 567890
                </p>
                <p>
                  <strong>Address:</strong> Hotel Motel Zone, Cox's Bazar, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

