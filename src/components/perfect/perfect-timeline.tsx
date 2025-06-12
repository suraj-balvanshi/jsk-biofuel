import Image from "next/image";

const cards = [
  {
    title: "Pioneering Technology and Solutions",
    content:
      "Development of high‑efficiency transesterification reactors for faster, cleaner biodiesel production.",
  },
  {
    title: "Sustainable Practices and Environmental Stewardship",
    content:
      "Closed‑loop water reclamation tominimize wastewater discharge. Lifecycle assessments to reduce carbon footprint from feedstock sourcing through distribution.",
  },
  {
    title: "Safety and Operational Excellence",
    content:
      "Rigorous HSE (Health, Safety & Environment) protocols at every production stage. Regular training, audits, and emergency‑response drills to ensure zero‑incident operations. ",
  },
  {
    title: "Strategic Partnerships and Collaborations",
    content:
      "Rigorous HSE (Health, Safety & Environment) protocols at every production stage. Regular training, audits, and emergency‑response drills to ensure zero‑incident operations.",
  },
  {
    title: "Biodiesel",
    content:
      "High-quality, eco-friendly fuel for transportation and industrial use.",
  },
  {
    title: "Refined Glycerin",
    content:
      "A versatile by-product used in pharmaceuticals, cosmetics, and agriculture.",
  },
];

export default function PerfectTimeline() {
  return (
    <div className="h-[calc(40rem*_6)] xxsm:h-[calc(35rem*_6)] xsm:h-[calc(25rem*_6)] sm:h-[calc(20rem*_6)] relative px-4">
      <Image
        src="/images/timeline/timeline_1.JPG"
        height={1200}
        width={1920}
        className="h-full w-full absolute top-0 left-0 object-cover rounded-2xl filter sepia hue-rotate-[330deg] saturate-200"
        alt="Perfect Timeline Background"
      />
      {cards.map((card, index) => (
        <div
          key={index}
          className="sticky top-[calc(4rem*_var(--i))] flex justify-center h-auto mb-[10rem] w-full  transition-all duration-300 ease-in-out"
          style={{
            // Push down each card using its index to create a step effect
            ["--i" as any]: index,
            zIndex: index + 10, // ensure correct stacking
          }}
        >
          <div className="max-w-xl w-full border rounded-2xl p-6 shadow-md mt-4 bg-white shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
