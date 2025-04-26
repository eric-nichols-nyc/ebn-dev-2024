import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

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
        <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-zinc-800">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center gap-6">
              <a href="/" className="text-lg font-bold text-zinc-100 hover:text-zinc-300 transition-colors">Home</a>
              <a href="/projects" className="text-lg font-medium text-zinc-400 hover:text-zinc-100 transition-colors">Projects</a>
              <a href="/contact" className="text-lg font-medium text-zinc-400 hover:text-zinc-100 transition-colors">Contact</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
