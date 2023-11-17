import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clade Club",
  description: "Decentralized Autonomous Organization Organizator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} grid grid-rows-[auto_1fr_auto] min-h-screen`}>
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