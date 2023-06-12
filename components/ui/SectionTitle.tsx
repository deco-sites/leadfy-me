import type { HTML } from "deco-sites/std/components/types.ts";

export type Props = {
  html?: HTML;
};

const SectionTitle = ({ html }: Props) => {
  if (!html) {
    return <></>;
  }

  return (
    <div
      class="text-center [&>h2]:font-['clash_grotesk_semibold'] [&>h2]:font-semibold [&>h2]:text-[#1B1B1B] [&>h2]:text-[40px] [&>h2]:tracking-[-.02em] [&>h2]:mb-5 [&>h2]:leading-none max-md:[&>h2]:text-[32px]"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default SectionTitle;
