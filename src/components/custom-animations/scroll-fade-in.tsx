"use client";

import { SCROLL_FADE_IN, SCROLL_FADE_IN_ANIMATE } from "@/lib/className";
import React, { useEffect, useRef } from "react";

export default function ScrollFadeIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(SCROLL_FADE_IN_ANIMATE);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const elements = node.querySelectorAll(`.${SCROLL_FADE_IN}`);
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
