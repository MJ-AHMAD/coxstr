"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Activity,
  AlertCircle,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle2,
  FileText,
  Info,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Shield,
  User,
  Users,
} from "lucide-react"

// Import user data
import userData from "../../../data/users.json"

export default function CoreTeamDashboardClientPage() {
  const params = useParams()
  const router = useRouter()
  const { id } = params
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    // Find the user in the coreTeam array
    const foundUser = userData.coreTeam.find((u) => u.id === id)

    if (foundUser) {
      setUser(foundUser)
    } else {
      // Redirect to login if user not found
      router.push("/login")
    }

    setLoading(false)
  }, [id, router])

  const handleLogout = () => {
    router.push("/login")
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">User not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="T-ALLY Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold text-blue-600">T-ALLY</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-4">
              <Link
                href={`/core-team-dashboard/${id}`}
                className="px-3 py-2 text-sm font-medium text-blue-600 rounded-md bg-blue-50"
              >
                Dashboard
              </Link>
              <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
                Main Site
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-600" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.name} />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 p-4">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("overview")}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("profile")}>
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("responsibilities")}>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Responsibilities
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("benefits")}>
              <Shield className="mr-2 h-4 w-4" />
              Benefits
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("contract")}>
              <FileText className="mr-2 h-4 w-4" />
              Contract
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("team")}>
              <Users className="mr-2 h-4 w-4" />
              Team
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("reports")}>
              <BarChart3 className="mr-2 h-4 w-4" />
              Reports
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Info className="mr-2 h-4 w-4" />
              Help & Support
            </Button>
          </div>
          <div className="mt-auto pt-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <p className="text-sm font-medium">Core team meeting today at 3 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {/* Dashboard Title */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Core Team Dashboard</h1>
              <p className="text-gray-500">Welcome back, {user.name}</p>
            </div>
            <Badge variant="outline" className="text-blue-700 bg-blue-50 hover:bg-blue-100">
              {user.position}
            </Badge>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Core Team Access</AlertTitle>
                <AlertDescription>
                  You have level {user.accessLevel} access to the system. This grants you privileges to manage and
                  oversee operations within your department.
                </AlertDescription>
              </Alert>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Projects</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">8</h3>
                      </div>
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Activity className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-green-500 font-medium">+2</span>
                      <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Team Members</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">
                          {user.department === "Executive"
                            ? "42"
                            : user.department === "Operations"
                              ? "18"
                              : user.department === "Marketing"
                                ? "8"
                                : user.department === "Finance"
                                  ? "6"
                                  : user.department === "IT"
                                    ? "5"
                                    : "4"}
                        </h3>
                      </div>
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-green-500 font-medium">+3</span>
                      <span className="text-gray-500 ml-1">new this quarter</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Department Budget</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">$245K</h3>
                      </div>
                      <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-amber-500 font-medium">68%</span>
                      <span className="text-gray-500 ml-1">utilized</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Upcoming Meetings</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">4</h3>
                      </div>
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-gray-500">Next: Today at 3:00 PM</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Department Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Department Performance</CardTitle>
                  <CardDescription>Key metrics for your department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Revenue Target</span>
                        <span className="text-sm text-gray-500">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Customer Satisfaction</span>
                        <span className="text-sm text-gray-500">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Team Productivity</span>
                        <span className="text-sm text-gray-500">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Project Completion</span>
                        <span className="text-sm text-gray-500">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates from your department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        user: "Sarah Rahman",
                        action: "completed the quarterly operations review",
                        time: "2 hours ago",
                      },
                      {
                        user: "Kamal Hossain",
                        action: "submitted the financial forecast for Q3",
                        time: "Yesterday at 4:30 PM",
                      },
                      {
                        user: "Nadia Islam",
                        action: "launched the new marketing campaign for beach tours",
                        time: "Yesterday at 11:15 AM",
                      },
                      {
                        user: "Rafiq Ahmed",
                        action: "deployed the updated booking system",
                        time: "2 days ago",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <Avatar className="mt-1">
                          <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={activity.user} />
                          <AvatarFallback>{getInitials(activity.user)}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your profile details and contact information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center md:w-1/3">
                      <Avatar className="h-32 w-32 mb-4">
                        <AvatarImage src="/placeholder.svg?height=128&width=128" alt={user.name} />
                        <AvatarFallback className="text-2xl">{getInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold">{user.name}</h3>
                      <p className="text-gray-500">{user.position}</p>
                      <Badge className="mt-2">{user.department}</Badge>
                      <Button variant="outline" size="sm" className="mt-4">
                        Change Photo
                      </Button>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm text-gray-500">Full Name</Label>
                          <p className="font-medium">{user.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-500">Position</Label>
                          <p className="font-medium">{user.position}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-500">Department</Label>
                          <p className="font-medium">{user.department}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-500">Join Date</Label>
                          <p className="font-medium">{user.joinDate}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-500">Email</Label>
                          <p className="font-medium">{user.email}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-500">Phone</Label>
                          <p className="font-medium">{user.phone}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-500">Access Level</Label>
                          <p className="font-medium">
                            {user.accessLevel} -{" "}
                            {user.accessLevel === 5
                              ? "Executive Access"
                              : user.accessLevel === 4
                                ? "Senior Management Access"
                                : user.accessLevel === 3
                                  ? "Management Access"
                                  : user.accessLevel === 2
                                    ? "Team Lead Access"
                                    : "Standard Access"}
                          </p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-500">Employee ID</Label>
                          <p className="font-medium">{user.id}</p>
                        </div>
                      </div>
                      <div className="mt-6 flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Responsibilities Tab */}
          {activeTab === "responsibilities" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Core Responsibilities</CardTitle>
                  <CardDescription>Your key duties and responsibilities in the organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Primary Responsibilities</h3>
                      <ul className="space-y-3">
                        {user.responsibilities.map((responsibility: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-3">Key Performance Indicators</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Departmental Goals Achievement</span>
                            <span className="text-sm text-gray-500">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Team Management Effectiveness</span>
                            <span className="text-sm text-gray-500">92%</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Strategic Initiative Implementation</span>
                            <span className="text-sm text-gray-500">78%</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Budget Management</span>
                            <span className="text-sm text-gray-500">95%</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-3">Reporting Structure</h3>
                      <div className="space-y-4">
                        {user.position === "Director General" ? (
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-500">Reports to:</span>
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarFallback>BM</AvatarFallback>
                              </Avatar>
                              <span>Board of Directors</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-500">Reports to:</span>
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarFallback>MJ</AvatarFallback>
                              </Avatar>
                              <span>MJ Ahmad (Director General)</span>
                            </div>
                          </div>
                        )}

                        <div>
                          <span className="text-gray-500 block mb-2">Direct Reports:</span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {[1, 2, 3, 4].map((_, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 border rounded-md">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback>{["SR", "KH", "NI", "RA"][index]}</AvatarFallback>
                                </Avatar>
                                <span>{["Sarah Rahman", "Kamal Hossain", "Nadia Islam", "Rafiq Ahmed"][index]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-3">Decision Authority</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Decision Type</TableHead>
                            <TableHead>Authority Level</TableHead>
                            <TableHead>Approval Required</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Operational Decisions</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Full Authority
                              </Badge>
                            </TableCell>
                            <TableCell>None</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Budget Allocation (Department)</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Full Authority
                              </Badge>
                            </TableCell>
                            <TableCell>None</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Strategic Initiatives</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-amber-50 text-amber-700">
                                Partial Authority
                              </Badge>
                            </TableCell>
                            <TableCell>Director General</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Major Expenditures (>$10,000)</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-amber-50 text-amber-700">
                                Partial Authority
                              </Badge>
                            </TableCell>
                            <TableCell>Finance Department</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Hiring/Termination (Department)</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Full Authority
                              </Badge>
                            </TableCell>
                            <TableCell>HR Department</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Compensation & Benefits</CardTitle>
                  <CardDescription>Your compensation package and additional benefits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Core Benefits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {user.benefits.map((benefit: string, index: number) => (
                          <Card key={index} className="bg-blue-50">
                            <CardContent className="p-4">
                              <div className="flex items-start space-x-3">
                                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                                <span className="font-medium">{benefit}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-3">Additional Benefits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex flex-col items-center text-center">
                              <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                              <h4 className="font-medium">Annual Leave</h4>
                              <p className="text-sm text-gray-500">30 days per year</p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex flex-col items-center text-center">
                              <Activity className="h-8 w-8 text-blue-600 mb-2" />
                              <h4 className="font-medium">Health Insurance</h4>
                              <p className="text-sm text-gray-500">Premium family coverage</p>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex flex-col items-center text-center">
                              <Users className="h-8 w-8 text-blue-600 mb-2" />
                              <h4 className="font-medium">Professional Development</h4>
                              <p className="text-sm text-gray-500">$5,000 annual allowance</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-3">Performance Bonuses</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Performance Level</TableHead>
                            <TableHead>Bonus Percentage</TableHead>
                            <TableHead>Eligibility Criteria</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Exceptional</TableCell>
                            <TableCell>25% of annual salary</TableCell>
                            <TableCell>Exceeding all KPIs by 20%+</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Exceeds Expectations</TableCell>
                            <TableCell>15% of annual salary</TableCell>
                            <TableCell>Exceeding all KPIs by 10-20%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Meets Expectations</TableCell>
                            <TableCell>10% of annual salary</TableCell>
                            <TableCell>Meeting all KPIs</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Needs Improvement</TableCell>
                            <TableCell>5% of annual salary</TableCell>
                            <TableCell>Meeting 80-90% of KPIs</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-3">Retirement Benefits</h3>
                      <div className="p-4 border rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Retirement Plan</p>
                            <p className="font-medium">Defined Contribution Plan</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Company Contribution</p>
                            <p className="font-medium">10% of annual salary</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Vesting Period</p>
                            <p className="font-medium">3 years</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Current Status</p>
                            <p className="font-medium">Fully Vested</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Contract Tab */}
          {activeTab === "contract" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Employment Contract</CardTitle>
                  <CardDescription>Your contract terms and conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Contract Type</p>
                        <p className="font-medium">Full-time, Core Team</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">{user.contractTerms.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Start Date</p>
                        <p className="font-medium">{user.joinDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">End Date</p>
                        <p className="font-medium">
                          {
                            new Date(
                              new Date(user.joinDate).setFullYear(
                                new Date(user.joinDate).getFullYear() + Number.parseInt(user.contractTerms.duration),
                              ),
                            )
                              .toISOString()
                              .split("T")[0]
                          }
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Renewal Option</p>
                        <p className="font-medium">{user.contractTerms.renewalOption ? "Yes" : "No"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Non-Compete Period</p>
                        <p className="font-medium">{user.contractTerms.nonCompete}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Contract Signed Date</p>
                        <p className="font-medium">{user.contractTerms.signedDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Notice Period</p>
                        <p className="font-medium">3 months</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-3">Key Contract Clauses</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Confidentiality</h4>
                          <p className="text-sm text-gray-600">
                            You are required to maintain strict confidentiality regarding all proprietary information,
                            trade secrets, and business strategies of TRUSTED-ALLY Tourism. This obligation continues
                            for 2 years after employment termination.
                          </p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Intellectual Property</h4>
                          <p className="text-sm text-gray-600">
                            All intellectual property created during your employment and related to the business of
                            TRUSTED-ALLY Tourism shall be the exclusive property of the company.
                          </p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Non-Competition</h4>
                          <p className="text-sm text-gray-600">
                            For a period of {user.contractTerms.nonCompete} following termination of employment, you
                            shall not engage in any business that directly competes with TRUSTED-ALLY Tourism within the
                            Cox's Bazar region.
                          </p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Termination Conditions</h4>
                          <p className="text-sm text-gray-600">
                            Either party may terminate this agreement with 3 months' written notice. The company
                            reserves the right to terminate immediately for gross misconduct, fraud, or breach of
                            contract terms.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center">
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Download Contract
                      </Button>
                      <div className="text-sm text-gray-500">Last updated: {user.contractTerms.signedDate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === "team" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Team</CardTitle>
                  <CardDescription>Team members under your supervision</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="p-4">
                              <div className="flex items-center space-x-4">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                                  <AvatarFallback>{["AR", "SA", "MA", "NJ", "FA", "TB"][index]}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="font-medium">
                                    {
                                      [
                                        "Arif Rahman",
                                        "Sadia Akter",
                                        "Mohammad Ali",
                                        "Nasreen Jahan",
                                        "Farhan Ahmed",
                                        "Tahmina Begum",
                                      ][index]
                                    }
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {
                                      [
                                        "Senior Tour Guide",
                                        "Marketing Specialist",
                                        "Financial Analyst",
                                        "Customer Service Representative",
                                        "IT Support Specialist",
                                        "HR Coordinator",
                                      ][index]
                                    }
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4 flex justify-between text-sm">
                                <span className="text-gray-500">Performance</span>
                                <span className="font-medium">{[92, 88, 95, 85, 90, 87][index]}%</span>
                              </div>
                              <Progress value={[92, 88, 95, 85, 90, 87][index]} className="h-1 mt-1" />
                              <div className="mt-4 flex space-x-2">
                                <Button variant="outline" size="sm" className="w-full">
                                  <MessageSquare className="mr-2 h-3 w-3" />
                                  Message
                                </Button>
                                <Button variant="outline" size="sm" className="w-full">
                                  <FileText className="mr-2 h-3 w-3" />
                                  Details
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-3">Team Performance</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead>Current</TableHead>
                            <TableHead>Previous</TableHead>
                            <TableHead>Change</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Overall Productivity</TableCell>
                            <TableCell>89%</TableCell>
                            <TableCell>85%</TableCell>
                            <TableCell className="text-green-600">+4%</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Improving
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Task Completion Rate</TableCell>
                            <TableCell>92%</TableCell>
                            <TableCell>90%</TableCell>
                            <TableCell className="text-green-600">+2%</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Improving
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Quality of Work</TableCell>
                            <TableCell>95%</TableCell>
                            <TableCell>93%</TableCell>
                            <TableCell className="text-green-600">+2%</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Improving
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Attendance Rate</TableCell>
                            <TableCell>97%</TableCell>
                            <TableCell>98%</TableCell>
                            <TableCell className="text-red-600">-1%</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-amber-50 text-amber-700">
                                Needs Attention
                              </Badge>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === "reports" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department Reports</CardTitle>
                  <CardDescription>Key reports and analytics for your department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Monthly Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-60 bg-gray-100 rounded-md flex items-center justify-center">
                            <p className="text-gray-500">Performance Chart Placeholder</p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button variant="outline" size="sm" className="w-full">
                            <FileText className="mr-2 h-4 w-4" />
                            View Full Report
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Budget Utilization</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-60 bg-gray-100 rounded-md flex items-center justify-center">
                            <p className="text-gray-500">Budget Chart Placeholder</p>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button variant="outline" size="sm" className="w-full">
                            <FileText className="mr-2 h-4 w-4" />
                            View Full Report
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-3">Recent Reports</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Report Name</TableHead>
                            <TableHead>Generated</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Q2 Department Performance</TableCell>
                            <TableCell>2 days ago</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Completed
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Monthly Budget Analysis</TableCell>
                            <TableCell>1 week ago</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Completed
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Team Productivity Report</TableCell>
                            <TableCell>2 weeks ago</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Completed
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Customer Satisfaction Survey</TableCell>
                            <TableCell>1 month ago</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                Completed
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

// Helper function to get initials from name
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

// Helper component for form labels
function Label({
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & { className?: string }) {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}

