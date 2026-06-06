import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans, Lora, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EnviroOne | Transforming Lives in Sierra Leone",
  description:
    "EnviroOne is dedicated to sustainable development, clean water access, and educational empowerment in Sierra Leone.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} ${lora.variable} ${robotoMono.variable} antialiased bg-cream text-charcoal font-sans flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
