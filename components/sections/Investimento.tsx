import SectionTitle from "deco-sites/leadfy-me/components/ui/SectionTitle.tsx";
import SectionText from "deco-sites/leadfy-me/components/ui/SectionText.tsx";
import BottomOptions from "deco-sites/leadfy-me/components/ui/BottomOptions.tsx";

import { useUI } from "deco-sites/leadfy-me/sdk/useUI.ts";

import type { HTML } from "deco-sites/std/components/types.ts";

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
   * @description Quantity label
   */
  quantityLabel?: string;
  /**
   * @description Value label
   */
  valueLabel?: string;
  /**
   * @description Observation text
   */
  observation?: string;
  /**
   * @description Data for setting up the value rule
   */
  data?: {
    quantity: string;
    value: string;
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

function Anuncie({
  title,
  text,
  data,
  quantityLabel,
  valueLabel,
  observation,
  bottomOptions,
}: Props) {
  const { investimentBarCurrentValue } = useUI();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #leadfySlider.slider-progress {
              --range: ${data?.length ? data.length - 1 : 0};
              --ratio: calc(${investimentBarCurrentValue.value} / var(--range));
              --sx: calc(0.5 * 32px + var(--ratio) * (100% - 32px));
            }
          `,
        }}
      />
      <div id="investimento" class="w-full pt-[7%] max-md:pt-[20%]">
        <div class="w-full max-w-[1160px] mx-auto max-md:max-w-[90%]">
          <div class="max-md:mx-auto max-md:max-w-[90%]">
            <SectionTitle html={title} />

            <SectionText html={text} />
          </div>
        </div>

        {!!data?.length && (
          <div class="bg-[#1B1B1B] py-[3%] px-[4%] mb-[58px] max-md:py-[20%] max-md:px-[5%]">
            <div class="max-md:max-w-[90%] max-md:mx-auto">
              <div class="grid grid-cols-2 gap-x-[3.2%]">
                <div class="text-right md:pr-[80px] max-md:text-left">
                  <p class="relative font-['clash_grotesk_medium'] font-bold text-[40px] text-[#DAFF01] tracking-[-.02em] leading-none mb-5 md:after:absolute md:after:block md:after:bg-[#DAFF01] md:after:content-[''] md:after:w-[24px] md:after:h-[24px] md:after:rotate-45 md:after:rounded-[2px] md:after:-right-[110px] md:after:top-[10px]">
                    {data[Number(investimentBarCurrentValue)].quantity}
                  </p>

                  {quantityLabel && (
                    <p class="text-[20px] text-[#FDFFF1] leading-[1.2] mb-[26px]">
                      {quantityLabel}
                    </p>
                  )}
                </div>
                <div class="text-left md:pl-[80px] max-md:text-right">
                  <p class="font-['clash_grotesk_medium'] font-bold text-[40px] text-[#DAFF01] tracking-[-.02em] leading-none mb-5">
                    * {data[Number(investimentBarCurrentValue)].value}
                  </p>

                  {valueLabel && (
                    <p class="text-[20px] text-[#FDFFF1] leading-[1.2] mb-[26px] max-w-[310px]">
                      {valueLabel}
                    </p>
                  )}
                </div>
              </div>

              <div class="relative">
                <input
                  id="leadfySlider"
                  class="slider-progress h-[38px] appearance-none w-full p-0 rounded-lg bg-transparent cursor-pointer relative z-10 md:mr-4 mb-[6.5px] "
                  value={investimentBarCurrentValue.value}
                  onInput={(e) => {
                    const value = e.currentTarget.value;

                    if (value) {
                      investimentBarCurrentValue.value = Number(value);
                    }
                  }}
                  type="range"
                  min="0"
                  max={data.length - 1}
                />

                <div class="absolute z-0 top-[calc(-50%-24px)] right-0 bottom-0 left-0 flex justify-between p-[22.5px] max-md:top-[calc(-50%-20px)]">
                  {data.map(() => (
                    <span class="relative z-0 flex justify-center w-[2px] bg-[#FDFFF1] h-[15px] rounded-none leading-[50px] -bottom-[30px]" />
                  ))}
                </div>
              </div>

              {observation && (
                <p class="text-[20px] text-[#FDFFF1] leading-[1.2] mt-5">
                  {observation}
                </p>
              )}
            </div>
          </div>
        )}

        <div class="w-full max-w-[1160px] mx-auto">
          <BottomOptions bottomOptions={bottomOptions} />
        </div>
      </div>
    </>
  );
}

export default Anuncie;
