import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IOSInstallNotice } from "@/components/IOSInstallNotice";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Pires | Portfólio",
  description:
    "Portfólio profissional de Arthur Pires com foco em desenvolvimento web, interfaces acessíveis e projetos modernos.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4E2B9B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} theme-root antialiased`}
      >
        <AccessibilityProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main id="conteudo" className="flex-1">
              {children}
            </main>
            <Footer />
            <IOSInstallNotice />
            <AccessibilityWidget />
          </div>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
