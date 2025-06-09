import { SCROLL_FADE_IN } from "@/lib/className";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PerfectFounders() {
  const t = useTranslations("founder");
  const t2 = useTranslations("founder2");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        className={`bg-gray-100 grid grid-cols-1 gap-4 justify-items-center rounded-xl font-inter h-max ${SCROLL_FADE_IN}`}
      >
        <div className="relative mt-24 mb-0 mx-auto">
          <div className="rounded overflow-hidden shadow-md bg-white">
            <div className="absolute -mt-20 w-full flex justify-center">
              <div className="h-32 w-32">
                <Image
                  fill
                  src="/images/founders/founder-1.JPG"
                  className="rounded-full object-cover h-full w-full shadow-md !relative"
                  alt="Founder Image 1"
                />
              </div>
            </div>
            <div className="px-8 pb-8 mt-16">
              <h1 className="font-bold text-3xl text-center mb-1 font-spaceGrotesk">
                {t("name")}
              </h1>
              <p className="text-gray-800 text-sm text-center">{t("title")}</p>
              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <blockquote className="border-l-4 text-base italic leading-8 m-4 p-4 bg-white text-indigo-600">
            {t("quote")}
          </blockquote>
        </div>
      </div>
      <div
        className={`bg-gray-100 grid grid-cols-1 gap-4 items-center justify-items-center rounded-xl font-inter h-max ${SCROLL_FADE_IN}`}
      >
        <div className="relative mt-24 mb-0 mx-auto">
          <div className="rounded overflow-hidden shadow-md bg-white">
            <div className="absolute -mt-20 w-full flex justify-center">
              <div className="h-32 w-32">
                <Image
                  fill
                  src="/images/founders/founder-1.JPG"
                  className="rounded-full object-cover h-full w-full shadow-md !relative blur"
                  alt="Founder Image 1"
                />
              </div>
            </div>
            <div className="px-8 pb-8 mt-16">
              <h1 className="font-bold text-3xl text-center mb-1 font-spaceGrotesk">
                {t2("name")}
              </h1>
              <p className="text-gray-800 text-sm text-center">{t("title")}</p>
              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                {t2("description")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <blockquote className="border-l-4 text-base italic leading-8 m-4 p-4 bg-white text-indigo-600">
            {t2("quote")}
          </blockquote>
        </div>
      </div>
    </div>
  );
}
