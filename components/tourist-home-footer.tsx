import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function TouristHomeFooter() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-bold text-xl text-primary">Trusted Ally</div>
            <p className="text-muted-foreground">
              A comprehensive management system for Cox's Bazar district, providing information and services across
              various sectors.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Main Hubs</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/tourist-home" className="hover:text-primary transition-colors">
                  Tourist Hub
                </Link>
              </li>
              <li>
                <Link href="/educational-hub" className="hover:text-primary transition-colors">
                  Education Hub
                </Link>
              </li>
              <li>
                <Link href="/economic-hub" className="hover:text-primary transition-colors">
                  Economic Hub
                </Link>
              </li>
              <li>
                <Link href="/climate-hub" className="hover:text-primary transition-colors">
                  Climate Hub
                </Link>
              </li>
              <li>
                <Link href="/social-initiatives" className="hover:text-primary transition-colors">
                  Social Initiatives
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Other Hubs</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Health Hub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Marine Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">District Administration Office</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Cox's Bazar, Bangladesh</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@trustedally.com" className="hover:text-primary transition-colors">
                  info@trustedally.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+8801322371643" className="hover:text-primary transition-colors">
                  +880 1322371643
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-muted-foreground border-t pt-6">
          © 2025 Trusted Ally - Cox's Bazar District Management. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

