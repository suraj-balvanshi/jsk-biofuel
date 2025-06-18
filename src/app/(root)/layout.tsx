// src/app/(root)/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import PerfectFooter from "@/components/perfect/perfect-footer";
import { inter_18pt, playfair_9pt, spaceGrotesk } from "@/lib/fonts";
import messages from "@/messages/en.json";
import ScrollFadeIn from "@/components/custom-animations/scroll-fade-in";
import { SCROLL_FADE_IN } from "@/lib/className";
import PerfectTravelGuide from "@/components/perfect/perfect-travel-guide";
import PerfectHeader from "@/components/perfect/perfect-header";

export const metadata: Metadata = {
  title: "JSK Green India Bio Fuel",
  description: "Aiming for a greener future with bio-fuel solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "en";

  return (
    <html
      lang={locale}
      className={`${inter_18pt.variable} ${playfair_9pt.variable} ${spaceGrotesk.variable} font-inter aliased`}
    >
      <body className="min-h-screen flex flex-col font-inter bg-[var(--color-body-bg)]/2">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ScrollFadeIn>
            <header className="border-b shadow-sm bg-[var(--color-header-footer)] text-white sticky top-0 z-50">
              <PerfectHeader />
            </header>
            <main className="max-content-width w-full">{children}</main>
            <footer
              className={`text-white py-8 font-playfair bg-[var(--color-header-footer)] ${SCROLL_FADE_IN}`}
            >
              <PerfectFooter />
            </footer>
            <PerfectTravelGuide />
          </ScrollFadeIn>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
