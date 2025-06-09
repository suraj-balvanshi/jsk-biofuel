"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

type Message = {
  text: string;
  href: string;
};

const messages: Message[] = [
  { text: "Biodiesel", href: "/product/biodiesel" },
  { text: "Glycerin", href: "/product/glycerin" },
  { text: "Contact", href: "/contact" },
  { text: "Join us", href: "/career" },
  { text: "Troll Div. Thanks Ψ(｀∀´)ﾉ", href: "/" },
];

export default function PerfectTravelGuide() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [show, setShow] = useState(true);

  // Hide when user is within 100px of bottom, show otherwise
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
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setAnimating(false);
      }, 500); // duration matches CSS
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-[50%] translate-x-[-50%] z-50 flex justify-end items-center w-7xl p-4">
      <div className="p-4 rounded-xl drop-shadow-xl mr-auto">
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
              "origin-left-center px-5 py-2 rounded-2xl bg-red-300 text-white text-sm shadow-md top-[-42px] relative",
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
        href="https://wa.me/919999999999" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors w-16 h-16 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={48} />
      </a>
    </div>
  );
}
