import BottomButtons from "deco-sites/leadfy-me/components/ui/BottomOptions.tsx";
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
   * @description Image displayed on the right side
   */
  image?: Image;
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

function Intro({ title, text, image, bottomOptions }: Props) {
  return (
    <div
      id="intro"
      class="w-full mx-auto grid grid-cols-2 gap-x-[3.2%] gap-y-0 content-center py-[10%] max-md:max-w-[90%] max-md:grid-cols-1 max-md:pt-[22%] max-md:pb-[5%]"
    >
      <div class="pl-[calc(50vw-580px)]">
        <div class="mb-[30px]">
          {title && (
            <div
              class="[&>h2]:font-['clash_grotesk_semibold'] [&>h2]:font-semibold [&>h2]:text-[#1B1B1B] [&>h2]:text-[64px] [&>h2]:tracking-[-.02em] [&>h2]:mb-8 [&>h2]:leading-none max-md:[&>h2]:text-[48px]"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          )}

          {text && (
            <div
              class="[&>p]:font-['clash_grotesk_medium'] [&>p]:font-medium [&>p]:text-[#1B1B1B] [&>p]:text-[32px] [&>p]:mb-[42px] [&>p]:leading-[1.2] max-md:[&>p]:text-[24px] max-md:[&>p]:mb-0"
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          )}
        </div>

        <BottomButtons bottomOptions={bottomOptions} twoColumns={true} />
      </div>

      {image && (
        <div
          style={{ "--image-url": `url(${image})` }}
          class="bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-scroll bg-[50% 50%] max-md:h-[50vw] max-md:mb-[10%]"
        />
      )}
    </div>
  );
}

export default Intro;
