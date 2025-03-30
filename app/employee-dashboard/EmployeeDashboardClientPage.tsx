"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Award,
  BarChart3,
  Bell,
  Briefcase,
  Calendar,
  Clock,
  Download,
  FileText,
  Info,
  LayoutDashboard,
  LogOut,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Plus,
  Search,
  Settings,
  Star,
  User,
  Users,
} from "lucide-react"

export default function EmployeeDashboardClientPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  // Filter employees based on search term and department
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = departmentFilter === "all" || employee.department === departmentFilter

    return matchesSearch && matchesDepartment
  })

  const openEmployeeProfile = (employee: Employee) => {
    setSelectedEmployee(employee)
    setIsProfileOpen(true)
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
                href="/team-dashboard"
                className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
              >
                Team Dashboard
              </Link>
              <Link
                href="/employee-dashboard"
                className="px-3 py-2 text-sm font-medium text-blue-600 rounded-md bg-blue-50"
              >
                Employee Dashboard
              </Link>
              <Link
                href="/management"
                className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
              >
                Management
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-600" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                5
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin User</p>
                    <p className="text-xs leading-none text-muted-foreground">admin@example.com</p>
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
                <DropdownMenuItem>
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
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("all")}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("directory")}>
              <Users className="mr-2 h-4 w-4" />
              Employee Directory
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("departments")}>
              <Briefcase className="mr-2 h-4 w-4" />
              Departments
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("performance")}>
              <BarChart3 className="mr-2 h-4 w-4" />
              Performance
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("attendance")}>
              <Calendar className="mr-2 h-4 w-4" />
              Attendance
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("documents")}>
              <FileText className="mr-2 h-4 w-4" />
              Documents
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
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <p className="text-sm font-medium">Monthly review meeting tomorrow at 2 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {/* Dashboard Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
            <h1 className="text-2xl font-bold text-gray-900">Employee Dashboard</h1>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search employees..."
                  className="pl-8 w-full sm:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex space-x-2">
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="Management">Management</SelectItem>
                    <SelectItem value="Operations">Operations</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Customer Service">Customer Service</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="IT">IT</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Employee
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Employees</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">42</h3>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-500 font-medium">+3</span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Departments</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">6</h3>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-500">No change</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Attendance Rate</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">95%</h3>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-500 font-medium">+2%</span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Open Positions</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">5</h3>
                  </div>
                  <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-red-500 font-medium">+2</span>
                  <span className="text-gray-500 ml-1">new openings</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Employee List */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Employee Directory</CardTitle>
                      <CardDescription>
                        {filteredEmployees.length} {filteredEmployees.length === 1 ? "employee" : "employees"} found
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredEmployees.length > 0 ? (
                      filteredEmployees.map((employee) => (
                        <div
                          key={employee.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                          onClick={() => openEmployeeProfile(employee)}
                        >
                          <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={employee.avatar} alt={employee.name} />
                              <AvatarFallback>{getInitials(employee.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{employee.name}</h3>
                              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 space-y-1 sm:space-y-0 sm:space-x-3">
                                <span>{employee.position}</span>
                                <span className="hidden sm:inline">•</span>
                                <span>{employee.department}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                              {employee.status}
                            </Badge>
                            <Button variant="ghost" size="icon" className="ml-2">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Phone className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No employees found matching your search criteria.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <div className="text-sm text-gray-500">Page 1 of 1</div>
                  <Button variant="outline" size="sm" disabled>
                    Next
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Department Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Department Distribution</CardTitle>
                  <CardDescription>Employee count by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ChartContainer
                      config={{
                        value: {
                          label: "Employees",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={departmentDistribution}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {departmentDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest employee updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={activity.avatar} alt={activity.name} />
                          <AvatarFallback>{getInitials(activity.name)}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.name}</span> {activity.action}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    View All Activities
                  </Button>
                </CardFooter>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Scheduled meetings and events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-blue-100 text-blue-600 rounded-md p-2 text-center min-w-[50px]">
                          <div className="text-xs font-medium">{event.date.month}</div>
                          <div className="text-lg font-bold">{event.date.day}</div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{event.title}</p>
                          <p className="text-xs text-gray-500">{event.time}</p>
                          {event.location && (
                            <div className="flex items-center text-xs text-gray-500">
                              <MapPin className="h-3 w-3 mr-1" />
                              {event.location}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Department Performance */}
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Quarterly performance metrics by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer
                    config={{
                      efficiency: {
                        label: "Efficiency",
                        color: "hsl(var(--chart-1))",
                      },
                      quality: {
                        label: "Quality",
                        color: "hsl(var(--chart-2))",
                      },
                      satisfaction: {
                        label: "Satisfaction",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={departmentPerformance}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="department" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="efficiency" fill="var(--color-efficiency)" name="Efficiency" />
                        <Bar dataKey="quality" fill="var(--color-quality)" name="Quality" />
                        <Bar dataKey="satisfaction" fill="var(--color-satisfaction)" name="Satisfaction" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performers */}
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Employees with highest performance ratings</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Performance Score</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Achievements</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topPerformers.map((performer) => (
                      <TableRow key={performer.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={performer.avatar} alt={performer.name} />
                              <AvatarFallback>{getInitials(performer.name)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{performer.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{performer.department}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={performer.score} className="h-2 w-24" />
                            <span>{performer.score}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < performer.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {performer.achievements.map((achievement, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-green-50 text-green-700 hover:bg-green-100"
                              >
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Employee Profile Dialog */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="max-w-3xl">
          {selectedEmployee && (
            <>
              <DialogHeader>
                <DialogTitle>Employee Profile</DialogTitle>
                <DialogDescription>Detailed information about {selectedEmployee.name}</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Profile Summary */}
                <div className="md:col-span-1 flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={selectedEmployee.avatar} alt={selectedEmployee.name} />
                    <AvatarFallback>{getInitials(selectedEmployee.name)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{selectedEmployee.name}</h3>
                  <p className="text-gray-500">{selectedEmployee.position}</p>
                  <Badge className="mt-2">{selectedEmployee.department}</Badge>

                  <div className="mt-6 w-full space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>{selectedEmployee.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{selectedEmployee.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{selectedEmployee.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Joined: {selectedEmployee.joinDate}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-2">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                    <Button size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Full Profile
                    </Button>
                  </div>
                </div>

                {/* Details and Performance */}
                <div className="md:col-span-2 space-y-6">
                  <Tabs defaultValue="overview">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="performance">Performance</TabsTrigger>
                      <TabsTrigger value="projects">Projects</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div>
                        <h4 className="font-medium mb-2">About</h4>
                        <p className="text-sm text-gray-600">{selectedEmployee.bio}</p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedEmployee.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Responsibilities</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {selectedEmployee.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Education & Certifications</h4>
                        <div className="space-y-2">
                          {selectedEmployee.education.map((edu, index) => (
                            <div key={index} className="text-sm">
                              <div className="font-medium">{edu.degree}</div>
                              <div className="text-gray-600">
                                {edu.institution}, {edu.year}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="performance" className="space-y-4 pt-4">
                      <div>
                        <h4 className="font-medium mb-2">Performance Rating</h4>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < selectedEmployee.performanceData.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-lg font-medium">
                            {selectedEmployee.performanceData.rating.toFixed(1)}/5.0
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Performance Metrics</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Productivity</span>
                              <span>{selectedEmployee.performanceData.productivity}%</span>
                            </div>
                            <Progress value={selectedEmployee.performanceData.productivity} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Quality of Work</span>
                              <span>{selectedEmployee.performanceData.quality}%</span>
                            </div>
                            <Progress value={selectedEmployee.performanceData.quality} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Teamwork</span>
                              <span>{selectedEmployee.performanceData.teamwork}%</span>
                            </div>
                            <Progress value={selectedEmployee.performanceData.teamwork} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Communication</span>
                              <span>{selectedEmployee.performanceData.communication}%</span>
                            </div>
                            <Progress value={selectedEmployee.performanceData.communication} className="h-2" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Recent Achievements</h4>
                        <div className="space-y-2">
                          {selectedEmployee.performanceData.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Award className="h-5 w-5 text-yellow-500 mt-0.5" />
                              <div className="text-sm">{achievement}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="projects" className="space-y-4 pt-4">
                      <div className="space-y-3">
                        {selectedEmployee.projects.map((project, index) => (
                          <div key={index} className="border rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium">{project.name}</h4>
                              <Badge variant={getProjectStatusBadge(project.status)}>{project.status}</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                            <div className="mt-3">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                            </div>
                            <div className="mt-3 flex justify-between text-xs text-gray-500">
                              <span>Role: {project.role}</span>
                              <span>Deadline: {project.deadline}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setIsProfileOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

// Helper functions
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

function getProjectStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "completed":
      return "default"
    case "in progress":
      return "secondary"
    case "pending":
      return "outline"
    case "delayed":
      return "destructive"
    default:
      return "outline"
  }
}

// Mock data
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

// Types
interface Employee {
  id: number
  name: string
  position: string
  department: string
  email: string
  phone: string
  location: string
  joinDate: string
  status: string
  avatar: string
  bio: string
  skills: string[]
  responsibilities: string[]
  education: {
    degree: string
    institution: string
    year: string
  }[]
  performanceData: {
    rating: number
    productivity: number
    quality: number
    teamwork: number
    communication: number
    achievements: string[]
  }
  projects: {
    name: string
    description: string
    status: string
    progress: number
    role: string
    deadline: string
  }[]
}

// Mock data
const employees: Employee[] = [
  {
    id: 1,
    name: "John Smith",
    position: "Operations Manager",
    department: "Operations",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "Cox's Bazar Office",
    joinDate: "Jan 15, 2020",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "John is an experienced operations manager with over 10 years in the tourism industry. He oversees all day-to-day operations and ensures smooth functioning of all services.",
    skills: ["Operations Management", "Team Leadership", "Strategic Planning", "Customer Service", "Crisis Management"],
    responsibilities: [
      "Oversee daily operations of the tourism services",
      "Manage operational staff and resources",
      "Develop and implement operational policies and procedures",
      "Ensure high quality of service delivery",
      "Handle customer escalations and resolve complex issues",
    ],
    education: [
      {
        degree: "MBA in Tourism Management",
        institution: "University of Dhaka",
        year: "2015",
      },
      {
        degree: "Bachelor of Business Administration",
        institution: "North South University",
        year: "2010",
      },
    ],
    performanceData: {
      rating: 4.8,
      productivity: 92,
      quality: 95,
      teamwork: 90,
      communication: 88,
      achievements: [
        "Increased operational efficiency by 25% in 2023",
        "Led the team to achieve highest customer satisfaction rating",
        "Successfully managed peak season operations with zero major incidents",
      ],
    },
    projects: [
      {
        name: "Service Quality Enhancement",
        description: "Implementing new service standards across all tourism offerings",
        status: "In Progress",
        progress: 75,
        role: "Project Lead",
        deadline: "Apr 30, 2025",
      },
      {
        name: "Staff Training Program",
        description: "Comprehensive training for all customer-facing staff",
        status: "Completed",
        progress: 100,
        role: "Program Director",
        deadline: "Jan 15, 2025",
      },
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Marketing Director",
    department: "Marketing",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 234-5678",
    location: "Cox's Bazar Office",
    joinDate: "Mar 10, 2021",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "Sarah is a creative marketing professional with expertise in digital marketing and brand development. She leads all marketing initiatives for the company.",
    skills: ["Digital Marketing", "Brand Strategy", "Content Creation", "Social Media Management", "Market Research"],
    responsibilities: [
      "Develop and implement marketing strategies",
      "Manage marketing campaigns and initiatives",
      "Oversee social media presence and digital marketing",
      "Analyze market trends and competitor activities",
      "Manage marketing budget and resources",
    ],
    education: [
      {
        degree: "Master of Marketing",
        institution: "University of Chittagong",
        year: "2018",
      },
      {
        degree: "Bachelor of Business Administration",
        institution: "BRAC University",
        year: "2014",
      },
    ],
    performanceData: {
      rating: 4.7,
      productivity: 90,
      quality: 92,
      teamwork: 85,
      communication: 95,
      achievements: [
        "Increased social media engagement by 40%",
        "Successfully launched 3 major marketing campaigns",
        "Reduced customer acquisition cost by 15%",
      ],
    },
    projects: [
      {
        name: "Digital Marketing Campaign",
        description: "Comprehensive digital campaign targeting international tourists",
        status: "In Progress",
        progress: 60,
        role: "Campaign Manager",
        deadline: "May 15, 2025",
      },
      {
        name: "Brand Refresh",
        description: "Updating company branding and visual identity",
        status: "Pending",
        progress: 30,
        role: "Project Lead",
        deadline: "Jun 30, 2025",
      },
    ],
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Customer Service Manager",
    department: "Customer Service",
    email: "michael.chen@example.com",
    phone: "+1 (555) 345-6789",
    location: "Cox's Bazar Office",
    joinDate: "Jun 5, 2021",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "Michael is dedicated to ensuring exceptional customer experiences. He manages the customer service team and develops service improvement strategies.",
    skills: ["Customer Service", "Conflict Resolution", "Team Management", "Process Improvement", "CRM Systems"],
    responsibilities: [
      "Manage customer service team and operations",
      "Develop and implement service standards",
      "Handle complex customer issues and escalations",
      "Monitor and improve customer satisfaction metrics",
      "Train staff on customer service best practices",
    ],
    education: [
      {
        degree: "Bachelor of Business Administration",
        institution: "University of Dhaka",
        year: "2016",
      },
      {
        degree: "Diploma in Customer Service Management",
        institution: "Bangladesh Tourism Institute",
        year: "2018",
      },
    ],
    performanceData: {
      rating: 4.5,
      productivity: 88,
      quality: 90,
      teamwork: 92,
      communication: 94,
      achievements: [
        "Improved customer satisfaction rating from 4.2 to 4.8",
        "Reduced average response time by 30%",
        "Implemented new customer feedback system",
      ],
    },
    projects: [
      {
        name: "Customer Feedback System",
        description: "Implementing a comprehensive feedback collection and analysis system",
        status: "Completed",
        progress: 100,
        role: "Project Manager",
        deadline: "Feb 28, 2025",
      },
      {
        name: "Service Recovery Protocol",
        description: "Developing standardized protocols for handling service failures",
        status: "In Progress",
        progress: 70,
        role: "Team Lead",
        deadline: "Apr 15, 2025",
      },
    ],
  },
  {
    id: 4,
    name: "Priya Patel",
    position: "Finance Manager",
    department: "Finance",
    email: "priya.patel@example.com",
    phone: "+1 (555) 456-7890",
    location: "Cox's Bazar Office",
    joinDate: "Sep 15, 2022",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "Priya is a detail-oriented finance professional responsible for managing the company's financial operations, budgeting, and financial reporting.",
    skills: ["Financial Management", "Budgeting", "Financial Analysis", "Accounting", "Risk Management"],
    responsibilities: [
      "Manage company finances and accounting operations",
      "Prepare financial reports and statements",
      "Develop and monitor budgets",
      "Ensure compliance with financial regulations",
      "Oversee payroll and expense management",
    ],
    education: [
      {
        degree: "Master of Finance",
        institution: "University of Dhaka",
        year: "2019",
      },
      {
        degree: "Bachelor of Commerce",
        institution: "University of Chittagong",
        year: "2015",
      },
    ],
    performanceData: {
      rating: 4.6,
      productivity: 91,
      quality: 94,
      teamwork: 85,
      communication: 88,
      achievements: [
        "Streamlined financial reporting process, saving 10 hours per month",
        "Implemented cost-saving measures resulting in 12% reduction in operational expenses",
        "Successfully managed audit with zero major findings",
      ],
    },
    projects: [
      {
        name: "Financial System Upgrade",
        description: "Implementing new financial management software",
        status: "In Progress",
        progress: 65,
        role: "Project Manager",
        deadline: "May 31, 2025",
      },
      {
        name: "Budget Planning 2025",
        description: "Developing comprehensive budget for next fiscal year",
        status: "Pending",
        progress: 25,
        role: "Lead Analyst",
        deadline: "Jun 30, 2025",
      },
    ],
  },
  {
    id: 5,
    name: "Ahmed Khan",
    position: "IT Manager",
    department: "IT",
    email: "ahmed.khan@example.com",
    phone: "+1 (555) 567-8901",
    location: "Cox's Bazar Office",
    joinDate: "Feb 20, 2022",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "Ahmed oversees all IT infrastructure and systems. He ensures that technology solutions support business operations effectively and securely.",
    skills: ["IT Infrastructure", "Network Management", "Cybersecurity", "System Administration", "Project Management"],
    responsibilities: [
      "Manage IT infrastructure and systems",
      "Ensure system security and data protection",
      "Provide technical support to all departments",
      "Implement and maintain business applications",
      "Develop IT policies and procedures",
    ],
    education: [
      {
        degree: "Master of Computer Science",
        institution: "Bangladesh University of Engineering and Technology",
        year: "2017",
      },
      {
        degree: "Bachelor of Computer Science",
        institution: "North South University",
        year: "2013",
      },
    ],
    performanceData: {
      rating: 4.7,
      productivity: 93,
      quality: 90,
      teamwork: 87,
      communication: 85,
      achievements: [
        "Implemented new booking system with 99.9% uptime",
        "Reduced IT support response time by 40%",
        "Successfully migrated all systems to cloud infrastructure",
      ],
    },
    projects: [
      {
        name: "System Security Enhancement",
        description: "Implementing advanced security measures across all systems",
        status: "In Progress",
        progress: 80,
        role: "Security Lead",
        deadline: "Apr 15, 2025",
      },
      {
        name: "Mobile App Development",
        description: "Creating a mobile app for customer bookings and information",
        status: "In Progress",
        progress: 50,
        role: "Project Manager",
        deadline: "Jul 31, 2025",
      },
    ],
  },
  {
    id: 6,
    name: "Maria Rodriguez",
    position: "Tour Guide Manager",
    department: "Operations",
    email: "maria.rodriguez@example.com",
    phone: "+1 (555) 678-9012",
    location: "Cox's Bazar Office",
    joinDate: "Apr 10, 2021",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "Maria manages the tour guide team and ensures high-quality tour experiences. She has extensive knowledge of local attractions and history.",
    skills: ["Tour Management", "Team Leadership", "Local Knowledge", "Customer Service", "Multilingual"],
    responsibilities: [
      "Manage and train tour guide team",
      "Develop tour itineraries and content",
      "Ensure quality and consistency of tour experiences",
      "Handle customer feedback related to tours",
      "Coordinate with other departments for seamless service",
    ],
    education: [
      {
        degree: "Bachelor of Tourism Management",
        institution: "University of Dhaka",
        year: "2016",
      },
      {
        degree: "Certificate in Tour Guide Excellence",
        institution: "Bangladesh Tourism Board",
        year: "2018",
      },
    ],
    performanceData: {
      rating: 4.9,
      productivity: 95,
      quality: 97,
      teamwork: 94,
      communication: 96,
      achievements: [
        "Developed 5 new specialized tour packages",
        "Achieved highest customer satisfaction rating for guided tours",
        "Successfully trained 12 new tour guides",
      ],
    },
    projects: [
      {
        name: "Cultural Experience Enhancement",
        description: "Developing new cultural immersion experiences for tourists",
        status: "In Progress",
        progress: 70,
        role: "Project Lead",
        deadline: "May 15, 2025",
      },
      {
        name: "Guide Training Program",
        description: "Comprehensive training program for new and existing guides",
        status: "Completed",
        progress: 100,
        role: "Program Director",
        deadline: "Feb 28, 2025",
      },
    ],
  },
  {
    id: 7,
    name: "David Wilson",
    position: "Transportation Coordinator",
    department: "Operations",
    email: "david.wilson@example.com",
    phone: "+1 (555) 789-0123",
    location: "Cox's Bazar Office",
    joinDate: "Jul 5, 2022",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "David manages all transportation services, ensuring safe and efficient travel for tourists. He coordinates with drivers and maintains the vehicle fleet.",
    skills: ["Transportation Management", "Logistics", "Route Planning", "Fleet Maintenance", "Safety Protocols"],
    responsibilities: [
      "Coordinate all transportation services",
      "Manage driver schedules and assignments",
      "Ensure vehicle maintenance and safety",
      "Optimize routes and transportation efficiency",
      "Handle transportation-related customer issues",
    ],
    education: [
      {
        degree: "Bachelor of Business Administration",
        institution: "University of Chittagong",
        year: "2017",
      },
      {
        degree: "Certificate in Transport Management",
        institution: "Bangladesh Road Transport Authority",
        year: "2019",
      },
    ],
    performanceData: {
      rating: 4.5,
      productivity: 89,
      quality: 92,
      teamwork: 88,
      communication: 86,
      achievements: [
        "Reduced transportation delays by 35%",
        "Implemented new vehicle tracking system",
        "Optimized routes resulting in 15% fuel savings",
      ],
    },
    projects: [
      {
        name: "Fleet Modernization",
        description: "Upgrading and expanding the transportation fleet",
        status: "In Progress",
        progress: 60,
        role: "Project Manager",
        deadline: "Jun 30, 2025",
      },
      {
        name: "Driver Safety Program",
        description: "Comprehensive safety training for all drivers",
        status: "In Progress",
        progress: 75,
        role: "Program Coordinator",
        deadline: "Apr 15, 2025",
      },
    ],
  },
  {
    id: 8,
    name: "Fatima Rahman",
    position: "HR Manager",
    department: "Management",
    email: "fatima.rahman@example.com",
    phone: "+1 (555) 890-1234",
    location: "Cox's Bazar Office",
    joinDate: "Nov 15, 2021",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "Fatima manages all human resources functions, including recruitment, employee relations, and training. She ensures a positive work environment and employee satisfaction.",
    skills: ["HR Management", "Recruitment", "Employee Relations", "Training & Development", "Performance Management"],
    responsibilities: [
      "Manage recruitment and onboarding processes",
      "Develop and implement HR policies",
      "Handle employee relations and conflict resolution",
      "Coordinate training and development programs",
      "Oversee performance evaluation systems",
    ],
    education: [
      {
        degree: "Master of Human Resource Management",
        institution: "University of Dhaka",
        year: "2018",
      },
      {
        degree: "Bachelor of Business Administration",
        institution: "East West University",
        year: "2014",
      },
    ],
    performanceData: {
      rating: 4.6,
      productivity: 90,
      quality: 92,
      teamwork: 94,
      communication: 95,
      achievements: [
        "Reduced employee turnover by 20%",
        "Implemented new performance evaluation system",
        "Successfully recruited 15 key positions",
      ],
    },
    projects: [
      {
        name: "Employee Engagement Program",
        description: "Developing initiatives to improve employee satisfaction and engagement",
        status: "In Progress",
        progress: 65,
        role: "Program Director",
        deadline: "May 31, 2025",
      },
      {
        name: "HR Policy Update",
        description: "Comprehensive review and update of all HR policies",
        status: "Pending",
        progress: 30,
        role: "Project Lead",
        deadline: "Jul 15, 2025",
      },
    ],
  },
  {
    id: 9,
    name: "Robert Kim",
    position: "Accommodation Manager",
    department: "Operations",
    email: "robert.kim@example.com",
    phone: "+1 (555) 901-2345",
    location: "Cox's Bazar Office",
    joinDate: "Jan 10, 2022",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "Robert manages all accommodation services, ensuring high-quality lodging experiences for tourists. He coordinates with hotels and other accommodation providers.",
    skills: [
      "Hospitality Management",
      "Vendor Relations",
      "Quality Assurance",
      "Customer Service",
      "Contract Management",
    ],
    responsibilities: [
      "Manage relationships with accommodation providers",
      "Ensure quality standards for all accommodations",
      "Handle accommodation-related customer issues",
      "Negotiate contracts with hotels and resorts",
      "Monitor and report on accommodation performance",
    ],
    education: [
      {
        degree: "Bachelor of Hospitality Management",
        institution: "University of Dhaka",
        year: "2016",
      },
      {
        degree: "Certificate in Hotel Management",
        institution: "Bangladesh Tourism Institute",
        year: "2018",
      },
    ],
    performanceData: {
      rating: 4.4,
      productivity: 87,
      quality: 90,
      teamwork: 85,
      communication: 88,
      achievements: [
        "Expanded accommodation options by 30%",
        "Improved accommodation quality ratings by 15%",
        "Successfully negotiated preferred rates with 10 new hotels",
      ],
    },
    projects: [
      {
        name: "Accommodation Quality Standards",
        description: "Developing and implementing new quality standards for all accommodations",
        status: "In Progress",
        progress: 55,
        role: "Project Manager",
        deadline: "Jun 15, 2025",
      },
      {
        name: "Boutique Hotel Partnership",
        description: "Establishing partnerships with boutique hotels for premium packages",
        status: "Pending",
        progress: 25,
        role: "Lead Negotiator",
        deadline: "Jul 31, 2025",
      },
    ],
  },
  {
    id: 10,
    name: "Sophia Lee",
    position: "Content Creator",
    department: "Marketing",
    email: "sophia.lee@example.com",
    phone: "+1 (555) 012-3456",
    location: "Cox's Bazar Office",
    joinDate: "Mar 5, 2023",
    status: "Full-time",
    avatar: "/placeholder.svg?height=64&width=64",
    bio: "Sophia creates engaging content for marketing materials, social media, and the company website. She has a background in creative writing and digital media.",
    skills: ["Content Creation", "Social Media Management", "Photography", "Copywriting", "Video Editing"],
    responsibilities: [
      "Create engaging content for all marketing channels',nage social media accounts and engagement",
      "Develop and maintain website content",
      "Produce promotional videos and photography",
      "Write copy for brochures and advertisements",
    ],
    education: [
      {
        degree: "Bachelor of Media and Communication",
        institution: "BRAC University",
        year: "2020",
      },
      {
        degree: "Certificate in Digital Marketing",
        institution: "Google Digital Garage",
        year: "2021",
      },
    ],
    performanceData: {
      rating: 4.5,
      productivity: 88,
      quality: 93,
      teamwork: 86,
      communication: 92,
      achievements: [
        "Increased social media engagement by 45%",
        "Created viral video content with over 100,000 views",
        "Redesigned website content resulting in 30% longer visit duration",
      ],
    },
    projects: [
      {
        name: "Social Media Campaign",
        description: "Developing comprehensive social media strategy for high season",
        status: "In Progress",
        progress: 70,
        role: "Content Lead",
        deadline: "Apr 30, 2025",
      },
      {
        name: "Destination Video Series",
        description: "Creating video showcases of key attractions in Cox's Bazar",
        status: "In Progress",
        progress: 40,
        role: "Producer",
        deadline: "Jun 15, 2025",
      },
    ],
  },
]

const departmentDistribution = [
  { name: "Operations", value: 20 },
  { name: "Marketing", value: 8 },
  { name: "Customer Service", value: 6 },
  { name: "Finance", value: 3 },
  { name: "IT", value: 2 },
  { name: "Management", value: 3 },
]

const departmentPerformance = [
  { department: "Operations", efficiency: 85, quality: 88, satisfaction: 90 },
  { department: "Marketing", efficiency: 82, quality: 90, satisfaction: 85 },
  { department: "Customer Service", efficiency: 90, quality: 92, satisfaction: 95 },
  { department: "Finance", efficiency: 88, quality: 95, satisfaction: 80 },
  { department: "IT", efficiency: 92, quality: 85, satisfaction: 82 },
  { department: "Management", efficiency: 86, quality: 89, satisfaction: 88 },
]

const recentActivities = [
  {
    name: "John Smith",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "completed the quarterly operations review",
    time: "2 hours ago",
  },
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "launched a new marketing campaign",
    time: "4 hours ago",
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "resolved 5 customer service tickets",
    time: "Yesterday at 3:45 PM",
  },
  {
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "submitted the monthly financial report",
    time: "Yesterday at 1:30 PM",
  },
  {
    name: "Ahmed Khan",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "deployed the new booking system update",
    time: "2 days ago",
  },
]

const upcomingEvents = [
  {
    title: "Monthly Staff Meeting",
    date: { month: "Mar", day: "15" },
    time: "10:00 AM - 11:30 AM",
    location: "Conference Room A",
  },
  {
    title: "Marketing Strategy Review",
    date: { month: "Mar", day: "18" },
    time: "2:00 PM - 3:30 PM",
    location: "Meeting Room B",
  },
  {
    title: "New Employee Orientation",
    date: { month: "Mar", day: "22" },
    time: "9:00 AM - 12:00 PM",
    location: "Training Room",
  },
  {
    title: "Quarterly Performance Reviews",
    date: { month: "Mar", day: "25" },
    time: "All Day",
    location: null,
  },
]

const topPerformers = [
  {
    id: 1,
    name: "Maria Rodriguez",
    department: "Operations",
    score: 95,
    rating: 5,
    avatar: "/placeholder.svg?height=32&width=32",
    achievements: ["Top Guide", "Customer Excellence"],
  },
  {
    id: 2,
    name: "John Smith",
    department: "Operations",
    score: 92,
    rating: 5,
    avatar: "/placeholder.svg?height=32&width=32",
    achievements: ["Operations Star"],
  },
  {
    id: 3,
    name: "Sophia Lee",
    department: "Marketing",
    score: 90,
    rating: 4,
    avatar: "/placeholder.svg?height=32&width=32",
    achievements: ["Content Creator"],
  },
  {
    id: 4,
    name: "Michael Chen",
    department: "Customer Service",
    score: 89,
    rating: 4,
    avatar: "/placeholder.svg?height=32&width=32",
    achievements: ["Service Excellence"],
  },
  {
    id: 5,
    name: "Ahmed Khan",
    department: "IT",
    score: 88,
    rating: 4,
    avatar: "/placeholder.svg?height=32&width=32",
    achievements: ["Tech Innovator"],
  },
]

