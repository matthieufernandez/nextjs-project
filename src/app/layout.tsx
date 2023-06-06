import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Matt's Image Gallery",
  description: "This is a simple image gallery built using NextJS and the Unsplash API",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>This div is shared across layouts.</div>
        {children}</body>
    </html>
  )
}
