"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function PerfectTravelGuide() {
  const t = useTranslations("travelGuide");
  const tFooter = useTranslations("footer"); // For WhatsApp number
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [show, setShow] = useState(true);

  const messages = [
    { text: t("biodiesel"), href: "/product/biodiesel" },
    { text: t("glycerin"), href: "/product/glycerin" },
    { text: t("contact"), href: "/contact" },
    { text: t("career"), href: "/career" },
    { text: t("troll"), href: "/" },
  ];

  // Get WhatsApp number and aria label from translations
  const whatsappNumber = tFooter("contactUs.whatsapp");
  const whatsappHref = `https://wa.me/91${whatsappNumber.replace(/\D/g, "")}`;
  const whatsappAria = tFooter("contactUs.title") || "Chat on WhatsApp";

  // Hide when user is within 500px of bottom, show otherwise
  useEffect(() => {
    function handleScroll() {
      const buffer = 500;
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= docHeight - buffer) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-[50%] translate-x-[-50%] z-50 flex justify-end items-center max-w-7xl w-full min-w-[300px] p-4 pointer-events-none">
      <div className="drop-shadow-xl mr-auto">
        <div className="relative flex items-center w-fit translate-y-3/4">
          {/* Stationary Character */}
          <Image
            src="/images/mascot/traveller.png"
            alt="Your Travel Guide"
            width={128}
            height={128}
            className="w-24 h-24"
          />

          {/* Animated Bubble */}
          <div
            key={index}
            className={clsx(
              "origin-left-center px-5 py-2 rounded-2xl bg-[var(--color-nature-green)] text-white text-sm shadow-md top-[-42px] relative pointer-events-auto",
              animating ? "animate-windmill-out" : "animate-windmill-in",
              "top-2"
            )}
          >
            <Link href={messages[index].href}>
              <div className="font-medium hover:underline cursor-pointer">
                {messages[index].text}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Bubble */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors w-16 h-16 flex items-center justify-center pointer-events-auto fixed bottom-4 right-4 z-50"
        aria-label={whatsappAria}
      >
        <FaWhatsapp size={48} />
      </a>
    </div>
  );
}
