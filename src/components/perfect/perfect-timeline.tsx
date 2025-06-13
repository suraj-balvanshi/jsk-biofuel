import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PerfectTimeline() {
  const t = useTranslations("timeline");

  const cards = [
    {
      title: t("card-1-title"),
      content: t("card-1-content"),
    },
    {
      title: t("card-2-title"),
      content: t("card-2-content"),
    },
    {
      title: t("card-3-title"),
      content: t("card-3-content"),
    },
    {
      title: t("card-4-title"),
      content: t("card-4-content"),
    },
    {
      title: t("card-5-title"),
      content: t("card-5-content"),
    },
    {
      title: t("card-6-title"),
      content: t("card-6-content"),
    },
  ];

  return (
    <div className="h-[calc(40rem*_6)] xxsm:h-[calc(35rem*_6)] xsm:h-[calc(25rem*_6)] sm:h-[calc(20rem*_6)] relative px-4">
      <Image
        src="/images/timeline/timeline_1.JPG"
        height={1200}
        width={1920}
        className="h-full w-full absolute top-0 left-0 object-cover rounded-2xl filter sepia hue-rotate-[330deg] saturate-200"
        alt={t("backgroundAlt")}
      />
      {cards.map((card, index) => (
        <div
          key={index}
          className="sticky top-[calc(4rem*_var(--i))] flex justify-center h-auto mb-[10rem] w-full  transition-all duration-300 ease-in-out"
          style={{
            ["--i" as string]: index,
            zIndex: index + 10,
          }}
        >
          <div className="max-w-xl w-full border rounded-2xl p-6 shadow-md mt-4 bg-white shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
