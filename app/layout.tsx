import type { Metadata } from "next";
import { Fraunces, Space_Mono, Work_Sans } from "next/font/google";
import Script from "next/script";
import { ScrollToTopOnLoad } from "@/components/site/scroll-to-top-on-load";
import { ThemeToggle } from "@/components/site/theme-toggle";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces"
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-work-sans"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono"
});

const themeInitScript = `
(() => {
  try {
    const theme = window.localStorage.getItem("pinroot-theme") === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export const metadata: Metadata = {
  title: "PinRoot | Branding, Web, UX/UI, Content, and Marketing",
  description:
    "PinRoot helps small businesses grow with handcrafted branding, web, UX/UI, content, and marketing.",
  metadataBase: new URL("https://pinroot.co")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable}`}>
        <Script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
          id="pinroot-theme-init"
          strategy="beforeInteractive"
        />
        <ScrollToTopOnLoad />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
