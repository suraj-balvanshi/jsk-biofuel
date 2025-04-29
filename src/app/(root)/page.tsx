import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");

  return <div>{t("title")}</div>;
}
