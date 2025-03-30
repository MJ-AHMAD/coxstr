import TeamDashboardClientPage from "./TeamDashboardClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team Dashboard | Cox's Bazar Tourism",
  description: "Core team dashboard for managing and monitoring all project activities for Cox's Bazar Tourism.",
}

export default function TeamDashboardPage() {
  return <TeamDashboardClientPage />
}

