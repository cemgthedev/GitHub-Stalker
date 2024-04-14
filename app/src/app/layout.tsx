import { Providers } from "@/contexts/providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Content from "./content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Stalker",
  description: "Aplicação web para stalkear devs de seu grupo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <Content className={inter.className}>
          {children}
        </Content>
      </Providers>
    </html>
  );
}
