import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoaderWrapper from "./components/Loader/Loader";
import { UIProvider } from "./contextApi/UIContext";
import "../styles/index.css";
import "../styles/index2.css";
import { AuthProvider } from "./contextApi/AuthContext";

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
        <AuthProvider>
          <UIProvider>
            {children}
            <LoaderWrapper />
          </UIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
