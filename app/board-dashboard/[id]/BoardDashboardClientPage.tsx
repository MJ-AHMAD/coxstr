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
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Calendar, Clock, Users, TrendingUp, Briefcase, FileText, Settings, MessageSquare } from "lucide-react"

const performanceData = [
  { month: "Jan", revenue: 45000, expenses: 32000, profit: 13000 },
  { month: "Feb", revenue: 52000, expenses: 34000, profit: 18000 },
  { month: "Mar", revenue: 48000, expenses: 33000, profit: 15000 },
  { month: "Apr", revenue: 61000, expenses: 35000, profit: 26000 },
  { month: "May", revenue: 67000, expenses: 37000, profit: 30000 },
  { month: "Jun", revenue: 70000, expenses: 39000, profit: 31000 },
]

const occupancyData = [
  { month: "Jan", occupancy: 72 },
  { month: "Feb", occupancy: 78 },
  { month: "Mar", occupancy: 81 },
  { month: "Apr", occupancy: 85 },
  { month: "May", occupancy: 90 },
  { month: "Jun", occupancy: 88 },
]

const upcomingMeetings = [
  {
    id: 1,
    title: "Q2 Financial Review",
    date: "2023-07-15",
    time: "10:00 AM",
    location: "Conference Room A",
  },
  {
    id: 2,
    title: "Strategic Planning Session",
    date: "2023-07-22",
    time: "09:30 AM",
    location: "Conference Room B",
  },
  {
    id: 3,
    title: "Budget Approval Meeting",
    date: "2023-07-29",
    time: "11:00 AM",
    location: "Virtual",
  },
]

export default function BoardDashboardClientPage() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Board Member Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">Board Member ID: {id}</div>
        </div>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full max-w-4xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue (YTD)</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$343,000</div>
                <p className="text-xs text-muted-foreground">+18% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.6%</div>
                <p className="text-xs text-muted-foreground">+4.2% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Occupancy</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82.3%</div>
                <p className="text-xs text-muted-foreground">+6.8% from last year</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Financial Performance</CardTitle>
              <CardDescription>Revenue, expenses, and profit for the last 6 months</CardDescription>
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
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="profit" stroke="#ffc658" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Occupancy Rate</CardTitle>
              <CardDescription>Monthly occupancy rates for Cox Bazar properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={occupancyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="occupancy" fill="#8884d8" name="Occupancy Rate (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Budget Summary</CardTitle>
                <CardDescription>Year-to-date budget performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Budget</span>
                    <span>$750,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Spent</span>
                    <span>$343,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Remaining</span>
                    <span>$407,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Budget Utilization</span>
                    <span>45.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investment Performance</CardTitle>
                <CardDescription>Return on investments and capital projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Investment</span>
                    <span>$1,200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Current Value</span>
                    <span>$1,580,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Return</span>
                    <span>$380,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">ROI</span>
                    <span>31.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Board Meetings</CardTitle>
              <CardDescription>Schedule of board meetings and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="flex items-start p-3 border rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-3">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">{meeting.title}</h4>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-3">{meeting.date}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{meeting.time}</span>
                      </div>
                      <div className="text-sm mt-1">Location: {meeting.location}</div>
                    </div>
                    <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Meeting Minutes</CardTitle>
              <CardDescription>Recent board meeting minutes and notes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Q1 Financial Review</h4>
                    <p className="text-sm text-muted-foreground">June 2, 2023</p>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download PDF</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Strategic Planning Session</h4>
                    <p className="text-sm text-muted-foreground">May 15, 2023</p>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download PDF</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Annual General Meeting</h4>
                    <p className="text-sm text-muted-foreground">April 30, 2023</p>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download PDF</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Board Documents</CardTitle>
              <CardDescription>Important files and documents for board members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-blue-500" />
                    <div>
                      <h4 className="font-medium">Annual Report 2023</h4>
                      <p className="text-sm text-muted-foreground">PDF • 3.2 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-green-500" />
                    <div>
                      <h4 className="font-medium">Financial Statements Q2 2023</h4>
                      <p className="text-sm text-muted-foreground">XLSX • 1.8 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-red-500" />
                    <div>
                      <h4 className="font-medium">Strategic Plan 2023-2025</h4>
                      <p className="text-sm text-muted-foreground">PDF • 5.7 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>

                <div className="p-3 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-purple-500" />
                    <div>
                      <h4 className="font-medium">Board Governance Policies</h4>
                      <p className="text-sm text-muted-foreground">PDF • 2.3 MB</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm">Download</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your board member profile and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 mr-3" />
                    <span>Profile Information</span>
                  </div>
                  <button className="text-primary hover:underline text-sm">Edit</button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3" />
                    <span>Communication Preferences</span>
                  </div>
                  <button className="text-primary hover:underline text-sm">Edit</button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-3" />
                    <span>Committee Memberships</span>
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

