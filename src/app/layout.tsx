import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local'
import './globals.css';
import { cn } from '@/lib/utils';


export const metadata: Metadata = {
  title: 'ODONTO RISO',
  description: 'Clinica de odonto',
  keywords: ['odonto', 'sorriso', 'odonto', 'sorriso'],

};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});


const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" >
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable, fontHeading.variable
      )}>{children}</body>
    </html>
  )
}
