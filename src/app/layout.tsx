import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeContextProvider } from "@/context/theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Context API Theme Switcher",
  description: "Created for Theme Switcher by using Context API Example",
  icons:["/react-icon.svg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen min-h-screen bg-gray-100 dark:bg-gray-900 transition duration-300`}
      >
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
