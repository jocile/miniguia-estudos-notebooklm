import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { BookOpen } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miniguia de Estudos - NotebookLM",
  description: "Web App para visualização da documentação do miniguia de estudos do NotebookLM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-background text-foreground`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-14 items-center px-4 max-w-5xl">
            <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-500" />
              <span className="font-bold sm:inline-block">Miniguia NotebookLM</span>
            </Link>
          </div>
        </header>

        <main className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
        
        <footer className="py-6 border-t border-border mt-auto w-full">
          <div className="container mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
            <p>Criado para o estudo sobre NotebookLM com 💙 usando Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
