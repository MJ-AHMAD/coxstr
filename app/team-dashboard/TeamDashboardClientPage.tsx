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
import Footer from "@/components/footer"
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
  Legend,
  ResponsiveContainer,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Calendar } from "@/components/ui/calendar"
import {
  Activity,
  AlertCircle,
  BarChart3,
  Bell,
  CalendarIcon,
  CheckCircle2,
  Clock,
  FileText,
  Filter,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  PieChartIcon,
  Plus,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react"

export default function TeamDashboardClientPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState("overview")

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
                className="px-3 py-2 text-sm font-medium text-blue-600 rounded-md bg-blue-50"
              >
                Dashboard
              </Link>
              <Link
                href="/management"
                className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
              >
                Management
              </Link>
              <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
                About
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
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
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
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("overview")}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("projects")}>
              <Activity className="mr-2 h-4 w-4" />
              Projects
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("team")}>
              <Users className="mr-2 h-4 w-4" />
              Team
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("tasks")}>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Tasks
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("calendar")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("reports")}>
              <BarChart3 className="mr-2 h-4 w-4" />
              Reports
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("messages")}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </Button>
          </div>
          <div className="mt-auto pt-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <p className="text-sm font-medium">Team meeting today at 3 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {/* Dashboard Title */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Team Dashboard</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Projects</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">12</h3>
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
                        <p className="text-sm font-medium text-gray-500">Pending Tasks</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">28</h3>
                      </div>
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-red-500 font-medium">+5</span>
                      <span className="text-gray-500 ml-1">from yesterday</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Team Members</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">10</h3>
                      </div>
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-green-500 font-medium">+1</span>
                      <span className="text-gray-500 ml-1">new this week</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Completion Rate</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">78%</h3>
                      </div>
                      <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <PieChartIcon className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-green-500 font-medium">+5%</span>
                      <span className="text-gray-500 ml-1">from last week</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Progress</CardTitle>
                  <CardDescription>Track the progress of key projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projectProgress.map((project) => (
                      <div key={project.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="font-medium">{project.name}</span>
                            <Badge variant={getBadgeVariant(project.status)} className="ml-2">
                              {project.status}
                            </Badge>
                          </div>
                          <span className="text-sm text-gray-500">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Lead: {project.lead}</span>
                          <span>Deadline: {project.deadline}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Activity and Performance Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Activity</CardTitle>
                    <CardDescription>Weekly activity overview</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ChartContainer
                        config={{
                          tasks: {
                            label: "Tasks Completed",
                            color: "hsl(var(--chart-1))",
                          },
                          meetings: {
                            label: "Meetings",
                            color: "hsl(var(--chart-2))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={activityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Bar dataKey="tasks" fill="var(--color-tasks)" name="Tasks Completed" />
                            <Bar dataKey="meetings" fill="var(--color-meetings)" name="Meetings" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                    <CardDescription>Monthly team performance</CardDescription>
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
                          timeliness: {
                            label: "Timeliness",
                            color: "hsl(var(--chart-3))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="efficiency"
                              stroke="var(--color-efficiency)"
                              activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="quality" stroke="var(--color-quality)" />
                            <Line type="monotone" dataKey="timeliness" stroke="var(--color-timeliness)" />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates from the team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <Avatar className="mt-1">
                          <AvatarImage src={activity.userAvatar} alt={activity.user} />
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

          {/* Team Tab */}
          {activeTab === "team" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Core Team Members</CardTitle>
                      <CardDescription>The key personnel managing all project activities</CardDescription>
                    </div>
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Member
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreTeamMembers.map((member) => (
                      <Card key={member.id} className="overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{member.name}</h3>
                              <p className="text-sm text-gray-500">{member.role}</p>
                              <div className="flex items-center mt-1">
                                {member.skills.map((skill, index) => (
                                  <Badge key={index} variant="secondary" className="mr-1 text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Separator className="my-4" />
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Projects</span>
                              <span className="font-medium">{member.projects}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Tasks</span>
                              <span className="font-medium">{member.tasks}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">Completion</span>
                              <span className="font-medium">{member.completion}%</span>
                            </div>
                          </div>
                          <div className="mt-4 flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Message
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <FileText className="mr-2 h-4 w-4" />
                              Profile
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Team Performance</CardTitle>
                  <CardDescription>Individual contribution metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ChartContainer
                      config={{
                        tasks: {
                          label: "Tasks Completed",
                          color: "hsl(var(--chart-1))",
                        },
                        hours: {
                          label: "Hours Logged",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={teamPerformanceData}
                          layout="vertical"
                          margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="tasks" fill="var(--color-tasks)" name="Tasks Completed" />
                          <Bar dataKey="hours" fill="var(--color-hours)" name="Hours Logged" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Team Workload Distribution</CardTitle>
                  <CardDescription>Current project allocation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="h-64">
                      <ChartContainer
                        config={{
                          value: {
                            label: "Projects",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={workloadData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              nameKey="name"
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                              {workloadData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <ChartTooltip content={<ChartTooltipContent />} />
                          </PieChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">Workload Analysis</h4>
                      <div className="space-y-4">
                        {workloadAnalysis.map((item, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{item.name}</span>
                              <span className="text-sm text-gray-500">{item.projects} projects</span>
                            </div>
                            <Progress value={item.workload} className="h-2" />
                            <p className="text-xs text-gray-500">{item.status}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">Active Projects</h2>
                  <p className="text-sm text-gray-500">Manage and track all ongoing projects</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle>{project.name}</CardTitle>
                        <Badge variant={getBadgeVariant(project.status)}>{project.status}</Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <CalendarIcon className="mr-1 h-4 w-4 text-gray-500" />
                            <span>Deadline: {project.deadline}</span>
                          </div>
                          <div className="flex -space-x-2">
                            {project.team.map((member, index) => (
                              <Avatar key={index} className="h-6 w-6 border-2 border-white">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="ghost" size="sm" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Project Timeline</CardTitle>
                  <CardDescription>Upcoming milestones and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projectTimeline.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-xs font-medium text-blue-600">{item.date.split(" ")[0]}</span>
                          </div>
                          <div className="h-full w-0.5 bg-blue-100"></div>
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{item.title}</h4>
                              <Badge variant={getBadgeVariant(item.status)}>{item.status}</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                            <div className="mt-3 flex items-center justify-between text-sm">
                              <span className="text-gray-500">{item.date}</span>
                              <div className="flex items-center">
                                <Avatar className="h-6 w-6 mr-2">
                                  <AvatarImage src={item.owner.avatar} alt={item.owner.name} />
                                  <AvatarFallback>{getInitials(item.owner.name)}</AvatarFallback>
                                </Avatar>
                                <span>{item.owner.name}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Tasks Tab */}
          {activeTab === "tasks" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">Task Management</h2>
                  <p className="text-sm text-gray-500">Track and manage team tasks</p>
                </div>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </div>

              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All Tasks</TabsTrigger>
                  <TabsTrigger value="my">My Tasks</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4">
                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[300px]">Task</TableHead>
                            <TableHead>Assignee</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tasks.map((task) => (
                            <TableRow key={task.id}>
                              <TableCell className="font-medium">{task.title}</TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <Avatar className="h-6 w-6 mr-2">
                                    <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                                    <AvatarFallback>{getInitials(task.assignee.name)}</AvatarFallback>
                                  </Avatar>
                                  <span>{task.assignee.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant={getPriorityBadge(task.priority)}>{task.priority}</Badge>
                              </TableCell>
                              <TableCell>{task.dueDate}</TableCell>
                              <TableCell>
                                <Badge variant={getStatusBadge(task.status)}>{task.status}</Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">Actions</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Assign</DropdownMenuItem>
                                    <DropdownMenuItem>Mark Complete</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="my" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-center text-gray-500">
                        Filtered view of your assigned tasks would appear here.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="upcoming" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-center text-gray-500">Tasks with upcoming deadlines would appear here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="completed" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-center text-gray-500">Completed tasks history would appear here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card>
                <CardHeader>
                  <CardTitle>Task Distribution</CardTitle>
                  <CardDescription>Tasks assigned to team members</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ChartContainer
                      config={{
                        value: {
                          label: "Tasks",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={taskDistributionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {taskDistributionData.map((entry, index) => (
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
            </div>
          )}

          {/* Calendar Tab */}
          {activeTab === "calendar" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Team Calendar</CardTitle>
                      <CardDescription>Schedule and deadlines</CardDescription>
                    </div>
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Event
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Scheduled meetings and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {calendarEvents.map((event, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-blue-100 text-blue-600 rounded-md p-2 text-center min-w-[60px]">
                          <div className="text-xs font-medium">{event.date.month}</div>
                          <div className="text-xl font-bold">{event.date.day}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{event.title}</h4>
                            <Badge variant={event.type === "meeting" ? "secondary" : "default"}>{event.type}</Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{event.time}</span>
                            {event.location && (
                              <>
                                <span className="mx-2">•</span>
                                <span>{event.location}</span>
                              </>
                            )}
                          </div>
                          {event.attendees && (
                            <div className="mt-3">
                              <div className="text-sm text-gray-500 mb-1">Attendees:</div>
                              <div className="flex -space-x-2">
                                {event.attendees.map((attendee, idx) => (
                                  <Avatar key={idx} className="h-6 w-6 border-2 border-white">
                                    <AvatarImage src={attendee.avatar} alt={attendee.name} />
                                    <AvatarFallback>{getInitials(attendee.name)}</AvatarFallback>
                                  </Avatar>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === "reports" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">Reports & Analytics</h2>
                  <p className="text-sm text-gray-500">Performance insights and metrics</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Task Completion</CardTitle>
                    <CardDescription>Weekly progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">78%</div>
                    <p className="text-sm text-green-600">+5% from last week</p>
                    <div className="mt-4 h-2">
                      <Progress value={78} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Team Efficiency</CardTitle>
                    <CardDescription>Tasks per hour</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">3.2</div>
                    <p className="text-sm text-amber-600">-0.3 from last month</p>
                    <div className="mt-4 h-2">
                      <Progress value={65} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Project Health</CardTitle>
                    <CardDescription>Overall status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">Good</div>
                    <p className="text-sm text-gray-500">2 projects need attention</p>
                    <div className="mt-4 h-2">
                      <Progress value={85} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Performance</CardTitle>
                    <CardDescription>Task completion trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ChartContainer
                        config={{
                          completed: {
                            label: "Completed",
                            color: "hsl(var(--chart-1))",
                          },
                          target: {
                            label: "Target",
                            color: "hsl(var(--chart-2))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={monthlyPerformanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="completed"
                              stroke="var(--color-completed)"
                              activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="target" stroke="var(--color-target)" strokeDasharray="5 5" />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Resource Allocation</CardTitle>
                    <CardDescription>Time spent by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ChartContainer
                        config={{
                          hours: {
                            label: "Hours",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={resourceAllocationData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Bar dataKey="hours" fill="var(--color-hours)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Key Performance Indicators</CardTitle>
                  <CardDescription>Critical metrics for project success</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Metric</TableHead>
                        <TableHead>Current</TableHead>
                        <TableHead>Target</TableHead>
                        <TableHead>Previous</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {kpiData.map((kpi, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{kpi.metric}</TableCell>
                          <TableCell>{kpi.current}</TableCell>
                          <TableCell>{kpi.target}</TableCell>
                          <TableCell>{kpi.previous}</TableCell>
                          <TableCell>
                            <Badge variant={getKpiStatusBadge(kpi.status)}>{kpi.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === "messages" && (
            <div className="space-y-6">
              <Card className="h-[calc(100vh-12rem)]">
                <div className="flex h-full">
                  <div className="w-1/3 border-r border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <input
                          type="text"
                          placeholder="Search messages..."
                          className="w-full rounded-md border border-gray-200 pl-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="overflow-auto h-[calc(100%-4rem)]">
                      {conversations.map((conversation, index) => (
                        <div
                          key={index}
                          className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                            index === 0 ? "bg-blue-50" : ""
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <Avatar>
                              <AvatarImage src={conversation.avatar} alt={conversation.name} />
                              <AvatarFallback>{getInitials(conversation.name)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium truncate">{conversation.name}</h4>
                                <span className="text-xs text-gray-500">{conversation.time}</span>
                              </div>
                              <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                            </div>
                          </div>
                          {conversation.unread > 0 && (
                            <div className="mt-1 flex justify-end">
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-xs font-medium text-white">
                                {conversation.unread}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-2/3 flex flex-col">
                    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Sarah Johnson</h4>
                          <p className="text-xs text-gray-500">Online</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex-1 overflow-auto p-4 space-y-4">
                      {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
                          {!message.sent && (
                            <Avatar className="mr-2 mt-1">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Johnson" />
                              <AvatarFallback>SJ</AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.sent ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${message.sent ? "text-blue-100" : "text-gray-500"}`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="flex-1 rounded-md border border-gray-200 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button size="icon">
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
                            className="lucide lucide-send"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>

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

function getBadgeVariant(status: string) {
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

function getPriorityBadge(priority: string) {
  switch (priority.toLowerCase()) {
    case "high":
      return "destructive"
    case "medium":
      return "secondary"
    case "low":
      return "outline"
    default:
      return "outline"
  }
}

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "completed":
      return "default"
    case "in progress":
      return "secondary"
    case "pending":
      return "outline"
    case "blocked":
      return "destructive"
    default:
      return "outline"
  }
}

function getKpiStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "on target":
      return "default"
    case "improving":
      return "secondary"
    case "needs attention":
      return "destructive"
    default:
      return "outline"
  }
}

// Mock data
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D", "#FF6B6B", "#6B66FF"]

const projectProgress = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    progress: 65,
    lead: "John Doe",
    deadline: "Mar 15, 2025",
  },
  {
    id: 2,
    name: "Mobile App Development",
    status: "Delayed",
    progress: 40,
    lead: "Sarah Johnson",
    deadline: "Apr 10, 2025",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    status: "Completed",
    progress: 100,
    lead: "Michael Chen",
    deadline: "Feb 28, 2025",
  },
  {
    id: 4,
    name: "Customer Feedback System",
    status: "Pending",
    progress: 20,
    lead: "Priya Patel",
    deadline: "May 5, 2025",
  },
]

const activityData = [
  { day: "Mon", tasks: 12, meetings: 3 },
  { day: "Tue", tasks: 15, meetings: 2 },
  { day: "Wed", tasks: 10, meetings: 4 },
  { day: "Thu", tasks: 18, meetings: 1 },
  { day: "Fri", tasks: 14, meetings: 3 },
  { day: "Sat", tasks: 8, meetings: 0 },
  { day: "Sun", tasks: 5, meetings: 0 },
]

const performanceData = [
  { month: "Jan", efficiency: 75, quality: 82, timeliness: 78 },
  { month: "Feb", efficiency: 78, quality: 80, timeliness: 75 },
  { month: "Mar", efficiency: 82, quality: 85, timeliness: 80 },
  { month: "Apr", efficiency: 79, quality: 87, timeliness: 82 },
  { month: "May", efficiency: 85, quality: 88, timeliness: 85 },
  { month: "Jun", efficiency: 88, quality: 90, timeliness: 87 },
]

const recentActivity = [
  {
    user: "John Doe",
    userAvatar: "/placeholder.svg?height=40&width=40",
    action: 'completed the task "Update homepage design"',
    time: "2 hours ago",
  },
  {
    user: "Sarah Johnson",
    userAvatar: "/placeholder.svg?height=40&width=40",
    action: 'created a new project "Mobile App Phase 2"',
    time: "4 hours ago",
  },
  {
    user: "Michael Chen",
    userAvatar: "/placeholder.svg?height=40&width=40",
    action: 'commented on "Marketing Campaign Strategy"',
    time: "Yesterday at 3:45 PM",
  },
  {
    user: "Priya Patel",
    userAvatar: "/placeholder.svg?height=40&width=40",
    action: "assigned 3 tasks to Ahmed Khan",
    time: "Yesterday at 1:30 PM",
  },
  {
    user: "Robert Kim",
    userAvatar: "/placeholder.svg?height=40&width=40",
    action: 'uploaded the file "Q1 Financial Report.pdf"',
    time: "2 days ago",
  },
]

const coreTeamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["Leadership", "Strategy"],
    projects: 5,
    tasks: 12,
    completion: 92,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Lead Developer",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["React", "Node.js"],
    projects: 4,
    tasks: 18,
    completion: 85,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["SEO", "Content"],
    projects: 3,
    tasks: 9,
    completion: 78,
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "UX Designer",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["UI/UX", "Figma"],
    projects: 4,
    tasks: 15,
    completion: 90,
  },
  {
    id: 5,
    name: "Ahmed Khan",
    role: "Backend Developer",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["Python", "Django"],
    projects: 3,
    tasks: 14,
    completion: 82,
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Financial Analyst",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["Finance", "Analytics"],
    projects: 2,
    tasks: 7,
    completion: 95,
  },
  {
    id: 7,
    name: "Fatima Rahman",
    role: "HR Manager",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["Recruitment", "Training"],
    projects: 2,
    tasks: 8,
    completion: 88,
  },
]

const teamPerformanceData = [
  { name: "John Doe", tasks: 24, hours: 42 },
  { name: "Sarah Johnson", tasks: 32, hours: 38 },
  { name: "Michael Chen", tasks: 18, hours: 35 },
  { name: "Priya Patel", tasks: 27, hours: 40 },
  { name: "Ahmed Khan", tasks: 22, hours: 37 },
]

const workloadData = [
  { name: "Website Redesign", value: 35 },
  { name: "Mobile App", value: 25 },
  { name: "Marketing Campaign", value: 20 },
  { name: "Customer Feedback", value: 15 },
  { name: "Internal Tools", value: 5 },
]

const workloadAnalysis = [
  {
    name: "John Doe",
    projects: 5,
    workload: 85,
    status: "High workload, consider redistribution",
  },
  {
    name: "Sarah Johnson",
    projects: 4,
    workload: 75,
    status: "Balanced workload",
  },
  {
    name: "Michael Chen",
    projects: 3,
    workload: 60,
    status: "Balanced workload",
  },
  {
    name: "Priya Patel",
    projects: 4,
    workload: 80,
    status: "Approaching capacity",
  },
]

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Revamp the company website with modern design and improved UX",
    status: "In Progress",
    progress: 65,
    deadline: "Mar 15, 2025",
    team: [
      { name: "John Doe", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Priya Patel", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Ahmed Khan", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Create a native mobile app for iOS and Android platforms",
    status: "Delayed",
    progress: 40,
    deadline: "Apr 10, 2025",
    team: [
      { name: "Sarah Johnson", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Ahmed Khan", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Launch a comprehensive digital marketing campaign",
    status: "Completed",
    progress: 100,
    deadline: "Feb 28, 2025",
    team: [
      { name: "Michael Chen", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Fatima Rahman", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    id: 4,
    name: "Customer Feedback System",
    description: "Implement a new system for collecting and analyzing customer feedback",
    status: "Pending",
    progress: 20,
    deadline: "May 5, 2025",
    team: [
      { name: "Priya Patel", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Robert Kim", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    id: 5,
    name: "Internal Tools",
    description: "Develop internal tools to improve team productivity",
    status: "In Progress",
    progress: 55,
    deadline: "Apr 25, 2025",
    team: [
      { name: "Sarah Johnson", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "John Doe", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    id: 6,
    name: "Training Program",
    description: "Create comprehensive training materials for new employees",
    status: "In Progress",
    progress: 30,
    deadline: "May 20, 2025",
    team: [
      { name: "Fatima Rahman", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Robert Kim", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
]

const projectTimeline = [
  {
    title: "Website Redesign - Phase 1 Completion",
    description: "Complete the initial design phase and get client approval",
    date: "15 Mar 2025",
    status: "In Progress",
    owner: { name: "John Doe", avatar: "/placeholder.svg?height=24&width=24" },
  },
  {
    title: "Mobile App Beta Launch",
    description: "Release beta version for internal testing",
    date: "28 Mar 2025",
    status: "Pending",
    owner: { name: "Sarah Johnson", avatar: "/placeholder.svg?height=24&width=24" },
  },
  {
    title: "Q2 Marketing Strategy Meeting",
    description: "Finalize marketing strategy for the second quarter",
    date: "05 Apr 2025",
    status: "Pending",
    owner: { name: "Michael Chen", avatar: "/placeholder.svg?height=24&width=24" },
  },
  {
    title: "Customer Feedback System Implementation",
    description: "Deploy the new feedback collection system",
    date: "15 Apr 2025",
    status: "Pending",
    owner: { name: "Priya Patel", avatar: "/placeholder.svg?height=24&width=24" },
  },
]

const tasks = [
  {
    id: 1,
    title: "Finalize homepage design",
    assignee: { name: "Priya Patel", avatar: "/placeholder.svg?height=24&width=24" },
    priority: "High",
    dueDate: "Mar 10, 2025",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Implement user authentication",
    assignee: { name: "Ahmed Khan", avatar: "/placeholder.svg?height=24&width=24" },
    priority: "High",
    dueDate: "Mar 12, 2025",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Create content for blog section",
    assignee: { name: "Michael Chen", avatar: "/placeholder.svg?height=24&width=24" },
    priority: "Medium",
    dueDate: "Mar 15, 2025",
    status: "Pending",
  },
  {
    id: 4,
    title: "Set up analytics tracking",
    assignee: { name: "Sarah Johnson", avatar: "/placeholder.svg?height=24&width=24" },
    priority: "Medium",
    dueDate: "Mar 18, 2025",
    status: "Pending",
  },
  {
    id: 5,
    title: "Review and test mobile responsiveness",
    assignee: { name: "John Doe", avatar: "/placeholder.svg?height=24&width=24" },
    priority: "High",
    dueDate: "Mar 20, 2025",
    status: "Pending",
  },
  {
    id: 6,
    title: "Prepare presentation for client meeting",
    assignee: { name: "John Doe", avatar: "/placeholder.svg?height=24&width=24" },
    priority: "High",
    dueDate: "Mar 8, 2025",
    status: "Completed",
  },
  {
    id: 7,
    title: "Fix navigation menu bug",
    assignee: { name: "Ahmed Khan", avatar: "/placeholder.svg?height=24&width=24" },
    priority: "High",
    dueDate: "Mar 7, 2025",
    status: "Completed",
  },
]

const taskDistributionData = [
  { name: "John Doe", value: 12 },
  { name: "Sarah Johnson", value: 18 },
  { name: "Michael Chen", value: 9 },
  { name: "Priya Patel", value: 15 },
  { name: "Ahmed Khan", value: 14 },
]

const calendarEvents = [
  {
    title: "Team Weekly Meeting",
    description: "Regular team sync-up to discuss progress and blockers",
    date: { month: "Mar", day: "12" },
    time: "10:00 AM - 11:00 AM",
    location: "Conference Room A",
    type: "meeting",
    attendees: [
      { name: "John Doe", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Sarah Johnson", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Michael Chen", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Priya Patel", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    title: "Website Redesign Deadline",
    description: "Final deadline for the website redesign project",
    date: { month: "Mar", day: "15" },
    time: "All day",
    type: "deadline",
  },
  {
    title: "Client Presentation",
    description: "Present the mobile app progress to the client",
    date: { month: "Mar", day: "18" },
    time: "2:00 PM - 3:30 PM",
    location: "Virtual Meeting",
    type: "meeting",
    attendees: [
      { name: "John Doe", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Sarah Johnson", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    title: "Marketing Strategy Review",
    description: "Review and finalize Q2 marketing strategy",
    date: { month: "Mar", day: "22" },
    time: "11:00 AM - 12:30 PM",
    location: "Conference Room B",
    type: "meeting",
    attendees: [
      { name: "John Doe", avatar: "/placeholder.svg?height=24&width=24" },
      { name: "Michael Chen", avatar: "/placeholder.svg?height=24&width=24" },
    ],
  },
]

const monthlyPerformanceData = [
  { month: "Jan", completed: 45, target: 50 },
  { month: "Feb", completed: 52, target: 55 },
  { month: "Mar", completed: 58, target: 60 },
  { month: "Apr", completed: 63, target: 65 },
  { month: "May", completed: 70, target: 70 },
  { month: "Jun", completed: 75, target: 75 },
]

const resourceAllocationData = [
  { category: "Development", hours: 120 },
  { category: "Design", hours: 80 },
  { category: "Marketing", hours: 60 },
  { category: "Research", hours: 40 },
  { category: "Meetings", hours: 30 },
  { category: "Admin", hours: 25 },
]

const kpiData = [
  {
    metric: "Task Completion Rate",
    current: "78%",
    target: "85%",
    previous: "72%",
    status: "Improving",
  },
  {
    metric: "Project Delivery On Time",
    current: "65%",
    target: "80%",
    previous: "60%",
    status: "Needs Attention",
  },
  {
    metric: "Customer Satisfaction",
    current: "4.2/5",
    target: "4.5/5",
    previous: "4.0/5",
    status: "Improving",
  },
  {
    metric: "Team Efficiency",
    current: "82%",
    target: "85%",
    previous: "80%",
    status: "On Target",
  },
  {
    metric: "Budget Adherence",
    current: "92%",
    target: "95%",
    previous: "90%",
    status: "On Target",
  },
]

const conversations = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I've updated the design files for the homepage.",
    time: "10:30 AM",
    unread: 2,
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "When is our next marketing meeting?",
    time: "Yesterday",
    unread: 0,
  },
  {
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "The new UI components look great!",
    time: "Yesterday",
    unread: 0,
  },
  {
    name: "Ahmed Khan",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I fixed the authentication bug you reported.",
    time: "Monday",
    unread: 0,
  },
  {
    name: "Robert Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Here's the budget report for this month.",
    time: "Monday",
    unread: 0,
  },
]

const messages = [
  {
    text: "Hi John, how's the website redesign coming along?",
    time: "10:30 AM",
    sent: false,
  },
  {
    text: "Hey Sarah! It's going well. We've completed about 65% of the work.",
    time: "10:32 AM",
    sent: true,
  },
  {
    text: "That's great to hear! Any blockers I should know about?",
    time: "10:33 AM",
    sent: false,
  },
  {
    text: "We're waiting on some content for the about page, but otherwise things are on track.",
    time: "10:35 AM",
    sent: true,
  },
  {
    text: "I've updated the design files for the homepage. Can you take a look when you have a chance?",
    time: "10:36 AM",
    sent: false,
  },
  {
    text: "Sure, I'll review them this afternoon and get back to you.",
    time: "10:38 AM",
    sent: true,
  },
  {
    text: "Perfect! Let me know if you need anything else from me.",
    time: "10:39 AM",
    sent: false,
  },
]

