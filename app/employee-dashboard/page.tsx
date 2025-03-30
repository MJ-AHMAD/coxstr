import type { Metadata } from "next"
import EmployeeDashboardClientPage from "./EmployeeDashboardClientPage"

export const metadata: Metadata = {
  title: "Employee Dashboard | Cox Bazar Travel",
  description: "Comprehensive dashboard for managing employee profiles, roles, responsibilities, and activities",
}

export default function EmployeeDashboardPage() {
  return <EmployeeDashboardClientPage />
}

