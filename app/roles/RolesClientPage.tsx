"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Users, UserCog, Briefcase, UserCheck, FileText, Settings, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function RolesClientPage() {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({})
  const [searchQuery, setSearchQuery] = useState("")

  const toggleRole = (roleId: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [roleId]: !prev[roleId],
    }))
  }

  const filterRoles = (roles: any[], query: string) => {
    if (!query) return roles
    return roles.filter(
      (role) =>
        role.title.toLowerCase().includes(query.toLowerCase()) ||
        role.department.toLowerCase().includes(query.toLowerCase()) ||
        role.responsibilities.some((r: string) => r.toLowerCase().includes(query.toLowerCase())),
    )
  }

  // Leadership roles
  const leadershipRoles = [
    {
      id: "director-general",
      title: "Director General",
      name: "MJ Ahmad",
      department: "Executive Leadership",
      level: "C-Suite",
      responsibilities: [
        "Provide strategic vision and leadership for the entire Cox's Bazar Tourism Project",
        "Make final decisions on major strategic initiatives and investments",
        "Represent the organization to government bodies, investors, and major partners",
        "Approve annual budgets and major expenditures",
        "Oversee the performance of all department heads",
        "Ensure compliance with all legal and regulatory requirements",
      ],
      authority: "Ultimate decision-making authority for all aspects of the project",
      reports_to: "Board of Directors",
      direct_reports: [
        "Chief Operations Officer",
        "Chief Financial Officer",
        "Chief Marketing Officer",
        "Head of Human Resources",
      ],
    },
    {
      id: "chief-operations-officer",
      title: "Chief Operations Officer",
      department: "Operations",
      level: "C-Suite",
      responsibilities: [
        "Oversee day-to-day operations of all tourism services and facilities",
        "Develop and implement operational policies and procedures",
        "Ensure service quality and customer satisfaction across all touchpoints",
        "Manage operational budgets and resource allocation",
        "Lead continuous improvement initiatives",
        "Coordinate between different operational departments",
      ],
      authority: "Decision-making authority for all operational matters",
      reports_to: "Director General",
      direct_reports: ["Operations Manager", "Customer Service Manager", "Facilities Manager"],
    },
    {
      id: "chief-financial-officer",
      title: "Chief Financial Officer",
      department: "Finance",
      level: "C-Suite",
      responsibilities: [
        "Manage all financial aspects of the Cox's Bazar Tourism Project",
        "Develop financial strategies and forecasts",
        "Oversee budgeting, accounting, and financial reporting",
        "Manage relationships with investors and financial institutions",
        "Ensure financial compliance and risk management",
        "Advise on investment decisions and capital allocation",
      ],
      authority: "Decision-making authority for all financial matters",
      reports_to: "Director General",
      direct_reports: ["Financial Controller", "Investment Manager", "Accounting Manager"],
    },
  ]

  // Advisory roles
  const advisoryRoles = [
    {
      id: "tourism-advisor",
      title: "Tourism Industry Advisor",
      department: "Advisory Board",
      level: "Senior Advisor",
      responsibilities: [
        "Provide expert guidance on tourism industry trends and best practices",
        "Advise on service development and improvement",
        "Help identify growth opportunities in the tourism sector",
        "Assist in developing strategic partnerships with industry players",
        "Provide insights on competitive positioning",
      ],
      authority: "Advisory capacity with no direct operational authority",
      reports_to: "Director General",
      commitment: "Part-time, attending quarterly advisory board meetings and available for consultation",
    },
    {
      id: "financial-advisor",
      title: "Financial Advisor",
      department: "Advisory Board",
      level: "Senior Advisor",
      responsibilities: [
        "Provide expert guidance on financial strategy and investment opportunities",
        "Advise on capital raising and financial structuring",
        "Help evaluate major investment decisions",
        "Provide insights on financial risk management",
        "Assist in developing relationships with financial institutions and investors",
      ],
      authority: "Advisory capacity with no direct operational authority",
      reports_to: "Director General",
      commitment: "Part-time, attending quarterly advisory board meetings and available for consultation",
    },
    {
      id: "local-community-advisor",
      title: "Local Community Advisor",
      department: "Advisory Board",
      level: "Senior Advisor",
      responsibilities: [
        "Represent local community interests in project planning and execution",
        "Advise on community impact and sustainability initiatives",
        "Help develop community engagement programs",
        "Provide cultural insights and local knowledge",
        "Assist in building positive relationships with local stakeholders",
      ],
      authority: "Advisory capacity with no direct operational authority",
      reports_to: "Director General",
      commitment: "Part-time, attending quarterly advisory board meetings and available for consultation",
    },
  ]

  // Investor roles
  const investorRoles = [
    {
      id: "strategic-investor",
      title: "Strategic Investor",
      department: "Investment",
      level: "Major Stakeholder",
      responsibilities: [
        "Provide significant capital investment (minimum $500,000)",
        "Participate in quarterly investor meetings",
        "Provide strategic input on major business decisions",
        "Help open doors to strategic partnerships and opportunities",
        "Serve as brand ambassador for the Cox's Bazar Tourism Project",
      ],
      rights: [
        "Quarterly detailed financial reports",
        "Priority access to new investment opportunities",
        "Representation on the investor committee",
        "VIP access to all facilities and services",
        "Annual one-on-one meeting with the Director General",
      ],
      returns: "Preferred returns of 18-22% annually, depending on investment amount and project performance",
    },
    {
      id: "growth-investor",
      title: "Growth Investor",
      department: "Investment",
      level: "Stakeholder",
      responsibilities: [
        "Provide medium-sized capital investment ($100,000 - $499,999)",
        "Participate in bi-annual investor meetings",
        "Provide feedback on business performance and opportunities",
      ],
      rights: [
        "Bi-annual financial reports",
        "Early access to new investment opportunities",
        "Discounted access to all facilities and services",
        "Annual group meeting with senior management",
      ],
      returns: "Expected returns of 15-18% annually, depending on investment amount and project performance",
    },
    {
      id: "seed-investor",
      title: "Seed Investor",
      department: "Investment",
      level: "Early Stakeholder",
      responsibilities: [
        "Provide initial capital investment ($25,000 - $99,999)",
        "Participate in annual investor meetings",
        "Provide feedback and support as an early believer in the project",
      ],
      rights: [
        "Annual financial reports",
        "Special recognition as founding investor",
        "Discounted access to select facilities and services",
        "Annual group meeting with management representatives",
      ],
      returns: "Expected returns of 12-15% annually, depending on investment amount and project performance",
    },
  ]

  // Staff roles
  const staffRoles = [
    {
      id: "operations-manager",
      title: "Operations Manager",
      department: "Operations",
      level: "Manager",
      responsibilities: [
        "Manage day-to-day operations of assigned tourism services",
        "Supervise operational staff and ensure service quality",
        "Implement operational policies and procedures",
        "Monitor and report on operational performance",
        "Identify and resolve operational issues",
        "Contribute to continuous improvement initiatives",
      ],
      authority: "Direct supervisory authority over operational staff",
      reports_to: "Chief Operations Officer",
      direct_reports: ["Shift Supervisors", "Service Coordinators"],
    },
    {
      id: "marketing-specialist",
      title: "Marketing Specialist",
      department: "Marketing",
      level: "Specialist",
      responsibilities: [
        "Execute marketing campaigns across digital and traditional channels",
        "Create and manage content for social media and website",
        "Analyze marketing performance and provide insights",
        "Coordinate with external marketing partners and agencies",
        "Support the development of marketing materials and collateral",
        "Assist in organizing promotional events and activities",
      ],
      authority: "Implementation authority within approved marketing plans",
      reports_to: "Marketing Manager",
      direct_reports: [],
    },
    {
      id: "customer-service-representative",
      title: "Customer Service Representative",
      department: "Customer Service",
      level: "Staff",
      responsibilities: [
        "Provide excellent customer service to tourists and visitors",
        "Handle inquiries, bookings, and complaints",
        "Process transactions and maintain accurate records",
        "Provide information about tourism services and attractions",
        "Assist visitors with special needs or requirements",
        "Report customer feedback and suggestions to management",
      ],
      authority: "Front-line service delivery within established guidelines",
      reports_to: "Customer Service Supervisor",
      direct_reports: [],
    },
  ]

  // HR policies
  const hrPolicies = [
    {
      id: "recruitment",
      title: "Recruitment and Selection",
      policies: [
        "All positions must have approved job descriptions before recruitment begins",
        "Job openings must be advertised internally for at least 5 working days before external posting",
        "Selection process must include at least one panel interview with 3+ interviewers",
        "Final hiring decisions require approval from department head and HR",
        "Local candidates from Cox's Bazar region to be given priority for equivalent qualifications",
        "All new hires subject to 3-month probationary period",
      ],
    },
    {
      id: "performance",
      title: "Performance Management",
      policies: [
        "All employees to receive formal performance reviews bi-annually",
        "Performance evaluated against pre-established KPIs and competencies",
        "Underperforming employees to be placed on Performance Improvement Plans",
        "High performers eligible for accelerated promotion and bonus consideration",
        "Performance ratings directly linked to annual compensation adjustments",
        "Peer feedback incorporated into performance evaluation process",
      ],
    },
    {
      id: "termination",
      title: "Termination Procedures",
      policies: [
        "Involuntary terminations require documentation of performance issues or policy violations",
        "Minimum of two formal warnings required before termination for performance issues",
        "Immediate termination permitted for serious misconduct (fraud, violence, etc.)",
        "All terminations must be approved by department head, HR, and legal counsel",
        "Exit interviews conducted for all departing employees",
        "Final settlements processed within 30 days of termination date",
      ],
    },
  ]

  // Code of conduct
  const codeOfConduct = [
    {
      id: "ethics",
      title: "Ethical Standards",
      rules: [
        "All team members must act with honesty, integrity, and transparency",
        "Conflicts of interest must be disclosed immediately to management",
        "Confidential information must be protected at all times",
        "No acceptance of gifts valued over $50 from vendors, partners, or customers",
        "Zero tolerance for bribery, corruption, or unethical business practices",
        "All financial transactions must be accurately recorded and reported",
      ],
    },
    {
      id: "workplace",
      title: "Workplace Conduct",
      rules: [
        "Treat all colleagues, customers, and partners with respect and dignity",
        "Zero tolerance for discrimination, harassment, or bullying",
        "Maintain professional appearance and behavior at all times",
        "Adhere to safety protocols and report any safety concerns immediately",
        "Responsible use of company resources and property",
        "Maintain punctuality and reliability in work attendance",
      ],
    },
    {
      id: "communication",
      title: "Communication Standards",
      rules: [
        "Represent the organization professionally in all external communications",
        "Social media posts related to the organization must comply with social media policy",
        "Confidential information must never be shared on personal communication channels",
        "All external marketing or press communications must be approved by Marketing department",
        "Internal communications should be respectful, clear, and professional",
        "Report any negative publicity or communication concerns to management immediately",
      ],
    },
  ]

  const filteredLeadershipRoles = filterRoles(leadershipRoles, searchQuery)
  const filteredAdvisoryRoles = filterRoles(advisoryRoles, searchQuery)
  const filteredInvestorRoles = filterRoles(investorRoles, searchQuery)
  const filteredStaffRoles = filterRoles(staffRoles, searchQuery)

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Organizational Roles & Responsibilities</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive overview of all roles, responsibilities, and organizational structure for the Cox's Bazar
          Tourism Project.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search roles, departments, or responsibilities..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="leadership" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full">
          <TabsTrigger value="leadership" className="flex items-center gap-2">
            <UserCog className="h-4 w-4" />
            <span className="hidden md:inline">Leadership</span>
          </TabsTrigger>
          <TabsTrigger value="advisory" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span className="hidden md:inline">Advisory</span>
          </TabsTrigger>
          <TabsTrigger value="investors" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden md:inline">Investors</span>
          </TabsTrigger>
          <TabsTrigger value="staff" className="flex items-center gap-2">
            <UserCheck className="h-4 w-4" />
            <span className="hidden md:inline">Staff</span>
          </TabsTrigger>
          <TabsTrigger value="hr-policies" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">HR Policies</span>
          </TabsTrigger>
          <TabsTrigger value="code-of-conduct" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden md:inline">Code of Conduct</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="leadership" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Leadership Roles</h2>
          <p className="text-muted-foreground">
            The leadership team provides strategic direction and oversight for the Cox's Bazar Tourism Project.
          </p>

          {filteredLeadershipRoles.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No leadership roles match your search criteria.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredLeadershipRoles.map((role) => (
                <Card key={role.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50 cursor-pointer" onClick={() => toggleRole(role.id)}>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {role.title}
                          {role.name && (
                            <Badge variant="outline" className="ml-2">
                              {role.name}
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription>
                          {role.department} • {role.level}
                        </CardDescription>
                      </div>
                      {expandedRoles[role.id] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </CardHeader>
                  {expandedRoles[role.id] && (
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Responsibilities:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {role.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Authority:</h4>
                            <p>{role.authority}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Reporting Structure:</h4>
                            <p>
                              <span className="font-medium">Reports to:</span> {role.reports_to}
                            </p>
                            {role.direct_reports && role.direct_reports.length > 0 && (
                              <p className="mt-1">
                                <span className="font-medium">Direct Reports:</span> {role.direct_reports.join(", ")}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="advisory" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Advisory Roles</h2>
          <p className="text-muted-foreground">
            Advisors provide expert guidance and insights to help shape the strategic direction of the project.
          </p>

          {filteredAdvisoryRoles.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No advisory roles match your search criteria.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAdvisoryRoles.map((role) => (
                <Card key={role.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50 cursor-pointer" onClick={() => toggleRole(role.id)}>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{role.title}</CardTitle>
                        <CardDescription>
                          {role.department} • {role.level}
                        </CardDescription>
                      </div>
                      {expandedRoles[role.id] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </CardHeader>
                  {expandedRoles[role.id] && (
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Responsibilities:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {role.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Authority:</h4>
                            <p>{role.authority}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Commitment:</h4>
                            <p>{role.commitment}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Reporting Structure:</h4>
                          <p>
                            <span className="font-medium">Reports to:</span> {role.reports_to}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="investors" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Investor Roles</h2>
          <p className="text-muted-foreground">
            Investors provide the capital needed to develop and grow the Cox's Bazar Tourism Project.
          </p>

          {filteredInvestorRoles.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No investor roles match your search criteria.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredInvestorRoles.map((role) => (
                <Card key={role.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50 cursor-pointer" onClick={() => toggleRole(role.id)}>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{role.title}</CardTitle>
                        <CardDescription>
                          {role.department} • {role.level}
                        </CardDescription>
                      </div>
                      {expandedRoles[role.id] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </CardHeader>
                  {expandedRoles[role.id] && (
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Responsibilities:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {role.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Rights and Benefits:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {role.rights.map((right, i) => (
                              <li key={i}>{right}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Expected Returns:</h4>
                          <p>{role.returns}</p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="staff" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Staff Roles</h2>
          <p className="text-muted-foreground">
            Staff members are responsible for the day-to-day operations and service delivery of the Cox's Bazar Tourism
            Project.
          </p>

          {filteredStaffRoles.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No staff roles match your search criteria.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredStaffRoles.map((role) => (
                <Card key={role.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50 cursor-pointer" onClick={() => toggleRole(role.id)}>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>{role.title}</CardTitle>
                        <CardDescription>
                          {role.department} • {role.level}
                        </CardDescription>
                      </div>
                      {expandedRoles[role.id] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </CardHeader>
                  {expandedRoles[role.id] && (
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Responsibilities:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {role.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Authority:</h4>
                            <p>{role.authority}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Reporting Structure:</h4>
                            <p>
                              <span className="font-medium">Reports to:</span> {role.reports_to}
                            </p>
                            {role.direct_reports && role.direct_reports.length > 0 && (
                              <p className="mt-1">
                                <span className="font-medium">Direct Reports:</span> {role.direct_reports.join(", ")}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="hr-policies" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">HR Policies</h2>
          <p className="text-muted-foreground">
            Human Resources policies govern recruitment, performance management, and termination procedures.
          </p>

          <div className="space-y-6">
            {hrPolicies.map((policy) => (
              <Card key={policy.id}>
                <CardHeader>
                  <CardTitle>{policy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {policy.policies.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Organizational Chart</h3>
            <p className="mb-4">The Cox's Bazar Tourism Project follows a hierarchical organizational structure:</p>

            <div className="relative overflow-auto p-4 bg-white rounded-lg border">
              <div className="flex flex-col items-center">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center w-64 mb-4">
                  <p className="font-bold">Director General</p>
                  <p className="text-sm">MJ Ahmad</p>
                </div>

                <div className="w-px h-8 bg-border"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-border"></div>
                    <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-center w-48">
                      <p className="font-bold">Chief Operations Officer</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-border"></div>
                    <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-center w-48">
                      <p className="font-bold">Chief Financial Officer</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-border"></div>
                    <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-center w-48">
                      <p className="font-bold">Chief Marketing Officer</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-border"></div>
                    <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg text-center w-40">
                      <p className="font-bold">Operations Managers</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-border"></div>
                    <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg text-center w-40">
                      <p className="font-bold">Finance Team</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-border"></div>
                    <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg text-center w-40">
                      <p className="font-bold">Marketing Team</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-border"></div>
                    <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg text-center w-40">
                      <p className="font-bold">HR Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code-of-conduct" className="space-y-6 mt-6">
          <h2 className="text-2xl font-bold">Code of Conduct</h2>
          <p className="text-muted-foreground">
            The Code of Conduct outlines the ethical standards and behavior expected from all team members.
          </p>

          <div className="space-y-6">
            {codeOfConduct.map((code) => (
              <Card key={code.id}>
                <CardHeader>
                  <CardTitle>{code.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {code.rules.map((rule, i) => (
                      <li key={i}>{rule}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Compliance and Enforcement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                All team members, regardless of role or position, are expected to adhere to the Code of Conduct.
                Violations will be addressed through the following process:
              </p>

              <ol className="list-decimal pl-5 space-y-2">
                <li>Initial verbal warning for minor infractions</li>
                <li>Written warning for repeated or more serious violations</li>
                <li>Temporary suspension for significant violations</li>
                <li>Termination for severe or persistent violations</li>
              </ol>

              <p className="mt-4">
                The Cox's Bazar Tourism Project is committed to creating a positive, ethical, and professional
                environment for all stakeholders. This Code of Conduct is essential to maintaining our reputation and
                ensuring the success of our mission.
              </p>

              <div className="bg-muted p-4 rounded-lg mt-4">
                <p className="font-medium">
                  All team members must acknowledge receipt and understanding of this Code of Conduct as a condition of
                  their involvement with the project.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Need More Information?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          For detailed information about specific roles, responsibilities, or policies, please contact the Human
          Resources department.
        </p>
        <Button className="mt-4">Contact HR Department</Button>
      </div>
    </div>
  )
}

