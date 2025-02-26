import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { NavbarTop } from "./components/HomePage/NavbarMenu/Navbar";
import Footer from "./components/HomePage/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lynk LMS",
  description:
    "Lynk Learning Management System (LMS) is a self-hosted, open-source platform for creating and managing online courses and training programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <NavbarTop />
        <Toaster />
        {children}

        <Footer />
      </body>
    </html>
  );
}
