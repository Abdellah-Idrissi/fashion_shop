import './globals.css'
import type { Metadata } from 'next'
import { Prata } from 'next/font/google'
import localFont from 'next/font/local'
import { ClerkProvider } from '@clerk/nextjs'
import ToasterProvider from '@/components/ToasterProvider'
import favicon from "../../public/favicon.ico"
import { RtkProvider } from '@/rtk/rtk-provider'
import UserHandler from '@/components/UserHandler'


// FONTS
export const prata = Prata({ subsets: ['latin'] , weight: '400'})
export const futurA = localFont({
  src: [
    {
      path: '../fonts/FuturaCyrillicBook.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/FuturaCyrillicMedium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FuturaCyrillicBold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
})

// METADATA
export const metadata: Metadata = {
  title: 'Fashion Shop',
  description: 'Fashion Shop Created by Abdellah Moumen El Idrissi',
  icons: [{ rel: 'icon', url: favicon.src }],
}


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body  className={`${futurA.className} min-h-screen text-[#2D2D2D] overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-[#B4B4B4]`}  >

            <RtkProvider>

              <ToasterProvider/>
              <UserHandler/>
              {children}

            </RtkProvider>

        </body>
      </ClerkProvider>
    </html>
  )
}