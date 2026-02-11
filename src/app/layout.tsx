import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Samanta Kopce | UGC Satura Veidotāja",
  description:
    "Veidoju autentisku, aizraujošu saturu, kas pārvērš skatītājus par klientiem. Padarīsim tavu zīmolu neaizmirstamu.",
  openGraph: {
    title: "Samanta Kopce | UGC Satura Veidotāja",
    description:
      "Veidoju autentisku, aizraujošu saturu, kas pārvērš skatītājus par klientiem. Padarīsim tavu zīmolu neaizmirstamu.",
    url: "https://samantina.vercel.app",
    siteName: "Samanta Kopce",
    locale: "lv_LV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samanta Kopce | UGC Satura Veidotāja",
    description:
      "Veidoju autentisku, aizraujošu saturu, kas pārvērš skatītājus par klientiem. Padarīsim tavu zīmolu neaizmirstamu.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lv" className="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
        <LanguageProvider>
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
