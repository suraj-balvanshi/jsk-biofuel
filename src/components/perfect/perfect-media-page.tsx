import Image from "next/image";
import PerfectYoutubeEmbed from "./perfect-youtube-embed";
import { useTranslations } from "next-intl";
import { SCROLL_FADE_IN } from "@/lib/className";

export default function PerfectMediaPage() {
  const t = useTranslations("mediaPage");

  return (
    <div className="flex flex-col justify-center font-inter">
      <h2 className="text-4xl font-bold m-4 text-center font-spaceGrotesk">
        {t("title")}
      </h2>
      <div className={`mx-4 mt-0 ${SCROLL_FADE_IN}`}>
        <h3 className="text-4xl font-bold text-center mb-4 font-playfair">
          {t("youtubeTitle")}
        </h3>
        <PerfectYoutubeEmbed />
      </div>
      <div>
        <div className={`container mx-auto px-4 py-8 ${SCROLL_FADE_IN}`}>
          <h3 className="text-4xl font-bold text-center mb-8 font-playfair">
            {t("albumTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Large item */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (1).JPG"
                alt={t("inauguration1.alt")}
                className="w-full h-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("inauguration1.caption")}
                  </h4>
                </div>
              </div>
            </div>

            {/* Two small items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (2).JPG"
                alt={t("inauguration2.alt")}
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("inauguration2.caption")}
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (3).JPG"
                alt={t("inauguration3.alt")}
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("inauguration3.caption")}
                  </h4>
                </div>
              </div>
            </div>

            {/* Three medium items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (4).JPG"
                alt={t("inauguration4.alt")}
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("inauguration4.caption")}
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (5).JPG"
                alt={t("inauguration5.alt")}
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("inauguration5.caption")}
                  </h4>
                </div>
              </div>
            </div>

            {/* bottom cards */}
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (6).JPG"
                alt={t("inauguration6.alt")}
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("inauguration6.caption")}
                  </h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/inaugration (7).JPG"
                alt={t("inauguration7.alt")}
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("inauguration7.caption")}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container mx-auto px-4 py-8 ${SCROLL_FADE_IN}`}>
          <h3 className="text-4xl font-bold text-center mb-8 font-playfair">
            {t("siteTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Large item */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (1).JPG"
                alt={t("site1.alt")}
                className="w-full h-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("site1.caption")}
                  </h4>
                </div>
              </div>
            </div>

            {/* Two small items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (2).JPG"
                alt={t("site2.alt")}
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("site2.caption")}
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (3).JPG"
                alt={t("site3.alt")}
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("site3.caption")}
                  </h4>
                </div>
              </div>
            </div>

            {/* Three medium items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (4).JPG"
                alt={t("site4.alt")}
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("site4.caption")}
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (5).JPG"
                alt={t("site5.alt")}
                className="w-full h-48 object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("site5.caption")}
                  </h4>
                </div>
              </div>
            </div>

            {/* bottom cards */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (6).JPG"
                alt={t("site6.alt")}
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("site6.caption")}
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (7).JPG"
                alt={t("site7.alt")}
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("site7.caption")}
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                fill
                src="/images/media/site (8).JPG"
                alt={t("site8.alt")}
                className="w-full object-cover !relative"
              />
              <div className="absolute inset-0 bg-black/35 bg-opacity-60 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
                  <h4 className="text-md font-bold text-white font-playfair">
                    {t("site8.caption")}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
