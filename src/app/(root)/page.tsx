import PerfectCompanyStrength from "@/components/perfect/perfect-company-strength";
import PerfectContactCta from "@/components/perfect/perfect-contact-cta";
import PerfectHealthSafety from "@/components/perfect/perfect-health-safety";
import PerfectHeroSection from "@/components/perfect/perfect-hero-section";
import PerfectInfinitePartners from "@/components/perfect/perfect-infinite-partners";
import PerfectStrengthCard from "@/components/perfect/perfect-strength-card";
import PerfectInnovation from "@/components/perfect/perfect-innovation";
import PerfectYoutubeEmbed from "@/components/perfect/perfect-youtube-embed";
import PerfectProductAccordion from "@/components/perfect/prefect-product-accordion";
import PerfectStance from "@/components/perfect/prefect-stance";
import { SCROLL_FADE_IN } from "@/lib/className";

export default function Home() {
  return (
    <div className="w-full">
      <PerfectHeroSection />
      <div className={`mb-4 ${SCROLL_FADE_IN}`}>
        <PerfectStance />
      </div>
      <div className={`mx-4 mb-4 ${SCROLL_FADE_IN}`}>
        <PerfectStrengthCard />
      </div>
      <div className={`mb-4 ${SCROLL_FADE_IN}`}>
        <PerfectProductAccordion />
      </div>
      <div className={`mx-4 mb-4 ${SCROLL_FADE_IN}`}>
        <PerfectInnovation />
      </div>
      <div className={`mx-4 mb-4 ${SCROLL_FADE_IN}`}>
        <PerfectCompanyStrength />
      </div>
      <div className={`m-4 ${SCROLL_FADE_IN}`}>
        <PerfectInfinitePartners />
      </div>
      <div className={`${SCROLL_FADE_IN}`}>
        <PerfectContactCta />
      </div>
      <div
        className={`m-auto px-4 mb-4 flex flex-wrap place-items-center ${SCROLL_FADE_IN}`}
      >
        <PerfectYoutubeEmbed />
        <PerfectHealthSafety />
      </div>
    </div>
  );
}
