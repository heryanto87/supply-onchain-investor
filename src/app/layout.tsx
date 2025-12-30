import "@/styles/globals.css";

import { type Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SessionProvider } from "@/components/session-provider";
import { auth } from "@/server/auth";

import { TRPCReactProvider } from "@/trpc/react";
import { DebugMenu } from "@/components/debug-menu";

export const metadata: Metadata = {
  title: "APLX - Commodity Investment Platform",
  description: "Invest in commodity-backed coffee assets using SRG and CMA collateral.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <SessionProvider session={session}>
          <TRPCReactProvider>
            {children}
            <DebugMenu />
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
