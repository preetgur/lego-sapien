import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoaderWrapper from "./components/Loader/Loader";
import { UIProvider } from "./contextApi/UIContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LegoSapien",
  description: "AI Interviewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
          {children}
          <LoaderWrapper />
        </UIProvider>
      </body>
    </html>
  );
}
