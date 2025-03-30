import type { Metadata } from "next"
import RolesClientPage from "./RolesClientPage"

export const metadata: Metadata = {
  title: "Organizational Roles & Responsibilities | Cox's Bazar Tourism",
  description:
    "Comprehensive overview of all roles, responsibilities, and organizational structure for the Cox's Bazar Tourism Project.",
}

export default function RolesPage() {
  return <RolesClientPage />
}

