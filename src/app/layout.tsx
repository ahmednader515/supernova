import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUPERNOVA - Game of the Future",
  description: "Join the cyberpunk world full of adventure and excitement in SUPERNOVA game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
