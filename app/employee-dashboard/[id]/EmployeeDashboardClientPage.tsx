"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Clock, Calendar, Award, FileText, MessageSquare, User, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Sample data for the employee dashboard
const tasks = [
  {
    id: 1,
    title: "Complete guest check-in training",
    dueDate: "2023-07-15",
    priority: "High",
    status: "In Progress",
    progress: 65,
  },
  {
    id: 2,
    title: "Update room service menu",
    dueDate: "2023-07-20",
    priority: "Medium",
    status: "Not Started",
    progress: 0,
  },
  {
    id: 3,
    title: "Attend customer service workshop",
    dueDate: "2023-07-18",
    priority: "High",
    status: "In Progress",
    progress: 30,
  },
  {
    id: 4,
    title: "Complete monthly inventory check",
    dueDate: "2023-07-25",
    priority: "Medium",
    status: "Not Started",
    progress: 0,
  },
  {
    id: 5,
    title: "Submit travel reimbursement form",
    dueDate: "2023-07-10",
    priority: "Low",
    status: "Completed",
    progress: 100,
  },
]

const upcomingShifts = [
  {
    id: 1,
    date: "2023-07-15",
    startTime: "08:00 AM",
    endTime: "04:00 PM",
    department: "Front Desk",
  },
  {
    id: 2,
    date: "2023-07-16",
    startTime: "08:00 AM",
    endTime: "04:00 PM",
    department: "Front Desk",
  },
  {
    id: 3,
    date: "2023-07-18",
    startTime: "12:00 PM",
    endTime: "08:00 PM",
    department: "Restaurant",
  },
  {
    id: 4,
    date: "2023-07-20",
    startTime: "08:00 AM",
    endTime: "04:00 PM",
    department: "Front Desk",
  },
]

const announcements = [
  {
    id: 1,
    title: "New Tour Package Training",
    date: "2023-07-10",
    content: "All employees must complete the training for our new Cox Bazar Beach Adventure Package by July 20.",
  },
  {
    id: 2,
    title: "Employee of the Month",
    date: "2023-07-05",
    content: "Congratulations to Rashid Ahmed for being named Employee of the Month for June 2023!",
  },
  {
    id: 3,
    title: "System Maintenance",
    date: "2023-07-03",
    content: "The booking system will be down for maintenance on July 15 from 11 PM to 2 AM.",
  },
]

