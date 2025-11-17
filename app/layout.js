import './globals.css'





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