import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Travel Policy | TRUSTED-ALLY | Cox's Bazar Tourism",
  description: "Our travel policy guidelines for a safe and enjoyable travel experience.",
}

export default function TravelPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Travel Policy</h1>
              <p className="text-gray-600">Last Updated: March 19, 2025</p>
            </div>

            <div className="prose max-w-none text-gray-600">
              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
              <p>
                At TRUSTED-ALLY Tourism, we are committed to providing you with a safe, comfortable, and enjoyable
                travel experience. This Travel Policy outlines important information, guidelines, and recommendations
                for travelers using our services for trips to Cox's Bazar and surrounding areas.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Booking and Reservations</h2>
              <p>To ensure a smooth booking process, please note the following:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  We recommend booking your travel arrangements at least 2 weeks in advance, especially during peak
                  seasons (December to February and during major holidays).
                </li>
                <li>All bookings are subject to availability and confirmation.</li>
                <li>
                  For group bookings (more than 10 people), please contact our customer service team directly for
                  special arrangements.
                </li>
                <li>
                  Special requirements (dietary restrictions, accessibility needs, etc.) should be communicated at the
                  time of booking.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Required Documents</h2>
              <p>Please ensure you have the following documents when traveling:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Valid government-issued photo ID for domestic travel.</li>
                <li>
                  For international visitors, a valid passport with at least 6 months validity from the date of entry.
                </li>
                <li>Visa documentation if applicable for foreign nationals.</li>
                <li>Booking confirmation documents from TRUSTED-ALLY Tourism.</li>
                <li>Payment receipts for all services booked.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Health and Safety</h2>
              <p>Your health and safety are our top priorities:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  We recommend that all travelers have appropriate travel insurance covering health emergencies, trip
                  cancellations, and personal belongings.
                </li>
                <li>
                  Travelers with pre-existing medical conditions should consult their healthcare provider before
                  traveling.
                </li>
                <li>We advise carrying a basic first-aid kit and any personal medications you may need.</li>
                <li>Our guides and drivers are trained in basic first aid and emergency protocols.</li>
                <li>
                  Clean drinking water is provided on all our tours. We recommend avoiding tap water and consuming only
                  bottled or filtered water.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Transportation Policies</h2>
              <p>For a comfortable journey:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  Please arrive at least 30 minutes before the scheduled departure time for all transportation services.
                </li>
                <li>
                  Maximum luggage allowance is 20kg per person for standard packages. Additional charges may apply for
                  excess baggage.
                </li>
                <li>Smoking is not permitted in any of our vehicles.</li>
                <li>Seat belts must be worn at all times when available.</li>
                <li>Our vehicles undergo regular maintenance and safety checks.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Accommodation Policies</h2>
              <p>For a pleasant stay:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Standard check-in time is 2:00 PM and check-out time is 12:00 PM for most accommodations.</li>
                <li>
                  Early check-in and late check-out can be requested but are subject to availability and may incur
                  additional charges.
                </li>
                <li>
                  Room types are guaranteed based on your booking, but specific room requests (view, floor level, etc.)
                  are subject to availability.
                </li>
                <li>Most hotels require a security deposit at check-in, typically refundable upon checkout.</li>
                <li>Respect quiet hours, typically from 10:00 PM to 6:00 AM, in all accommodations.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Tour and Activity Guidelines</h2>
              <p>To make the most of your experiences:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Arrive 15 minutes before the scheduled start time for all tours and activities.</li>
                <li>
                  Wear appropriate clothing and footwear for the specific activity. We will provide guidelines for each
                  tour.
                </li>
                <li>Follow all safety instructions provided by guides and instructors.</li>
                <li>Respect wildlife, cultural sites, and local communities during all tours.</li>
                <li>Some activities may have age, health, or skill restrictions for safety reasons.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Environmental Responsibility</h2>
              <p>Help us protect the beautiful environment of Cox's Bazar:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Follow the "leave no trace" principle - take only photos, leave only footprints.</li>
                <li>
                  Dispose of waste properly in designated bins. We encourage waste segregation when facilities are
                  available.
                </li>
                <li>Avoid single-use plastics where possible. We provide refillable water bottles on most tours.</li>
                <li>Respect marine life and coral reefs by not touching or stepping on them.</li>
                <li>Use biodegradable sunscreen when swimming to protect the marine ecosystem.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Cultural Respect</h2>
              <p>Show respect for local culture and customs:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>
                  Dress modestly when visiting religious sites. Cover shoulders and knees, and remove footwear when
                  required.
                </li>
                <li>Ask permission before photographing local people.</li>
                <li>Learn a few basic phrases in Bengali/Bangla - locals appreciate the effort.</li>
                <li>Respect local customs and traditions.</li>
                <li>Support local businesses and artisans where possible.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. Emergency Procedures</h2>
              <p>In case of emergency:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Our 24-hour emergency contact number is +880 1234 567890.</li>
                <li>All tour guides carry first aid kits and are trained in emergency procedures.</li>
                <li>Important local emergency numbers: Police: 999, Ambulance: 999, Fire: 999.</li>
                <li>The nearest hospital to Cox's Bazar tourist area is Cox's Bazar Sadar Hospital.</li>
                <li>In case of natural disasters, follow instructions from local authorities and our staff.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">11. Changes to This Policy</h2>
              <p>
                We may update our Travel Policy from time to time. We will notify you of any changes by posting the new
                Travel Policy on this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">12. Contact Us</h2>
              <p>If you have any questions about our Travel Policy, please contact us at:</p>
              <div className="mt-2 mb-8">
                <p>
                  <strong>Email:</strong> travel@trusted-ally.com
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

