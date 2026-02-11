import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

const ogImage =
  "https://res.cloudinary.com/dykocdlgk/image/upload/c_fill,w_1200,h_630,g_auto/samanta_lf4zez.jpg";

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
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Samanta Kopce – UGC Satura Veidotāja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samanta Kopce | UGC Satura Veidotāja",
    description:
      "Veidoju autentisku, aizraujošu saturu, kas pārvērš skatītājus par klientiem. Padarīsim tavu zīmolu neaizmirstamu.",
    images: [ogImage],
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
