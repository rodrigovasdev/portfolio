import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Rodrigo",
  description: "Portafolio de Ingeniero de Software",
  icons:{
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>

        <title>Rodrigo Vásquez </title>
        <meta name="description" content="Portafolio de Ingeniero de Software"/>

        <meta property="og:url" content="https://portfolio-sigma-topaz-13.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Rodrigo Vásquez "/>
        <meta property="og:description" content="Portafolio de Ingeniero de Software"/>
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/b911a582-7baa-4a87-92e8-3601ac32ab38.png?token=VCtPZ1xbUyX3XRyqyw_z0KTk1bse3-rL5uzadLhbCDk&height=800&width=1200&expires=33284279231"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="portfolio-sigma-topaz-13.vercel.app"/>
        <meta property="twitter:url" content="https://portfolio-sigma-topaz-13.vercel.app/"/>
        <meta name="twitter:title" content="Rodrigo Vásquez "/>
        <meta name="twitter:description" content="Portafolio de Ingeniero de Software"/>
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/b911a582-7baa-4a87-92e8-3601ac32ab38.png?token=VCtPZ1xbUyX3XRyqyw_z0KTk1bse3-rL5uzadLhbCDk&height=800&width=1200&expires=33284279231"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
