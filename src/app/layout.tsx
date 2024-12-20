import type { Metadata } from "next";
import { inter } from "./(ui)/fonts";
import "./globals.css"
import Script from "next/script";
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
    <html lang="en">z
      <head>
        <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />
      </head>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
