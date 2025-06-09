import PerfectContactCta from "@/components/perfect/perfect-contact-cta";
import PerfectMediaPage from "@/components/perfect/perfect-media-page";
import { SCROLL_FADE_IN } from "@/lib/className";

export default function MediaPage() {
  return (
    <>
      <PerfectMediaPage />
      <div className={` ${SCROLL_FADE_IN}`}>
        <PerfectContactCta />
      </div>
    </>
  );
}
