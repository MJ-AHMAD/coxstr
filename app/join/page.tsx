import type { Metadata } from "next"
import JoinClientPage from "./JoinClientPage"

export const metadata: Metadata = {
  title: "Join Our Online Education Platform | Cox's Bazar Learning Hub",
  description:
    "Join our online education platform designed specifically for Cox's Bazar students. Access courses, learning materials, and expert teachers to enhance your education journey.",
}

export default function JoinPage() {
  return <JoinClientPage />
}

