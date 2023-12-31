import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link'
import LoadingPage from '../components/loadingPage';
import Amplitude from '../analytics';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moonwith 6',
  description: 'A blog by Malik',
}

export default function RootLayout({ children }) {
  const isBrowser = typeof window !== "undefined";
  isBrowser && Amplitude()
  return (
    <html lang="en">
      <body className={inter.className}>
      <LoadingPage/>
        <header className='main-header'>
          <Link href="/">
          <div className='title'>
            <h1>Moonwith 6</h1>
          </div>
          </Link>
          {/* <div className='subtitle'>
            <p>Malik&apos;s personal platform.</p>
          </div> */}
        </header>
        
          {children}
          <footer>Only You Know Who You Can Be</footer>

          {/* The following tag enables web analytics at Vercel */}
          <Analytics />
          
      </body>
    </html>
  )
}
