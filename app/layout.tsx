import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mithrandir - BI wtihout the BS',
  description: 'Business Intelligence whitout the BS',
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.png", // Path to your favicon
    apple: "/apple-touch-icon.png", // Path to your apple-touch-icon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
