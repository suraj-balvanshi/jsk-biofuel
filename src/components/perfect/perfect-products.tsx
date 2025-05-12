import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CircleHelp, BotMessageSquare } from "lucide-react";
import {
  Bus,
  TrainFront,
  Truck,
  Tractor,
  Hammer,
  Power,
  Fuel,
  Building2,
  Signal,
  ShieldCheck,
} from "lucide-react";
import {
  Leaf,
  Droplet as Soap,
  Droplets,
  Pill,
  Cigarette,
  CakeSlice,
  Package,
  SprayCan,
  Shirt,
  Ruler,
} from "lucide-react";

export function PerfectBiodieselPage() {
  const biodieselSummary =
    "Biodiesel is a clean, renewable alternative to traditional petroleum-based fuels. Made from sustainable plant oils and animal fats, biodiesel helps reduce harmful emissions, improve engine performance, and contribute to a more sustainable energy future. Ideal for industrial applications, transportation, and power generation, biodiesel offers a reliable and eco-friendly energy solution that supports environmental protection.";
  const biodieselApplications = [
    {
      icon: <Bus size={24} />,
      text: "Public Transportation: Powering state-run RTC buses.",
    },
    {
      icon: <TrainFront size={24} />,
      text: "Railways: Fueling diesel locomotives and maintenance vehicles of Indian Railways.",
    },
    {
      icon: <Truck size={24} />,
      text: "Commercial Transport: Used in trucking and logistics fleets nationwide.",
    },
    {
      icon: <Tractor size={24} />,
      text: "Agriculture: Powering tractors and irrigation pump-sets.",
    },
    {
      icon: <Hammer size={24} />,
      text: "Construction: Running earth movers and generators on construction sites.",
    },
    {
      icon: <Power size={24} />,
      text: "Rural Power: Providing backup power for rural electrification and health centers managed by the state.",
    },
    {
      icon: <Fuel size={24} />,
      text: "Fuel Retail: Available as blended fuel options at IOCL, HPCL, and BPCL fuel stations.",
    },
    {
      icon: <Building2 size={24} />,
      text: "Urban Services: Powering municipal garbage trucks and other service vehicles in cities.",
    },
    {
      icon: <Signal size={24} />,
      text: "Telecom: Fueling DG sets in mobile communication towers.",
    },
    {
      icon: <ShieldCheck size={24} />,
      text: "Institutional Backup: Providing reliable power for schools, hospitals, and government offices.",
    },
  ];
  const biodieselHighlightTitle = "Highlights of Biodiesel:";
  const biodieselHighlights = [
    {
      title: "Renewable & Local",
      description: "Produced domestically, ensuring a sustainable supply.",
    },
    {
      title: "Cleaner Emissions",
      description:
        "Significantly reduces harmful emissions compared to petroleum diesel.",
    },
    {
      title: "Engine Friendly",
      description: "Works seamlessly with most existing diesel engines.",
    },
    {
      title: "Versatile Blends",
      description:
        "Available in various blends to suit different needs (B5, B20, B100).",
    },
  ];

  const biodieselBenefitsTitle = "Benefits of Biodiesel:";
  const biodieselBenefits = [
    {
      title: "Strong Performance:",
      description: "High lubricity, non-toxic, and naturally breaks down.",
    },
    {
      title: "Reliable Power:",
      description:
        "Proven track record in demanding heavy-duty vehicles and fleets.",
    },
    {
      title: "Future-Ready:",
      description:
        "Expanding applications in railways, logistics networks, and local power generation.",
    },
    {
      title: "Government Support:",
      description:
        "Benefits from tax incentives in the U.S. and EU, and support under India's National Policy on Biofuels.",
    },
    {
      title: "Cost-Effective Long-Term:",
      description:
        "Reduces wear on engines, offers potential tax advantages, and carbon credit opportunities.",
    },
  ];

  const biodieselKeyFeaturesTitle = "Key Features of Biodiesel:";
  const biodieselKeyFeatures = [
    {
      title: "Significant Emission Reduction:",
      description: "Cuts CO₂ emissions by up to 75%.",
    },
    {
      title: "Easy Transition:",
      description: "No major changes needed for most diesel engines.",
    },
    {
      title: "Resourceful Production:",
      description: "Made from waste and renewable agricultural products.",
    },
    {
      title: "Flexible Options:",
      description: "Available in multiple blend levels (B5, B20, B100).",
    },
  ];

  const biodieselEnvironmentalAdvantagesTitle =
    "Biodiesel Environmental Advantages:";
  const biodieselEnvironmentalAdvantages = [
    {
      description:
        "Lowers greenhouse gas emissions, contributing to a healthier planet.",
    },
    {
      description:
        "Reduces harmful air pollutants like carbon monoxide and particulate matter.",
    },
    {
      description:
        "Encourages the recycling of used cooking oil and agricultural byproducts.",
    },
    {
      description: "Safer for the environment in case of accidental spills.",
    },
  ];

  const biodieselAdvantagesTitle = "Biodiesel's Advantages:";
  const biodieselAdvantages = [
    {
      description:
        "Boosting Local Economy: Supports the Make in India initiative through domestic production.",
    },
    {
      description:
        "Securing Energy Future: Enhances energy independence and reduces reliance on imported crude oil.",
    },
    {
      description:
        "Empowering Rural India: Creates jobs in rural areas and supports agricultural incomes through feedstock sourcing.",
    },
    {
      description:
        "Powering National Infrastructure: Fuels critical public services such as railways, public buses, and telecom towers.",
    },
    {
      description:
        "Ideal for Indian Conditions: Performs effectively in India's hot climate and is suitable for rural off-grid power needs.",
    },
  ];

  const BiodieselFAQTitle = "Frequently Asked Questions about Biodiesel:";
  const biodieselFaqs = [
    {
      question: "Q1: Can my diesel engine run on biodiesel?",
      answer:
        "A: Absolutely, most modern diesel engines can use biodiesel blends without any modifications.",
    },
    {
      question: "Q2: Will biodiesel affect my engine's power?",
      answer:
        "A: No, biodiesel provides similar performance and fuel efficiency as regular petroleum diesel.",
    },
    {
      question: "Q3: Is biodiesel more expensive than regular diesel?",
      answer:
        "A: While prices can vary, subsidies and lower maintenance costs often make it a cost-effective choice.",
    },
    {
      question: "Q4: Is biodiesel environmentally friendly?",
      answer: "A: Yes, it's non-toxic and readily biodegradable.",
    },
  ];

  return (
    <div className="p-6 space-y-12">
      <h2 className="text-center text-4xl font-bold">Biodiesel</h2>

      {/* Summary Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-lg">{biodieselSummary}</div>
        <div className="flex-1">
          <Image
            src="/images/products/biodiesel.JPG"
            alt="Biodiesel"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-600">{biodieselHighlightTitle}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {biodieselHighlights.map((highlight, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-blue-950">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h3 className="text-center text-2xl font-bold">
          {biodieselBenefitsTitle}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {biodieselBenefits.map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h4 className="text-purple-600 text-2xl font-bold">
                {benefit.title}
              </h4>
              <p className="text-sm text-gray-700 mt-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <Image
            src="/images/products/biodiesel.JPG"
            alt="Key Features"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>
        <div>
          <h3 className="text-purple-600 text-2xl font-bold">
            {biodieselKeyFeaturesTitle}
          </h3>
          <ul className="flex-1 space-y-2 text-lg list-disc list-inside">
            {biodieselKeyFeatures.map((feature, index) => (
              <li key={index}>
                <p>
                  <strong>{feature.title}</strong> {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Environmental Advantages Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">
          {biodieselEnvironmentalAdvantagesTitle}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {biodieselEnvironmentalAdvantages.map((advantage, index) => (
            <li key={index}>
              <p>{advantage.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Applications Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Biodiesel Applications</h3>
        <ul className="space-y-4 grid md:grid-cols-3 gap-6">
          {biodieselApplications.map((item, index) => (
            <li key={index} className="mb-0 flex flex-col">
              <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-sm max-w-2xl mx-auto h-full w-full">
                <div className="bg-blue-600 text-white rounded-full p-2 mr-4">
                  {item.icon}
                </div>
                <p className="text-gray-800 text-sm">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Advantages Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{biodieselAdvantagesTitle}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {biodieselAdvantages.map((advantage, index) => (
            <li key={index}>
              <p>{advantage.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-center">
          {BiodieselFAQTitle}
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {biodieselFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="mt-2 border-0"
            >
              <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
                <span className="bg-violet-600 text-white p-2 rounded-full">
                  <CircleHelp size={20} />
                </span>
                <span className="font-semibold text-sm">
                  <p>{faq.question}</p>
                </span>
              </AccordionTrigger>
              <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
                <p className="flex-1">{faq.answer}</p>
                <div className="bg-violet-600 text-white p-2 rounded-full">
                  <BotMessageSquare size={20} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export function PerfectGlycerinPage() {
  const glycerinSummary =
    "Glycerin is a high-quality byproduct of biodiesel production, valued for its versatility and wide range of industrial applications. Known for its moisturizing and non-toxic properties, glycerin is widely used in personal care products, pharmaceuticals, and food manufacturing. With its excellent purity and sustainability, glycerin provides an eco-friendly resource for various industries looking for safe and effective ingredients.";

  const glycerinApplications = [
    {
      icon: <Leaf size={24} />,
      text: "Ayurveda & Herbal Products: In soaps, tonics, and balms.",
    },
    {
      icon: <Soap size={24} />,
      text: "Soap & Detergent Manufacturing: Especially for brands in rural markets.",
    },
    {
      icon: <Droplets size={24} />,
      text: "Toiletries & Cosmetics: In skin creams, shampoos, and face washes.",
    },
    {
      icon: <Pill size={24} />,
      text: "Pharmaceuticals: In cough syrups and liquid medications (elixirs).",
    },
    {
      icon: <Cigarette size={24} />,
      text: "Tobacco Industry: In the production of beedis and flavored chewing tobacco.",
    },
    {
      icon: <CakeSlice size={24} />,
      text: "Food Industry: In traditional Indian sweets (mithai), dairy desserts, and processed foods.",
    },
    {
      icon: <Package size={24} />,
      text: "Plastic & Rubber Processing: In the manufacturing of locally produced molded goods.",
    },
    {
      icon: <SprayCan size={24} />,
      text: "Agrochemicals: As a carrier agent for fertilizers and pesticides in agriculture.",
    },
    {
      icon: <Ruler size={24} />,
      text: "Leather Industry: In the tanning and finishing processes.",
    },
    {
      icon: <Shirt size={24} />,
      text: "Textile Industry: In dyeing and fabric sizing.",
    },
  ];

  const glycerinHighlightsTitle = "Highlights of Glycerin:";
  const glycerinHighlights = [
    {
      title: "High Quality",
      description: "Available in pharmaceutical and cosmetic grades.",
    },
    {
      title: "Sustainable Source",
      description: "Derived from renewable resources.",
    },
    {
      title: "Gentle & Effective",
      description: "Moisturizing and non-toxic.",
    },
    {
      title: "Broad Utility",
      description: "Used across numerous industries.",
    },
  ];

  const glycerinBenefitsTitle = "Benefits of Glycerin:";
  const glycerinBenefits = [
    {
      title: "Purity & Stability:",
      description: "High purity, non-irritating, and has a long shelf life.",
    },
    {
      title: "Essential Ingredient:",
      description:
        "A crucial component in pharmaceuticals and fast-moving consumer goods (FMCG).",
    },
    {
      title: "Future Potential:",
      description:
        "Expanding applications in green chemicals, bio-packaging, and even solar technology.",
    },
    {
      title: "Indirect Support:",
      description:
        "Benefits from the overall support of the biodiesel industry.",
    },
    {
      title: "Economical Value:",
      description:
        "A low-cost byproduct with significant potential for high-value applications.",
    },
  ];

  const glycerinKeyFeaturesTitle = "Key Features of Glycerin:";
  const glycerinKeyFeatures = [
    {
      title: "Biodiesel-Derived:",
      description: "Produced from renewable biodiesel manufacturing.",
    },
    {
      title: "Multiple Grades:",
      description:
        "Available in technical, USP (pharmaceutical), and food grades.",
    },
    {
      title: "Highly Soluble:",
      description: "Water-soluble and attracts moisture (hygroscopic).",
    },
    {
      title: "Safe to Use:",
      description: "Non-toxic and safe for human applications.",
    },
  ];

  const glycerinEnvironmentalAdvantagesTitle = "Environmental Advantages:";
  const glycerinEnvironmentalAdvantages = [
    {
      description:
        "Renewable Origin: Produced from biodegradable and renewable sources.",
    },
    {
      description:
        "Waste Reduction: Supports a zero-waste approach by utilizing biodiesel byproducts.",
    },
    {
      description:
        "Safer Alternative: A less toxic option compared to some petroleum-based chemicals.",
    },
    {
      description:
        "Cleaner Water: Helps reduce chemical pollution in wastewater.",
    },
  ];

  const glycerinFaqsTitle = "Frequently Asked Questions about Glycerin:";
  const glycerinFaqs = [
    {
      question: "Q1: Is glycerin safe for my skin?",
      answer:
        "A: Yes, it's a common ingredient in Indian skincare products known for its excellent moisturizing properties.",
    },
    {
      question: "Q2: What are the different types of glycerin available?",
      answer:
        "A: The main grades are technical, USP (pharmaceutical), and food-grade.",
    },
    {
      question: "Q3: Is glycerin environmentally friendly?",
      answer:
        "A: Yes, especially when it's a byproduct of biodiesel production, making it biodegradable and renewable.",
    },
    {
      question: "Q4: Can I use glycerin in Indian cooking and sweets?",
      answer:
        "A: Absolutely. Food-grade glycerin is used in various Indian sweets, bakery items, and dairy products.",
    },
  ];

  return (
    <div className="p-6 space-y-12">
      <h2 className="text-center text-4xl font-bold">Glycerin</h2>

      {/* Summary Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-lg">{glycerinSummary}</div>
        <div className="flex-1">
          <Image
            src="/images/products/glycerin.JPG"
            alt="Glycerin"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-600">{glycerinHighlightsTitle}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {glycerinHighlights.map((highlight, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-blue-950">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h3 className="text-center text-2xl font-bold">
          {glycerinBenefitsTitle}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {glycerinBenefits.map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h4 className="text-purple-600 text-2xl font-bold">
                {benefit.title}
              </h4>
              <p className="text-sm text-gray-700 mt-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <Image
            src="/images/products/glycerin.JPG"
            alt="Key Features"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>
        <div>
          <h3 className="text-purple-600 text-2xl font-bold">
            {glycerinKeyFeaturesTitle}
          </h3>
          <ul className="flex-1 space-y-2 text-lg list-disc list-inside">
            {glycerinKeyFeatures.map((feature, index) => (
              <li key={index}>
                <p>
                  <strong>{feature.title}</strong> {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Environmental Advantages Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">
          {glycerinEnvironmentalAdvantagesTitle}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {glycerinEnvironmentalAdvantages.map((advantage, index) => (
            <li key={index}>
              <p>{advantage.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Applications Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Glycerin Applications</h3>
        <ul className="space-y-4 grid md:grid-cols-3 gap-6">
          {glycerinApplications.map((item, index) => (
            <li key={index} className="mb-0 flex flex-col">
              <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-sm max-w-2xl mx-auto h-full w-full">
                <div className="bg-blue-600 text-white rounded-full p-2 mr-4 flex items-center justify-center w-10 h-10">
                  {item.icon}
                </div>
                <p className="text-gray-800 text-sm">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-center">
          {glycerinFaqsTitle}
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {glycerinFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="mt-2 border-0"
            >
              <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
                <span className="bg-violet-600 text-white p-2 rounded-full">
                  <CircleHelp size={20} />
                </span>
                <span className="font-semibold text-sm">
                  <p>{faq.question}</p>
                </span>
              </AccordionTrigger>
              <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
                <p className="flex-1">{faq.answer}</p>
                <div className="bg-violet-600 text-white p-2 rounded-full">
                  <BotMessageSquare size={20} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
