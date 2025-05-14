import { useTranslations } from "next-intl";
import PerfectFounders from "./perfect-founders";

export default function PerfectAbout() {
  const t = useTranslations("about");
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative font-inter">
      <div
        className="bg-cover bg-center text-center overflow-hidden rounded-xl"
        style={{
          minHeight: "500px",
          backgroundImage: "url('/images/about/about-1.JPG')",
        }}
        title={t("imageTitle")}
      ></div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h3 className="text-gray-900 font-bold text-3xl mb-2 text-center font-spaceGrotesk">
              {t("title")}
            </h3>
            <p className="text-base leading-8 my-5">{t("description")}</p>
            <h3 className="text-2xl font-bold my-5 text-center">
              {t("mvpsTitle")}
            </h3>
            <div className="text-base leading-8 my-5">
              <PerfectFounders />
            </div>

            <h3 className="text-2xl font-bold my-5 text-center">
              {t("missionTitle")}
            </h3>
            <p className="text-base leading-8 my-5">
              {t("missionDescription")}
            </p>
            <h3 className="text-2xl font-bold my-5 text-center">
              {t("visionTitle")}
            </h3>
            <p className="text-base leading-8 my-5">{t("visionDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
