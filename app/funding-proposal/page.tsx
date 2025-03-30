import type { Metadata } from "next"
import FundingProposalClientPage from "./FundingProposalClientPage"

export const metadata: Metadata = {
  title: "Funding Proposal | Cox's Bazar Tourism Project",
  description: "Request for financial support for the Cox's Bazar Tourism Development Project",
}

export default function FundingProposalPage() {
  return <FundingProposalClientPage />
}

