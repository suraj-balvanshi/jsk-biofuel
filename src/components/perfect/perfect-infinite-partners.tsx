import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PerfectInfinitePartners() {
  const t = useTranslations("PerfectInfinitePartners");

  const companies = [
    {
      name: t("company1"),
      logo: "/images/partners/company1.svg",
    },
    {
      name: t("company2"),
      logo: "/images/partners/company2.svg",
    },
    {
      name: t("company3"),
      logo: "/images/partners/company3.svg",
    },
  ];

  const animationDuration = `${companies.length * 4}s`; // Adjust speed here

  return (
    <>
      <div className="py-12">
        <h2 className="text-center text-4xl font-bold">{t("title")}</h2>
        <p className="text-xl px-8">{t("description")}</p>
      </div>
      <div className="relative w-full overflow-hidden group">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        {/* Right gradient */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling container */}
        <div className="flex w-full overflow-hidden">
          <div
            className="flex animate-scroll group-hover:[animation-play-state:paused]"
            style={{
              animationDuration,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`company-${index}`}
                className="mx-8 flex w-[300px] h-[100px] flex-shrink-0 items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={200}
                  height={100}
                  className="h-[100px] w-auto"
                />
              </div>
            ))}

            {/* Duplicate set of logos for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`company-duplicate-${index}`}
                className="mx-8 flex w-[300px] h-[100px] flex-shrink-0 items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={200}
                  height={100}
                  className="h-[100px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
