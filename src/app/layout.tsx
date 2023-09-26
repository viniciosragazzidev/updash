import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextUI from "../tools/providers/NextUI";
import SessionAuthProvider from "../tools/providers/SessionAuthProvider";
import ToastApp from "../tools/components/Toast";
import { AppProviderWrapper } from "@/tools/context/AppContextProviderWrapper";

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
          <ToastApp />

          <SessionAuthProvider>
            <NextUI>{children}</NextUI>
          </SessionAuthProvider>
        </body>
      </html>
    </AppProviderWrapper>
  );
}
