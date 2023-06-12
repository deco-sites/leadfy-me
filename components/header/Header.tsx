import { useUI } from "deco-sites/leadfy-me/sdk/useUI.ts";
import Navbar from "./Navbar.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface NavItem {
  label: string;
  href: string;
}

export interface Props {
  /**
   * @description Logo
   */
  logo: LiveImage;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];
}

function Header({ logo, navItems = [] }: Props) {
  const { isScrolled } = useUI();

  return (
    <div>
      <header
        class={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled.value ? "bg-[#DAFF01]" : ""
        } max-md:min-h-[69px]`}
      >
        <div
          class={`relative w-full max-w-[1160px] max-[1260px]:max-w-[94%] ${
            isScrolled.value ? "max-md:pt-[5px]" : "max-md:pt-[10px]"
          } max-md:pb-[5px] max-md:py-0 max-md:max-w-[90%] mx-auto flex justify-between items-center transition-[padding] duration-300 ease-in-out ${
            isScrolled.value ? "py-[5px]" : "py-8"
          }`}
        >
          <Navbar logo={logo} items={navItems} />
        </div>
      </header>
    </div>
  );
}

export default Header;
