import './globals.css'
import StyledComponentsRegistry from './registry'

export const metadata = {
  title: 'SkateHouseMedia',
  description: 'Archival preservation of SkateHouseMedia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
