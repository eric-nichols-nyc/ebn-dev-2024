import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Sidebar from "./Sidebar";

import "./globals.css";

// add meat for favicon, meta tags, etc.


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: "Eric's Dev Portfolio",
  description: "Projects from work and personal",
  icons: {
    icon: "/next.svg",
    href: "/next.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={`${inter.className} bg-black`}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Content */}
          <main className="flex-1 min-h-screen bg-black">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
