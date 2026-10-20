import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '웹 다이어리',
  description: 'Next.js API Route → n8n Webhook 연동 실습',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
