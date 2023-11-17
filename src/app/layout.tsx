import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "../Providers";
import localFont from "next/font/local";

const Openrunde = localFont({
  src: [
    {
      path: "../fonts/OpenRunde-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/OpenRunde-Regular.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/OpenRunde-Regular.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/OpenRunde-Regular.woff",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Clade Club",
  description: "Decentralized Autonomous Organization Organizator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${Openrunde.className} grid grid-rows-[auto_1fr_auto] min-h-screen`}>
          <Header />
          <div className="flex flex-col md:flex-row">
            <Navigation />
            {children}
          </div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
