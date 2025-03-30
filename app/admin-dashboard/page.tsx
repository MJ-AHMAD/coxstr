import type { Metadata } from "next"
import AdminDashboardClientPage from "./AdminDashboardClientPage"

export const metadata: Metadata = {
  title: "Director General Dashboard | Cox Bazar Travel",
  description:
    "Comprehensive administrative dashboard for the Director General to monitor and manage all project activities",
}

export default function AdminDashboardPage() {
  return <AdminDashboardClientPage />
}

