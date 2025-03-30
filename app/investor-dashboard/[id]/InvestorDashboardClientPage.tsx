"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, DollarSign, FileText, Calendar, Bell, Settings } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Sample data for the investor dashboard
const performanceData = [
  { month: "Jan", revenue: 45000, expenses: 32000, profit: 13000, roi: 5.2 },
  { month: "Feb", revenue: 52000, expenses: 34000, profit: 18000, roi: 7.2 },
  { month: "Mar", revenue: 48000, expenses: 33000, profit: 15000, roi: 6.0 },
  { month: "Apr", revenue: 61000, expenses: 35000, profit: 26000, roi: 10.4 },
  { month: "May", revenue: 67000, expenses: 37000, profit: 30000, roi: 12.0 },
  { month: "Jun", revenue: 70000, expenses: 39000, profit: 31000, roi: 12.4 },
]

const portfolioAllocation = [
  { name: "Hotel Development", value: 40 },
  { name: "Restaurant Chain", value: 25 },
  { name: "Tour Operations", value: 20 },
  { name: "Transportation", value: 15 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const upcomingDividends = [
  {
    id: 1,
    project: "Cox Bazar Beach Resort",
    amount: 5000,
    paymentDate: "2023-07-30",
    status: "Scheduled",
  },
  {
    id: 2,
    project: "Himchari Eco Tourism",
    amount: 3200,
    paymentDate: "2023-08-15",
    status: "Scheduled",
  },
  {
    id: 3,
    project: "St. Martin's Island Tour Operations",
    amount: 2800,
    paymentDate: "2023-09-05",
    status: "Scheduled",
  },
]

const investmentOpportunities = [
  {
    id: 1,
    name: "Marine Drive Resort Expansion",
    description: "Expansion of the existing resort along Marine Drive with 30 new luxury rooms",
    requiredInvestment: 250000,
    projectedROI: 18,
    timeline: "18 months",
    status: "Open for Investment",
  },
  {
    id: 2,
    name: "Inani Beach Eco Resort",
    description: "New sustainable eco-resort development with 20 cottages near Inani Beach",
    requiredInvestment: 180000,
    projectedROI: 16,
    timeline: "12 months",
    status: "Open for Investment",
  },
  {
    id: 3,
    name: "Premium Tour Fleet Expansion",
    description: "Addition of 5 luxury vehicles to the tour fleet for high-end tourism",
    requiredInvestment: 120000,
    projectedROI: 22,
    timeline: "6 months",
    status: "Open for Investment",
  },
]

export default function InvestorDashboardClientPage() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("overview")

  // Calculate total invested and current value
  const totalInvested = 500000 // Example value
  const currentValue = 625000 // Example value
  const totalReturn = currentValue - totalInvested
  const roiPercentage = ((currentValue - totalInvested) / totalInvested) * 100

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Investor Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">Investor ID: {id}</div>
        </div>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full max-w-4xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalInvested.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Across 4 major projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${currentValue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+${totalReturn.toLocaleString()} growth</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total ROI</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{roiPercentage.toFixed(2)}%</div>
                <p className="text-xs text-muted-foreground">Since initial investment</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">YTD Return</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5%</div>
                <p className="text-xs text-muted-foreground">+3.2% vs. industry avg.</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>ROI Performance</CardTitle>
              <CardDescription>Monthly return on investment trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="roi" stroke="#8884d8" strokeWidth={2} name="ROI %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Dividends</CardTitle>
                <CardDescription>Scheduled dividend payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDividends.map((dividend) => (
                    <div key={dividend.id} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{dividend.project}</h4>
                        <Badge className="bg-green-500">{dividend.status}</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Payment Date: {dividend.paymentDate}</span>
                        <span className="font-medium">${dividend.amount.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portfolio Allocation</CardTitle>
                <CardDescription>Current distribution of your investments</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="h-[250px] w-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={portfolioAllocation}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {portfolioAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment Portfolio</CardTitle>
              <CardDescription>Detailed breakdown of your investments in Cox Bazar tourism projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-lg">Cox Bazar Beach Resort</h4>
                    <Badge className="bg-blue-500">Active</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Investment Amount</p>
                      <p className="font-medium">$200,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Value</p>
                      <p className="font-medium">$246,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROI</p>
                      <p className="font-medium text-green-500">+23%</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Project Completion</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-lg">Himchari Eco Tourism</h4>
                    <Badge className="bg-blue-500">Active</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Investment Amount</p>
                      <p className="font-medium">$125,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Value</p>
                      <p className="font-medium">$148,750</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROI</p>
                      <p className="font-medium text-green-500">+19%</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Project Completion</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-lg">St. Martin's Island Tour Operations</h4>
                    <Badge className="bg-blue-500">Active</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Investment Amount</p>
                      <p className="font-medium">$100,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Value</p>
                      <p className="font-medium">$128,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROI</p>
                      <p className="font-medium text-green-500">+28%</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Project Completion</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-lg">Cox Bazar Transport Fleet</h4>
                    <Badge className="bg-blue-500">Active</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Investment Amount</p>
                      <p className="font-medium">$75,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Value</p>
                      <p className="font-medium">$102,250</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROI</p>
                      <p className="font-medium text-green-500">+36.3%</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Project Completion</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Performance</CardTitle>
              <CardDescription>Revenue, expenses, and profit trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                    <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
                    <Bar dataKey="profit" fill="#ffc658" name="Profit" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Quarterly Dividends</CardTitle>
                <CardDescription>Historical dividend payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">Q2 2023</h4>
                      <span className="text-green-500 font-medium">$11,000</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Payment Date: June 30, 2023</div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">Q1 2023</h4>
                      <span className="text-green-500 font-medium">$9,500</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Payment Date: March 31, 2023</div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">Q4 2022</h4>
                      <span className="text-green-500 font-medium">$8,800</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Payment Date: December 31, 2022</div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">Q3 2022</h4>
                      <span className="text-green-500 font-medium">$7,200</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Payment Date: September 30, 2022</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tax Documents</CardTitle>
                <CardDescription>Investment-related tax documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-blue-500" />
                      <div>
                        <h4 className="font-medium">2022 Tax Statement</h4>
                        <p className="text-sm text-muted-foreground">PDF • 1.2 MB</p>
                      </div>
                    </div>
                    <button className="text-primary hover:underline text-sm">Download</button>
                  </div>

                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-blue-500" />
                      <div>
                        <h4 className="font-medium">2022 Investment Income Report</h4>
                        <p className="text-sm text-muted-foreground">PDF • 0.8 MB</p>
                      </div>
                    </div>
                    <button className="text-primary hover:underline text-sm">Download</button>
                  </div>

                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3 text-blue-500" />
                      <div>
                        <h4 className="font-medium">2021 Tax Statement</h4>
                        <p className="text-sm text-muted-foreground">PDF • 1.1 MB</p>
                      </div>
                    </div>
                    <button className="text-primary hover:underline text-sm">Download</button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment Opportunities</CardTitle>
              <CardDescription>New projects open for investment in Cox Bazar tourism</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {investmentOpportunities.map((opportunity) => (
                  <div key={opportunity.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-lg">{opportunity.name}</h4>
                      <Badge className="bg-blue-500">{opportunity.status}</Badge>
                    </div>
                    <p className="mb-4">{opportunity.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Required Investment</p>
                        <p className="font-medium">${opportunity.requiredInvestment.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Projected ROI</p>
                        <p className="font-medium text-green-500">{opportunity.projectedROI}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Timeline</p>
                        <p className="font-medium">{opportunity.timeline}</p>
                      </div>
                    </div>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment Documents</CardTitle>
              <CardDescription>Important documents related to your investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-blue-500" />
                    <div>
                      <h4 className="font-medium">Investment Agreement - Cox Bazar Beach Resort</h4>
                      <p className="text-sm text-muted-foreground">PDF • 3.5 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-green-500" />
                    <div>
                      <h4 className="font-medium">Financial Statements - Q2 2023</h4>
                      <p className="text-sm text-muted-foreground">XLSX • 1.2 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-red-500" />
                    <div>
                      <h4 className="font-medium">Annual Report 2022</h4>
                      <p className="text-sm text-muted-foreground">PDF • 5.8 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-purple-500" />
                    <div>
                      <h4 className="font-medium">Project Updates - July 2023</h4>
                      <p className="text-sm text-muted-foreground">PDF • 2.1 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-orange-500" />
                    <div>
                      <h4 className="font-medium">Upcoming Investor Events</h4>
                      <p className="text-sm text-muted-foreground">PDF • 0.9 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 mr-3 text-yellow-500" />
                    <div>
                      <h4 className="font-medium">Investor Newsletter - July 2023</h4>
                      <p className="text-sm text-muted-foreground">PDF • 1.7 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your investor account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 mr-3" />
                    <span>Notification Preferences</span>
                  </div>
                  <button className="text-primary hover:underline text-sm">Edit</button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-3" />
                    <span>Payment Settings</span>
                  </div>
                  <button className="text-primary hover:underline text-sm">Edit</button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3" />
                    <span>Document Delivery Preferences</span>
                  </div>
                  <button className="text-primary hover:underline text-sm">Edit</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

