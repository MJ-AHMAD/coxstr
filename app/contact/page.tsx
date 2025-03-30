import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import TouristHomeFooter from "@/components/tourist-home-footer"

export const metadata: Metadata = {
  title: "Contact Us | TRUSTED-ALLY Tourism",
  description: "Get in touch with our team for any inquiries about Cox's Bazar travel packages and services.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-12 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're here to help with any questions about our travel services. Reach out to us through any of the
                channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Our Location</h3>
                        <p className="text-muted-foreground">01/A, Ally Street, Cox's Bazar, Chittagong, BD - 4701</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email Us</h3>
                        <a
                          href="mailto:t-ally@outlook.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          t-ally@outlook.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Call Us</h3>
                        <a
                          href="tel:+8801892051303"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +880 1892051303
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Office Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                      aria-label="Facebook"
                    >
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
                    <a
                      href="#"
                      className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                      aria-label="Instagram"
                    >
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
                    <a
                      href="#"
                      className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                      aria-label="Twitter"
                    >
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
                    <a
                      href="#"
                      className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                      aria-label="LinkedIn"
                    >
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59391.91542893424!2d91.9594573!3d21.4272554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1710861234567!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="TRUSTED-ALLY Tourism Office Location"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">What are your office hours?</h3>
                  <p className="text-muted-foreground">
                    Our office is open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM.
                    We are closed on Sundays.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">How quickly do you respond to inquiries?</h3>
                  <p className="text-muted-foreground">
                    We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please
                    call us directly.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Do you offer custom travel packages?</h3>
                  <p className="text-muted-foreground">
                    Yes, we specialize in creating custom travel packages tailored to your specific needs and
                    preferences. Contact us with your requirements.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Can I book services in person?</h3>
                  <p className="text-muted-foreground">
                    You're welcome to visit our office in Cox's Bazar to discuss and book your travel arrangements in
                    person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TouristHomeFooter />
    </div>
  )
}

