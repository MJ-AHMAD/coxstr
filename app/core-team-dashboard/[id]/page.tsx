import type { Metadata } from "next"
import CoreTeamDashboardClientPage from "./CoreTeamDashboardClientPage"

export const metadata: Metadata = {
  title: "Core Team Dashboard | Cox Bazar Tourism",
  description: "Core team member dashboard for Cox Bazar Tourism project management.",
}

export default function CoreTeamDashboardPage({ params }: { params: { id: string } }) {
  return <CoreTeamDashboardClientPage id={params.id} />
}

