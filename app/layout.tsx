import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from 'next/font/google';
import RootProviders from "@/components/providers/RootProviders";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "budget tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html 
        lang="en" 
        className="dark" 
        style={{
          colorScheme: 'dark',
        }}
      >
        <body
          className={inter.className}>
            <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
