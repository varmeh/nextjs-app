import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Theme from './theme-provider'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-base text-base-content tracking-tight`}>
        <Theme>
          <div className='flex flex-col min-h-screen overflow-hidden'>
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  )
}
