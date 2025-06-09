import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export default function PerfectNavMenu() {
  const t = useTranslations("header");

  return (
    <>
      <NavigationMenu className="font-inter bg-[var(--color-header-footer)] text-white">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold bg-[var(--color-header-footer)] text-white hover:bg-[var(--color-header-footer)] hover:text-white">
              {t("menu-1")}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[var(--color-header-footer)] text-white hover:bg-[var(--color-header-footer)] hover:text-white">
              <NavigationMenuLink
                href="/products/biodiesel"
                className="font-normal"
              >
                {t("submenu-1-1")}
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/products/glycerin"
                className="font-normal"
              >
                {t("submenu-1-2")}
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/media">{t("menu-2")}</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/career">
              {t("menu-3")}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">{t("menu-4")}</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact">
              {t("menu-5")}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
