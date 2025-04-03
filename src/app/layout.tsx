import type { Metadata } from "next";
import Header from "@/components/header";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

// Load the font with specific weights
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"], // Adjust weight if needed
  display: "swap",
});

export const metadata: Metadata = {
  title: "International Application Service",
  description: "Immigration Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning={true} 
      data-lt-installed="true"
    >
     <body 
  className={`${jakarta.className} text-[16px]`}
  data-new-gr-c-s-check-loaded="14.1229.0" 
  data-gr-ext-installed=""
>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}