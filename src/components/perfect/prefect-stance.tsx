"use client";

import {
  Flame,
  Droplet,
  FlaskConical,
  Truck,
  Leaf,
  ShieldCheck,
  Lightbulb,
  LifeBuoy,
} from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

const icons = [
  Flame,
  Droplet,
  FlaskConical,
  Truck,
  Leaf,
  ShieldCheck,
  Lightbulb,
  LifeBuoy,
];

export default function PerfectStance() {
  const t = useTranslations("stance");
  const services = t.raw("services") as { title: string; desc: string }[];

  return (
    <div className="font-inter p-4 text-gray-800">
      <h2 className="mb-4 text-3xl font-bold font-spaceGrotesk">
        {t("title")}
      </h2>

      <p className="text-center max-w-3xl mx-auto mb-10 text-sm md:text-base text-gray-600">
        {t("description")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map(({ title, desc }, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="p-4 bg-gray-200 rounded-lg shadow transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              <Icon className="h-6 w-6 text-red-700 mb-3" />
              <h3 className="font-bold text-sm mb-2">{title}</h3>
              <p className="text-xs text-gray-700">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
