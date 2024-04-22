import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salt Flats",
  description: "Looking for premium quality furniture to elevate your living space? Our online catalog offers a stunning range of high-end furniture pieces to suit every style and taste. From luxurious sofas and statement armchairs to elegant dining tables and designer bed frames, we have everything you need to create a sophisticated and stylish home. Browse our collection today and experience the epitome of luxury living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <footer>
          <p>Footer goes here</p>
        </footer>
      </body>
    </html>
  );
}
