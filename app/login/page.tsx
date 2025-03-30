import type { Metadata } from "next"
import LoginClientPage from "./LoginClientPage"

export const metadata: Metadata = {
  title: "Login | Cox Bazar Tourism",
  description: "Secure login portal for Cox Bazar Tourism project team members, employees, and stakeholders.",
}

export default function LoginPage() {
  return <LoginClientPage />
}

