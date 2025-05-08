import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ProductAccordionGrid() {
  const biodieselFeatures = [
    {
      title: "High-Quality Biofuel",
      description:
        "Made from tallow, used cooking oil (UCO), and organic waste.",
    },
    {
      title: "B100 and Custom Blends",
      description:
        "Available in blends like B5, B10, B20 to suit regulations or customer needs.",
    },
    {
      title: "Engine Compatible",
      description:
        "Works with standard diesel engines without major modifications.",
    },
    {
      title: "Low Emissions, High Performance",
      description:
        "Reduces carbon footprint while maintaining power and efficiency.",
    },
    {
      title: "Bulk Orders Fulfilled",
      description:
        "Ideal for industries, transportation fleets, and agriculture.",
    },
    {
      title: "Lab-Tested",
      description: "Meets Indian and international fuel quality standards.",
    },
  ];

  const glycerinFeatures = [
    {
      title: "Multi-Industry Use",
      description:
        "Used in pharmaceuticals, cosmetics, soaps, and chemical industries.",
    },
    {
      title: "Eco-Derived",
      description: "Byproduct of biodiesel, biodegradable and plant/fat-based.",
    },
    {
      title: "Different Grades Available",
      description: "Crude and refined glycerin offered based on application.",
    },
    {
      title: "Consistent Quality & Supply",
      description:
        "Reliable sourcing directly from our biodiesel production process.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mx-4">Our Products</h2>
      {/* Biodiesel Section */}
      <section className="bg-white text-black py-4 sm:mx-4">
        <h3 className="text-2xl mb-4">Biodiesel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-4 sm:rounded-xl bg-gradient-custom">
          <img
            src="/images/company-strength/company-strength-1.JPG"
            alt="Biodiesel"
            className="w-full h-64 object-cover self-center sm:border-2 border-white"
          />
          <div>
            {biodieselFeatures.map((item, idx) => (
              <Accordion type="multiple" key={idx} className="space-y-2">
                <AccordionItem value={`biodiesel-${idx}`}>
                  <AccordionTrigger className="text-[var(--color-charcoal-black)] hover:text-white max-sm:mx-2 font-semibold transition-colors flex items-center gap-3">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-black pl-2">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Glycerin Section */}
      <section className="bg-white text-black pb-4 sm:mx-4">
        <h3 className="text-2xl mb-4">Glycerin</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-4 sm:rounded-xl bg-gradient-custom">
          <img
            src="/images/company-strength/company-strength-1.JPG"
            alt="Glycerin"
            className="w-full h-64 object-cover self-center sm:border-2 border-white"
          />
          <div>
            {glycerinFeatures.map((item, idx) => (
              <Accordion type="multiple" key={idx} className="space-y-2">
                <AccordionItem value={`glycerin-${idx}`}>
                  <AccordionTrigger className="text-[var(--color-charcoal-black)] hover:text-white max-sm:mx-2 font-semibold transition-colors flex items-center gap-3">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-black pl-2">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
