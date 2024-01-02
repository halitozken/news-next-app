import "./globals.css";

import { Gantari } from "next/font/google";

const gantari = Gantari({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "Home - Bi' News",
    description: "...",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={gantari.className}>{children}</body>
    </html>
  );
}
