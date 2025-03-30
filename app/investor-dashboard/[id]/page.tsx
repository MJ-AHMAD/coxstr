import type { Metadata } from "next"
import InvestorDashboardClientPage from "./InvestorDashboardClientPage"

export const metadata: Metadata = {
  title: "Investor Dashboard | Cox Bazar Tourism",
  description: "Investor dashboard for Cox Bazar Tourism project funding and returns tracking.",
}

export default function InvestorDashboardPage({ params }: { params: { id: string } }) {
  return <InvestorDashboardClientPage id={params.id} />
}

