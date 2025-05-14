import PerfectCompanyStrength from "@/components/perfect/perfect-company-strength";
import PerfectContactCta from "@/components/perfect/perfect-contact-cta";
import PerfectHeroSection from "@/components/perfect/perfect-hero-section";
import PerfectInfinitePartners from "@/components/perfect/perfect-infinite-partners";
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
      <div className="mb-4">
        <PerfectProductAccordion />
      </div>
      <div className="mx-4 mb-4">
        <PerfectCompanyStrength />
      </div>
      <div className="mx-4 mb-4">
        <PerfectInfinitePartners />
      </div>
      <div>
        <PerfectContactCta />
      </div>
      <div className="m-auto px-4 mb-4 flex place-items-center max-h-[450px] max-w-[800px]">
        <PerfectYoutubeEmbed />
      </div>
    </div>
  );
}