export default function EmployeeDashboardClientPage() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("tasks")

  // Calculate task statistics
  const completedTasks = tasks.filter((task) => task.status === "Completed").length
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress").length
  const notStartedTasks = tasks.filter((task) => task.status === "Not Started").length
  const totalTasks = tasks.length

  // Badge color based on priority
  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-500 hover:bg-red-600"
      case "Medium":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "Low":
        return "bg-green-500 hover:bg-green-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  // Get status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 hover:bg-green-600"
      case "In Progress":
        return "bg-blue-500 hover:bg-blue-600"
      case "Not Started":
        return "bg-gray-500 hover:bg-gray-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">Employee ID: {id}</div>
        </div>
      </div>

      <Tabs defaultValue="tasks" onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full max-w-4xl">
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalTasks}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedTasks}</div>
                <p className="text-xs text-muted-foreground">
                  {Math.round((completedTasks / totalTasks) * 100)}% of total tasks
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                <Clock className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{inProgressTasks}</div>
                <p className="text-xs text-muted-foreground">
                  {Math.round((inProgressTasks / totalTasks) * 100)}% of total tasks
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Not Started</CardTitle>
                <Clock className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{notStartedTasks}</div>
                <p className="text-xs text-muted-foreground">
                  {Math.round((notStartedTasks / totalTasks) * 100)}% of total tasks
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>My Tasks</CardTitle>
              <CardDescription>Track and manage your assigned tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{task.title}</h4>
                      <div className="flex gap-2">
                        <Badge className={getPriorityBadgeColor(task.priority)}>{task.priority}</Badge>
                        <Badge className={getStatusBadgeColor(task.status)}>{task.status}</Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">Due: {task.dueDate}</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Shifts</CardTitle>
              <CardDescription>Your scheduled work shifts for the next two weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingShifts.map((shift) => (
                  <div key={shift.id} className="flex items-start p-3 border rounded-lg">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-3">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">{shift.department}</h4>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-3">{shift.date}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>
                          {shift.startTime} - {shift.endTime}
                        </span>
                      </div>
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
              <CardTitle>Time Off Requests</CardTitle>
              <CardDescription>Manage your vacation and time off requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Vacation Request</h4>
                      <p className="text-sm text-muted-foreground">August 10-20, 2023 (10 days)</p>
                    </div>
                    <Badge className="bg-yellow-500">Pending</Badge>
                  </div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Sick Leave</h4>
                      <p className="text-sm text-muted-foreground">June 5-6, 2023 (2 days)</p>
                    </div>
                    <Badge className="bg-green-500">Approved</Badge>
                  </div>
                </div>

                <button className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-md">
                  Request Time Off
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Announcements</CardTitle>
              <CardDescription>Latest news and updates from management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{announcement.title}</h4>
                      <span className="text-sm text-muted-foreground">{announcement.date}</span>
                    </div>
                    <p className="text-sm">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Training & Events</CardTitle>
              <CardDescription>Upcoming training sessions and company events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg flex items-center">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-3">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium">Customer Service Excellence</h4>
                    <p className="text-sm text-muted-foreground">July 18, 2023 • 10:00 AM - 12:00 PM</p>
                  </div>
                  <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">Register</button>
                </div>

                <div className="p-3 border rounded-lg flex items-center">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-3">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium">New Booking System Training</h4>
                    <p className="text-sm text-muted-foreground">July 22, 2023 • 2:00 PM - 4:00 PM</p>
                  </div>
                  <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">Register</button>
                </div>

                <div className="p-3 border rounded-lg flex items-center">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-3">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium">Company Summer Party</h4>
                    <p className="text-sm text-muted-foreground">July 29, 2023 • 5:00 PM - 9:00 PM</p>
                  </div>
                  <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">RSVP</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Your job performance metrics and feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Customer Service</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Attendance</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Task Completion</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Team Collaboration</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h4 className="font-medium mb-3">Recent Feedback</h4>
                <div className="p-4 border rounded-lg mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium">Quarterly Performance Review</h5>
                    <span className="text-sm text-muted-foreground">June 15, 2023</span>
                  </div>
                  <p className="text-sm">
                    Excellent customer service skills. Guests have consistently provided positive feedback about your
                    helpfulness and knowledge of local attractions.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium">Manager Feedback</h5>
                    <span className="text-sm text-muted-foreground">May 10, 2023</span>
                  </div>
                  <p className="text-sm">
                    Good job handling the busy weekend. Your ability to remain calm under pressure is commendable.
                    Consider improving on response time to customer queries.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Certifications & Training</CardTitle>
                <CardDescription>Your completed and in-progress certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg flex items-center">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg mr-3">
                      <Award className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">Hospitality Management</h4>
                      <p className="text-sm text-muted-foreground">Completed: April 2023</p>
                    </div>
                  </div>

                  <div className="p-3 border rounded-lg flex items-center">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg mr-3">
                      <Award className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">First Aid & CPR</h4>
                      <p className="text-sm text-muted-foreground">Completed: March 2023</p>
                    </div>
                  </div>

                  <div className="p-3 border rounded-lg flex items-center">
                    <div className="flex-shrink-0 p-2 bg-yellow-100 rounded-lg mr-3">
                      <Award className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">Advanced Customer Service</h4>
                      <p className="text-sm text-muted-foreground">In Progress: 70% completed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recognition & Achievements</CardTitle>
                <CardDescription>Awards and special recognition you've received</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 mr-2 text-yellow-500" />
                      <h4 className="font-medium">Employee of the Month</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">March 2023</p>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 mr-2 text-blue-500" />
                      <h4 className="font-medium">Perfect Attendance</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Q1 2023</p>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 mr-2 text-purple-500" />
                      <h4 className="font-medium">5-Star Service Excellence</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">February 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
              <CardDescription>View and manage your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-16 w-16 text-gray-500" />
                    </div>
                  </div>

                  <div className="flex-grow space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <p>Mohammed Rahman</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <p>mohammed.rahman@example.com</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <p>+880 1234-567890</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Employee ID</label>
                        <p>{id}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Department</label>
                        <p>Front Desk</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Position</label>
                        <p>Senior Guest Relations Officer</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Hire Date</label>
                        <p>January 15, 2021</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Manager</label>
                        <p>Fatima Begum</p>
                      </div>
                    </div>

                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                      Edit Profile Information
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences and settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 mr-3" />
                    <span>Update Password</span>
                  </div>
                  <button className="text-primary hover:underline text-sm">Change</button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3" />
                    <span>Communication Preferences</span>
                  </div>
                  <button className="text-primary hover:underline text-sm">Manage</button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3" />
                    <span>Calendar Sync Settings</span>
                  </div>
                  <button className="text-primary hover:underline text-sm">Configure</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

