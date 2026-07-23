import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../../lib/utils";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadimul Rahib",
  description: "Nadimul Rahib's personal website and portfolio.",
  keywords: [
    "Nadimul Rahib",
    "portfolio",
    "personal website",
    "web developer",
    "software engineer",
    "Nadim",
    "Rahib",
    "Nadimul",
    "Nadimul Rahib portfolio",
    "Nadimul Rahib personal website",
    "Nadimul Rahib web developer",
    "Nadimul Rahib software engineer",
  ],
  authors: [{ name: "Nadimul Rahib", url: "https://nadimulrahib.com" }],
  creator: "Nadimul Rahib",
  openGraph: {
    title: "Nadimul Rahib",
    description: "Nadimul Rahib's personal website and portfolio.",
    url: "https://nadimulrahib.com",
    siteName: "Nadimul Rahib",
    images: [
      {
        url: "https://nadimulrahib.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadimul Rahib",
    description: "Nadimul Rahib's personal website and portfolio.",
    images: ["https://nadimulrahib.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        outfit.variable,
        interHeading.variable,
      )}
    >
      <body
        className="  mx-auto
    flex
    min-h-screen
    w-full
    flex-col

    max-w-full
    sm:max-w-160
    md:max-w-3xl
    lg:max-w-5xl
    xl:max-w-7xl
    2xl:max-w-[1600px]

    px-4
    sm:px-6
    lg:px-8"
      >
        <Navbar />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
