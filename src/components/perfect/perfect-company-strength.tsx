"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PerfectCompanyStrength() {
  const t = useTranslations("companyStrength");

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 7); // 7 features
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        <h2 className="mb-4 text-3xl font-bold font-spaceGrotesk">
          {t("title")}
        </h2>
      </div>
      <div className="relative h-[350px] w-full overflow-hidden flex justify-end items-center px-4 font-inter">
        <Image
          src="/images/company-strength/company-strength-1.JPG"
          alt="Inaugration of JSK Biofuel"
          fill
          className="absolute inset-0 w-full h-full object-cover sm:rounded-xl overflow-hidden"
        />
        <div className="relative max-w-sm w-full min-h-[200px] h-auto ">
          {Array.from({ length: 7 }).map((_, idx) => {
            const featureKey = `feature-${idx + 1}`;
            const isCurrent = idx === current;
            const isNext = idx === (current + 1) % 7;

            return (
              <Card
                key={idx}
                className={`
        absolute w-full h-full transition-all duration-700 ease-in-out
        flex flex-col gap-0
        ${isCurrent ? "top-0 z-20 opacity-100 translate-y-0" : ""}
        ${isNext ? "top-6 z-10 opacity-80 translate-y-2 scale-[.98]" : ""}
        ${!isCurrent && !isNext ? "opacity-0 scale-95 -z-10" : ""}
      `}
              >
                <CardHeader className="p-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">{t(`${featureKey}.emoji`)}</span>
                    {t(`${featureKey}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-6 text-muted-foreground flex-1">
                  <p className="h-full">{t(`${featureKey}.description`)}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
