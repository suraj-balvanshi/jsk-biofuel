import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PerfectContactInfoGrid() {
  const t = useTranslations("PerfectContactInfoGrid");

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="container mx-auto px-6 bg-white">
        <div className="mb-8 text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            {t("title")}
          </p>
        </div>

        <div className="flex flex-wrap">
          {/* Email */}
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6" />
              <div className="ml-4 text-xl">{t("email.label")}</div>
            </div>
            <p className="leading-loose text-gray-500">{t("email.value")}</p>
          </div>

          {/* Phone */}
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              <Phone className="h-6 w-6" />
              <div className="ml-4 text-xl">{t("phone.label")}</div>
            </div>
            <p className="leading-loose text-gray-500">{t("phone.value")}</p>
          </div>

          {/* Address */}
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6" />
              <div className="ml-4 text-xl">{t("address.label")}</div>
            </div>
            <p className="leading-loose text-gray-500">{t("address.value")}</p>
          </div>

          {/* Facebook */}
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <Facebook className="h-6 w-6" />
              <div className="ml-4 text-xl">{t("facebook.label")}</div>
            </div>
            <p className="leading-loose text-gray-500">{t("facebook.value")}</p>
          </div>

          {/* Twitter */}
          <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              <Twitter className="h-6 w-6" />
              <div class="ml-4 text-xl">{t("twitter.label")}</div>
            </div>
            <p className="leading-loose text-gray-500">{t("twitter.value")}</p>
          </div>

          {/* LinkedIn */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex items-center mb-6">
              <Linkedin className="h-6 w-6" />
              <div className="ml-4 text-xl">{t("linkedin.label")}</div>
            </div>
            <p className="leading-loose text-gray-500">{t("linkedin.value")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
