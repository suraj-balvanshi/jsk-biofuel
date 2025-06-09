import PerfectContactCta from "@/components/perfect/perfect-contact-cta";
import { PerfectBiodieselPage } from "@/components/perfect/perfect-products";
import { SCROLL_FADE_IN } from "@/lib/className";

export default function Biodiesel() {
  return (
    <>
      <PerfectBiodieselPage />
      <div className={` ${SCROLL_FADE_IN}`}>
        <PerfectContactCta />
      </div>
    </>
  );
}
