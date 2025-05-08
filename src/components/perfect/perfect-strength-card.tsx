import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function PerfectStrengthCard() {
  const t = useTranslations("strength");

  return (
    <>
      <div>
        <h2 className="mb-4 text-3xl font-semibold">{t("title")}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, idx) => {
          const featureKey = `feature-${idx + 1}`;
          return (
            <Card
              key={idx}
              className="group motion-preset-pop p-4 overflow-hidden transition-colors duration-300 bg-background hover:bg-[var(--color-nature-green)]"
            >
              <CardHeader className="p-0">
                <CardTitle className="text-xl flex items-center gap-4 transition-colors duration-300 group-hover:text-white">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-white transition-transform duration-300 ease-in-out group-hover:scale-150 group-hover:bg-[var(--color-deep-forest)]" />
                    <span className="relative z-10 text-xl">
                      {t(`${featureKey}.emoji`)}
                    </span>
                  </div>
                  <h3>{t(`${featureKey}.title`)}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-0">
                <p className="transition-colors duration-300 text-muted-foreground group-hover:text-white">
                  {t(`${featureKey}.description`)}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
