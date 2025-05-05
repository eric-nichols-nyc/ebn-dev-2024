import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/layout/provider";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en">
      <body className={`${inter.className}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
