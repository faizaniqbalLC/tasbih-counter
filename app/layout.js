import './globals.css'

export const metadata = {
  title: 'Tasbih Counter - Track Your Daily Dhikr',
  description: 'An Islamic dhikr counter app to track your daily prayers and remembrance of Allah',
  keywords: 'tasbih, dhikr, islamic, counter, prayer, muslim, tasbeeh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}