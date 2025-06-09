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
      <DrawerTrigger className="font-inter bg-[var(--color-burger-menu-bg)] text-white">
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="w-screen !max-w-3xs bg-[var(--color-burger-menu-bg)] text-white">
        <DrawerHeader>
          <DrawerTitle className="sr-only">Navigation Sidebar</DrawerTitle>
          <DrawerDescription className="sr-only">
            Navigate JSK Biofuel using below links
          </DrawerDescription>
          <ul>
            <li>
              <details>
                <summary className="py-2 font-semibold active:motion-preset-bounce hover:motion-preset-pulse motion-loop-once  ">
                  {t("menu-1")}
                </summary>
                <ul className="pl-4">
                  <li className="active:motion-preset-bounce hover:motion-preset-pulse motion-loop-once  ">
                    <Link
                      className="active:link-click-animation py-2 block font-normal"
                      href="/products/biodiesel"
                    >
                      {t("submenu-1-1")}
                    </Link>
                  </li>
                  <li className="active:motion-preset-bounce hover:motion-preset-pulse motion-loop-once  ">
                    <Link
                      className="py-2 block font-normal"
                      href="/products/glycerin"
                    >
                      {t("submenu-1-2")}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="active:motion-preset-bounce hover:motion-preset-pulse motion-loop-once  ">
              <Link className="active:animate-jump py-2 block" href="/media">
                {t("menu-2")}
              </Link>
            </li>
            <li className="active:motion-preset-bounce hover:motion-preset-pulse motion-loop-once  ">
              <Link className="active:animate-jump py-2 block" href="/career">
                {t("menu-3")}
              </Link>
            </li>
            <li className="active:motion-preset-bounce hover:motion-preset-pulse motion-loop-once  ">
              <Link className="active:animate-jump py-2 block" href="/about">
                {t("menu-4")}
              </Link>
            </li>
            <li className="active:motion-preset-bounce hover:motion-preset-pulse motion-loop-once  ">
              <Link className="active:animate-jump py-2 block" href="/contact">
                {t("menu-5")}
              </Link>
            </li>
          </ul>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
