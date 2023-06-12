import Button from "deco-sites/leadfy-me/components/ui/Button.tsx";

interface Props {
  twoColumns?: boolean;
  bottomOptions?: {
    enableButtons?: boolean;
    text?: string;
    textPosition?: "start" | "end";
  };
}

const BottomOptions = ({ twoColumns, bottomOptions }: Props) => {
  if (!bottomOptions) {
    return <></>;
  }

  return (
    <div
      class={`hidden md:grid grid-rows-1 ${
        bottomOptions.text && bottomOptions.textPosition === "start"
          ? "grid-cols-[2.1415fr_1fr_1fr] gap-x-[3.2%]"
          : twoColumns
          ? "grid-cols-2 gap-x-[1.6%]"
          : bottomOptions.text
          ? "grid-cols-[1fr_1fr_2.1415fr] gap-x-[3.2%]"
          : "grid-cols-4 gap-x-[1.6%]"
      }`}
    >
      {bottomOptions.text && (
        <p
          class={`text-[#1B1B1B] text-[20px] leading-[1.2] mb-[26px] row-start-1 ${
            bottomOptions.textPosition === "end" ? "col-start-3" : "col-start-1"
          }`}
        >
          {bottomOptions.text}
        </p>
      )}

      {bottomOptions.enableButtons && (
        <>
          <Button aria-label="Button test drive" buttonType="primary">
            Test Drive
          </Button>

          <Button
            aria-label="Button faça seu diagnóstico"
            buttonType="secondary"
          >
            Faça seu diagnóstico
          </Button>
        </>
      )}
    </div>
  );
};

export default BottomOptions;
