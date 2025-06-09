// src/app/(root)/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import PerfectNavMenu from "@/components/perfect/perfect-nav-menu";
import PerfectBurgerMenu from "@/components/perfect/perfect-burger-menu";
import Link from "next/link";
import PerfectFooter from "@/components/perfect/perfect-footer";
import { inter_18pt, playfair_9pt, spaceGrotesk } from "@/lib/fonts";
import messages from "@/messages/en.json";
import ScrollFadeIn from "@/components/custom-animations/scroll-fade-in";
import { SCROLL_FADE_IN } from "@/lib/className";
import Image from "next/image";

export const metadata: Metadata = {
  title: "JSK Green India Bio Fuel",
  description: "Aiming for a greener future with bio-fuel solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations();
  const locale = "en";

  return (
    <html
      lang={locale}
      className={`${inter_18pt.variable} ${playfair_9pt.variable} ${spaceGrotesk.variable} font-inter aliased`}
    >
      <body className="min-h-screen flex flex-col font-inter">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ScrollFadeIn>
            <header className="border-b shadow-sm">
              <nav className="flex items-center max-content-width px-4 py-2">
                <h1 className="mr-auto font-spaceGrotesk font-bold text-xl capitalize">
                  <Image
                    src="/logos/logo_v5.svg"
                    alt={t("header.title")}
                    className="inline-block mr-2"
                    height={30}
                    width={30}
                  />
                  <Link href="/">{t("header.title")}</Link>
                </h1>
                <div className="max-sm:hidden">
                  <PerfectNavMenu />
                </div>
                <div className="sm:hidden h-6">
                  <PerfectBurgerMenu />
                </div>
              </nav>
            </header>
            <main className="max-content-width w-full">{children}</main>
            <footer
              className={`bg-gray-800 text-white py-8 font-playfair ${SCROLL_FADE_IN}`}
            >
              <PerfectFooter />
            </footer>
          </ScrollFadeIn>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
