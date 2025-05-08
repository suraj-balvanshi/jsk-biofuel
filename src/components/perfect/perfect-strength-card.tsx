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
];

export default function PerfectStrengthCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <Card key={idx} className="h-full">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span>{feature.emoji}</span> {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
