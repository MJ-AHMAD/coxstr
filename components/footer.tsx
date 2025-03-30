"use client"

import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-bold text-xl text-primary">TRUSTED-ALLY</div>
            <p className="text-muted-foreground">
              Together Towards a Brighter Future. Creating a peaceful and equitable world where everyone thrives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/site-map" className="hover:text-primary transition-colors">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="font-medium text-lg">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>01/A, Ally Street, Cox's Bazar, Chittagong, BD - 4701</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:t-ally@outlook.com" className="hover:text-primary transition-colors">
                  t-ally@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+8801892051303" className="hover:text-primary transition-colors">
                  +880 1892051303
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-medium text-lg">Newsletter</h3>
            <p className="text-muted-foreground">Stay up to date with our latest news and updates.</p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="mt-2 w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-muted-foreground border-t pt-6">
          &copy; {new Date().getFullYear()} TRUSTED-ALLY. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

