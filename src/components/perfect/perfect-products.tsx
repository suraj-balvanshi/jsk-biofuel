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

  return (
    <div className="p-6 space-y-12">
      <h2 className="text-center text-4xl font-bold">Biodiesel</h2>

      {/* Summary Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-lg">
          Biodiesel is a clean, renewable alternative to traditional
          petroleum-based fuels. Made from sustainable plant oils and animal
          fats, biodiesel helps reduce harmful emissions, improve engine
          performance, and contribute to a more sustainable energy future. Ideal
          for industrial applications, transportation, and power generation,
          biodiesel offers a reliable and eco-friendly energy solution that
          supports environmental protection.
        </div>
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
          <span className="text-blue-600">Highlights of Biodiesel:</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-lg font-bold text-blue-950">
              Renewable & Local
            </h3>
            <p className="text-sm text-gray-700 mt-2">
              Produced domestically, ensuring a sustainable supply.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-950">
              Cleaner Emissions
            </h3>
            <p className="text-sm text-gray-700 mt-2">
              Significantly reduces harmful emissions compared to petroleum
              diesel.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-950">Engine Friendly</h3>
            <p className="text-sm text-gray-700 mt-2">
              Works seamlessly with most existing diesel engines.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-950">
              Versatile Blends
            </h3>
            <p className="text-sm text-gray-700 mt-2">
              Available in various blends to suit different needs (B5, B20,
              B100).
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h3 className="text-center text-2xl font-bold">
          Benefits of Biodiesel:
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-purple-600 text-2xl font-bold">
              Strong Performance:
            </h4>
            <p className="text-sm text-gray-700 mt-1">
              High lubricity, non-toxic, and naturally breaks down.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-purple-600 text-2xl font-bold">
              Reliable Power:
            </h4>
            <p className="text-sm text-gray-700 mt-1">
              Proven track record in demanding heavy-duty vehicles and fleets.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-purple-600 text-2xl font-bold">
              Future-Ready:
            </h4>
            <p className="text-sm text-gray-700 mt-1">
              Expanding applications in railways, logistics networks, and local
              power generation.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-purple-600 text-2xl font-bold">
              Government Support:
            </h4>
            <p className="text-sm text-gray-700 mt-1">
              Benefits from tax incentives in the U.S. and EU, and support under
              India's National Policy on Biofuels.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-purple-600 text-2xl font-bold">
              Cost-Effective Long-Term:
            </h4>
            <p className="text-sm text-gray-700 mt-1">
              Reduces wear on engines, offers potential tax advantages, and
              carbon credit opportunities.
            </p>
          </div>
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
            Key Features of biodiesel:
          </h3>
          <ul className="flex-1 space-y-2 text-lg list-disc list-inside">
            <li>
              <p>
                Significant Emission Reduction: Cuts CO₂ emissions by up to 75%.
              </p>
            </li>
            <li>
              <p>
                Easy Transition: No major changes needed for most diesel
                engines.
              </p>
            </li>
            <li>
              <p>
                Resourceful Production: Made from waste and renewable
                agricultural
              </p>
              products.
            </li>
            <li>
              <p>
                Flexible Options: Available in multiple blend levels (B5, B20,
              </p>
              B100).
            </li>
          </ul>
        </div>
      </div>

      {/* Environmental Advantages Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Environmental Advantages:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <p>
              Lowers greenhouse gas emissions, contributing to a healthier
              planet.
            </p>
          </li>
          <li>
            <p>
              Reduces harmful air pollutants like carbon monoxide and
              particulate
            </p>
            matter.
          </li>
          <li>
            <p>Encourages the recycling of used cooking oil and agricultural</p>
            byproducts.
          </li>
          <li>
            <p>Safer for the environment in case of accidental spills.</p>
          </li>
        </ul>
      </div>

      {/* Product Applications Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Biodiesel Applications</h3>
        <ul className="space-y-4 grid md:grid-cols-3 gap-6">
          {biodieselApplications.map((item, index) => (
            <li key={index} className="mb-0 flex flex-col">
              <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-sm max-w-2xl mx-auto h-full">
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
        <h3 className="text-2xl font-bold mb-4">Biodiesel's Advantages:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <p>
              Boosting Local Economy: Supports the Make in India initiative
              through domestic production.
            </p>
          </li>
          <li>
            <p>
              Securing Energy Future: Enhances energy independence and reduces
              reliance on imported crude oil.
            </p>
          </li>
          <li>
            <p>
              Empowering Rural India: Creates jobs in rural areas and supports
              agricultural incomes through feedstock sourcing.
            </p>
          </li>
          <li>
            <p>
              Powering National Infrastructure: Fuels critical public services
              such as railways, public buses, and telecom towers.
            </p>
          </li>
          <li>
            <p>
              Ideal for Indian Conditions: Performs effectively in India's hot
              climate and is suitable for rural off-grid power needs.
            </p>
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          <AccordionItem value="item-1" className="mt-2 border-0">
            <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
              <span className="bg-violet-600 text-white p-2 rounded-full">
                <CircleHelp size={20} />
              </span>
              <span className="font-semibold text-sm">
                <p>Q1: Can my diesel engine run on biodiesel?</p>
              </span>
            </AccordionTrigger>
            <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
              <p className="flex-1">
                <p>
                  A: Absolutely, most modern diesel engines can use biodiesel
                  blends without any modifications.
                </p>
              </p>
              <div className="bg-violet-600 text-white p-2 rounded-full">
                <BotMessageSquare size={20} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mt-2 border-0">
            <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
              <span className="bg-violet-600 text-white p-2 rounded-full">
                <CircleHelp size={20} />
              </span>
              <span className="font-semibold text-sm">
                <p>Q2: Will biodiesel affect my engine's power?</p>
              </span>
            </AccordionTrigger>
            <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
              <p className="flex-1">
                <p>
                  A: No, biodiesel provides similar performance and fuel
                  efficiency as regular petroleum diesel.
                </p>
              </p>
              <div className="bg-violet-600 text-white p-2 rounded-full">
                <BotMessageSquare size={20} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mt-2 border-0">
            <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
              <span className="bg-violet-600 text-white p-2 rounded-full">
                <CircleHelp size={20} />
              </span>
              <span className="font-semibold text-sm">
                <p>Q3: Is biodiesel more expensive than regular diesel?</p>
              </span>
            </AccordionTrigger>
            <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
              <div className="flex-1">
                <p>
                  A: While prices can vary, subsidies and lower maintenance
                  costs often make it a cost-effective choice.
                </p>
              </div>
              <div className="bg-violet-600 text-white p-2 rounded-full">
                <BotMessageSquare size={20} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="mt-2 border-0">
            <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
              <span className="bg-violet-600 text-white p-2 rounded-full">
                <CircleHelp size={20} />
              </span>
              <span className="font-semibold text-sm">
                <p>Q4: Is biodiesel environmentally friendly?</p>
              </span>
            </AccordionTrigger>
            <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
              <div className="flex-1">
                <p>A: Yes, it's non-toxic and readily biodegradable.</p>
              </div>
              <div className="bg-violet-600 text-white p-2 rounded-full">
                <BotMessageSquare size={20} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export function PerfectGlycerinPage() {
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
  return (
    <div className="p-6 space-y-12">
      <h2 className="text-center text-4xl font-bold">Glycerin</h2>

      {/* Summary Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-lg">
          Glycerin is a high-quality byproduct of biodiesel production, valued
          for its versatility and wide range of industrial applications. Known
          for its moisturizing and non-toxic properties, glycerin is widely used
          in personal care products, pharmaceuticals, and food manufacturing.
          With its excellent purity and sustainability, glycerin provides an
          eco-friendly resource for various industries looking for safe and
          effective ingredients.
        </div>
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
          <span className="text-blue-600">Highlights of Glycerin:</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-lg font-bold text-blue-950">High Quality</h3>
            <p className="text-sm text-gray-700 mt-2">
              Available in pharmaceutical and cosmetic grades.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-950">
              Sustainable Source
            </h3>
            <p className="text-sm text-gray-700 mt-2">
              Derived from renewable resources.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-950">
              Gentle & Effective
            </h3>
            <p className="text-sm text-gray-700 mt-2">
              Moisturizing and non-toxic.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-950">Broad Utility</h3>
            <p className="text-sm text-gray-700 mt-2">
              Used across numerous industries.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h2 className="text-center text-2xl font-bold">
          Benefits of Glycerin:
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-purple-600 text-2xl font-bold">
              Purity & Stability:
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              High purity, non-irritating, and has a long shelf life.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-purple-600 text-2xl font-bold">
              Essential Ingredient:
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              A crucial component in pharmaceuticals and fast-moving consumer
              goods (FMCG).
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-purple-600 text-2xl font-bold">
              Future Potential:
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              Expanding applications in green chemicals, bio-packaging, and even
              solar technology.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-purple-600 text-2xl font-bold">
              Indirect Support:
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              Benefits from the overall support of the biodiesel industry.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-purple-600 text-2xl font-bold">
              Economical Value:
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              A low-cost byproduct with significant potential for high-value
              applications.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div>
          <h3 className="text-purple-600 text-2xl font-bold">
            Key Features of Glycerin
          </h3>
          <ul className="flex-1 space-y-2 text-lg list-disc list-inside">
            <li>
              <p>
                Biodiesel-Derived: Produced from renewable biodiesel
                manufacturing.
              </p>
            </li>
            <li>
              <p>
                Multiple Grades: Available in technical, USP (pharmaceutical),
                and food grades.
              </p>
            </li>
            <li>
              <p>
                Highly Soluble: Water-soluble and attracts moisture
                (hygroscopic).
              </p>
            </li>
            <li>
              <p>Safe to Use: Non-toxic and safe for human applications.</p>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/images/products/glycerin.JPG"
            alt="Key Features"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Environmental Advantages Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Environmental Advantages:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <p>
              Renewable Origin: Produced from biodegradable and renewable
              sources.
            </p>
          </li>
          <li>
            <p>
              Waste Reduction: Supports a zero-waste approach by utilizing
              biodiesel byproducts.
            </p>
          </li>
          <li>
            <p>
              Safer Alternative: A less toxic option compared to some
              petroleum-based chemicals.
            </p>
          </li>
          <li>
            <p>Cleaner Water: Helps reduce chemical pollution in wastewater.</p>
          </li>
        </ul>
      </div>

      {/* Product Applications Section */}
      <div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Glycerin Applications:</h2>
          <ul className="space-y-4 grid md:grid-cols-3 gap-6">
            {glycerinApplications.map((item, index) => (
              <li key={index}>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-600 text-white rounded-full p-2 mr-4 flex items-center justify-center w-10 h-10">
                    {item.icon}
                  </div>
                  <p className="text-gray-800 text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product Advantages Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Glycerin's Advantages:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <p>
              Traditional Wellness: Plays a vital role in Ayurvedic and herbal
              wellness formulations.
            </p>
          </li>
          <li>
            <p>
              Growing Industries: High demand from India’s expanding personal
              care and pharmaceutical sectors.
            </p>
          </li>
          <li>
            <p>
              Supporting Local Businesses: Benefits MSME soap and cosmetics
              manufacturers in smaller cities and towns.
            </p>
          </li>
          <li>
            <p>
              Eco-Friendly Choice: Being biodegradable, it aligns with India’s
              Swachh Bharat and Green Chemistry initiatives.
            </p>
          </li>
          <li>
            <p>
              Versatile Applications: Widely used in tobacco processing, food
              preservation, and as an industrial lubricant.
            </p>
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          <AccordionItem value="item-1" className="mt-2 border-0">
            <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
              <span className="bg-violet-600 text-white p-2 rounded-full">
                <CircleHelp size={20} />
              </span>
              <span className="font-semibold text-sm">
                <p>Q1: Is glycerin safe for my skin?</p>
              </span>
            </AccordionTrigger>
            <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
              <p className="flex-1">
                <p>
                  A: Yes, it's a common ingredient in Indian skincare products
                  known for its excellent moisturizing properties.
                </p>
              </p>
              <div className="bg-violet-600 text-white p-2 rounded-full">
                <BotMessageSquare size={20} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mt-2 border-0">
            <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
              <span className="bg-violet-600 text-white p-2 rounded-full">
                <CircleHelp size={20} />
              </span>
              <span className="font-semibold text-sm">
                <p>Q2: What are the different types of glycerin available?</p>
              </span>
            </AccordionTrigger>
            <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
              <p className="flex-1">
                <p>
                  A: The main grades are technical, USP (pharmaceutical), and
                  food-grade.
                </p>
              </p>
              <div className="bg-violet-600 text-white p-2 rounded-full">
                <BotMessageSquare size={20} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mt-2 border-0">
            <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
              <span className="bg-violet-600 text-white p-2 rounded-full">
                <CircleHelp size={20} />
              </span>
              <span className="font-semibold text-sm">
                <p>Q3: Is glycerin environmentally friendly?</p>
              </span>
            </AccordionTrigger>
            <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
              <div className="flex-1">
                <p>
                  A: Yes, especially when it's a byproduct of biodiesel
                  production, making it biodegradable and renewable.
                </p>
              </div>
              <div className="bg-violet-600 text-white p-2 rounded-full">
                <BotMessageSquare size={20} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="mt-2 border-0">
            <AccordionTrigger className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
              <span className="bg-violet-600 text-white p-2 rounded-full">
                <CircleHelp size={20} />
              </span>
              <span className="font-semibold text-sm">
                <p>Q4: Can I use glycerin in Indian cooking and sweets?</p>
              </span>
            </AccordionTrigger>
            <AccordionContent className="bg-indigo-100 text-sm text-gray-800 rounded-md px-4 py-3 mt-2 flex justify-between items-start gap-4">
              <div className="flex-1">
                <p>
                  A: Absolutely. Food-grade glycerin is used in various Indian
                  sweets, bakery items, and dairy products.
                </p>
              </div>
              <div className="bg-violet-600 text-white p-2 rounded-full">
                <BotMessageSquare size={20} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
