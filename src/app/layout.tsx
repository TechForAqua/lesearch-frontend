import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import { ToastProvider } from "@/components/ui/toast-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL('https://lesearch-app.vercel.app'),
  title: "LeSearch - Less Search, More Knowledge",
  description: "LeSearch is an AI-powered research assistant that helps users summarize, analyze, and interact with documents efficiently.",
  keywords: [
    "LeSearch",
    "AI research assistant",
    "document summarization",
    "AI-powered search",
    "Less Search",
  ],
  openGraph: {
    title: "LeSearch - AI Research Assistant",
    description: "LeSearch simplifies document understanding with AI-driven insights, summaries, and interactive Q&A.",
    url: "https://lesearch-app.vercel.app", 
    type: "website",
    images: [
      {
        url: "/lesearch-banner.jpg",
        width: 1200,
        height: 630,
        alt: "LeSearch AI Research Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeSearch - AI Research Assistant",
    description: "Save time and enhance research efficiency with AI-driven document analysis and summarization.",
    images: ["/lesearch-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
