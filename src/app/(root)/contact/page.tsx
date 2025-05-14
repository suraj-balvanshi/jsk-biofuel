import PerfectContactForm from "@/components/perfect/perfect-contact-form";
import PerfectContactInfoGrid from "@/components/perfect/prefect-contact-info-grid";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactHero() {
  const t = useTranslations("contact");

  return (
    <section className="w-full p-4 bg-white font-inter">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/contact-us/hero.JPG"
            alt={t("heroImageAlt")}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-gray-900 mb-4">
            {t("heroTitle")}
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            {t("heroDescription")}
          </p>
        </div>
      </div>
      <div className="container py-10">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-spaceGrotesk">
              {t("contactUsTitle")}
            </h1>
            <p className="text-gray-500">{t("contactUsDescription")}</p>
          </div>
          <PerfectContactForm />
        </div>
      </div>
      <div>
        <PerfectContactInfoGrid />
      </div>
    </section>
  );
}
