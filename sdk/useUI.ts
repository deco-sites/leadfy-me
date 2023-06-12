import { signal } from "@preact/signals";

const displayMenu = signal(false);
const isScrolled = signal(false);
const isLoaded = signal(false);
const investimentBarCurrentValue = signal(0);

const scrollEvent = () => {
  return (isScrolled.value = globalThis.scrollY > 115);
};

globalThis.addEventListener("scroll", scrollEvent);
globalThis.addEventListener("load", () => {
  scrollEvent();
  isLoaded.value = true;
});

const state = {
  isScrolled,
  displayMenu,
  isLoaded,
  investimentBarCurrentValue,
};

export const useUI = () => state;
