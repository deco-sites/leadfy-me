import type { HTML } from "deco-sites/std/components/types.ts";

export type Props = {
  html?: HTML;
};

const SectionText = ({ html }: Props) => {
  if (!html) {
    return <></>;
  }

  return (
    <div
      class="text-center [&>p]:font-['clash_grotesk_medium'] [&>p]:font-medium [&>p]:text-[#1B1B1B] [&>p]:text-[24px] [&>p]:mb-[32px] [&>p]:leading-[1.2]"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default SectionText;
