import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextUI from "./tools/providers/NextUI";
import { AppProviderWrapper } from "./tools/context/AppContextProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UpDash - Inicio ",
  description:
    "UpDash é uma plataforma de gerenciamento de assistencias tecnicas e de manutenção.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviderWrapper>
      <html lang="pt-br" className="bg-primary-dark">
        <body className={inter.className}>
          <NextUI>{children}</NextUI>
        </body>
      </html>
    </AppProviderWrapper>
  );
}
