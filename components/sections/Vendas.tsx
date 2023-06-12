import BottomOptions from "deco-sites/leadfy-me/components/ui/BottomOptions.tsx";
import SectionTitle from "deco-sites/leadfy-me/components/ui/SectionTitle.tsx";
import SectionText from "deco-sites/leadfy-me/components/ui/SectionText.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { HTML, Image } from "deco-sites/std/components/types.ts";

export interface Props {
  /**
   * @description Section title
   */
  title?: HTML;
  /**
   * @description Section text
   */
  text?: HTML;
  /**
   * @description Cards
   */
  cards?: {
    icon: Image;
    title: string;
    text: string;
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

function Vendas({ title, text, cards, bottomOptions }: Props) {
  return (
    <div id="vendas" class="w-full max-w-[1160px] mx-auto max-md:max-w-[90%]">
      <div class="max-md:max-w-[90%] max-md:mx-auto">
        <SectionTitle html={title} />

        <SectionText html={text} />

        {!!cards?.length && (
          <div class="grid grid-cols-4 gap-x-[1.6%] pt-[3%] pb-[4%] max-md:grid-cols-1">
            {cards.map((card, index) => {
              return (
                <div class="bg-[#1B1B1B] pt-6 pl-6 pb-8 pr-9 max-md:mb-[30px]">
                  <div class="min-h-[45.4px]">
                    <Picture>
                      <Source
                        fetchPriority="low"
                        src={card.icon}
                        width={37}
                        height={37}
                      />
                      <img
                        loading="lazy"
                        src={card.icon}
                        alt={`card icon ${index}`}
                      />
                    </Picture>
                  </div>

                  <h3 class="font-['clash_grotesk_medium'] font-medium text-[24px] text-[#FDFFF1] tracking-[-.02em] leading-[1.2] pb-[30px] after:relative after:block after:content-[''] after:bg-[#DAFF01] after:h-[4px] after:w-[113px] after:-bottom-[10px]">
                    {card.title}
                  </h3>

                  <p class="text-[20px] text-[#FDFFF1] leading-[1.2]">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <BottomOptions bottomOptions={bottomOptions} />
      </div>
    </div>
  );
}

export default Vendas;
