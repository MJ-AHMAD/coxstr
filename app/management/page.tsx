import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Management | Cox's Bazar Tourism",
  description:
    "Learn about our management team, organizational structure, and the people who make Cox's Bazar Tourism the leading travel service provider in the region.",
}

export default function ManagementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Management team meeting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Management</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the dedicated professionals who lead our organization and ensure exceptional travel experiences for our
            customers.
          </p>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Leadership Vision</h2>
            <p className="text-gray-700 mb-4">
              At Cox's Bazar Tourism, our leadership team is committed to providing exceptional travel experiences while
              promoting sustainable tourism practices that benefit local communities and preserve the natural beauty of
              Cox's Bazar.
            </p>
            <p className="text-gray-700 mb-4">Our management philosophy centers around three core principles:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Customer-centric approach in all our services</li>
              <li>Environmental responsibility and sustainable tourism</li>
              <li>Community engagement and economic development</li>
            </ul>
            <Button asChild>
              <Link href="/about">Learn More About Our Mission</Link>
            </Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=600&width=800" alt="Leadership vision" fill className="object-cover" />
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Executive Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Executive Leadership</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((executive) => (
            <Card key={executive.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image src={executive.image || "/placeholder.svg"} alt={executive.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{executive.name}</CardTitle>
                <CardDescription>{executive.position}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{executive.bio}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/management/team/${executive.id}`}>Full Profile</Link>
                </Button>
                <div className="flex space-x-2">
                  {executive.socialLinks.map((social) => (
                    <Button key={social.platform} variant="ghost" size="icon" asChild>
                      <Link href={social.url} target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">{social.platform}</span>
                        {social.icon}
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Organizational Structure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Organizational Structure</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="relative h-96 md:h-[32rem]">
            <Image
              src="/placeholder.svg?height=1000&width=1600"
              alt="Organizational chart"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-center text-gray-600 mt-4">
            Our organizational structure is designed to ensure efficient operations and clear communication channels.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {departments.map((dept) => (
            <AccordionItem key={dept.id} value={dept.id}>
              <AccordionTrigger className="text-xl font-medium">{dept.name}</AccordionTrigger>
              <AccordionContent>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">{dept.description}</p>
                  <h4 className="font-semibold text-lg mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {dept.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <h4 className="font-semibold text-lg mb-2">Department Head:</h4>
                    <div className="flex items-center">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={dept.head.image || "/placeholder.svg"}
                          alt={dept.head.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{dept.head.name}</p>
                        <p className="text-gray-600">{dept.head.title}</p>
                        <p className="text-gray-600">{dept.head.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Management Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Management Approach</h2>

        <Tabs defaultValue="philosophy" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
            <TabsTrigger value="values">Core Values</TabsTrigger>
            <TabsTrigger value="practices">Best Practices</TabsTrigger>
            <TabsTrigger value="innovation">Innovation</TabsTrigger>
          </TabsList>
          <TabsContent value="philosophy" className="p-6 bg-white rounded-lg shadow mt-4">
            <h3 className="text-2xl font-semibold mb-4">Management Philosophy</h3>
            <p className="text-gray-700 mb-4">
              Our management philosophy is built on transparency, accountability, and empowerment. We believe in
              creating an environment where every team member can contribute their best work while growing
              professionally.
            </p>
            <p className="text-gray-700 mb-4">
              We practice servant leadership, where managers see their primary role as supporting their teams and
              removing obstacles to success. This approach fosters innovation, builds trust, and creates a positive work
              culture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We maintain open communication channels and share information freely across the organization.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We take ownership of our decisions and actions, learning from both successes and failures.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We trust our team members with authority and autonomy to make decisions in their areas of expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="values" className="p-6 bg-white rounded-lg shadow mt-4">
            <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value) => (
                <div key={value.title} className="flex">
                  <div className="mr-4 text-blue-600">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{value.title}</h4>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="practices" className="p-6 bg-white rounded-lg shadow mt-4">
            <h3 className="text-2xl font-semibold mb-4">Management Best Practices</h3>
            <ul className="space-y-4">
              {bestPractices.map((practice, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-xl font-medium mb-2">{practice.title}</h4>
                  <p className="text-gray-700">{practice.description}</p>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="innovation" className="p-6 bg-white rounded-lg shadow mt-4">
            <h3 className="text-2xl font-semibold mb-4">Innovation in Management</h3>
            <p className="text-gray-700 mb-6">
              We continuously evolve our management practices to stay at the forefront of the tourism industry. Our
              innovation initiatives include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Transformation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Implementing cutting-edge technology solutions to streamline operations and enhance customer
                    experiences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Agile Methodology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Adopting agile principles for project management to increase flexibility and responsiveness to
                    market changes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Continuous Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Investing in ongoing education and skill development for all team members to foster innovation.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Collaborative Workspaces</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Creating physical and digital environments that encourage cross-functional collaboration and idea
                    sharing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Team</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-gray-500 text-sm">{member.department}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button>View All Team Members</Button>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Career Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Join Our Team</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about tourism and customer service. Explore
            our current openings and become part of our dynamic team.
          </p>
          <Button size="lg" asChild>
            <Link href="/careers">View Career Opportunities</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Mock data for the page
const executives = [
  {
    id: "john-doe",
    name: "John Doe",
    position: "Chief Executive Officer",
    bio: "With over 20 years of experience in the tourism industry, John leads our company with a vision for sustainable growth and exceptional customer experiences.",
    image: "/placeholder.svg?height=400&width=300",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "#",
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
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        ),
      },
      {
        platform: "Twitter",
        url: "#",
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
            className="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    position: "Chief Operations Officer",
    bio: "Jane oversees all operational aspects of our business, ensuring that we deliver seamless travel experiences while maintaining operational excellence.",
    image: "/placeholder.svg?height=400&width=300",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "#",
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
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "ahmed-khan",
    name: "Ahmed Khan",
    position: "Chief Financial Officer",
    bio: "Ahmed manages our financial strategy, ensuring sustainable growth while maintaining the highest standards of financial integrity and transparency.",
    image: "/placeholder.svg?height=400&width=300",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "#",
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
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        ),
      },
      {
        platform: "Twitter",
        url: "#",
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
            className="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        ),
      },
    ],
  },
]

const departments = [
  {
    id: "operations",
    name: "Operations Department",
    description:
      "The Operations Department is responsible for the day-to-day execution of our travel services, ensuring that every aspect of our customers' journeys is seamless and enjoyable.",
    responsibilities: [
      "Tour package execution and logistics",
      "Transportation coordination",
      "Accommodation management",
      "Customer service during travel",
      "Quality control and service standards",
    ],
    head: {
      name: "Sarah Johnson",
      title: "Director of Operations",
      email: "sarah.johnson@example.com",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: "marketing",
    name: "Marketing & Sales Department",
    description:
      "Our Marketing & Sales Department develops and implements strategies to promote Cox's Bazar as a premier travel destination and our company as the leading service provider in the region.",
    responsibilities: [
      "Brand development and management",
      "Digital marketing campaigns",
      "Content creation and social media management",
      "Sales strategy and execution",
      "Market research and competitive analysis",
    ],
    head: {
      name: "Michael Chen",
      title: "Head of Marketing & Sales",
      email: "michael.chen@example.com",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: "customer-service",
    name: "Customer Service Department",
    description:
      "The Customer Service Department is dedicated to providing exceptional support to our clients before, during, and after their travel experiences with us.",
    responsibilities: [
      "Pre-booking inquiries and information",
      "Booking assistance and modifications",
      "Complaint resolution and service recovery",
      "Post-trip follow-up and feedback collection",
      "Customer loyalty program management",
    ],
    head: {
      name: "Priya Patel",
      title: "Customer Service Manager",
      email: "priya.patel@example.com",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: "finance",
    name: "Finance & Administration Department",
    description:
      "This department manages all financial aspects of our business, ensuring fiscal responsibility, compliance with regulations, and efficient administrative operations.",
    responsibilities: [
      "Budgeting and financial planning",
      "Accounting and bookkeeping",
      "Payroll and benefits administration",
      "Regulatory compliance",
      "Vendor management and procurement",
    ],
    head: {
      name: "Robert Kim",
      title: "Finance Director",
      email: "robert.kim@example.com",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: "hr",
    name: "Human Resources Department",
    description:
      "Our HR Department focuses on recruiting, developing, and retaining the talented individuals who make our company successful.",
    responsibilities: [
      "Recruitment and onboarding",
      "Training and professional development",
      "Performance management",
      "Employee relations and engagement",
      "Organizational culture development",
    ],
    head: {
      name: "Fatima Rahman",
      title: "HR Director",
      email: "fatima.rahman@example.com",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
]

const coreValues = [
  {
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and ethical standards that exceed industry norms.",
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
        className="lucide lucide-shield"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, constantly raising the bar for quality in the tourism industry.",
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
        className="lucide lucide-star"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We embrace change and continuously seek new ways to improve our services and create memorable experiences for our customers.",
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
        className="lucide lucide-lightbulb"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description:
      "We are committed to environmentally responsible tourism that preserves the natural beauty of Cox's Bazar for future generations.",
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
        className="lucide lucide-leaf"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "We believe in giving back to the local communities that make Cox's Bazar special, supporting economic development and cultural preservation.",
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
        className="lucide lucide-users"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    description:
      "We put our customers at the center of everything we do, tailoring our services to meet their unique needs and exceed their expectations.",
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
        className="lucide lucide-heart"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
]

const bestPractices = [
  {
    title: "Data-Driven Decision Making",
    description:
      "We collect and analyze data from all aspects of our operations to make informed decisions that improve customer satisfaction and business performance.",
  },
  {
    title: "Continuous Improvement Process",
    description:
      "We implement a structured approach to identifying, analyzing, and improving our services and internal processes on an ongoing basis.",
  },
  {
    title: "Cross-Functional Collaboration",
    description:
      "We break down silos between departments, encouraging collaboration and knowledge sharing to solve complex problems and innovate.",
  },
  {
    title: "Regular Performance Reviews",
    description:
      "We conduct thorough, fair, and constructive performance evaluations that focus on both achievements and areas for development.",
  },
  {
    title: "Mentorship Programs",
    description:
      "We pair experienced team members with newer employees to facilitate knowledge transfer, professional growth, and cultural integration.",
  },
]

const teamMembers = [
  {
    id: "tm1",
    name: "David Wilson",
    position: "Tour Operations Manager",
    department: "Operations",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "tm2",
    name: "Sophia Rahman",
    position: "Marketing Specialist",
    department: "Marketing & Sales",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "tm3",
    name: "Carlos Mendez",
    position: "Customer Service Representative",
    department: "Customer Service",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "tm4",
    name: "Aisha Begum",
    position: "Financial Analyst",
    department: "Finance",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "tm5",
    name: "James Lee",
    position: "HR Specialist",
    department: "Human Resources",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "tm6",
    name: "Nadia Islam",
    position: "Tour Guide Coordinator",
    department: "Operations",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "tm7",
    name: "Thomas Brown",
    position: "Digital Content Creator",
    department: "Marketing & Sales",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "tm8",
    name: "Leila Hassan",
    position: "Booking Specialist",
    department: "Customer Service",
    image: "/placeholder.svg?height=300&width=300",
  },
]

