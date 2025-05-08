"use client";

import { useState } from "react";
import { SkeletonCard } from "./perfect-skeleton-card";

export default function PerfectYoutubeEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden  ">
      {isLoading && <SkeletonCard />}
      <iframe
        src="https://drive.google.com/file/d/1l73OA9QfrUoXZWkwrrAz9zKdlKX1Q2w4/preview"
        className="absolute inset-0 w-full h-full"
        allow="autoplay"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
}
