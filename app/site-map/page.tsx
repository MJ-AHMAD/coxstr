import type { Metadata } from "next"
import SiteMapClientPage from "./SiteMapClientPage"

export const metadata: Metadata = {
  title: "Site Map | TRUSTED-ALLY Tourism",
  description: "Complete overview of all pages and sections of the TRUSTED-ALLY Cox's Bazar Tourism website.",
}

export default function SiteMapPage() {
  return <SiteMapClientPage />
}

