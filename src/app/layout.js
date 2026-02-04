// src/app/layout.js
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

export const metadata = {
  title: "Avindya G.H.S. Portfolio",
  description: "Portfolio of Avindya G.H.S., Fullstack Developer",
  icons: [
    { rel: "icon", url: "/icon.png", type: "image/png", sizes: "32x32" },
    { rel: "apple-touch-icon", url: "/icon.png", sizes: "180x180" },
  ],
};



export default function RootLayout({ children }) {
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
