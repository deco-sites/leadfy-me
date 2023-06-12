import Button from "deco-sites/leadfy-me/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { Image, HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  /**
   * @description Logo
   */
  logo: Image;
  copyright: HTML;
}

function Footer({ logo, copyright }: Props) {
  return (
    <>
      <footer class="w-full py-[3%] mt-[5%] border-t-[#1b1b1b66] border-t-[0.5px] max-md:pb-[120px]">
        <div class="w-full max-w-[1160px] mx-auto grid grid-cols-2 gap-x-[3.2%] max-md:max-w-[90%]">
          <Picture class="w-[92px]" preload>
            <Source fetchPriority="high" src={logo} width={92} height={39.1} />
            <img loading="eager" src={logo} alt="Logo" />
          </Picture>
          <div
            class="text-[#1B1B1B] text-[20px] leading-[1.2] max-md:text-[10px]"
            dangerouslySetInnerHTML={{
              __html: copyright,
            }}
          />
        </div>
      </footer>

      <div class="w-full max-w-[90%] mx-auto md:hidden">
        <div class="fixed w-[90%] top-[calc(100vh-100px)] grid grid-cols-2 gap-x-[1.6%]">
          <Button aria-label="Button test drive" buttonType="primary">
            Test Drive
          </Button>

          <Button
            aria-label="Button faça seu diagnóstico"
            buttonType="secondary"
          >
            Diagnóstico
          </Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
