import {
  FaEnvelope,
  FaPhone,
  FaMapLocationDot,
  FaBusinessTime,
  FaWhatsapp,
  FaBuilding,
} from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function PerfectContactInfoGrid() {
  const t = useTranslations("PerfectContactInfoGrid");

  return (
    <div className="max-w-7xl mx-auto p-4 font-inter">
      <div className="container mx-auto px-6 bg-white">
        <div className="mb-8 text-center">
          <p className="mt-2 text-2xl font-bold font-spaceGrotesk text-gray-900">
            {t("title")}
          </p>
        </div>

        <div className="flex flex-wrap">
          {/* Email */}
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <FaEnvelope className="h-6 w-6" />
              <div className="ml-4 text-xl font-semibold">
                {t("email.label")}
              </div>
            </div>
            <a
              href={t("email.link")}
              className="leading-loose text-gray-500 underline"
            >
              {t("email.value")}
            </a>
          </div>

          {/* Phone */}
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              <FaPhone className="h-6 w-6" />
              <div className="ml-4 text-xl font-semibold">
                {t("phone.label")}
              </div>
            </div>
            <a
              href={t("phone.link")}
              className="leading-loose text-gray-500 underline"
            >
              {t("phone.value")}
            </a>
          </div>

          {/* Address */}
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              <FaMapLocationDot className="h-6 w-6" />
              <div className="ml-4 text-xl font-semibold">
                {t("address.label")}
              </div>
            </div>
            <a
              href={t("address.link")}
              target="_blank"
              rel="noopener noreferrer"
              className="leading-loose text-gray-500 underline"
            >
              {t("address.value")}
            </a>
          </div>

          {/* Business Hour */}
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <FaBusinessTime className="h-6 w-6" />
              <div className="ml-4 text-xl font-semibold">
                {t("business.label")}
              </div>
            </div>
            <p className="leading-loose text-gray-500">{t("business.value")}</p>
          </div>

          {/* WhatsApp */}
          <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <FaWhatsapp className="h-6 w-6" />
              <div className="ml-4 text-xl font-semibold">
                {t("whatsapp.label")}
              </div>
            </div>
            <a
              href={`https://wa.me/${t("whatsapp.value")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="leading-loose text-gray-500 underline"
            >
              {t("whatsapp.value")}
            </a>
          </div>

          {/* Office Address */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <FaBuilding className="h-6 w-6" />
              <div className="ml-4 text-xl font-semibold">
                {t("office.label")}
              </div>
            </div>
            <a
              href={t("office.link")}
              target="_blank"
              rel="noopener noreferrer"
              className="leading-loose text-gray-500 underline"
            >
              {t("office.value")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
