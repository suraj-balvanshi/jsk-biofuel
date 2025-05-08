import type { Metadata } from "next";
import "./globals.css";
import { useTranslations } from "next-intl";
import PerfectNavMenu from "@/components/perfect/perfect-nav-menu";
import PerfectBurgerMenu from "@/components/perfect/perfect-burger-menu";

// fonts.ts
import localFont from "next/font/local";

// Inter 18pt – Optimized for large text
export const inter_18pt = localFont({
  src: [
    {
      path: "../../../public/fonts/Inter/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Inter/Inter_18pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Inter/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Inter/Inter_18pt-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-inter-18pt",
  display: "swap",
});

//Playfair 9pt – Optimized for small text
export const playfair_9pt = localFont({
  src: [
    {
      path: "../../../public/fonts/Playfair/Playfair_9pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Playfair/Playfair_9pt-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Playfair/Playfair_9pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Playfair/Playfair_9pt-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-playfair-9pt",
  display: "swap",
});

// Space Grotesk – UI and Titles
export const spaceGrotesk = localFont({
  src: [
    {
      path: "../../../public/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/SpaceGrotesk/SpaceGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JSK Bio-fuel",
  description: "Aiming for a greener future with bio-fuel solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations();

  return (
    <html
      lang="en"
      className={`${inter_18pt.variable} ${playfair_9pt.variable} ${spaceGrotesk.variable} aliased`}
    >
      <body className="min-h-screen flex flex-col">
        <header className="border-b shadow-sm">
          <nav className="flex items-center max-content-width px-4 py-2">
            <h1 className="mr-auto">{t("header.title")}</h1>
            <div className="max-sm:hidden">
              <PerfectNavMenu />
            </div>
            <div className="sm:hidden h-6 ">
              <PerfectBurgerMenu />
            </div>
          </nav>
        </header>
        <main className="max-content-width w-full">{children}</main>
        <footer className="max-content-width mt-auto w-full">
          <div>Footer</div>
        </footer>
      </body>
    </html>
  );
}
