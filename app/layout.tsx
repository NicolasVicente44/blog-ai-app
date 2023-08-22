import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Navbar from "./(shared)/Navbar";
import Footer from "app/(shared)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog AI App",
  description: "Blog built in NextJS and utilizes AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
