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
             <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
          })(window,document,'script','dataLayer','GTM-NQ7B96J3');`}
        </script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQ7B96J3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        <NavbarTop />
        <Toaster />
        {children}

        <Footer />
      </body>
    </html>
  );
}
