import type { Metadata } from "next";
import { Inter, Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simran Achra | Machine Learning & AI Portfolio",
  description: "Portfolio of Simran Achra, a Machine Learning and AI practitioner specializing in LLMs, RAG, fine-tuning, computer vision, NLP, and full‑stack AI product development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${poppins.variable} ${firaCode.variable}`}>
      <body className="min-h-screen">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
