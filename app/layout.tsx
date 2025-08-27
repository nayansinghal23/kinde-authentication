import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kinde Authentication",
  description: "Analyzing NextJS authenication pitfalls and fixing them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
