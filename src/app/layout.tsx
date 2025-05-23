import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/providers/ThemeProvider";
import { Roboto } from 'next/font/google';
import { ToastContainer } from "react-toastify";
import { RootProvider } from "@/context/RootContext";
import { QueryClientProvider } from "@/providers/QueryClientProvider";
import { Layout } from "@/layouts/Layout";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <QueryClientProvider>
              <RootProvider>
                <Layout>
                  {children}
                </Layout>
              </RootProvider>
            </QueryClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
