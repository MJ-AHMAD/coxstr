import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CustomFooter } from "@/components/custom-footer"

export const metadata: Metadata = {
  title: "T-ALLY | Cox's Bazar Tourism",
  description: "Building a Peaceful and Modern Bangladesh",
  generator: "v0.dev",
  keywords: "Together Towards a Brighter Future",
  openGraph: {
    title: "Discover Cox's Bazar",
    description: "Building a Peaceful and Modern Bangladesh",
    images: [
      {
        url: "https://mj-ahmad.github.io/mja2025/img/the0.png",
      },
    ],
    url: "https://v0-cox-bazar-travel-project.vercel.app/",
  },
  icons: {
    icon: "https://mj-ahmad.github.io/mja2025/img/logo.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomFooter />
      </body>
    </html>
  )
}



import './globals.css'