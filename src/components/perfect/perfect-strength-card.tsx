import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    emoji: "🌱",
    title: "Eco-Friendly Manufacturing",
    description:
      "We turn waste materials like tallow and used cooking oil into clean, renewable fuel.",
  },
  {
    emoji: "🏭",
    title: "In-House Production Unit",
    description:
      "Based in Uttar Pradesh, our facility ensures consistent quality and a reliable supply chain.",
  },
  {
    emoji: "🛢️",
    title: "Bulk Supply Capacity",
    description:
      "Well-equipped to meet large-scale fuel demands for transport, industrial, and commercial sectors.",
  },
  {
    emoji: "📦",
    title: "Custom Solutions",
    description: "Fuel blending and delivery tailored to client requirements.",
  },
  {
    emoji: "⚙️",
    title: "High Fuel Efficiency",
    description:
      "Our biodiesel delivers powerful performance while reducing carbon footprint.",
  },
  {
    emoji: "🧪",
    title: "Strict Quality Control",
    description:
      "Every batch is tested to meet national fuel standards and ensure purity.",
  },
  {
    emoji: "🌍",
    title: "Committed to Sustainability",
    description:
      "Supporting India’s green energy goals and reducing dependency on fossil fuels.",
  },
  {
    emoji: "🇮🇳",
    title: "Made in India",
    description:
      "Locally produced biodiesel supporting national energy independence.",
  },
  {
    emoji: "🚀",
    title: "Innovation Driven",
    description:
      "Constantly improving technology and exploring new feedstocks.",
  },
];

export default function PerfectStrengthCard() {
  return (
    <>
      <div>
        <h2 className="mb-4 text-3xl font-semibold">Why Choose Us</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="group motion-preset-pop p-4 overflow-hidden transition-colors duration-300 bg-background hover:bg-[var(--color-nature-green)]"
          >
            <CardHeader className="p-0">
              <CardTitle className="text-xl flex items-center gap-4 transition-colors duration-300 group-hover:text-white">
                {/* Animated circle background behind emoji */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  {/* Background scaling circle */}
                  <span className="absolute inset-0 rounded-full bg-white transition-transform duration-300 ease-in-out group-hover:scale-150 group-hover:bg-[var(--color-deep-forest)]" />
                  {/* Emoji foreground */}
                  <span className="relative z-10 text-xl">{feature.emoji}</span>
                </div>

                <h3>{feature.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-0">
              <p className="transition-colors duration-300 text-muted-foreground group-hover:text-white">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
