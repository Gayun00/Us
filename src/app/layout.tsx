import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProviders from "@/components/providers/ReactQueryProvider";
import StoreProvider from "@/components/providers/StoreProvider";
import GlobalLayout from "@/components/layouts/GlobalLayout";
import UserProvider from "@/components/providers/UserProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Us alliance",
  description: "사전과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProviders>
          <StoreProvider>
            <UserProvider>
              <GlobalLayout>{children}</GlobalLayout>
            </UserProvider>
          </StoreProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
