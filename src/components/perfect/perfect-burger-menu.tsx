import { useTranslations } from "next-intl";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function PerfectBurgerMenu() {
  const t = useTranslations("header");
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="w-screen !max-w-3xs">
        <DrawerHeader>
          <DrawerTitle className="sr-only">Navigation Sidebar</DrawerTitle>
          <DrawerDescription className="sr-only">
            Navigate JSK Biofuel using below links
          </DrawerDescription>
          <ul>
            <li>
              <details>
                <summary className="py-2">{t("menu-1")}</summary>
                <ul className="pl-4">
                  <li>
                    <Link
                      className="active:link-click-animation py-2 block"
                      href="/"
                    >
                      {t("submenu-1-1")}
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2 block" href="/">
                      {t("submenu-1-2")}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link className="active:animate-jump py-2 block" href="/">
                {t("menu-2")}
              </Link>
            </li>
            <li>
              <Link className="active:animate-jump py-2 block" href="/">
                {t("menu-3")}
              </Link>
            </li>
            <li>
              <Link className="active:animate-jump py-2 block" href="/">
                {t("menu-4")}
              </Link>
            </li>
            <li>
              <Link className="active:animate-jump py-2 block" href="/">
                {t("menu-5")}
              </Link>
            </li>
          </ul>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
