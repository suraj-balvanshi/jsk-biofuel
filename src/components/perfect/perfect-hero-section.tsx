import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function PerfectHeroSection() {
  const carouselSlides = [
    {
      image: "/images/hero/hero-1.JPG",
      heading: "Fueling the Future, Sustainably",
      description:
        "Explore how biofuel is transforming the world of renewable energy and reducing carbon emissions.",
      // link: {
      //   url: "/learn-more",
      //   label: "Learn More",
      // },
    },
    {
      image: "/images/hero/hero-2.JPG",
      heading: "Proudly Made in India. Powering Progress with Biodiesel",
      description:
        "Discover innovative technologies driving sustainable energy using agricultural waste.",
    },
    {
      image: "/images/hero/hero-3.JPG",
      heading: "Turning Waste Into Power, Responsibly",
      description:
        "solutions.See how everyday resources can be converted into powerful fuel alternatives.",
    },
    {
      image: "/images/hero/hero-4.JPG",
      heading: "Fuel the Change. Go JSK Biofuel",
      description:
        "Be part of the global shift toward clean and efficient biofuel ",
    },
  ];

  return (
    <section className="perfect-hero-section">
      <Carousel className="max-w-full mx-auto  sm:m-4 mb-4">
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
                />

                {/* Overlay with content */}
                <div className="absolute flex w-full h-full px-12 py-4 items-center">
                  <div className=" text-white bg-black/35 p-4 max-w-md">
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
