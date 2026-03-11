import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/ai/Chatbot";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SmoothScroller } from "@/components/layout/SmoothScroller";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Prolayjit Biswas | Electronics Engineer & Hardware Developer",
  description: "From Hello World to Hardware — Building Smart Systems with Code and Circuits.",
  keywords: ["Electronics Engineer", "IoT", "ESP32", "PCB Design", "Embedded Systems", "Hardware Developer", "VLSI", "KiCAD", "3D Printing", "Raspberry Pi"],
  authors: [{ name: "Prolayjit Biswas" }],
  openGraph: {
    title: "Prolayjit Biswas | Electronics Engineer",
    description: "From Hello World to Hardware — Building Smart Systems with Code and Circuits.",
    type: "website",
    locale: "en_IN",
    url: "https://prolayjit-biswas.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prolayjit Biswas | Electronics Engineer",
    description: "From Hello World to Hardware — Building Smart Systems with Code and Circuits.",
    creator: "@pro_lay04",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Prevent Flash Of Wrong Theme (FOUC) — reads localStorage BEFORE React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pb-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}else{document.documentElement.classList.remove('light');document.documentElement.classList.add('dark');}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-[#030712] text-[#f1f5f9] antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <SmoothScroller />
          <CustomCursor />
          <Navbar />
          <main className="flex min-h-screen flex-col pt-16">
            {children}
          </main>
          <Chatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
