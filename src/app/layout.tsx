import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { NavbarTop } from "./components/HomePage/NavbarMenu/Navbar";
import Footer from "./components/HomePage/footer";
import Script from "next/script";
import Image from "next/image";

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
        <script dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4001389093472451');
            fbq('track', 'PageView');
        `}} />
        <noscript>
          <Image height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4001389093472451&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
            })(window,document,'script','dataLayer','GTM-NQ7B96J3');
          `}
        </Script>
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
