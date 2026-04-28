import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Driveway Asphalt Paving & Concrete | Cole Harbour, NS",
  description:
    "Professional asphalt paving, concrete work, patios, stairs, pool surrounds, and outdoor surface projects across Cole Harbour, Dartmouth, Halifax, and HRM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
