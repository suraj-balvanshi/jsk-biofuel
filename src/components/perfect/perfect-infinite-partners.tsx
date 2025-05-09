import Image from "next/image";
import { useTranslations } from "next-intl";

export function PerfectInfinitePartners() {
  const t = useTranslations("PerfectInfinitePartners");

  const companies = [
    {
      name: t("company1"),
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: t("company2"),
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: t("company3"),
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: t("company4"),
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: t("company5"),
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: t("company6"),
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: t("company7"),
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      name: t("company8"),
      logo: "/placeholder.svg?height=60&width=120",
    },
  ];

  const animationDuration = `${companies.length * 4}s`; // Adjust speed here

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Left gradient */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-background" />

      {/* Right gradient */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-background" />

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
              className="mx-8 flex w-[150px] flex-shrink-0 items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}

          {/* Duplicate set of logos for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`company-duplicate-${index}`}
              className="mx-8 flex w-[150px] flex-shrink-0 items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
