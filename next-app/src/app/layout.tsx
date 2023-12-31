import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/context/appContext'
import postService from '@/services/postService'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = await postService.fetchPosts();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider data={posts}>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
