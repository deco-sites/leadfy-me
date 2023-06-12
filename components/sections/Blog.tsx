import { Picture } from "deco-sites/std/components/Picture.tsx";

import SectionTitle from "deco-sites/leadfy-me/components/ui/SectionTitle.tsx";
import SectionText from "deco-sites/leadfy-me/components/ui/SectionText.tsx";
import BottomOptions from "deco-sites/leadfy-me/components/ui/BottomOptions.tsx";

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
   * @description Posts
   */
  posts?: {
    image: Image;
    date: string;
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

function Blog({ title, text, posts, bottomOptions }: Props) {
  return (
    <div
      id="blog"
      class="w-full max-w-[1160px] mx-auto pt-[5%] max-md:max-w-[90%]"
    >
      <div class="max-md:max-w-[90%] max-md:mx-auto">
        <div class="title">
          <SectionTitle html={title} />
        </div>

        <div class="text">
          <SectionText html={text} />
        </div>

        {!!posts?.length && (
          <div class="grid grid-cols-3 gap-x-[3.2%] max-md:grid-cols-1">
            {posts.map((post, index) => {
              return (
                <div class="mb-8 border-[#1b1b1b66] border-[0.5px] h-fit">
                  <div class="relative mb-4">
                    <Picture>
                      <img loading="lazy" src={post.image} alt={post.title} />
                    </Picture>
                  </div>

                  <div class="px-[20px]">
                    <span class="text-[20px] text-[#1B1B1B] tracking-[.04em] leading-[1.2] mb-2">
                      {post.date}
                    </span>

                    <h2 class="font-['clash_grotesk_semibold'] font-semibold text-[24px] text-[#1B1B1B] tracking-[-.04em] leading-[1.2] mb-[10px]">
                      {post.title}
                    </h2>

                    <p class="text-[20px] text-[#1B1B1B] leading-[1.2] mb-[26px]">
                      {post.text}
                    </p>
                  </div>
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

export default Blog;
