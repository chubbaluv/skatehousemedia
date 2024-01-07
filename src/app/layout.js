import './globals.css'

export const metadata = {
  title: 'SkateHouseMedia',
  description: 'Archival preservation of SkateHouseMedia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
