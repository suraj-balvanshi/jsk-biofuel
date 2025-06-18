import { FaLinkedin, FaMapLocationDot, FaWhatsapp } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function PerfectFooter() {
  const t = useTranslations("footer");

  return (
    <div className="container mx-auto px-4 font-inter">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
          <ul className="space-y-2">
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
        <div>
          <h4 className="text-lg font-bold mb-4 font-spaceGrotesk">
            {t("contactUs.title")}
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:info@jskbiofuel.com"
                className="hover:text-gray-300"
              >
                {t("contactUs.email")}
              </a>
            </li>
            <li>
              <a href="tel:+919839571751" className="hover:text-gray-300">
                {t("contactUs.phone1")}
              </a>
              <br />
              <a href="tel:+919415564333" className="hover:text-gray-300">
                {t("contactUs.phone2")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 font-spaceGrotesk">
            {t("followUs.title")}
          </h4>
          <div className="flex flex-wrap gap-4">
            <div className="hover:text-blue-400">
              <FaLinkedin className="h-6 w-6" />
              <p>{t("followUs.linkedin")}</p>
            </div>
            <div className="hover:text-pink-500">
              <a
                href={`https://wa.me/${t("followUs.whatsapp")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-6 w-6" />
                <p>{t("followUs.whatsapp")}</p>
              </a>
            </div>
            <div className="hover:text-blue-400 flex-basis-full">
              <FaMapLocationDot className="h-6 w-6" />
              <p>{t("followUs.address")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>{t("copyright")}</p>
      </div>
    </div>
  );
}
