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
import { useTranslations } from "next-intl";
import { SCROLL_FADE_IN } from "@/lib/className";

export function PerfectBiodieselPage() {
  const t = useTranslations("products.biodiesel");
  console.log(t);

  const biodieselSummary = t("summary");
  const biodieselHighlightTitle = t("highlightTitle");
  const biodieselHighlights = [
    {
      title: t("highlights.renewable"),
      description: t("highlights.renewableDescription"),
    },
    {
      title: t("highlights.cleanerEmissions"),
      description: t("highlights.cleanerEmissionsDescription"),
    },
    {
      title: t("highlights.engineFriendly"),
      description: t("highlights.engineFriendlyDescription"),
    },
    {
      title: t("highlights.versatileBlends"),
      description: t("highlights.versatileBlendsDescription"),
    },
  ];

  const biodieselBenefitsTitle = t("benefitsTitle");
  const biodieselBenefits = [
    {
      title: t("benefits.performance"),
      description: t("benefits.performanceDescription"),
    },
    {
      title: t("benefits.reliablePower"),
      description: t("benefits.reliablePowerDescription"),
    },
    {
      title: t("benefits.futureReady"),
      description: t("benefits.futureReadyDescription"),
    },
    {
      title: t("benefits.governmentSupport"),
      description: t("benefits.governmentSupportDescription"),
    },
    {
      title: t("benefits.costEffective"),
      description: t("benefits.costEffectiveDescription"),
    },
  ];

  const biodieselKeyFeaturesTitle = t("keyFeaturesTitle");
  const biodieselKeyFeatures = [
    {
      title: t("keyFeatures.emissionReduction"),
      description: t("keyFeatures.emissionReductionDescription"),
    },
    {
      title: t("keyFeatures.easyTransition"),
      description: t("keyFeatures.easyTransitionDescription"),
    },
    {
      title: t("keyFeatures.resourcefulProduction"),
      description: t("keyFeatures.resourcefulProductionDescription"),
    },
    {
      title: t("keyFeatures.flexibleOptions"),
      description: t("keyFeatures.flexibleOptionsDescription"),
    },
  ];

  const biodieselEnvironmentalAdvantagesTitle = t(
    "environmentalAdvantagesTitle"
  );
  const biodieselEnvironmentalAdvantages = [
    { description: t("environmentalAdvantages.greenhouseGas") },
    { description: t("environmentalAdvantages.airPollutants") },
    { description: t("environmentalAdvantages.recycling") },
    { description: t("environmentalAdvantages.saferSpills") },
  ];

  const biodieselAdvantagesTitle = t("advantagesTitle");
  const biodieselAdvantages = [
    { description: t("advantages.localEconomy") },
    { description: t("advantages.energyFuture") },
    { description: t("advantages.ruralIndia") },
    { description: t("advantages.infrastructure") },
    { description: t("advantages.indianConditions") },
  ];

  const BiodieselFAQTitle = t("faqTitle");
  const biodieselFaqs = [
    { question: t("faqs.q1"), answer: t("faqs.a1") },
    { question: t("faqs.q2"), answer: t("faqs.a2") },
    { question: t("faqs.q3"), answer: t("faqs.a3") },
    { question: t("faqs.q4"), answer: t("faqs.a4") },
  ];

  const biodieselApplicationsTitle = t("applicationsTitle");
  const biodieselApplications = [
    { icon: <Bus size={24} />, text: t("applications.publicTransportation") },
    { icon: <TrainFront size={24} />, text: t("applications.railways") },
    { icon: <Truck size={24} />, text: t("applications.commercialTransport") },
    { icon: <Tractor size={24} />, text: t("applications.agriculture") },
    { icon: <Hammer size={24} />, text: t("applications.construction") },
    { icon: <Power size={24} />, text: t("applications.ruralPower") },
    { icon: <Fuel size={24} />, text: t("applications.fuelRetail") },
    { icon: <Building2 size={24} />, text: t("applications.urbanServices") },
    { icon: <Signal size={24} />, text: t("applications.telecom") },
    {
      icon: <ShieldCheck size={24} />,
      text: t("applications.institutionalBackup"),
    },
  ];

  return (
    <div className="p-6 space-y-12 font-inter">
      <h2 className="text-center text-4xl font-bold font-spaceGrotesk">
        {t("title")}
      </h2>

      {/* Summary Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-lg">{biodieselSummary}</div>
        <div className="flex-1 max-w-xl h-[400px] relative">
          <Image
            src="/images/products/biodiesel.JPG"
            alt="Biodiesel"
            fill
            className="rounded-xl max-w-xl !relative object-cover"
          />
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className={`text-center ${SCROLL_FADE_IN}`}>
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
      <div className={`bg-gray-100 p-6 rounded-xl ${SCROLL_FADE_IN}`}>
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
      <div
        className={`flex flex-col md:flex-row gap-6 items-center ${SCROLL_FADE_IN}`}
      >
        <div className="flex-1 max-w-xl h-[400px] relative">
          <Image
            src="/images/products/biodiesel-2.JPG"
            alt="Key Features"
            fill
            className="rounded-xl max-w-xl !relative object-cover"
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
      <div className={`text-center ${SCROLL_FADE_IN}`}>
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
      <div className={`${SCROLL_FADE_IN}`}>
        <h3 className="text-2xl font-bold mb-4">
          {biodieselApplicationsTitle}
        </h3>
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
      <div className={`text-center ${SCROLL_FADE_IN}`}>
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
      <div className={`${SCROLL_FADE_IN}`}>
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
  const t = useTranslations("products.glycerin");

  const glycerinSummary = t("summary");
  const glycerinHighlightsTitle = t("highlightsTitle");
  const glycerinHighlights = [
    {
      title: t("highlights.highQuality"),
      description: t("highlights.highQualityDescription"),
    },
    {
      title: t("highlights.sustainableSource"),
      description: t("highlights.sustainableSourceDescription"),
    },
    {
      title: t("highlights.gentleEffective"),
      description: t("highlights.gentleEffectiveDescription"),
    },
    {
      title: t("highlights.broadUtility"),
      description: t("highlights.broadUtilityDescription"),
    },
  ];

  const glycerinBenefitsTitle = t("benefitsTitle");
  const glycerinBenefits = [
    {
      title: t("benefits.purityStability"),
      description: t("benefits.purityStabilityDescription"),
    },
    {
      title: t("benefits.essentialIngredient"),
      description: t("benefits.essentialIngredientDescription"),
    },
    {
      title: t("benefits.futurePotential"),
      description: t("benefits.futurePotentialDescription"),
    },
    {
      title: t("benefits.indirectSupport"),
      description: t("benefits.indirectSupportDescription"),
    },
    {
      title: t("benefits.economicalValue"),
      description: t("benefits.economicalValueDescription"),
    },
  ];

  const glycerinKeyFeaturesTitle = t("keyFeaturesTitle");
  const glycerinKeyFeatures = [
    {
      title: t("keyFeatures.biodieselDerived"),
      description: t("keyFeatures.biodieselDerivedDescription"),
    },
    {
      title: t("keyFeatures.multipleGrades"),
      description: t("keyFeatures.multipleGradesDescription"),
    },
    {
      title: t("keyFeatures.highlySoluble"),
      description: t("keyFeatures.highlySolubleDescription"),
    },
    {
      title: t("keyFeatures.safeToUse"),
      description: t("keyFeatures.safeToUseDescription"),
    },
  ];

  const glycerinEnvironmentalAdvantagesTitle = t(
    "environmentalAdvantagesTitle"
  );
  const glycerinEnvironmentalAdvantages = [
    { description: t("environmentalAdvantages.renewableOrigin") },
    { description: t("environmentalAdvantages.wasteReduction") },
    { description: t("environmentalAdvantages.saferAlternative") },
    { description: t("environmentalAdvantages.cleanerWater") },
  ];

  const glycerinAdvantagesTitle = t("advantagesTitle");
  const glycerinAdvantages = [
    { description: t("advantages.traditionalWellness") },
    { description: t("advantages.growingIndustries") },
    { description: t("advantages.supportingLocalBusinesses") },
    { description: t("advantages.ecoFriendlyChoice") },
    { description: t("advantages.versatileApplications") },
  ];

  const glycerinFaqsTitle = t("faqTitle");
  const glycerinFaqs = [
    { question: t("faqs.q1"), answer: t("faqs.a1") },
    { question: t("faqs.q2"), answer: t("faqs.a2") },
    { question: t("faqs.q3"), answer: t("faqs.a3") },
    { question: t("faqs.q4"), answer: t("faqs.a4") },
  ];

  const glycerinApplicationsTitle = t("applicationsTitle");
  const glycerinApplications = [
    { icon: <Leaf size={24} />, text: t("applications.ayurveda") },
    { icon: <Soap size={24} />, text: t("applications.soapManufacturing") },
    {
      icon: <Droplets size={24} />,
      text: t("applications.toiletriesCosmetics"),
    },
    { icon: <Pill size={24} />, text: t("applications.pharmaceuticals") },
    { icon: <Cigarette size={24} />, text: t("applications.tobaccoIndustry") },
    { icon: <CakeSlice size={24} />, text: t("applications.foodIndustry") },
    { icon: <Package size={24} />, text: t("applications.plasticRubber") },
    { icon: <SprayCan size={24} />, text: t("applications.agrochemicals") },
    { icon: <Ruler size={24} />, text: t("applications.leatherIndustry") },
    { icon: <Shirt size={24} />, text: t("applications.textileIndustry") },
  ];

  return (
    <div className="p-6 space-y-12 font-inter">
      <h2 className="text-center text-4xl font-bold font-spaceGrotesk">
        {t("title")}
      </h2>

      {/* Summary Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-lg">{glycerinSummary}</div>
        <div className="flex-1 max-w-xl h-[400px] relative">
          <Image
            src="/images/products/glycerin.JPG"
            alt="Glycerin"
            fill
            className="rounded-xl max-w-xl !relative object-cover"
          />
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className={`text-center ${SCROLL_FADE_IN}`}>
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
      <div className={`bg-gray-100 p-6 rounded-xl ${SCROLL_FADE_IN}`}>
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
      <div
        className={`flex flex-col md:flex-row gap-6 items-center ${SCROLL_FADE_IN}`}
      >
        <div className="flex-1 max-w-xl h-[400px] relative">
          <Image
            src="/images/products/glycerin-2.JPG"
            alt="Key Features"
            fill
            className="rounded-xl max-w-xl !relative object-cover"
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
      <div className={`text-center ${SCROLL_FADE_IN}`}>
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
      <div className={` ${SCROLL_FADE_IN}`}>
        <h3 className="text-2xl font-bold mb-4">{glycerinApplicationsTitle}</h3>
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

      {/* Product Advantages Section */}
      <div className={`text-center ${SCROLL_FADE_IN}`}>
        <h3 className="text-2xl font-bold mb-4">{glycerinAdvantagesTitle}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {glycerinAdvantages.map((advantage, index) => (
            <li key={index}>
              <p>{advantage.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Section */}
      <div className={`${SCROLL_FADE_IN}`}>
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
