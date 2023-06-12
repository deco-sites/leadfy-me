import { forwardRef } from "preact/compat";
import type { JSX } from "preact";

export type Props = Omit<JSX.IntrinsicElements["button"], "loading"> & {
  buttonType?: string;
};

const common =
  "w-full h-[54px] font-['clash_grotesk_regular'] font-bold tracking-[2px] text-base border border-[#1B1B1B] transition-[color,background-color,padding,border,box-shadow] durantion-300 linear";
const primary =
  "bg-[#DAFF01] hover:bg-[#1B1B1B] hover:border hover:border-[#1B1B1B] hover:text-[#DAFF01] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]";
const secondary =
  "bg-[#1B1B1B] text-[#FDFFF1] hover:bg-[#FDFFF1] hover:border hover:border-[#1B1B1B] hover:text-[#1B1B1B] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]";

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { type = "button", class: _class = "", buttonType = "primary", ...props },
    ref,
  ) => {
    const buttonClass = buttonType === "primary" ? primary : secondary;

    return (
      <button
        {...props}
        className={`custom-button flex items-center justify-center max-md:h-full max-md:w-[300px] max-md:pt-[60px] max-md:px-[25px] ${_class} ${common} ${buttonClass}]`}
        type={type}
        ref={ref}
      />
    );
  },
);

export default Button;
