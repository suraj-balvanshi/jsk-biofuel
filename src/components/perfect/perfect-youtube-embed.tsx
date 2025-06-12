"use client";

import { useState } from "react";
import { SkeletonCard } from "./perfect-skeleton-card";

export default function PerfectYoutubeEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="relative mx-auto rounded-xl overflow-hidden"
      style={{ height: "50vh", width: "calc(50vh * 9 / 16)" }}
    >
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
