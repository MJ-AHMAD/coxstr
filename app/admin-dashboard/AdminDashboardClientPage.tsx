"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Activity,
  AlertCircle,
  BarChart3,
  Bell,
  Check,
  ChevronDown,
  Clock,
  CreditCard,
  Download,
  FileText,
  Filter,
  HelpCircle,
  Home,
  Info,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  Percent,
  PieChart,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  Star,
  TrendingUp,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react"
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
import { Input } from "@/components/ui/input"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function AdminDashboardClientPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New booking request",
      message: "A new premium package booking request needs approval",
      time: "10 minutes ago",
      read: false,
      type: "booking",
    },
    {
      id: 2,
      title: "System update completed",
      message: "The system update has been successfully completed",
      time: "1 hour ago",
      read: false,
      type: "system",
    },
    {
      id: 3,
      title: "Financial report ready",
      message: "Monthly financial report for April 2025 is ready for review",
      time: "3 hours ago",
      read: true,
      type: "finance",
    },
    {
      id: 4,
      title: "New partner application",
      message: "Hotel Sea Pearl has applied for partnership",
      time: "5 hours ago",
      read: true,
      type: "partner",
    },
    {
      id: 5,
      title: "Staff meeting reminder",
      message: "Management team meeting tomorrow at 10:00 AM",
      time: "Yesterday",
      read: true,
      type: "reminder",
    },
  ])

  const [showNotificationPanel, setShowNotificationPanel] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length

  const getNotificationIcon = (type) => {
    switch (type) {
      case "booking":
        return <ShoppingCart className="h-5 w-5 text-blue-500" />
      case "system":
        return <Info className="h-5 w-5 text-purple-500" />
      case "finance":
        return <CreditCard className="h-5 w-5 text-green-500" />
      case "partner":
        return <UserPlus className="h-5 w-5 text-amber-500" />
      case "reminder":
        return <Clock className="h-5 w-5 text-red-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-20"
        } hidden md:block`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className={`flex items-center ${!isSidebarOpen && "justify-center w-full"}`}>
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="T-ALLY Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              {isSidebarOpen && <span className="text-xl font-bold text-blue-600">T-ALLY</span>}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={!isSidebarOpen ? "hidden" : ""}
            >
              <ChevronDown className="h-5 w-5 rotate-90" />
            </Button>
          </div>

          <div className="p-4 border-b border-gray-200">
            <div className={`flex ${!isSidebarOpen ? "justify-center" : "items-center"}`}>
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="MJ AHMAD" />
                <AvatarFallback>MJA</AvatarFallback>
              </Avatar>
              {isSidebarOpen && (
                <div className="ml-3">
                  <p className="font-medium text-sm">MJ AHMAD</p>
                  <p className="text-xs text-gray-500">Director General</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-auto py-4">
            <nav className="space-y-1 px-2">
              <Button
                variant={activeTab === "overview" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("overview")}
              >
                <LayoutDashboard className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Overview</span>}
              </Button>

              <Button
                variant={activeTab === "analytics" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("analytics")}
              >
                <BarChart3 className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Analytics</span>}
              </Button>

              <Button
                variant={activeTab === "bookings" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("bookings")}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Bookings</span>}
              </Button>

              <Button
                variant={activeTab === "users" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("users")}
              >
                <Users className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Users</span>}
              </Button>

              <Button
                variant={activeTab === "content" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("content")}
              >
                <FileText className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Content</span>}
              </Button>

              <Button
                variant={activeTab === "finance" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("finance")}
              >
                <CreditCard className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Finance</span>}
              </Button>

              <Button
                variant={activeTab === "partners" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("partners")}
              >
                <UserPlus className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Partners</span>}
              </Button>

              <Button
                variant={activeTab === "reports" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("reports")}
              >
                <PieChart className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Reports</span>}
              </Button>

              <Button
                variant={activeTab === "messages" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("messages")}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Messages</span>}
              </Button>

              <Separator className="my-4" />

              <Button
                variant={activeTab === "settings" ? "secondary" : "ghost"}
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1`}
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Settings</span>}
              </Button>

              <Button
                variant="ghost"
                className={`w-full justify-${isSidebarOpen ? "start" : "center"} mb-1 text-red-500 hover:text-red-700 hover:bg-red-50`}
              >
                <LogOut className="h-5 w-5 mr-2" />
                {isSidebarOpen && <span>Logout</span>}
              </Button>
            </nav>
          </div>

          <div className="p-4 border-t border-gray-200">
            {isSidebarOpen ? (
              <div className="text-xs text-gray-500">
                <p>System Version: 1.2.5</p>
                <p>Last Updated: April 15, 2025</p>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
                <ChevronDown className="h-5 w-5 -rotate-90" />
              </Button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${isSidebarOpen ? "md:ml-64" : "md:ml-20"} transition-all duration-300 ease-in-out`}>
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-2"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <LayoutDashboard className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold">Director General Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="text" placeholder="Search..." className="pl-8 w-64" />
                </div>
              </div>

              <div className="text-sm text-gray-500 hidden md:block">
                {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>

              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={() => setShowNotificationPanel(!showNotificationPanel)}
                >
                  <Bell className="h-5 w-5 text-gray-500" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {unreadCount}
                    </span>
                  )}
                </Button>

                {showNotificationPanel && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200">
                    <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="font-medium">Notifications</h3>
                      <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                        Mark all as read
                      </Button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${
                              !notification.read ? "bg-blue-50" : ""
                            }`}
                          >
                            <div className="flex">
                              <div className="mr-3">{getNotificationIcon(notification.type)}</div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <p className="font-medium text-sm">{notification.title}</p>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-5 w-5 -mr-1 -mt-1 text-gray-400 hover:text-gray-600"
                                    onClick={() => deleteNotification(notification.id)}
                                  >
                                    <X className="h-3 w-3" />
                                  </Button>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">No notifications</div>
                      )}
                    </div>
                    <div className="p-2 border-t border-gray-200 text-center">
                      <Button variant="ghost" size="sm" className="w-full text-blue-600">
                        View all notifications
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="MJ AHMAD" />
                      <AvatarFallback>MJA</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">MJ AHMAD</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        director.general@trustedallytourism.com
                      </p>
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
                  <DropdownMenuItem>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Help & Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Welcome Banner */}
              <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h2 className="text-2xl font-bold">Welcome back, MJ AHMAD</h2>
                      <p className="mt-1 text-blue-100">Here's what's happening with your project today.</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button className="bg-white text-blue-600 hover:bg-blue-50">
                        <Download className="mr-2 h-4 w-4" />
                        Download Daily Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Bookings</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">1,284</h3>
                      </div>
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+12.5%</span>
                      <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Revenue</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">$89,240</h3>
                      </div>
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CreditCard className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+8.2%</span>
                      <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Users</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">3,427</h3>
                      </div>
                      <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+5.3%</span>
                      <span className="text-gray-500 ml-1">from last week</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Partner Hotels</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">42</h3>
                      </div>
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <Home className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+2</span>
                      <span className="text-gray-500 ml-1">new this month</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Dashboard Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue & Bookings Chart */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Revenue & Bookings</CardTitle>
                    <CardDescription>Monthly revenue and booking trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ChartContainer
                        config={{
                          revenue: {
                            label: "Revenue",
                            color: "hsl(var(--chart-1))",
                          },
                          bookings: {
                            label: "Bookings",
                            color: "hsl(var(--chart-2))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis yAxisId="left" orientation="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Line
                              yAxisId="left"
                              type="monotone"
                              dataKey="revenue"
                              stroke="var(--color-revenue)"
                              activeDot={{ r: 8 }}
                            />
                            <Line
                              yAxisId="right"
                              type="monotone"
                              dataKey="bookings"
                              stroke="var(--color-bookings)"
                              activeDot={{ r: 6 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest system activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`p-2 rounded-full ${activity.iconBg}`}>{activity.icon}</div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{activity.title}</p>
                            <p className="text-xs text-gray-500">{activity.description}</p>
                            <p className="text-xs text-gray-400">{activity.time}</p>
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
              </div>

              {/* Project Status & Tasks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Project Status */}
                <Card>
                  <CardHeader>
                    <CardTitle>Project Status</CardTitle>
                    <CardDescription>Current status of ongoing projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projectStatus.map((project) => (
                        <div key={project.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="font-medium">{project.name}</span>
                              <Badge variant={getStatusBadge(project.status)} className="ml-2">
                                {project.status}
                              </Badge>
                            </div>
                            <span className="text-sm text-gray-500">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Start: {project.startDate}</span>
                            <span>Deadline: {project.deadline}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Pending Tasks */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Pending Tasks</CardTitle>
                        <CardDescription>Tasks requiring your attention</CardDescription>
                      </div>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Task
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {pendingTasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${getPriorityColor(task.priority)}`}>
                              {getPriorityIcon(task.priority)}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{task.title}</p>
                              <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View All Tasks
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Recent Bookings */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Recent Bookings</CardTitle>
                      <CardDescription>Latest booking transactions</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-1" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Booking ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Package</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={booking.customerAvatar} alt={booking.customerName} />
                                <AvatarFallback>{getInitials(booking.customerName)}</AvatarFallback>
                              </Avatar>
                              <span>{booking.customerName}</span>
                            </div>
                          </TableCell>
                          <TableCell>{booking.package}</TableCell>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>${booking.amount}</TableCell>
                          <TableCell>
                            <Badge variant={getBookingStatusBadge(booking.status)}>{booking.status}</Badge>
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
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                                <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Cancel Booking</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <div className="text-sm text-gray-500">Page 1 of 10</div>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
              <p className="text-gray-500">Comprehensive analytics and insights for your tourism project.</p>

              {/* Analytics Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">8.42%</h3>
                      </div>
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Percent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+1.2%</span>
                      <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Avg. Booking Value</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">$420</h3>
                      </div>
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CreditCard className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+$35</span>
                      <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Website Traffic</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">24.8K</h3>
                      </div>
                      <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Activity className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+18.3%</span>
                      <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Customer Satisfaction</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-1">4.8/5</h3>
                      </div>
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+0.2</span>
                      <span className="text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* More analytics content would go here */}
            </div>
          )}

          {/* Other tabs would be implemented similarly */}
          {activeTab !== "overview" && activeTab !== "analytics" && (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dashboard
                </h3>
                <p className="text-gray-500">This section is under development. Check back soon for updates.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// Helper functions
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

function getStatusBadge(status) {
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

function getBookingStatusBadge(status) {
  switch (status.toLowerCase()) {
    case "confirmed":
      return "default"
    case "pending":
      return "secondary"
    case "cancelled":
      return "destructive"
    case "completed":
      return "outline"
    default:
      return "outline"
  }
}

function getPriorityColor(priority) {
  switch (priority.toLowerCase()) {
    case "high":
      return "bg-red-100"
    case "medium":
      return "bg-amber-100"
    case "low":
      return "bg-blue-100"
    default:
      return "bg-gray-100"
  }
}

function getPriorityIcon(priority) {
  switch (priority.toLowerCase()) {
    case "high":
      return <AlertCircle className="h-4 w-4 text-red-600" />
    case "medium":
      return <Clock className="h-4 w-4 text-amber-600" />
    case "low":
      return <Info className="h-4 w-4 text-blue-600" />
    default:
      return <Info className="h-4 w-4 text-gray-600" />
  }
}

// Mock data
const revenueData = [
  { month: "Jan", revenue: 15000, bookings: 120 },
  { month: "Feb", revenue: 18000, bookings: 145 },
  { month: "Mar", revenue: 22000, bookings: 165 },
  { month: "Apr", revenue: 25000, bookings: 190 },
  { month: "May", revenue: 30000, bookings: 220 },
  { month: "Jun", revenue: 35000, bookings: 250 },
  { month: "Jul", revenue: 40000, bookings: 280 },
  { month: "Aug", revenue: 45000, bookings: 310 },
  { month: "Sep", revenue: 42000, bookings: 290 },
  { month: "Oct", revenue: 38000, bookings: 260 },
  { month: "Nov", revenue: 35000, bookings: 240 },
  { month: "Dec", revenue: 50000, bookings: 350 },
]

const recentActivities = [
  {
    icon: <ShoppingCart className="h-4 w-4 text-white" />,
    iconBg: "bg-blue-500",
    title: "New booking received",
    description: "Premium Beach Resort Package booked by John Doe",
    time: "10 minutes ago",
  },
  {
    icon: <UserPlus className="h-4 w-4 text-white" />,
    iconBg: "bg-green-500",
    title: "New partner onboarded",
    description: "Sea Pearl Beach Resort & Spa joined as a partner",
    time: "2 hours ago",
  },
  {
    icon: <CreditCard className="h-4 w-4 text-white" />,
    iconBg: "bg-purple-500",
    title: "Payment processed",
    description: "$2,500 payment received for booking #12345",
    time: "3 hours ago",
  },
  {
    icon: <AlertCircle className="h-4 w-4 text-white" />,
    iconBg: "bg-red-500",
    title: "System alert",
    description: "Server maintenance scheduled for tonight at 2 AM",
    time: "5 hours ago",
  },
  {
    icon: <FileText className="h-4 w-4 text-white" />,
    iconBg: "bg-amber-500",
    title: "Report generated",
    description: "Monthly financial report for April 2025 is ready",
    time: "Yesterday",
  },
]

const projectStatus = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    progress: 65,
    startDate: "Mar 1, 2025",
    deadline: "May 15, 2025",
  },
  {
    id: 2,
    name: "Mobile App Development",
    status: "In Progress",
    progress: 40,
    startDate: "Feb 15, 2025",
    deadline: "Jun 30, 2025",
  },
  {
    id: 3,
    name: "Partner Integration API",
    status: "Delayed",
    progress: 25,
    startDate: "Jan 10, 2025",
    deadline: "Apr 10, 2025",
  },
  {
    id: 4,
    name: "Marketing Campaign",
    status: "Completed",
    progress: 100,
    startDate: "Feb 1, 2025",
    deadline: "Mar 15, 2025",
  },
]

const pendingTasks = [
  {
    id: 1,
    title: "Review and approve Q2 marketing budget",
    dueDate: "Today",
    priority: "High",
  },
  {
    id: 2,
    title: "Meet with Sea Pearl Resort management",
    dueDate: "Tomorrow",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Finalize partnership agreement with local tour guides",
    dueDate: "Apr 20, 2025",
    priority: "High",
  },
  {
    id: 4,
    title: "Review website analytics report",
    dueDate: "Apr 22, 2025",
    priority: "Low",
  },
  {
    id: 5,
    title: "Prepare presentation for investor meeting",
    dueDate: "Apr 25, 2025",
    priority: "Medium",
  },
]

const recentBookings = [
  {
    id: "BK-12345",
    customerName: "John Doe",
    customerAvatar: "/placeholder.svg?height=32&width=32",
    package: "Premium Beach Resort",
    date: "Apr 15, 2025",
    amount: 1250,
    status: "Confirmed",
  },
  {
    id: "BK-12346",
    customerName: "Sarah Johnson",
    customerAvatar: "/placeholder.svg?height=32&width=32",
    package: "Adventure Package",
    date: "Apr 18, 2025",
    amount: 850,
    status: "Pending",
  },
  {
    id: "BK-12347",
    customerName: "Michael Chen",
    customerAvatar: "/placeholder.svg?height=32&width=32",
    package: "Family Vacation",
    date: "Apr 20, 2025",
    amount: 1800,
    status: "Confirmed",
  },
  {
    id: "BK-12348",
    customerName: "Emily Wilson",
    customerAvatar: "/placeholder.svg?height=32&width=32",
    package: "Honeymoon Special",
    date: "Apr 22, 2025",
    amount: 2200,
    status: "Confirmed",
  },
  {
    id: "BK-12349",
    customerName: "Robert Kim",
    customerAvatar: "/placeholder.svg?height=32&width=32",
    package: "Weekend Getaway",
    date: "Apr 25, 2025",
    amount: 650,
    status: "Cancelled",
  },
]

