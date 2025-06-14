import { SCROLL_FADE_IN } from "@/lib/className";
import { useTranslations } from "next-intl";

export default function PerfectHealthSafety() {
  const t = useTranslations("healthAndSafety");
  const healthAndSafetyTitle = t("title");

  const healthAndSafetyAdvantages = [
    { description: t("healthAndSafetyAdvantages.1") },
    { description: t("healthAndSafetyAdvantages.2") },
    { description: t("healthAndSafetyAdvantages.3") },
  ];

  return (
    <div className={`text-center mx-auto p-4 ${SCROLL_FADE_IN}`}>
      <h3 className="text-2xl font-bold mb-4">{healthAndSafetyTitle}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {healthAndSafetyAdvantages.map((advantage, index) => (
          <li key={index}>
            <p>{advantage.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
