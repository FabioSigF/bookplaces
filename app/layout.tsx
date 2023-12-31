import { Nunito } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/Modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentalModal from './components/Modals/RentModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb - BookPlaces',
  description: 'BookPlaces Website',
}

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentalModal />
        <Navbar currentUser={currentUser}/>
        {children}
      </body>
    </html>
  )
}
