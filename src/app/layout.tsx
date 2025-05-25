import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Poppins, Dancing_Script } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Mis XV - Invitación",
  description: "Te invito a celebrar el inicio de una nueva etapa en mi vida, llena de sueños, metas y grandes logros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${lora.variable} ${poppins.variable} ${dancingScript.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
