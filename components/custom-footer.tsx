import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function CustomFooter() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-200 mb-4">
              Trusted Ally Tourism is dedicated to providing exceptional travel experiences in Cox's Bazar, showcasing
              the natural beauty and cultural richness of Bangladesh's premier beach destination.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations/sea-beach" className="text-gray-200 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-200 hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/accommodation" className="text-gray-200 hover:text-white transition-colors">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/services/transportation" className="text-gray-200 hover:text-white transition-colors">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="/services/guided-tours" className="text-gray-200 hover:text-white transition-colors">
                  Guided Tours
                </Link>
              </li>
              <li>
                <Link href="/services/dining" className="text-gray-200 hover:text-white transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/services/flights" className="text-gray-200 hover:text-white transition-colors">
                  Flight Booking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-200 space-y-2">
              <p>123 Beach Road, Cox's Bazar</p>
              <p>Bangladesh</p>
              <p>Phone: +880 1234 567890</p>
              <p>Email: info@trustedallytourism.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Trusted Ally Tourism. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="text-gray-300 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

