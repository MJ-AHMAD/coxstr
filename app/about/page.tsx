import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import TouristHomeFooter from "@/components/tourist-home-footer"

export const metadata: Metadata = {
  title: "About Us | T-ALLY Cox's Bazar Tourism",
  description: "Learn about TRUSTED-ALLY, your premier travel partner for Cox's Bazar tourism.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Cox's Bazar beach aerial view"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About TRUSTED-ALLY</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner for unforgettable experiences in Cox's Bazar and beyond
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4">
                  Founded in 2015, TRUSTED-ALLY began with a simple mission: to showcase the breathtaking beauty of
                  Cox's Bazar to the world while supporting local communities and preserving the natural environment.
                </p>
                <p className="mb-4">
                  What started as a small team of passionate local guides has grown into Bangladesh's premier tourism
                  company for Cox's Bazar, serving thousands of satisfied travelers each year from across Bangladesh and
                  around the world.
                </p>
                <p>
                  Our deep connection to the region, commitment to authentic experiences, and dedication to responsible
                  tourism have made us the trusted choice for travelers seeking to explore the wonders of Cox's Bazar.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="TRUSTED-ALLY team on the beach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-target"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Our Mission</h3>
                <p className="text-gray-700">
                  To provide exceptional travel experiences that showcase the natural beauty, rich culture, and warm
                  hospitality of Cox's Bazar while promoting sustainable tourism practices that benefit local
                  communities and preserve the environment for future generations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Our Vision</h3>
                <p className="text-gray-700">
                  To be recognized globally as the leading tourism provider in Bangladesh, setting the standard for
                  excellence in service, sustainability, and authentic cultural experiences. We envision a future where
                  Cox's Bazar is celebrated worldwide as a premier destination for responsible tourism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart-handshake"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                    <path d="m18 15-2-2" />
                    <path d="m15 18-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Authenticity</h3>
                <p className="text-gray-700">
                  We provide genuine experiences that reflect the true culture, traditions, and lifestyle of Cox's Bazar
                  and its people.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-leaf"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                <p className="text-gray-700">
                  We are committed to environmentally responsible practices that protect the natural beauty of Cox's
                  Bazar for future generations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We strive for the highest standards in every aspect of our service, from accommodations to guided
                  tours and customer support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Rahima Khan",
                  position: "Founder & CEO",
                  bio: "With over 15 years in tourism, Rahima's vision and leadership have made TRUSTED-ALLY the premier tourism company in Cox's Bazar.",
                },
                {
                  name: "Kamal Ahmed",
                  position: "Head of Operations",
                  bio: "Kamal ensures that every tour, accommodation, and experience meets our high standards of quality and sustainability.",
                },
                {
                  name: "Nusrat Jahan",
                  position: "Lead Tour Guide",
                  bio: "Born and raised in Cox's Bazar, Nusrat's deep knowledge of local culture and hidden gems creates unforgettable experiences.",
                },
                {
                  name: "Farhan Rahman",
                  position: "Customer Relations Manager",
                  bio: "Farhan's dedication to customer satisfaction ensures that every traveler's needs are met with care and attention.",
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-64 relative">
                    <Image
                      src={`/placeholder.svg?height=400&width=300`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.position}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose TRUSTED-ALLY</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Local Expertise",
                  description:
                    "Our team consists of local experts who know every corner of Cox's Bazar and can provide insider knowledge.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map"
                    >
                      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                      <line x1="9" x2="9" y1="3" y2="18" />
                      <line x1="15" x2="15" y1="6" y2="21" />
                    </svg>
                  ),
                },
                {
                  title: "Personalized Service",
                  description: "We tailor each experience to meet your specific interests, preferences, and needs.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user-check"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <polyline points="16 11 18 13 22 9" />
                    </svg>
                  ),
                },
                {
                  title: "Responsible Tourism",
                  description:
                    "We prioritize eco-friendly practices and support local communities in all our operations.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                },
                {
                  title: "24/7 Support",
                  description:
                    "Our dedicated customer service team is available around the clock to assist with any needs or concerns.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-headphones"
                    >
                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-blue-800 rounded-lg">
                  <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Cox's Bazar?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let us help you create memories that will last a lifetime. Contact us today to start planning your perfect
              getaway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/#contact"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <TouristHomeFooter />
    </div>
  )
}

