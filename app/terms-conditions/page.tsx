import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions | TRUSTED-ALLY | Cox's Bazar Tourism",
  description: "The terms and conditions governing your use of our website and services.",
}

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
              <p className="text-gray-600">Last Updated: March 19, 2025</p>
            </div>

            <div className="prose max-w-none text-gray-600">
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to TRUSTED-ALLY Tourism. These terms and conditions outline the rules and regulations for the
                use of our website and services.
              </p>
              <p>
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to
                use our website if you do not accept all of the terms and conditions stated on this page.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Definitions</h2>
              <p>
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice
                and any or all Agreements:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  "Client", "You" and "Your" refers to you, the person accessing this website and accepting the
                  Company's terms and conditions.
                </li>
                <li>"The Company", "Ourselves", "We", "Our" and "Us", refers to TRUSTED-ALLY Tourism.</li>
                <li>
                  "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or
                  ourselves.
                </li>
              </ul>
              <p>
                All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process
                of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed
                duration, or any other means, for the express purpose of meeting the Client's needs in respect of
                provision of the Company's stated services/products, in accordance with and subject to, prevailing law
                of Bangladesh.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. License to Use Website</h2>
              <p>
                Unless otherwise stated, TRUSTED-ALLY Tourism and/or its licensors own the intellectual property rights
                for all material on this website. All intellectual property rights are reserved. You may view and/or
                print pages from the website for your own personal use subject to restrictions set in these terms and
                conditions.
              </p>
              <p>You must not:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Republish material from this website</li>
                <li>Sell, rent or sub-license material from the website</li>
                <li>Reproduce, duplicate or copy material from the website</li>
                <li>Redistribute content from this website (unless content is specifically made for redistribution)</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Reservation and Payment</h2>
              <p>
                By making a reservation through our website, you are entering into a binding agreement with us. Payment
                terms and cancellation policies vary depending on the specific service or package booked. Please review
                the specific terms associated with your booking before completing your reservation.
              </p>
              <p>
                All payments made through our website are processed via secure payment gateways. We do not store your
                full credit card details on our servers.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Cancellation and Refund Policy</h2>
              <p>
                Cancellation and refund policies vary depending on the specific service, accommodation, or package
                booked. Please refer to the specific terms provided at the time of booking. Generally, the following
                rules apply:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  Cancellations made 30 days or more before the scheduled service date may be eligible for a full refund
                  minus processing fees.
                </li>
                <li>
                  Cancellations made 15-29 days before the scheduled service date may be eligible for a 50% refund.
                </li>
                <li>
                  Cancellations made 14 days or less before the scheduled service date are generally non-refundable.
                </li>
                <li>No-shows are non-refundable under any circumstances.</li>
                <li>Special cancellation terms may apply during peak seasons or for special packages.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. User Accounts</h2>
              <p>
                When you create an account with us, you guarantee that the information you provide is accurate,
                complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the
                immediate termination of your account on our service.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your account and password, including but not
                limited to the restriction of access to your computer and/or account. You agree to accept responsibility
                for any and all activities or actions that occur under your account and/or password.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Disclaimer</h2>
              <p>
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or
                implied, and hereby disclaim and negate all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
              <p>
                Further, we do not warrant or make any representations concerning the accuracy, likely results, or
                reliability of the use of the materials on our website or otherwise relating to such materials or on any
                sites linked to this site.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Limitations</h2>
              <p>
                In no event shall TRUSTED-ALLY Tourism or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on our website, even if we or an authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Bangladesh and
                you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole discretion.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">11. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="mt-2 mb-8">
                <p>
                  <strong>Email:</strong> terms@trusted-ally.com
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

