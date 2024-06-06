import type { Metadata } from "next";
import "./globals.css";
import { NavbarComponent } from "@/components/organisms";


export const metadata: Metadata = {
  title: "Furniro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'font-poppins'}>
        <NavbarComponent/>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
