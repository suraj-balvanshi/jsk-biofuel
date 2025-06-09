import PerfectContactCta from "@/components/perfect/perfect-contact-cta";
import { PerfectGlycerinPage } from "@/components/perfect/perfect-products";
import { SCROLL_FADE_IN } from "@/lib/className";

export default function Glycerin() {
  return (
    <>
      <PerfectGlycerinPage />
      <div className={` ${SCROLL_FADE_IN}`}>
        <PerfectContactCta />
      </div>
    </>
  );
}
