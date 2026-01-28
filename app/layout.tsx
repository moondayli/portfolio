import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Czar",
  description: "Portfolio of Czar — web3 engineer and product builder.",
  icons: {
    icon: "/czar.png",
  },
  openGraph: {
    title: "Czar",
    description: "Portfolio of Czar — web3 engineer and product builder.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Czar portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Czar",
    description: "Portfolio of Czar — web3 engineer and product builder.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
