import {
  FaBuilding,
  FaEnvelope,
  FaMapLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function PerfectFooter() {
  const t = useTranslations("footer");

  return (
    <div className="container mx-auto px-4 font-inter">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4 font-spaceGrotesk">
            {t("title")}
          </h4>
          <p>{t("description")}</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 font-spaceGrotesk">
            {t("quickLinks.title")}
          </h4>
          <ul className="space-y-2 flex flex-col max-sm:flex-row max-sm:space-x-4 max-sm:flex-wrap">
            <li>
              <a href="/products/biodiesel" className="hover:text-gray-300">
                {t("quickLinks.biodiesel")}
              </a>
            </li>
            <li>
              <a href="/products/glycerin" className="hover:text-gray-300">
                {t("quickLinks.glycerin")}
              </a>
            </li>
            <li>
              <a href="/career" className="hover:text-gray-300">
                {t("quickLinks.career")}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="text-lg font-bold mb-4 font-spaceGrotesk">
            {t("contactUs.title")}
          </h4>
          <ul className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 gap-4">
            <li className="xsm:col-span-2 sm:col-span-1">
              <a
                href="mailto:info@jskbiofuel.com"
                className="hover:text-gray-300"
              >
                <FaEnvelope className="h-6 w-6 " />
                {t("contactUs.email")}
              </a>
            </li>
            <li>
              <FaPhone className="h-6 w-6" />
              <a href="tel:+919839571751" className="hover:text-gray-300">
                {t("contactUs.phone1")}
              </a>
              <br />
              <a href="tel:+919415564333" className="hover:text-gray-300">
                {t("contactUs.phone2")}
              </a>
            </li>
            <li>
              <div className="flex flex-col">
                <div>
                  <FaWhatsapp className="h-6 w-6 mb-2" />
                  <a
                    href={`https://wa.me/${t("contactUs.whatsapp")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500"
                  >
                    <p>{t("contactUs.whatsapp")}</p>
                  </a>
                </div>
                <div className="hover:text-pink-500">
                  <a
                    href={`https://wa.me/${t("contactUs.whatsapp2")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500"
                  >
                    <p>{t("contactUs.whatsapp2")}</p>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hover:text-blue-400">
                <FaMapLocationDot className="h-6 w-6" />
                <p>{t("contactUs.address")}</p>
              </div>
            </li>
            <li>
              <div className="hover:text-blue-400">
                <FaBuilding className="h-6 w-6" />
                <p>{t("contactUs.office")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>{t("copyright")}</p>
      </div>
    </div>
  );
}
