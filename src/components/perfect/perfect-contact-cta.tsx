import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PerfectContactCta() {
  const t = useTranslations("contact.cta");

  return (
    <section className="font-inter">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h2 className="max-w-5xl text-2xl font-bold font-spaceGrotesk leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                {t("heading")}
              </h2>
              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
                {t("description")}
              </p>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[var(--color-deep-forest)] lg:px-10 rounded-xl hover:bg-[var(--color-nature-green)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span>{t("button")}</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
