import { Picture } from "deco-sites/std/components/Picture.tsx";

import SectionTitle from "deco-sites/leadfy-me/components/ui/SectionTitle.tsx";
import SectionText from "deco-sites/leadfy-me/components/ui/SectionText.tsx";
import BottomOptions from "deco-sites/leadfy-me/components/ui/BottomOptions.tsx";

import type { HTML, Image } from "deco-sites/std/components/types.ts";

export interface Props {
  /**
   * @description Section title
   */
  title: HTML;
  /**
   * @description Section text
   */
  text: HTML;
  /**
   * @description Social media cards
   */
  socialMedias: {
    title?: string;
    image?: Image;
  }[];
  /**
   * @description End of section buttons display options
   */
  bottomOptions?: {
    /**
     * @default false
     */
    enableButtons?: boolean;
    text?: string;
    textPosition?: "start" | "end";
  };
}

function Anuncie({ title, text, socialMedias, bottomOptions }: Props) {
  return (
    <div
      id="anuncie"
      class="w-full max-w-[1160px] mx-auto md:pt-[5%] max-md:max-w-[90%]"
    >
      <div class="max-md:max-w-[90%] max-md:mx-auto">
        <SectionTitle html={title} />

        <SectionText html={text} />

        <div class="grid grid-cols-6 gap-x-[1.6%] md:pb-[5%] max-md:grid-cols-2 max-md:gap-x-[3.2%]">
          {socialMedias.map((social, index) => {
            return (
              <div
                class={`w-full ${
                  index === 1
                    ? "max-md:mb-4 max-md:relative max-md:w-[90vw] max-md:left-[-45vw]"
                    : ""
                }`}
              >
                {!!social?.title && (
                  <h3 class="text-center font-['clash_grotesk_medium'] font-semibold text-[24px] text-[#1B1B1B] tracking-[-.02em] leading-[1.2] mb-[5px]">
                    {social.title}
                  </h3>
                )}
                {!!social?.image && (
                  <Picture>
                    <img
                      class="mx-auto"
                      loading="lazy"
                      src={social.image}
                      alt={`social media icon ${index}`}
                    />
                  </Picture>
                )}
              </div>
            );
          })}
        </div>

        <BottomOptions bottomOptions={bottomOptions} />
      </div>
    </div>
  );
}

export default Anuncie;
