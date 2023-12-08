import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Note Craft',
  description: 'Explore our innovative note-making application that simplifies organization, boosts productivity, and enhances your note-taking experience. Create, edit, and manage notes effortlessly.',
  manifest: "/manifest.json",
  openGraph: {
    title: 'Note Craft',
    description: 'Explore our innovative note-making application that simplifies organization, boosts productivity, and enhances your note-taking experience. Create, edit, and manage notes effortlessly.',
    url: process.env.DOMAIN,
    siteName: 'Note Craft',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/assets/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }, { url: 'assets/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }],
    shortcut: ['/assets/icons/favicon.ico'],
    apple: [{ url: '/assets/icons/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/assets/icons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  applicationName: 'Note Craft'
}

export const viewport: Viewport = {
  themeColor: '#c7e7ff'
}

{/*
*/}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Note Craft" />
        <meta name="msapplication-TileColor" content="#c7e7ff" />
        <meta name="msapplication-TileImage" content="/assets/icons/mstile-144x144.png" />
        <meta name="msapplication-config" content="/assets/icons/browserconfig.xml" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className='h-screen w-screen'><Navigation />{children}</body>
    </html>
  )
}

