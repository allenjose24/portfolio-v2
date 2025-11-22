import type { Metadata } from "next";
import { Inter, Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";

// Load fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bai = Bai_Jamjuree({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-bai-jamjuree" 
});

export const metadata: Metadata = {
  title: "Allen Jose | Portfolio",
  description: "Machine Learning Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bai.variable} antialiased selection:bg-primary/30`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}