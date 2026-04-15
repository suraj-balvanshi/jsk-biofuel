import PerfectCareer from "@/components/perfect/perfect-career";
import PerfectContactCta from "@/components/perfect/perfect-contact-cta";
import { SCROLL_FADE_IN } from "@/lib/className";
import { useTranslations } from "next-intl";

export default function Career() {
  const m = useTranslations("miscellaneous");
  return (
    <>
      <div className={`${SCROLL_FADE_IN}`}>
        {/* <PerfectCareer /> */}
        <div className="flex mx-auto max-w-2xl text-3xl font-bold tracking-tighter sm:text-4xl font-spaceGrotesk text-gray-500">
          {m("willBeBack")}
        </div>
      </div>
      <div>
        <PerfectContactCta />
      </div>
    </>
  );
}
