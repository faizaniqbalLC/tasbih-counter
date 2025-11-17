import './globals.css'

export const metadata = {
  title: 'Tasbih Counter - Track Your Daily Dhikr',
  description: 'An Islamic dhikr counter app to track your daily prayers and remembrance of Allah',
  keywords: 'tasbih, dhikr, islamic, counter, prayer, muslim, tasbeeh',

  openGraph: {
    title: 'Tasbih Counter - Track Your Daily Dhikr',
    description: 'Track your daily tasbih and dhikr easily with this simple Islamic counter.',
    url: 'https://your-domain.com', // <-- CHANGE THIS
    siteName: 'Tasbih Counter',
    images: [
      {
        url: 'https://your-domain.com/preview.png', // <-- CHANGE THIS
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tasbih Counter - Track Your Daily Dhikr',
    description: 'Track your daily tasbih and dhikr easily with this Islamic counter app.',
    images: ['https://your-domain.com/preview.png'], // <-- CHANGE THIS
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <link rel="manifest" href="/manifest.json" />
      <body>{children}</body>
    </html>
  )
}