import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Car Hub',
  description: "Discover your perfect car with Car Hub - the ultimate destination for car enthusiasts. Explore our extensive collection of vehicles, compare features, and find the best deals. Start your journey to owning your dream car today!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"relative"}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

