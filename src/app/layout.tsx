import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/ai/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prolayjit Biswas | Electronics Engineer & Hardware Developer",
  description: "From Hello World to Hardware — Building Smart Systems with Code and Circuits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground`}>
        <Navbar />
        <main className="flex min-h-screen flex-col pt-16">
          {children}
        </main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
