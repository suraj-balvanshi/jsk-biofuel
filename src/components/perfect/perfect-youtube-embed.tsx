"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { SkeletonCard } from "./perfect-skeleton-card";

export default function PerfectYoutubeEmbed() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("mediaPage");

  return (
    <div
      className="relative mx-auto rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
      style={{ height: "50vh", width: "calc(50vh * 9 / 16)" }}
    >
      {isLoading && <SkeletonCard />}
      <iframe
        src={t("youtubeDriveLink")}
        className="absolute inset-0 w-full h-full"
        allow="autoplay"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
}
