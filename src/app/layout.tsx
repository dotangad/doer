import type { Metadata } from "next";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Doer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
