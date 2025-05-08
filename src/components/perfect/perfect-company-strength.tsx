"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const features = [
  {
    emoji: "🏭",
    title: "Reliable Manufacturer",
    description:
      "In-house production of biodiesel and glycerin with quality you can trust.",
  },
  {
    emoji: "🌱",
    title: "Sustainable & Eco-Friendly",
    description:
      "Products made from renewable resources like tallow and used cooking oil.",
  },
  {
    emoji: "🧪",
    title: "Tested & Certified Quality",
    description:
      "Every batch is lab-tested to meet national and industry standards.",
  },
  {
    emoji: "🛢️",
    title: "Bulk Supply Capability",
    description:
      "Equipped to handle large-scale orders with consistent on-time delivery.",
  },
  {
    emoji: "⚙️",
    title: "Dual Product Portfolio",
    description: "Offering Biodiesel & Glycerin for industrial use.",
  },
  {
    emoji: "🚚",
    title: "Efficient Distribution Network",
    description:
      "Smooth logistics across India ensure reliable client service.",
  },
  {
    emoji: "🤝",
    title: "Customer-Centric Approach",
    description: "Custom blends, flexible packaging, and responsive support.",
  },
];

export default function PeekStackCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <h2 className="mb-4 text-2xl font-[700]">Why Trust Us</h2>
      </div>
      <div className="relative h-[350px] w-full overflow-hidden flex justify-end items-center px-4">
        <Image
          src="/images/company-strength/company-strength-1.JPG"
          alt="Inaugration of JSK Biofuel"
          fill
          className="absolute inset-0 w-full h-full object-cover sm:rounded-xl overflow-hidden"
        />
        <div className="relative max-w-sm w-full min-h-[200] h-auto ">
          {features.map((feature, idx) => {
            const isCurrent = idx === current;
            const isNext = idx === (current + 1) % features.length;

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
                    <span className="text-2xl">{feature.emoji}</span>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-6 text-muted-foreground flex-1">
                  <p className="h-full">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
