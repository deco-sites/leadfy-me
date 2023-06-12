export interface INavItem {
  label: string;
  href: string;
}

export interface Props {
  item: INavItem;
  onClick: () => void;
}

function NavItem({ item, onClick }: Props) {
  const { href, label } = item;

  const handleClick = (event: MouseEvent) => {
    const href = (event.currentTarget as HTMLElement).getAttribute("href");

    if (!href?.startsWith("#")) return;

    event.preventDefault();

    const element = document.getElementById(href.replace("#", ""));

    window.scroll({
      behavior: "smooth",
      left: 0,
      top: (element?.offsetTop ?? 0) - 70,
    });

    onClick();
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        class="font-['clash_grotesk_regular'] font-semibold text-[#1B1B1B] text-[20px]  block relative p-3 m-0 transition-[color] duration-200 ease-in-out tracking-[.03em] uppercase antialiased max-md:font-normal max-md:leading-[1.5em] max-md:py-[12px]"
      >
        {label}
      </a>
    </li>
  );
}

export default NavItem;
