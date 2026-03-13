import Image from "next/image";
import Link from "next/link";
import PerfectNavMenu from "./perfect-nav-menu";
import PerfectBurgerMenu from "./perfect-burger-menu";
import { useTranslations } from "next-intl";

export default function PerfectHeader() {
  const t = useTranslations();

  return (
    <nav className="flex items-center max-content-width px-4 py-2">
      <h1 className="mr-auto font-spaceGrotesk font-bold text-lg flex items-center">
        <Link href="/" className="uppercase flex justify-center items-center">
          <div className="rounded-[50%] bg-white  p-1 mr-2">
            <Image
              src="/logos/logo_v5.svg"
              alt={t("header.title")}
              height={30}
              width={30}
            />
          </div>
          {t("header.title")}
        </Link>
      </h1>
      <div className="max-sm:hidden">
        <PerfectNavMenu />
      </div>
      <div className="sm:hidden h-6">
        <PerfectBurgerMenu />
      </div>
    </nav>
  );
}
