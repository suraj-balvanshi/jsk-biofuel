import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PerfectHeroSection() {
  const t = useTranslations("hero");

  const carouselSlides = [
    {
      image: "/images/hero/hero-1.JPG",
      heading: t("slide-1.heading"),
      description: t("slide-1.description"),
    },
    {
      image: "/images/hero/hero-2.JPG",
      heading: t("slide-2.heading"),
      description: t("slide-2.description"),
    },
    {
      image: "/images/hero/hero-3.JPG",
      heading: t("slide-3.heading"),
      description: t("slide-3.description"),
    },
    {
      image: "/images/hero/hero-4.JPG",
      heading: t("slide-4.heading"),
      description: t("slide-4.description"),
    },
  ];

  return (
    <section className="perfect-hero-section">
      <Carousel className="max-w-full mx-auto sm:m-4 mb-4">
        <CarouselContent>
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-[35vh]">
              <div className="relative w-full h-full">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  className="absolute inset-0 w-full h-full object-cover sm:rounded-xl overflow-hidden"
                  priority={false}
                />

                {/* Overlay with content */}
                <div className="absolute flex w-full h-full px-12 py-4 items-center">
                  <div className="text-white bg-black/35 p-4 max-w-md">
                    <h2 className="text-2xl font-semibold">{slide.heading}</h2>
                    <p className="mt-2 text-base">{slide.description}</p>
                    <div className="h-[64px]"></div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
}
