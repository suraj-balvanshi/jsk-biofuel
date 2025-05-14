import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export default function ProductAccordionGrid() {
  const t = useTranslations("products");

  return (
    <div>
      <h2 className="text-3xl font-bold font-spaceGrotesk mx-4">
        {t("title")}
      </h2>
      {/* Biodiesel Section */}
      <section className="bg-white text-black py-4 sm:mx-4 font-inter">
        <h3 className="text-2xl font-semibold">{t("biodiesel.title")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-4 sm:rounded-xl bg-gradient-custom">
          <img
            src="/images/products/biodiesel.JPG"
            alt="Biodiesel"
            className="w-full h-64 object-cover self-center sm:border-2 border-white"
          />
          <div>
            {Array.from({ length: 6 }).map((_, idx) => {
              const featureKey = `feature-${idx + 1}`;
              return (
                <Accordion type="multiple" key={idx} className="space-y-2">
                  <AccordionItem value={`biodiesel-${idx}`}>
                    <AccordionTrigger className="text-[var(--color-charcoal-black)] hover:text-white max-sm:mx-2 font-semibold transition-colors flex items-center gap-3">
                      {t(`biodiesel.${featureKey}.title`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-black pl-2">
                      {t(`biodiesel.${featureKey}.description`)}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glycerin Section */}
      <section className="bg-white text-black pb-4 sm:mx-4 font-inter">
        <h3 className="text-2xl font-semibold">{t("glycerin.title")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-4 sm:rounded-xl bg-gradient-custom">
          <img
            src="/images/products/glycerin.JPG"
            alt="Glycerin"
            className="w-full h-64 object-cover self-center sm:border-2 border-white"
          />
          <div>
            {Array.from({ length: 4 }).map((_, idx) => {
              const featureKey = `feature-${idx + 1}`;
              return (
                <Accordion type="multiple" key={idx} className="space-y-2">
                  <AccordionItem value={`glycerin-${idx}`}>
                    <AccordionTrigger className="text-[var(--color-charcoal-black)] hover:text-white max-sm:mx-2 font-semibold transition-colors flex items-center gap-3">
                      {t(`glycerin.${featureKey}.title`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-black pl-2">
                      {t(`glycerin.${featureKey}.description`)}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
