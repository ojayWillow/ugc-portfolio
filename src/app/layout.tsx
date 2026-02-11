import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samanta Kopce | UGC Satura Veidotāja",
  description:
    "Profesionāla UGC satura veidotāja – Samanta Kopce. Autentiski, aizraujoši video un foto zīmoliem, kas vēlas izcelties. Apskatiet manu portfolio un sazinieties, ja vēlaties sadarbību – laba atmosfēra garantēta!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lv" className="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
