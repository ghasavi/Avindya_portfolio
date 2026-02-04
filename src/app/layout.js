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
  icons: {
    icon: {
      url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%2300b4b1"/><path d="M30,70 L50,30 L70,70" fill="none" stroke="%23000" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><line x1="40" y1="55" x2="60" y2="55" stroke="%23000" stroke-width="10" stroke-linecap="round"/></svg>',
      type: 'image/svg+xml',
    },
    apple: {
      url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%2300b4b1"/><path d="M30,70 L50,30 L70,70" fill="none" stroke="%23000" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><line x1="40" y1="55" x2="60" y2="55" stroke="%23000" stroke-width="10" stroke-linecap="round"/></svg>',
      type: 'image/svg+xml',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%2300b4b1%22/><path d=%22M30,70 L50,30 L70,70%22 fill=%22none%22 stroke=%22%23000%22 stroke-width=%2212%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/><line x1=%2240%22 y1=%2255%22 x2=%2260%22 y2=%2255%22 stroke=%22%23000%22 stroke-width=%2210%22 stroke-linecap=%22round%22/></svg>" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}