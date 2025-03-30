import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Cookie Policy | TRUSTED-ALLY | Cox's Bazar Tourism",
  description: "Our cookie policy explains how we use cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
              <p className="text-gray-600">Last Updated: March 19, 2025</p>
            </div>

            <div className="prose max-w-none text-gray-600">
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how TRUSTED-ALLY Tourism ("we", "us", or "our") uses cookies and similar
                technologies on our website. It explains what these technologies are and why we use them, as well as
                your rights to control our use of them.
              </p>
              <p>
                By using or accessing our website, you agree to this Cookie Policy. This policy may change from time to
                time, so please check back periodically to ensure you are comfortable with any changes.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
                well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, TRUSTED-ALLY Tourism) are called "first-party cookies".
                Cookies set by parties other than the website owner are called "third-party cookies". Third-party
                cookies enable third-party features or functionality to be provided on or through the website (e.g.,
                advertising, interactive content and analytics).
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Types of Cookies We Use</h2>
              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
                  They enable basic functions like page navigation and access to secure areas of the website. The
                  website cannot function properly without these cookies.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> These cookies enable the website to remember information that
                  changes the way the website behaves or looks, like your preferred language or the region you are in.
                </li>
                <li>
                  <strong>Statistics Cookies:</strong> These cookies help us understand how visitors interact with the
                  website by collecting and reporting information anonymously. They help us improve the website's
                  structure and content.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The
                  intention is to display ads that are relevant and engaging for the individual user.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Specific Cookies We Use</h2>
              <p>The specific cookies we use may include:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  <strong>Session Cookies:</strong> These are temporary cookies that are deleted when you close your
                  browser. They help us track your movements from page to page so you don't get asked for the same
                  information you've already provided during your visit.
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> These remain on your device after you close your browser, and can
                  be used to remember your preferences for when you visit again.
                </li>
                <li>
                  <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors engage with our
                  website. These cookies collect information about your use of the website, including the pages you
                  visit and links you click.
                </li>
                <li>
                  <strong>Social Media Cookies:</strong> These cookies allow you to share our content on platforms like
                  Facebook, Twitter, and Instagram.
                </li>
                <li>
                  <strong>Payment Processor Cookies:</strong> These cookies are used by our payment processing partners
                  to ensure secure transactions.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. How to Control Cookies</h2>
              <p>
                You can control and manage cookies in various ways. Please keep in mind that removing or blocking
                cookies can impact your user experience and parts of our website might no longer be fully accessible.
              </p>
              <p>
                <strong>Browser Controls:</strong>
              </p>
              <p>
                Most browsers allow you to view, manage, delete and block cookies for a website. Be aware that if you
                delete all cookies, then any preferences you have set will be lost, including the ability to opt-out
                from cookies as this function itself requires placement of an opt-out cookie on your device.
              </p>
              <p>
                <strong>Managing Analytics Cookies:</strong>
              </p>
              <p>
                You can opt-out of tracking by Google Analytics by using the Google Analytics Opt-out Browser Add-on,
                available at:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Cookie Consent</h2>
              <p>
                When you first visit our website, we ask for your consent to use cookies. You can choose to accept or
                decline cookies. If you choose to decline, some aspects of the website may not work as effectively or at
                all.
              </p>
              <p>
                You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the
                footer of our website.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Changes to Our Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
                Cookie Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
              <p>If you have any questions about our Cookie Policy, please contact us at:</p>
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

