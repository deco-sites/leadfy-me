import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import NavItem from "./NavItem.tsx";

import { useUI } from "deco-sites/leadfy-me/sdk/useUI.ts";

import type { Image } from "deco-sites/std/components/types.ts";
import type { INavItem } from "./NavItem.tsx";

function Navbar({ logo, items }: { logo: Image; items: INavItem[] }) {
  const { displayMenu, isScrolled } = useUI();

  const openMenu = () => {
    displayMenu.value = true;
  };

  const closeMenu = () => {
    displayMenu.value = false;
  };

  return (
    <>
      <a href="#intro" class="" aria-label="Bridget Latam Logo">
        <Picture
          class={`w-[100px] ${
            isScrolled.value ? "max-md:max-w-[94px]" : ""
          } max-md:block max-md:my-[5px] max-md:mr-[10px]`}
          preload
        >
          <Source fetchPriority="high" src={logo} width={100} height={42.5} />
          <img loading="eager" src={logo} alt="Logo" />
        </Picture>
      </a>

      {!displayMenu.value && (
        <button
          class="lg:hidden bg-transparent border-0 hover:bg-transparent hover:border-0 flex justify-end py-[11px] px-[9px] ml-[10px] w-auto relative top-[-10px]"
          onClick={openMenu}
          aria-label="Open menu"
        >
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-3-inside-2_1_214" fill="white">
              <path d="M0 0H22V2H0V0Z" />
            </mask>
            <path
              d="M0 2H22V-2H0V2Z"
              fill="#181818"
              mask="url(#path-3-inside-2_1_214)"
            />
            <mask id="path-5-inside-3_1_214" fill="white">
              <path d="M0 8H22V10H0V8Z" />
            </mask>
            <path
              d="M0 10H22V6H0V10Z"
              fill="#181818"
              mask="url(#path-5-inside-3_1_214)"
            />
            <path
              d="M22 16H0V20H22V16Z"
              fill="#181818"
              mask="url(#path-1-inside-1_1_214)"
            />
          </svg>
        </button>
      )}

      <ul
        class={`flex max-md:h-full max-md:w-[300px] max-md:pt-[60px] max-md:px-[25px] max-md:pb-[25px] max-md:text-[#181818] max-md:overflow-y-auto max-md:fixed max-md:top-0 max-md:z-[9999] max-md:transition-[left,right,top,bottom,width,transform,opacity] max-md:duration-200 max-md:ease-in-out max-md:origin-right max-md:right-[-300px] max-md:bg-[#DAFF01] max-md:opacity-0 max-md:block ${
          displayMenu.value
            ? "!right-0 !shadow-[-6px_0_20px_5px_rgba(0,0,0,0.1)] !opacity-100"
            : ""
        }`}
      >
        {displayMenu.value && (
          <button
            class="lg:hidden bg-transparent border-0 hover:bg-transparent hover:border-0 flex justify-end absolute top-[10px] right-[10px] p-[9px]"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_1_214" fill="white">
                <path d="M3.69263 1L19.249 16.5563L18.5563 17.249L2.99998 1.69265L3.69263 1Z" />
              </mask>
              <path
                d="M2.98552 1.70711L18.5419 17.2635L19.9561 15.8492L4.39973 0.292893L2.98552 1.70711Z"
                fill="#181818"
                mask="url(#path-1-inside-1_1_214)"
              />
              <mask id="path-3-inside-2_1_214" fill="white">
                <path d="M3 16.5564L18.5563 1L19.249 1.69265L3.69265 17.249L3 16.5564Z" />
              </mask>
              <path
                d="M3.70711 17.2635L19.2635 1.70711L17.8492 0.292895L2.29289 15.8492L3.70711 17.2635Z"
                fill="#181818"
                mask="url(#path-3-inside-2_1_214)"
              />
            </svg>
          </button>
        )}

        <div class="flex max-md:mt-4 max-md:mb-6 max-md:block">
          {items.map((item) => <NavItem item={item} onClick={closeMenu} />)}
        </div>
      </ul>

      {displayMenu.value && (
        <div class="after:content-[''] after:bg-[rgba(206,206,206,.8)] after:w-screen after:h-[100vh] after:fixed after:top-0 after:backdrop-blur-md after:-z-1 after:left-0" />
      )}
    </>
  );
}

export default Navbar;
