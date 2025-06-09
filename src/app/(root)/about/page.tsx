import PerfectAbout from "@/components/perfect/perfect-about";
import PerfectContactCta from "@/components/perfect/perfect-contact-cta";
import { SCROLL_FADE_IN } from "@/lib/className";

export default function About() {
  return (
    <>
      <PerfectAbout />
      <div className={` ${SCROLL_FADE_IN}`}>
        <PerfectContactCta />
      </div>
    </>
  );
}
