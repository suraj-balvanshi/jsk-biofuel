"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { SkeletonCard } from "./perfect-skeleton-card";

export default function PerfectYoutubeEmbed() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("mediaPage");

  return (
    <div className="relative mx-auto rounded-xl overflow-hidden flex-shrink-0 shadow-lg aspect-[9/16] min-w-xs max-h-[min(100vh,500px)]">
      {isLoading && <SkeletonCard />}
      <iframe
        src={t("youtubeDriveLink")}
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
}
