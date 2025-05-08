import PerfectCompanyStrength from "@/components/perfect/perfect-company-strength";
import PerfectHeroSection from "@/components/perfect/perfect-hero-section";
import PerfectStrengthCard from "@/components/perfect/perfect-strength-card";
import PerfectYoutubeEmbed from "@/components/perfect/perfect-youtube-embed";
import PerfectProductAccordion from "@/components/perfect/prefect-product-accordion";

export default function Home() {
  return (
    <div className="w-full">
      <PerfectHeroSection />
      <div className="mx-4 mb-4">
        <PerfectStrengthCard />
      </div>
      <div className="mx-4 mb-4">
        <PerfectCompanyStrength />
      </div>
      <div className="m-auto sm:px-4 mb-4 flex place-items-center max-h-[450px] max-w-[800px]">
        <PerfectYoutubeEmbed />
      </div>
      <div className="mb-4">
        <PerfectProductAccordion />
      </div>
    </div>
  );
}
