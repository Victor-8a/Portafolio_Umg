import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "UMG Portafolio - Desarrollo Web",
  description: "Portafolio de proyectos de Desarrollo Web - Universidad Mariano Gálvez, Campus Petén",
  generator: "v0.app",
  icons: {
    icon: "/jhp.png", // o "/icon.png", dependiendo de tu archivo
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
