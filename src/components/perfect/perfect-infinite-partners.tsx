import Image from "next/image";

const companies = [
  {
    name: "Company 1",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Company 2",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Company 3",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Company 4",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Company 5",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Company 6",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Company 7",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Company 8",
    logo: "/placeholder.svg?height=60&width=120",
  },
];

export function PerfectInfinitePartners() {
  const animationDuration = `${companies.length * 4}s`; // Adjust speed here

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Left gradient */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-background" />

      {/* Right gradient */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-background" />

      {/* Scrolling container */}
      <div className="flex w-full overflow-hidden">
        <div
          className="flex animate-scroll group-hover:[animation-play-state:paused]"
          style={{
            animationDuration,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {/* First set of logos */}
          {companies.map((company, index) => (
            <div
              key={`company-${index}`}
              className="mx-8 flex w-[150px] flex-shrink-0 items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}

          {/* Duplicate set of logos for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`company-duplicate-${index}`}
              className="mx-8 flex w-[150px] flex-shrink-0 items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
