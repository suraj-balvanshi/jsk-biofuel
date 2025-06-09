import PerfectCareer from "@/components/perfect/perfect-career";
import PerfectContactCta from "@/components/perfect/perfect-contact-cta";
import { SCROLL_FADE_IN } from "@/lib/className";

export default function Career() {
  return (
    <>
      <div className={`${SCROLL_FADE_IN}`}>
        <PerfectCareer />
      </div>
      <div className={`${SCROLL_FADE_IN}`}>
        <PerfectContactCta />
      </div>
    </>
  );
}
