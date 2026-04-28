import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Driveway Asphalt Paving & Concrete | Cole Harbour, NS",
  description:
    "Driveway paving, asphalt repair, concrete work, and commercial paving services across Cole Harbour, Dartmouth, Halifax, and HRM.",
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
