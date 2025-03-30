import type { Metadata } from "next"
import EmployeeDashboardClientPage from "./EmployeeDashboardClientPage"

export const metadata: Metadata = {
  title: "Employee Dashboard | Cox Bazar Tourism",
  description: "Employee dashboard for Cox Bazar Tourism project staff.",
}

export default function EmployeeDashboardPage({ params }: { params: { id: string } }) {
  return <EmployeeDashboardClientPage id={params.id} />
}

