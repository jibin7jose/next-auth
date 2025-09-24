import './globals.css'
import { AuthProvider } from '@/hooks/useAuth'

export const metadata = {
  title: 'Next.js Auth ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
