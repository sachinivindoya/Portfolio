import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose weights you need
  variable: '--font-poppins',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Sachini Vinodya | Personal Portfolio",
  description: "Dedicated Full Stack Developer skilled in modern web technologies, focused on creating scalable applications. Proven ability to manage development cycles and ensure innovative ideas transform into successful products."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className="font-sans">
      
        {children}
      </body>
    </html>
  );
}
