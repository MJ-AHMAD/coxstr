import type { Metadata } from "next"
import BoardDashboardClientPage from "./BoardDashboardClientPage"

export const metadata: Metadata = {
  title: "Board Member Dashboard | Cox Bazar Tourism",
  description: "Board member dashboard for Cox Bazar Tourism project management and oversight.",
}

export default function BoardDashboardPage({ params }: { params: { id: string } }) {
  return <BoardDashboardClientPage id={params.id} />
}

