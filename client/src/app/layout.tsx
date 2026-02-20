import type { Metadata } from "next";
import { Montserrat, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Mustafa Aabid | Govt Teacher & JKBOSE Mentor",
  description: "Empowering Students, Serving the Community. Study material for Classes 6-10 and CSC Services in Hanjiwera.",
};

import AnnouncementPopup from "@/components/AnnouncementPopup";

import { ThemeProvider } from "@/components/ThemeProvider";
import { NotificationProvider } from "@/context/NotificationContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} ${poppins.variable} antialiased font-body`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <NotificationProvider>
              <AnnouncementPopup />
              <AnnouncementBar />
              {children}
            </NotificationProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
